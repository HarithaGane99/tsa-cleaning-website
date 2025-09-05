import PageHeader from "@/components/layout/PageHeader";
import AllServices from "@/components/sections/AllServices";
import CallToAction from "@/components/sections/CallToAction";

export const metadata = {
  title: "Our Cleaning Services | TSA Cleaning",
  description: "Explore our comprehensive range of professional cleaning services in Sydney, including residential, commercial, end of lease, and more.",
};

const ServicesPage = () => {
  return (
    <main>
      <PageHeader 
        title="Our Cleaning Services"
        subtitle="Comprehensive solutions for every space."
      />
      <AllServices />
      <CallToAction />
    </main>
  );
};

export default ServicesPage;