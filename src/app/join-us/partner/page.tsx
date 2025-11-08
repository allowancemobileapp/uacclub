import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PartnerForm } from './partner-form';

export const metadata = {
  title: 'Partner With Us | UAC',
  description: 'Partner with the Universal Ambassadors Children’s Club.',
};

export default function PartnerPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Partner With Us</CardTitle>
                <CardDescription>We'd love to explore how we can work together. Please fill out the form below.</CardDescription>
              </CardHeader>
              <CardContent>
                <PartnerForm />
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
