'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Our Work', href: '#work' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar Container */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none"
      >
        {/* Logo - Left */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto"
        >
          <Magnetic strength={0.2}>
            <Link 
              href="/" 
              className="flex items-center font-heading text-2xl font-bold tracking-tighter text-[#111827] transition-transform hover:scale-105"
            >
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0891b2] text-white">
                <span className="text-lg">C</span>
              </div>
              Codost
            </Link>
          </Magnetic>
        </motion.div>

        {/* Floating Nav Pill - Center (Desktop) */}
        <motion.div 
          initial={{ y: -20, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex items-center justify-center pointer-events-auto"
        >
          <nav className="flex items-center gap-1 rounded-full border border-gray-100 bg-white px-2 py-1.5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.3}>
                <Link
                  href={link.href}
                  className="rounded-full px-5 py-2 font-body text-[15px] font-medium text-gray-900 transition-all hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              </Magnetic>
            ))}
          </nav>
        </motion.div>

        {/* CTA Button - Right */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 pointer-events-auto"
        >
          <Magnetic strength={0.4}>
            <Link
              href="https://cal.com/codost"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden md:flex items-center gap-2 rounded-full bg-[#111827] px-6 py-2.5 font-heading text-sm font-medium text-white transition-all hover:bg-black shadow-[0_10px_20px_-5px_rgba(8,145,178,0.4)]"
            >
              Book a Call
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </Magnetic>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col bg-white px-6 pt-24 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-heading font-bold tracking-tight text-gray-900"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <Link
                  href="https://cal.com/codost"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-5 font-heading text-xl font-bold text-white shadow-[0_20px_40px_-10px_rgba(8,145,178,0.3)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Call
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

