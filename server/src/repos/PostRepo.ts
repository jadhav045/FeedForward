
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
            for(let i in locations){
                const email = locations[i]['email'];
            console.log(email);
            // Send notifications to users of this email
            // NotificationService.sendNotification(email, 'New post created near your location!');
            io.emit('notification','new post created')
            console.log("notified")
               
            }
            return newPost.toObject();
            
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }

export default {
    create,
    } as const;