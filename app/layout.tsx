import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "SqueakyFMS",
  description: "Professional facility management services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        {/* External styles from the original WP export are left in place for compatibility */}
        <link rel="stylesheet" href="/wp-content/uploads/blocksy/css/global.css" />
        <link rel="stylesheet" href="/wp-content/themes/blocksy/static/bundle/main.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/blocksy/static/bundle/elementor-frontend.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/frontend.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/ht-slider-for-elementor/assets/css/ht-slider-widgets.css" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=auto" rel="stylesheet" />
        <script src="/wp-includes/js/jquery/jquery.min.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
