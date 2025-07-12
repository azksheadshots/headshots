"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Camera, Menu } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#ai-styler', label: 'AI Styler' },
    { href: '#about', label: 'About' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : 'bg-background'}`}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Camera className="h-6 w-6 text-secondary" />
          <span className="font-bold text-lg text-secondary">Headshot Pro</span>
        </Link>
        <nav className="hidden w-full items-center gap-6 text-lg font-medium md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:w-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                  <Camera className="h-6 w-6 text-secondary" />
                  <span className="font-bold text-lg text-secondary">Headshot Pro</span>
                </Link>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <a href="#contact" className="hidden md:block">
            <Button>Book Now</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
