
### PX (Receiver‑Ebene)
- Eingangsschicht für **index.html**, **go.html**, **ch.html**
- nimmt Rohdaten, Räume, Achsen und Zustände entgegen
- bildet die Start‑Instanz für alle MXU‑Moves

### respo (Text‑Analyse)
- Filtert, normalisiert und segmentiert Eingaben
- erzeugt PX‑kompatible Datenpakete
- bildet die Vorstufe für EVO‑Analyse

### evo (EVO‑Analyse)
- erkennt Muster, Struktur, Achsen‑Bezüge
- bereitet Daten für AXINXA vor
- erzeugt stabile EVO‑Frames

### AXINXA (Achsen + Moves)
- trägt die Achsen **AX**, **IS**, **XA**
- führt die Moves **MX**, **UX**, **IU** aus
- bildet die technische Kernschicht des Systems

### MXU Channel (Endpunkt)
- finaler Bewegungs‑Kanal
- erzeugt Raum‑Instanzen (root / axis / room)
- bildet die neutrale Bewegungs‑Ebene des MXU‑Systems

### Eigenschaften der Pipeline
- vollständig neutral  
- case‑sensitive  
- Root‑gebunden  
- ohne Autonomie  
- ohne Systemgefahr  
- kompatibel mit **[MXU‑CORE](ca://s?q=MXU_CORE_erklären)**  
