require("dotenv").config();
module.exports = {
	PORT: 5050,
	DB_URL: "mongodb+srv://manindhra12:helloworld@cluster0.p1lordn.mongodb.net/?retryWrites=true&w=majority",
	CLIENT_URL: process.env.CLIENT_URL,
	COOKIE_EXPIRE_DAYS: 10,
	JWT_SECRET: "VHSDJJLK",
	JWT_EXPIRY: "1d",
	CLOUDINARY_NAME: "dfeeehx1e",
	CLOUDINARY_API_KEY: "469436124985538",
	CLOUDINARY_API_SECRET: "hwW2rMJlO3jN66Y6qklIujPD0Z4",
};
