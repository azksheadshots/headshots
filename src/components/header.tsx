"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#clothing-styler', label: 'Clothing Styler' },
    { href: '/#about', label: 'About' },
    { href: '/#blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isHomepage = pathname === '/';
      setIsScrolled(window.scrollY > 10);

      if (!isHomepage) {
        setActiveSection('');
        return;
      }

      let currentSection = '';
      const sections = navLinks.map(link => document.getElementById(link.href.substring(2))).filter(Boolean);
      
      const conferenceSection = document.getElementById('conference-pricing');
      if (conferenceSection) {
        sections.push(conferenceSection);
      }
      
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        sections.push(testimonialsSection);
      }

      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            
            if(section.id === 'conference-pricing'){
                currentSection = '/#pricing';
            } else {
                currentSection = `/#${section.id}`;
            }
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, navLinks]);



  return (
    <header className={cn(`sticky top-0 z-50 w-full transition-colors duration-300`, isScrolled ? 'border-b bg-primary/95 backdrop-blur-sm text-primary-foreground' : 'bg-primary text-primary-foreground')}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image src="/logo.png" alt="KS Headshots Logo" width={120} height={50} />
        </Link>
        
        <div className="flex w-full items-center justify-end gap-4">
          <nav className="hidden items-center gap-6 text-lg font-medium md:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={cn(
                  "text-sm font-bold text-primary-foreground/80 transition-colors hover:text-accent",
                  activeSection === link.href && "text-accent border-b-2 border-accent"
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
                    <Image src="/logo.png" alt="KS Headshots Logo" width={120} height={50} />
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

export default Header;
