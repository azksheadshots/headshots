"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/#services', label: 'Services', id: 'services' },
  { href: '/#pricing', label: 'Pricing', id: 'pricing' },
  { href: '/#portfolio', label: 'Portfolio', id: 'portfolio' },
  { href: '/#about', label: 'About', id: 'about' },
  { href: '/#blog', label: 'Blog', id: 'blog' },
  { href: '/#contact', label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        { rootMargin: '-50% 0px -50% 0px' }
    );

    const elements = navLinks.map(link => document.getElementById(link.id)).filter(el => el);
    elements.forEach(el => observer.observe(el));

    return () => {
        elements.forEach(el => observer.unobserve(el));
    };
}, [pathname]);


  return (
    <header className={cn(`sticky top-0 z-50 w-full transition-colors duration-300`, isScrolled ? 'border-b bg-primary/95 backdrop-blur-sm text-primary-foreground' : 'bg-primary text-primary-foreground')}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image src="https://placehold.co/180x75.png" alt="KS Headshots Logo" width={180} height={75} className="object-contain" />
        </Link>
        
        <div className="flex w-full items-center justify-end gap-4">
          <nav className="hidden items-center gap-6 text-lg font-medium md:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={cn(
                  "text-sm font-bold text-primary-foreground/80 transition-colors hover:text-accent",
                  activeSection === link.id && "text-accent border-b-2 border-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent border-primary-foreground/50 hover:bg-primary-foreground/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground">
              <div className="grid gap-6 p-6">
                 <Link href="/" className="flex items-center gap-2">
                    <Image src="https://placehold.co/180x75.png" alt="KS Headshots Logo" width={180} height={75} className="object-contain" />
                </Link>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-primary-foreground/80 hover:text-accent">
                      {link.label}
                    </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <a href="/#contact" className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Book Now</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
