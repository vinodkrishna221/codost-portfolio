import Link from 'next/link';
import { ArrowUpRight, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#f8f9fa] text-[#1a1a1a] pt-32 pb-12 overflow-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          className="text-[25vw] font-bold text-[#000] opacity-[0.03] whitespace-nowrap tracking-tighter"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Codost..
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Column 1: Brand & Description (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div 
              className="text-2xl font-bold text-black mb-6 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <div className="w-8 h-8 bg-[#0052FF] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
              </div>
              Codost
            </div>
            <p className="text-zinc-500 text-[17px] leading-relaxed max-w-[320px]">
              Strategic web design, and campaigns tailored to drive result and conversions.
            </p>
          </div>

          {/* Column 2: Company (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[17px] font-bold text-black mb-8">Company</h4>
            <ul className="flex flex-col gap-4 text-[16px] text-zinc-600 font-medium">
              <li><Link href="#" className="hover:text-black transition-colors">Services</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Our Work</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Achievements</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Brand</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Socials (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[17px] font-bold text-black mb-8">Socials</h4>
            <ul className="flex flex-col gap-4 text-[16px] text-zinc-600 font-medium">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-black transition-colors">
                  Email <ArrowUpRight size={14} className="opacity-50" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-black transition-colors">
                  Instagram <ArrowUpRight size={14} className="opacity-50" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-black transition-colors">
                  LinkedIn <ArrowUpRight size={14} className="opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (Span 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-[17px] font-bold text-black mb-6">Newsletter</h4>
            <p className="text-zinc-500 text-[16px] mb-8 leading-relaxed">
              Stay ahead with design & marketing tips and strategies that drive results.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="@ Enter your email..."
                className="w-full h-[64px] pl-6 pr-16 bg-white border border-zinc-200 rounded-full text-black placeholder:text-zinc-400 focus:outline-none focus:border-[#0052FF] transition-colors shadow-sm"
              />
              <button className="absolute right-2 top-2 w-[48px] h-[48px] bg-[#0052FF] text-white rounded-full flex items-center justify-center hover:bg-[#0041CC] transition-colors shadow-lg">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-200 gap-6 text-[15px] font-medium text-zinc-500">
          <p>©2025 Codost All rights reserved</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
