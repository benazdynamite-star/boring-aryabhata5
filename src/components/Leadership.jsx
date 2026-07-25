'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MdOutlineGavel, MdRecordVoiceOver, MdEvent } from 'react-icons/md';

const stats = [
  { value: 3, suffix: '+', label: 'Years in Leadership' },
  { value: 100, suffix: '+', label: 'Students Represented' },
  { value: 20, suffix: '+', label: 'Motions & Debates' },
  { value: 5, suffix: '+', label: 'Campus Events Coordinated' },
  { value: 3, suffix: '+', label: 'Leadership Awards' },
];

const achievements = [
  {
    icon: MdOutlineGavel,
    title: 'Student Representation',
    description:
      'Serving as Honourable Representative and Deputy Speaker, I advocate directly for COLPHYS students at the highest level of campus governance — amplifying student voices in faculty and administrative decisions.',
  },
  {
    icon: MdRecordVoiceOver,
    title: 'Public Speaking & Debate',
    description:
      'From parliamentary motions to campus town halls, I have developed strong oratory skills that help drive policy changes, lead discussions, and inspire collective action among student peers.',
  },
  {
    icon: MdEvent,
    title: 'Event Coordination',
    description:
      'Planned and coordinated multiple campus events from concept to execution — creating spaces for student engagement, community building, and meaningful dialogue across campus organisations.',
  },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-brown text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
            Leadership
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-3">
            Deputy Speaker &amp; Honourable Representative
          </h2>
          <p className="text-gold font-semibold text-xl mb-5">
            COLPHYS Student Government
          </p>
          <p className="text-cream/75 text-base leading-relaxed max-w-2xl mx-auto">
            For over three years, I&apos;ve served at the intersection of student advocacy and
            campus governance — representing the voice of COLPHYS students, facilitating
            parliamentary processes, and building bridges between the student body and
            institutional leadership. This role has sharpened my ability to communicate,
            persuade, and lead with integrity.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-14 bg-brown-dark/40 rounded-2xl p-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-playfair text-4xl font-bold text-gold">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-cream/60 text-xs mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-brown-dark/50 border border-gold/20 rounded-2xl p-6 hover:border-gold/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-cream mb-3">
                  {item.title}
                </h3>
                <p className="text-cream/65 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
