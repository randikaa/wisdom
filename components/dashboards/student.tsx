import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Star, AlertCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <BookOpen className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Current semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
            <Star className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8</div>
            <p className="text-xs text-muted-foreground">Top 10% of class</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
            <AlertCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">2</div>
            <p className="text-xs text-muted-foreground">Due this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 text-muted-foreground pb-2">
            <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
            <FileText className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84</div>
            <p className="text-xs text-muted-foreground">36 left to graduate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Keep track of your assignment due dates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-destructive/50 bg-destructive/10 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-destructive">Calculus II - Final Project</h4>
                  <p className="text-sm text-muted-foreground">Due: Today at 11:59 PM</p>
                </div>
                <Button variant="destructive" size="sm">Submit Now</Button>
              </div>
              <div className="p-4 border rounded-lg bg-card flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">History 101 - Essay 2</h4>
                  <p className="text-sm text-muted-foreground">Due: Friday at 5:00 PM</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Grades</CardTitle>
            <CardDescription>Your latest academic performance.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Physics Lab Report 3</p>
                  <p className="text-xs text-muted-foreground">Graded yesterday</p>
                </div>
                <div className="font-bold text-green-500">95/100</div>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Lit Review Draft</p>
                  <p className="text-xs text-muted-foreground">Graded 3 days ago</p>
                </div>
                <div className="font-bold">88/100</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
