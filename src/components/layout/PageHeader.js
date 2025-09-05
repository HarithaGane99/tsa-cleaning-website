const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
