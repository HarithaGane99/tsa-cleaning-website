import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Sparkling Clean Homes & Offices in <span className="text-blue-600">Sydney</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600">
              Experience the peace of mind that comes with a professionally cleaned space. TSA offers reliable, top-quality cleaning services tailored to your needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Get a Free Quote</Button>
              <Button href="/services" variant="secondary">Our Services</Button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              ✔️ 100% Satisfaction Guarantee &nbsp; ✔️ Vetted & Insured Cleaners
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 lg:w-3/5">
        <div 
          className="h-full w-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://st.hzcdn.com/simgs/86c1ab8b045d6bb8_14-4030/home-design.jpg')" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-white to-transparent"></div>
        </div>
      </div>
       <div 
          className="md:hidden h-64 w-full bg-cover bg-center mt-8" 
          style={{ backgroundImage: "url('https://st.hzcdn.com/simgs/86c1ab8b045d6bb8_14-4030/home-design.jpg')" }}
        />
    </section>
  );
};

export default Hero;

