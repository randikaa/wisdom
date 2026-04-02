"use client"

import { useAuth, Role } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { School } from "lucide-react"
import { useEffect } from "react"

export default function LoginPage() {
  const { login, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  const handleLogin = (role: Role) => {
    login(role)
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-24 h-24 relative mb-4">
            <img src="/logo.jpeg" alt="Wisdom Institution Logo" className="object-cover w-full h-full rounded-[5px]" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Wisdom Institution</CardTitle>
            <CardDescription className="mt-2 text-base">Select your role to access the LMS portal</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 mt-4">
          <Button size="lg" onClick={() => handleLogin("super_admin")} className="w-full font-semibold">
            Login as Super Admin
          </Button>
          <Button size="lg" variant="secondary" onClick={() => handleLogin("office_admin")} className="w-full font-semibold border">
            Login as Office Admin
          </Button>
          <Button size="lg" variant="outline" onClick={() => handleLogin("teacher")} className="w-full font-semibold">
            Login as Teacher
          </Button>
          <Button size="lg" variant="ghost" onClick={() => handleLogin("student")} className="w-full font-semibold bg-accent">
            Login as Student
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
