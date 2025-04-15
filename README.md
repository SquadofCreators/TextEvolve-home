# TextEvolve - Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) A modern, responsive landing page designed to showcase the TextEvolve project. Built with React, Vite, Tailwind CSS, and Framer Motion, featuring a light theme with orange accents.

**Live Demo:** [https://squadofcreators.github.io/TextEvolve-home/](https://squadofcreators.github.io/TextEvolve-home/)

**Main Product:** [http://www.textevolve.in](http://www.textevolve.in)

![TextEvolve Landing Page Screenshot] *(Screenshot showing the hero section of the landing page)*

## Features

* **Modern UI:** Clean, light theme with vibrant orange accents.
* **Engaging Hero Section:** Includes headline, description, CTAs, and a video preview triggering a modal player.
* **Interactive Elements:** Smooth animations and transitions powered by Framer Motion.
* **Detailed Sections:** Highlights Features, How It Works, Results (with graphs), Team, Roadmap, Resources, and Contact Form.
* **Image Comparison:** Dedicated component to showcase "Before vs. After" digitization results (if added as a separate section).
* **Responsive Design:** Looks great on desktops, tablets, and mobile devices.
* **Performance:** Built with Vite for fast development and optimized production builds.

## Technology Stack

* **Frontend Framework:** React.js (v18+)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v3
* **Animations:** Framer Motion
* **Charts:** Recharts (for Results section)
* **Icons:** React Icons

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone [Your Repository URL]
    cd textevolve-landingpage-light
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Place Assets:**
    * Ensure your video files (e.g., `promo_video.mp4`, `promo_video.webm`), poster image (`video_poster.jpg`), presentation file (`TextEvolve_Dynamic_Dreamers.pdf`), team photos, and any other static assets are placed in the `public/` directory (e.g., `public/videos/`, `public/images/team/`) or imported correctly if placed in `src/assets/`.
    * Update the paths in the respective components (`Hero.jsx`, `Team.jsx`, `Resources.jsx`, `ImageComparisonSlider.jsx`) if necessary.

## Running the Project

* **Development Mode:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the Vite development server, typically at `http://localhost:5173`.

* **Building for Production:**

    ```bash
    npm run build
    # or
    yarn build
    ```

    This creates an optimized static build in the `dist/` directory.

* **Previewing Production Build:**

    ```bash
    npm run preview
    # or
    yarn preview
    ```

## Project Structure (Simplified)

    
    textevolve-home
    ├── public/             # Static assets (images, videos, documents)
    ├── src/
    │   ├── assets/         # Assets imported into components (optional)
    │   ├── components/     # Reusable React components (Navbar, Hero, etc.)
    │   ├── App.jsx         # Main application component
    │   ├── index.css       # Tailwind directives & global styles
    │   └── main.jsx        # Application entry point
    ├── index.html          # HTML template
    ├── tailwind.config.js  # Tailwind configuration
    ├── vite.config.js      # Vite configuration
    └── package.json        # Project dependencies and scripts

## Customization

* **Theme:** Colors, fonts, and other design tokens can be customized in `tailwind.config.js`.
* **Content:** Update text, images, video paths, team info, roadmap details, etc., directly within the respective `.jsx` components in `src/components/`.
* **Contact Form:** Configure the form submission in `src/components/ContactUs.jsx` to point to your backend endpoint or a third-party service (like Formspree).

## License

This project is licensed under the [License Name] License - see the LICENSE.md file for details. 

## Contact

Project developed by **Team Dynamic Dreamers**, Kathir College of Engineering, Coimbatore.
For inquiries specific to the landing page code, please open an issue in this repository. For inquiries about the TextEvolve product itself, visit [http://www.textevolve.in](http://www.textevolve.in).