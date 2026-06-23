import { ArrowRight, Heart, Users, Award, Shield, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SEOHead } from "../components/SEOHead";
import { Helmet } from "react-helmet-async";
import React from "react";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Ayodhya Tours",
  url: "https://www.ayodhyatour.in/about",
  telephone: "+919369187566",
  email: "dprakhar007@gmail.com",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ayodhya",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  description:
    "Ayodhya Tours has been guiding pilgrims to experience the divine beauty of Ayodhya since 2020, with over 5000 happy pilgrims and 500+ tours conducted.",
  numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
};

export function AboutPage() {
  return (
    <div className="pt-20">
      <SEOHead
        title="About Us – Trusted Ayodhya Pilgrimage Specialists Since 2020"
        description="Learn about Ayodhya Tours – founded in 2020, trusted by 5000+ pilgrims. Expert local guides, customised spiritual packages, and 24/7 support for your Ram Mandir journey."
        path="/about"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(aboutJsonLd)}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl mb-6 font-bold text-gray-900">About Ayodhya Tours</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted companion for spiritual journeys to the sacred city of Ayodhya.
              We create meaningful experiences that connect you with divine heritage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1652059468424-249066e3a98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheW9kaHlhJTIwcmFtJTIwbWFuZGlyJTIwdGVtcGxlfGVufDF8fHx8MTc3MTkxNjc3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ayodhya Ram Mandir – the newly constructed temple in Ayodhya, Uttar Pradesh"
                loading="lazy"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-3xl mb-6 font-bold text-gray-900">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded with a passion for spiritual tourism, Ayodhya Tours has been guiding pilgrims
                and travelers to experience the divine beauty of Ayodhya since 2020. We understand that
                visiting Ayodhya is not just a trip—it's a sacred journey that touches the soul.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of experienced guides and travel professionals are dedicated to ensuring that
                every moment of your visit is meaningful, comfortable, and unforgettable. From the majestic
                Ram Mandir to the serene banks of the Saryu River, we help you connect with the spiritual
                essence of this holy city.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl transition-all font-semibold shadow-md hover:shadow-lg"
              >
                Plan Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 font-bold text-gray-900">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine spiritual understanding with professional service to create exceptional experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Spiritual Focus", desc: "We understand the sacred nature of your journey and treat it with utmost reverence" },
              { icon: Users, title: "Expert Guides", desc: "Knowledgeable local guides share stories and history that bring Ayodhya to life" },
              { icon: Award, title: "5+ Years Experience", desc: "Trusted by thousands of pilgrims with consistently excellent reviews" },
              { icon: Shield, title: "Safety First", desc: "Your comfort and safety are our top priorities throughout your journey" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-orange-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-orange-100 group-hover:bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl mb-3 font-bold text-gray-900">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 font-bold text-gray-900">What We Offer</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive services for a complete spiritual experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Guided Temple Tours",
                desc: "Visit all major temples including Ram Mandir, Hanuman Garhi, Kanak Bhawan, and more with expert guides who share the rich history and significance of each site.",
              },
              {
                icon: Clock,
                title: "Flexible Packages",
                desc: "From quick day trips to extended spiritual retreats, we offer packages that fit your schedule and spiritual goals. Customization available for groups and families.",
              },
              {
                icon: Phone,
                title: "24/7 Support",
                desc: "Our team is always available to assist you before, during, and after your journey. We ensure a smooth and worry-free pilgrimage experience.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl mb-4 font-bold text-gray-900">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5000+", label: "Happy Pilgrims" },
              { value: "500+", label: "Tours Conducted" },
              { value: "4.9", label: "Average Rating" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6 font-bold text-gray-900">Ready to Begin Your Spiritual Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us help you create memories that last a lifetime in the sacred city of Ayodhya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl transition-all inline-flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919369187566"
                className="bg-white hover:bg-gray-50 text-orange-600 px-8 py-4 rounded-xl border-2 border-orange-600 transition-all inline-flex items-center justify-center gap-2 font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
