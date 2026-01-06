import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import CivicChallenges from "./components/CivicChallenges";
import { ShareActSection } from "./components/ShareActSection";
import { StoriesSection } from "./components/StoriesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import  CivicEducation  from "./components/Civiceducation";
import { PledgeDialog } from "./components/PledgeDialog";


export default function App() {
  const [pledgeOpen, setPledgeOpen] = useState(false);

  const handleTakePledge = () => {
    setPledgeOpen(true);
  };

  const handleTakeQuiz = () => {
    const challengesSection = document.getElementById("challenges");
    if (challengesSection) {
      challengesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section id="home">
        <HeroSection
          onTakePledge={handleTakePledge}
          onTakeQuiz={handleTakeQuiz}
        />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="civic-education">
        <CivicEducation />
      </section>

<section id="pledge">
  <PledgeDialog 
    open={pledgeOpen} 
    onOpenChange={setPledgeOpen} 
  />
</section>


      <section id="challenges">
        <CivicChallenges />
      </section>

      <section id="share">
        <ShareActSection />
      </section>

      <section id="stories">
        <StoriesSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
