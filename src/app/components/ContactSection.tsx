import { Phone, Mail, MapPin, Send } from "lucide-react";
import React from "react";

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Plan Your Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with us to customize your perfect Ayodhya experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-muted-foreground">info@ayodhyatours.com</p>
                    <p className="text-muted-foreground">bookings@ayodhyatours.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      Ram Path, Near Railway Station<br />
                      Ayodhya, Uttar Pradesh 224123
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl mb-4">Special Offer!</h3>
              <p className="text-white/90 mb-4">
                Book your tour before March 2026 and get 15% off on all packages. 
                Limited time offer for group bookings.
              </p>
              <button className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg transition-all">
                Claim Offer
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2">Select Package</label>
                <select className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Ram Mandir Darshan</option>
                  <option>Divine Ayodhya Yatra</option>
                  <option>Spiritual Awakening</option>
                  <option>Custom Package</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your travel plans..."
                  className="w-full px-4 py-3 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
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
