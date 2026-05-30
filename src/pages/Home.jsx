import HowItWorks from "./About";
import AIDemo from "./AIDemo";
import CTA from "./CTA";
import Education from "./Education";
import Gamification from "./Gamification";
import Hero from "./Hero";
import Impact from "./Impact";
import ProblemSection from "./ProblemSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <AIDemo />
      <Gamification />
      <Impact />
      <Education />
      <CTA />
    </>
  );
}
