'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

const whatsappBaseUrl = 'https://wa.me/2349023567833';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/events', label: 'Events' },
  {
    href: `${whatsappBaseUrl}?text=I'm interested in the Children's Club`,
    label: "Children's Club",
  },
  {
    href: `${whatsappBaseUrl}?text=I'm interested in the Sports Club`,
    label: 'Sports Club',
  },
  {
    href: `${whatsappBaseUrl}?text=I'm interested in the Summer School`,
    label: 'Summer School',
  },
  {
    href: `${whatsappBaseUrl}?text=I'm interested in partnering with you`,
    label: 'Partner With Us',
  },
];


const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isExternal = href.startsWith('http');
  const isActive = !isExternal && pathname === href;

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );
};


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center space-x-4 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
           <Button asChild className="hidden sm:inline-flex bg-accent-orange hover:bg-accent-orange/90">
            <Link href={`${whatsappBaseUrl}?text=I'd like to make a donation.`} target="_blank" rel="noopener noreferrer">Donate</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                 <SheetTitle>
                    <div className="mb-8">
                       <Logo />
                    </div>
                </SheetTitle>
              </SheetHeader>
              <div className="p-4">
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        !link.href.startsWith('http') && pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 bg-accent-orange hover:bg-accent-orange/90" size="lg">
                    <Link href={`${whatsappBaseUrl}?text=I'd like to make a donation.`} target="_blank" rel="noopener noreferrer">Donate Now</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
