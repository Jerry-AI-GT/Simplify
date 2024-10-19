import Topbar from "@/components/Topbar/Topbar";
import FeatureSection from "@/components/landingpage/FeatureSection";
import Footer from "@/components/landingpage/Footer";
import HeroSection from "@/components/landingpage/HeroSection";
import Testimonials from "@/components/landingpage/Testimonials";
import Workflow from "@/components/landingpage/Workflow";

const Landingpage = () => {
  return (
    <>
      <Topbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />

        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Landingpage;
