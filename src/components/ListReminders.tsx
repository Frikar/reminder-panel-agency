import Link from "next/link";
import {CalendarIcon, MapPinIcon, UsersIcon, CurrencyDollarIcon} from '@heroicons/react/20/solid'
import {useState} from "react";
import FormReminderSidebar from "@/components/FormReminderSidebar";
import {ReminderResponse} from "../models/ReminderInterface";

interface RemindersProps {
	reminders: ReminderResponse[];
	onFormSubmit: (newData: ReminderResponse) => void;
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

export default function ListReminders({reminders, onFormSubmit}: RemindersProps) {
	const [open, setOpen] = useState(false)
	return (
			<>
				<div className="mt-4">
					<div className="sm:flex sm:items-center">
						<div className="sm:flex-auto">
							<h1 className="text-2xl font-semibold leading-6 text-gray-900">Recordatorios</h1>
							<p className="mt-2 text-sm text-gray-700">
								A list of all the recordatios in your account including their name, title, email and role.
							</p>
						</div>
						<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
							<button
									onClick={() => setOpen(true)}
									type="button"
									className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Añadir recordatorio
							</button>
						</div>
					</div>
					<div className="overflow-hidden bg-white shadow sm:rounded-md mt-8">
						<ul role="list" className="divide-y divide-gray-200">
							{reminders.map((reminder) => (
									<li key={reminder.id}>
										<Link href={`/recordatorios/${reminder.id}`} className="block hover:bg-gray-50">
											<div className="px-4 py-4 sm:px-6">
												<div className="flex items-center justify-between">
													<p className="truncate text-sm font-medium text-indigo-600">{reminder.nombreRecordatorio}</p>
													<div className="ml-2 flex flex-shrink-0">
														<p className={classNames(returnStatusText(reminder.status), "inline-flex rounded-full w-fit px-2.5 py-0.5 text-xs font-semibold leading-5")}>
															{reminder.status}
														</p>
													</div>
												</div>
												<div className="mt-2 sm:flex sm:justify-between">
													<div className="sm:flex">
														<p className="flex items-center text-md text-gray-500">
															<CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
															                    aria-hidden="true"/>
															{reminder.precioServicio}$
														</p>
														<p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
															<UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
															{reminder.cliente?.correoElectronico}
														</p>
													</div>
													<div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
														<CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
														<p>
															Cierra el <time dateTime={reminder.fechaRecordatorio}>{reminder.fechaRecordatorio}</time>
														</p>
													</div>
												</div>
											</div>
										</Link>
									</li>
							))}
						</ul>
					</div>
				</div>
				<FormReminderSidebar onFormSubmit={onFormSubmit} open={open} setOpen={setOpen}/>
			</>
	)
}
