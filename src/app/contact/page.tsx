"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 w-full min-h-screen bg-background">
      <section className="bg-primary py-20 text-center mb-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Let's discuss your dream project. We are here to help.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading title="Get In Touch" centered={false} className="mb-8" />
            <p className="text-text-gray mb-10 text-lg leading-relaxed">
              Whether you're looking for a complete home makeover or just a simple modular kitchen update, our team is ready to assist you with premium designs and flawless execution.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-primary mb-1">Phone & WhatsApp</h4>
                  <p className="text-text-gray mb-1"><a href="tel:9654407583" className="hover:text-accent transition-colors">+91 96544 07583</a></p>
                  <p className="text-text-gray"><a href="tel:8851008726" className="hover:text-accent transition-colors">+91 88510 08726</a></p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-primary mb-1">Our Studio</h4>
                  <p className="text-text-gray leading-relaxed">60 Futa Eidgah Road, Garima Garden,<br/>Sahibabad, Ghaziabad,<br/>Uttar Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-primary mb-1">Email Us</h4>
                  <p className="text-text-gray"><a href="mailto:info@nsinterior.com" className="hover:text-accent transition-colors">info@nsinterior.com</a></p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-primary mb-1">Business Hours</h4>
                  <p className="text-text-gray">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-text-gray">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">Send Us a Message</h3>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-primary">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 98765 43210" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-medium text-primary">Interested Service</label>
                <select id="service" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-white">
                  <option value="">Select a service</option>
                  <option value="Modular Kitchen">Modular Kitchen</option>
                  <option value="Full Home Interior">Full Home Interior</option>
                  <option value="False Ceiling (POP)">False Ceiling (POP)</option>
                  <option value="Custom Furniture">Custom Furniture</option>
                  <option value="Office Interior">Office Interior</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="message" className="text-sm font-medium text-primary">Your Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your project requirements..." className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none" required></textarea>
              </div>
              <Button type="button" className="w-full text-lg shadow-lg shadow-accent/20">
                <Send className="w-5 h-5 mr-2" />
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl overflow-hidden shadow-lg h-[400px] relative border border-gray-100"
        >
          {/* Using an iframe for Google Maps based on Sahibabad, Ghaziabad location */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.570912185566!2d77.34007873852085!3d28.6704176710404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0731f2479db%3A0xc644cba8f070bf3c!2sGarima%20Garden%2C%20Ashok%20Vihar%20Extension%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201005!5e0!3m2!1sen!2sin!4v1709139824000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="N.S. Interior Location Map"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
