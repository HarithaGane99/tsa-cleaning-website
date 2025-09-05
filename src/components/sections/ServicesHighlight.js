import { Home, Building, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Home size={40} className="text-blue-600" />,
    title: 'Residential Cleaning',
    description: 'A clean home is a happy home. We offer regular, deep, and one-off cleaning services.',
  },
  {
    icon: <Building size={40} className="text-blue-600" />,
    title: 'Commercial Cleaning',
    description: 'Impress your clients and boost productivity with a spotless office environment.',
  },
  {
    icon: <ShieldCheck size={40} className="text-blue-600" />,
    title: 'End of Lease Cleaning',
    description: 'Get your bond back with our thorough, guaranteed end-of-lease cleaning services.',
  },
];

const ServicesHighlight = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of cleaning solutions to meet the needs of our Sydney clients.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
