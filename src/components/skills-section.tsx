import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SkillsSection() {
  const frontendSkills = [
    "React",
    "Next.js",
    "Vue",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Shadcn/ui",
    "React-Router",
    "Astro",
    "Svelte"
  ]

  const backendSkills = [
    "Node.js",
    "Express.js",
    "Laravel",
    "Strapi CMS",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "REST API",
    "Apollo GraphQL",
    "Prisma",
    "PHP",
    "Python",
  ]

  const toolsSkills = [
    "Git",
    "GitHub",
    "Docker",
    "CI/CD",
    "Jest",
    "Vitest",
    "Testing Library",
    "VS Code + Copilot",
    "Vercel v0",
    "Openrouter API",
    "Netlify",
    "Cloudflare",
    "IoT",
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl animate-on-scroll opacity-0">
            Skills & Expertise
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
            I&apos;ve worked with a variety of technologies and frameworks to build modern web applications.
          </p>
          <Tabs defaultValue="frontend" className="w-full max-w-3xl animate-on-scroll opacity-0">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools & Others</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="mt-6">
              <SkillGrid skills={frontendSkills} />
            </TabsContent>
            <TabsContent value="backend" className="mt-6">
              <SkillGrid skills={backendSkills} />
            </TabsContent>
            <TabsContent value="tools" className="mt-6">
              <SkillGrid skills={toolsSkills} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function SkillGrid({ skills }: { skills: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant="secondary"
          className="justify-center py-2 text-sm transition-all hover:bg-primary hover:text-primary-foreground"
        >
          {skill}
        </Badge>
      ))}
    </div>
  )
}

