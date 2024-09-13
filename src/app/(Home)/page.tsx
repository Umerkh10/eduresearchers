import ExpertSection from "./ExpertSection";
import FaqSection from "./FaqSection";
import HomeBanner from "./HomeBanner";
import HowItWorks from "./HowItWorks";
import Reviews from "./Reviews";
import ServiceSection from "./ServiceSection";
import SmallDivider from "./SmallDivider";
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
      <Reviews/>
      <SmallDivider/>
      <FaqSection/>
    </div>
  );
}
