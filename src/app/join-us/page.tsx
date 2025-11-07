import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Gift, Handshake, Heart } from 'lucide-react';

export const metadata = {
  title: 'Join Us | UAC',
  description: 'Our Creed and Call — Get involved with the Universal Ambassadors Children’s Club.',
};

const whatsappBaseUrl = 'https://wa.me/2349023567833';

export default function JoinUsPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Creed and Call</h1>
          <Card className="mt-8 bg-primary/10 border-primary/20">
            <CardContent className="p-8">
              <blockquote className="text-2xl italic text-primary-foreground/90 font-medium text-primary">
                “I am a Universal Ambassador, born of God, trained for purpose, rooted in truth, walking in love, and shining the light of Christ to my world.”
              </blockquote>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-5xl mx-auto">
           <Card className="shadow-lg">
             <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">Get Involved</CardTitle>
                <CardDescription className="text-lg">There are many ways to be a part of the UAC family. Find the one that's right for you.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">

                <ActionCard 
                  title="Register Your Child"
                  description="Enroll your child (ages 5-16) to become a UAC member and unlock a world of growth."
                  href={`${whatsappBaseUrl}?text=I want to register my child for the Children's Club.`}
                  buttonText="Join the Children's Club"
                  icon={<Heart className="w-8 h-8 text-primary" />}
                />
                
                <ActionCard 
                  title="Join the UAC Sports Club"
                  description="Sign up for our sports programs to build discipline, teamwork, and physical fitness."
                  href={`${whatsappBaseUrl}?text=I want to register my child for the Sports Club.`}
                  buttonText="Register for Sports Club"
                  icon={<Handshake className="w-8 h-8 text-primary" />}
                />

                <ActionCard 
                  title="Apply for Summer School Abroad"
                  description="Give your child an international learning experience through our exchange programs."
                  href={`${whatsappBaseUrl}?text=I want to apply for the Summer School Abroad program.`}
                  buttonText="Apply for Summer School"
                  icon={<Gift className="w-8 h-8 text-primary" />}
                />

                <ActionCard 
                  title="Volunteer or Partner With Us"
                  description="Become a mentor, coach, or sponsor to empower more children."
                  href={`${whatsappBaseUrl}?text=I'm interested in volunteering or partnering with UAC.`}
                  buttonText="Partner With Us"
                  icon={<Handshake className="w-8 h-8 text-primary" />}
                />

                <div className="md:col-span-2">
                   <ActionCard 
                    title="Donate"
                    description="Your generous contribution helps us expand our reach and deepen our impact."
                    href={`${whatsappBaseUrl}?text=I'd like to make a donation.`}
                    buttonText="Donate Now"
                    icon={<Gift className="w-8 h-8 text-primary" />}
                  />
                </div>
                
              </CardContent>
           </Card>
           
           <div className="text-center mt-12">
              <h2 className="text-3xl font-bold font-headline text-primary">
                Motto: Raising Kingdom Children as Lights for Global Impact.
              </h2>
           </div>
        </div>
      </div>
    </div>
  );
}

function ActionCard({ title, description, href, buttonText, icon }: { title: string, description: string, href: string, buttonText: string, icon: React.ReactNode }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-row items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex items-end">
        <Button asChild className="w-full">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
