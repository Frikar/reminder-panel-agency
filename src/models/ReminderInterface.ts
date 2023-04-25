import {ClientResponse} from "./ClientInterface";

export interface ReminderResponse {
	nombreRecordatorio: string;
	descripcion: string;
	precioServicio: number;
	fechaRecordatorio: string;
	tipoRecordatorio: string;
	status: string;
	cliente?: ClientResponse
	id: string;
	pinned: boolean;
}

export interface CreateReminderDto {
	nombreRecordatorio: string;
	descripcion?: string;
	precioServicio: string;
	fechaRecordatorio: string;
	tipoRecordatorio: string;
	status?: string;
	clientId: string;
}

export interface UpdateReminderDto {
	nombreRecordatorio?: string;
	descripcion?: string;
	precioServicio?: string;
	fechaRecordatorio?: string;
	tipoRecordatorio?: string;
	status?: string;
}
