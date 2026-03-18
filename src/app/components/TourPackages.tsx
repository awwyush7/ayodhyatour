import { Calendar, Users, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";

const packages = [
  {
    id: 1,
    title: "Ram Mandir Darshan",
    image: "https://images.unsplash.com/photo-1650451484146-5d3a5654b7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE5MTY3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "1 Day",
    price: "₹1,100",
    rating: 4.9,
    highlights: ["Ram Mandir", "Hanuman Garhi", "Kanak Bhawan", "Dashrath Mahal", "Nageshwar Nath", "Saryu Ghat Arti", "Ram Ki Paidi", "Lata Mangeshkar Chowk"],
    comingSoon: false,
  },
  {
    id: 2,
    title: "Varanasi Spiritual Tour",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    duration: "2 Days / 1 Night",
    price: "TBD",
    rating: 4.8,
    highlights: ["Kashi Vishwanath Temple", "Ganga Aarti at Dashashwamedh Ghat", "Sarnath Visit", "Boat Ride"],
    comingSoon: true,
  },
  {
    id: 3,
    title: "Allahabad Sangam Snan",
    image: "https://images.unsplash.com/photo-1625026930263-125032543e06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    duration: "1 Day",
    price: "TBD",
    rating: 4.7,
    highlights: ["Triveni Sangam Bath", "Allahabad Fort", "Anand Bhavan", "Hanuman Temple Visit"],
    comingSoon: true,
  },
];

export function TourPackages() {
  return (
    <section id="packages" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Our Tour Packages</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully crafted packages designed to give you the best spiritual experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={pkg.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`relative h-64 overflow-hidden`}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${pkg.comingSoon ? "blur-[2px]" : ""}`}
                />
                {!pkg.comingSoon && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-semibold text-gray-800">{pkg.rating}</span>
                  </div>
                )}
              </div>

              {pkg.comingSoon && (
                <div className="absolute top-6 -right-12 bg-orange-600 text-white font-bold py-1 px-12 transform rotate-45 shadow-lg z-10 text-sm tracking-wider">
                  COMING SOON
                </div>
              )}

              <div className="p-6 relative z-10 bg-white">
                <h3 className="text-2xl mb-4 font-bold text-gray-800">{pkg.title}</h3>

                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-800">{pkg.duration}</span>
                  </div>
                  {!pkg.comingSoon && (
                    <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Group Tour</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-gray-700">Highlights:</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {!pkg.comingSoon ? (
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div>
                      <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold block mb-1">Package Value</span>
                      <p className="text-2xl font-bold text-orange-600">{pkg.price}<span className="text-sm text-gray-500 font-normal">/person</span></p>
                    </div>
                    <a 
                      href="tel:+919369187566"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl transition-all font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Book Now
                    </a>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-100 mt-auto text-center">
                    <p className="text-gray-500 font-medium italic">Details to be announced soon</p>
                  </div>
                )}
              </div>

              {pkg.comingSoon && (
                <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] z-20 pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}