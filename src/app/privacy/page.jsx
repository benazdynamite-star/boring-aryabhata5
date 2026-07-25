import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Emmax Portfolio',
  description: 'Privacy Policy for Emmanuel Osinoiki Portfolio website.',
};

const sections = [
  {
    title: 'Introduction',
    content: `Welcome to Emmax's Portfolio ("we", "our", or "us"). Your privacy matters deeply to us. This Privacy Policy describes how we handle information when you visit this portfolio website located at this domain. By using this site, you agree to the practices described in this policy. This portfolio is a personal website designed to showcase the professional work and skills of Emmanuel Osinoiki. We are committed to protecting your personal information and your right to privacy.`,
  },
  {
    title: 'Information We Collect',
    content: `This website may collect the following types of information:\n\n**Contact Form Data:** When you submit the contact form, we collect your name, email address, subject, and message content. This information is used solely to respond to your inquiry.\n\n**Usage Data:** Like most websites, we may automatically collect certain non-personally identifiable information about your visit, such as browser type, operating system, referring URLs, and pages viewed. This data helps us understand how visitors use the site.\n\n**Cookies:** This site may use essential cookies to ensure basic functionality. We do not use cookies for tracking or advertising purposes.`,
  },
  {
    title: 'How We Use Your Information',
    content: `Information collected through this website is used exclusively for the following purposes:\n\n• To respond to enquiries submitted through the contact form\n• To understand how visitors interact with the portfolio and improve the user experience\n• To maintain the security and proper operation of the website\n\nWe do not sell, rent, trade, or share your personal information with third parties for their marketing purposes. Contact form submissions are handled via EmailJS and are subject to their privacy policy.`,
  },
  {
    title: 'Data Protection',
    content: `We take reasonable precautions to protect your information. Contact form messages are transmitted securely via EmailJS's encrypted infrastructure. We do not store form submission data on our own servers beyond what is necessary to respond to your enquiry.\n\nYou have the right to:\n• Request access to any personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your personal data\n• Withdraw consent where processing is based on consent\n\nTo exercise any of these rights, please contact us using the details below.`,
  },
  {
    title: 'Contact Information',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out:\n\n**Email:** osinoikiemmanuel@gmail.com\n**X (Twitter):** @callmeBkay\n\nWe will respond to all privacy-related enquiries within 30 days.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-brown-dark">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="mb-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-3">
            Privacy Policy
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
