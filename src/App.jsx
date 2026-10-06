import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import RecognitionSection from "./components/RecognitionSection";
import TrustSection from "./components/TrustSection";
import StoriesSection from "./components/StoriesSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import VerifiedProjects from "./insights/VerifiedProjects";
import PlantingMaps from "./insights/PlantingMaps";
import CollaborationTools from "./insights/CollaborationTools";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#eef0ed] text-black">
      <div className="pointer-events-none fixed -right-40 top-20 z-0 h-80 w-80 rounded-full bg-[#dce9df] blur-3xl" />

      <main className="relative z-10 mx-auto w-full max-w-360 px-3 py-4 sm:px-5 sm:py-6 md:px-6 lg:px-8">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <RecognitionSection />
        <TrustSection />
        <StoriesSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/insights/verified-projects"
          element={<VerifiedProjects />}
        />

        <Route path="/insights/planting-maps" element={<PlantingMaps />} />

        <Route
          path="/insights/collaboration-tools"
          element={<CollaborationTools />}
        />
      </Routes>
    </>
  );
}
