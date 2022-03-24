import express from 'express';
import cors from 'cors';

const server = express();
server
	.use(express.json({ limit: '50mb' }))
	.use(cors())
	.use(express.urlencoded({ extended: true, limit: '50mb' }));

export default server;
