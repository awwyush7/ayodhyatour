import { ArrowRight, Users, Star, Clock } from "lucide-react";
import { motion } from "motion/react";
import React from "react";


export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1652059468424-249066e3a98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheW9kaHlhJTIwcmFtJTIwbWFuZGlyJTIwdGVtcGxlfGVufDF8fHx8MTc3MTkxNjc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ayodhya Ram Mandir temple illuminated at dusk – the sacred birthplace of Lord Ram"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 text-sm font-medium"
        >
          <span>🌟</span>
          <span>Trusted by 1000+ Happy Pilgrims</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl mb-6 font-bold leading-tight"
        >
          Discover the Divine Beauty of Ayodhya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
        >
          Experience the spiritual journey of a lifetime with our curated tours to the sacred city of Lord Ram
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#packages"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg font-semibold transform hover:-translate-y-1"
          >
            Explore Packages
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+919369187566"
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-xl border border-white/30 transition-all flex items-center justify-center font-semibold transform hover:-translate-y-1"
          >
            Call Now
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-6 sm:gap-10 text-white/80 text-sm flex-wrap"
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <span className="font-medium">1000+ Pilgrims</span>
          </div>
          <div className="w-px h-4 bg-white/30 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
            <span className="font-medium">4.9 Rating</span>
          </div>
          <div className="w-px h-4 bg-white/30 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <span className="font-medium">5+ Years Experience</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
