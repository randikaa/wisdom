"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building, AlertCircle, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const performanceData = [
  { time: "00:00", cpu: 45 },
  { time: "04:00", cpu: 30 },
  { time: "08:00", cpu: 75 },
  { time: "12:00", cpu: 85 },
  { time: "16:00", cpu: 60 },
  { time: "20:00", cpu: 55 },
]

const chartConfig = {
  cpu: {
    label: "CPU Usage (%)",
    color: "hsl(var(--chart-1))",
  },
}

export function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <Building className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,203</div>
            <p className="text-xs text-muted-foreground">+12 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <TrendingUp className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-green-500">All Systems Operational</div>
            <p className="text-xs text-muted-foreground">Uptime 99.9%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Critical Logs</CardTitle>
            <AlertCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Needs review</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
            <CardDescription>Server CPU usage over the last 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-cpu)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="var(--color-cpu)" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="cpu" stroke="var(--color-cpu)" fillOpacity={1} fill="url(#fillCpu)" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Admin Logs</CardTitle>
            <CardDescription>Audit trail for super-admin actions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Settings updated</p>
                  <p className="text-sm text-muted-foreground">Modified global API limits</p>
                </div>
                <div className="ml-auto text-xs text-muted-foreground">2m ago</div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Role created</p>
                  <p className="text-sm text-muted-foreground">Added 'Content Reviewer'</p>
                </div>
                <div className="ml-auto text-xs text-muted-foreground">1hr ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
