import axios from 'axios';

export const instance = axios.create({
	baseURL: "https://reminder.dvlance.com/api", // Reemplaza con la URL base de tu API
	timeout: 3000,
});
