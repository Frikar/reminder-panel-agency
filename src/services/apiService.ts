import axios from 'axios';

export const instance = axios.create({
	baseURL: process.env.NEXTAPI_URL, // Reemplaza con la URL base de tu API
	timeout: 3000,
	httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }),
});
