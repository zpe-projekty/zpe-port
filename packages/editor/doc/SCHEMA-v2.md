## Dokumentacja dla programistów – pliki `schema.json`, `engine.json`, `scenario.json`

Dokument opisuje, jak przygotować pliki konfiguracyjne, z których korzysta edytor danych gry:

- `schema.json` – definicja struktury danych i konfiguracji pól edytora,
- `engine.json` – właściwe dane gry, które użytkownik edytuje,
- `scenario.json` – dodatkowe dane gry, do których można się odwoływać z `engine.json` (np. odpowiedzi rebusów).

Dokument nie opisuje implementacji edytora ani jego interfejsów – skupia się wyłącznie na formacie plików.

---

## Ogólny model danych

- Edytor budowany jest na podstawie `schema.json`.
- Na podstawie schematu edytor otwiera i modyfikuje dane pochodzące z `engine.json`.
- Niektóre pola w `engine.json` mogą być powiązane z danymi z innych plików (np. `scenario.json`) za pomocą typu `ref`.

Edytor bezpośrednio pozwala edytować tylko wartości typów:

- `number`
- `string`
- `boolean`

Pozostałe typy (`object`, `array`, `ref`, `id` i `message`) służą do organizacji i powiązań danych.

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
- odwołanie (`ref`) – wartość pobierana z innego pliku danych,
- identyfikator (`id`) – unikalny identyfikator obiektu, niewidoczny w edytorze.

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

Aby użyć takiego słownika w polu `style`, należy ustawić `enum` na nazwę słownika z `definitions`.

```json
"style": {
  "type": "string",
  "enum": "styles",
  "label": "Styl rebusu"
}
```

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
    "options": {
        "type": "object",
        "title": "Opcje",
        "help": "Ustawienia ogólne gry, które wpływają na jej przebieg i dostępne funkcje.",
        "properties": {
            "playTime": {
                "type": "number",
                "format": "integer",
                "min": 1,
                "max": 10000,
                "label": "Całkowity czas gry (w minutach)"
            },
            "numberOfRebusesToSolve": {
                "type": "number",
                "format": "integer",
                "min": 1,
                "max": 100,
                "label": "Liczba rebusów do rozwiązania"
            }
        }
    }
}
```

W powyższym przykładzie sekcja `options` zawiera dwa pola: `playTime` i `numberOfRebusesToSolve`. Każde z nich jest typu `number` i posiada dodatkowe ograniczenia oraz etykietę wyświetlaną w edytorze. Sekcja `options` jako całość jest typu `object` i grupuje powiązane ustawienia gry. Dzięki temu edytor może wyświetlać je w logicznie powiązanej sekcji, ułatwiając użytkownikowi konfigurację gry.

Przedstawiony przykład mapuje następującą strukturę danych w `engine.json`:

```json
{
    "options": {
        "playTime": 60,
        "numberOfRebusesToSolve": 10
    }
}
```

### Podstawowe typy danych

```ts
export interface Schema {
    definitions: Record<string, any>;
    properties: Record<string, any>;
}

export type SchemaElement =
    | SchemaElementObject
    | SchemaElementArray
    | SchemaElementString
    | SchemaElementNumber
    | SchemaElementBoolean
    | SchemaElementRef
    | SchemaElementId
    | SchemaElementMessage;

