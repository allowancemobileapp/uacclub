import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RegisterForm } from './register-form';
import { placeholderImages } from '@/lib/placeholder-images.json';

export const metadata = {
  title: 'Register | UAC',
  description: 'Join the Universal Ambassadors Children’s Club.',
};

const pageImage = placeholderImages.find((img) => img.id === 'register-page');

export default function RegisterPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Become a UAC Member</CardTitle>
                <CardDescription>Fill out the form below to register your child for the Universal Ambassadors Children’s Club. We can&apos;t wait to welcome you!</CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterForm />
              </CardContent>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Join Our Family</h1>
            <p className="text-lg text-muted-foreground mb-8">
              By joining UAC, your child gains access to a world of opportunities for growth, learning, and fun in a supportive, faith-based community.
            </p>
            {pageImage && (
              <div className="rounded-lg overflow-hidden shadow-xl">
                 <Image
                    src={pageImage.imageUrl}
                    alt={pageImage.description}
                    width={800}
                    height={500}
                    className="object-cover w-full"
                    data-ai-hint={pageImage.imageHint}
                  />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
