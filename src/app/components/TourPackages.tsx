import { Calendar, Users, MapPin, Star, Lock } from "lucide-react";
import { motion } from "motion/react";
import React from "react";


const packages = [
  {
    id: 1,
    title: "Ram Mandir Darshan",
    image: "https://images.unsplash.com/photo-1650451484146-5d3a5654b7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE5MTY3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "1 Day",
    price: "₹1,100",
    rating: 4.9,
    featured: true,
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
    featured: false,
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
    featured: false,
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
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-gray-900">Our Tour Packages</h2>
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
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col ${
                pkg.featured
                  ? "ring-2 ring-orange-500 ring-offset-2"
                  : pkg.comingSoon
                  ? "opacity-75"
                  : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Featured badge */}
                {pkg.featured && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                )}
                {/* Rating badge */}
                {!pkg.comingSoon && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-semibold text-gray-800 text-sm">{pkg.rating}</span>
                  </div>
                )}
                {/* Coming soon overlay */}
                {pkg.comingSoon && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 text-center shadow-lg">
                      <Lock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <p className="font-bold text-gray-800 text-sm">Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
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

                <div className="mb-6 flex-1">
                  <h4 className="mb-3 font-semibold text-gray-700">Highlights:</h4>
                  {pkg.featured ? (
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-sm text-gray-600">
                          <MapPin className="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
                    <p className="text-gray-400 font-medium italic text-sm mb-3">Details to be announced soon</p>
                    <a
                      href={`https://wa.me/919369187566?text=Hi! I'm interested in the ${pkg.title} package. Please notify me when it's available.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#1ea855] transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Notify me when available
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
