'use client';

import { motion } from 'framer-motion';
import { FiEdit3, FiTrendingUp, FiCamera, FiStar } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Content',
    icon: FiEdit3,
    skills: ['Content Writing', 'Copywriting'],
  },
  {
    title: 'Marketing',
    icon: FiTrendingUp,
    skills: ['Social Media Management', 'Social Media Strategy', 'Brand Promotion'],
  },
  {
    title: 'Media',
    icon: FiCamera,
    skills: ['Sports Media', 'Community Engagement', 'Campaign Planning'],
  },
  {
    title: 'Professional',
    icon: FiStar,
    skills: ['Leadership', 'Communication', 'Public Speaking', 'Teamwork'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-cream dark:bg-brown-dark">
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
            Capabilities
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-3">
            Skills &amp; Expertise
          </h2>
          <p className="text-charcoal/60 dark:text-cream/60 text-lg">
            What I Bring to the Table
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(201,162,39,0.18)',
                  scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-brown rounded-2xl p-6 shadow-md border-t-4 border-gold group cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-4 transition-colors duration-200">
                  <Icon size={24} className="text-gold" />
                </div>

                {/* Category title */}
                <h3 className="font-playfair text-xl font-bold text-brown dark:text-cream mb-4">
                  {cat.title}
                </h3>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-cream-dark dark:bg-brown-dark/50 text-charcoal/80 dark:text-cream/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
