import {
  Phone,
  Mail,
  Send,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../config/emailjs";
import React from "react";


export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    if (!formRef.current) return;

    try {
      // Get form data
      const formData = new FormData(formRef.current);
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        from_phone: formData.get('from_phone'),
        travel_dates: formData.get('travel_dates') || 'Not specified',
        travelers: formData.get('travelers') || 'Not specified',
        message: formData.get('message'),
        to_email: 'dprakhar007@gmail.com', // Recipient email
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSuccess(true);
      formRef.current?.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage("Failed to send message. Please try calling us directly at +91 93691 87566");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620002167389-13835bd0f8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6 font-bold tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium"
          >
            Have questions about your spiritual journey? We're
            here to help plan your perfect Ayodhya experience
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <h2 className="text-3xl mb-8 font-bold text-gray-800">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-5 items-start group">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm text-orange-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-sm font-medium mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-900 font-semibold text-lg">
                        <a
                          href="tel:+919369187566"
                          className="hover:text-orange-600 transition-colors block"
                        >
                          +91 93691 87566
                        </a>
                        <span className="text-xs font-normal block text-gray-500 mt-1">
                          (India & International)
                        </span>
                      </p>
                      <p className="text-sm text-gray-600 mt-2 font-medium">
                        Available 24/7 for inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm text-orange-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-sm font-medium mb-1">
                        Email
                      </h4>
                      <p className="text-gray-900 font-semibold text-lg">
                        <a
                          href="mailto:dprakhar007@gmail.com"
                          className="hover:text-orange-600 transition-colors"
                        >
                          dprakhar007@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-600 mt-2 font-medium">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-sm">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="24"
                          height="24"
                          rx="6"
                          fill="url(#paint0_linear)"
                        />
                        <path
                          d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                          stroke="white"
                          strokeWidth="1.8"
                        />
                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="1.5"
                          fill="white"
                        />
                        <rect
                          x="3.5"
                          y="3.5"
                          width="17"
                          height="17"
                          rx="4.5"
                          stroke="white"
                          strokeWidth="1.8"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="2"
                            y1="22"
                            x2="22"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FEE411" />
                            <stop
                              offset="0.1"
                              stopColor="#FEDB16"
                            />
                            <stop
                              offset="0.3"
                              stopColor="#FEC125"
                            />
                            <stop
                              offset="0.5"
                              stopColor="#FE983D"
                            />
                            <stop
                              offset="0.7"
                              stopColor="#E52E71"
                            />
                            <stop
                              offset="0.9"
                              stopColor="#9B2282"
                            />
                            <stop
                              offset="1"
                              stopColor="#405DE6"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-sm font-medium mb-1">
                        Instagram
                      </h4>
                      <a
                        href="https://www.instagram.com/ayodhya.tourguide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 font-semibold text-lg hover:text-pink-600 transition-colors"
                      >
                        @ayodhya.tourguide
                      </a>
                      <p className="text-sm text-gray-600 mt-2 font-medium">
                        Follow us for travel tips
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm text-orange-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-sm font-medium mb-1">
                        Business Hours
                      </h4>
                      <p className="text-gray-900 font-semibold text-lg">
                        Mon - Sun: 6:00 AM - 10:00 PM
                      </p>
                      <p className="text-sm text-gray-600 mt-2 font-medium">
                        Emergency support 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm text-orange-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-sm font-medium mb-1">
                        Location
                      </h4>
                      <p className="text-gray-900 font-semibold text-lg">
                        Ayodhya, Uttar Pradesh, India
                      </p>
                      <p className="text-sm text-gray-600 mt-2 font-medium">
                        Serving pilgrims globally
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Offer Card */}
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="text-4xl bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                    🎉
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 font-bold">
                      Special Offer!
                    </h3>
                    <p className="text-white/90 font-medium">
                      Book your tour before March 2026 and get
                      15% off on all packages. Limited time
                      offer for group bookings.
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+919369187566"
                  className="bg-white text-orange-600 hover:bg-orange-50 w-full justify-center px-6 py-4 rounded-xl transition-all font-bold hover:shadow-lg inline-flex items-center gap-2 relative z-10"
                >
                  <Phone className="w-5 h-5" />
                  Call to Claim Offer
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-fit"
            >
              <h2 className="text-3xl mb-8 font-bold text-gray-800">
                Send Us a Message
              </h2>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. Our team will
                    contact you shortly to plan your spiritual
                    journey.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-orange-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}
                  
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Enter your name"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="from_phone"
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-gray-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Travel Dates
                      </label>
                      <input
                        type="text"
                        name="travel_dates"
                        placeholder="e.g., March 15-18"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-700">
                        Travelers
                      </label>
                      <input
                        type="number"
                        name="travelers"
                        placeholder="2"
                        min="1"
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-gray-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      placeholder="Tell us about your travel plans, special requirements..."
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 resize-none transition-all text-gray-800"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg font-bold shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Inquiry"}
                    {!isSubmitting && (
                      <Send className="w-5 h-5" />
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center font-medium mt-4">
                    By submitting this form, you agree to our
                    privacy policy
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about our
              tours
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "How do I book a tour?",
                a: "Simply call us at +91 93691 87566 or fill out the contact form above. Our team will help you customize the perfect package for your needs.",
              },
              {
                q: "What is included in the packages?",
                a: "Our packages typically include temple visits, transportation, experienced guides, and meals. Specific inclusions vary by package.",
              },
              {
                q: "Can I customize my tour?",
                a: "Absolutely! We specialize in creating customized experiences. Contact us to discuss your specific requirements and preferences.",
              },
              {
                q: "What is your cancellation policy?",
                a: "We offer flexible cancellation up to 7 days before departure. Contact us for detailed terms and conditions.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100/50 hover:bg-orange-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}