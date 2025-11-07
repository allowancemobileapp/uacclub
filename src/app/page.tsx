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
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bird, BrainCircuit, Users, Calendar, Quote } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { programs, events } from '@/lib/data';

const heroImage = placeholderImages.find((img) => img.id === 'hero');
const featuredPrograms = programs.slice(0, 3);
const upcomingEvent = events[0];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[60vh] md:h-[70vh] text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight leading-tight">
            Nurturing Tomorrow&apos;s Leaders, Today.
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Join the Universal Ambassadors Children’s Club (UAC) and embark on a journey of spiritual, intellectual, and social growth.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/register">Join Us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Mission</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
              To raise a generation of children who are spiritually grounded, intellectually sharp, and socially responsible, ready to be ambassadors of God&apos;s Kingdom.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Bird className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Spiritual Development</h3>
              <p className="mt-2 text-muted-foreground">Fostering a deep and personal relationship with God through fellowships, bible studies, and worship.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <BrainCircuit className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Intellectual Growth</h3>
              <p className="mt-2 text-muted-foreground">Encouraging academic excellence, critical thinking, and creativity through our diverse programs.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Social Responsibility</h3>
              <p className="mt-2 text-muted-foreground">Instilling values of leadership, service, and community engagement to make a positive impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Programs</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
              Discover a wide range of activities designed to unlock your child&apos;s potential.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => {
              const programImage = placeholderImages.find(p => p.id === program.imageId);
              return (
                <Card key={program.slug} className="overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                  {programImage && (
                    <div className="relative h-56 w-full">
                      <Image
                        src={programImage.imageUrl}
                        alt={programImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={programImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 text-primary">
                      <Link href={`/programs#${program.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="events" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <Badge variant="secondary" className="mb-4">Upcoming Event</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-headline">{upcomingEvent.title}</h2>
              <p className="flex items-center justify-center md:justify-start mt-4 text-muted-foreground text-lg"><Calendar className="mr-2 h-5 w-5" /> {upcomingEvent.date}</p>
              <p className="mt-4 text-muted-foreground">{upcomingEvent.description}</p>
              <Button asChild className="mt-6">
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
            <div>
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-10">
                  <blockquote className="text-center text-xl italic text-primary-foreground/90">
                    <Quote className="w-10 h-10 text-primary/50 mx-auto mb-4" />
                    "UAC has been a blessing for our family. Our children have grown so much in faith and confidence. We are truly grateful for this community."
                  </blockquote>
                  <p className="text-center mt-6 font-semibold">- The Adebayo Family</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="donate-cta" className="py-16 md:py-24 text-center bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Support Our Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Your generous donations help us continue to provide quality programs and resources for children. Every gift makes a difference.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
