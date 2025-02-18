
import UserRepo from '@src/repos/UserRepo';

// Generate a random email
const randomEmail = () => {
    return Math.random().toString(36).substring(7) + '@gmail.com';
};

// Generate a random username
const randomUsername = () => {
    return Math.random().toString(36).substring(7);
};

// Generate a random 10-digit mobile number
const randomMobileNo = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
};

// Generate a random latitude (valid range: -90 to 90)
const randomLatitude = () => {
    return (Math.random() * 180 - 90).toFixed(6);
};

// Generate a random longitude (valid range: -180 to 180)
const randomLongitude = () => {
    return (Math.random() * 360 - 180).toFixed(6);
};

// Connect to DB (if needed)

const createRandomUsers = async () => {
    for (let i = 0; i < 10; i++) {
        const longitude = randomLongitude();
        const latitude = randomLatitude();
        let randomUser = {
            email: randomEmail(),
            username: randomUsername(),
            mobileNo: randomMobileNo(),
            password: '12345678',
            longitude: longitude,
            latitude: latitude,
            role: 'NGO',
            location: {
                    "type": "Point",
                    "coordinates": [
                    longitude,
                    latitude
        ]
      }
        };

        await UserRepo.register(randomUser); // Ensure `register` is async
    }

    console.log("10 Random Users Created!");
};



createRandomUsers();


