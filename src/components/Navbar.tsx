import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Vote, Home, Users, BarChart3, Info, Phone, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/vote", label: "Vote", icon: Vote },
    { path: "/candidates", label: "Candidates", icon: Users },
    { path: "/results", label: "Results", icon: BarChart3 },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Vote className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden sm:inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              College Voting Portal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path}>
                <Button
                  variant={isActive(path) ? "default" : "ghost"}
                  size="sm"
                  className="text-sm"
                >
                  {label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Link to="/admin">
              <Button variant="outline" size="sm">
                <User className="mr-2 h-4 w-4" />
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map(({ path, label, icon: Icon }) => (
                  <Link key={path} to={path}>
                    <Button
                      variant={isActive(path) ? "default" : "ghost"}
                      className="w-full justify-start"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {label}
                    </Button>
                  </Link>
                ))}
                <Link to="/admin">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Admin Login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
