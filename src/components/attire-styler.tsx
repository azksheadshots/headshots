'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wand2, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { getAttireSuggestionAction } from '@/lib/actions';

const FormSchema = z.object({
  industry: z.string().min(2, 'Industry is required.'),
  impression: z.string().min(2, 'Desired impression is required.'),
});

type FormValues = z.infer<typeof FormSchema>;

type Suggestion = {
    title: string;
    description: string;
    items: string[];
};

export function AttireStyler() {
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);
    try {
      const result = await getAttireSuggestionAction(data);
      if (result.success && result.suggestions) {
        setSuggestions(result.suggestions);
      } else {
        setError(result.error || 'The AI could not generate suggestions. Please try different terms.');
      }
    } catch (e) {
      console.error(e);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="styler" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Wand2 className="h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">AI Attire Styler</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Not sure what to wear? Get instant, AI-powered attire suggestions tailored to your industry and desired impression.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle>Get Your Suggestions</CardTitle>
              <CardDescription>Tell us a bit about yourself, and our AI will do the rest.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="industry">Your Industry</Label>
                  <Input id="industry" placeholder="e.g., Tech, Law, Creative Arts" {...register('industry')} />
                  {errors.industry && <p className="text-sm text-destructive">{errors.industry.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="impression">Desired Impression</Label>
                  <Input id="impression" placeholder="e.g., Confident, Approachable, Authoritative" {...register('impression')} />
                  {errors.impression && <p className="text-sm text-destructive">{errors.impression.message}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Suggestions
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {error && (
            <div className="mt-8 flex items-center justify-center rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
              <AlertCircle className="mr-3 h-5 w-5" />
              <p>{error}</p>
            </div>
          )}

          {suggestions && suggestions.length > 0 && (
            <div className="mt-12 space-y-8">
                <h3 className="text-2xl font-bold text-center text-primary">Your Style Recommendations</h3>
              {suggestions.map((suggestion, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                        <Wand2 size={20}/>
                        {suggestion.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{suggestion.description}</p>
                    <ul className="space-y-2">
                        {suggestion.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
