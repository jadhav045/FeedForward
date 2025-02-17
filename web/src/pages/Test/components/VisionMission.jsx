import React from "react";

const VisionMission = () => {
	return (
		<section className="bg-gray-50 py-16 px-6">
			<div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				{/* Text Section with two lists */}
				<div className="space-y-8">
					<h2 className="text-3xl font-bold text-center text-green-600">
						Our Vision & Mission
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Vision List */}
						<div className="space-y-4">
							<h3 className="text-2xl font-semibold text-gray-800">Vision</h3>
							<ul className="list-inside list-disc text-lg text-gray-700">
								<li className="text-xl font-medium text-green-600">
									"Ending Hunger, One Meal at a Time."
								</li>
								<li>
									Our vision is to create a world where no food goes to waste,
									helping communities in need with every meal.
								</li>
							</ul>
						</div>

						{/* Mission List */}
						<div className="space-y-4">
							<h3 className="text-2xl font-semibold text-gray-800">Mission</h3>
							<ul className="list-inside list-disc text-lg text-gray-700">
								<li className="text-xl font-medium text-green-600">
									"Transforming Surplus into Support."
								</li>
								<li>
									We achieve this by collaborating with local NGOs to
									redistribute surplus food, making sure it reaches those in
									need.
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Image Section */}
				<div className="flex justify-center md:justify-end">
					<img
						src="https://via.placeholder.com/600x400"
						alt="Food Donation"
						className="w-full md:w-9/12 h-auto rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default VisionMission;
