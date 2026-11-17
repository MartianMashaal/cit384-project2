# CIT 384 Project 2 — GigaPet

[Play GigaPet](https://martianmashaal.github.io/cit384-project2/)

Take care of Nori, a virtual cat. This project builds on the provided HTML, CSS, and JavaScript starter code.

| Action | Weight | Happiness | Other effect |
| --- | --- | --- | --- |
| Treat | +1 lb | +5 | — |
| Play | -1 lb | +4 | — |
| Exercise | -2 lb | -3 | — |
| Teach high five | No change | +10 | Learns one trick; available once |

Weight cannot go below zero. Happiness stays between 0 and 100. Each action displays a comment from Nori, chosen from an array. Refreshing the page starts a new game.

## jQuery methods

- [`.one()`](https://api.jquery.com/one/) runs the high-five lesson's click handler once.
- [`.replaceWith()`](https://api.jquery.com/replaceWith/) replaces the completed lesson button with a disabled “High five learned!” button.

Both methods are explained in comments in `script.js`.

## Files

- `index.html` — page structure and controls
- `style.css` — desktop and mobile layout
- `script.js` — pet object, actions, value checks, and responses
- `images/nori.svg` — original cat illustration
- `vendor/jquery-3.7.1.min.js` — local copy of jQuery so the game can run offline

Open `index.html` in Chrome or use VS Code Live Server.

Mashaal Jan
