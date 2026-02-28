import { Phone, Mail, Instagram, Send, MapPin, Clock, Globe } from "lucide-react";
import React from "react";

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions about your spiritual journey? We're here to help plan your perfect Ayodhya experience
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="mb-1">Phone</h4>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+919369187566"
                          className="hover:text-orange-600 transition-colors block"
                        >
                          +91 93691 87566
                        </a>
                        <span className="text-xs block text-muted-foreground/70">
                          (India & International)
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Available 24/7 for inquiries and support
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:dprakhar007@gmail.com"
                          className="hover:text-orange-600 transition-colors"
                        >
                          dprakhar007@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <Instagram className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="mb-1">Instagram</h4>
                      <a
                        href="https://www.instagram.com/ayodhya.tourguide?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-orange-600 transition-colors"
                      >
                        @ayodhya.tourguide
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        Follow us for travel tips and updates
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Sunday: 6:00 AM - 10:00 PM IST
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Emergency support available 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Ayodhya, Uttar Pradesh, India
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Serving pilgrims from around the world
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Offer Card */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl">🎉</div>
                  <div>
                    <h3 className="text-2xl mb-2">Special Offer!</h3>
                    <p className="text-white/90 mb-4">
                      Book your tour before March 2026 and get 15% off on all packages. 
                      Limited time offer for group bookings.
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+919369187566"
                  className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg transition-all font-medium hover:shadow-md inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call to Claim Offer
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-gray-200"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-gray-200"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-gray-200"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Travel Dates (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., March 15-18, 2026"
                    className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-gray-200"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Number of Travelers</label>
                  <input
                    type="number"
                    placeholder="2"
                    min="1"
                    className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all border border-gray-200"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your travel plans, special requirements, or any questions..."
                    required
                    className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none transition-all border border-gray-200"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg font-medium"
                >
                  Send Inquiry
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl mb-2">How do I book a tour?</h3>
              <p className="text-muted-foreground">
                Simply call us at +91 93691 87566 or fill out the contact form above. 
                Our team will help you customize the perfect package for your needs.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl mb-2">What is included in the packages?</h3>
              <p className="text-muted-foreground">
                Our packages include temple visits, accommodation, transportation, 
                experienced guides, and meals. Specific inclusions vary by package.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl mb-2">Can I customize my tour?</h3>
              <p className="text-muted-foreground">
                Absolutely! We specialize in creating customized experiences. 
                Contact us to discuss your specific requirements and preferences.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl mb-2">What is your cancellation policy?</h3>
              <p className="text-muted-foreground">
                We offer flexible cancellation up to 7 days before departure. 
                Contact us for detailed terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
