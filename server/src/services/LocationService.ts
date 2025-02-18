import { get } from 'http';
import {User} from '../models/User';
import orm from '../repos/MongoOrm';

let db: any;
(async () => {
  db = await orm.connectDb();
})();



async function getNearestLocations(longitude: number, latitude: number,distance:number): Promise<any> {
    // return await LocationRepo.getNearestLocations(longitude, latitude);
    try {
        console.log("🔍 Finding nearest locations");
        const locations = await User.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    }
                }
            }
        }).limit(5);
        return locations;
    }catch(err){
        console.log("error in finding locations",err);
        return err;
    }
    
}

getNearestLocations(77.5946, 12.9716, 1000).then((data) => {
    console.log(data);
});
export default {
    getNearestLocations
};