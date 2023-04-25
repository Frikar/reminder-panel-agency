import {Fragment, useState} from 'react'
import {
	CheckIcon,
	HandThumbUpIcon,
	PaperClipIcon,
	UserIcon,
} from '@heroicons/react/20/solid'
import FormReminderSidebar from "@/components/FormReminderSidebar";
import {ClientResponse} from "../models/ClientInterface";
import {removeClient} from "../services/clientsService";
import {useRouter} from 'next/router'
import {router} from "next/client";
import Link from "next/link";
import {useSession} from "next-auth/react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

interface DetailClientProps {
	client: ClientResponse
}

export default function DetailUser({client}: DetailClientProps) {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const deleteClientButton = async (id: string) => {
		await removeClient(id)
		router.back()
	}
	return (
			<>
				<div className="min-h-full">
					<main className="pt-2 pb-10">
						{/* Page header */}
						<div
								className="mx-auto max-w-3xl px-2 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl">
							<div className="flex items-center space-x-5">
								<div className="flex-shrink-0">
									<div className="relative">
										<img
												className="h-16 w-16 rounded-full"
												src={client.avatar}
												alt=""
										/>
										<span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"/>
									</div>
								</div>
								<div>
									<h1 className="text-2xl font-bold text-gray-900">{client.nombre} {client.apellido}</h1>
									<p className="text-sm font-medium text-gray-500">
										Cliente conseguido por{' '}
										<a href="#" className="text-gray-900">
											{client.metodoAdquisicion}
										</a>{' '}
									</p>
								</div>
							</div>
							<div
									className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
								<Link
										href={`/clientes/${client.id}/edit`}
										type="button"
										className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>
									Editar
								</Link>
								<button
										onClick={() => {
											deleteClientButton("4").then(r => console.log(r))
										}}
										type="button"
										className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-red-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>
									Eliminar
								</button>
								<button
										type="button"
										onClick={() => {
											setOpen(true)
										}}
										className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>
									Crear recordatorio
								</button>
							</div>
						</div>

						<div className="overflow-hidden mt-6 bg-white shadow sm:rounded-lg">
							<div className="px-4 py-6 sm:px-6">
								<h3 className="text-base font-semibold leading-7 text-gray-900">Información del cliente</h3>
								<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Toda la información ingresada al
									respecto</p>
							</div>
							<div className="border-t border-gray-100">
								<dl className="divide-y divide-gray-100">
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Nombre completo</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client.nombre} {client.apellido}</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Empresa</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client.empresa}</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Dirección de correo</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client.correoElectronico}</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Descripción</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{client.descripcion}
										</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Estado</dt>
										<dd className="inline-flex w-fit items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-bold text-green-900">{client.status}</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Tipo de cliente</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client.tipoCliente}</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Teléfono</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client.telefono}</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">País</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client.pais}</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Ciudad</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client.ciudad}</dd>
									</div>
									<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-900">Servicios contratados</dt>
										<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
											{client.tipoServicio.map((service) => (
													<li key={service} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
														<div className="w-0 flex-1 flex items-center">
															<svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
															     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
																<path fillRule="evenodd"
																      d="M4 3a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm1 0v14h10V3H5z"
																      clipRule="evenodd"/>
																<path fillRule="evenodd"
																      d="M8 5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V5zm1 0v2h2V5H9z"
																      clipRule="evenodd"/>
															</svg>
															<span className="ml-2 flex-1 w-0 truncate">
																{service}
															</span>
														</div>
													</li>
											))}
										</dd>
									</div>
								</dl>
							</div>
						</div>
					</main>
				</div>
				<FormReminderSidebar open={open} setOpen={setOpen} client={client}/>
			</>
	)
}

