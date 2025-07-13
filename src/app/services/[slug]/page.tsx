
import { Metadata } from 'next';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Breadcrumbs from '@/components/breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const servicesData = [
  {
    slug: 'corporate-headshots',
    title: 'Corporate Headshots Phoenix',
    metaDescription: 'Professional corporate headshots in Phoenix & Buckeye. We provide on-location studio setups for consistent, on-brand team photos.',
    tagline: 'Polished, Professional, and On-Brand',
    mainImage: { src: 'https://placehold.co/1200x600.png', hint: 'business team office' },
    heading: "Elevate Your Team's Professional Image in Phoenix",
    description: `
      <p class="mb-4">In the corporate world of Phoenix, your image is your brand. Our Corporate Headshot service is designed to provide your entire team with consistent, high-quality headshots that reflect your company's professionalism and values. We work with you to create a look that aligns with your brand identity, ensuring every team member looks their best.</p>
      <p>We can set up our mobile studio at your office in Phoenix, Scottsdale, Tempe, or anywhere in the valley for maximum convenience, minimizing disruption to your workday. Our efficient process ensures a quick and pleasant experience for everyone, delivering results that will elevate your company's presence on your website, LinkedIn, and marketing materials.</p>
    `,
    features: [
      'On-location studio setup at your office',
      'Consistent lighting and backdrop for all team members',
      'Expert posing guidance for a confident look',
      'Fast turnaround for all images',
      'Group and team photos available',
    ],
    gallery: [
      { src: 'https://placehold.co/600x400.png', hint: 'corporate woman portrait', alt: 'Phoenix corporate woman headshot portrait' },
      { src: 'https://placehold.co/600x400.png', hint: 'man in suit', alt: 'Professional man in suit headshot in Scottsdale' },
      { src: 'https://placehold.co/600x400.png', hint: 'office environment', alt: 'Team headshots in a modern Phoenix office environment' },
      { src: 'https://placehold.co/600x400.png', hint: 'diverse business team', alt: 'Headshot of a diverse business team in Arizona' },
      { src: 'https://placehold.co/600x400.png', hint: 'professional headshot', alt: 'Clean and professional corporate headshot' },
      { src: 'https://placehold.co/600x400.png', hint: 'corporate team', alt: 'A corporate team poses for a group photo' },
      { src: 'https://placehold.co/600x400.png', hint: 'modern office', alt: 'Modern office setting for headshots in Tempe' },
      { src: 'https://placehold.co/600x400.png', hint: 'business portrait', alt: 'Executive business portrait in Phoenix' },
    ],
  },
  {
    slug: 'actor-headshots',
    title: 'Actor Headshots AZ',
    metaDescription: 'Stand out in Arizona casting calls with professional actor headshots. We capture your range and personality to get you noticed by agents and directors.',
    tagline: 'Capture Your Range, Book the Role',
    mainImage: { src: 'https://placehold.co/1200x600.png', hint: 'actor performing' },
    heading: 'Headshots That Get You Noticed in the AZ Film Market',
    description: `
      <p class="mb-4">For an actor in Arizona, a headshot is your single most important marketing tool. It needs to capture your essence and show casting directors in Phoenix and beyond your versatility. Our Actor Headshot sessions are tailored to showcase your personality and the types of roles you're aiming for. We work with you to create a range of looks, from commercial to theatrical, that will get you noticed.</p>
      <p>We understand the industry's specific needs and produce clean, compelling, and authentic images that pop. Our session is a collaborative process where we explore different expressions and characters to build a portfolio that truly represents you.</p>
    `,
    features: [
      'Pre-session consultation on wardrobe and character types',
      'Multiple looks and outfit changes',
      'Indoor and outdoor location options in the Phoenix area',
      'Shots that highlight your personality and range',
      'Industry-standard formatting and retouching',
    ],
    gallery: [
      { src: 'https://placehold.co/600x400.png', hint: 'dramatic actor portrait', alt: 'Dramatic actor headshot for theatrical roles in Arizona' },
      { src: 'https://placehold.co/600x400.png', hint: 'smiling actress', alt: 'Smiling actress with a commercial look for AZ casting' },
      { src: 'https://placehold.co/600x400.png', hint: 'character headshot', alt: 'Unique character headshot for an actor' },
      { src: 'https://placehold.co/600x400.png', hint: 'actor laughing', alt: 'Authentic laughing actor portrait' },
      { src: 'https://placehold.co/600x400.png', hint: 'theatrical headshot', alt: 'Theatrical headshot with moody lighting' },
      { src: 'https://placehold.co/600x400.png', hint: 'commercial headshot', alt: 'Bright and friendly commercial headshot' },
      { src: 'https://placehold.co/600x400.png', hint: 'actor close up', alt: 'Intense close-up actor headshot' },
      { src: 'https://placehold.co/600x400.png', hint: 'actress portrait', alt: 'Natural light actress portrait in Scottsdale' },
    ],
  },
  {
    slug: 'personal-branding',
    title: 'Personal Branding Photography Phoenix',
    metaDescription: 'Build your personal brand in Phoenix with a comprehensive set of photos. Ideal for entrepreneurs, influencers, and consultants.',
    tagline: 'Define Your Story, Build Your Brand',
    mainImage: { src: 'https://placehold.co/1200x600.png', hint: 'entrepreneur working' },
    heading: 'Create a Powerful Visual Narrative',
    description: `
      <p class="mb-4">In today's digital age, a strong personal brand is essential for entrepreneurs, influencers, and thought leaders in the Phoenix market. Our Personal Branding sessions go beyond a simple headshot to create a comprehensive library of images that tell your unique story. We work with you to understand your brand, your audience, and your message.</p>
      <p>These sessions are designed to provide you with a variety of content for your website, social media, and promotional materials. From lifestyle shots in Downtown Phoenix to behind-the-scenes content at your workspace, we'll create a visual narrative that connects with your audience and establishes you as an expert in your field.</p>
    `,
    features: [
      'In-depth brand discovery session',
      'Multiple locations and scenarios across Phoenix and Scottsdale',
      'A mix of headshots, lifestyle, and detail shots',
      'A library of on-brand images for all your marketing needs',
      'Guidance on using your images effectively online',
    ],
    gallery: [
      { src: 'https://placehold.co/600x400.png', hint: 'creative professional workspace', alt: 'Creative professional in their Phoenix workspace' },
      { src: 'https://placehold.co/600x400.png', hint: 'speaker on stage', alt: 'Public speaker on stage at a Phoenix conference' },
      { src: 'https://placehold.co/600x400.png', hint: 'author with book', alt: 'Author with their book, personal branding shot' },
      { src: 'https://placehold.co/600x400.png', hint: 'lifestyle portrait city', alt: 'Lifestyle portrait in a city environment like Tempe' },
      { src: 'https://placehold.co/600x400.png', hint: 'entrepreneur portrait', alt: 'Modern entrepreneur portrait in Arizona' },
      { src: 'https://placehold.co/600x400.png', hint: 'working on laptop', alt: 'Personal branding photo working on a laptop' },
      { src: 'https://placehold.co/600x400.png', hint: 'creative workspace', alt: 'Details of a creative workspace' },
      { src: 'https://placehold.co/600x400.png', hint: 'urban professional', alt: 'Urban professional on a city street' },
    ],
  },
];

