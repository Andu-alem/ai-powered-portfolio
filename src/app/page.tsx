import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { StructuredData } from "@/components/structured-data"
import { baseUrl } from "@/app/metadata"

export default function Home() {
  // Person structured data
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andualem Fereja",
    url: baseUrl,
    image: `${baseUrl}/placeholder.svg?height=400&width=400`,
    sameAs: ["https://github.com/Andu-alem", "https://linkedin.com/in/andualem-fereja", "https://t.me/Andume"],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description: "A passionate full-stack developer crafting beautiful, functional, and user-friendly applications.",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <StructuredData data={personData} />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollAnimations />
    </div>
  )
}

