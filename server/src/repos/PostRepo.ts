
import NotificationService from "@src/services/NotificationService";
import Order from "@src/models/Order";
import { Response } from "express";
import { IOrder } from "@src/types/order.types";
import getLocation from "@src/services/LocationService"
import {io} from "@src/server"

async function create(postData: any): Promise<IOrder> {
        // console.log();
        console.log("📦 Creating post");
        try {
            const newPost = new Order(postData);
            await newPost.save();

            console.log("✅ Post created successfully:");
            const locations= await getLocation.getNearestLocations(postData.location.longitude,postData.location.latitude,20000);
            // console.log(locations);
            let ngos=[]
            for(let i in locations){
                const email = locations[i]['email'];
                ngos.push(email);
               
            }
            io.emit("notification",JSON.stringify({'from':newPost.donorId,'to':ngos,'message':`post is created by ${newPost.donorId}` }))
            return newPost.toObject();
            
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }

export default {
    create,
    } as const;