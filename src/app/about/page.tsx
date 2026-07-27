"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
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
            About N.S. Interior
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Designing dreams into reality for over a decade.
          </motion.p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                  alt="Our Design Studio"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Story</h2>
              <p className="text-text-gray mb-6 leading-relaxed">
                Founded with a passion for transforming spaces, N.S. Interior & Decorator has grown into a premier interior design firm in the Delhi NCR region. Our journey began over 10 years ago, driven by the belief that every space has a unique story waiting to be told through thoughtful design.
              </p>
              <p className="text-text-gray mb-8 leading-relaxed">
                We specialize in creating environments that are not only visually stunning but also highly functional. From luxurious residential homes to dynamic commercial spaces, we bring a wealth of experience, premium materials, and unparalleled craftsmanship to every project.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-50">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Our Mission</h3>
                  <p className="text-sm text-text-gray">To deliver innovative and personalized interior design solutions that enhance the quality of life for our clients.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-50">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">Our Vision</h3>
                  <p className="text-sm text-text-gray">To be the most trusted and sought-after interior design brand recognized for our creativity, quality, and commitment.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Owner Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeading title="Message From The Founder" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/5 p-10 rounded-3xl"
          >
            <p className="text-xl md:text-2xl italic text-primary mb-6 leading-relaxed">
              "We don't just design rooms; we design the backdrop for your life's most precious moments. Our commitment is to quality, transparency, and bringing your exact vision to life."
            </p>
            <h4 className="text-lg font-heading font-bold text-primary">Founder, N.S. Interior</h4>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
