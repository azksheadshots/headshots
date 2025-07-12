import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, Drama, User, Mail, Phone, MapPin } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import AttireStyler from '@/components/attire-styler';

export default function Home() {
  const services = [
    {
      icon: <Briefcase className="h-10 w-10 text-secondary" />,
      title: 'Corporate Headshots',
      description: 'Professional and consistent headshots for your entire team that reflect your company\'s brand and values.',
    },
    {
      icon: <Drama className="h-10 w-10 text-secondary" />,
      title: 'Actor Headshots',
      description: 'Capture your range and personality with headshots that stand out to casting directors and agents.',
    },
    {
      icon: <User className="h-10 w-10 text-secondary" />,
      title: 'Personal Branding',
      description: 'Create a powerful visual identity with headshots tailored to your personal brand and professional goals.',
    },
  ];

  const portfolioImages = [
    { src: 'https://placehold.co/400x600.png', alt: 'Corporate headshot of a woman', hint: 'professional woman' },
    { src: 'https://placehold.co/800x600.png', alt: 'Actor headshot, smiling man', hint: 'smiling man' },
    { src: 'https://placehold.co/400x600.png', alt: 'Personal branding photo in an urban environment', hint: 'urban portrait' },
    { src: 'https://placehold.co/400x600.png', alt: 'Creative professional headshot', hint: 'creative professional' },
    { src: 'https://placehold.co/800x600.png', alt: 'Corporate team photo', hint: 'business team' },
    { src: 'https://placehold.co/400x600.png', alt: 'Headshot of a man in a suit', hint: 'man suit' },
  ];

  const blogPosts = [
    {
      image: 'https://placehold.co/600x400.png',
      hint: 'camera lens',
      title: '5 Tips for a Perfect Headshot',
      excerpt: 'Learn how to prepare for your session to get the best possible results. From wardrobe to mindset, we cover it all.',
    },
    {
      image: 'https://placehold.co/600x400.png',
      hint: 'professional attire',
      title: 'What to Wear: Corporate Edition',
      excerpt: 'Dressing for success is key. Discover the best colors and styles for your corporate headshot.',
    },
    {
      image: 'https://placehold.co/600x400.png',
      hint: 'city skyline',
      title: 'The Power of a Professional Image',
      excerpt: 'In today\'s digital world, your headshot is your first impression. Make it count.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter text-secondary sm:text-5xl xl:text-6xl/none">
                    Elevate Your Professional Image
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Expert headshots for corporate, actors, and personal branding. We capture your best self.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="#contact">
                    <Button size="lg">Get Your Headshot</Button>
                  </a>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x600.png"
                width="600"
                height="600"
                alt="Hero Headshot"
                data-ai-hint="professional headshot"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full bg-accent py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a range of specialized headshot services to meet your unique needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none">
              {services.map((service, index) => (
                <Card key={index} className="bg-background transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-5xl">Our Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                A selection of our favorite headshots.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {portfolioImages.map((image, index) => (
                <div key={index} className={`overflow-hidden rounded-lg ${index === 1 || index === 4 ? 'col-span-2' : ''}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    width={index === 1 || index === 4 ? 800 : 400}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-styler" className="w-full bg-accent py-12 md:py-24 lg:py-32">
           <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-5xl">AI-Powered Attire Styler</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Get instant feedback on your look. Upload a photo or select a model and let our AI suggest the best attire for your profession.
              </p>
            </div>
            <div className="mt-8">
              <AttireStyler />
            </div>
           </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-secondary md:text-4xl/tight">
                Meet the Photographer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With a decade of experience in portrait photography, our lead photographer combines technical skill with an artist's eye to create compelling headshots. We believe a great headshot is more than just a photo; it's a powerful communication tool. Our philosophy is centered on collaboration and creating a relaxed environment where your authentic self can shine.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/550x550.png"
                width="550"
                height="550"
                alt="Photographer"
                data-ai-hint="photographer portrait"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="blog" className="w-full bg-accent py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-5xl">From Our Blog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Tips, tricks, and insights on making a great impression.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <Image
                    src={post.image}
                    alt={post.title}
                    data-ai-hint={post.hint}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                    <Button variant="link" className="mt-4 px-0">Read More &rarr;</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter text-secondary md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to book your session or have a question? Contact us today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-screen-lg">
              <div className="grid lg:grid-cols-2 lg:gap-12">
                <form className="flex flex-col gap-4 text-left">
                  <Input placeholder="Name" type="text" />
                  <Input placeholder="Email" type="email" />
                  <Textarea placeholder="Message" rows={5} />
                  <Button type="submit">Send Message</Button>
                </form>
                <div className="mt-8 flex flex-col items-start gap-6 text-left lg:mt-0">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-secondary" />
                    <a href="mailto:hello@headshotpro.com" className="hover:underline">hello@headshotpro.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-secondary" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-secondary" />
                    <span>123 Photo Lane, Image City, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
