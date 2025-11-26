"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function AdminNav() {
  const router = useRouter()
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" })
    router.replace("/admin/login")
  }
  return (
    <div className="w-full border-b bg-white sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="font-semibold">Admin</div>
        <Button variant="outline" onClick={logout}>Se déconnecter</Button>
      </div>
    </div>
  )
}