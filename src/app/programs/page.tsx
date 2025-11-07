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
import { programCategories } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata = {
  title: 'Our Programs | UAC',
  description: 'Building Kingdom Leaders — One Child at a Time',
};

const carouselImages = [
  placeholderImages.find((p) => p.id === 'sports-club'),
  placeholderImages.find((p) => p.id === 'talent-festival'),
  placeholderImages.find((p) => p.id === 'summer-school'),
  placeholderImages.find((p) => p.id === 'leadership-training'),
  placeholderImages.find((p) => p.id === 'community-impact'),
].filter(Boolean);

const whatsappBaseUrl = 'https://wa.me/2349023567833';

export default function ProgramsPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Building Kingdom Leaders — One Child at a Time</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Our programs are designed to nurture every child&apos;s unique potential in a faith-based, supportive, and engaging environment.
          </p>
        </div>

        <div className="mb-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {carouselImages.map((img, index) => (
                img && (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={img.imageUrl}
                          alt={img.description}
                          fill
                          className="object-cover"
                          data-ai-hint={img.imageHint}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                )
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-12">
          {programCategories.map((category) => {
            const categoryImage = placeholderImages.find(p => p.id === category.imageId);
            return (
              <Card key={category.slug} id={category.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 flex flex-col justify-center">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl mb-2">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-3">
                      <ul className="space-y-2">
                        {category.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                       {category.quote && (
                        <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
                          {category.quote}
                        </blockquote>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <Link href={`${whatsappBaseUrl}?text=I have a question about ${encodeURIComponent(category.title)}`} target="_blank" rel="noopener noreferrer">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                  {categoryImage && (
                    <div className="relative min-h-[300px] md:min-h-0">
                       <Image
                          src={categoryImage.imageUrl}
                          alt={categoryImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={categoryImage.imageHint}
                        />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
