import {ReminderResponse} from "./ReminderInterface";

export interface ClientResponse {
	id: string;
	nombre: string;
	apellido: string;
	descripcion: string;
	metodoAdquisicion: string;
	correoElectronico: string;
	ciudad: string;
	pais: string;
	empresa: string;
	sitioWeb: string;
	telefono: string;
	avatar: string;
	tipoCliente: string;
	status: string;
	tipoServicio: string[];
	tipoCuenta: string;
	recordatorios: ReminderResponse[];
}

export interface CreateClientDto {
	nombre: string;
	apellido: string;
	descripcion?: string;
	metodoAdquisicion:string;
	correoElectronico: string;
	ciudad: string;
	pais: string;
	empresa: string;
	sitioWeb: string;
	telefono: string;
	avatar?: string;
	tipoServicio?: string;
	tipoCliente?: string;
	status?: string;
	tipoCuenta?: string;
}

export interface UpdateClientDto {
	nombre?: string;
	apellido?: string;
	descripcion?: string;
	metodoAdquisicion?:string;
	correoElectronico?: string;
	ciudad?: string;
	pais?: string;
	empresa?: string;
	sitioWeb?: string;
	telefono?: string;
	tipoServicio?: string;
	tipoCliente?: string;
	status?: string;
	tipoCuenta?: string;
}
