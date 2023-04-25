import {instance} from "./apiService";
import {ReminderResponse} from "../models/ReminderInterface";

export async function getFeaturedReminders(): Promise<ReminderResponse[]> {
	try {
		const response = await instance.get(`/reminders/featured`);
		return response.data;
	} catch (error) {
		console.error('Error al traer los recordatorios fijados', error)
		return [];
	}
}
