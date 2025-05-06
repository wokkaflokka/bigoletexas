import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Ole Texas',
  description: 'TEXAS IS BIG. EVER WONDER JUST HOW BIG BIG OLE TEXAS IS? ENTER A COUNTRY OR US STATE. AND SEE FOR YERSELF!',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
};