'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  parentName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  parentEmail: z.string().email({ message: 'Please enter a valid email.' }),
  parentPhone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  childName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  childAge: z.coerce.number().min(8, { message: 'Child must be at least 8 years old.' }).max(18, { message: 'Child must be at most 18 years old.' }),
  travelHistory: z.string().optional(),
});

export function SummerSchoolForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      childName: '',
      travelHistory: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsappNumber = '2349023567833';
    const message = `
*New UAC Summer School Application*

*Parent/Guardian Information*
Name: ${values.parentName}
Email: ${values.parentEmail}
Phone: ${values.parentPhone}

*Child Information*
Name: ${values.childName}
Age: ${values.childAge}
Previous International Travel: ${values.travelHistory || 'None'}
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    toast({
      title: 'Redirecting to WhatsApp',
      description: 'Please send the pre-filled message to complete your application.',
    });

    window.open(whatsappUrl, '_blank');
    
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-headline">Parent/Guardian Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="parentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="parentEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="e.g., jane.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="parentPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="e.g., (123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-headline">Child Information</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="childName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Child's Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="childAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Child's Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
           </div>
          <FormField
            control={form.control}
            name="travelHistory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Previous International Travel (Optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.g., UK, USA for vacation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full md:w-auto">
          {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Apply for Summer School
        </Button>
      </form>
    </Form>
  );
}
