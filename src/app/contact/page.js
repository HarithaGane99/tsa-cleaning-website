import PageHeader from "@/components/layout/PageHeader";
import ContactContent from "@/components/sections/ContactContent";

export const metadata = {
  title: "Contact TSA Cleaning Services | Get a Free Quote",
  description: "Contact us for a free quote on our professional cleaning services in Sydney. Call us, email us, or fill out our online form to get in touch today.",
};

const ContactPage = () => {
  return (
    <main>
       <PageHeader 
        title="Contact Us"
        subtitle="We'd love to hear from you. Let's get in touch!"
      />
      <ContactContent />
    </main>
  );
};

export default ContactPage;
