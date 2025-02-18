import { motion } from "framer-motion";
import { useState } from "react";

const VisionMission = () => {
	// Variants for container and children animations
	const containerVariants = {
		hidden: {},
		visible: {
			transition: { staggerChildren: 0.3 },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const textVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.4 } },
	};

	return (
		<div className="py-20  text-center">
			<motion.h2
				className="text-4xl font-bold mb-12"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				Vision & Mission
			</motion.h2>
			<motion.div
				className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{/* Vision Card */}
				<motion.div
					className="p-8 bg-white rounded-xl shadow-lg border border-gray-200"
					variants={cardVariants}
					whileHover={{ scale: 1.05, rotate: 1 }}
				>
					<motion.h3
						className="text-2xl font-semibold mb-2"
						variants={textVariants}
					>
						Our Vision
					</motion.h3>
					<motion.p
						className="text-gray-600 mb-4"
						variants={textVariants}
					>
						A world with no hunger.
					</motion.p>
					<motion.ul
						className="space-y-2"
						variants={textVariants}
					>
						<li className="flex items-center justify-center">
							<span className="mr-2 text-xl">🌍</span>
							<span>Reduce food waste.</span>
						</li>
						<li className="flex items-center justify-center">
							<span className="mr-2 text-xl">💡</span>
							<span>Inspire sustainable change.</span>
						</li>
					</motion.ul>
				</motion.div>
				{/* Mission Card */}
				<motion.div
					className="p-8 bg-white rounded-xl shadow-lg border border-gray-200"
					variants={cardVariants}
					whileHover={{ scale: 1.05, rotate: -1 }}
				>
					<motion.h3
						className="text-2xl font-semibold mb-2"
						variants={textVariants}
					>
						Our Mission
					</motion.h3>
					<motion.p
						className="text-gray-600 mb-4"
						variants={textVariants}
					>
						Connecting surplus to smiles.
					</motion.p>
					<motion.ul
						className="space-y-2"
						variants={textVariants}
					>
						<li className="flex items-center justify-center">
							<span className="mr-2 text-xl">🔗</span>
							<span>Bridge the gap.</span>
						</li>
						<li className="flex items-center justify-center">
							<span className="mr-2 text-xl">⚙️</span>
							<span>Leverage technology.</span>
						</li>
					</motion.ul>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default VisionMission;
