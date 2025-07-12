import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full border-t bg-primary text-primary-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <Link href="/" className="flex items-center gap-2">
           <Image src="https://placehold.co/120x50.png" alt="Headshot Pro Logo" width={120} height={50} data-ai-hint="logo" />
        </Link>
        <p className="text-sm text-primary-foreground/80">
          © {new Date().getFullYear()} Headshot Pro. All rights reserved.
        </p>
        <div className="flex gap-4">
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
