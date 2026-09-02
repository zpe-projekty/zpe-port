## Dokumentacja dla programistów – pliki `schema.json`, `engine.json`, `scenario.json`

Dokument opisuje, jak przygotować pliki konfiguracyjne, z których korzysta edytor danych gry:

- `schema.json` – definicja struktury danych i konfiguracji pól edytora,
- `engine.json` – właściwe dane gry, które użytkownik edytuje,
- `scenario.json` – dodatkowe dane gry, do których można się odwoływać z `engine.json` (np. odpowiedzi rebusów).

Dokument nie opisuje implementacji edytora ani jego interfejsów – skupia się wyłącznie na formacie plików.

---

## Ogólny model danych

- Edytor budowany jest na podstawie `schema.json`.
- Na podstawie schematu edytor otwiera i modyfikuje dane z `engine.json`.
- Niektóre pola w `engine.json` mogą być powiązane z danymi z innych plików (np. `scenario.json`) za pomocą typu `ref`.

Edytor bezpośrednio pozwala edytować tylko wartości typów:

- `number`
- `string`
- `boolean`

Pozostałe typy (`object`, `array`, `ref`) służą do organizacji i powiązań danych.

---

## Typy danych w schemacie

Obsługiwane typy:

- numeryczny (`number`) – w edytorze pole `input` (liczbowe),
- tekstowy (`string`) – w edytorze:
    - zwykłe pole `input`, lub
    - `combo box` (lista rozwijana), jeśli zdefiniowano `enum`,
- logiczny (`boolean`) – w edytorze `checkbox`,
- obiektowy (`object`) – zagnieżdżony obiekt z własnymi właściwościami,
- tablicowy (`array`) – lista elementów tego samego typu,
- odwołanie (`ref`) – wartość pobierana z innego pliku danych.

---

## Plik `schema.json`

### Struktura główna

Przykładowy szkielet:

```json
{
    "definitions": {
        "...": {}
    },
    "properties": {
        "...": {}
    }
}
```

Najważniejsze sekcje:

- `"definitions"` – słowniki pomocnicze (np. listy wartości dla pól typu `string` z `enum`).
- `"properties"` – główne właściwości danych, odpowiadające strukturze w `engine.json`.

### 1. Sekcja `definitions` (słowniki / enum-y)

Służy do definiowania słowników, które mogą być używane jako `enum` w polach tekstowych.

Przykład:

```json
"definitions": {
  "styles": {
    "classic": "Klasyczny",
    "modern": "Nowoczesny",
    "retro": "Retro"
  }
}
```

- Klucze (`classic`, `modern`, `retro`) – wartości przechowywane w danych (`engine.json`).
- Wartości (`"Klasyczny"`, `"Nowoczesny"`, `"Retro"`) – etykiety wyświetlane w edytorze.

Aby użyć takiego słownika:

```json
"style": {
  "type": "string",
  "enum": "styles",
  "label": "Styl rebusu"
}
```

Tutaj `enum` wskazuje nazwę z `definitions`.

Można też zdefiniować `enum` lokalnie, bez `definitions`:

```json
"mode": {
  "type": "string",
  "enum": {
    "easy": "łatwy",
    "medium": "średni",
    "hard": "trudny"
  },
  "label": "Tryb"
}
```

### 2. Sekcja `properties` (drzewo danych)

Opisuje strukturę edytowanych danych. Przykład (fragment):

```json
"properties": {
  "playTime": {
    "type": "number",
    "format": "integer",
    "min": 1,
    "max": 10000,
    "label": "Całkowity czas gry (w minutach)"
  },
  "rebuses": {
    "type": "object",
    "properties": {
      "numberOfRebusesToSolve": { ... },
      "mode": { ... },
      "timeLimitPerRebus": { ... },
      "rebuses": { ... }
    }
  }
}
```

Najczęściej używane pola konfiguracyjne dla każdego wpisu:

- `type` – typ (`number`, `string`, `boolean`, `object`, `array`, `ref`),
- `label` – etykieta pola w edytorze,
- `help` – podpowiedź/opis (np. wyświetlany jako tooltip),
- `format` – np. `"integer"` dla liczb całkowitych,
- `min`, `max` – ograniczenia zakresu dla `number`,
- `private` (`true/false`) – pole techniczne, które nie powinno być edytowane.

---

## Typy złożone: `object` i `array`

### `object`

Pozwala grupować pola w pod-obiekt:

```json
"rebuses": {
  "type": "object",
  "properties": {
    "numberOfRebusesToSolve": {
      "type": "number",
      "format": "integer",
      "min": 1,
      "label": "Liczba rebusów do rozwiązania"
    },
    "mode": {
      "type": "string",
      "enum": {
        "easy": "łatwy",
        "medium": "średni",
        "hard": "trudny"
      },
      "label": "Tryb"
    }
  }
}
```

### `array`

Opisuje listę elementów. Każdy element jest opisany w polu `item`:

```json
"rebuses": {
  "type": "array",
  "item": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "private": true
      },
      "enabled": {
        "type": "boolean",
        "label": "Włączony"
      }
    }
  }
}
```

- Edytor wyświetla listę elementów z możliwością dodawania/usuwania.
- `id` może być użyte jako klucz powiązania z `scenario.json` i zwykle jest oznaczone jako `private`.

