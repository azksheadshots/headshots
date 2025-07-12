'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { getAttireSuggestionAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2, UploadCloud, TriangleAlert } from 'lucide-react';

const formSchema = z.object({
  professionDescription: z.string().min(3, 'Please describe your profession or desired impression.'),
  photo: z.any().optional(),
});

const models = [
  { name: 'Model 1', src: 'https://placehold.co/400x400.png', hint: 'woman headshot' },
  { name: 'Model 2', src: 'https://placehold.co/400x400.png', hint: 'man headshot' },
  { name: 'Model 3', src: 'https://placehold.co/400x400.png', hint: 'person headshot' },
];

export default function AttireStyler() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      professionDescription: '',
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedModel(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModelSelect = (src: string) => {
    setSelectedModel(src);
    setUploadedImagePreview(null);
    form.setValue('photo', null);
  };
  
  const getPhotoDataUri = async (): Promise<string | null> => {
    if (uploadedImagePreview) {
      return uploadedImagePreview;
    }
    if (selectedModel) {
      try {
        const response = await fetch(selectedModel);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      } catch (e) {
        console.error("Failed to fetch model image", e);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not load the selected model image. Please try again.",
        });
        return null;
      }
    }
    return null;
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    const photoDataUri = await getPhotoDataUri();

    if (!photoDataUri) {
        toast({
            variant: "destructive",
            title: "Photo required",
            description: "Please upload a photo or select a model.",
        });
        setIsLoading(false);
        return;
    }

    const result = await getAttireSuggestionAction({
      professionDescription: values.professionDescription,
      photoDataUri,
    });

    if (result.success && result.suggestions) {
      setSuggestions(result.suggestions);
    } else {
      setError(result.error || 'An unexpected error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-background">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Get Your AI Attire Suggestions</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Label>1. Provide a Photo</Label>
            <Tabs defaultValue="upload">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload">Upload Photo</TabsTrigger>
                <TabsTrigger value="model">Select Model</TabsTrigger>
              </TabsList>
              <TabsContent value="upload" className="mt-4">
                <Label htmlFor="photo-upload" className="block w-full cursor-pointer">
                  <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg h-48 hover:bg-accent">
                    <UploadCloud className="w-10 h-10 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  </div>
                </Label>
                <Input id="photo-upload" type="file" className="hidden" accept="image/*" {...form.register('photo')} onChange={handleFileChange} />
              </TabsContent>
              <TabsContent value="model" className="mt-4">
                <div className="grid grid-cols-3 gap-2">
                  {models.map((model) => (
                    <div key={model.name} onClick={() => handleModelSelect(model.src)} className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-4 ${selectedModel === model.src ? 'border-primary-foreground ring-4 ring-secondary' : 'border-transparent'}`}>
                       <Image src={model.src} alt={model.name} data-ai-hint={model.hint} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                {uploadedImagePreview ? <Image src={uploadedImagePreview} alt="Uploaded preview" fill className="object-cover"/> : selectedModel ? <Image src={selectedModel} alt="Selected model" fill className="object-cover"/> : <span className="text-muted-foreground">Photo Preview</span>}
            </div>
          </div>

          <div className="space-y-4 flex flex-col">
            <div className="space-y-2">
              <Label htmlFor="profession">2. Describe Your Profession</Label>
              <Input id="profession" placeholder="e.g., Creative Director, Tech CEO, Lawyer" {...form.register('professionDescription')} />
              {form.formState.errors.professionDescription && (
                <p className="text-sm text-destructive">{form.formState.errors.professionDescription.message}</p>
              )}
            </div>
            
            <Button type="submit" disabled={isLoading} className="w-full mt-4">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Get Suggestions
            </Button>
            
            <div className="flex-grow mt-4 space-y-4">
                <Label>3. Your Suggestions</Label>
                <div className="h-full min-h-[200px] bg-accent rounded-lg p-4 space-y-3 overflow-y-auto">
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
                             <Lightbulb className="h-5 w-5 mt-0.5 text-secondary flex-shrink-0" />
                             <span>{suggestion}</span>
                           </li>
                         ))}
                       </ul>
                    )}
                    {!isLoading && !error && suggestions.length === 0 && <p className="text-muted-foreground text-center pt-16">Your AI suggestions will appear here.</p>}
                </div>
            </div>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
