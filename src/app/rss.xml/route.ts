import type { Project } from "@/components/project-card"
import { baseUrl } from "@/app/metadata"

// Sample projects data - in a real app, you would fetch this from a database or CMS
const projects: Project[] = [
  {
    title: "Classic Men's",
    subTitle: "E-commerce Website",
    description:
      "A comprehensive, feature-rich, and responsive e-commerce website for Ideal Men's Fashion store using a modern tech stack.",
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://mencollection.vercel.app",
    codeLink: "https://github.com/Andu-alem",
  },
  {
    title: "ServiceAd",
    subTitle: "Service Sharing Platform",
    description:
      "A platform designed to empower users to promote their services and businesses while making it easier for others to find what they need.",
    techStack: ["Next.js", "Tailwind CSS", "Next-Auth", "MongoDB", "Mongoose"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://servicead.vercel.app",
    codeLink: "https://github.com/Andu-alem",
  },
  {
    title: "ChessGame",
    subTitle: "Progressive Web App",
    description:
      "I developed ChessGame, a progressive web app that offers users a complete chess experience with versatile features and modern design.",
    features:
      "Board Customization, Opponent Options, Difficulty Levels, Full Chess Functionality, Progressive Web App - works offline",
    techStack: ["React", "Tailwind CSS", "Stockfish AI", "PWA"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://react-chess-app-uixz.onrender.com/",
    codeLink: "https://github.com/Andu-alem/react-chess-app",
  },
]

export async function GET() {
  const rssXml = `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Andualem Fereja | Projects</title>
        <link>${baseUrl}</link>
        <description>Latest projects by Andualem Fereja, a full-stack developer</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
        ${projects
          .map(
            (project) => `
          <item>
            <title>${project.title}</title>
            <link>${project.link}</link>
            <description>${project.description}</description>
            <pubDate>${new Date().toUTCString()}</pubDate>
            <guid>${project.link}</guid>
          </item>
        `,
          )
          .join("")}
      </channel>
    </rss>
  `.trim()

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}

