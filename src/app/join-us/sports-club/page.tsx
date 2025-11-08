import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SportsClubForm } from './sports-club-form';

export const metadata = {
  title: 'Join the UAC Sports Club | UAC',
  description: 'Register your child for the UAC Sports Club.',
};

export default function SportsClubPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Join the UAC Sports Club</CardTitle>
                <CardDescription>Fill out the form to register for our sports programs.</CardDescription>
              </CardHeader>
              <CardContent>
                <SportsClubForm />
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
