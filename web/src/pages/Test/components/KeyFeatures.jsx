import React from 'react';

const KeyFeatures = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-12">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Real-time food listing */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-green-600 mb-4">
              <i className="fas fa-utensils"></i> {/* Replace with appropriate icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Food Listing</h3>
            <p className="text-gray-700">Quickly list surplus food for immediate distribution to nearby NGOs.</p>
          </div>

          {/* Feature 2: Geo-location based NGO matching */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-green-600 mb-4">
              <i className="fas fa-map-marker-alt"></i> {/* Replace with appropriate icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Geo-location Based NGO Matching</h3>
            <p className="text-gray-700">Automatically match donors with the closest NGOs using geo-location.</p>
          </div>

          {/* Feature 3: Instant notifications */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-green-600 mb-4">
              <i className="fas fa-bell"></i> {/* Replace with appropriate icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Notifications</h3>
            <p className="text-gray-700">Get notified instantly when your food is accepted or picked up.</p>
          </div>

          {/* Feature 4: Donor & NGO dashboards */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-green-600 mb-4">
              <i className="fas fa-tachometer-alt"></i> {/* Replace with appropriate icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Donor & NGO Dashboards</h3>
            <p className="text-gray-700">Track donations and pickups in real-time with dedicated dashboards.</p>
          </div>

          {/* Feature 5: Food waste analytics */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-green-600 mb-4">
              <i className="fas fa-chart-line"></i> {/* Replace with appropriate icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Food Waste Analytics</h3>
            <p className="text-gray-700">Analyze food waste patterns and optimize your donations for maximum impact.</p>
          </div>

          {/* Feature 6: Web & Mobile support */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-green-600 mb-4">
              <i className="fas fa-laptop"></i> {/* Replace with appropriate icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Web & Mobile Support</h3>
            <p className="text-gray-700">Access the platform seamlessly from both web and mobile devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
