import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Meteors } from "@/components/magicui/meteors"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <Meteors />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m <span className="text-primary">Andualem Fereja</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A passionate full-stack developer crafting beautiful, functional, and user-friendly applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 text-muted-foreground">
              <Link
                href="https://github.com/Andu-alem"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://t.me/Andume"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                <span className="sr-only">Telegram</span>
              </Link>
              <Link
                href="mailto:andualem.fereja12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted bg-muted md:w-[350px] animate-fade-in-delay">
              <Image
                src="/profile.PNG"
                alt="andu's image"
                className="object-cover"
                width={500}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

