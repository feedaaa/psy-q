const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100 card-hover h-full">
      <div className="flex flex-col items-center text-center space-y-4 h-full">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
