import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { programs } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Our Programs | UAC',
  description: 'Explore the programs offered at Universal Ambassadors Children’s Club.',
};

export default function ProgramsPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Programs</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            From sports and arts to leadership and international travel, our programs are designed to nurture every child&apos;s unique potential.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const programImage = placeholderImages.find(p => p.id === program.imageId);
            return (
              <Card key={program.slug} id={program.slug} className="flex flex-col md:flex-row overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-xl">
                {programImage && (
                  <div className="relative h-64 md:h-auto md:w-1/3">
                    <Image
                      src={programImage.imageUrl}
                      alt={programImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={programImage.imageHint}
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1">
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{program.longDescription}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/contact?subject=Enrollment in ${encodeURIComponent(program.title)}`}>
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
