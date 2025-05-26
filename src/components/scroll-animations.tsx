"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-fade-in")
          element.classList.remove("opacity-0")
        }
      })
    }

    // Run once on load
    animateOnScroll()

    // Add scroll event listener
    window.addEventListener("scroll", animateOnScroll)

    // Cleanup
    return () => window.removeEventListener("scroll", animateOnScroll)
  }, [])

  return null
}

