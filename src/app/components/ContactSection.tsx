import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Check } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-4xl md:text-5xl bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              Have suggestions, ideas, or want to collaborate?<br />
              We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-orange-50 to-green-50 p-8 rounded-lg h-full flex flex-col justify-center">
                <h3 className="text-2xl mb-6 text-gray-800">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Mail className="w-6 h-6 text-[#FF9933]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <p className="text-gray-700">contact@samajhداarbharat.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <MapPin className="w-6 h-6 text-[#138808]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="text-gray-700">Pan India Initiative</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Phone className="w-6 h-6 text-[#000080]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <p className="text-gray-700">+91 XXX XXX XXXX</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-[#FF9933]">
                  <p className="text-sm text-gray-600 italic">
                    "Together, we can build a more responsible and dignified India."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-green-50 p-8 rounded-lg shadow-lg"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name" className="text-gray-700">Name</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2 bg-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email" className="text-gray-700">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2 bg-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-gray-700">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Your message, suggestions, or ideas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="mt-2 bg-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FF9933] hover:bg-[#FF9933]/90 text-white py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4"
                  >
                    <Check className="w-12 h-12 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl mb-2 text-gray-800">Message Sent!</h3>
                  <p className="text-lg text-gray-600">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
