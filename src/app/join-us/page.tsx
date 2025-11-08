import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Gift, Handshake, Heart, UserPlus } from 'lucide-react';

export const metadata = {
  title: 'Join Us | UAC',
  description: 'Our Creed and Call — Get involved with the Universal Ambassadors Children’s Club.',
};

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
                  href="/join-us/childrens-club"
                  buttonText="Join the Children's Club"
                  icon={<UserPlus className="w-8 h-8 text-primary" />}
                />
                
                <ActionCard 
                  title="Join the UAC Sports Club"
                  description="Sign up for our sports programs to build discipline, teamwork, and physical fitness."
                  href="/join-us/sports-club"
                  buttonText="Register for Sports Club"
                  icon={<Heart className="w-8 h-8 text-primary" />}
                />

                <ActionCard 
                  title="Apply for Summer School Abroad"
                  description="Give your child an international learning experience through our exchange programs."
                  href="/join-us/summer-school"
                  buttonText="Apply for Summer School"
                  icon={<Gift className="w-8 h-8 text-primary" />}
                />

                <ActionCard 
                  title="Volunteer or Partner With Us"
                  description="Become a mentor, coach, or sponsor to empower more children."
                  href="/join-us/partner"
                  buttonText="Partner With Us"
                  icon={<Handshake className="w-8 h-8 text-primary" />}
                />
                
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
          <Link href={href}>
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
