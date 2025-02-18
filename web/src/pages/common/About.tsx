import React, { useEffect, useState } from "react";

import { ArrowRight, ArrowDown } from "lucide-react";

const About = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const images = [
		{
			src: "https://picsum.photos/400/300?random=1",
			subheading: "Now one is safe",
		},
		{
			src: "https://picsum.photos/400/300?random=2",
			subheading: "A tiger is a tiger and a lion is a lion",
		},
		{
			src: "https://picsum.photos/400/300?random=3",
			subheading: "Judge a book by its cover",
		},
		{
			src: "https://picsum.photos/400/300?random=3",
			subheading: "Judge a book by its cover",
		},
	];

	const steps = [
		{
			src: "https://picsum.photos/400/300?random=1",
			subheading: "1️⃣ Donor lists surplus food",
		},
		{
			src: "https://picsum.photos/400/300?random=2",
			subheading: "2️⃣ Top 5 nearest NGOs are notified",
		},
		{
			src: "https://picsum.photos/400/300?random=3",
			subheading: "3️⃣ NGOs respond and confirm pickup",
		},
		{
			src: "https://picsum.photos/400/300?random=3",
			subheading: "4️⃣ Food is delivered & impact is tracked",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage + 1) % images.length);
		}, 3000); // Change image every 3 seconds

		return () => clearInterval(interval); // Cleanup on component unmount
	}, [images.length]);

	return (
		<div className="bg-gradient-to-b bg-[var(--secondary-bg)] text-white ">
			<section className="py-12 px-6 text-center pd-30 md-20">
				<h2 className="text-4xl font-extrabold text-indigo-500 mb-6">
					Introduction
				</h2>
				<div className="relative max-w-4xl mx-auto h-100 md-20">
					<img
						src={images[currentImage].src}
						className="w-full h-full object-cover rounded-lg shadow-lg"
					/>
					<div className="mt-4">
						<p className="text-lg text-gray-400">
							{images[currentImage].subheading}
						</p>
					</div>
					<div className="flex justify-center mt-4 space-x-4">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentImage(index)}
								className={`h-3 w-3 rounded-full transition-all ${
									currentImage === index
										? "bg-indigo-500 scale-125"
										: "bg-gray-600"
								}`}
							></button>
						))}
					</div>
				</div>
			</section>
			<section className="bg-[var(--primary-bg)] py-12 px-6 shadow-md rounded-lg mt-10">
				<h2 className="text-4xl font-extrabold text-center text-indigo-500 mb-6">
					How It Works
				</h2>

				<div className="relative grid grid-cols-4 gap-16 w-fit mx-auto">
					{steps.map((step, index) => (
						<div
							key={index}
							className="flex flex-col items-center"
						>
							{/* Image Container */}
							<div className="relative bg-gray-800 w-48 h-48 flex justify-center items-center rounded-lg shadow-lg transition-transform transform hover:scale-105">
								<img
									src={step.src}
									alt={`Step ${index + 1}`}
									className="w-full h-full object-cover rounded-lg"
								/>
							</div>

							{/* Text - Moved Outside */}
							<p className="mt-3 text-[var(--primary-text)] text-lg font-semibold text-center">
								{step.subheading}
							</p>
						</div>
					))}

					{/* Right Arrows for horizontal flow (More space added) */}
					<ArrowRight className="absolute top-1/3 left-[calc(25%+0.5rem)] text-[var(--primary-text)] w-10 h-10 transition-transform hover:scale-110" />
					<ArrowRight className="absolute top-1/3 left-[calc(50%+1rem)] text-[var(--primary-text)] w-10 h-10 transition-transform hover:scale-110" />
					<ArrowRight className="absolute top-1/3 left-[calc(75%+1rem)] text-[var(--primary-text)] w-10 h-10 transition-transform hover:scale-110" />
				</div>
			</section>

			{/* Vision & Mission Section */}
			<section className="py-12 px-6">
				<h2 className="text-4xl font-extrabold text-center text-indigo-500 mb-6">
					Our Vision & Mission
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="p-6 bg-gray-800 rounded-lg shadow-lg">
						<h3 className="text-2xl font-semibold text-gray-200">Vision</h3>
						<p className="text-gray-400">Our vision is to...</p>
					</div>
					<div className="p-6 bg-gray-700 rounded-lg shadow-lg">
						<h3 className="text-2xl font-semibold text-gray-200">Mission</h3>
						<p className="text-gray-400">Our mission is to...</p>
					</div>
				</div>
			</section>
			{/* Key Features Section */}
			<section className="bg-[var(--primary-bg)] py-12 px-6 shadow-md rounded-lg">
				<h2 className="text-4xl font-extrabold text-center text-indigo-500 mb-6">
					Key Features
				</h2>
				<p className="text-center text-gray-400">
					Here are our platform's key features...
				</p>
			</section>
			{/* Why Choose FeedForward Section */}
			<section className="py-12 px-6">
				<h2 className="text-4xl font-extrabold text-center text-indigo-500 mb-6">
					Why Choose FeedForward
				</h2>
				<p className="text-center text-gray-400">Reasons why we stand out...</p>
			</section>
			{/* Contact Us Section */}
			<section className="bg-[var(--primary-bg)] py-12 px-6 shadow-md rounded-lg">
				<h2 className="text-4xl font-extrabold text-center text-indigo-500 mb-6">
					Contact Us
				</h2>
				<p className="text-center text-gray-400">
					Reach out to us for more information...
				</p>
			</section>
		</div>
	);
};

export default About;
