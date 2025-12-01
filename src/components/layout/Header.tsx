import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
const navLinks = [
  { to: '/', label: 'Trang Chủ' },
  { to: '/about', label: 'Về Chúng Tôi' },
  { to: '/products', label: 'Sản Phẩm' },
  { to: '/gallery', label: 'Thư Viện' },
  { to: '/contact', label: 'Liên Hệ' },
];
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-display text-gradient">Tài L���c Phát</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-4 p-4">
                  <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg font-display text-gradient">Tài Lộc Phát</span>
                  </Link>
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'block px-3 py-2 rounded-md text-base font-medium',
                          isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-accent'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}