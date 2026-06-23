import { motion } from "motion/react";
import { Star, MapPin } from "lucide-react";
import React from "react";


const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai",
    text: "The best spiritual journey of my life. The guides were extremely knowledgeable and took care of every small detail. Highly recommended for families.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Ahmedabad",
    text: "Seamless experience from booking to darshan. The VIP access to Ram Mandir saved us hours. Truly a divine and hassle-free trip.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Delhi",
    text: "Very professional and courteous service. They accommodated our elderly parents perfectly. Will definitely book with them again.",
    rating: 5
  }
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

export function SocialProof() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-[3rem] p-8 md:p-12 border border-orange-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Our Guests Say</h2>
            <p className="text-gray-500">Genuine experiences from pilgrims who traveled with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
              >
                {/* Orange quote mark */}
                <div className="text-orange-400 absolute top-6 right-6 opacity-40">
                  <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>

                {/* Reviewer */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
