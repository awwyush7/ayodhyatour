import { Heart, Shield, Award, Clock } from "lucide-react";
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

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1717310686662-d1d0ca8427ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBwaWxncmltYWdlJTIwaW5kaWF8ZW58MXx8fHwxNzcxOTE2Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ayodhya Temple"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-4xl mb-2">1000+</p>
                <p className="text-lg">Happy Pilgrims</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-72 h-72 bg-orange-200/50 rounded-2xl"></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Why Choose Our Ayodhya Tours?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are dedicated to providing an authentic and enriching spiritual experience. 
              With years of expertise in organizing pilgrimages to Ayodhya, we ensure every 
              moment of your journey is memorable and meaningful.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-all">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
