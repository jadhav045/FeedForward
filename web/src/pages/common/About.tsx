import React from "react";

const About: React.FC = () => {
	return (
		<div className="bg-[var(--primary-bg)] text-[var(--primary-text)]">
			{/* Hero Section – Secondary Colors (Orange Background with White Text) */}
			<section className="relative bg-[var(--secondary-bg)] py-16 px-4 md:px-6 text-center text-[var(--secondary-text)] mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<h1 className="text-3xl md:text-4xl font-bold">
					Lend a Helping Hand to Those in Need
				</h1>
				<p className="mt-4 text-base md:text-lg">
					Join us in making the world a better place.
				</p>
				<button
					className="mt-6 px-6 py-3 bg-[var(--primaryButton-bg)] 
          text-[var(--primaryButton-text)] rounded-md hover:bg-[var(--primaryButton-hover)]"
				>
					Donate Now
				</button>
			</section>

			{/* Stats & Features – Tertiary Section */}
			<section className="py-16 px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 text-center gap-8 bg-[var(--tertiary-bg)] mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-[var(--tertiary-text)]">
						Ensure a Volunteer
					</h2>
					<p className="mt-2 text-sm md:text-[var(--primary-text)]">
						Be a part of our journey.
					</p>
				</div>
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-[var(--tertiary-text)]">
						Quick Fundraiser
					</h2>
					<p className="mt-2 text-sm md:text-[var(--primary-text)]">
						Raise funds efficiently.
					</p>
				</div>
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-[var(--tertiary-text)]">
						Smart Donation
					</h2>
					<p className="mt-2 text-sm md:text-[var(--primary-text)]">
						Transparent and impactful.
					</p>
				</div>
			</section>

			{/* Donation Section – Secondary Background */}
			<section className="bg-[var(--secondary-bg)] py-16 px-4 md:px-6 text-center text-[var(--secondary-text)] mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<h2 className="text-3xl md:text-4xl font-bold">
					Helping Each Other Can Make the World Better
				</h2>
				<button
					className="mt-6 px-6 py-3 bg-[var(--primaryButton-bg)] 
          text-[var(--primaryButton-text)] rounded-md hover:bg-[var(--primaryButton-hover)]"
				>
					Learn More
				</button>
			</section>

			{/* Popular Causes – Tertiary Section */}
			<section className="py-16 px-4 md:px-6 bg-[var(--tertiary-bg)] mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--tertiary-text)]">
					Find The Popular Cause and Donate
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 shadow-md bg-[var(--primary-bg)]">
						<h3 className="text-lg md:text-xl font-bold text-[var(--primary-text)]">
							Educating Underprivileged Kids
						</h3>
						<p className="mt-2 text-sm text-[var(--placeholder-text)]">
							$10,000 Raised
						</p>
					</div>
					<div className="p-6 shadow-md bg-[var(--primary-bg)]">
						<h3 className="text-lg md:text-xl font-bold text-[var(--primary-text)]">
							Food Distribution for Poor
						</h3>
						<p className="mt-2 text-sm text-[var(--placeholder-text)]">
							$8,500 Raised
						</p>
					</div>
					<div className="p-6 shadow-md bg-[var(--primary-bg)]">
						<h3 className="text-lg md:text-xl font-bold text-[var(--primary-text)]">
							Medical Aid & Support
						</h3>
						<p className="mt-2 text-sm text-[var(--placeholder-text)]">
							$12,000 Raised
						</p>
					</div>
				</div>
			</section>

			{/* Team Section – Secondary Background */}
			<section className="py-16 px-4 md:px-6 bg-[var(--secondary-bg)] text-center text-[var(--secondary-text)] mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<h2 className="text-2xl md:text-3xl font-bold">
					Meet The Team Behind Their Success Story
				</h2>
				<div className="mt-8 flex flex-wrap justify-center gap-6">
					<div className="p-4 bg-[var(--primary-bg)] shadow-md rounded-md">
						<h3 className="text-lg md:text-xl font-bold text-[var(--primary-text)]">
							John Doe
						</h3>
						<p className="mt-1 text-sm text-[var(--primary-text)]">Director</p>
					</div>
					<div className="p-4 bg-[var(--primary-bg)] shadow-md rounded-md">
						<h3 className="text-lg md:text-xl font-bold text-[var(--primary-text)]">
							Jane Smith
						</h3>
						<p className="mt-1 text-sm text-[var(--primary-text)]">
							Co-Founder
						</p>
					</div>
				</div>
			</section>

			{/* FAQ Section – Tertiary Background */}
			<section className="py-16 px-4 md:px-6 bg-[var(--tertiary-bg)] text-[var(--tertiary-text)] mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<h2 className="text-2xl md:text-3xl font-bold text-center">
					Frequently Asked Questions
				</h2>
				<div className="mt-8 space-y-4">
					<div className="p-4 border rounded-md border-[var(--formInput-border)]">
						<h3 className="text-base md:text-lg font-bold text-[var(--primary-text)]">
							How can I donate?
						</h3>
						<p className="mt-1 text-sm text-[var(--primary-text)]">
							You can donate via our platform securely.
						</p>
					</div>
					<div className="p-4 border rounded-md border-[var(--formInput-border)]">
						<h3 className="text-base md:text-lg font-bold text-[var(--primary-text)]">
							Where does my money go?
						</h3>
						<p className="mt-1 text-sm text-[var(--primary-text)]">
							All donations are used for the listed causes.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonials – Secondary Background */}
			<section className="py-16 px-4 md:px-6 bg-[var(--secondary-bg)] text-center text-[var(--secondary-text)] mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<h2 className="text-2xl md:text-3xl font-bold">
					Trusted by Thousands of People
				</h2>
				<div className="mt-8 flex flex-wrap justify-center gap-6">
					<div className="p-6 shadow-md bg-[var(--primary-bg)] rounded-md">
						<p className="text-sm md:text-base text-[var(--primary-text)]">
							"This organization changed lives!"
						</p>
						<h4 className="font-bold mt-2 text-sm md:text-base text-[var(--primary-text)]">
							- Alex
						</h4>
					</div>
					<div className="p-6 shadow-md bg-[var(--primary-bg)] rounded-md">
						<p className="text-sm md:text-base text-[var(--primary-text)]">
							"Truly transparent and impactful!"
						</p>
						<h4 className="font-bold mt-2 text-sm md:text-base text-[var(--primary-text)]">
							- Sarah
						</h4>
					</div>
				</div>
			</section>

			{/* Gallery – Secondary Background */}
			<section className="py-16 px-4 md:px-6 text-center bg-[var(--secondary-bg)] text-[var(--secondary-text)] mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<h2 className="text-2xl md:text-3xl font-bold">Our Photo Gallery</h2>
				<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					<div className="h-32 bg-gray-300"></div>
					<div className="h-32 bg-gray-300"></div>
					<div className="h-32 bg-gray-300"></div>
					<div className="h-32 bg-gray-300"></div>
				</div>
			</section>

			{/* Newsletter – Tertiary Background */}
			<section className="py-16 px-4 md:px-6 bg-[var(--tertiary-bg)] text-[var(--tertiary-text)] text-center mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<h2 className="text-2xl md:text-3xl font-bold">
					Subscribe for Newsletter
				</h2>
				<div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
					<input
						type="email"
						placeholder="Enter your email"
						className="w-full sm:w-auto p-3 rounded-md text-[var(--formInput-text)] border border-[var(--formInput-border)]"
					/>
					<button className="px-6 py-3 bg-[var(--primaryButton-bg)] text-[var(--primaryButton-text)] rounded-md hover:bg-[var(--primaryButton-hover)]">
						Subscribe
					</button>
				</div>
			</section>

			{/* Contact Form – Secondary Background */}
			<section className="py-16 px-4 md:px-6 text-center bg-[var(--secondary-bg)] text-[var(--secondary-text)] mb-8 shadow-lg hover:shadow-2xl transition-all duration-300">
				<h2 className="text-2xl md:text-3xl font-bold">
					We Love to Hear from You
				</h2>
				<form className="mt-8 max-w-xl mx-auto">
					<input
						type="text"
						placeholder="Name"
						className="w-full p-3 border rounded-md mb-4 border-[var(--formInput-border)] text-[var(--formInput-text)]"
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full p-3 border rounded-md mb-4 border-[var(--formInput-border)] text-[var(--formInput-text)]"
					/>
					<textarea
						placeholder="Message"
						className="w-full p-3 border rounded-md mb-4 border-[var(--formInput-border)] text-[var(--formInput-text)]"
					></textarea>
					<button className="px-6 py-3 bg-[var(--primaryButton-bg)] text-[var(--primaryButton-text)] rounded-md hover:bg-[var(--primaryButton-hover)]">
						Submit
					</button>
				</form>
			</section>
		</div>
	);
};

export default About;
