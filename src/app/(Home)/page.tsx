import ExpertSection from "./ExpertSection";
import HomeBanner from "./HomeBanner";
import HowItWorks from "./HowItWorks";
import ServiceSection from "./ServiceSection";
import SupportSection from "./SupportSection";
import TopExperts from "./TopExperts";
import UniSection from "./UniSection";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <UniSection/>
      <ServiceSection/>
      <ExpertSection/>
      <HowItWorks/>
      <TopExperts/>
      <SupportSection/>
    </div>
  );
}
