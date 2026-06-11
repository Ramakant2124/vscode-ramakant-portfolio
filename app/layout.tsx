import type { Metadata } from 'next';
import Script from "next/script";

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Ramakant Chaudhari | Portfolio',
    template: 'Ramakant Chaudhari | %s',
  },
  description:
    "Ramakant Chaudhar is a passionate full-stack web developer who builds websites and applications you’ll enjoy using.",
  keywords: [
    'Ramakant Chaudhari',
    'Ramakant ',
    'Chaudhari',
    
  ],
  openGraph: {
    title: "Ramakant Chaudhari's Portfolio",
    description:
      "A full-stack developer building websites you’ll love to use.",
    
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <Script
        id="theme-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: themeScript,
        }}
      />
    </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
