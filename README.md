# URIG ENGELBERGERTAL Website

Ein statische Website für die Association URIG ENGELBERGERTAL mit Fokus auf Vereinsinformationen und Kontakt.

## Struktur

```
urig_engelbergertal/
├── index.html          # Hauptseite mit allen Sektionen
├── style.css           # Responsive Stylesheet
├── script.js           # JavaScript für Interaktivität
├── images/             # Bildverzeichnis
│   ├── logo.png
│   ├── hero-willkommen.jpg
│   ├── vision.jpg
│   ├── wirken.jpg
│   └── verein.jpg
└── README.md           # Diese Datei
```

## Sektionen

1. **Willkommen** - Hero-Bereich mit Willkommenstext
2. **Vision** - Visionserklärung mit Bild
3. **Unser Wirken** - Beschreibung der Aktivitäten und Ansätze
4. **Verein** - Vereinsinformationen
5. **Kontakt** - Kontaktformular und Kontaktinformationen

## Installation & Verwendung

1. Clone das Repository:
   ```bash
   git clone https://github.com/swisswin/urig_engelbergertal.git
   cd urig_engelbergertal
   ```

2. Erstelle einen `images/` Ordner im Root-Verzeichnis

3. Lade folgende Bilder hoch:
   - `logo.png` - Logo der Association (empfohlene Größe: 200x200px)
   - `hero-willkommen.jpg` - Hero-Bild für Willkommenssektion (empfohlene Größe: 1920x600px)
   - `vision.jpg` - Bild für Vision-Sektion
   - `wirken.jpg` - Bild für Unser Wirken-Sektion
   - `verein.jpg` - Bild für Verein-Sektion

4. Öffne `index.html` im Browser oder deploye auf einen Webserver

## Anpassungen

### Kontaktinformationen aktualisieren
Bearbeite folgende Elemente in `index.html`:
- `id="kontakt-adresse"` - Adresse einfügen
- `id="kontakt-telefon"` - Telefonnummer einfügen
- Email-Link in der Kontaktsektion

### Farben ändern
Die Hauptfarbe (#2d5016) kann in `style.css` global geändert werden:
```css
.header, .section-header h2, .cta-button { color: #2d5016; }
```

### Facebook-Link
Passe den Facebook-Link in `index.html` an:
```html
<a href="https://www.facebook.com/deine-seite" target="_blank" class="social-icon facebook">
```

### Vereinstext
Ersetze "Vereinstext noch offen" in der Verein-Sektion mit dem finalen Text

## Responsive Design

Die Website ist vollständig responsive und funktioniert auf:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (unter 768px)

## Browser-Kompatibilität

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## Lizenz

© 2026 URIG ENGELBERGERTAL. Alle Rechte vorbehalten.
