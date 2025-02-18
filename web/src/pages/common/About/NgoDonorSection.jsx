import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { FaUsers, FaHandsHelping } from "react-icons/fa";
import { Button } from "@headlessui/react";
export default function DonorNgoSection() {
	return (
		<>
			{/* Donor Section */}
			<section className="py-16 px-6 bg-gray-100 flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 text-left px-6">
					<h2 className="text-4xl font-bold mb-6 text-green-700">
						Make a Difference as a Donor
					</h2>
					<p className="text-lg text-gray-900 mb-8">
						Donors play a crucial role in reducing food waste by listing surplus
						food on our platform. Your contributions help NGOs distribute food
						to those in need, making a real impact in the community.
					</p>
					<motion.div whileHover={{ scale: 1.05 }}>
						<Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">
							Become a Donor
						</Button>
					</motion.div>
				</div>
				<div className="md:w-1/2">
					<div
						className="w-full h-80 bg-cover bg-center relative"
						style={{
							backgroundImage: "url('https://loremflickr.com/800/600/donor')",
						}}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="absolute bottom-4 left-4"
						>
							<Button className="bg-white text-green-700 border border-green-500 px-6 py-2 rounded-lg">
								Donate Now
							</Button>
						</motion.div>
					</div>
				</div>
			</section>

			{/* NGO Section */}
			<section className="py-16 px-6 bg-gray-200 flex flex-col md:flex-row-reverse items-center">
				<div className="md:w-1/2 text-right px-6">
					<h2 className="text-4xl font-bold mb-6 text-blue-700">
						Empower Your NGO with Resources
					</h2>
					<p className="text-lg text-gray-900 mb-8">
						NGOs can access surplus food donations from local businesses and
						individuals. Our platform ensures real-time matching with food
						sources, helping you serve more people efficiently.
					</p>
					<motion.div whileHover={{ scale: 1.05 }}>
						<Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
							Join as NGO
						</Button>
					</motion.div>
				</div>
				<div className="md:w-1/2">
					<div
						className="w-full h-80 bg-cover bg-center relative"
						style={{
							backgroundImage: "url('https://loremflickr.com/800/600/ngo')",
						}}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="absolute bottom-4 right-4"
						>
							<Button className="bg-white text-blue-700 border border-blue-500 px-6 py-2 rounded-lg">
								Find Food
							</Button>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
}
// import React from "react";
// import { motion } from "framer-motion";
// import { FaUtensils, FaHandshake, FaHeart } from "react-icons/fa";

// // Sample partner logos using random images from Picsum Photos
// const partnerLogos = [
// 	{
// 		id: 1,
// 		src: "https://picsum.photos/seed/logo1/150/150",
// 		alt: "Partner 1",
// 		caption: "Restaurant A",
// 	},
// 	{
// 		id: 2,
// 		src: "https://picsum.photos/seed/logo2/150/150",
// 		alt: "Partner 2",
// 		caption: "Hotel B",
// 	},
// 	{
// 		id: 3,
// 		src: "https://picsum.photos/seed/logo3/150/150",
// 		alt: "Partner 3",
// 		caption: "Caterer C",
// 	},
// 	{
// 		id: 4,
// 		src: "https://picsum.photos/seed/logo4/150/150",
// 		alt: "Partner 4",
// 		caption: "NGO D",
// 	},
// 	// Add more logos as needed
// ];

// // Sample success stories data with random images
// const successStories = [
// 	{
// 		id: 1,
// 		image: "https://picsum.photos/seed/story1/600/400",
// 		title: "Delicious Donations",
// 		summary:
// 			"XYZ Restaurant has donated over 10,000 meals in the past year, feeding thousands in need.",
// 		partner: "Helping Hands Foundation",
// 		partnerLogo: "https://picsum.photos/seed/logo5/50/50",
// 	},
// 	{
// 		id: 2,
// 		image: "https://picsum.photos/seed/story2/600/400",
// 		title: "A Community Feast",
// 		summary:
// 			"ABC Caterers collaborated to provide meals to underprivileged communities during the holidays.",
// 		partner: "Community Care NGO",
// 		partnerLogo: "https://picsum.photos/seed/logo6/50/50",
// 	},
// 	{
// 		id: 3,
// 		image: "https://picsum.photos/seed/story3/600/400",
// 		title: "Sustainable Impact",
// 		summary:
// 			"123 Hotels turned surplus food into nourishing meals, making a real difference in local lives.",
// 		partner: "Food For All",
// 		partnerLogo: "https://picsum.photos/seed/logo7/50/50",
// 	},
// ];

// const DonorNgoSection = () => {
// 	return (
// 		<section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 relative overflow-hidden">
// 			{/* 1. Heading & Intro Text */}
// 			<motion.div
// 				className="max-w-4xl mx-auto px-4 text-left mb-12"
// 				initial={{ opacity: 0, x: -50 }}
// 				animate={{ opacity: 1, x: 0 }}
// 				transition={{ duration: 1 }}
// 			>
// 				<motion.h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4 animate-pulse">
// 					Our Impact – Together, We Make a Difference!
// 				</motion.h2>
// 				<p className="text-lg text-gray-700">
// 					Join our network of generous donors and dedicated NGOs working to
// 					reduce food waste and fight hunger.
// 				</p>
// 			</motion.div>

// 			{/* 2. Partner Logos Slider */}
// 			<div className="mb-16 overflow-hidden">
// 				<motion.div
// 					className="flex space-x-8 items-center"
// 					animate={{ x: ["0%", "-50%"] }}
// 					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// 				>
// 					{[...partnerLogos, ...partnerLogos].map((logo, index) => (
// 						<div
// 							key={index}
// 							className="flex flex-col items-center min-w-[150px]"
// 						>
// 							<motion.img
// 								src={logo.src}
// 								alt={logo.alt}
// 								className="w-24 h-24 object-contain filter grayscale hover:filter-none transition duration-300 hover:scale-105"
// 							/>
// 							<span className="mt-2 text-sm text-gray-600">{logo.caption}</span>
// 						</div>
// 					))}
// 				</motion.div>
// 			</div>

// 			{/* 3. Success Stories */}
// 			<div className="mb-16 px-4">
// 				<h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8 text-center">
// 					Success Stories
// 				</h3>
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 					{successStories.map((story) => (
// 						<motion.div
// 							key={story.id}
// 							className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
// 							initial={{ opacity: 0, y: 50 }}
// 							whileInView={{ opacity: 1, y: 0 }}
// 							viewport={{ once: true }}
// 							whileHover={{ scale: 1.02 }}
// 						>
// 							<img
// 								src={story.image}
// 								alt={story.title}
// 								className="w-full h-40 object-cover"
// 							/>
// 							<div className="p-4">
// 								<h4 className="text-xl font-semibold mb-2">{story.title}</h4>
// 								<p className="text-gray-600 text-sm mb-2">{story.summary}</p>
// 								<div className="flex items-center mb-4">
// 									<img
// 										src={story.partnerLogo}
// 										alt={story.partner}
// 										className="w-8 h-8 object-contain mr-2"
// 									/>
// 									<span className="text-gray-700 text-sm">{story.partner}</span>
// 								</div>
// 								<motion.button
// 									whileHover={{ scale: 1.05 }}
// 									className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all text-sm"
// 								>
// 									Read More
// 								</motion.button>
// 							</div>
// 						</motion.div>
// 					))}
// 				</div>
// 			</div>

// 			{/* 4. Call-to-Action (CTA) */}
// 			<div className="text-center px-4">
// 				<motion.h3
// 					className="text-3xl sm:text-4xl font-bold text-green-800 mb-6"
// 					initial={{ opacity: 0, scale: 0.9 }}
// 					animate={{ opacity: 1, scale: 1 }}
// 					transition={{ type: "spring", stiffness: 260, damping: 20 }}
// 				>
// 					Want to be a part of the impact?
// 				</motion.h3>
// 				<div className="flex flex-col sm:flex-row justify-center gap-4">
// 					<motion.button
// 						whileHover={{
// 							scale: 1.05,
// 							boxShadow: "0px 0px 8px rgba(0, 128, 0, 0.7)",
// 						}}
// 						className="px-6 py-3 bg-green-500 text-white rounded-md text-lg"
// 					>
// 						Join as a Donor
// 					</motion.button>
// 					<motion.button
// 						whileHover={{
// 							scale: 1.05,
// 							boxShadow: "0px 0px 8px rgba(0, 0, 255, 0.7)",
// 						}}
// 						className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg"
// 					>
// 						Partner as an NGO
// 					</motion.button>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default DonorNgoSection;
