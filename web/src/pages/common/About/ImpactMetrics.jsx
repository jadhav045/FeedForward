import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUtensils, FaHandsHelping, FaBox, FaTruck } from "react-icons/fa";

// Simple CountUp component using Framer Motion's animate
const CountUp = ({ end, suffix = "" }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const controls = animate(0, end, {
			duration: 2,
			onUpdate(value) {
				setCount(Math.floor(value));
			},
		});
		return () => controls.stop();
	}, [end]);

	return (
		<span>
			{count}
			{suffix}
		</span>
	);
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const ImpactMetrics = () => {
	return (
		<div className="py-20 bg-[var(--primary-bg)] text-center">
			<h2 className="text-4xl font-bold mb-10">Our Impact</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-6">
				<motion.div
					className="p-6 bg-gray-100 rounded-xl shadow-lg"
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					whileHover={{ scale: 1.05, rotate: 1 }}
				>
					<FaUtensils className="text-4xl text-orange-500 mb-4" />
					<h3 className="text-xl font-semibold">Total Meals Donated</h3>
					<p className="text-gray-600 mt-2">
						<CountUp
							end={100000}
							suffix="+"
						/>
					</p>
				</motion.div>
				<motion.div
					className="p-6 bg-gray-100 rounded-xl shadow-lg"
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					whileHover={{ scale: 1.05, rotate: 1 }}
				>
					<FaHandsHelping className="text-4xl text-green-500 mb-4" />
					<h3 className="text-xl font-semibold">Total NGOs Connected</h3>
					<p className="text-gray-600 mt-2">
						<CountUp
							end={500}
							suffix="+"
						/>
					</p>
				</motion.div>
				<motion.div
					className="p-6 bg-gray-100 rounded-xl shadow-lg"
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					whileHover={{ scale: 1.05, rotate: 1 }}
				>
					<FaBox className="text-4xl text-blue-500 mb-4" />
					<h3 className="text-xl font-semibold">Food Waste Reduced</h3>
					<p className="text-gray-600 mt-2">
						<CountUp
							end={50}
							suffix=" Tons"
						/>
					</p>
				</motion.div>
				<motion.div
					className="p-6 bg-gray-100 rounded-xl shadow-lg"
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					whileHover={{ scale: 1.05, rotate: 1 }}
				>
					<FaTruck className="text-4xl text-red-500 mb-4" />
					<h3 className="text-xl font-semibold">Active Deliveries</h3>
					<p className="text-gray-600 mt-2">
						<CountUp
							end={120}
							suffix="+"
						/>
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default ImpactMetrics;
