import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { coreValues } from '@/lib/data';
import { Check } from 'lucide-react';

const heroImage = placeholderImages.find((img) => img.id === 'hero');


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[70vh] md:h-[80vh] text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint="children holding globe books"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end items-center text-center p-4 md:p-8 pb-16 md:pb-24">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight leading-tight text-shadow-lg">
            Raising Kingdom Children as Lights for Global Impact
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-shadow">
            Building a world where every child grows in faith, wisdom, purpose, and leadership.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Link href="/join-us/childrens-club">Join the Children’s Club</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link href="/programs">Explore Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none text-foreground">
               <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">About UAC</h2>
              <p>
                The Universal Ambassadors Children’s Club (UAC) is a faith-based global children’s initiative dedicated to raising Kingdom-minded children who embody light, love, and leadership. We nurture boys and girls between ages 5–16 to discover their divine identity, build godly character, and develop their unique gifts in service to God and humanity.
              </p>
              <p>
                We believe that true education begins with the development of the spirit, soul, and body, equipping children to grow in wisdom, strength, and purpose according to God’s original design.
              </p>
              <p className="text-sm text-muted-foreground">
                The UAC is an initiative of the KOGA International Agency for Women and Youths Development in Africa, powered by Mothers of the Nations Global Communications Ltd, and works to raise a generation of Kingdom children who shine as lights and leaders in education, creativity, sports, and service.
              </p>
            </div>
             <div className="space-y-8">
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="font-headline">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">To raise a generation of Kingdom Children who live in truth, walk in love, and impact the world with excellence.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="font-headline">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">To mentor and equip children through faith-based learning, creative expression, sportsmanship, global exposure, and community service — inspiring them to lead with purpose, confidence, and compassion.</p>
                  </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>
      
       <section id="core-values" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Values</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
              The principles that guide every aspect of our mission.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.value} className="text-center p-6">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Check className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{value.value}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="donate-cta" className="py-16 md:py-24 text-center bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Support Our Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Your generous donations help us continue to provide quality programs and resources for children. Every gift makes a difference.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent-orange hover:bg-accent-orange/90 text-primary-foreground">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
