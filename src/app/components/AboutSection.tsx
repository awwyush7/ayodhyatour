import { Heart, Shield, Award, Clock } from "lucide-react";
import { motion } from "motion/react";

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
            {/* Decorative Element */}
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
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl transition-all font-semibold shadow-lg"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}