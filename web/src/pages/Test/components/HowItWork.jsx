import React from "react";
//  Import your CSS file

const HowItWork = () => {
	const steps = [
		{
			title: "Donor Lists Surplus Food",
			description:
				"Food providers register and post details about surplus food available for donation.",
			icon: "icon-food-list", // Replace with your icon class/component
			image: "/images/step1.jpg", // Path to your image for step 1
		},
		{
			title: "Top 5 Nearest NGOs Notified",
			description:
				"FeedForward alerts the five closest NGOs about the available food.",
			icon: "icon-notification", // Replace with your icon class/component
			image: "/images/step2.jpg", // Path to your image for step 2
		},
		{
			title: "NGOs Confirm Pickup",
			description:
				"NGOs confirm they will pick up the food and coordinate logistics.",
			icon: "icon-confirmation", // Replace with your icon class/component
			image: "/images/step3.jpg", // Path to your image for step 3
		},
		{
			title: "Food Delivered & Tracked",
			description:
				"Food is delivered to those in need, and the process is tracked for transparency.",
			icon: "icon-delivery", // Replace with your icon class/component
			image: "/images/step4.jpg", // Path to your image for step 4
		},
	];

	return (
		<section className="py-12 bg-gray-100">
			{" "}
			{/* Added Tailwind classes */}
			<div className="container mx-auto text-center">
				{" "}
				{/* Added container and centering */}
				<h2 className="text-3xl font-bold mb-8">How It Works</h2>{" "}
				{/* Tailwind heading styles */}
				<div className="flex flex-wrap justify-center gap-6">
					{" "}
					{/* Flexbox for layout, wrapping, and spacing */}
					{steps.map((step, index) => (
						<div
							key={index}
							className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4"
						>
							{" "}
							{/* Responsive widths */}
							<div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col items-center">
								{" "}
								{/* Card styling and flexbox for vertical alignment */}
								<div className="step-image mb-4 w-full overflow-hidden rounded-t-lg">
									{" "}
									{/* Image container with rounded top corners */}
									<img
										src={step.image}
										alt={step.title}
										className="w-full h-auto block"
									/>{" "}
									{/* Image styling */}
								</div>
								<div className="flex flex-col items-center">
									{" "}
									{/* Content container */}
									<div className="step-icon text-4xl mb-2 text-blue-500">
										{" "}
										{/* Icon styling */}
										<i className={step.icon}></i>
									</div>
									<h3 className="text-xl font-semibold mb-2">{step.title}</h3>{" "}
									{/* Title styling */}
									<p className="text-gray-700">{step.description}</p>{" "}
									{/* Description styling */}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWork;
