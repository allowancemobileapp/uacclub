'use server';
/**
 * @fileOverview AI-powered program recommendation flow for UAC members.
 *
 * - getPersonalizedRecommendations - A function that returns personalized program recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  age: z.number().describe('The age of the child in years.'),
  interests: z.string().describe('A comma-separated list of the child\'s interests.'),
  goals: z.string().describe('The child\'s goals within the UAC framework.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      programName: z.string().describe('The name of the recommended program.'),
      description: z.string().describe('A brief description of the program and why it is recommended.'),
    })
  ).describe('A list of personalized program recommendations.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI assistant specializing in recommending programs and activities within the Universal Ambassadors Children’s Club (UAC). Given a child's age, interests, and goals, provide personalized program recommendations.

Age: {{{age}}}
Interests: {{{interests}}}
Goals: {{{goals}}}

Consider the UAC's mission to nurture children's spiritual, intellectual, and social development when making recommendations. Ensure that the recommended programs align with the child's specific needs and the UAC's values.

Format your output as a JSON array of program recommendations, including the program name and a brief description explaining why it is a good fit for the child.
`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
