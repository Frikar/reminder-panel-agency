import {instance} from "./apiService";
import {CreateReminderDto, ReminderResponse} from "../models/ReminderInterface";
import {AxiosResponse} from "axios";


export async function getReminders(): Promise<ReminderResponse[]> {
	try {
		const response: AxiosResponse<ReminderResponse[]> = await instance.get('/reminders');
		return response.data;
	} catch (error) {
		console.error('Error al traer los recordatorios', error)
		return [];
	}
}

export async function getReminder(id: string): Promise<ReminderResponse> {
	try {
		const response: AxiosResponse<ReminderResponse> = await instance.get(`/reminders/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error al traer el recordatorio', error)
		return Promise.reject(error);
	}
}

export async function createReminder(reminder: CreateReminderDto): Promise<ReminderResponse> {
	try {
		const response: AxiosResponse<ReminderResponse> = await instance.post('/reminders', reminder);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error('Error al crear el recordatorio', error)
		return Promise.reject(error);
	}
}

export async function updateReminder(id: string, reminder: CreateReminderDto): Promise<ReminderResponse> {
	try {
		const response: AxiosResponse<ReminderResponse> = await instance.patch(`/reminders/${id}`, reminder);
		return response.data;
	} catch (error) {
		console.error('Error al actualizar el recordatorio', error)
		return Promise.reject(error);
	}
}

export async function deleteReminder(id: string): Promise<ReminderResponse> {
	try {
		const response: AxiosResponse<ReminderResponse> = await instance.delete(`/reminders/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error al eliminar el recordatorio', error)
		return Promise.reject(error);
	}
}

export async function pinReminder(id: string): Promise<ReminderResponse> {
	try {
		const response: AxiosResponse<ReminderResponse> = await instance.get(`/reminders/featured/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error al pinear el recordatorio', error)
		return Promise.reject(error);
	}
}
export async function pauseReminder(id: string): Promise<ReminderResponse> {
	try {
		const payload = {
			status: 'Pausado'
		}
		const response: AxiosResponse<ReminderResponse> = await instance.patch(`/reminders/status/${id}`, payload);
		return response.data;
	} catch (error) {
		console.error('Error al pausar el recordatorio', error)
		return Promise.reject(error);
	}
}

export async function unpauseReminder(id: string): Promise<ReminderResponse> {
try {
		const payload = {
			status: 'Iniciado'
		}
		const response: AxiosResponse<ReminderResponse> = await instance.patch(`/reminders/status/${id}`, payload);
		return response.data;
	} catch (error) {
		console.error('Error al despausar el recordatorio', error)
		return Promise.reject(error);
	}
}

export async function finishReminder(id: string): Promise<ReminderResponse> {
	try {
		const payload = {
			status: 'Completado'
		}
		const response: AxiosResponse<ReminderResponse> = await instance.patch(`/reminders/status/${id}`, payload);
		return response.data;
	} catch (error) {
		console.error('Error al finalizar el recordatorio', error)
		return Promise.reject(error);
	}
}
