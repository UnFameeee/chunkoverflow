
import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  Box, 
  BarChart, 
  LogOut 
} from "lucide-react";

export function AdminLayout() {
  const location = useLocation();

  const navItems = [
    {
      title: "Trang Chủ",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Quản Lý Công Cụ",
      href: "/admin/tools",
      icon: Box,
    },
    {
      title: "Quản Lý Người Dùng",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Phân Tích",
      href: "/admin/analytics",
      icon: BarChart,
    },
    {
      title: "Cài Đặt",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-20 flex h-full w-64 flex-col border-r bg-background">
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/admin" className="flex items-center gap-2 font-semibold">
            <Box className="h-5 w-5" />
            <span className="text-lg font-bold">ChunkOverflow Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto p-2">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button
                  asChild
                  variant={location.pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    location.pathname === item.href
                      ? "bg-secondary text-secondary-foreground"
                      : ""
                  )}
                >
                  <Link to={item.href} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto p-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
            <Link to="/" className="flex items-center gap-3">
              <LogOut className="h-4 w-4" />
              Quay lại trang chính
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="pl-64 w-full">
        <header className="sticky top-0 z-10 h-14 border-b bg-background/95 backdrop-blur">
          <div className="flex h-14 items-center justify-between px-6">
            <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">admin@chunkoverflow.com</span>
            </div>
          </div>
        </header>
        <main className="container py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
