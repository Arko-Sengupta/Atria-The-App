# Atria Health — The Future Of Preventive Medicine

A Modern, Responsive Single Page Application Built For Atria Health, Showcasing Their Preventive Medicine Practice, Research Institute, Health Education Library, And Public Health Initiatives.

## Tech Stack

- **React** 19.2 — Component Based UI Library
- **Vite** 7.3 — Next Generation Frontend Build Tool
- **React Router DOM** 7.13 — Client Side Routing
- **CSS Custom Properties** — Theming And Design System
- **ESLint** — Code Quality And Linting

## Project Structure

```
Atria-Demo/
├── Data/                          # Static JSON Data Files
├── Public/                        # Public Assets
├── Src/
│   ├── Components/                # Reusable UI Components
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── Hooks/                     # Custom React Hooks
│   │   └── UseScrollReveal.js
│   ├── Pages/                     # Route Level Page Components
│   │   ├── Home.jsx
│   │   ├── Institute.jsx
│   │   ├── Doctors.jsx
│   │   ├── Education.jsx
│   │   ├── Research.jsx
│   │   ├── PublicHealth.jsx
│   │   ├── OurStory.jsx
│   │   ├── Locations.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Terms.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── PrivacyPractices.jsx
│   ├── Styles/                    # Separated CSS Stylesheets
│   │   ├── Global.css
│   │   ├── Components/
│   │   └── Pages/
│   ├── App.jsx                    # Application Routes And Layout
│   └── Main.jsx                   # Application Entry Point
├── index.html                     # HTML Entry Point
├── vite.config.js                 # Vite Configuration
└── package.json                   # Project Dependencies
```

## Features

- **Preventive Medicine Platform** — Comprehensive Overview Of Atria Health Institute's Membership Based Practice
- **Doctor Directory** — Filterable Directory Of 50+ Physicians Across 15+ Specialties
- **Health Education Library** — Filterable Content Library With Articles, Videos, And Guides
- **Research Institute** — Showcase Of 100+ Distinguished Research Fellows And Strategic Pillars
- **Public Health Initiatives** — Non Profit Partnerships Addressing Healthcare Equity
- **Multi Location Support** — Location Pages With Directions, Hours, And Contact Information
- **Responsive Design** — Fully Responsive Across Mobile, Tablet, And Desktop Breakpoints
- **Scroll Reveal Animations** — Intersection Observer Based Reveal Animations
- **Glass Morphism Navbar** — Frosted Glass Navigation With Dropdown Menus
- **Contact Forms** — Integrated Contact Forms Across Multiple Pages
- **Newsletter Subscription** — Email Subscription Integration

## Getting Started

### Prerequisites

- **Node.js** 18 Or Higher
- **npm** 9 Or Higher

### Installation

```bash
git clone https://github.com/your-username/Atria-Demo.git
cd Atria-Demo
npm install
```

### Development

```bash
npm run dev
```

Opens The Development Server At `http://localhost:5173`

### Production Build

```bash
npm run build
```

Outputs Optimized Static Files To The `Dist/` Directory

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Design System

- **Typography** — Playfair Display For Headings, Inter For Body Text
- **Color Palette** — Deep Greens And Neutrals Reflecting Health And Wellness
- **Spacing** — Consistent Spacing Scale Using CSS Custom Properties
- **Breakpoints** — 480px, 768px, 960px, 1024px, 1200px
- **Animations** — Respects `prefers-reduced-motion` For Accessibility

## Architecture

- **Arrow Function Components** — All Components Use Arrow Function Syntax
- **Separated Concerns** — CSS And JSX Live In Distinct Directory Trees
- **Externalized Data** — All Static Content Extracted To JSON Data Files
- **PascalCase Convention** — File Names, Directory Names, Function Names, And JSON Keys Follow PascalCase
- **BEM CSS Naming** — Block Element Modifier Pattern For CSS Class Names
- **Custom Hooks** — Reusable Logic Encapsulated In Custom React Hooks

## License

This Project Is Private And Proprietary To Atria Health LLC.