const simpleProcess = [
    {
      title: 'Schedule Your Session',
      description: 'Book a time that works for you with our easy online scheduler.',
    },
    {
      title: 'Relax and Be Yourself',
      description: 'Our expert photographers will guide you through a comfortable and fun photoshoot.',
    },
    {
      title: 'Receive Your Perfect Photos',
      description: 'Get a gallery of professionally edited, high-resolution images you\'ll be proud to share.',
    },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = servicesData.find(s => s.slug === params.slug);
  
    if (!service) {
      return {
        title: 'Not Found',
        description: 'The page you are looking for does not exist.',
      }
    }
  
    return {
      title: service.title,
      description: service.metaDescription,
    }
}


export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
          <Image
            src={service.mainImage.src}
            alt={`${service.title} service main image`}
            data-ai-hint={service.mainImage.hint}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-accent">{service.tagline}</p>
            </div>
          </div>
        </section>
        
        <div className="container px-4 md:px-6 py-8">
            <Breadcrumbs />
        </div>

        {/* Content Section */}
        <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl text-center mb-12">
                    {service.heading}
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="prose prose-lg max-w-none text-foreground" dangerouslySetInnerHTML={{ __html: service.description }} />
                    <Card className="bg-muted sticky top-24">
                        <CardHeader>
                            <CardTitle className="text-primary">What's Included</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        {/* Our Process Section */}
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Our Simple 3-Step Plan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We make getting a professional headshot easy and stress-free.
                </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-3 md:gap-12">
              {simpleProcess.map((step, index) => (
                 <div key={index} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground text-2xl font-bold mb-4">{index + 1}</div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Gallery Section */}
        <section className="py-12 md:py-16 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl text-center mb-8">
                    Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {service.gallery.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                            <Image
                                src={image.src}
                                alt={image.alt || `${service.title} gallery image ${index + 1}`}
                                data-ai-hint={image.hint}
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 aspect-video"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-muted">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                    Ready to Book Your Session?
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-muted-foreground md:text-xl">
                    Let's create images that make a powerful first impression and help you achieve your goals.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" className="bg-primary-gradient text-primary-foreground">
                        <Link href="/#contact">
                            Get in Touch
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// Add this function to generate static paths for your services
export async function generateStaticParams() {
    return servicesData.map((service) => ({
      slug: service.slug,
    }))
}