export interface SchemaElementBase {
    private?: boolean;
    label?: string;
    help?: string;
    helpFile?: string;
}
```

### Typ `string`

Reprezentuje pola tekstowe w edytorze. Przykład:

Definicja:

```ts
export interface SchemaElementString extends SchemaElementBase {
    type: "string";
    enum?: string | Record<string, string>;
    multiline: number;
    default?: string;
    placeholder?: string;
    pattern?: string;
    patternMessage?: string;
}
```

Gdzie:

- `type` – zawsze `"string"`.
- `enum` – opcjonalny słownik wartości i etykiet. Jeżeli jest zdefiniowany, pole w edytorze będzie ograniczone do wyboru jednej z tych wartości.
- `multiline` – liczba wierszy pola tekstowego. Jeżeli wartość jest większa niż 1, pole będzie wyświetlane jako wielowierszowe. Domyślna wartość to 1.
- `default` – wartość domyślna. Ma zastosowanie, gdy użytkownik tworzy nowe pole w edytorze.
- `placeholder` – tekst podpowiedzi w polu tekstowym.
- `pattern` – wyrażenie regularne do walidacji. Jeżeli wartość nie spełnia wzorca, pod polem wyświetlany będzie komunikat z `patternMessage`.
- `patternMessage` – komunikat wyświetlany w przypadku niezgodności z `pattern`.
- `private` – określa, czy pole jest prywatne (niewidoczne i nieedytowalne przez użytkownika).
- `label` – etykieta wyświetlana w edytorze.
- `help` – tekst pomocy wyświetlany w edytorze. Jeżeli jest zdefiniowany, będzie dostępny dla użytkownika w postaci przycisku pomocy.
- `helpFile` – opcjonalna ścieżka do pliku pomocy w formacie Markdown - zastępuje zawartość pola `help`, jeżeli jest zdefiniowana.

Przykład podstawowy:

```json
{
    "type": "string",
    "label": "Pytanie",
    "default": "",
    "placeholder": "Tutaj wpisz pytanie"
}
```

Przykład z uzyciem `enum`:

```json
{
    "type": "string",
    "label": "Wybierz opcję",
    "enum": {
        "option1": "Opcja 1",
        "option2": "Opcja 2",
        "option3": "Opcja 3"
    },
    "default": "option1"
}
```

### Typ `number`

Reprezentuje pola liczbowe w edytorze. Przykład:

Definicja:

```ts
export interface SchemaElementNumber extends SchemaElementBase {
    type: "number";
    format?: "integer" | "float" | "number";
    min?: number;
    max?: number;
    default?: number;
}
```

Gdzie:

- `type` – zawsze `"number"`.
- `format` – opcjonalny format liczby. Może przyjmować wartości `"integer"` (liczba całkowita), `"float"` (liczba zmiennoprzecinkowa) lub `"number"` (dowolna liczba).
- `min` – opcjonalna minimalna wartość liczby.
- `max` – opcjonalna maksymalna wartość liczby.
- `default` – opcjonalna wartość domyślna. Ma zastosowanie, gdy użytkownik tworzy nowe pole w edytorze.
- `private` – określa, czy pole jest prywatne (niewidoczne i nieedytowalne przez użytkownika).
- `label` – etykieta wyświetlana w edytorze.
- `help` – tekst pomocy wyświetlany w edytorze. Jeżeli jest zdefiniowany, będzie dostępny dla użytkownika w postaci przycisku pomocy.
- `helpFile` – opcjonalna ścieżka do pliku pomocy w formacie Markdown - zastępuje zawartość pola `help`, jeżeli jest zdefiniowana.

Przykład podstawowy:

```json
{
    "type": "number",
    "label": "Ilość pytań w sesji",
    "format": "integer",
    "min": 1,
    "max": 100,
    "default": 10
}
```

### Typ `boolean`

Reprezentuje pola logiczne (prawda/fałsz) w edytorze. Przykład:

Definicja:

```ts
export interface SchemaElementBoolean extends SchemaElementBase {
    type: "boolean";
    default?: boolean;
}
```

Gdzie:

- `type` – zawsze `"boolean"`.
- `default` – opcjonalna wartość domyślna. Ma zastosowanie, gdy użytkownik tworzy nowe pole w edytorze.
- `private` – określa, czy pole jest prywatne (niewidoczne i nieedytowalne przez użytkownika).
- `label` – etykieta wyświetlana w edytorze.
- `help` – tekst pomocy wyświetlany w edytorze. Jeżeli jest zdefiniowany, będzie dostępny dla użytkownika w postaci przycisku pomocy.
- `helpFile` – opcjonalna ścieżka do pliku pomocy w formacie Markdown - zastępuje zawartość pola `help`, jeżeli jest zdefiniowana.

Przykład podstawowy:

```json
{
    "type": "boolean",
    "label": "Czy włączyć tryb zaawansowany",
    "default": false
}
```

### Typ `id`

Reprezentuje pola identyfikatorów w edytorze. Pole jest zawsze niewidoczne i nieedytowalne przez użytkownika.

Definicja:

```ts
export interface SchemaElementId extends SchemaElementBase {
    type: "id";
    path?: string;
}
```

Gdzie:

- `type` – zawsze `"id"`.
- `path` – opcjonalna ścieżka do identyfikatora. Zasada jest taka sama jak przy polach typu `ref`. Ma główne zastosowanie w połączeniu z typem `array` i pozwala na pokazanie listy wartości z innego pliku które są powiązane z danym identyfikatorem.

Przykład podstawowy:

```json
{
    "type": "id"
}
```

Przykład z `path` w połączeniu z typem `array`. Ten przykład pokazuje, jak można powiązać elementy tablicy z identyfikatorami z innego pliku JSON. W tym przypadku każde pytanie w tablicy `questions` ma swoje unikalne `id` zdefiniowany w 'engine.json' w postaci tablicy, a treści pytań są pobierane z 'scenario.json' na podstawie tych identyfikatorów. Użytkownik widzi tylko listę pytań z możliwością zmiany kolejności. W `defaultData` zapamiętywane są tylko identyfikatory pytań.

```json
    "questions": {
        "type": "array",
        "label": "Pytania do rebusu - przez ref",
        "reorderable": true,
        "editable": false,
        "item": {
            "type": "id",
            "path": "scenario.json#/questions/[{id:${id}}]/text"
        }
    }
