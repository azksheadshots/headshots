
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, Drama, User, Mail, Phone, MapPin, CheckCircle, XCircle, Check } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import AttireStyler from '@/components/attire-styler';

export default function Home() {
  const services = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" strokeWidth={1.5} />,
      title: 'Corporate Headshots',
      description: 'Professional and consistent headshots for your entire team that reflect your company\'s brand and values.',
    },
    {
      icon: <Drama className="h-10 w-10 text-primary" strokeWidth={1.5} />,
      title: 'Actor Headshots',
      description: 'Capture your range and personality with headshots that stand out to casting directors and agents.',
    },
    {
      icon: <User className="h-10 w-10 text-primary" strokeWidth={1.5} />,
      title: 'Personal Branding',
      description: 'Create a powerful visual identity with headshots tailored to your personal brand and professional goals.',
    },
  ];

  const portfolioImages = [
    { src: 'https://placehold.co/400x600.png', alt: 'Corporate headshot of a woman', hint: 'professional woman' },
    { src: 'https://placehold.co/400x600.png', alt: 'Actor headshot, smiling man', hint: 'smiling man' },
    { src: 'https://placehold.co/400x600.png', alt: 'Personal branding photo in an urban environment', hint: 'urban portrait' },
    { src: 'https://placehold.co/400x600.png', alt: 'Creative professional headshot', hint: 'creative professional' },
    { src: 'https://placehold.co/400x600.png', alt: 'Corporate team photo', hint: 'business team' },
    { src: 'https://placehold.co/400x600.png', alt: 'Headshot of a man in a suit', hint: 'man suit' },
  ];

  const blogPosts = [
    {
      image: 'https://placehold.co/600x400.png',
      hint: 'camera lens',
      title: '5 Tips for a Perfect Headshot',
      excerpt: 'Learn how to prepare for your session to get the best possible results.From wardrobe to mindset, we cover it all.',
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

  const individualPackages = [
    {
      name: 'The Starter',
      price: '$199',
      description: 'Perfect for updating your LinkedIn profile or resume.',
      features: [
        '30-minute session',
        '1 outfit',
        'Online gallery',
        '2 retouched photos'
      ],
      popular: false
    },
    {
      name: 'The Professional',
      price: '$349',
      description: 'Ideal for entrepreneurs, executives, and personal branding.',
      features: [
        '60-minute session',
        '2-3 outfits',
        'Online gallery',
        '5 retouched photos',
        'Priority editing'
      ],
      popular: true
    },
    {
      name: 'The Executive',
      price: '$499',
      description: 'The ultimate package for a comprehensive visual identity.',
      features: [
        '90-minute session',
        'Unlimited outfits',
        'Online gallery',
        '10 retouched photos',
        'Hair & makeup artist consultation',
        'Expedited delivery'
      ],
      popular: false
    }
  ];

  const conferencePackages = [
    {
      name: 'Half Day',
      price: 'Starting at $1500',
      description: 'Ideal for smaller events or adding value for your attendees.',
      features: [
        'Up to 4 hours of coverage',
        'On-site studio setup',
        'Professional photographer',
        'Instant photo delivery for attendees',
      ],
      popular: false,
    },
    {
      name: 'Full Day',
      price: 'Starting at $2800',
      description: 'Comprehensive coverage for a full-day conference or large team.',
      features: [
        'Up to 8 hours of coverage',
        'On-site studio with backdrop options',
        'Lead photographer + assistant',
        'Branded online gallery',
        'Group photo included',
      ],
      popular: true,
    },
    {
      name: 'Multi-Day Event',
      price: 'Custom Quote',
      description: 'Tailored solutions for large-scale conferences and trade shows.',
      features: [
        'Multi-day coverage',
        'Multiple photographers & stations',
        'Custom branding & backdrop',
        'Advanced lead capture integration',
        'Dedicated event manager',
      ],
      popular: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Confident professional smiling in their headshot"
            data-ai-hint="professional headshot"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Look Like The Professional You Are
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl">
                In a world of first impressions, a professional headshot is your greatest asset. We help you get one you&apos;ll be proud of.
              </p>
              <a href="#contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Book Your Session</Button>
              </a>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section id="problem" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Is Your Headshot Holding You Back?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A bad headshot makes you look unprofessional and can cost you clients and job opportunities. An great one builds trust before you even meet.
                </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 sm:grid-cols-2 md:gap-12">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <XCircle className="h-12 w-12 text-destructive mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-2">The Wrong Impression</h3>
                <p className="text-muted-foreground">An outdated or unprofessional photo can make you seem out of touch or untrustworthy, turning away potential clients and employers.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-2">The Right Connection</h3>
                <p className="text-muted-foreground">A professional headshot conveys confidence and competence, helping you make a powerful first impression and attract the right opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Plan Section */}
        <section id="plan" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Our Simple 3-Step Plan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We make getting a professional headshot easy and stress-free.
                </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-3 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold">Schedule Your Session</h3>
                <p className="text-muted-foreground">Book a time that works for you with our easy online scheduler.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold">Relax and Be Yourself</h3>
                <p className="text-muted-foreground">Our expert photographers will guide you through a comfortable and fun photoshoot.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold">Receive Your Perfect Photos</h3>
                <p className="text-muted-foreground">Get a gallery of professionally edited, high-resolution images you'll be proud to share.</p>
              </div>
            </div>
            <div className="text-center mt-12">
               <a href="#contact">
                    <Button size="lg">Get Started</Button>
                </a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Clear Pricing, No Surprises</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Choose the package that's right for you.</p>
            </div>

            {/* Individual Packages */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center tracking-tight text-primary sm:text-3xl mb-8">Individual & Team Packages</h3>
              <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {individualPackages.map((pkg) => (
                  <Card key={pkg.name} className={`flex flex-col ${pkg.popular ? 'border-primary border-2' : ''}`}>
                    {pkg.popular && <div className="bg-primary text-primary-foreground text-center text-sm font-bold py-1 rounded-t-lg -mt-px">Most Popular</div>}
                    <CardHeader className="flex-grow">
                      <CardTitle>{pkg.name}</CardTitle>
                      <p className="text-4xl font-bold">{pkg.price}</p>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="mt-auto">
                        <a href="#contact">{pkg.name === 'The Executive' ? 'Get In Touch' : 'Book Now'}</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Conference Packages */}
            <div className="mt-24">
              <h3 className="text-2xl font-bold text-center tracking-tight text-primary sm:text-3xl mb-8">Conference & Event Headshots</h3>
              <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {conferencePackages.map((pkg) => (
                  <Card key={pkg.name} className={`flex flex-col ${pkg.popular ? 'border-primary border-2' : ''}`}>
                    {pkg.popular && <div className="bg-primary text-primary-foreground text-center text-sm font-bold py-1 rounded-t-lg -mt-px">Best Value</div>}
                    <CardHeader className="flex-grow">
                      <CardTitle>{pkg.name}</CardTitle>
                      <p className="text-4xl font-bold">{pkg.price}</p>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="mt-auto">
                        <a href="#contact">Request a Quote</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </section>


        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a range of specialized headshot services to meet your unique needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
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
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">See the Results</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We've helped hundreds of professionals elevate their image.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {portfolioImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-styler" className="w-full bg-muted py-12 md:py-24 lg:py-32">
           <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">AI-Powered Attire Styler</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Not sure what to wear? Enter your profession and let our AI suggest the perfect attire for your headshot.
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
              <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
                Your Guide to a Perfect Headshot
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
                alt="Lead photographer at Headshot Pro"
                data-ai-hint="photographer portrait"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="blog" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">From Our Blog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Tips, tricks, and insights on making a great impression.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 bg-background">
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
                    <Button variant="link" className="mt-4 px-0 text-primary hover:text-primary/80">Read More &rarr;</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
                Ready to Elevate Your Image?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule your session today and get a headshot you'll be proud of.
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
                    <Mail className="h-6 w-6 text-primary" strokeWidth={1.5}/>
                    <a href="mailto:hello@headshotpro.com" className="hover:underline">hello@headshotpro.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" strokeWidth={1.5} />
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

    