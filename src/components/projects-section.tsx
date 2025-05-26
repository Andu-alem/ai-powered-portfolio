"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard, type Project } from "./project-card"
import { projectsData } from "@/lib/projectData"

export function ProjectsSection() {
  const [hasMore, setHasMore] = useState(true)
  const [displayCount, setDisplayCount] = useState(1)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    if (displayCount > projectsData.length) {
      setProjects(projectsData)
    } else {
      setProjects(projectsData.slice(0, (3*displayCount)))
    }
  },[displayCount])

  const handleShowMore = () => {
    const proLength = projectsData.length
    if (hasMore) {
      setDisplayCount(displayCount + 1)
      if (displayCount + 1 > proLength/3) {
        setHasMore(false)
      }
    } else {
      setDisplayCount(1)
      setHasMore(true)
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }
  }



  return (
    <>
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl animate-on-scroll opacity-0">
              Featured Projects
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
              Here are some of the projects I&apos;ve worked on recently.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 animate-on-scroll opacity-0">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground animate-pulse-slow"
              onClick={ handleShowMore }
            >
              { hasMore ? "Show More Projects" : "Show Less" }
              { hasMore ? (<ArrowRight className="h-4 w-4" />) : (<ArrowLeft className="h-4 w-4" />) }
            </Button>
            
          </div>
        </div>
      </section>
    </>
  )
}

