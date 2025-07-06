# ACM Student Chapter Website

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Libraries and Frameworks](#libraries-and-frameworks)
- [License](#license)

## Introduction

Welcome to the ACM Student Chapter website at the American University of Beirut (AUB)! This web application is designed to introduce the club, showcase our events, introduce our board members, and provide information about our committees and open-source initiatives.

## Features

- **Events Page:** Stay updated on the latest ACM events and activities.
- **About Us:** Learn more about the ACM Student Chapter at AUB.
- **Board Members:** Meet the talented individuals leading the chapter.
- **Committees:** Explore the different committees contributing to ACM's success.
- **Open Source:** Discover our open-source projects and initiatives.

## Usage
 
 Visit "https://aub.acm.org/" to view the website.

# Project Structure

<pre> acm-website/
├── public/
│   ├── images/           # All static images used across the website
│   ├── pdfs/             # Any downloadable PDF documents
│   ├── videos/           # Embedded or downloadable video files
│   ├── favicon.ico       # Website favicon
│   └── index.html        # Root HTML file served by React
│
├── src/
│   ├── App.js            # Root component, sets up routing and layout
│   ├── App.css           # Global styles
│   ├── index.js          # Entry point that renders App.js into DOM
│   └── components/
│       ├── pages/        # All main page components (see below)
│       └── ...           # Shared smaller components used across pages
│
├── src/components/pages/
│   ├── AboutUs.js        # "About Us" page
│   ├── Board.js          # Board members listing
│   ├── Committees.js     # Overview of ACM committees
│   ├── Events.js         # Events listing
│   ├── Home.js           # Landing/home page
│   └── OpenSources.js    # Open-source initiatives overview
│</pre>
## Libraries and Frameworks

This project utilizes the following libraries and frameworks to enhance functionality and design:

- **Emotion:** Used for styling in conjunction with Material-UI.
  - `@emotion/react`: Emotion's core library.
  - `@emotion/styled`: Emotion's styled components.

- **Material-UI:** A popular React UI framework.
  - `@mui/icons-material`: Material-UI Icons.
  - `@mui/material`: Material-UI core components.
  - `@mui/styled-engine-sc`: Styled components integration for Material-UI.
  
- **Bootstrap:** Front-end framework for building responsive and modern web applications.
  - `bootstrap`: Core Bootstrap styles and scripts.

- **Bootstrap Icons:** Icons for use with Bootstrap.
  - `bootstrap-icons`: A library of SVG icons to be used with Bootstrap.

- **FontAwesome:** Icon library for vector icons and social logos.
  - `fontawesome`: Used for including FontAwesome icons.

- **Framer Motion:** Animation library for React.
  - `framer-motion`: Used for creating animations.
  
- **React Vertical Timeline Component:** A vertical timeline component for React.
  - `react-vertical-timeline-component`: Used for displaying a vertical timeline.

- **Testing Library:** Used for testing React components.
  - `@testing-library/jest-dom`: Custom jest matchers for testing DOM elements.
  - `@testing-library/react`: Testing utilities for React.
  - `@testing-library/user-event`: Simulating user events for testing.

- **Babel Macros:** Babel plugin for writing compile-time evaluated code.
  - `babel-plugin-macros`: Enables the use of Babel macros.

- **React Router DOM:** Declarative routing for React applications.
  - `react-router-dom`: Handles navigation and routing in your React app.

- **React Scripts:** Configuration and scripts for Create React App.
  - `react-scripts`: Provides scripts for starting, building, and testing your React app.

- **Styled Components:** Library for styling React components.
  - `styled-components`: Used for creating styled components in React.

  ## License

  This project is licensed under the [MIT License](LICENSE.md).
