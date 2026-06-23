import { Heart, Shield, Award, Clock, Star, Users } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import React from "react";


const features = [
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Tailored tours that match your spiritual journey and preferences",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with experienced guides and support",
  },
  {
    icon: Award,
    title: "Expert Guides",
    description: "Knowledgeable guides who bring history and spirituality to life",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Multiple departure dates to fit your schedule perfectly",
  },
];

const stats = [
  { icon: Users, value: "1000+", label: "Pilgrims" },
  { icon: Star, value: "4.9★", label: "Rating" },
  { icon: Award, value: "5+", label: "Yrs Experience" },
];

export function AboutSection() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1717310686662-d1d0ca8427ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBwaWxncmltYWdlJTIwaW5kaWF8ZW58MXx8fHwxNzcxOTE2Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ayodhya Temple"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-5xl font-black mb-2">1000+</p>
                <p className="text-xl font-medium text-white/90">Happy Pilgrims</p>
              </div>
            </div>
            {/* Decorative blur circles */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-orange-100 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-red-100 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-gray-900 leading-tight">
              Why Choose Our Ayodhya Tours?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We are dedicated to providing an authentic and enriching spiritual experience.
              With years of expertise in organizing pilgrimages to Ayodhya, we ensure every
              moment of your journey is memorable and meaningful.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 text-orange-600 shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-6 sm:gap-10">
              {stats.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && <div className="w-px h-10 bg-gray-200 flex-shrink-0"></div>}
                  <div>
                    <p className="text-2xl font-black text-orange-600">{stat.value}</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-10 inline-block bg-orange-800 hover:bg-orange-900 text-white px-8 py-4 rounded-xl transition-all font-semibold shadow-lg hover:-translate-y-0.5 transform"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
