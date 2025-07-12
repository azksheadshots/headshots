
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { getAttireSuggestionAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2, TriangleAlert } from 'lucide-react';

const formSchema = z.object({
  professionDescription: z.string().min(3, 'Please describe your profession.'),
});

// A default placeholder image to send to the AI.
// The AI needs an image, but for this simplified version, the content of the image doesn't matter.
const DUMMY_IMAGE_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";


export default function AttireStyler() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      professionDescription: '',
    },
  });
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    const result = await getAttireSuggestionAction({
      professionDescription: values.professionDescription,
      photoDataUri: DUMMY_IMAGE_DATA_URI,
    });

    if (result.success && result.suggestions) {
      setSuggestions(result.suggestions);
    } else {
      setError(result.error || 'An unexpected error occurred.');
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Could not get suggestions. Please try again.",
      });
    }
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-background">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Get Your AI Attire Suggestions</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profession">Enter Your Profession</Label>
              <Input id="profession" placeholder="e.g., Creative Director, Tech CEO, Lawyer" {...form.register('professionDescription')} />
              {form.formState.errors.professionDescription && (
                <p className="text-sm text-destructive">{form.formState.errors.professionDescription.message}</p>
              )}
            </div>
            
            <Button type="submit" disabled={isLoading} className="w-full mt-4">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Get Suggestions
            </Button>
          </div>
        </form>

        <div className="space-y-4 mt-8">
            <Label>Your Suggestions</Label>
            <div className="h-full min-h-[200px] bg-muted rounded-lg p-4 space-y-3 overflow-y-auto">
                {isLoading && <div className="flex items-center justify-center h-full"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div>}
                {error && 
                    <Alert variant="destructive">
                      <TriangleAlert className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                }
                {suggestions.length > 0 && (
                     <ul className="list-none space-y-2">
                     {suggestions.map((suggestion, index) => (
                       <li key={index} className="p-3 bg-background rounded-md shadow-sm flex items-start gap-3">
                         <Lightbulb className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                         <span>{suggestion}</span>
                       </li>
                     ))}
                   </ul>
                )}
                {!isLoading && !error && suggestions.length === 0 && <p className="text-muted-foreground text-center pt-16">Your AI suggestions will appear here.</p>}
            </div>
          </div>
      </CardContent>
    </Card>
  );
}
