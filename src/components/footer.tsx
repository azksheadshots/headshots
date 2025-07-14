import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full border-t bg-primary text-primary-foreground">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="https://placehold.co/180x75.png" alt="KS Headshots Logo" width={180} height={75} className="object-contain" />
            </Link>
            <p className="text-sm text-primary-foreground/80">
                © {new Date().getFullYear()} KS Headshots. All rights reserved.
            </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center md:justify-end">
          <Link href="/#services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
            Services
          </Link>
          <Link href="/#portfolio" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
            Portfolio
          </Link>
          <Link href="/faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
            FAQ
          </Link>
          <Link href="/#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
            Contact
          </Link>
          <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
            Twitter
          </Link>
          <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
            Instagram
          </Link>
          <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

