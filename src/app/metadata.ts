import type { Metadata } from "next"

// Base URL for the website - update this with your actual domain when deployed
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://andualem-fereja.vercel.app"

// Default metadata for the website
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Andualem Fereja | Full-Stack Developer",
    template: "%s | Andualem Fereja",
  },
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies. View my portfolio, projects, and skills.",
  keywords: [
    "Andualem Fereja",
    "web developer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "portfolio",
    "software engineer",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Andualem Fereja", url: baseUrl }],
  creator: "Andualem Fereja",
  publisher: "Andualem Fereja",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Andualem Fereja | Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and modern web technologies. View my portfolio, projects, and skills.",
    siteName: "Andualem Fereja Portfolio",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Andualem Fereja - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andualem Fereja | Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and modern web technologies. View my portfolio, projects, and skills.",
    images: [`${baseUrl}/twitter-image.png`],
    creator: "@andualem",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${baseUrl}/site.webmanifest`,
  alternates: {
    canonical: baseUrl,
    types: {
      "application/rss+xml": `${baseUrl}/rss.xml`,
    },
  },
}

// Generate metadata for specific pages
export function generateMetadata({
  title,
  description,
  image,
  path = "",
  type = "website",
}: {
  title?: string
  description?: string
  image?: string
  path?: string
  type?: "website" | "article"
}): Metadata {
  const url = `${baseUrl}${path}`

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: url,
      type: type,
      images: image
        ? [
            {
              url: image.startsWith("http") ? image : `${baseUrl}${image}`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      title: title,
      description: description,
      images: image ? [image.startsWith("http") ? image : `${baseUrl}${image}`] : defaultMetadata.twitter?.images,
    },
    alternates: {
      canonical: url,
    },
  }
}

