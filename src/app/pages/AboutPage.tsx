import { ArrowRight, Heart, Users, Award, Shield, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router";
import React from "react";

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl mb-6">About Ayodhya Tours</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted companion for spiritual journeys to the sacred city of Ayodhya. 
              We create meaningful experiences that connect you with divine heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1652059468424-249066e3a98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheW9kaHlhJTIwcmFtJTIwbWFuZGlyJTIwdGVtcGxlfGVufDF8fHx8MTc3MTkxNjc3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ayodhya Ram Mandir"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded with a passion for spiritual tourism, Ayodhya Tours has been guiding pilgrims 
                and travelers to experience the divine beauty of Ayodhya since 2020. We understand that 
                visiting Ayodhya is not just a trip—it's a sacred journey that touches the soul.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team of experienced guides and travel professionals are dedicated to ensuring that 
                every moment of your visit is meaningful, comfortable, and unforgettable. From the majestic 
                Ram Mandir to the serene banks of the Saryu River, we help you connect with the spiritual 
                essence of this holy city.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-all"
              >
                Plan Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine spiritual understanding with professional service to create exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl mb-3">Spiritual Focus</h3>
              <p className="text-muted-foreground text-sm">
                We understand the sacred nature of your journey and treat it with utmost reverence
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl mb-3">Expert Guides</h3>
              <p className="text-muted-foreground text-sm">
                Knowledgeable local guides share stories and history that bring Ayodhya to life
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl mb-3">5+ Years Experience</h3>
              <p className="text-muted-foreground text-sm">
                Trusted by thousands of pilgrims with consistently excellent reviews
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl mb-3">Safety First</h3>
              <p className="text-muted-foreground text-sm">
                Your comfort and safety are our top priorities throughout your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What We Offer</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive services for a complete spiritual experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <MapPin className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl mb-4">Guided Temple Tours</h3>
              <p className="text-muted-foreground">
                Visit all major temples including Ram Mandir, Hanuman Garhi, Kanak Bhawan, and more 
                with expert guides who share the rich history and significance of each site.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <Clock className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl mb-4">Flexible Packages</h3>
              <p className="text-muted-foreground">
                From quick day trips to extended spiritual retreats, we offer packages that fit your 
                schedule and spiritual goals. Customization available for groups and families.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <Phone className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl mb-4">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our team is always available to assist you before, during, and after your journey. 
                We ensure a smooth and worry-free pilgrimage experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">5000+</div>
              <div className="text-white/80">Happy Pilgrims</div>
            </div>
            <div>
              <div className="text-5xl mb-2">500+</div>
              <div className="text-white/80">Tours Conducted</div>
            </div>
            <div>
              <div className="text-5xl mb-2">4.9</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl mb-2">5+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let us help you create memories that last a lifetime in the sacred city of Ayodhya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+919369187566"
              className="bg-white hover:bg-gray-50 text-orange-600 px-8 py-4 rounded-lg border-2 border-orange-600 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
