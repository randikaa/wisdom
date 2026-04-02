import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, CheckCircle, Clock } from "lucide-react"

export function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">My Courses</CardTitle>
            <BookOpen className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active this semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">112</div>
            <p className="text-xs text-muted-foreground">Across all sections</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
            <Clock className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">28</div>
            <p className="text-xs text-muted-foreground">Submissions to review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
            <CheckCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">B+</div>
            <p className="text-xs text-muted-foreground">Estimated overall</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Classes</CardTitle>
            <CardDescription>Your schedule for the next 7 days.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-card flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">CS101 - Intro to Programming</h4>
                  <p className="text-sm text-muted-foreground">Today at 10:00 AM • Room 302</p>
                </div>
                <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">In 2 hours</div>
              </div>
              <div className="p-4 border rounded-lg bg-card flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">CS205 - Data Structures</h4>
                  <p className="text-sm text-muted-foreground">Tomorrow at 1:00 PM • Room 410</p>
                </div>
              </div>
              <div className="p-4 border rounded-lg bg-card flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Office Hours</h4>
                  <p className="text-sm text-muted-foreground">Wednesday at 3:00 PM • Online</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
            <CardDescription>Assignments ready for grading.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Midterm Essay</p>
                    <p className="text-sm text-muted-foreground">Submitted by Kasun Bandara</p>
                  </div>
                  <div className="ml-auto text-xs font-medium text-primary cursor-pointer hover:underline">Grade</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
