import { RecommendationForm } from './recommendation-form';

export const metadata = {
  title: 'Personalized Recommendations | UAC',
  description: 'Get personalized program recommendations for your child.',
};

export default function RecommendationsPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Find the Perfect Fit</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Our AI-powered tool helps you discover the ideal UAC programs for your child based on their unique interests and goals.
          </p>
        </div>
        <RecommendationForm />
      </div>
    </div>
  );
}