```

```json engine.json
{
    "defaultData": {
        "questions": ["id1", "id2", "id3"]
    }
}
```

```json scenario.json
{
    "questions": [
        {
            "id": "id1",
            "text": "Treść pytania 1"
        },
        {
            "id": "id2",
            "text": "Treść pytania 2"
        },
        {
            "id": "id3",
            "text": "Treść pytania 3"
        }
    ]
}
```

### Typ `ref`

Reprezentuje pola referencji do danych z innych plików JSON. Umożliwia pobieranie wartości na podstawie identyfikatorów.

Definicja:

```ts
export interface SchemaElementRef extends SchemaElementBase {
    type: "ref";
    path: string;
}
```

Gdzie:

- `type` – zawsze `"ref"`.
- `path` – ścieżka do wartości w innym pliku JSON. Może zawierać odwołania do identyfikatorów.

`ref` może odwoływać się do elementów obiektu lub tablicy w innym pliku JSON. `path` zaczyna się od nazwy pliku, a następnie używa składni JSON Pointer do wskazania konkretnej wartości.

Jeżeli `path` zawiera odwołania do obiektów/wartości zawartych w obiekcie to przyjmuje format `ścieżka_do_pliku.json#/ścieżka_w_obiekcie/${id}}/pole`.

Przykład:

```json
    "questions": {
        "type": "array",
        "label": "Pytania do rebusu",
        "reorderable": true,
        "editable": false,
        "item": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "id"
                },
                "question": {
                    "type": "ref",
                    "path": "scenario.json#/questions/${id}/text"
                }
            }
        }
    }
```

```json engine.json
{
    "defaultData": {
        "questions": [
            {
                "id": "id1"
            },
            {
                "id": "id2"
            },
            {
                "id": "id3"
            }
        ]
    }
}
```

```json scenario.json
{
    "questions": {
        "id1": {
            "text": "Treść pytania 1"
        },
        "id2": {
            "text": "Treść pytania 2"
        },
        "id3": {
            "text": "Treść pytania 3"
        }
    }
}
```

Jeżeli `path` zawiera odwołania do obiektów zawartych w tablicy to przyjmuje format `ścieżka_do_pliku.json#/ścieżka_w_tablicy/[id:${id}]/pole`.

Przykład:

```json
    "questions": {
        "type": "array",
        "label": "Pytania do rebusu",
        "reorderable": true,
        "editable": false,
        "item": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "id"
                },
                "question": {
                    "type": "ref",
                    "path": "scenario.json#/questions/[id:${id}]/text"
                }
            }
        }
    }
```

```json engine.json
{
    "defaultData": {
        "questions": [
            {
                "id": "id1"
            },
            {
                "id": "id2"
            },
            {
                "id": "id3"
            }
        ]
    }
}
```

