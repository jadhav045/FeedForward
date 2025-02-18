import { Button } from "@headlessui/react";
import { FaTruck, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
	const [animateTruck, setAnimateTruck] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimateTruck((prev) => !prev);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
			style={{ backgroundImage: "url('/hero-bg.jpg')" }}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-[var(--primary-bg)] bg-opacity-50"></div>

			{/* Main Content */}
			<motion.div
				className="relative z-10 max-w-3xl px-4 sm:px-6"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h1 className="text-[var(--primary-text)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
					Reduce Food Waste. <br /> Feed Communities in Need.
				</h1>
				<p className="text-[var(--primary-text)] text-base sm:text-lg mt-4">
					A real-time platform connecting surplus food sources with NGOs to
					ensure no meal goes to waste.
				</p>
				<div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
					<Button className="bg-orange-500 text-white px-6 py-3 text-lg rounded-xl shadow-lg hover:bg-orange-600 transition-all">
						Donate Food
					</Button>
					<Button className="border border-green-500 text-green-500 px-6 py-3 text-lg rounded-xl shadow-lg hover:bg-green-500 hover:text-white transition-all">
						Find NGOs
					</Button>
				</div>
			</motion.div>

			{/* Animated Icons */}
			{/* Hide icons on very small screens for a cleaner UI */}
			<motion.div
				className="absolute bottom-10 right-10 text-white text-3xl hidden sm:block"
				animate={{ x: animateTruck ? -20 : 20 }}
				transition={{ yoyo: Infinity, duration: 1 }}
			>
				<FaTruck />
			</motion.div>
			<motion.div
				className="absolute top-1/4 left-10 text-yellow-400 text-2xl hidden sm:block"
				animate={{ y: [0, 10, 0] }}
				transition={{ repeat: Infinity, duration: 2 }}
			>
				<FaUtensils />
			</motion.div>
			<motion.div
				className="absolute top-1/3 right-20 text-red-400 text-2xl hidden sm:block"
				animate={{ y: [0, 10, 0] }}
				transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
			>
				<FaUtensils />
			</motion.div>
		</div>
	);
};

export default HeroSection;
