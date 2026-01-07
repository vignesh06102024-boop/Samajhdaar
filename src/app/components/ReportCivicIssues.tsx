import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, ExternalLink, AlertCircle, Phone, Camera, ChevronRight } from "lucide-react";

/* =======================
   TYPES
======================= */

type StateType =
  | "Telangana"
  | "Karnataka"
  | "Maharashtra"
  | "Andhra Pradesh";

type IssueType = "Traffic" | "Environment" | "Property";

type CivicDetails = {
  authority: string;
  methods: string[];
  evidence: string;
  link: string;
};

type CivicData = Record<StateType, Record<IssueType, CivicDetails>>;

/* =======================
   DATA
======================= */

const civicData: CivicData = {
  Telangana: {
    Traffic: {
      authority: "Telangana Traffic Police",
      methods: [
        "Traffic Police Mobile App",
        "Official WhatsApp Reporting",
        "e-Challan Portal",
      ],
      evidence: "Vehicle number, location, date/time, photo or video",
      link: "https://www.tspolice.gov.in",
    },
    Environment: {
      authority: "Telangana State Pollution Control Board",
      methods: [
        "TSPCB Complaint Portal",
        "Municipal Corporation Grievance System",
      ],
      evidence: "Location, description, photo",
      link: "https://tspcb.cgg.gov.in",
    },
    Property: {
      authority: "GHMC / Municipal Corporation",
      methods: ["GHMC Grievance Portal", "City Civic App"],
      evidence: "Damage photo and location",
      link: "https://www.ghmc.gov.in",
    },
  },

  Karnataka: {
    Traffic: {
      authority: "Karnataka Traffic Police",
      methods: ["Public Eye Mobile App", "Traffic Police WhatsApp Reporting"],
      evidence: "Vehicle number, location, photo or video",
      link: "https://ksp.karnataka.gov.in",
    },
    Environment: {
      authority: "Karnataka State Pollution Control Board",
      methods: ["KSPCB Complaint Portal"],
      evidence: "Issue description, location, photo",
      link: "https://kspcb.karnataka.gov.in",
    },
    Property: {
      authority: "BBMP / Local Municipal Body",
      methods: ["BBMP Grievance Portal"],
      evidence: "Damage photo and exact location",
      link: "https://bbmp.gov.in",
    },
  },

  Maharashtra: {
    Traffic: {
      authority: "Maharashtra Traffic Police",
      methods: ["Mumbai Traffic Police App", "WhatsApp Reporting"],
      evidence: "Vehicle number and photo",
      link: "https://mumtrafficpolice.gov.in",
    },
    Environment: {
      authority: "Maharashtra Pollution Control Board",
      methods: ["MPCB Complaint Portal"],
      evidence: "Photo and issue location",
      link: "https://mpcb.gov.in",
    },
    Property: {
      authority: "Municipal Corporation (BMC / PMC / Local Body)",
      methods: ["City Grievance Portal"],
      evidence: "Photo and description",
      link: "https://portal.mcgm.gov.in",
    },
  },

  "Andhra Pradesh": {
    Traffic: {
      authority: "Andhra Pradesh Traffic Police",
      methods: ["AP Traffic Police Mobile App", "e-Challan Portal"],
      evidence: "Vehicle number and photo",
      link: "https://citizen.appolice.gov.in",
    },
    Environment: {
      authority: "Andhra Pradesh Pollution Control Board",
      methods: ["APPCB Complaint System"],
      evidence: "Location and image",
      link: "https://pcb.ap.gov.in",
    },
    Property: {
      authority: "Municipal Corporation / Urban Local Body",
      methods: ["State Grievance Portal"],
      evidence: "Damage photo",
      link: "https://gramawards.ap.gov.in",
    },
  },
};

const issueConfig = {
  Traffic: {
    icon: "🚦",
    title: "Traffic Violation",
    color: "bg-red-50",
    accentColor: "bg-red-100",
    textColor: "text-red-600",
  },
  Environment: {
    icon: "🌱",
    title: "Environmental Issue",
    color: "bg-green-50",
    accentColor: "bg-green-100",
    textColor: "text-green-600",
  },
  Property: {
    icon: "🏛️",
    title: "Public Property Damage",
    color: "bg-blue-50",
    accentColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
};

/* =======================
   COMPONENT
======================= */

export default function ReportCivicIssues() {
  const [state, setState] = useState<StateType | "">("");
  const [issue, setIssue] = useState<IssueType | "">("");

  const details = state && issue ? civicData[state][issue] : null;

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
              Report Civic Issues
            </h2>
            <p className="text-lg text-gray-600">
              Connect with the right authorities through official government channels
            </p>
          </motion.div>

          {/* State Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white border-2 border-green-600 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Select Your State</h3>
              </div>
              
              <select
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg font-medium focus:border-green-600 focus:outline-none transition-all"
                value={state}
                onChange={(e) => {
                  setState(e.target.value as StateType);
                  setIssue("");
                }}
              >
                <option value="">Choose your state...</option>
                {Object.keys(civicData).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Issue Type Cards */}
          {state && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  What would you like to report?
                </h3>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {(["Traffic", "Environment", "Property"] as IssueType[]).map((type, index) => {
                  const config = issueConfig[type];
                  const isActive = issue === type;
                  
                  return (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`${config.color} border-2 border-green-600 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer ${
                        isActive ? 'ring-4 ring-green-500 ring-opacity-50' : ''
                      }`}
                      onClick={() => setIssue(type)}
                    >
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-4">{config.icon}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {config.title}
                        </h4>
                      </div>

                      <button
                        className={`w-full py-3 rounded-lg font-semibold transition-all ${
                          isActive
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                      >
                        {isActive ? 'Selected ✓✓' : 'Select ◆◆'}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}

          {/* Details Section */}
          {details && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl">
                {/* Header */}
                <div className={`${issueConfig[issue as IssueType].color} p-8 border-b-2 border-green-600`}>
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{issueConfig[issue as IssueType].icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">
                        {issueConfig[issue as IssueType].title}
                      </h3>
                      <p className="text-lg text-gray-700">{state}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Authority */}
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <AlertCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Responsible Authority</h4>
                      <p className="text-gray-700">{details.authority}</p>
                    </div>
                  </div>

                  {/* Reporting Methods */}
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Official Reporting Channels</h4>
                      <div className="space-y-2">
                        {details.methods.map((method, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-gray-50 px-4 py-3 rounded-lg">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                            <span className="text-gray-700">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Evidence Required */}
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Camera className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Evidence Required</h4>
                      <p className="text-gray-700">{details.evidence}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-6 border-t-2 border-gray-100">
                    <a
                      href={details.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      <span>Go to Official Portal</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <p className="text-center text-gray-500 text-sm mt-3">
                      {details.link}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block bg-gradient-to-r from-[#FF9933] to-[#138808] p-1 rounded-lg w-full">
              <div className="bg-white px-6 py-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Important Disclaimer</h4>
                    <p className="text-gray-700 text-sm">
                      This platform does not handle complaints directly. It serves as a guide to help 
                      citizens identify the correct government authority and official reporting methods 
                      for civic issues in their state.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}