'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { getRecommendations, type State } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Bot, Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting Recommendations...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get Recommendations
        </>
      )}
    </Button>
  );
}

export function RecommendationForm() {
  const [state, formAction] = useActionState<State | undefined, FormData>(getRecommendations, undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message && state.errors) {
      toast({
        title: "Oops!",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <Card>
        <CardHeader>
          <CardTitle>Recommendation Tool</CardTitle>
          <CardDescription>Tell us about your child, and our AI will suggest the best-fit programs and activities at UAC.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="age">Child&apos;s Age</Label>
              <Input id="age" name="age" type="number" placeholder="e.g., 12" required />
              {state?.errors?.age && <p className="text-sm text-destructive">{state.errors.age[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="interests">Interests</Label>
              <Textarea id="interests" name="interests" placeholder="e.g., singing, playing soccer, drawing" required />
              {state?.errors?.interests && <p className="text-sm text-destructive">{state.errors.interests[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="goals">Goals</Label>
              <Textarea id="goals" name="goals" placeholder="e.g., build confidence, learn a new skill, make friends" required />
              {state?.errors?.goals && <p className="text-sm text-destructive">{state.errors.goals[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-headline flex items-center">
          <Bot className="mr-2 h-6 w-6 text-primary" />
          AI Recommendations
        </h3>
        {state?.recommendations ? (
          <div className="space-y-4">
            {state.recommendations.map((rec, index) => (
              <Card key={index} className="bg-primary/5">
                <CardHeader>
                  <CardTitle>{rec.programName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{rec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full">
            <Sparkles className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">Your personalized recommendations will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
