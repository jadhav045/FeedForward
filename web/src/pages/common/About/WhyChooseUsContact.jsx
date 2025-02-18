import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import {
	FaBolt,
	FaMapMarkerAlt,
	FaChartBar,
	FaUsers,
	FaPhone,
	FaEnvelope,
	FaMapPin,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa";

export default function WhyChooseUsContact() {
	return (
		<>
			{/* Why Choose Us Section */}
			<section className="py-16 px-6 bg-gray-50 flex flex-col md:flex-row items-center">
				<div
					className="md:w-1/2 h-80 bg-cover bg-center relative"
					style={{
						backgroundImage: "url('https://loremflickr.com/800/600/ngo')",
					}}
				>
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="absolute bottom-4 left-4"
					>
						<Button className="bg-gray-800 text-white border border-gray-700 px-6 py-2 rounded-lg hover:bg-gray-700">
							Learn More
						</Button>
					</motion.div>
				</div>
				<div className="md:w-1/2 px-6 text-left">
					<h2 className="text-4xl font-bold mb-6 text-gray-800">
						Why Choose FeedForward?
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Transforming surplus into smiles with real-time technology &
						community-driven impact.
					</p>
					<div className="space-y-6">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="flex items-center space-x-4"
						>
							<FaBolt className="text-green-500 text-3xl" />
							<p className="text-lg text-gray-700">
								Real-time Food Matching – AI-driven tech ensures fast &
								efficient food distribution.
							</p>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="flex items-center space-x-4"
						>
							<FaMapMarkerAlt className="text-blue-500 text-3xl" />
							<p className="text-lg text-gray-700">
								Geo-location Based Connectivity – Matches donors & NGOs
								instantly.
							</p>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="flex items-center space-x-4"
						>
							<FaChartBar className="text-purple-500 text-3xl" />
							<p className="text-lg text-gray-700">
								Data-Driven Insights – Track donations & impact effortlessly.
							</p>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="flex items-center space-x-4"
						>
							<FaUsers className="text-orange-500 text-3xl" />
							<p className="text-lg text-gray-700">
								Community-Centered Approach – Strengthening bonds between food
								donors & NGOs.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Contact Us Section */}
			<section className="py-16 px-6 bg-white flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg">
					<h3 className="text-2xl font-bold mb-4 text-gray-800">
						Send Us a Message
					</h3>
					<form>
						<input
							type="text"
							placeholder="Your Name"
							className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
						/>
						<textarea
							placeholder="Your Message"
							className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
						></textarea>
						<motion.div whileHover={{ scale: 1.05 }}>
							<Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg">
								Send Message
							</Button>
						</motion.div>
					</form>
				</div>
				<div className="md:w-1/2 px-6 text-left">
					<h2 className="text-4xl font-bold mb-6 text-gray-800">
						Get in Touch With Us!
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						Have questions or want to collaborate? We’d love to hear from you.
					</p>
					<div className="space-y-6">
						<div className="flex items-center space-x-4">
							<FaPhone className="text-gray-700 text-2xl" />
							<p className="text-lg text-gray-700">+91 12345 67890</p>
						</div>
						<div className="flex items-center space-x-4">
							<FaEnvelope className="text-gray-700 text-2xl" />
							<p className="text-lg text-gray-700">support@feedforward.com</p>
						</div>
						<div className="flex items-center space-x-4">
							<FaMapPin className="text-gray-700 text-2xl" />
							<p className="text-lg text-gray-700">Pune, India</p>
						</div>
						<div className="flex space-x-4 mt-4">
							<FaFacebook className="text-gray-700 text-3xl cursor-pointer hover:scale-110" />
							<FaInstagram className="text-gray-700 text-3xl cursor-pointer hover:scale-110" />
							<FaLinkedin className="text-gray-700 text-3xl cursor-pointer hover:scale-110" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
