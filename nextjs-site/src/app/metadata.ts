import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Ole Texas',
  description: 'Ever wonder just how big Big Ole Texas is?',
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