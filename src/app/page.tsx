import HeroSection from "./components/hero";
import KeyFeatures from "./components/key";
import WhyChoose from "./components/why";
import DownloadSection from "./components/download";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <KeyFeatures />
      <WhyChoose />
      <DownloadSection />
      <Newsletter />
      <Footer />
    </div>
  );
}