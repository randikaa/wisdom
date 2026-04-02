"use client"

import { FileQuestion } from "lucide-react"

export default function DashboardNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
      <div className="bg-primary/5 p-6 rounded-full flex items-center justify-center">
        <FileQuestion className="w-20 h-20 text-muted-foreground/60" />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">404 - Module Under Construction</h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          The requested page is part of our future roadmap and is not yet implemented for this preview.
        </p>
      </div>
    </div>
  )
}
