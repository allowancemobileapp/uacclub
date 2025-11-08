import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DonateForm } from './donate-form';

export const metadata = {
  title: 'Donate | UAC',
  description: 'Support the mission of the Universal Ambassadors Children’s Club.',
};

export default function DonatePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Support Our Mission</CardTitle>
                <CardDescription>Your generous donation helps us empower the next generation of Kingdom leaders. Thank you for your support!</CardDescription>
              </CardHeader>
              <CardContent>
                <DonateForm />
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
