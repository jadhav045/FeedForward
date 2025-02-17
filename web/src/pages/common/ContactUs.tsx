import React from "react";

const ContactUs: React.FC = () => {
	return (
		<div className="p-8 max-w-6xl mx-auto bg-[var(--primary-bg)] text-[var(--primary-text)]">
			{/* Header Section */}
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold">We Would Love to Hear from You</h2>
				<p className="mt-2 text-[var(--placeholder-text)]">
					Thank you for your interest in ForHelp and our mission to uplift
					underprivileged children. We value your thoughts, questions, and
					feedback.
				</p>
			</div>

			{/* Contact Information */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-8">
				<div className="p-4 border border-[var(--formInput-border)] rounded-md shadow hover:shadow-lg transition-all duration-300">
					Somewhere in the World
				</div>
				<div className="p-4 border border-[var(--formInput-border)] rounded-md shadow hover:shadow-lg transition-all duration-300">
					support@forhelp.com
				</div>
				<div className="p-4 border border-[var(--formInput-border)] rounded-md shadow hover:shadow-lg transition-all duration-300">
					+00 000 00 000
				</div>
				<div className="p-4 border border-[var(--formInput-border)] rounded-md shadow hover:shadow-lg transition-all duration-300">
					10:00 am - 6:00 pm
				</div>
			</div>

			{/* Contact Form */}
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
				<div>
					<img
						src="/path-to-image.jpg"
						alt="Helping Hands"
						className="w-full rounded-lg shadow hover:shadow-2xl transition-all duration-300"
					/>
				</div>
				<div className="p-4 border border-[var(--formInput-border)] rounded-md shadow hover:shadow-2xl transition-all duration-300">
					<form>
						<div className="grid grid-cols-2 gap-4">
							<input
								type="text"
								placeholder="First Name"
								className="p-2 border border-[var(--formInput-border)] rounded text-[var(--formInput-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primaryButton-bg)] transition-colors duration-300"
							/>
							<input
								type="text"
								placeholder="Last Name"
								className="p-2 border border-[var(--formInput-border)] rounded text-[var(--formInput-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primaryButton-bg)] transition-colors duration-300"
							/>
						</div>
						<div className="mt-4">
							<input
								type="email"
								placeholder="Email"
								className="p-2 w-full border border-[var(--formInput-border)] rounded text-[var(--formInput-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primaryButton-bg)] transition-colors duration-300"
							/>
						</div>
						<div className="mt-4">
							<input
								type="tel"
								placeholder="Phone"
								className="p-2 w-full border border-[var(--formInput-border)] rounded text-[var(--formInput-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primaryButton-bg)] transition-colors duration-300"
							/>
						</div>
						<div className="mt-4">
							<textarea
								placeholder="Message"
								className="p-2 w-full border border-[var(--formInput-border)] rounded h-24 text-[var(--formInput-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primaryButton-bg)] transition-colors duration-300"
							></textarea>
						</div>
						<div className="mt-4 flex items-center">
							<input
								type="checkbox"
								id="terms"
								className="mr-2"
							/>
							<label
								htmlFor="terms"
								className="text-sm"
							>
								I agree with Terms of Use and Privacy Policy
							</label>
						</div>
						<button
							type="submit"
							className="mt-4 px-4 py-2 bg-[var(--primaryButton-bg)] text-[var(--primaryButton-text)] rounded hover:bg-[var(--primaryButton-hover)] transition-colors duration-300"
						>
							Send your Message
						</button>
					</form>
				</div>
			</div>

			{/* Additional Info */}
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
				<div className="p-4 border border-[var(--formInput-border)] rounded-md shadow hover:shadow-lg transition-all duration-300 text-center">
					<h3 className="font-semibold mb-2">Volunteer Opportunities</h3>
					<p>
						Interested in becoming a volunteer? Visit our Volunteer page for
						more details.
					</p>
					<button className="mt-2 px-4 py-2 border border-[var(--primaryButton-bg)] rounded hover:bg-[var(--primaryButton-bg)] hover:text-[var(--primaryButton-text)] transition-colors duration-300">
						Visit Page
					</button>
				</div>
				<div className="p-4 border border-[var(--formInput-border)] rounded-md shadow hover:shadow-lg transition-all duration-300 text-center">
					<h3 className="font-semibold mb-2">Donation Information</h3>
					<p>
						To make a donation and learn about various giving options, visit our
						Donation page.
					</p>
					<button className="mt-2 px-4 py-2 border border-[var(--primaryButton-bg)] rounded hover:bg-[var(--primaryButton-bg)] hover:text-[var(--primaryButton-text)] transition-colors duration-300">
						Donation Page
					</button>
				</div>
			</div>

			{/* Call to Action */}
			<div className="mt-8 p-8 bg-[var(--secondary-bg)] text-[var(--secondary-text)] text-center rounded-lg shadow hover:shadow-2xl transition-all duration-300">
				<h3 className="text-xl font-bold">
					Donate Now and Help Level Up the Lives of Children in Need
				</h3>
				<p className="mt-2">
					Click here to donate now and help uplift the lives of children in
					need.
				</p>
				<button className="mt-4 px-6 py-2 bg-[var(--primaryButton-bg)] text-[var(--primaryButton-text)] rounded hover:bg-[var(--primaryButton-hover)] transition-colors duration-300">
					Donate Now
				</button>
			</div>
		</div>
	);
};

export default ContactUs;
