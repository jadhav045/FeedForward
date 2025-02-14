import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	mobileNo: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	role: { type: String, enum: ["NGO", "DONOR"], required: true },
	password: { type: String, required: true },
	address: { type: String, required: true },
	longitude: { type: Number, required: true },
	latitude: { type: Number, required: true },
	photo: { type: String }, // URL to profile photo
	fullName: { type: String, required: true },
	profession: { type: String },
	regNo: { type: String },
	orgType: { type: String, enum: ["individual", "group"], required: true },
	foodType: { type: String },
	motive: { type: String },
	employeeNos: { type: Number },
	history: [
		{
			eventName: { type: String, required: true },
			photo: [{ type: String }], // Array of photo URLs
			address: { type: String, required: true },
			longitude: { type: Number, required: true },
			latitude: { type: Number, required: true },
			details: { type: String },
		},
	],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", UserSchema);