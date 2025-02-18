import { motion } from "framer-motion";
import { FaBox, FaClipboardList, FaMapMarkerAlt } from "react-icons/fa";
 const HowItWorks = () => {
	return (
		<div className="py-20 bg-gray-100 text-center">
			<h2 className="text-4xl font-bold mb-10">How It Works</h2>
			<div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
				<motion.div
					className="bg-white p-6 rounded-xl shadow-lg text-center w-80"
					whileHover={{ scale: 1.05 }}
				>
					<FaClipboardList className="text-4xl text-orange-500 mb-4" />
					<h3 className="text-xl font-semibold">List Surplus Food</h3>
					<p className="text-gray-600 mt-2">
						Restaurants, caterers, and individuals list surplus food on our
						platform.
					</p>
				</motion.div>

				<motion.div
					className="bg-white p-6 rounded-xl shadow-lg text-center w-80"
					whileHover={{ scale: 1.05 }}
				>
					<FaMapMarkerAlt className="text-4xl text-green-500 mb-4" />
					<h3 className="text-xl font-semibold">Match with NGOs</h3>
					<p className="text-gray-600 mt-2">
						FeedForward’s smart algorithm connects food donors with nearby NGOs.
					</p>
				</motion.div>

				<motion.div
					className="bg-white p-6 rounded-xl shadow-lg text-center w-80"
					whileHover={{ scale: 1.05 }}
				>
					<FaBox
                    className="text-4xl text-blue-500 mb-4" />
					<h3 className="text-xl font-semibold">Deliver & Track</h3>
					<p className="text-gray-600 mt-2">
						Food is picked up and tracked in real-time to ensure it reaches
						those in need.
					</p>
				</motion.div>
			</div>
		</div>
	);
};


export default HowItWorks;