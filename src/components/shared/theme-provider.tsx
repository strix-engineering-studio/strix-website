"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "light" | "dark" | "system"

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: "light" | "dark"
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system"
  const storedTheme = window.localStorage.getItem("theme")
  return storedTheme === "light" || storedTheme === "dark" || storedTheme === "system" ? storedTheme : "system"
}

function applyTheme(theme: Theme, resolvedTheme: "light" | "dark") {
  const root = document.documentElement
  root.classList.toggle("dark", resolvedTheme === "dark")
  root.style.colorScheme = resolvedTheme
  root.dataset.theme = theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system")
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(false)

  const resolvedTheme: "light" | "dark" = theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme

  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const storedTheme = getStoredTheme()
    const prefersDark = mediaQuery.matches

    const initializeTheme = () => {
      setThemeState(storedTheme)
      setSystemPrefersDark(prefersDark)
      applyTheme(storedTheme, storedTheme === "system" ? (prefersDark ? "dark" : "light") : storedTheme)
      window.localStorage.setItem("theme", storedTheme)
    }

    const timeoutId = window.setTimeout(initializeTheme, 0)

    const handleChange = () => {
      setSystemPrefersDark(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => {
      window.clearTimeout(timeoutId)
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    applyTheme(theme, resolvedTheme)
    window.localStorage.setItem("theme", theme)
  }, [theme, resolvedTheme])

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: setThemeState,
      toggleTheme: () => setThemeState(resolvedTheme === "dark" ? "light" : "dark"),
    }),
    [resolvedTheme, theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}