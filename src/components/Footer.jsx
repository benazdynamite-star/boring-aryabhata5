'use client';

import Link from 'next/link';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: FaXTwitter,
    label: 'X (Twitter)',
    href: 'https://x.com/callmeBkay',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/emmanuel-osinoiki-138307356',
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:osinoikiemmanuel@gmail.com',
  },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brown-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1 – Brand */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-cream mb-3">
              Emmax&apos;s Portfolio
            </h2>
            <p className="text-cream/60 text-sm leading-relaxed">
              Content Writer&nbsp;•&nbsp;Social Media Manager&nbsp;•&nbsp;Sports Media Creative
            </p>
            <p className="text-cream/50 text-sm mt-3 leading-relaxed">
              Crafting compelling stories and managing meaningful online communities since 2022.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-brown/60 hover:bg-gold flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon size={16} className="text-cream" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-cream/65 hover:text-gold transition-colors duration-200"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:osinoikiemmanuel@gmail.com"
                  className="flex items-center gap-2 text-sm text-cream/65 hover:text-gold transition-colors duration-200"
                  aria-label="Email Emmanuel Osinoiki"
                >
                  <MdEmail size={16} className="text-gold flex-shrink-0" />
                  osinoikiemmanuel@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/callmeBkay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cream/65 hover:text-gold transition-colors duration-200"
                  aria-label="Visit X profile"
                >
                  <FaXTwitter size={14} className="text-gold flex-shrink-0" />
                  @callmeBkay
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/emmanuel-osinoiki-138307356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cream/65 hover:text-gold transition-colors duration-200"
                  aria-label="Visit LinkedIn profile"
                >
                  <FaLinkedin size={14} className="text-gold flex-shrink-0" />
                  emmanuel-osinoiki
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs text-center sm:text-left">
            © 2026 Emmax&apos;s Portfolio. All Rights Reserved.
          </p>
          <p className="text-cream/40 text-xs">
            Designed &amp; Developed with ❤️
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs text-cream/40 hover:text-gold transition-colors duration-200"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-cream/40 hover:text-gold transition-colors duration-200"
              aria-label="Terms of Use"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
