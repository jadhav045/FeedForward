import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react"; // Import icons
import DonationDialog from "./DonateForm";

interface NgoRequest {
	ngoName: string;
	location: string;
	motive: string;
	selectedOption: string;
}

interface RequestProps {
	ngoRequest: NgoRequest;
	onSelect: (ngoName: string, selectedValue: string) => void;
}

const Request: React.FC<RequestProps> = ({ ngoRequest, onSelect }) => {
	// Handle button clicks

	const handleClick = (value: string) => {
		alert(`${ngoRequest.ngoName} has been ${value.toLowerCase()}ed.`);
		onSelect(ngoRequest.ngoName, value);
	};

	return (
		<>
			<div className="bg-[var(--subcomponent-bg-color)] text-[var(--subcomponent-text-color)] p-4 rounded-lg shadow-md border border-[var(--subcomponent-border-color)] max-w-sm mx-auto">
				<h3 className="text-lg font-semibold mb-1">{ngoRequest.ngoName}</h3>
				<p className="text-xs text-gray-600">
					<strong>Location:</strong> {ngoRequest.location}
				</p>
				<p className="text-xs text-gray-600 mb-2">
					<strong>Motive:</strong> {ngoRequest.motive}
				</p>

				{/* Action Buttons */}
				<div className="flex gap-2 mt-2">
					<button
						className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium transition ${
							ngoRequest.selectedOption === "Accept"
								? "bg-green-600 text-white"
								: "bg-gray-300 text-gray-700 hover:bg-green-500"
						}`}
						onClick={() => handleClick("Accept")}
					>
						<CheckCircle size={16} />
						Accept
					</button>

					<button
						className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium transition ${
							ngoRequest.selectedOption === "Decline"
								? "bg-red-600 text-white"
								: "bg-gray-300 text-gray-700 hover:bg-red-500"
						}`}
						onClick={() => handleClick("Decline")}
					>
						<XCircle size={16} />
						Decline
					</button>
				</div>
			</div>
		</>
	);
};

export default Request;
