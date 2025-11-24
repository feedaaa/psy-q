import { Link } from 'react-router-dom';

const CTABanner = () => {

  return (
    <section className="bg-gray-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Unlock Your Potential Today.
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Join our free trial and explore our webinars designed to elevate your exam preparation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <Link to="/signup" className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 border border-white">
                Sign Up
              </Link> */}
              <Link to="/services" className="bg-transparent text-white border border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
