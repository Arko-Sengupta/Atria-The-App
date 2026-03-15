<div align="center">

# Atria Health
### The Future Of Preventive Medicine

A Premium Single-Page Application for Atria Health — Medical Platform for World-Class Preventive Care.

**React 19** · **Vite 7** · **React Router 7** · **CSS Properties**

[Get Started](#getting-started) · [Features](#features) · [Architecture](#architecture) · [Design System](#design-system)

---

</div>

## About

Atria Health is a Modern, Responsive Web Application Built to Showcase a Membership-Based Preventive Medicine Practice, it's Research Institute, Health Education Library, and Public Health Initiatives. The Application is Entirely Data-Driven — All Content Lives in Structured JSON Files, Making it Trivially Extensible without Touching Component Code.

> **12 Pages · 50+ Physicians · 100+ Research Fellows · 18 Specialties · 19 Data Sources**

## Features

| Feature                       | Description                                                                |
| :---------------------------- | :------------------------------------------------------------------------- |
| **Doctor Directory**          | Filterable Directory across 15+ Specialties with Location-Based Search     |
| **Health Education Library**  | Articles, Videos, and Guides Filterable by Type and Subject                |
| **Research Institute**        | Showcase of Distinguished Fellows, Strategic Pillars, and Impact Stats     |
| **Public Health Initiatives** | Nonprofit Partnerships Tackling Healthcare Equity                          |
| **Multi-Location Support**    | Directions, Hours, Status, and Contact Info Per Location                   |
| **Glass Morphism Navbar**     | Frosted Glass Navigation with Animated Dropdown Menus                      |
| **Scroll Reveal Animations**  | Intersection Observer-Powered Reveals that Respect `prefers-reduced-motion`|
| **Contact Forms**             | Validated Forms with Newsletter Subscription Across Multiple Touchpoints   |
| **Responsive Design**         | Fluid Layouts Across Mobile, Tablet, and Desktop Breakpoints               |

## Dependencies

```
Frontend        React 19.2 + React Router DOM 7.13
Build Tool      Vite 7.3 with React Fast Refresh
Styling         CSS Custom Properties + BEM naming
Typography      DM Serif Display (headings) + Inter (body)
Data Layer      Static JSON — 19 externalized data files
Linting         ESLint 9
```

## Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** 9+

### Installation

```bash
git clone https://github.com/ArkSengupta/Atria-The-App.git
cd Atria-The-App
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build      # Outputs to Dist/
npm run preview    # Preview the production build
```

### Linting

```bash
npm run lint
```

## Architecture

```
Src/
├── Components/          Reusable UI — Navbar, Footer, ContactForm
├── Hooks/               Custom hooks — UseScrollReveal (Intersection Observer)
├── Pages/               12 route-level page components
├── Styles/
│   ├── Global.css       CSS variables, typography, reset
│   ├── Components/      Component-scoped stylesheets
│   └── Pages/           Page-scoped stylesheets
├── App.jsx              Route definitions and layout shell
└── Main.jsx             Entry point — StrictMode + BrowserRouter

Data/                    19 JSON files powering all content
```

### Key Patterns

- **Arrow function components** throughout — no class components
- **Separated concerns** — CSS and JSX live in distinct directory trees
- **Externalized data** — every piece of static content extracted to JSON
- **PascalCase convention** — files, directories, functions, and JSON keys
- **BEM CSS** — semantic, predictable class naming
- **No external state management** — local `useState` + URL-based routing keeps things simple

## Design System

### Color Palette

| Token                      | Value     | Usage                      |
| :------------------------- | :-------- | :------------------------- |
| `--color-primary`          | `#344740` | Deep green — brand identity|
| `--color-primary-light`    | `#3d5a50` | Hover states, accents      |
| `--color-primary-dark`     | `#263832` | Navbar, dark sections      |
| `--color-text`             | `#111111` | Primary body text          |
| `--color-text-secondary`   | `#333333` | Subheadings, descriptions  |

### Typography

| Role     | Font             | Size                        |
| :------- | :--------------- | :-------------------------- |
| Headings | DM Serif Display | `clamp(2rem, 5.5vw, 4rem)`  |
| Body     | Inter            | `1.05rem` base              |

### Responsive Breakpoints

```
480px → 768px → 960px → 1024px → 1200px
```

Fluid typography via CSS `clamp()`. All animations respect `prefers-reduced-motion`.

## Pages

| Route            | Page          | Highlights                                     |
| :--------------- | :------------ | :--------------------------------------------- |
| `/`              | Home          | Hero section, mission statement, health stats  |
| `/institute`     | Institute     | Membership features, image gallery, locations  |
| `/doctors`       | Doctors       | Filterable physician directory                 |
| `/research`      | Research      | Fellows, strategic pillars, impact metrics     |
| `/education`     | Education     | Content library with type/subject filters      |
| `/public-health` | Public Health | Nonprofit partnerships and equity initiatives  |
| `/our-story`     | Our Story     | Company history and leadership                 |
| `/locations`     | Locations     | Multi-location directory with hours and status |
| `/contact-us`    | Contact Us    | Contact form and office information            |

## Data Layer

All content is externalized into `Data/*.json`, making the app easy to update and scale:

```
Doctors.json             50+ physicians with specialty and location
Fellows.json             Research institute fellows
Articles.json            Educational content (articles, videos, guides)
Navigation.json          Navbar structure and link hierarchy
MembershipFeatures.json  Atria membership benefits
Specialties.json         18 medical specialties
ContactInfo.json         Office locations and email contacts
PageLocations.json       Location pages with hours and status
HomeStats.json           Health statistics with citation sources
ResearchStats.json       Research challenge metrics
Partners.json            Nonprofit partner organizations
Leaders.json             Leadership team profiles
Pillars.json             Research strategic pillars
JourneySteps.json        Patient journey phases
GalleryItems.json        Institute gallery images
PrivacyPolicy.json       Privacy policy content
PrivacyPractices.json    HIPAA practices
Terms.json               Terms of service
InstituteLocations.json  Membership location details
```

---

<div align="center">

**Built For Atria Health LLC** · Private And Proprietary

</div>