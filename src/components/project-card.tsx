import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export interface Project {
  title: string
  subTitle?: string
  description: string
  features?: string
  techStack: string[]
  image: string
  link: string
  codeLink: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={300}
          className="object-cover w-full h-full transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.subTitle || ""}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
        {project.features && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Key Features:</h4>
            <p className="text-sm text-muted-foreground">{project.features}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

