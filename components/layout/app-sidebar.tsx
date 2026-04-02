import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useAuth } from "@/contexts/auth-context"
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Users,
  CreditCard,
  Calendar,
  FileCheck,
} from "lucide-react"

const getNavItems = (role: string | null) => {
  switch (role) {
    case "super_admin":
      return [
        { title: "Overview", icon: LayoutDashboard, url: "/dashboard" },
        { title: "User Management", icon: Users, url: "/dashboard/users" },
        { title: "System Settings", icon: Settings, url: "/dashboard/settings" },
      ]
    case "office_admin":
      return [
        { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
        { title: "Course Catalog", icon: BookOpen, url: "/dashboard/courses" },
        { title: "Students", icon: Users, url: "/dashboard/students" },
        { title: "Finances", icon: CreditCard, url: "/dashboard/finances" },
      ]
    case "teacher":
      return [
        { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
        { title: "My Courses", icon: BookOpen, url: "/dashboard/my-courses" },
        { title: "Schedule", icon: Calendar, url: "/dashboard/schedule" },
        { title: "Grading", icon: FileCheck, url: "/dashboard/grading" },
      ]
    case "student":
      return [
        { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
        { title: "My Learning", icon: GraduationCap, url: "/dashboard/learning" },
        { title: "Assignments", icon: FileCheck, url: "/dashboard/assignments" },
        { title: "Schedule", icon: Calendar, url: "/dashboard/schedule" },
      ]
    default:
      return []
  }
}

export function AppSidebar() {
  const { user } = useAuth()
  const items = getNavItems(user?.role || null)

  return (
    <Sidebar>
      <SidebarHeader className="h-16 flex items-center flex-row gap-3 px-4 border-b">
        <img src="/logo.jpeg" alt="Wisdom Logo" className="h-8 w-8 rounded-[5px] object-cover" />
        <h2 className="text-xl font-bold tracking-tight">Wisdom LMS</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.href = item.url
                      }
                    }}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        {user && (
          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-8 w-8 rounded-full border border-border"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground capitalize">
                {user.role?.replace("_", " ")}
              </span>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
