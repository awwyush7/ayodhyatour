import { Phone, Mail, Instagram, Send } from "lucide-react";
import React from "react";

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Plan Your Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with us to customize your perfect
            Ayodhya experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl mb-6">Get in Touch</h3>

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
                        className="hover:text-orange-600 transition-colors"
                      >
                        +91 93691 87566
                      </a>
                      <span className="text-xs block text-muted-foreground/70">
                        (India)
                      </span>
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
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="flex items-start gap-3 mb-4">
                <div className="text-4xl">🎉</div>
                <div>
                  <h3 className="text-2xl mb-2">
                    Special Offer!
                  </h3>
                  <p className="text-white/90 mb-4">
                    Book your tour before March 2026 and get 15%
                    off on all packages. Limited time offer for
                    group bookings.
                  </p>
                </div>
              </div>
              <button className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg transition-all font-medium hover:shadow-md">
                Claim Offer
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your travel plans..."
                  className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg font-medium"
              >
                Send Inquiry
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}