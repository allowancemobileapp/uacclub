'use server';

import { getPersonalizedRecommendations } from '@/ai/flows/personalized-program-recommendations';
import { z } from 'zod';

const formSchema = z.object({
  age: z.coerce.number().min(3, "Child must be at least 3 years old.").max(18, "Child must be at most 18 years old."),
  interests: z.string().min(3, "Please describe at least one interest.").trim(),
  goals: z.string().min(3, "Please describe at least one goal.").trim(),
});

export type State = {
  message?: string | null;
  recommendations?: {
    programName: string;
    description: string;
  }[];
  errors?: {
    age?: string[];
    interests?: string[];
    goals?: string[];
  } | null;
}

export async function getRecommendations(prevState: State | undefined, formData: FormData): Promise<State> {
  const validatedFields = formSchema.safeParse({
    age: formData.get('age'),
    interests: formData.get('interests'),
    goals: formData.get('goals'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
    };
  }

  try {
    const result = await getPersonalizedRecommendations(validatedFields.data);
    if (result && result.recommendations) {
      return { 
        recommendations: result.recommendations, 
        message: 'Here are your personalized recommendations!',
        errors: null,
      };
    }
    return { message: 'Could not generate recommendations at this time.', errors: null };
  } catch (error) {
    console.error('AI recommendation error:', error);
    return { message: 'An unexpected error occurred while generating recommendations.', errors: null };
  }
}
