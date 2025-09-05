import Image from 'next/image';
import { Home, Building, ShieldCheck, Waves, Sun, Star } from 'lucide-react';
import Button from '../ui/Button';

const servicesList = [
  {
    icon: <Home size={32} className="text-blue-600" />,
    title: 'Residential Cleaning',
    description: 'Our standard residential cleaning will keep your home consistently clean and comfortable. We handle the dusting, vacuuming, and tidying up so you can relax.',
    features: ['Dusting all surfaces', 'Vacuuming carpets and rugs', 'Mopping floors', 'Cleaning bathrooms & kitchens'],
    image: 'https://images.surferseo.art/0c84845b-bd8c-43fc-acf8-e6d3e0c579f8.jpeg'
  },
  {
    icon: <Building size={32} className="text-blue-600" />,
    title: 'Commercial Cleaning',
    description: 'A clean, sanitized office is essential for a healthy and productive work environment. We offer flexible cleaning schedules to suit your business needs.',
    features: ['Office and cubicle cleaning', 'Restroom sanitization', 'Trash removal', 'Common area cleaning'],
    image: 'https://officebanao.com/wp-content/uploads/2022/10/Modern-office-design-3.jpg'
  },
  {
    icon: <ShieldCheck size={32} className="text-blue-600" />,
    title: 'End of Lease Cleaning',
    description: 'Our comprehensive end-of-lease cleaning is designed to help you get your bond back. We follow a detailed checklist approved by real estate agents.',
    features: ['Deep cleaning of all rooms', 'Oven and stovetop cleaning', 'Wall and window cleaning', 'Carpet steam cleaning available'],
    image: 'https://media.istockphoto.com/id/668666814/photo/interior-of-a-modern-apartment-empty-room.jpg?s=612x612&w=0&k=20&c=E-hk-sbXVGs3LrGY4KDWjaR6vhfvt_hGxSoZOh02ewY='
  },
  {
    icon: <Waves size={32} className="text-blue-600" />,
    title: 'Carpet Steam Cleaning',
    description: 'Revitalize your carpets with our professional steam cleaning service. We remove deep-seated dirt, stains, and allergens, leaving carpets fresh and clean.',
    features: ['Pre-treatment for stains', 'Hot water extraction method', 'Removes allergens and bacteria', 'Quick drying times'],
    image: 'https://www.sgcarpet.com/wp-content/uploads/2025/04/sg-carpet-cleaning-3.jpg'
  },
  {
    icon: <Sun size={32} className="text-blue-600" />,
    title: 'Window Cleaning',
    description: 'Let the sunshine in with our streak-free window cleaning service. We clean interior and exterior windows, frames, and sills for a crystal-clear view.',
    features: ['Interior & exterior cleaning', 'Streak-free finish', 'Frames and sills wiped down', 'Safe for all window types'],
    image: 'https://www.talentedladiesclub.com/site/wp-content/uploads/An-ultimate-guide-to-achieving-sparkling-windows-in-commercial-building-1.jpg'
  },
  {
    icon: <Star size={32} className="text-blue-600" />,
    title: 'Deep Cleaning',
    description: 'Our deep cleaning service is perfect for a seasonal refresh or preparing for a special event. We go beyond the surface to eliminate grime and buildup.',
    features: ['Detailed scrubbing of bathrooms', 'Kitchen appliance deep clean', 'Baseboard and door frame washing', 'Light fixture cleaning'],
    image: 'https://www.thecleaninggurus.co.uk/wp-content/uploads/2023/11/cleaning-services.jpg'
  },
];

const AllServices = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {servicesList.map((service, index) => (
            <div key={service.title} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/contact">Book This Service</Button>
                </div>
              </div>
              <div className={`mt-10 lg:mt-0 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <Image 
                  src={service.image} 
                  alt={`${service.title} service`} 
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl object-cover w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;

