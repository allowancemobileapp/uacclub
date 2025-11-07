import { ContactForm } from './contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Suspense } from 'react';

export const metadata = {
  title: 'Contact Us | UAC',
  description: 'Get in touch with the Universal Ambassadors Children’s Club.',
};

function ContactPageContent() {
  return (
    <div className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get In Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            We&apos;d love to hear from you! Whether you have a question, feedback, or a prayer request, our team is here to help.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold font-headline">Contact Information</h3>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p className="text-muted-foreground">123 Kingdom Ave, Faith City, FC 45678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-muted-foreground">hello@uac.org</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
