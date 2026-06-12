# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website for Sreedhar Chikatla. No build system, bundler, or package manager — just plain HTML, CSS, and vanilla JavaScript served as-is.

## Deployment

Deployed to **Azure Static Web Apps** via GitHub Actions on push to `main`. Two workflow files exist in `.github/workflows/` for two separate Azure environments. The `app_location` is `/` and `output_location` is `.` (no build step).

## Development

Open any `.html` file directly in a browser, or use any static file server:

```
python3 -m http.server 8000
```

There is no build, lint, or test step.

## Architecture

- **Pages**: `index.html` (home), `aboutme.html`, `projects.html`, `contact.html`, `login.html`
- **assets/css/**: `style.css` + `style2.css` (main site), `login.css`, `dashboard.css`, `main.css` (login page utilities)
- **assets/js/script.js**: Dark/light theme toggle using CSS custom properties and localStorage
- **assets/js/util.js**: Empty placeholder
- **assets/img/**: Static images
- **assets/fonts/**: Font Awesome webfont files

The typing animation on the homepage is inline in `index.html` (not in a separate JS file).

jQuery 3.6.3 is loaded from CDN on the main pages. The login page references local `js/` scripts (bootstrap, popper) that do not exist in the repo — it relies on the Azure B2C / cloud login redirect instead.
