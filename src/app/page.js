import Hero from "@/components/sections/Hero";
import ServicesHighlight from "@/components/sections/ServicesHighlight";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesHighlight />
      <Testimonials />
      <CallToAction />
    </main>
  );
}