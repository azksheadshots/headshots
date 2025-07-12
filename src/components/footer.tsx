import Link from 'next/link';
import { Camera } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-accent">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Camera className="h-6 w-6 text-secondary" />
          <span className="font-bold text-lg text-secondary">Headshot Pro</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Headshot Pro. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Twitter
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Instagram
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
