import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link to="/" className="font-bold text-lg flex items-center mr-8">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M4 16H12V4H4V16ZM14 26H22V14H14V26ZM24 4V10H30V16H24V26H16V4H24Z"
              fill="currentColor"
            />
          </svg>
          Taskify
        </Link>

        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</Link>
          <Link to="/ai-assistant" className="text-foreground/70 hover:text-foreground transition-colors">AI Assistant</Link>
          <Link
            to="/pricing"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Button asChild>
            <Link to="/signup">Get Started Free</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="ml-auto md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <SheetHeader>Taskify</SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/ai-assistant" className="text-foreground/70 hover:text-foreground transition-colors" onClick={() => setOpen(false)}>AI Assistant</Link>
              <Link
                to="/pricing"
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Button asChild className="w-full">
                <Link to="/signup" onClick={() => setOpen(false)}>Get Started Free</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
