# Przykładowe definicje w formacie `editor/defaultData` (engine.json)

Plik `sample_engine.json` zawiera **4 przykładowe definicje** (z różnych kategorii)
w dokładnie takim formacie, w jakim występują w `engine.json → editor/defaultData.definitions[]`.

## Struktura jednej definicji

| Pole | Typ | Opis |
|------|-----|------|
| `id` | string | Stały identyfikator (np. `def001`). Nie edytowany przez nauczyciela (ukryty). |
| `enabled` | boolean | Czy pojęcie jest aktywne (losowane na kole). |
| `pojecie` | string | Pojęcie (definiendum), np. „Mapa". |
| `kategoria` | string | Identyfikator kategorii (np. `geografia`) — w edytorze wybierany z listy. |
| `poprawnaSekwencja` | string | Cała poprawna definicja jako zdanie; **słowa oddzielone spacją**. |
| `dostepneSlowa` | string | Pula słów w banku (poprawne + mylące); **słowa oddzielone spacją**. |
| `slowaOpcjonalne` | string | Słowa, które można pominąć (np. „jest"); **oddzielone spacją**. |
| `blokiObowiazkowe` | string | Grupy słów, które muszą stać obok siebie; **grupy oddzielone `;`**, słowa w grupie spacją. |
| `frazyZamienne` | string | Grupy słów o dopuszczalnym szyku zamiennym; **grupy oddzielone `;`**, słowa w grupie spacją. |
| `komunikatSukcesu` | string | Komunikat po poprawnej odpowiedzi. |
| `pulapki` | string | Pary „fraza + komunikat"; **format `fraza :: komunikat`**, kolejne pułapki **oddzielone ` \|\| `**. |

## Konwencja separatorów (podsumowanie)

- Listy słów (`poprawnaSekwencja`, `dostepneSlowa`, `slowaOpcjonalne`) → **spacja**.
- Grupy (`blokiObowiazkowe`, `frazyZamienne`) → **średnik `;`** między grupami, spacja w grupie.
- Pułapki (`pulapki`) → **` :: `** między frazą a komunikatem, **` || `** między kolejnymi pułapkami.

Puste pole (brak danych) = pusty string `""`.

> Uwaga: pola treści są stringami z separatorami, ponieważ edytor ZPE nie obsługuje
> tablic z dodawaniem/usuwaniem elementów — pojedyncze pole tekstowe jest jedyną
> formą, którą edytor renderuje wygodnie. Rozłożenie stringów na struktury robi już
> sama gra przy wczytaniu.
