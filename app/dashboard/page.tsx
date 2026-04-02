"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SuperAdminDashboard } from "@/components/dashboards/super-admin"
import { OfficeAdminDashboard } from "@/components/dashboards/office-admin"
import { TeacherDashboard } from "@/components/dashboards/teacher"
import { StudentDashboard } from "@/components/dashboards/student"

export default function DashboardIndexPage() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {user.name}</h1>
        <p className="text-muted-foreground mt-2">
          This is your {user.role?.replace("_", " ")} overview.
        </p>
      </div>

      {user.role === "super_admin" && <SuperAdminDashboard />}
      {user.role === "office_admin" && <OfficeAdminDashboard />}
      {user.role === "teacher" && <TeacherDashboard />}
      {user.role === "student" && <StudentDashboard />}
      
    </div>
  )
}
