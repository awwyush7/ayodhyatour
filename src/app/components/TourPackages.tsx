import { Calendar, Users, MapPin, Star } from "lucide-react";
import React from "react";

const packages = [
  {
    id: 1,
    title: "Ram Mandir Darshan",
    image: "https://images.unsplash.com/photo-1650451484146-5d3a5654b7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE5MTY3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "2 Days / 1 Night",
    price: "₹8,999",
    rating: 4.9,
    highlights: ["Ram Mandir Visit", "Hanuman Garhi", "Kanak Bhawan", "Saryu Aarti"],
  },
  {
    id: 2,
    title: "Divine Ayodhya Yatra",
    image: "https://images.unsplash.com/photo-1715256279174-bccfb102d632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NzE5MTY3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3 Days / 2 Nights",
    price: "₹12,999",
    rating: 4.8,
    highlights: ["All Major Temples", "River Cruise", "Local Heritage Tour", "Accommodation"],
  },
  {
    id: 3,
    title: "Spiritual Awakening",
    image: "https://images.unsplash.com/photo-1762784870943-8ced4d97d247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzcGlyaXR1YWwlMjB0b3VyaXNtfGVufDF8fHx8MTc3MTkxNjc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "5 Days / 4 Nights",
    price: "₹19,999",
    rating: 5.0,
    highlights: ["Complete Pilgrimage", "Yoga Sessions", "Cultural Programs", "Premium Hotels"],
  },
];

export function TourPackages() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Tour Packages</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully crafted packages designed to give you the best spiritual experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span>{pkg.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-4">{pkg.title}</h3>

                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Group Tour</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-muted-foreground">Highlights:</h4>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <MapPin className="w-3 h-3 text-orange-600" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-muted-foreground text-sm">Starting from</span>
                    <p className="text-2xl text-orange-600">{pkg.price}</p>
                  </div>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
