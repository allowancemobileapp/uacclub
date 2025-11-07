import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DonateForm } from './donate-form';
import { placeholderImages } from '@/lib/placeholder-images.json';

export const metadata = {
  title: 'Donate | UAC',
  description: 'Support the mission of the Universal Ambassadors Children’s Club.',
};

const pageImage = placeholderImages.find((img) => img.id === 'donate-page');

export default function DonatePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
             <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                 <CardHeader>
                  <CardTitle className="font-headline text-3xl">Support Our Mission</CardTitle>
                  <CardDescription>Your generous contribution helps us empower the next generation of leaders. Every donation, no matter the size, makes a significant impact on a child&apos;s life.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DonateForm />
                </CardContent>
              </div>
              {pageImage && (
                <div className="relative min-h-[300px] md:min-h-0">
                   <Image
                      src={pageImage.imageUrl}
                      alt={pageImage.description}
                      fill
                      className="object-cover rounded-r-lg"
                      data-ai-hint={pageImage.imageHint}
                    />
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
