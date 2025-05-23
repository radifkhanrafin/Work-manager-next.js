import Image from "next/image";
import Banner from "./component/homeBanner";
import Features from "./component/featureSection";
import CallToAction from "./component/CallToAction";
import TestimonialSlider from "./component/testimonials";
import ContactForm from "./component/contactForm";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Features/>
      <CallToAction/>
      <TestimonialSlider/>
      <ContactForm/>
    </div>
  );
}
