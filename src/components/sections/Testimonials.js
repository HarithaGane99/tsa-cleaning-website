const testimonials = [
  {
    quote: "TSA Cleaning did an incredible job! Our office has never looked better. The team was professional, punctual, and very thorough. Highly recommend!",
    name: 'Sarah J.',
    role: 'Office Manager, Sydney CBD',
  },
  {
    quote: "The end of lease clean was perfect. We got our full bond back without any issues. The attention to detail was amazing. Thank you, TSA!",
    name: 'Michael B.',
    role: 'Renter, Parramatta',
  },
  {
    quote: "I use their residential cleaning service every fortnight and it's been a lifesaver. Coming home to a sparkling clean house is the best feeling.",
    name: 'Emily R.',
    role: 'Homeowner, Bondi',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're proud to have happy clients across Sydney.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <blockquote className="text-gray-700 italic">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
