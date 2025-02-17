import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-8">Contact Us</h2>
        
        {/* Flex layout for form and contact details */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">We'd Love to Hear From You</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label className="block text-left text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block text-left text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block text-left text-gray-700">Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block text-left text-gray-700">Message</label>
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    rows="5"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">Other Ways to Reach Us</h3>
            <p className="text-gray-700 mb-6">Feel free to contact us via email, phone, or visit our website. We’re happy to assist you!</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-green-600">📧</span>
                <p className="text-gray-600">support@feedforward.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-green-600">📞</span>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-green-600">🌐</span>
                <a href="https://www.feedforward.com" className="text-gray-600 hover:text-green-600">www.feedforward.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
