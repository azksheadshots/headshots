
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  // Capitalize the first letter of a string
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          let href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const label = segment.replace(/-/g, ' ');
          
          // Special case for the "services" path to link to the homepage section
          if (segment === 'services') {
              href = '/#services';
          }
           // Special case for the "blog" path to link to the homepage section
           if (segment === 'blog' && !isLast) {
            href = '/#blog';
           }

          return (
            <li key={href} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4" />
              {isLast ? (
                <span className="font-semibold text-foreground">{capitalize(label)}</span>
              ) : (
                <Link href={href} className="hover:text-primary">
                  {capitalize(label)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
