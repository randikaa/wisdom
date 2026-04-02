"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Role = "super_admin" | "office_admin" | "teacher" | "student" | null

interface User {
  id: string
  name: string
  role: Role
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (role: Role) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const mockUsers: Record<NonNullable<Role>, User> = {
  super_admin: {
    id: "1",
    name: "Malith Perera",
    role: "super_admin",
    email: "admin@wisdom.edu",
    avatar: "https://i.pravatar.cc/150?u=admin",
  },
  office_admin: {
    id: "2",
    name: "Nimali Silva",
    role: "office_admin",
    email: "office@wisdom.edu",
    avatar: "https://i.pravatar.cc/150?u=office",
  },
  teacher: {
    id: "3",
    name: "Kumara Dharmasena",
    role: "teacher",
    email: "jsmith@wisdom.edu",
    avatar: "https://i.pravatar.cc/150?u=teacher",
  },
  student: {
    id: "4",
    name: "Kasun Bandara",
    role: "student",
    email: "jdoe@wisdom.edu",
    avatar: "https://i.pravatar.cc/150?u=student",
  },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("lms_user_role") as Role
    if (stored && mockUsers[stored]) {
      setUser(mockUsers[stored])
    }
  }, [])

  const login = (role: Role) => {
    if (role && mockUsers[role]) {
      setUser(mockUsers[role])
      localStorage.setItem("lms_user_role", role)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("lms_user_role")
  }

  if (!mounted) return null

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
