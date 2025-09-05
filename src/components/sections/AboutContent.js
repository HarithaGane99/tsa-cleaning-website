import Image from 'next/image';
import { Award, Users, Smile, Leaf } from 'lucide-react';

const values = [
    {
      icon: <Award size={32} className="text-blue-600" />,
      title: 'Quality & Excellence',
      description: 'We are committed to the highest standards of cleaning. Our team is trained, vetted, and equipped with the best tools to deliver a spotless finish every time.',
    },
    {
      icon: <Smile size={32} className="text-blue-600" />,
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We listen to your needs and tailor our services to meet them, backed by our 100% satisfaction guarantee.',
    },
    {
      icon: <Users size={32} className="text-blue-600" />,
      title: 'Trusted Professionals',
      description: 'Our cleaning staff are not just employees; they are our ambassadors. Every team member is insured, background-checked, and reliable.',
    },
    {
      icon: <Leaf size={32} className="text-blue-600" />,
      title: 'Eco-Friendly Approach',
      description: 'We care about your health and the environment. We use safe, eco-friendly cleaning products that are effective without being harsh.',
    },
];


const AboutContent = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in the heart of Sydney, TSA Cleaning Services started with a simple mission: to provide a reliable, high-quality cleaning service that busy Sydneysiders could trust. We saw a need for a professional service that didn&apos;t just clean, but cared for the spaces where people live and work.
            </p>
            <p className="mt-4 text-gray-600">
              From our first residential clean to servicing large commercial offices, our commitment to excellence has never wavered. We believe a clean environment is a healthy and productive one, and we&apos;re passionate about creating those spaces for our clients across NSW.
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={612}
              height={408}
              className="rounded-2xl shadow-xl object-cover w-full h-full"
              alt="TSA Cleaning Services Team"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-20 lg:mt-28">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Why Choose Us?
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Our values are the foundation of our business and the reason our clients trust us.
                </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                    <div key={value.title} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6 mx-auto">
                            {value.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                        <p className="mt-2 text-gray-600">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutContent;

