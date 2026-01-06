import { motion } from "motion/react";
import { Trash2, Car, Users2, Building2, Leaf, HeartHandshake, Volume2, TrafficCone } from "lucide-react";
import { useState } from "react";

export function CivicChallenges() {
  const [activeChallenges, setActiveChallenges] = useState<string[]>([]);

  const challenges = [
    {
      id: "clean-streets",
      icon: "🧹",
      title: "Clean Streets Challenge",
      description: "Use dustbins instead of littering for 30 days",
      duration: "30 days",
      color: "bg-green-50",
      accentColor: "bg-green-100",
      durationColor: "text-green-600"
    },
    {
      id: "queue-master",
      icon: "👥",
      title: "Queue Master Challenge",
      description: "Stand in proper queues and respect lines",
      duration: "21 days",
      color: "bg-blue-50",
      accentColor: "bg-blue-100",
      durationColor: "text-blue-600"
    },
    {
      id: "noise-warrior",
      icon: "🔇",
      title: "Noise Warrior Challenge",
      description: "Avoid unnecessary honking and loud music",
      duration: "15 days",
      color: "bg-purple-50",
      accentColor: "bg-purple-100",
      durationColor: "text-purple-600"
    },
    {
      id: "traffic-hero",
      icon: "🚦",
      title: "Traffic Hero Challenge",
      description: "Follow all traffic rules and signals",
      duration: "30 days",
      color: "bg-red-50",
      accentColor: "bg-red-100",
      durationColor: "text-red-600"
    },
    {
      id: "respect-spaces",
      icon: "🏛️",
      title: "Respect Public Spaces",
      description: "Keep monuments and public areas clean",
      duration: "20 days",
      color: "bg-orange-50",
      accentColor: "bg-orange-100",
      durationColor: "text-orange-600"
    },
    {
      id: "courteous-commuter",
      icon: "🚌",
      title: "Courteous Commuter",
      description: "Offer seats to elderly and differently-abled",
      duration: "25 days",
      color: "bg-teal-50",
      accentColor: "bg-teal-100",
      durationColor: "text-teal-600"
    }
  ];

  const toggleChallenge = (id: string) => {
    if (activeChallenges.includes(id)) {
      setActiveChallenges(activeChallenges.filter(c => c !== id));
    } else {
      setActiveChallenges([...activeChallenges, id]);
      // Scroll to ShareActSection
      const shareSection = document.getElementById('share');
      if (shareSection) {
        shareSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="challenges" className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
              Take the Samajhdaar Challenge
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Take on civic challenges and track your journey towards a better India!
            </p>
          </motion.div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge, index) => {
              const isActive = activeChallenges.includes(challenge.id);
              
              return (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${challenge.color} border-2 border-green-600 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer ${
                    isActive ? 'ring-4 ring-green-500 ring-opacity-50' : ''
                  }`}
                >
                  {/* Icon and Duration Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-5xl">
                      {challenge.icon}
                    </div>
                    <span className={`${challenge.accentColor} ${challenge.durationColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                      {challenge.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 min-h-[3rem]">
                    {challenge.description}
                  </p>

                  {/* Action Button */}
                  <button
                    onClick={() => toggleChallenge(challenge.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      isActive
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {isActive ? 'Challenge Active ✓✓' : 'Challenge Active ◆◆'}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-[#FF9933] to-[#138808] p-1 rounded-lg">
              <div className="bg-white px-8 py-4 rounded-lg">
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">Active Challenges: {activeChallenges.length}</span> — Small actions, big impact!
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default CivicChallenges;