
import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Breadcrumbs from '@/components/breadcrumbs';

// This is temporary data. In a real application, you would fetch this from a CMS.
const blogPosts = [
    {
      slug: '5-tips-for-a-perfect-headshot',
      image: 'https://placehold.co/1200x600.png',
      hint: 'camera lens',
      title: '5 Tips for a Perfect Headshot',
      description: 'Discover 5 essential tips for a perfect headshot. Learn how to prepare for your session to get the best professional results in Phoenix, AZ.',
      author: 'Jane Doe',
      date: 'October 26, 2023',
      content: `
        <p>Getting the perfect headshot can be a game-changer for your professional brand. It's often the first impression you make on potential employers, clients, or collaborators. Here are five essential tips to ensure you get a headshot you'll be proud to share.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4 text-primary">1. Dress for the Job You Want</h3>
        <p>Your attire speaks volumes. Choose an outfit that reflects your industry and the role you're aiming for. For corporate roles in Phoenix, think classic and professional. For creative fields, you can show more personality. Avoid busy patterns or logos that can distract from your face. When in doubt, solid colors are a safe and effective choice.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4 text-primary">2. Communicate with Your Photographer</h3>
        <p>Before the session, have a conversation with your photographer about your goals. What kind of look are you going for? Confident and authoritative? Warm and approachable? Sharing examples of headshots you like can be incredibly helpful. A good photographer will act as a guide, helping you pose and express the right emotions.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4 text-primary">3. Get a Good Night's Sleep</h3>
        <p>This might sound simple, but it's crucial. Being well-rested will make you look and feel more vibrant and energetic. It helps reduce dark circles under your eyes and gives your skin a healthier glow. Aim for a full eight hours of sleep the night before your photoshoot.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4 text-primary">4. Trust Your Photographer and Relax</h3>
        <p>Many people feel awkward in front of a camera. That's completely normal! The key is to trust your photographer. They are experienced in making people feel comfortable and will guide you into flattering poses. Try to relax, breathe, and let your personality shine through. The best headshots capture a genuine expression.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4 text-primary">5. Pay Attention to the Details</h3>
        <p>Grooming is important. Make sure your hair is neat, and if you wear makeup, keep it natural and clean. For men, a fresh shave or a neatly trimmed beard is recommended. These small details contribute to a polished and professional final image.</p>
      `
    },
    {
      slug: 'what-to-wear-corporate-edition',
      image: 'https://placehold.co/1200x600.png',
      hint: 'professional attire',
      title: 'What to Wear: Corporate Edition',
      description: 'Learn what to wear for your corporate headshot in Phoenix. From colors to styles, we cover the essentials for a professional look.',
      author: 'John Smith',
      date: 'October 22, 2023',
      content: `<p>Dressing for success is key for any corporate headshot session in Phoenix. Your attire should convey professionalism and align with your company's brand. This guide covers the best clothing choices for men and women to ensure you look confident and competent.</p>`
    },
    {
      slug: 'the-power-of-a-professional-image',
      image: 'https://placehold.co/1200x600.png',
      hint: 'city skyline',
      title: 'The Power of a Professional Image',
      description: "Understand why a professional headshot is crucial in today's digital world, especially in a competitive market like Phoenix, AZ.",
      author: 'Emily White',
      date: 'October 18, 2023',
      content: `<p>In today's digital world, your headshot is your first impression. In a bustling market like Phoenix, a professional image can set you apart. It's a critical investment in your personal brand that builds trust and opens doors to new opportunities.</p>`
    },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 md:px-6">
            <div className="mb-8">
                <Breadcrumbs />
            </div>
          <article className="prose prose-lg mx-auto max-w-4xl">
            <div className="space-y-4 not-prose">
              <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl">{post.title}</h1>
              <p className="text-muted-foreground">By {post.author} on {post.date}</p>
            </div>
            <Image
              src={post.image}
              alt={post.title}
              data-ai-hint={post.hint}
              width={1200}
              height={600}
              className="my-8 rounded-lg aspect-video w-full object-cover"
            />
            <div className="text-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          <div className="text-center mt-16">
            <Button asChild>
                <Link href="/#blog">
                    &larr; Back to Blog
                </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
