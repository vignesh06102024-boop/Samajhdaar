import { motion } from "motion/react";
import { Heart, Users, TrendingUp } from "lucide-react";

export function AboutSection() {
  const beliefs = [
    {
      icon: Heart,
      title: "Civic sense reflects our values",
      description: "How we behave in public spaces shows who we truly are"
    },
    {
      icon: Users,
      title: "Small actions create national impact",
      description: "Every responsible act contributes to a better India"
    },
    {
      icon: TrendingUp,
      title: "Being responsible is a matter of pride",
      description: "Dignity and discipline define a developed nation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-6 text-4xl md:text-5xl bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
              About Samajhdaar Bharat
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-gray-700 text-center leading-relaxed text-lg mb-6">
              Samajhdaar Bharat is a public awareness initiative designed to encourage responsible behavior in everyday life.
              It promotes dignity, discipline, and empathy in public spaces—without enforcement, fear, or fines.
            </p>
          </motion.div>

          {/* Beliefs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-center text-gray-600 mb-8">This movement believes that:</p>
            <div className="grid md:grid-cols-3 gap-8">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-green-50 hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                    <belief.icon className="w-8 h-8 text-[#FF9933]" />
                  </div>
                  <h3 className="text-lg mb-2 text-gray-800">{belief.title}</h3>
                  <p className="text-sm text-gray-600">{belief.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-[#FF9933] to-[#138808] p-1 rounded-lg">
              <div className="bg-white px-8 py-4 rounded-lg">
                <p className="text-lg text-gray-800 italic">
                  A disciplined society begins with aware citizens.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
