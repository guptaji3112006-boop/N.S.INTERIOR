"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const servicesList = [
  {
    title: "Modular Kitchen",
    desc: "Modern, sleek, and highly functional modular kitchen designs optimized for your cooking habits and space. We offer a wide range of finishes, smart storage solutions, and premium hardware.",
    img: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Living Room Interior",
    desc: "Create a welcoming and luxurious living room. Our designs focus on comfort, lighting, and statement pieces that make your living area the perfect place to relax and entertain.",
    img: "https://images.unsplash.com/photo-1583847268964-b28ce8f52859?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Bedroom Interior",
    desc: "Transform your bedroom into a peaceful sanctuary. We design cozy, elegant bedrooms with custom wardrobes, ambient lighting, and bespoke furniture tailored to your taste.",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Office Interior",
    desc: "Boost productivity with our ergonomic and modern office interiors. We design workspaces that reflect your brand identity while ensuring comfort for your employees.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "False Ceiling (POP)",
    desc: "Elevate your space with designer false ceilings. We provide intricate POP and gypsum designs complete with modern cove and profile lighting integrations.",
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Custom Furniture",
    desc: "Bespoke furniture designed specifically for your space. From double beds and custom sofas to dining tables and TV units, we craft pieces that perfectly fit your home.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12 w-full">
      {/* Hero Header */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive interior design solutions tailored to your unique requirements.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24">
            {servicesList.map((service, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 w-full"
                >
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg group">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 !== 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 w-full"
                >
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">{service.title}</h2>
                  <div className="w-12 h-1 bg-accent mb-6" />
                  <p className="text-text-gray text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link href="/contact">
                    <Button variant="primary">
                      Request Pricing
                    </Button>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Info */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 text-center">
            <SectionHeading title="Need Something Else?" subtitle="We also provide painting, aluminium work, SS & MS fabrication, and complete turnkey renovations." />
            <Link href="/contact">
              <Button size="lg" variant="gold">
                Discuss Your Custom Project
              </Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
