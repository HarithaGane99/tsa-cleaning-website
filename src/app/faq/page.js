import PageHeader from "@/components/layout/PageHeader";
import FaqContent from "@/components/sections/FaqContent";
import CallToAction from "@/components/sections/CallToAction";

export const metadata = {
  title: "Frequently Asked Questions | TSA Cleaning Services",
  description: "Find answers to common questions about our cleaning services in Sydney, including booking, pricing, and what's included.",
};

const FaqPage = () => {
  return (
    <main>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Have questions? We have answers. Find the information you need below."
      />
      <FaqContent />
      <CallToAction />
    </main>
  );
};

export default FaqPage;
