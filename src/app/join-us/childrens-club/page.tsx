import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChildrensClubForm } from './childrens-club-form';

export const metadata = {
  title: 'Register for Children’s Club | UAC',
  description: 'Join the Universal Ambassadors Children’s Club.',
};

export default function ChildrensClubPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Register for the Children&apos;s Club</CardTitle>
                <CardDescription>Fill out the form below to register your child. We can&apos;t wait to welcome you to the UAC family!</CardDescription>
              </CardHeader>
              <CardContent>
                <ChildrensClubForm />
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
