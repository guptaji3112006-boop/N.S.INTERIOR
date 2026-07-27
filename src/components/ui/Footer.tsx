"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-heading font-bold text-white">
                N.S. Interior
              </span>
              <span className="text-xs tracking-widest uppercase text-accent font-medium">
                & Decorator
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Transforming spaces into beautiful, functional, and luxurious living and working environments. Your dream space, realized.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-') === 'home' ? '' : item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-accent flex items-center gap-2 transition-colors text-sm">
                    <ArrowRight className="w-4 h-4" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {['Modular Kitchen', 'Living Room Design', 'Bedroom Interior', 'Office Interior', 'False Ceiling (POP)', 'Custom Furniture'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-300 hover:text-accent flex items-center gap-2 transition-colors text-sm">
                    <ArrowRight className="w-4 h-4" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>60 Futa Eidgah Road, Garima Garden, Sahibabad, Ghaziabad, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9654407583" className="hover:text-accent transition-colors">+91 96544 07583</a>
                  <a href="tel:8851008726" className="hover:text-accent transition-colors">+91 88510 08726</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@nsinterior.com" className="hover:text-accent transition-colors">info@nsinterior.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} N.S. Interior & Decorator. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
