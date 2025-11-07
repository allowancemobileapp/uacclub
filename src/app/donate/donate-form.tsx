'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Heart } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const amountOptions = [25, 50, 100, 250];

const formSchema = z.object({
  amount: z.coerce.number().min(5, { message: 'Donation must be at least $5.' }),
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

export function DonateForm() {
  const [customAmount, setCustomAmount] = useState('');
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 50,
      fullName: '',
      email: '',
    },
  });

  const selectedAmount = form.watch('amount');

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
    toast({
      title: 'Thank You!',
      description: `Your generous donation of $${values.amount} has been received.`,
    });
    form.reset();
    setCustomAmount('');
  }

  const handleAmountChange = (value: string) => {
    const numValue = parseInt(value, 10);
    form.setValue('amount', numValue);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    const numValue = parseInt(e.target.value, 10);
    if (!isNaN(numValue)) {
      form.setValue('amount', numValue);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-lg">Select Donation Amount</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={handleAmountChange}
                  value={String(field.value)}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {amountOptions.map(amount => (
                     <FormItem key={amount} className="flex-1">
                      <FormControl>
                        <RadioGroupItem value={String(amount)} className="sr-only" id={`amount-${amount}`} />
                      </FormControl>
                      <FormLabel
                        htmlFor={`amount-${amount}`}
                        className={cn(
                          "flex items-center justify-center p-4 rounded-md border-2 cursor-pointer transition-colors",
                          "hover:border-primary",
                          selectedAmount === amount && !customAmount ? "border-primary bg-primary/10" : "border-border"
                        )}
                      >
                        ${amount}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
               <Input 
                type="number"
                placeholder="Or enter custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className={cn(customAmount && "border-primary")}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
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
            name="email"
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

        <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Heart className="mr-2 h-4 w-4" />}
          Donate Now
        </Button>
      </form>
    </Form>
  );
}
