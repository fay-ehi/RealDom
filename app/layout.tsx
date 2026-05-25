import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "RealDom — Rent Directly from Verified Landlords",
  description:
    "Nigeria's trusted rental marketplace. No middlemen, no hidden fees. Search verified homes, connect directly with landlords, and rent transparently.",
  keywords:
    "Nigeria real estate, rent apartment Nigeria, Lagos apartments, Abuja houses for rent, verified landlords, no agency fees, proptech Nigeria",
  openGraph: {
    title: "RealDom — Rent Directly from Verified Landlords",
    description: "Nigeria's trusted rental marketplace. No middlemen, no hidden fees.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
