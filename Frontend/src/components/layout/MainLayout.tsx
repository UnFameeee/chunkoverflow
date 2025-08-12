
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xl font-bold">ChunkOverflow</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              )}
                              to={`/tools/${category.slug}`}
                            >
                              <div className="text-sm font-medium leading-none">{category.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {category.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="px-4 py-2 text-sm font-medium">
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/login">
                <UserCircle className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ChunkOverflow. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:underline">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:underline">Terms</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const categories = [
  {
    name: "Text Tools",
    slug: "text-tools",
    description: "Tools for text manipulation, formatting, and conversion."
  },
  {
    name: "Image Tools",
    slug: "image-tools",
    description: "Tools for image editing, conversion, and optimization."
  },
  {
    name: "Data Tools",
    slug: "data-tools",
    description: "Tools for data conversion, validation, and analysis."
  },
  {
    name: "Development Tools",
    slug: "development-tools",
    description: "Tools for developers including formatters, validators, and more."
  },
];
