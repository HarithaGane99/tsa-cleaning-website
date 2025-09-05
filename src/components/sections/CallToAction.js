import Button from "../ui/Button";

const CallToAction = () => {
    return (
        <section className="bg-blue-600">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Ready for a Sparkling Clean Space?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                    Let TSA Cleaning Services handle the hard work. Contact us today for a no-obligation, completely free quote.
                </p>
                <div className="mt-8">
                    <Button href="/contact" variant="secondary">
                        Get Your Free Quote Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;

