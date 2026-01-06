import { motion } from "motion/react";
import { Trash2, Car, Users2, Building2, Leaf, HeartHandshake } from "lucide-react";

function CivicEducation() {
  const topics = [
    {
      icon: Trash2,
      gradient: "from-orange-50 to-green-50",
      iconColor: "text-[#FF9933]",
      bulletColor: "text-[#138808]",
      title: "Cleanliness and Hygiene in Public Spaces",
      description: "Despite initiatives like Swachh Bharat Abhiyan, many public spaces still struggle with littering and unhygienic conditions. The challenge is not infrastructure alone, but mindset.",
      imageAlt: "Community cleanliness drive",
      items: [
        "Carry your waste and dispose of it properly",
        "Segregate waste into wet and dry",
        "Avoid single-use plastics",
        "Maintain cleanliness in public toilets",
        "Participate in community cleanliness drives"
      ]
    },
    {
      icon: Car,
      gradient: "from-green-50 to-orange-50",
      iconColor: "text-[#138808]",
      bulletColor: "text-[#FF9933]",
      title: "Traffic Discipline and Road Safety",
      description: "Traffic discipline is not about avoiding fines—it is about valuing human life. Undisciplined driving increases congestion and fatal accidents.",
      imageAlt: "Traffic discipline",
      items: [
        "Wear helmets and seatbelts at all times",
        "Respect traffic signals even without enforcement",
        "Give way to ambulances and emergency vehicles",
        "Avoid unnecessary honking",
        "Never drive under the influence"
      ]
    },
    {
      icon: Users2,
      gradient: "from-orange-50 to-green-50",
      iconColor: "text-[#FF9933]",
      bulletColor: "text-[#138808]",
      title: "Public Behaviour and Queue Discipline",
      description: null,
      imageAlt: "Queue discipline",
      items: [
        "Stand in queues without jumping",
        "Offer seats to elderly and differently-abled",
        "Keep mobile volume low in public spaces",
        "Let people exit before entering",
        "Maintain personal space"
      ]
    },
    {
      icon: Building2,
      gradient: "from-green-50 to-orange-50",
      iconColor: "text-[#138808]",
      bulletColor: "text-[#FF9933]",
      title: "Respect for Public Property",
      description: null,
      imageAlt: "Public property protection",
      items: [
        "Do not damage or deface public property",
        "Report damaged infrastructure",
        "Respect monuments and heritage sites",
        "Use public facilities responsibly"
      ]
    },
    {
      icon: Leaf,
      gradient: "from-orange-50 to-green-50",
      iconColor: "text-[#FF9933]",
      bulletColor: "text-[#138808]",
      title: "Environmental Responsibility",
      description: null,
      imageAlt: "Environmental conservation",
      items: [
        "Conserve water and electricity",
        "Reduce plastic usage",
        "Use public transport or carpool",
        "Plant and protect trees",
        "Avoid firecrackers"
      ]
    },
    {
      icon: HeartHandshake,
      gradient: "from-green-50 to-orange-50",
      iconColor: "text-[#138808]",
      bulletColor: "text-[#FF9933]",
      title: "Social Responsibility & Community Service",
      description: null,
      imageAlt: "Community service",
      items: [
        "Volunteer with NGOs",
        "Participate in blood donation and cleanliness drives",
        "Mentor underprivileged students",
        "Support local vendors and initiatives",
        "Stand against discrimination and injustice"
      ]
    }
  ];

  return (
    <section id="civic-education" className="py-20 bg-white">
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
            <h2 className="mb-4 text-4xl md:text-5xl font-bold">
              Understanding <span className="bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">Civic Responsibility</span>
            </h2>
            <p className="text-lg text-gray-600">
              Building a better India through conscious citizenship and collective action
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-gray-700 text-center leading-relaxed text-lg">
              Civic activities are the everyday actions and behaviours that define how we interact with
              public spaces, shared resources, and fellow citizens. While these actions may seem small
              individually, they collectively shape the quality of life in our cities, towns, and villages.
            </p>
          </motion.div>

          {/* Civic Topics */}
          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`bg-gradient-to-br ${topic.gradient} rounded-xl p-6 hover:shadow-lg transition-shadow`}
              >
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md">
                      <topic.icon className={`w-7 h-7 ${topic.iconColor}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{topic.title}</h3>
                    {topic.description && (
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {topic.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Items */}
                <ul className="space-y-2 ml-2">
                  {topic.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className={`${topic.bulletColor} mt-1 text-lg font-bold`}>•</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12"
          >
            <div className="inline-block bg-gradient-to-r from-[#FF9933] to-[#138808] p-1 rounded-lg w-full">
              <div className="bg-white px-8 py-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">From Awareness to Action</h4>
                <p className="text-gray-700 leading-relaxed">
                  Civic responsibility is not a subject—it is a way of life. The India we leave for the next
                  generation depends on the small, consistent choices we make every day.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default CivicEducation;