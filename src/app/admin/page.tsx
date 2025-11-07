import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Admin | UAC',
  description: 'Content Management System for UAC.',
};

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-md mx-auto">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline">Admin Area</CardTitle>
            <CardDescription>This area is restricted.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A fully-featured content management system would be implemented here, allowing administrators to update website content, manage programs, view registrations, and more.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
