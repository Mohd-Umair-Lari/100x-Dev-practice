# 100x-Dev-practice

This repository currently contains a small static frontend project in `simple-zerodha/`.

## Codebase overview

The app is a simple landing page built with plain HTML and CSS.

### Main files

- `simple-zerodha/index.html`  
  The entry point for the page. It defines:
  - the top navigation bar
  - the hero image section
  - the heading, subtitle, and call-to-action button

- `simple-zerodha/static/css/style.css`  
  The only stylesheet. It contains:
  - global resets and base typography
  - reusable utility classes
  - navbar styling
  - hero section styling
  - button and link styling

- `simple-zerodha/logo.svg`  
  Logo used in the navbar.

- `simple-zerodha/photo.png`  
  Hero image shown in the main section.

## How the page is structured

`index.html` links to `static/css/style.css`, then renders the page in three main parts:

1. **Navbar** (`.navbar`)  
   Shows the Zerodha logo and menu items like Signup, About, Contact, Services, and Support.

2. **Hero image** (`.hero-section`)  
   Displays the main product image.

3. **Hero content and CTA** (`.hero-content`, `.hero-cta`)  
   Shows the main heading, supporting text, and a sign-up button.

## How styling is organized

The stylesheet is grouped into sections:

- **General styles** for resets and base layout
- **Utility classes** for alignment and spacing
- **Header/Navbar styles** for the top bar
- **Hero section styles** for the image and text content

## How to run it

There is no build step or framework setup. Open `simple-zerodha/index.html` in a browser to view the page.
