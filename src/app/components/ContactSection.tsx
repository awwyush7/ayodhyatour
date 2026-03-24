import { Phone, Mail, Send, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../config/emailjs";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
        message: formData.get('message'),
        to_email: 'trustedtourandtravel@icloud.com', // Recipient email
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
    <section className="py-24 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Connect With Us</span>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-gray-900">
            Plan Your Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with us to customize your perfect Ayodhya experience. We're here to guide your spiritual path.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow border border-gray-100">
              <h3 className="text-2xl mb-8 font-bold text-gray-800">Contact Details</h3>

              <div className="space-y-8">
                <div className="flex gap-5 items-start group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm text-orange-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium mb-1">Call Us Directly</h4>
                    <p className="text-gray-900 font-semibold text-lg">
                      <a
                        href="tel:+919369187566"
                        className="hover:text-orange-600 transition-colors"
                      >
                        +91 93691 87566
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm text-orange-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium mb-1">Email Address</h4>
                    <p className="text-gray-900 font-semibold text-lg">
                      <a
                        href="mailto:dprakhar007@gmail.com"
                        className="hover:text-orange-600 transition-colors break-all"
                      >
                        dprakhar007@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-sm">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="6" fill="url(#paint0_linear)"/>
                      <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="white" strokeWidth="1.8"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="white" strokeWidth="1.8"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FEE411"/>
                          <stop offset="0.1" stopColor="#FEDB16"/>
                          <stop offset="0.3" stopColor="#FEC125"/>
                          <stop offset="0.5" stopColor="#FE983D"/>
                          <stop offset="0.7" stopColor="#E52E71"/>
                          <stop offset="0.9" stopColor="#9B2282"/>
                          <stop offset="1" stopColor="#405DE6"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium mb-1">Follow our Journey</h4>
                    <a
                      href="https://www.instagram.com/ayodhya.tourguide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-semibold text-lg hover:text-pink-600 transition-colors"
                    >
                      @ayodhya.tourguide
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="text-4xl bg-white/20 p-3 rounded-2xl backdrop-blur-sm">🎉</div>
                <div>
                  <h3 className="text-2xl mb-2 font-bold">
                    Special Offer!
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Book your tour before March 2026 and get 15%
                    off on all packages. Limited time offer for
                    group bookings.
                  </p>
                </div>
              </div>
              <button className="w-full bg-white text-orange-600 hover:bg-orange-50 px-6 py-4 rounded-xl transition-all font-bold hover:shadow-lg relative z-10">
                Claim Offer Now
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <h3 className="text-2xl mb-8 font-bold text-gray-800">Send an Inquiry</h3>
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly at the email you provided.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-orange-600 font-medium hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}
                
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-gray-800"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-gray-800"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="from_phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-gray-800"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us about your travel plans..."
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 resize-none transition-all text-gray-800"
                  ></textarea>
                </div>

                {/* Hidden field for recipient email */}
                <input type="hidden" name="to_email" value="dprakhar007@gmail.com" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg font-bold shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}