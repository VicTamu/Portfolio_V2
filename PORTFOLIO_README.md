# React Portfolio - Vite + shadcn/ui

This is a modern React implementation of the portfolio website, built using the Vite + React skeleton and shadcn/ui components.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and modern hooks
- **shadcn/ui Components**: Professional, accessible UI components
- **Responsive Design**: Mobile-first responsive layout
- **Interactive Modals**: Project details displayed in modern dialog components
- **Smooth Animations**: Hover effects and transitions using Tailwind CSS
- **Dark Theme**: Consistent with the original design aesthetic

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Card, Dialog, Badge, Button)
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── Portfolio.jsx          # Main portfolio component
│   └── ui/                    # shadcn/ui components
│       ├── button.jsx
│       ├── card.jsx
│       ├── dialog.jsx
│       └── badge.jsx
├── App.jsx                     # Main app component
└── main.jsx                    # Entry point
```

## 🎨 Design Features

### Original Portfolio Preserved
- **Same Projects**: Pampered by Yuni, ViTech Accessories, Calculator
- **Same Information**: Project descriptions, links, and tags
- **Same Visual Style**: Dark theme with orange accents
- **Same Layout**: 3-column grid for projects

### Enhanced with React
- **Interactive Cards**: Click to open detailed project modals
- **Modern Navigation**: Fixed header with backdrop blur
- **Responsive Grid**: Adapts to different screen sizes
- **Smooth Transitions**: Hover effects and animations
- **Accessible Components**: Built-in accessibility features

## 🔧 Components Used

- **Card**: Project display cards with hover effects
- **Dialog**: Modal for project details
- **Badge**: Project tags and categories
- **Button**: Call-to-action buttons and navigation

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: Navigate to `http://localhost:5173/`

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: Two column layout
- **Desktop**: Three column layout
- **Modal**: Responsive dialog with image/content layout

## 🎯 Key Improvements

1. **Component-Based Architecture**: Modular, maintainable code
2. **Modern State Management**: React hooks for modal state
3. **Accessibility**: Built-in ARIA support from shadcn/ui
4. **Performance**: Optimized with Vite's fast build system
5. **Developer Experience**: Hot module replacement and modern tooling

## 🔄 Migration from HTML

The original HTML portfolio has been successfully converted to React while maintaining:
- All project information and links
- Visual design and color scheme
- Project images and descriptions
- Navigation structure
- Modal functionality for project details

## 🎨 Customization

To add new projects:
1. Update the `projects` object in `Portfolio.jsx`
2. Add project images to `public/images/`
3. Update project data (title, description, tags, link)

## 📄 License

This portfolio is built on the Vite + React skeleton template with MIT license.