---

## Typ `ref` i ścieżka `path`

Typ `ref` pozwala powiązać wartość z innym plikiem danych, np. `scenario.json`.

Przykład 1: dane w `scenario.json` jako **tablica**:

```json
"answer": {
  "type": "ref",
  "path": "scenario.json#/rebuses/[{id:${id}}]/answer",
  "label": "Odpowiedź"
}
```

Struktura odpowiadająca w `scenario.json`:

```json
{
  "rebuses": [
    { "id": "rebus1", "answer": "rebus1" },
    { "id": "rebus2", "answer": "rebus2" },
    ...
  ]
}
```

Wyjaśnienie ścieżki:

- `scenario.json` – plik, z którego bierzemy dane,
- po `#` – ścieżka w strukturze JSON:
    - `/rebuses/` – wejście do tablicy,
    - `[{id:${id}}]` – znajdź element tablicy, którego pole `id` ma taką samą wartość, jak pole `id` w edytowanym obiekcie,
    - `/answer` – pobierz z tego elementu pole `answer`.

Przykład 2: dane w `scenario.json` jako **obiekt-słownik**:

```json
"answer": {
  "type": "ref",
  "path": "scenario.json#/rebuses/${id}/answer",
  "label": "Odpowiedź"
}
```

Odpowiadająca struktura w `scenario.json`:

```json
{
  "rebuses": {
    "rebus1": { "answer": "rebus1" },
    "rebus2": { "answer": "rebus2" },
    ...
  }
}
```

Wyjaśnienie ścieżki:

- `/rebuses/` – wejście do obiektu-słownika,
- `${id}` – użyj wartości pola `id` (z `engine.json`) jako nazwy klucza (`"rebus1"`, `"rebus2"`, …),
- `/answer` – pobierz pole `answer` z wybranego wpisu.

---

## Plik `engine.json`

`engine.json` zawiera właściwe dane gry, które będą edytowane.

Typowa struktura:

```json
{
  "defaultData": {
    "playTime": 60,
    "rebuses": {
      "numberOfRebusesToSolve": 3,
      "mode": "medium",
      "timeLimitPerRebus": 120,
      "rebuses": [
        { "id": "rebus1", "enabled": true, "style": "classic" },
        { "id": "rebus2", "enabled": true, "style": "modern" },
        ...
      ]
    }
  }
}
```

Zasady:

- Klucz `defaultData` zawiera dane, które edytor wczyta i udostępni do modyfikacji.
- Struktura wewnątrz `defaultData` musi odpowiadać strukturze z `schema.json` (klucze, typy danych, zagnieżdżenie).
- Dla pól powiązanych z `scenario.json` (przez `ref`) przechowywana jest zwykle tylko wartość klucza (np. `id`), a sama treść (`answer`) pochodzi z `scenario.json`.

---

## Plik `scenario.json`

`scenario.json` przechowuje dane, do których odwołujemy się z `engine.json`.

Dwa główne warianty struktury `rebuses`:

### 1. Tablica obiektów (używana z `[{id:${id}}]`)

```json
{
  "rebuses": [
    { "id": "rebus1", "answer": "rebus1" },
    { "id": "rebus2", "answer": "rebus2" },
    ...
  ]
}
```

W `schema.json`:

```json
"answer": {
  "type": "ref",
  "path": "scenario.json#/rebuses/[{id:${id}}]/answer",
  "label": "Odpowiedź"
}
```

### 2. Obiekt-słownik (używany z `${id}`)

```json
{
  "rebuses": {
    "rebus1": { "answer": "rebus1" },
    "rebus2": { "answer": "rebus2" },
    ...
  }
}
```

W `schema.json`:

```json
"answer": {
  "type": "ref",
  "path": "scenario.json#/rebuses/{id}/answer",
  "label": "Odpowiedź"
}
```

Wybór wariantu zależy od tego, czy chcesz:

- przeszukiwać tablicę po polu (`[{id:${id}}]`),
- czy od razu używać identyfikatorów jako kluczy (`${id}`).

---

## Dobre praktyki

- **Identyfikatory techniczne**:
    - Pola takie jak `id` oznaczaj jako `"private": true`, aby użytkownik nie modyfikował ich przez edytor.
- **Zakresy liczb**:
    - Dla pól `number` ustawiaj sensowne `min` i `max`.
- **Etykiety i pomoc**:
    - Dla każdego pola ustawiaj `label`, a tam gdzie to potrzebne – `help` z krótkim opisem.
- **Enum-y i słowniki**:
    - Gdy ten sam zestaw wartości występuje w wielu miejscach, definiuj go raz w `definitions` i odwołuj się za pomocą `enum: "nazwa"`.
- **Spójność struktury**:
    - Upewnij się, że:
        - klucze i struktury w `engine.json` odpowiadają definicjom z `schema.json`,
        - struktura w `scenario.json` jest zgodna ze składnią ścieżek `path` w polach typu `ref`.

Jeśli chcesz, w kolejnym kroku mogę przygotować gotowe „szablony startowe” (`schema.json`, `engine.json`, `scenario.json`) dla nowego typu konfiguracji gry na bazie tej konwencji.
