
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Breadcrumbs from '@/components/breadcrumbs';

const faqData = [
    {
      question: 'What should I wear for my headshot?',
      answer: "We recommend wearing solid colors that complement your skin tone. Avoid busy patterns, logos, or anything that might distract from your face. The most important thing is to wear something you feel confident and comfortable in. You can also try our 'KS Powered Clothing Styler' on the homepage for AI-powered suggestions!",
    },
    {
      question: 'How long does a session take?',
      answer: 'The session length depends on the package you choose. Our Starter package is a 30-minute session, while the Professional and Executive packages are longer to allow for outfit changes and more varied shots. We focus on creating a relaxed environment, so we never rush the process.',
    },
    {
      question: 'How and when will I receive my photos?',
      answer: 'You will receive a link to a private online gallery to view your photos within 3-5 business days. From there, you can select your favorite images for retouching. Final retouched photos are typically delivered within a week after you make your selections.',
    },
    {
      question: 'Do you offer hair and makeup services?',
      answer: 'While we don\'t have in-house hair and makeup artists, we do offer a consultation as part of our Executive package and can provide a list of trusted local professionals that we recommend.',
    },
    {
      question: 'Can you come to my office to shoot our whole team?',
      answer: 'Absolutely! We specialize in corporate headshots and can bring our mobile studio setup to your location for maximum convenience. This is a great way to ensure consistent, professional headshots for your entire team with minimal disruption to your workday.',
    },
    {
        question: 'What kind of retouching do you do?',
        answer: 'Our standard retouching process is natural and clean. We focus on things like removing blemishes, softening wrinkles, and evening out skin tone. Our goal is to make you look like you on your best day, not like a different person. We can accommodate specific retouching requests as well.'
    }
  ];
  

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 md:px-6">
            <div className="mb-8">
                <Breadcrumbs />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl">Frequently Asked Questions</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Have a question? We've got answers. If you don't see your question here, feel free to contact us.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
