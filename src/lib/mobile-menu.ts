"use client"

import { useEffect } from "react"

export default function MobileMenu() {
  useEffect(() => {
    const menuButton = document.getElementById("mobile-menu-button")
    const mobileMenu = document.getElementById("mobile-menu")

    if (menuButton && mobileMenu) {
      menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
      })

      // Close menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll("a")
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden")
        })
      })
    }
  }, [])

  return null
}

