import ImpactMetrics from "./About/ImpactMetrics.jsx";
import VisionMission from "./About/VissionMission.jsx";
import DonorNgoSection from "./About/NgoDonorSection.jsx";
import HowItWorks from "./About/HowItWorks.jsx";

import HeroSection from "./About/HeroSection.jsx";
import WhyChooseUsContact from "./About/WhyChooseUsContact.jsx";
import Navbar from "../../components/shared/Navbar";
const About = () => {
	return (
		// We will device these factor to home and About .../
		<>
			<HeroSection />
			<ImpactMetrics />
			<HowItWorks />
			<VisionMission />
			{/* DonorNgoSection has two codes and second one will add to About Section */}
			<DonorNgoSection />
			<WhyChooseUsContact />
		</>
	);
};

export default About;
