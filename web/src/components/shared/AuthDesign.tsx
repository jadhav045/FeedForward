import React, { useState, useEffect } from "react";

interface Slide {
	image: string;
	tagline: string;
}

const slides: Slide[] = [
	{
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHC9K-UmWlMhBhf2fWcSYzXZ5Jtu9H44VDg&s",
		tagline: "There is nothing that we can't serve",
	},
	{
		image:
			"https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=600",
		tagline: "Empower Your Ideas",
	},
	{
		image:
			"https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=600",
		tagline: "Build Something Amazing",
	},
];

const Slideshow: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const nextSlide = () => setCurrentIndex((currentIndex + 1) % slides.length);
	const prevSlide = () =>
		setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);

	return (
		<div className="relative w-full max-w-4xl mx-auto p-4 overflow-hidden bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-lg shadow-[var(--primary-shadow)]">
			<div className="relative w-full h-[500px] overflow-hidden rounded-xl flex items-center justify-center">
				<div
					className="w-full h-full flex transition-transform duration-700 ease-in-out"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{slides.map((slide, index) => (
						<div
							key={index}
							className="w-full flex-shrink-0 relative"
						>
							<img
								src={slide.image}
								alt={`Slide ${index + 1}`}
								className="w-full h-full object-cover rounded-xl"
							/>
							<div className="absolute bottom-0 w-full bg-[var(--secondary-bg)] bg-opacity-60 text-[var(--secondary-text)] text-center py-4">
								<p className="text-xl font-bold">{slide.tagline}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[var(--primary-bg)] text-[var(--primary-text)] p-3 rounded-full shadow-lg hover:bg-[var(--secondary-bg)]"
			>
				◀
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[var(--primary-bg)] text-[var(--primary-text)] p-3 rounded-full shadow-lg hover:bg-[var(--secondary-bg)]"
			>
				▶
			</button>
		</div>
	);
};

export default Slideshow;
