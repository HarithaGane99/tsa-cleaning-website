import PageHeader from "@/components/layout/PageHeader";
import AboutContent from "@/components/sections/AboutContent";
import CallToAction from "@/components/sections/CallToAction";

export const metadata = {
  title: "About TSA Cleaning | Our Story & Mission",
  description: "Learn about TSA Cleaning Services, our mission to provide top-quality cleaning in Sydney, and our commitment to customer satisfaction.",
};

const AboutPage = () => {
  return (
    <main>
      <PageHeader 
        title="About TSA Cleaning"
        subtitle="Your trusted partner for a cleaner, healthier space."
      />
      <AboutContent />
      <CallToAction />
    </main>
  );
};

export default AboutPage;
