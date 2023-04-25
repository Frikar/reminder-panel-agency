import {instance} from "./apiService";
import {ClientResponse, CreateClientDto, UpdateClientDto} from "../models/ClientInterface";
import {AxiosResponse} from "axios";

export async function getClients(): Promise<ClientResponse[]> {
	try {
		const response: AxiosResponse<ClientResponse[]> = await instance.get('/clients');
		return response.data;
	} catch (error) {
		console.error('Error al traer los clientes', error)
		return [];
	}
}

export async function getClient(id: string): Promise<ClientResponse> {
	try {
		const response: AxiosResponse<ClientResponse> = await instance.get(`/clients/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error al traer el cliente', error)
		return Promise.reject(error);
	}
}

export async function createClient(client: CreateClientDto): Promise<ClientResponse> {
	try {
		const response: AxiosResponse<ClientResponse> = await instance.post('/clients', client);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error('Error al crear el cliente', error)
		return Promise.reject(error);
	}
}

export async function updateClient(id: string, client: UpdateClientDto): Promise<ClientResponse> {
	try {
		const response: AxiosResponse<ClientResponse> = await instance.patch(`/clients/${id}`, client);
		return response.data;
	} catch (error) {
		console.error('Error al actualizar el cliente', error)
		return Promise.reject(error);
	}
}

export async function removeClient(id: string): Promise<void> {
	try {
		const response: AxiosResponse<void> = await instance.delete(`/clients/${id}`);
		console.log(response.data);
	} catch (error) {
		console.error('Error al eliminar el cliente', error)
		return Promise.reject(error);
	}
}
