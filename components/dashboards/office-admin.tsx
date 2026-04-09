"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, Banknote, CalendarCheck } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const enrollmentData = [
  { month: "Jan", enrolled: 40, dropped: 5 },
  { month: "Feb", enrolled: 30, dropped: 2 },
  { month: "Mar", enrolled: 45, dropped: 8 },
  { month: "Apr", enrolled: 50, dropped: 10 },
  { month: "May", enrolled: 35, dropped: 4 },
  { month: "Jun", enrolled: 60, dropped: 6 },
]

const chartConfig = {
  enrolled: {
    label: "Newly Enrolled",
    color: "hsl(var(--chart-1))",
  },
  dropped: {
    label: "Dropped Out",
    color: "hsl(var(--chart-5))",
  },
}

export function OfficeAdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <GraduationCap className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,452</div>
            <p className="text-xs text-muted-foreground">+32 since last semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
            <Users className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84</div>
            <p className="text-xs text-muted-foreground">Fully staffed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Revenue Collected</CardTitle>
            <Banknote className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs. 45,231</div>
            <p className="text-xs text-muted-foreground">+18% this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <CalendarCheck className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">For Fall 2026</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Enrollment Overview</CardTitle>
            <CardDescription>Student enrollments over the past 6 months.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart data={enrollmentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="enrolled" fill="var(--color-enrolled)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="dropped" fill="var(--color-dropped)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Latest student admissions awaiting review.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-primary/10 h-9 w-9 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">TF</span>
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Tharindu Fernando</p>
                    <p className="text-sm text-muted-foreground">Computer Science BSc</p>
                  </div>
                  <div className="ml-auto text-xs font-medium text-primary cursor-pointer hover:underline">Review</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
