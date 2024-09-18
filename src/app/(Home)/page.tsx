"use client"
import { useInView } from "react-intersection-observer";
import ExpertSection from "./ExpertSection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import {HomeBanner} from "./HomeBanner";
import HowItWorks from "./HowItWorks";
import Reviews from "./Reviews";
import ServiceSection from "./ServiceSection";
import SmallDivider from "./SmallDivider";
import SupportSection from "./SupportSection";
import TopExperts from "./TopExperts";
import UniSection from "./UniSection";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
      disable:"mobile"
    });
  }, [inView]);
  return (
    <div ref={ref}>
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
      <Footer/>
    </div>
  );
}