```json scenario.json
{
    "questions": [
        {
            "id": "id1",
            "text": "Treść pytania 1"
        },
        {
            "id": "id2",
            "text": "Treść pytania 2"
        },
        {
            "id": "id3",
            "text": "Treść pytania 3"
        }
    ]
}
```

### Typ `message`

Typ `message` służy do wyświetlania komunikatów użytkownikowi.

Definicja:

```ts
export interface SchemaElementMessage extends SchemaElementBase {
    type: "message";
    format?: "text" | "info" | "warning";
    message: string;
}
```

Gdzie:

- `type` - typ elementu, w tym przypadku zawsze `"message"`.
- `format` - opcjonalny format komunikatu, może przyjmować wartości `"text"`, `"info"` lub `"warning"`. Wartość ta wpływa tylko na kolor i styl wyświetlania komunikatu.
- `message` - treść komunikatu do wyświetlenia użytkownikowi, może zawierać zwykły tekst lub sformatowane informacje w formacie markdown.

Przykład:

```json
{
    "type": "message",
    "format": "info",
    "message": "To jest przykładowy komunikat."
}
```

### Typ `array`

Typ `array` służy do definiowania tablic elementów w schemacie.

Definicja:

```ts
export interface SchemaElementArray extends SchemaElementBase {
    type: "array";
    label?: string;
    reorderable?: boolean;
    editable?: boolean;
    controls?: "horizontal" | "vertical";
    item: SchemaElement;
}
```

Gdzie:

- `type` - typ elementu, w tym przypadku zawsze `"array"`.
- `label` - opcjonalna etykieta wyświetlana nad tablicą.
- `reorderable` - opcjonalna flaga określająca, czy elementy tablicy mogą być przemieszczane.
- `editable` - opcjonalna flaga określająca, czy elementy tablicy mogą być edytowane (dodawane, usuwane).
- `controls` - jeżeli jest ustawiony to widoczne będą przyciski do zmiany układu elementów tablicy, może przyjmować wartości `"horizontal"` lub `"vertical"`.
- `item` - definicja elementu tablicy, może być dowolnym elementem schematu.

Przykład:

```json
"questions": {
    "type": "array",
    "label": "Lista pytań",
    "reorderable": true,
    "editable": true,
    "item": {
        "type": "object",
        "properties": {
            "id": {
                "type": "id"
            },
            "enabled": {
                "type": "boolean",
                "default": true,
                "label": "Dostępny dla uczniów"
            },
            "question": {
                "type": "string",
                "default": "",
                "placeholder": "Wpisz treść pytania",
                "label": "Treść pytania"
            }
        }
    }
}
```

```json engine.json
{
    "defaultData": {
        "questions": [
            {
                "id": "id1",
                "question": "Ile to jest 2+2?"
            },
            {
                "id": "id2",
                "question": "Czy delfin to ryba?"
            },
            {
                "id": "id3",
                "question": "Czy koty latają?"
            }
        ]
    }
}
```

### Typ `object`

Typ `object` służy reprezentowania obiektów w schemacie. typ `object` pozwala na zdefiniowanie zestawu właściwości, z których każda może być dowolnym elementem schematu.

Definicja:

```ts
export interface SchemaElementObject extends SchemaElementBase {
    type: "object";
    properties: Record<string, SchemaElement>;
}
```

Gdzie:

- `type` - typ elementu, w tym przypadku zawsze `"object"`.
- `properties` - zestaw właściwości obiektu, z których każda może być dowolnym elementem schematu.

Przykład:

```json
"question": {
    "type": "object",
    "properties": {
        "id": {
            "type": "id"
        },
        "enabled": {
            "type": "boolean",
            "default": true,
            "label": "Dostępny dla uczniów"
        },
        "question": {
            "type": "string",
            "default": "",
            "placeholder": "Wpisz treść pytania",
            "label": "Treść pytania"
        }
    }
}
```

```json engine.json
{
    "defaultData": {
        "question": {
            "id": "id1",
            "enabled": true,
            "question": "Ile to jest 2+2?"
        }
    }
}
```
