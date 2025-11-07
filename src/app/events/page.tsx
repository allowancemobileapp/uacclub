import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { events } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';

export const metadata = {
  title: 'Events Calendar | UAC',
  description: 'Stay up to date with the latest events at Universal Ambassadors Children’s Club.',
};

export default function EventsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Upcoming Events</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Join us for our exciting fellowships, festivals, and conferences. There&apos;s always something happening at UAC!
          </p>
        </div>
        <div className="relative space-y-12">
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-border hidden md:block" aria-hidden="true"></div>
          {events.map((event, index) => {
            const eventImage = placeholderImages.find(p => p.id === event.imageId);
            const isLeft = index % 2 === 0;
            return (
              <div key={event.id} className="relative flex justify-center">
                <div className="md:w-1/2 flex justify-center">
                  <div className={`w-full max-w-md mx-4 md:mx-0 md:max-w-sm lg:max-w-md ${isLeft ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {eventImage && (
                        <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={eventImage.imageUrl}
                            alt={eventImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={eventImage.imageHint}
                          />
                        </div>
                      )}
                      <CardHeader>
                        <Badge variant="outline" className="w-fit mb-2">{event.id.includes('annual') || event.id.includes('conference') ? 'Special Event' : 'Recurring Event'}</Badge>
                        <CardTitle>{event.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground pt-2">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
