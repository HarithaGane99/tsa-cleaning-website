const testimonials = [
    {
      quote: "TSA Cleaning transformed our office. The attention to detail was incredible, and the team was so professional. It&apos;s never looked better!",
      author: "Sarah J.",
      company: "Sydney Startup Hub"
    },
    {
      quote: "I was moving out and stressed about getting my bond back. TSA&apos;s end-of-lease cleaning was a lifesaver. The place was spotless, and I got my full bond back without any issues.",
      author: "Michael B.",
      company: "Residential Client"
    },
    {
      quote: "Reliable, efficient, and friendly. We use their weekly residential service and it&apos;s made a huge difference to our busy family life. Highly recommend!",
      author: "Emily R.",
      company: "Homeowner, Surry Hills"
    }
  ];
  
  const Testimonials = () => {
    return (
      <section className="bg-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re proud to deliver a service that our customers love.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;


