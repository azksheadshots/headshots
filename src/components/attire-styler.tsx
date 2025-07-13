
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { getAttireSuggestionAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2, PartyPopper, TriangleAlert, Wand2 } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

// Define the form schema to match the Genkit flow's input
const formSchema = z.object({
  profession: z.string().min(3, {
    message: 'Please enter a profession (e.g., "doctor", "artist").',
  }),
});

export default function AttireStyler() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profession: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    const result = await getAttireSuggestionAction({
      profession: values.profession,
    });

    if (result.success && result.suggestions) {
      if (result.suggestions.length > 0) {
        setSuggestions(result.suggestions);
      } else {
        setError("We couldn't generate suggestions for that profession. Please try another one.");
      }
    } else {
      setError(result.error || 'An unexpected error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-background">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="profession">Enter Your Profession</Label>
                  <FormControl>
                    <Input id="profession" placeholder="e.g., Lawyer, Graphic Designer, Chef" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Get Suggestions
            </Button>
          </form>
        </Form>

        <div className="mt-6">
          {isLoading && (
            <div className="flex flex-col items-center justify-center text-center text-muted-foreground rounded-lg bg-muted min-h-[200px] p-4">
                <Loader2 className="h-8 w-8 animate-spin mb-2" />
                <p>Styling your perfect look...</p>
            </div>
          )}
          
          {error && (
            <Alert variant="destructive" className="min-h-[200px]">
              <TriangleAlert className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {!isLoading && !error && suggestions.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center"><PartyPopper className="h-5 w-5 mr-2 text-primary"/>Your Style Suggestions</h3>
              <ul className="list-none space-y-2">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="p-3 bg-muted rounded-md flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {!isLoading && !error && suggestions.length === 0 && (
             <div className="flex flex-col items-center justify-center text-center text-muted-foreground rounded-lg bg-muted min-h-[200px] p-4">
                <Wand2 className="h-8 w-8 mb-2"/>
                <p>Your AI-powered suggestions will appear here.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
