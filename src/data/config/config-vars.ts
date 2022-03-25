import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

export const APP_PORT = process.env.APP_PORT || 4500;
export const MONGO_URI = process.env.MONGO_URI || '';
