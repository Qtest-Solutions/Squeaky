# SqueakyFMS - Next.js Application

A modern Next.js 14 application converted from a WordPress static HTML export. This project includes three main pages: Home, About, Services, and Contact, with a professional design using React and TypeScript.

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx              # Root layout with metadata and CSS imports
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   └── services/
│       └── page.tsx            # Services page
├── lib/
│   └── pageLoader.ts           # Utility for loading page content (optional)
├── public/
│   ├── wp-content/             # WordPress assets (plugins, themes, uploads)
│   │   ├── plugins/            # Elementor and other plugins
│   │   ├── themes/             # Blocksy theme files
│   │   └── uploads/            # Images and media files
│   └── wp-includes/            # WordPress core includes (jQuery, etc.)
├── package.json                # Dependencies
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── .eslintrc.json              # ESLint configuration
```

## Features

- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Full type safety
- **Responsive Design** - Mobile-friendly layouts
- **Preserved Styling** - All original CSS and theme styling
- **Fast Performance** - Static site generation and optimization
- **Navigation** - Easy page routing with Next.js Link components

## Pages

### Home (`/`)
- Welcome hero section
- Overview of services
- Call-to-action buttons
- Professional footer

### About (`/about`)
- Company background
- Team information
- Why choose us section
- Professional experience highlights

### Contact (`/contact`)
- Hero section with image
- Contact information (phone, email, address)
- Contact form
- Get in touch CTA

### Services (`/services`)
- Service overview
- Service grid display
- Service details
- Call-to-action section

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nextjs-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## Configuration

### CSS and Styling
All original Blocksy theme CSS and Elementor framework CSS are imported in `app/layout.tsx`:
- Global styles from `wp-content/uploads/blocksy/css/global.css`
- Elementor frontend CSS
- Blocksy theme bundle CSS
- Google Fonts (Lexend, Roboto, Roboto Slab)

### Images
Images are stored in `public/wp-content/uploads/` and can be referenced directly:
```tsx
<img src="/wp-content/uploads/2022/08/example.webp" alt="Example" />
```

Image optimization is disabled in `next.config.js` for compatibility with existing images.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Converting from WordPress

This application was converted from a WordPress static HTML export using the Simply Static plugin. The conversion includes:

1. **Page Structure**: Each WordPress page was converted to a Next.js page component
2. **CSS/Styling**: All original CSS files preserved in `public/wp-content`
3. **Images**: All images preserved in `public/wp-content/uploads`
4. **Responsive Design**: Inline styles matching original design
5. **Navigation**: Server-side navigation using Next.js Link components

## Asset Structure

### WordPress Content
All WordPress assets are preserved in the public folder:
- `public/wp-content/themes/blocksy/` - Theme files and stylesheets
- `public/wp-content/plugins/elementor/` - Elementor plugin assets
- `public/wp-content/plugins/ht-slider-for-elementor/` - Slider plugin
- `public/wp-content/uploads/` - Media and image files

### WordPress Includes
- `public/wp-includes/js/jquery/` - jQuery library and plugins
- `public/wp-includes/css/` - Core WordPress styles

## Performance Optimization

- Static site generation (SSG) for all pages
- Optimized CSS imports
- Image optimization ready (disabled for compatibility)
- Minified JavaScript bundles
- Fast initial page loads

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Tips

1. **Update Navigation**: Edit the navigation in each page's `<nav>` section
2. **Modify Colors**: Primary color is `#EC6A2B`, accent colors in theme variables
3. **Add New Pages**: Create new folder in `app/` with `page.tsx` file
4. **Update Content**: Edit inline content in component JSX

## License

This project was converted from a WordPress export. Please ensure you have the appropriate licenses for any third-party assets.

## Support

For issues or questions about the Next.js conversion, refer to the official documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
