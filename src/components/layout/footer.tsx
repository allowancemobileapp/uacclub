import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-left text-muted-foreground text-sm max-w-sm">
              An Initiative of the KOGA International Agency for Women and Youths Development in Africa.
              <br />
              Powered by Mothers of the Nations Global Communications Ltd.
            </p>
            <p className="mt-4 font-semibold">Motto: Raising Kingdom Children as Lights for Global Impact.</p>
          </div>
          <div className="">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 flex-shrink-0"/><span>Office of the National Coordinator, KOGA International Agency</span></li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1 flex-shrink-0" /><a href="mailto:beulahotuya55@gmail.com" className="hover:text-primary">beulahotuya55@gmail.com</a></li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 flex-shrink-0" /><a href="tel:+2349023567833" className="hover:text-primary">+234 902 356 7833</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
               <Link href="#" aria-label="YouTube">
                <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
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
