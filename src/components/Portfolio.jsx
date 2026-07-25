'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'CSL Matchday Campaigns',
    image: 'https://picsum.photos/seed/sports1/600/400',
    description:
      'Crafted high-energy matchday posts and squad announcements for CSL 4.0 that drove fan engagement and built team identity.',
    role: 'Sports Media Creative',
    tools: ['Canva', 'X (Twitter)', 'Instagram'],
  },
  {
    title: 'Team Hype & Brand Content',
    image: 'https://picsum.photos/seed/sports2/600/400',
    description:
      'Created hype posts and brand storytelling content for CSL teams, building excitement and community around match days.',
    role: 'Content Writer',
    tools: ['Canva', 'Copywriting', 'Social Media'],
  },
  {
    title: 'CSL Brand Event Coverage',
    image: 'https://picsum.photos/seed/event1/600/400',
    description:
      'Attended and covered multiple CSL brand events, creating real-time content and post-event campaign posts for sponsor visibility.',
    role: 'Brand Event Reporter',
    tools: ['X', 'Instagram', 'Live Coverage'],
  },
  {
    title: 'X Content Strategy',
    image: 'https://picsum.photos/seed/social1/600/400',
    description:
      'Developed and executed an X (Twitter) content strategy focused on community engagement, brand voice consistency, and audience growth.',
    role: 'Social Media Manager',
    tools: ['X', 'Hootsuite', 'Analytics'],
  },
  {
    title: 'Community Engagement Campaigns',
    image: 'https://picsum.photos/seed/community1/600/400',
    description:
      'Led community-focused campaigns that increased brand visibility and fostered meaningful conversations between brands and their audiences.',
    role: 'Campaign Strategist',
    tools: ['Social Media', 'Canva', 'Copywriting'],
  },
  {
    title: 'Personal Brand Management',
    image: 'https://picsum.photos/seed/brand1/600/400',
    description:
      'Built and maintained a personal brand presence on X and LinkedIn, growing an engaged following through consistent, value-driven content.',
    role: 'Personal Brand Manager',
    tools: ['X', 'LinkedIn', 'Content Strategy'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-cream-dark dark:bg-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
            My Work
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-3">
            Portfolio
          </h2>
          <p className="text-charcoal/60 dark:text-cream/60 text-lg">
            Work That Speaks for Itself
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 24px 48px rgba(92,64,51,0.18)',
                scale: 1.01,
              }}
              transition={{ duration: 0.2 }}
              className="bg-cream dark:bg-brown-dark rounded-2xl overflow-hidden shadow-md group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brown/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-cream mb-2">
                  {project.title}
                </h3>
                <p className="text-charcoal/65 dark:text-cream/65 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Role */}
                <p className="text-xs font-semibold text-gold mb-3 uppercase tracking-wide">
                  {project.role}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-full bg-cream-dark dark:bg-brown/50 text-charcoal/75 dark:text-cream/75"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
