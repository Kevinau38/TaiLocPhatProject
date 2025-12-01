"use client"

import { useTheme } from "@/hooks/use-theme"
import { Toaster as Sonner, toast } from "sonner"
import type { ToasterProps as SonnerToasterProps } from "sonner"

type ToasterProps = SonnerToasterProps

const Toaster = ({ ...props }: ToasterProps) => {
  const { isDark } = useTheme()
  const computedTheme = isDark ? "dark" : "light"

  return (
    <Sonner
      theme={computedTheme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toaster]:text-muted-foreground",
          actionButton:
            "group-[.toaster]:bg-primary group-[.toaster]:text-primary-foreground",
          cancelButton:
            "group-[.toaster]:bg-muted group-[.toaster]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
