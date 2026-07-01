import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/features/shared/OrganizationSchema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anvatra.com"),

  title: {
    default: "ANVATRA | Building Exceptional Technology Teams",
    template: "%s | ANVATRA",
  },

  description:
    "ANVATRA partners with growing businesses to build exceptional technology teams through trusted permanent hiring. Expanding into contract staffing, staff augmentation, technology consulting, and software, cloud & AI solutions.",

  keywords: [
    "Permanent Hiring",
    "Technology Hiring",
    "IT Recruitment",
    "Technology Recruitment",
    "Software Engineers",
    "Technology Talent",
    "Engineering Hiring",
    "Contract Staffing",
    "Staff Augmentation",
    "Technology Consulting",
    "Software Development",
    "Cloud",
    "Artificial Intelligence",
    "India",
  ],

  authors: [
    {
      name: "ANVATRA Technologies",
    },
  ],

  creator: "ANVATRA Technologies",

  publisher: "ANVATRA Technologies",

  applicationName: "ANVATRA",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anvatra.com",
    siteName: "ANVATRA",

    title: "ANVATRA | Building Exceptional Technology Teams",

    description:
      "Helping businesses build exceptional technology teams through trusted permanent hiring.",

    images: [
      {
        url: "/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: "ANVATRA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ANVATRA | Building Exceptional Technology Teams",

    description:
      "Helping businesses build exceptional technology teams through trusted permanent hiring.",

    images: ["/branding/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900">
        <OrganizationSchema />

        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}