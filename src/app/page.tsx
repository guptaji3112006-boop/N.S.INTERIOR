"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Ruler, PaintRoller, Clock, ShieldCheck, PenTool } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const whyChooseUs = [
  { icon: ShieldCheck, title: "Premium Materials", desc: "We use only the highest quality, durable materials for all our projects." },
  { icon: PenTool, title: "Custom Designs", desc: "Tailor-made designs that reflect your personality and lifestyle." },
  { icon: Clock, title: "Timely Delivery", desc: "Strict adherence to project timelines without compromising quality." },
  { icon: CheckCircle2, title: "End-to-End Solutions", desc: "From conceptualization to the final handover, we handle it all." },
];

const servicesPreview = [
  { title: "Modular Kitchen", img: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=800&auto=format&fit=crop" },
  { title: "Bedroom Interior", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" },
  { title: "Living Room", img: "https://images.unsplash.com/photo-1583847268964-b28ce8f52859?q=80&w=800&auto=format&fit=crop" },
  { title: "Office Interior", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
];

const processSteps = [
  { title: "Consultation", desc: "Understanding your needs and vision." },
  { title: "Planning", desc: "Space planning and layout optimization." },
  { title: "3D Design", desc: "Visualizing the space with high-end renders." },
  { title: "Execution", desc: "Bringing the design to life with expert craftsmanship." },
  { title: "Handover", desc: "Final walkthrough and project delivery." },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b14640f5f?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Crafting Elegant Spaces <br className="hidden md:block" /> That Inspire
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Complete Interior Design & Decoration Solutions for Homes, Offices & Commercial Spaces in Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="gold" className="w-full sm:w-auto">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Shapes Animation */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
        />
      </section>

      {/* Trusted Numbers */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                <AnimatedCounter value={500} suffix="+" />
              </div>
              <p className="text-text-gray font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                <AnimatedCounter value={10} suffix="+" />
              </div>
              <p className="text-text-gray font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                <AnimatedCounter value={250} suffix="+" />
              </div>
              <p className="text-text-gray font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <p className="text-text-gray font-medium">Quality Work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose N.S. Interior" 
            subtitle="We blend aesthetics with functionality to deliver spaces that exceed your expectations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-50"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-text-gray leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeading 
              title="Our Expertise" 
              subtitle="Comprehensive interior design and decoration services."
              centered={false}
              className="mb-0"
            />
            <Link href="/services" className="hidden md:flex mt-6 md:mt-0 items-center text-accent font-medium hover:text-primary transition-colors">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesPreview.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-heading font-semibold text-white mb-2">{service.title}</h3>
                  <div className="w-10 h-1 bg-accent transform origin-left transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <Link href="/services" className="md:hidden flex justify-center mt-10 items-center text-primary font-medium">
            View All Services <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Design Process" 
            subtitle="A seamless journey from concept to completion."
            light
          />
          
          <div className="relative mt-16">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2" />
            
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-4 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex-1 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-xl font-bold font-heading border-4 border-primary shadow-lg mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300 relative z-10">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-background/50" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-10 md:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 relative z-10">
              Ready to Transform Your Dream Home?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Book a free consultation with our expert designers today and take the first step towards a beautiful space.
            </p>
            <Link href="/contact" className="relative z-10">
              <Button size="lg" variant="gold" className="text-lg px-10">
                Book Consultation Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
