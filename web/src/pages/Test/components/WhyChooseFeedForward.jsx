import React from "react";

const WhyChooseFeedForward = () => {
	return (
		<section className="bg-gray-50 py-16 px-6">
			<div className="container mx-auto max-w-7xl text-center">
				<h2 className="text-3xl font-bold text-green-600 mb-12">
					Why Choose FeedForward?
				</h2>

				{/* Hoverable Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{/* Feature 1 Card */}
					<div className="relative group bg-white p-8 rounded-lg shadow-lg">
						<div className="text-4xl text-green-600">🤖</div>
						<h3 className="font-semibold text-xl mb-4">
							AI-Driven Real-Time Matching
						</h3>
						<p className="text-gray-600 mb-4">
							Instant matching based on proximity and needs.
						</p>
						<div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<p className="text-white">
								FeedForward: ✔️ Yes | Other Solutions: ❌ No
							</p>
						</div>
					</div>

					{/* Feature 2 Card */}
					<div className="relative group bg-white p-8 rounded-lg shadow-lg">
						<div className="text-4xl text-green-600">💬</div>
						<h3 className="font-semibold text-xl mb-4">
							Instant Communication
						</h3>
						<p className="text-gray-600 mb-4">
							Real-time communication for seamless coordination.
						</p>
						<div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<p className="text-white">
								FeedForward: ✔️ Yes | Other Solutions: ❌ Limited
							</p>
						</div>
					</div>

					{/* Feature 3 Card */}
					<div className="relative group bg-white p-8 rounded-lg shadow-lg">
						<div className="text-4xl text-green-600">📊</div>
						<h3 className="font-semibold text-xl mb-4">Transparent Tracking</h3>
						<p className="text-gray-600 mb-4">
							Track food donations from pickup to delivery.
						</p>
						<div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
							<p className="text-white">
								FeedForward: ✔️ Yes | Other Solutions: ❌ No
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseFeedForward;
