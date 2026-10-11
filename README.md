# Practical 2: Client-Side Routing with React Router DOM

**Course**: Advanced Web Development Frameworks (ITUE301)  
**Student**: Bhavya Durgani &bull; **Roll No**: D25CS112  
**Department**: Faculty of Technology & Engineering, CHARUSAT  

---

## 📌 Overview
This project (`prac2`) implements client-side single-page application (SPA) routing using **React Router DOM v6**. It demonstrates declarative route configuration, seamless page transitions without browser reloads, active navigation states, and catch-all 404 error handling.

### Route Architecture:
- `/` &rarr; `Home.jsx`: Landing page introducing the portfolio.
- `/projects` &rarr; `Projects.jsx`: Showcase of completed engineering projects.
- `/contact` &rarr; `Contact.jsx`: Interactive contact form page.
- `*` &rarr; `NotFound.jsx`: Catch-all wildcard route for invalid URLs.

---

## 🚀 Steps to Run

Follow these commands in your terminal to set up and run Practical 2:

### 1. Navigate to the Practical Directory
```bash
cd prac2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
* Access the application in your browser at: `http://localhost:5173`

### 4. Test Route Navigation
- Click **Home** (`/`) in the navbar.
- Click **Projects** (`/projects`) in the navbar.
- Click **Contact** (`/contact`) in the navbar.
- Type an unrecognized URL in the address bar (e.g. `http://localhost:5173/random-page`) to test 404 handling.

---

## 📸 Screenshots to Include in Lab File / Report

Capture and paste the following screenshots into your practical document:

1. **Screenshot 1 - Terminal Server Startup**:
   - *Capture*: Terminal output running `npm run dev` showing Vite server ready on `http://localhost:5173`.
2. **Screenshot 2 - Home Page Route (`/`)**:
   - *Capture*: Browser window with address bar visible displaying `http://localhost:5173/` and Home page content with Navbar.
3. **Screenshot 3 - Projects Page Route (`/projects`)**:
   - *Capture*: Browser window with address bar visible displaying `http://localhost:5173/projects` and the Projects list. Highlight that the page updated without a full browser reload.
4. **Screenshot 4 - Contact Page Route (`/contact`)**:
   - *Capture*: Browser window displaying `http://localhost:5173/contact` with the Contact form UI.
5. **Screenshot 5 - 404 Not Found Catch-All Route**:
   - *Capture*: Browser window navigating to an invalid route (e.g., `http://localhost:5173/invalid-test-url`) showing the custom `NotFound` component.
6. **Screenshot 6 - Network Tab SPA Evidence (Viva Question)**:
   - *Capture*: Browser DevTools **Network** tab during route transitions showing that switching between `/`, `/projects`, and `/contact` triggers **zero full-document HTML reloads**, proving client-side SPA routing.
