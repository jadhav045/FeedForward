import React, { useState } from "react";
import Request from "../components/Request";
import DonationDialog from "../components/DonateForm";

// Define the NGO request type
export interface NgoRequest {
	ngoName: string;
	location: string;
	motive: string;
	option: string[];
}

const ngoRequests: NgoRequest[] = [
	{
		ngoName: "ABC Foundation",
		location: "XYZ City",
		motive: "There is nothing that we can't serve",
		option: ["Accept", "Decline"],
	},
	{
		ngoName: "Helping Hands",
		location: "New York",
		motive: "Serving the underprivileged",
		option: ["Accept", "Decline"],
	},
	{
		ngoName: "Food For All",
		location: "California",
		motive: "No one should sleep hungry",
		option: ["Accept", "Decline"],
	},
];

const Active: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="p-6">
			{/* List of NGO Requests */}
			<div className="mt-6 text-center">
				<button
					className="bg-[var(--button-bg-color)] text-[var(--button-text-color)] px-4 py-2 rounded-md text-sm font-semibold shadow-md transition hover:shadow-lg hover:opacity-90"
					onClick={() => setIsOpen(true)}
				>
					Donate Now
				</button>
			</div>
			{/* Donation Dialog */}
			<DonationDialog
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
			<div className="grid gap-4">
				{ngoRequests.map((ngo, index) => (
					<Request
						key={index}
						ngoRequest={ngo}
					/>
				))}
			</div>

			{/* Donate Now Button */}
		</div>
	);
};

export default Active;
