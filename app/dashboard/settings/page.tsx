"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SystemSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        <p className="text-muted-foreground mt-2">Manage core configurations for Wisdom LMS.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Institution Details</CardTitle>
            <CardDescription>Global branding and organizational identifiers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="inst-name">Institution Name</Label>
              <Input id="inst-name" defaultValue="Wisdom Institution" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Support Contact Email</Label>
              <Input id="contact-email" defaultValue="support@wisdom.edu" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Timetable</CardTitle>
            <CardDescription>Establish current operating semesters.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="active-sem">Active Semester</Label>
              <Input id="active-sem" defaultValue="Fall 2026" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-cap">Maximum Global Enrollment Cap</Label>
              <Input id="max-cap" type="number" defaultValue="2000" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Configuration</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
