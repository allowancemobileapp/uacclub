import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Logo } from './logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-center md:text-left text-muted-foreground text-sm max-w-xs">
              Nurturing tomorrow&apos;s leaders through faith, knowledge, and community.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-sm text-muted-foreground hover:text-primary">Programs</Link></li>
              <li><Link href="/events" className="text-sm text-muted-foreground hover:text-primary">Events</Link></li>
              <li><Link href="/donate" className="text-sm text-muted-foreground hover:text-primary">Donate</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Universal Ambassadors Children’s Club. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
