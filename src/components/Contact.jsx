'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  MdEmail,
  MdPhone,
  MdSend,
  MdCheckCircle,
  MdError,
} from 'react-icons/md';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const contactDetails = [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'osinoikiemmanuel@gmail.com',
    href: 'mailto:osinoikiemmanuel@gmail.com',
  },
  {
    icon: MdPhone,
    label: 'Phone',
    value: '+2347042914064',
    href: 'tel:+2347042914064',
  },
  {
    icon: FaXTwitter,
    label: 'X (Twitter)',
    value: '@callmeBkay',
    href: 'https://x.com/callmeBkay',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'emmanuel-osinoiki',
    href: 'https://linkedin.com/in/emmanuel-osinoiki-138307356',
  },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const formRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus('loading');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Graceful degradation: mock send for preview
      console.log('EmailJS env vars not set — mock send:', form);
      await new Promise((r) => setTimeout(r, 1000));
      setStatus('success');
      setForm(initialForm);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      );
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-cream dark:bg-brown-dark border text-charcoal dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-300'
        : 'border-brown/30 dark:border-cream/20 focus:border-gold'
    }`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream dark:bg-brown-dark">
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
            Get in Touch
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-charcoal/70 dark:text-cream/70 text-base leading-relaxed mb-8">
              Whether you&apos;re looking for a content writer, social media manager, or sports
              media creative — I&apos;d love to hear from you. Let&apos;s build something great
              together.
            </p>

            <div className="flex flex-col gap-5">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/50 dark:text-cream/50 mb-0.5 uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-charcoal dark:text-cream group-hover:text-gold transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right Column: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center bg-cream-dark dark:bg-brown rounded-2xl"
              >
                <MdCheckCircle size={56} className="text-gold" />
                <h3 className="font-playfair text-2xl font-bold text-charcoal dark:text-cream">
                  Message Sent!
                </h3>
                <p className="text-charcoal/65 dark:text-cream/65 text-sm max-w-xs">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-5 py-2 text-sm font-semibold bg-brown text-cream rounded-lg hover:bg-brown-light transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-charcoal/60 dark:text-cream/60 mb-1.5 uppercase tracking-wide">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-charcoal/60 dark:text-cream/60 mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-charcoal/60 dark:text-cream/60 mb-1.5 uppercase tracking-wide">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={inputClass('subject')}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-red-500 mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-charcoal/60 dark:text-cream/60 mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project…"
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 rounded-lg px-4 py-3">
                    <MdError size={18} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.03 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-brown text-cream font-semibold rounded-xl hover:bg-brown-light disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
                  aria-label="Send message"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <MdSend size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
