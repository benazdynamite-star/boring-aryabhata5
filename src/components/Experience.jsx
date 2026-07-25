'use client';

import { motion } from 'framer-motion';
import {
  MdOutlineGavel,
  MdSportsSoccer,
  MdDevices,
  MdGroups,
} from 'react-icons/md';

const experiences = [
  {
    title: 'Honourable Representative of COLPHYS & Deputy Speaker',
    period: '2023 – Present',
    badge: 'Leadership',
    badgeColor: 'bg-brown/15 text-brown dark:bg-cream/15 dark:text-cream',
    icon: MdOutlineGavel,
    responsibilities: [
      'Student representation and advocacy for COLPHYS faculty',
      'Public speaking and parliamentary debate facilitation',
      'Policy advocacy and student-welfare decision making',
      'Content creation for student government communications',
      'Liaison between student body and faculty administration',
    ],
  },
  {
    title: 'Content Writer & Sports Media Creative — CSL 4.0',
    period: '2024',
    badge: 'Sports Media',
    badgeColor: 'bg-gold/15 text-brown dark:text-gold',
    icon: MdSportsSoccer,
    responsibilities: [
      'Squad announcements and player profile content creation',
      'Matchday campaign posts and live coverage storytelling',
      'Team hype posts driving fan excitement and engagement',
      'Audience engagement and community interaction management',
      'Brand campaign promotion and sponsored content production',
      'Post-event wrap-up content and highlight reels copy',
    ],
  },
  {
    title: 'Social Media Manager',
    period: '2023 – Present',
    badge: 'Digital Marketing',
    badgeColor: 'bg-gold/15 text-brown dark:text-gold',
    icon: MdDevices,
    responsibilities: [
      'Content calendar planning and editorial strategy development',
      'Caption writing aligned with brand voice and guidelines',
      'Daily audience engagement and community response management',
      'Social media growth tracking and performance analytics',
      'Brand visibility campaigns across X and Instagram',
    ],
  },
  {
    title: 'Student Leadership & Campus Politics',
    period: '2022 – Present',
    badge: 'Leadership',
    badgeColor: 'bg-brown/15 text-brown dark:bg-cream/15 dark:text-cream',
    icon: MdGroups,
    responsibilities: [
      'Campaign strategy development and political communication',
      'Cross-team collaboration and coalition-building',
      'Publicity and brand messaging for student initiatives',
      'Community engagement events and campus mobilisation',
      'Mentorship and peer support for incoming student leaders',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-cream-dark dark:bg-brown">
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
            My Journey
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-brown/20 dark:bg-cream/20" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                  className="relative lg:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-gold items-center justify-center shadow-md z-10">
                    <Icon size={16} className="text-white" />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(92,64,51,0.15)' }}
                    transition={{ duration: 0.2 }}
                    className="bg-cream dark:bg-brown-dark rounded-2xl p-6 shadow-md border-l-4 border-gold"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 lg:hidden">
                        <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
                          <Icon size={18} className="text-gold" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-cream leading-snug">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${exp.badgeColor}`}
                        >
                          {exp.badge}
                        </span>
                        <span className="text-xs text-charcoal/50 dark:text-cream/50 font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm text-charcoal/70 dark:text-cream/70"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
