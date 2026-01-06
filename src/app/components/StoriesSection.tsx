import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Quote, ArrowRight } from "lucide-react";

export function StoriesSection() {
  const stories = [
    {
      name: "Ravi",
      city: "Hyderabad",
      story: "Helped maintain cleanliness by organizing a small cleanup drive in his colony.",
      impact: "Reduced waste and inspired neighbors to participate.",
      gradient: "from-orange-100 to-orange-50"
    },
    {
      name: "Anjali",
      city: "Pune",
      story: "Stopped the spread of fake news by reporting and educating others online.",
      impact: "Promoted responsible digital behavior.",
      gradient: "from-green-100 to-green-50"
    },
    {
      name: "Imran",
      city: "Delhi",
      story: "Followed traffic rules and encouraged friends to wear helmets.",
      impact: "Improved road safety awareness.",
      gradient: "from-blue-100 to-blue-50"
    },
    {
      name: "Priya",
      city: "Mumbai",
      story: "Started using reusable bags and motivated her family to reduce plastic waste.",
      impact: "Created a ripple effect of environmental consciousness.",
      gradient: "from-purple-100 to-purple-50"
    },
    {
      name: "Karan",
      city: "Bangalore",
      story: "Helped an elderly person cross a busy road and ensured their safety.",
      impact: "Showed that small acts of kindness matter.",
      gradient: "from-pink-100 to-pink-50"
    },
    {
      name: "Meera",
      city: "Kolkata",
      story: "Reported damaged public infrastructure to local authorities for repair.",
      impact: "Contributed to safer public spaces.",
      gradient: "from-yellow-100 to-yellow-50"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-4xl md:text-5xl bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
              Samajhdaar Stories from India
            </h2>
            <p className="text-lg text-gray-600">
              Real people making real differences in their communities
            </p>
          </motion.div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className={`h-full bg-gradient-to-br ${story.gradient} border-none shadow-lg hover:shadow-xl transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl text-gray-800">{story.name}</CardTitle>
                        <CardDescription className="text-gray-600">{story.city}</CardDescription>
                      </div>
                      <Quote className="w-8 h-8 text-gray-300" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {story.story}
                    </p>
                    <div className="flex items-start gap-2 pt-4 border-t border-gray-200">
                      <ArrowRight className="w-5 h-5 text-[#138808] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 italic">
                        {story.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
