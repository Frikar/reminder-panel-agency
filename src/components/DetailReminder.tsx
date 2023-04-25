import {Fragment, useState} from 'react'
import StatusMenu from "@/components/Base/StatusMenu";
import FormReminderSidebar from "@/components/FormReminderSidebar";
import {ReminderResponse} from "../models/ReminderInterface";
import Link from "next/link";

interface Props {
	reminder: ReminderResponse;
	onFormSubmit: (newData: ReminderResponse) => void;
	onStatusUpdate: (updatedReminder: ReminderResponse) => void;
}

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

const statusStyles = {
	success: 'bg-green-100 text-green-800',
	processing: 'bg-yellow-100 text-yellow-800',
	programmed: 'bg-indigo-100 text-indigo-800',
	failed: 'bg-red-100 text-red-800',
}
const returnStatusText = (status: string) => {
	if (status === 'Pausado') return statusStyles.failed
	if (status === 'Completado') return statusStyles.success
	if (status === 'Programado') return statusStyles.programmed
	if (status === 'Iniciado') return statusStyles.processing
	if (status === 'failed') return statusStyles.failed
}
export default function DetailReminder({reminder, onFormSubmit, onStatusUpdate}: Props) {
	const [open, setOpen] = useState(false)
	return (
			<>
				<div className="overflow-hidden bg-white shadow sm:rounded-lg">
					<div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
						<div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
							<div className="ml-4 mt-4">
								<h1 className="text-2xl font-semibold leading-6 text-gray-900">Recordatorio
									- {reminder.nombreRecordatorio}</h1>
							</div>
							<div className="ml-4 mt-4 flex flex-shrink-0">
								<button
										onClick={() => setOpen(true)}
										type="button"
										className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Editar
								</button>
								<StatusMenu reminder={reminder} onStatusUpdate={onStatusUpdate}/>
							</div>
						</div>
					</div>
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-base font-semibold leading-6 text-gray-900">Información del recordatorio</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">Datos relacionados al mismo</p>
					</div>
					<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
						<dl className="sm:divide-y sm:divide-gray-200">
							<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
								<dt className="text-sm font-medium text-gray-500">Cliente asignado</dt>
								<Link href={`/clientes/${reminder.cliente?.id}`}
								      className="mt-1 text-md text-indigo-600 sm:col-span-2 sm:mt-0">{reminder.cliente?.nombre} {reminder.cliente?.apellido}</Link>
							</div>
							<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
								<dt className="text-sm font-medium text-gray-500">Correo</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{reminder.cliente?.correoElectronico}</dd>
							</div>
							<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
								<dt className="text-sm font-medium text-gray-500">Descripción</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									{reminder.descripcion}
								</dd>
							</div>
							<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
								<dt className="text-sm font-medium text-gray-500">Precio</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{reminder.precioServicio}$</dd>
							</div>
							<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
								<dt className="text-sm font-medium text-gray-500">Status</dt>
								<dd className={classNames(returnStatusText(reminder.status), 'inline-flex w-fit items-center rounded-full  px-2.5 py-0.5 text-sm font-bold')}>
									{reminder.status}
								</dd>
							</div>
							<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
								<dt className="text-sm font-medium text-gray-500">Fecha de finalización</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{reminder.fechaRecordatorio}</dd>
							</div>
							<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
								<dt className="text-sm font-medium text-gray-500">Tipo de recordatorio</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{reminder.tipoRecordatorio}</dd>
							</div>
						</dl>
					</div>
				</div>
				<FormReminderSidebar open={open} setOpen={setOpen} reminder={reminder} onFormSubmit={onFormSubmit}/>
			</>
	)
}
