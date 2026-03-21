<div align="center">

# Atria Health
### The Future Of Preventive Medicine

A Thoughtfully Developed Web Experience For Atria Health — Bringing World-Class Preventive Medicine Closer To The People Who Need It Most.

**React 19** · **Vite 7** · **React Router 7** · **CSS Properties**

[Get Started](#getting-started) · [Features](#features) · [Architecture](#architecture) · [Design System](#design-system)

---

</div>

## About

Healthcare Shouldn't Be Reactive. Atria Health Believes In Catching Problems Before They Start — And This Application Brings That Philosophy To Life Digitally.

This Is A Modern, Responsive Web Platform Built For Atria's Membership-Based Preventive Medicine Practice. It Tells The Story Of Their Clinical Institute, Research Fellows, Health Education Efforts, And Public Health Mission — All In One Seamless Experience.

Every Piece Of Content Lives In Structured JSON Data Files, So The Marketing And Clinical Teams Can Update Copy, Add Doctors, Or Launch New Locations Without Ever Touching Code.

> **12 Pages · 50+ Physicians · 100+ Research Fellows · 18 Specialties · 30 Data Sources**

## Features

| Feature                                | What It Means For The Business                                                                                      |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| **Find The Right Doctor, Fast**        | Prospective Members Can Search 50+ Physicians By Specialty And Location — No Phone Calls Needed                     |
| **Health Education At Your Fingertips**| A Free Library Of Articles, Videos, And Guides That Builds Trust And Positions Atria As A Thought Leader             |
| **Research That Speaks For Itself**    | Showcases 100+ Distinguished Fellows, Strategic Pillars, And Real Impact Numbers To Earn Credibility                |
| **Public Health With Purpose**         | Highlights Nonprofit Partnerships And Equity Work — Showing Atria Cares Beyond Its Membership Walls                 |
| **Every Location, One Place**          | Visitors See Hours, Directions, Contact Info, And Upcoming Openings For All Atria Locations At A Glance             |
| **Membership Made Approachable**       | Clear Breakdown Of What Members Get, With Easy Paths To Inquire — Reducing Friction In The Enrollment Journey       |
| **Feels Premium, Loads Fast**          | Smooth Scroll Animations, Frosted-Glass Navigation, And Responsive Layouts That Work Beautifully On Any Device      |
| **Built For Non-Technical Updates**    | All Text, Images, And URLs Live In Simple JSON Files — Content Changes Don't Require A Developer                    |
| **Accessible By Default**             | Animations Respect User Motion Preferences, Forms Are Validated, And The Site Works Across All Screen Sizes          |

## Dependencies

```
Frontend        React 19.2 + React Router DOM 7.13
Build Tool      Vite 7.3 With React Fast Refresh
Styling         CSS Properties + BEM Naming
Typography      DM Serif Display (Headings) + Inter (Body)
Data Layer      Static JSON — 30 Externalized Data Files
Linting         ESLint 9
```

## Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** 9+

### Installation

```bash
git clone https://github.com/Arko-Sengupta/Atria-The-App.git
cd Atria-The-App
npm install
```

### Development

```bash
npm run dev
```

Opens At `http://localhost:5173`

### Production Build

```bash
npm run build      # Outputs To dist/
npm run preview    # Preview The Production Build
```

### Linting

```bash
npm run lint
```

## Architecture

The Codebase Is Intentionally Simple. No Heavy State Management Libraries, No Over-Abstraction — Just Clean React Components Powered By Data.

```
src/
├── Components/          Reusable UI — Navbar, Footer, ContactForm
├── Hooks/               Hooks — UseScrollReveal (Intersection Observer)
├── Pages/               12 Route-Level Page Components
├── Styles/
│   ├── Global.css       CSS Variables, Typography, Reset
│   ├── Components/      Component-Scoped Stylesheets
│   └── Pages/           Page-Scoped Stylesheets
├── App.jsx              Route Definitions And Layout Shell
└── Main.jsx             Entry Point — StrictMode + BrowserRouter

data/                    30 JSON Files Powering All Content
```

## Design System

### Color Palette

| Token                      | Value     | Usage                          |
| :------------------------- | :-------- | :----------------------------- |
| `--color-primary`          | `#344740` | Deep Green — Brand Identity    |
| `--color-primary-light`    | `#3d5a50` | Hover States, Accents          |
| `--color-primary-dark`     | `#263832` | Navbar, Dark Sections          |
| `--color-text`             | `#111111` | Primary Body Text              |
| `--color-text-secondary`   | `#333333` | Subheadings, Descriptions      |

### Typography

| Role     | Font             | Size                        |
| :------- | :--------------- | :-------------------------- |
| Headings | DM Serif Display | `clamp(2rem, 5.5vw, 4rem)`  |
| Body     | Inter            | `1.05rem` Base              |

### Responsive Breakpoints

```
480px → 768px → 960px → 1024px → 1200px
```

Fluid Typography Via CSS `clamp()`. All Animations Gracefully Step Aside When Users Prefer Reduced Motion.

## Pages

| Route            | Page          | What Visitors Find There                                   |
| :--------------- | :------------ | :--------------------------------------------------------- |
| `/`              | Home          | The Big Picture — Mission, Stats, And Paths Forward        |
| `/institute`     | Institute     | What Membership Looks Like, Gallery, And Locations         |
| `/doctors`       | Doctors       | Browse Physicians By Specialty And Location                |
| `/research`      | Research      | Meet The Fellows, See The Pillars, Feel The Impact         |
| `/education`     | Education     | Free Articles, Videos, And Guides — Filterable             |
| `/public-health` | Public Health | Atria's Nonprofit Work And Equity Partnerships             |
| `/our-story`     | Our Story     | Why Atria Exists And Who's Leading The Charge              |
| `/locations`     | Locations     | Find An Office, Get Directions, Check Hours                |
| `/contact-us`    | Contact Us    | Reach Out — Forms, Emails, And Office Details              |


---

<div align="center">

**Built For Atria Health LLC** · Private And Proprietary

</div>
