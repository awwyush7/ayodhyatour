import { motion } from "motion/react";
import { Star } from "lucide-react";

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

export function SocialProof() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Testimonials */}
        <div className="bg-orange-50/50 rounded-[3rem] p-8 md:p-12 border border-orange-100">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-gray-600">Genuine experiences from pilgrims who traveled with us</p>
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
                <div className="text-orange-200 absolute top-6 right-6 opacity-30">
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10 font-medium">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}