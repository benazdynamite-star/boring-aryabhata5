'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiArrowDown, FiArrowRight } from 'react-icons/fi';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const highlights = [
  '3+ Years Leadership Experience',
  'Content Writer & Social Media Creative',
  'Sports Media & Brand Event Coverage',
  'Community Engagement & Brand Promotion',
];

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cream dark:bg-brown-dark overflow-hidden pt-16"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brown/5 dark:bg-cream/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left Content ── */}
          <motion.div
            className="flex-1 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold tracking-widest uppercase text-gold mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-5 text-charcoal dark:text-cream"
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient">Emmanuel Osinoiki.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-gold font-semibold text-lg md:text-xl mb-5"
            >
              Content Writer&nbsp;•&nbsp;Social Media Manager&nbsp;•&nbsp;Sports Media Creative&nbsp;•&nbsp;Student Leader
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-charcoal/70 dark:text-cream/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              I create compelling content, manage engaging online communities, and use strategic
              storytelling to help brands, sports organizations, and communities build meaningful
              connections and lasting impact.
            </motion.p>

            {/* Quick Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-charcoal/80 dark:text-cream/80 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brown text-cream font-semibold rounded-lg border-2 border-brown hover:border-gold hover:bg-brown-light transition-all duration-200 shadow-md"
                aria-label="View my work"
              >
                View My Work
                <FiArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brown dark:border-cream text-brown dark:text-cream font-semibold rounded-lg hover:bg-brown hover:text-cream dark:hover:bg-cream dark:hover:text-brown transition-all duration-200"
                aria-label="Contact me"
              >
                Contact Me
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="/Emmanuel_Osinoiki_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-brown dark:text-cream font-semibold rounded-lg hover:bg-cream-dark dark:hover:bg-brown transition-all duration-200"
                aria-label="Download CV"
              >
                <FiDownload size={16} />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Portrait ── */}
          <motion.div
            className="relative flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            {/* Decorative circle behind */}
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-brown/10 dark:bg-cream/5" />
            {/* Gold dots decorative */}
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gold opacity-70" />
            <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-gold opacity-40" />
            <div className="absolute bottom-8 left-4 w-2 h-2 rounded-full bg-gold opacity-50" />
            <div className="absolute bottom-4 left-12 w-3 h-3 rounded-full bg-brown/40 dark:bg-cream/30" />
            <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-gold opacity-60" />

            {/* Floating portrait */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Gold ring glow */}
              <div className="absolute inset-0 rounded-2xl gold-glow" />
              <div className="relative w-64 h-80 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden border-4 border-gold shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/portrait/400/500"
                  alt="Emmanuel Osinoiki — portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-xs text-charcoal/40 dark:text-cream/40 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown size={18} className="text-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
