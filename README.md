# Elegant Events - Event Design Website

A modern, responsive website for an event design and planning service specializing in weddings, birthdays, and celebrations.

## Features

- 🎨 Modern, beautiful UI with TailwindCSS
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎯 Service showcase for weddings, birthdays, corporate events, and special celebrations
- 💬 Client testimonials section
- 📧 **Working contact form that sends emails to bohdaq@gmail.com**
- 📞 Contact form with business information
- 🎭 Professional branding with gradient effects

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Email Configuration

The contact form sends emails to **bohdaq@gmail.com** using Formspree. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed setup instructions.

**Quick Setup:**
1. Go to https://formspree.io
2. Sign up with bohdaq@gmail.com
3. Verify your email
4. Form submissions will automatically arrive in your inbox!

## Project Structure

```
bokkings/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Customization

### Colors

The primary color scheme uses purple/pink gradients. To customize, edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

### Content

Edit `src/App.jsx` to customize:
- Services offered
- Testimonials
- Contact information
- Business hours
- Social media links

### Branding

Update the company name "Elegant Events" throughout the codebase to match your business name.

## Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **Stats** - Key business metrics and achievements
3. **Services** - Detailed service offerings with features
4. **About** - Company values and differentiators
5. **Testimonials** - Client reviews and ratings
6. **Contact** - Contact form and business information
7. **Footer** - Branding and copyright

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, please open an issue in the repository.
