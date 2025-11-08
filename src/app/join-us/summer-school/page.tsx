import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SummerSchoolForm } from './summer-school-form';

export const metadata = {
  title: 'Apply for Summer School Abroad | UAC',
  description: 'Apply for the UAC Summer School Abroad Program.',
};

export default function SummerSchoolPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Apply for Summer School Abroad</CardTitle>
                <CardDescription>Fill out the application form for our international summer school program.</CardDescription>
              </CardHeader>
              <CardContent>
                <SummerSchoolForm />
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
