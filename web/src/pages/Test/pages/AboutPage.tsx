import React from "react";

const About: React.FC = () => {
	return (
		<div className="max-w-4xl mx-auto p-6">
			<h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold">Who We Are</h2>
				<p className="mt-2 text-gray-700">
					Our platform connects businesses with surplus food to NGOs, ensuring
					real-time redistribution and waste reduction.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold">Our Mission</h2>
				<p className="mt-2 text-gray-700">
					We aim to minimize food waste and fight hunger by creating an
					efficient, tech-driven food redistribution system.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold">How It Works</h2>
				<ul className="mt-2 text-gray-700 list-disc pl-5">
					<li>Businesses list surplus food in real time.</li>
					<li>NGOs receive alerts about available food.</li>
					<li>Food is collected and distributed efficiently.</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold">Why It Matters</h2>
				<p className="mt-2 text-gray-700">
					Every year, tons of food go to waste while millions face hunger. Our
					platform bridges this gap, reducing waste and feeding those in need.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold">Get Involved</h2>
				<p className="mt-2 text-gray-700">
					Businesses can list their surplus food, NGOs can register for
					notifications, and individuals can volunteer or donate to support our
					cause.
				</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold">Contact Us</h2>
				<p className="mt-2 text-gray-700">Email: contact@foodconnect.com</p>
				<p className="mt-1 text-gray-700">Phone: +123 456 7890</p>
			</section>
		</div>
	);
};

export default About;
