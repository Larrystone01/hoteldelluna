"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "react-toastify";
import Slider from "@/components/content/backgroundSlider";
import NavAndFooterWrap from "@/components/wrapper/Index";
import { FAQS } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("YOUR REQUEST IS SUCCESSFUL");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Slider images={["/images/hall.jpg"]}>
      <NavAndFooterWrap>
        {/* Hero Section */}
        <div className="py-20 h-[100vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-[100%]">
            <h1 className="text-5xl font-bold mb-4 text-yellow-500">
              Get In Touch
            </h1>
            <p className="text-xl text-yellow-200">
              We'd love to hear from you. Our team is here to help.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition"
                    placeholder="+234 xxx xxxx xxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="event">Event Planning</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-800 text-white py-4 rounded-lg font-semibold hover:bg-slate-700 transition flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">
                        Address
                      </h3>
                      <p className="text-slate-600">
                        54 Sunnie Ododo Street, Tanke
                        <br />
                        Kwara, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">
                        Phone
                      </h3>
                      <p className="text-slate-600">+234 903 2434 188</p>
                      <p className="text-slate-600">+234 901 9273 781</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">
                        Email
                      </h3>
                      <p className="text-slate-600">info@hotel.com</p>
                      <p className="text-slate-600">reservations@hotel.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-slate-600">Reception: 24/7</p>
                      <p className="text-slate-600">
                        Phone Support: 8:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl p-4 overflow-hidden">
                <div className="bg-slate-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1911923751686!2d4.618300473772454!3d8.48078229156026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364cea443ad8b1%3A0x97aedf36c2592f8d!2sMFM%20Junction%20Bus%20Stop!5e0!3m2!1sen!2sng!4v1767017461126!5m2!1sen!2sng"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </NavAndFooterWrap>
    </Slider>
  );
}
