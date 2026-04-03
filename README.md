SmartValue — Smart Device Trade-In Platform
A multi-page, responsive landing page built for SmartValue, a platform designed to simplify the process of exchanging old devices for newer technology. The project was first designed in Figma with a focus on pixel-perfect UI, consistent dark-themed design, and responsive layouts, then developed using modern React tooling.

Live Demo
https://apex-landing-page2.vercel.app

Tech Stack

React 18 with TypeScript
Vite (build tool and dev server)
Tailwind CSS (utility-first styling)
shadcn/ui (accessible component library built on Radix UI)
Framer Motion (scroll and load animations)
React Leaflet (interactive store locator map)
React Hook Form + Zod (form validation)
React Router DOM (client-side routing)


Features

Hero section with load animations and a Schedule a Demo popup modal
Scroll-triggered animations across all sections inspired by Framer templates
Interactive How It Works section with a step-by-step stepper
Exclusive Apex Value Perks section with phone mockup
Smart Value Trade-in Lifecycle grid with 9 steps
Store Locator with live OpenStreetMap integration and city-based search
Contact form with office image and location details
Bilingual support — English and Hindi
Glassmorphism navbar with scroll-aware background
Fully responsive design for all screen sizes


Project Structure
src/
  assets/         Static images, SVGs, and icons
  components/     All React components (HeroSection, Navigation, DemoModal, etc.)
  hooks/          Custom React hooks
  lib/            Utility functions
  pages/          Page-level components
  App.tsx         Root component
  main.tsx        Entry point

Getting Started
Clone the repository:
git clone https://github.com/ANUSHREE-CYBER/Apex-Landing-Page2.git
Install dependencies:
npm install
Start the development server:
npm run dev
Open your browser at http://localhost:8080

Deployment
This project is deployed on Vercel. Any changes pushed to the main branch are automatically deployed to the live URL.

Author
Developed by Anushree as part of an internship project. Designed in Figma and developed with React and modern frontend tooling.

To update your README, open the README.md file in VS Code, replace everything with this, save with Ctrl+S, then push to GitHub:
bashgit add .
git commit -m "Update README"
git push
