"use client"

import Link from "next/link"
import { ArrowRight, Code, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu")
      const menuButton = document.getElementById("mobile-menu-button")

      if (
        mobileMenu &&
        menuButton &&
        !mobileMenu.contains(event.target as Node) &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Code className="h-5 w-5" />
          <span>Andualem Fereja</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">
              Let&apos;s Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            id="mobile-menu-button"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden border-b-0"}`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          <Link href="#about" className="text-sm font-medium hover:text-primary py-2" onClick={closeMenu}>
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary py-2" onClick={closeMenu}>
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary py-2" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary py-2" onClick={closeMenu}>
            Contact
          </Link>
          <Button asChild size="sm" className="mt-2" onClick={closeMenu}>
            <Link href="#contact">
              Let&apos;s Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

