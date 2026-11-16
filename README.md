# Love Website

This project is a romantic single-page website created to celebrate a relationship, memories, and special moments shared between two people. It is designed as a heartfelt online gift, featuring a timeline of the relationship, love notes, countdowns, photo gallery, and a warm visual theme with soft pink tones.

## Overview

The website is built with plain HTML, CSS, and JavaScript, so there is no complicated setup or dependency installation required. It is fully responsive and works well on desktop and mobile devices. The page includes:

- A hero section with a welcoming love message
- An automatic relationship counter showing time spent together
- Story cards describing how the relationship began
- Date highlights with location and memory details
- A milestone progress timeline for anniversaries and important days
- A gallery with clickable image previews
- A "reasons I love you" section
- A love letter area with random romantic messages
- Countdown timers for anniversaries and monthsary dates
- Background music toggle and floating heart animations for a romantic atmosphere

## Project structure

```text
Love_Website/
├── index.html              # Main page structure
├── css/
│   └── style.css           # Styling, layout, animations, and responsive design
├── js/
│   └── app.js              # Interactive logic for countdowns, music, gallery, and content
├── images/                 # Photo gallery and date images
├── music/                  # Background music file(s)
├── README.md               # Project documentation
└── .vscode/
    └── settings.json       # Editor configuration
```

## Main features

### 1. Relationship timeline and live counter
The site starts from a relationship date (`01.05.2026`) and automatically calculates how long the couple has been together. It displays:

- Years
- Months
- Weeks
- Days
- Hours
- Minutes
- Seconds

This data updates every second and is shown in both a compact section and a larger total summary.

### 2. Story and relationship journey
The story section tells the love story through timeline cards that include:

- How they met
- The first message or confession
- The official date of the relationship
- A short emotional note about the relationship

### 3. Date memory cards
The website includes dedicated sections for memorable dates, with each card showing:

- Date label
- Place
- Event description
- Photos

This allows the creator to personalize each memory for the couple.

### 4. Gallery and lightbox
The photo gallery supports clickable image previews. When clicked, the photo opens in a lightbox for a larger view. This creates a polished and interactive experience for viewing shared memories.

### 5. Milestones and countdowns
The website tracks romantic milestones such as:

- 100 days
- 200 days
- 6 months
- 300 days
- 1 year
- 500 days
- 2 years

It also includes the next anniversary countdown and the upcoming monthsary countdown.

### 6. Love letter and messages
A button reveals random romantic lines that can be customized to match the couple's relationship. This adds a personal and emotional touch to the website.

### 7. Music and animation
The site includes:

- A music toggle button
- A looping background audio track
- Floating heart animations
- Soft gradient backgrounds and card shadows

These details help make the page feel celebratory and affectionate.

## How to run the website

Because this is a static website, you do not need a build process or package installation.

### Option 1: Open directly
You can open `index.html` in a browser.

### Option 2: Run a local server (recommended)
From the project root, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

This is recommended because local assets like images and music are more reliably served through a web server.

## How to customize it

### Change the relationship start date
In `js/app.js`, locate:

```javascript
const START = new Date(2026, 4, 1, 0, 0, 0);
```

Update the date to your own relationship start date.

### Edit the love story text
Open `index.html` and update the content inside the story and date sections.

### Replace images
Add your own files into the `images/` folder and update the `src` attributes in `index.html`.

### Replace the music
Place your preferred audio file in the `music/` folder and update the source path in the audio tag inside `index.html`.

### Change colors and overall style
Edit the CSS variables in `css/style.css` to match your desired color palette and design theme.

## Notes

- The page is intentionally romantic and personalized, so it is best suited for a relationship gift or anniversary website.
- Some date and photo fields in the page are placeholders and can be changed to your own real dates, locations, and memories.
- If an image file is missing, the page will still continue to display the layout without breaking the design.

## License

This project is provided for personal and educational use. It can be customized and adapted for your own romantic website or gift project.

## Final message

This website is more than a simple page — it is a digital memory book built around love, appreciation, and shared time. It is designed to help express feelings in a beautiful and memorable way.
