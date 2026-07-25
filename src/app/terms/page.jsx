import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Use | Emmax Portfolio',
  description: 'Terms of Use for Emmanuel Osinoiki Portfolio website.',
};

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using this portfolio website ("the Site"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please discontinue use of the Site immediately.\n\nThese terms apply to all visitors, users, and others who access or use the Site. Emmanuel Osinoiki reserves the right to update or change these terms at any time without prior notice. Continued use of the Site after changes are posted constitutes your acceptance of the revised terms.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content published on this Site — including but not limited to written copy, portfolio descriptions, design concepts, photography references, brand materials, graphics, and the overall site design — is the intellectual property of Emmanuel Osinoiki unless otherwise attributed.\n\nYou may not reproduce, distribute, modify, transmit, or use any content from this Site for commercial purposes without express written permission from Emmanuel Osinoiki. Brief quotations with proper attribution for non-commercial educational purposes are permitted.\n\nThe Emmax brand name, logo, and associated identity elements are the personal intellectual property of Emmanuel Osinoiki.`,
  },
  {
    title: 'External Links',
    content: `This Site contains links to external websites, including social media profiles (X/Twitter, LinkedIn), third-party platforms, and referenced tools. These links are provided for convenience and informational purposes only.\n\nEmmanuel Osinoiki has no control over the content, privacy policies, or practices of any linked external sites and assumes no responsibility for them. We encourage you to review the privacy policies and terms of any external sites you visit.\n\nThe inclusion of any external link does not constitute an endorsement, recommendation, or approval of the linked site.`,
  },
  {
    title: 'Limitation of Liability',
    content: `This Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. Emmanuel Osinoiki makes no warranties that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.\n\nTo the fullest extent permitted by applicable law, Emmanuel Osinoiki shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, data, or goodwill — arising from your use of or inability to use this Site or its content.\n\nThis limitation applies whether the claim is based in contract, tort (including negligence), strict liability, or any other legal theory.`,
  },
  {
    title: 'Updates to Terms',
    content: `Emmanuel Osinoiki reserves the right to revise these Terms of Use at any time. When changes are made, the "Last updated" date at the top of this page will be revised. We encourage you to review these terms periodically.\n\nFor any questions about these Terms of Use, please contact:\n\n**Email:** osinoikiemmanuel@gmail.com\n**X (Twitter):** @callmeBkay`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-brown-dark">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="mb-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-3">
            Terms of Use
          </h1>
          <p className="text-charcoal/50 dark:text-cream/50 text-sm">
            Last updated: July 2026
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-playfair text-2xl font-bold text-brown dark:text-gold mb-3">
                {i + 1}. {section.title}
              </h2>
              <div className="text-charcoal/70 dark:text-cream/70 text-base leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
