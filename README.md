# Victor Ekeke - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Front-end Developer & Designer. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design** - Clean, professional portfolio with dark theme
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Interactive Projects** - Showcase of web development work with modal details
- **Contact Form** - EmailJS integration for direct communication
- **Smooth Animations** - Engaging user experience with CSS transitions
- **Error Handling** - Comprehensive error boundaries and loading states
- **Performance Optimized** - Fast loading with lazy images and optimized assets
- **Multi-page Navigation** - Portfolio and dedicated projects page
- **Mobile Menu** - Responsive navigation with mobile-friendly menu

## 🛠️ Tech Stack

- **Build Tool**: Vite 6.0.1
- **Framework**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.15
- **UI Components**: shadcn/ui (New York style)
- **Email Service**: EmailJS 4.4.1
- **Icons**: Lucide React 0.541.0
- **Package Manager**: npm
- **Linting**: ESLint 9.33.0

## 🔧 Configuration Files

- **`vite.config.js`** - Vite configuration with Tailwind CSS plugin
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`jsconfig.json`** - JavaScript path resolution
- **`components.json`** - shadcn/ui configuration

## 📁 Project Structure

```
Skelly2_Port/
├── public/                 # Static assets (images, resume, etc.)
│   ├── images/            # Project screenshots and assets
│   │   ├── SLA Hero.jpg
│   │   ├── SLA Landing Page.jpg
│   │   ├── Pampered by Yuni Hero.jpg
│   │   ├── Scientific Calculator.jpg
│   │   ├── Simple Calculator.jpg
│   │   ├── ViTech Contact Page.jpg
│   │   ├── ViTech Landing Page.jpg
│   │   ├── ViTech Shop Page.jpg
│   │   └── VE_Resume.pdf
│   └── test.html          # Test page
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui component library
│   │   │   ├── badge.jsx
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── dialog.jsx
│   │   │   └── loading-spinner.jsx
│   │   ├── Portfolio.jsx  # Main portfolio component
│   │   ├── Projects.jsx   # Projects showcase component
│   │   ├── ErrorBoundary.jsx # Error handling component
│   │   └── ImageWithLoading.jsx # Image loading component
│   ├── config/            # Configuration files
│   │   └── emailjs.js     # EmailJS configuration
│   ├── lib/               # Utility functions
│   │   └── utils.js       # Utility functions
│   ├── App.jsx            # Main application component with routing
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles with Tailwind
├── dist/                  # Build output directory
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── components.json        # shadcn/ui configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Portfolio Sections

- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Me** - Personal story, skills, and professional background
- **Services** - Detailed breakdown of web development services offered
- **Portfolio** - Interactive showcase of completed projects with modal details
- **Contact** - Contact form with EmailJS integration and social links
- **Experience & Education** - Professional timeline and academic background
- **Projects Page** - Dedicated page showcasing all projects with detailed views

## 📱 Contact

- **Email**: vitecollabs@gmail.com
- **LinkedIn**: [Victor Ekeke](https://www.linkedin.com/in/victor-ekeke-06b80915b/)
- **Upwork**: [Victor Ekeke](https://www.upwork.com/freelancers/~010b907b38ab4e3efc?mp_source=share)

## 🎯 Featured Projects

- **[StartupList Africa](https://startuplist.africa/)** - Data intelligence platform for African startup ecosystem
- **[Pampered by Yuni](https://pamperedbyyuni.com)** - Beauty brand website focused on wellness
- **[ViTech Accessories](https://victamu.github.io/ViTech/)** - E-commerce landing page for tech accessories
- **[Scientific Calculator](https://victamu.github.io/Calculator/index.html)** - Interactive calculator app with scientific functions

## 🎨 Customization

To add new projects:
1. Update the `projects` object in `Portfolio.jsx` and `Projects.jsx`
2. Add project images to `public/images/`
3. Update project data (title, description, tags, link)

## 📱 Responsive Design

- **Mobile**: Single column layout with mobile menu
- **Tablet**: Two column layout
- **Desktop**: Three column layout
- **Modal**: Responsive dialog with image/content layout

## 📄 License

This project is for portfolio purposes. All rights reserved.

---

**Built with ❤️ by Victor using Vite, React, Tailwind CSS, and shadcn/ui**
