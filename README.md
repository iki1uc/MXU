## PIPELINE
Die vollständige MXU‑Pipeline lautet:


### PX (Receiver‑Ebene)
- Eingangsschicht für **index.html**, **go.html**, **ch.html**
- nimmt Rohdaten, Räume, Achsen und Zustände entgegen
- erzeugt das PX‑Signal für die Pipeline

### respo (Text‑Analyse)
- filtert, segmentiert und normalisiert Eingaben
- erzeugt PX‑kompatible Datenpakete
- bildet die Vorstufe für EVO‑Frames

### evo (EVO‑Analyse)
- erkennt Muster, Struktur und Achsen‑Bezüge
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
- kompatibel mit **MXU‑CORE**
Die vollständige MXU‑Pipeline lautet:
## PIPELINE
Die vollständige MXU‑Pipeline lautet:

PX → respo → evo → AXINXA → MXU Channel
