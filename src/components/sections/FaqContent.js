'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
      question: "What areas in Sydney do you service?",
      answer: "We service the entire Sydney metropolitan area, including the CBD, Eastern Suburbs, North Shore, Inner West, and Western Sydney. If you're unsure if we cover your location, please don't hesitate to contact us."
    },
    {
      question: "Do I need to provide my own cleaning supplies?",
      answer: "No, you don't. Our professional cleaning teams arrive fully equipped with all the necessary high-quality, eco-friendly cleaning supplies and equipment to get the job done right."
    },
    {
      question: "Are your cleaning products safe for pets and children?",
      answer: "Absolutely. The health and safety of your family, including your furry friends, is our top priority. We use non-toxic, eco-friendly cleaning products that are effective yet gentle."
    },
    {
      question: "How is the pricing determined for a cleaning service?",
      answer: "Our pricing is based on the size of your property (number of bedrooms and bathrooms) and the type of cleaning service you require. We offer transparent, flat-rate pricing for most services. For custom or commercial jobs, we provide a free, no-obligation quote."
    },
    {
      question: "Can I book a recurring cleaning service?",
      answer: "Yes! We offer weekly, bi-weekly, and monthly cleaning schedules to fit your needs. Recurring services are a great way to maintain a consistently clean home and often come with a discount."
    },
    {
        question: "What is your satisfaction guarantee?",
        answer: "We stand by our work with a 100% satisfaction guarantee. If you are not completely satisfied with our service, please contact us within 24 hours, and we will re-clean the specific areas free of charge."
    }
];

const FaqItem = ({ item, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={onToggle}
                className="flex justify-between items-center w-full text-lg font-semibold text-left text-gray-800 focus:outline-none"
            >
                <span>{item.question}</span>
                <ChevronDown 
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
            </button>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-600">
                    {item.answer}
                </p>
            </div>
        </div>
    )
}

const FaqContent = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FaqItem 
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqContent;
