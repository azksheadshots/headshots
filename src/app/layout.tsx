
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ksheadshots.com'),
  title: {
    default: 'KS Headshots | Premier Headshot Photographer in Phoenix & Buckeye, AZ',
    template: '%s | KS Headshots',
  },
  description: 'Professional headshot photography in Phoenix, Buckeye, and Scottsdale, AZ. Specializing in corporate, actor, and personal branding headshots that make an impact.',
  openGraph: {
    title: 'KS Headshots | Premier Headshot Photographer in Phoenix & Buckeye, AZ',
    description: 'Specializing in corporate, actor, and personal branding headshots.',
    url: 'https://www.ksheadshots.com',
    siteName: 'KS Headshots',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
