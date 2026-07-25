'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const focusAreas = [
  { emoji: '✍️', label: 'Content Writing & Copywriting' },
  { emoji: '📱', label: 'Social Media Management' },
  { emoji: '🏆', label: 'Sports Media Coverage' },
  { emoji: '🎯', label: 'Brand Promotion & Campaigns' },
  { emoji: '👥', label: 'Student Leadership & Advocacy' },
  { emoji: '📢', label: 'Public Speaking & Communication' },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream dark:bg-brown-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* ── Left Column ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-widest uppercase text-gold mb-3"
            >
              About Me
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-6 leading-tight"
            >
              Crafting Stories That Connect
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-charcoal/70 dark:text-cream/70 text-base leading-relaxed mb-4"
            >
              I&apos;m a passionate content writer and social media strategist with over 3 years of
              experience in student leadership and digital communication. I combine creative
              storytelling with strategic thinking to build brand presence, foster community, and
              drive meaningful engagement online and offline.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-charcoal/70 dark:text-cream/70 text-base leading-relaxed mb-4"
            >
              Through my work with CSL (Campus Sports League) 4.0, I discovered the power of
              sports media storytelling — crafting squad announcements, matchday campaigns, and
              brand content that connected fans with their teams on a deeper level. My approach
              blends data-driven strategy with human-centred narratives.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-charcoal/70 dark:text-cream/70 text-base leading-relaxed mb-10 italic border-l-4 border-gold pl-4"
            >
              &ldquo;To use creativity, communication, and leadership to create meaningful digital
              experiences that inspire and connect people.&rdquo;
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-playfair text-4xl font-bold text-gold">{stat.value}</p>
                  <p className="text-sm text-charcoal/60 dark:text-cream/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="bg-brown dark:bg-brown-light rounded-2xl p-8 shadow-xl">
              <h3 className="font-playfair text-2xl font-bold text-cream mb-6">
                Focus Areas
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {focusAreas.map((area, i) => (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-3 bg-brown-light/40 dark:bg-brown-dark/30 rounded-xl px-4 py-3"
                  >
                    <span className="text-2xl" role="img" aria-hidden="true">{area.emoji}</span>
                    <span className="text-cream font-medium text-sm">{area.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
