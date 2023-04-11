import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {LinkIcon, PlusIcon, QuestionMarkCircleIcon, CalendarIcon} from '@heroicons/react/20/solid'
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

import "react-datepicker/dist/react-datepicker.css";
import ClientComboInput from "@/components/Base/ClientComboInput";

const team = [
	{
		name: 'Tom Cook',
		email: 'tom.cook@example.com',
		href: '#',
		imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Whitney Francis',
		email: 'whitney.francis@example.com',
		href: '#',
		imageUrl:
				'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leonard Krasner',
		email: 'leonard.krasner@example.com',
		href: '#',
		imageUrl:
				'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Floyd Miles',
		email: 'floyd.miles@example.com',
		href: '#',
		imageUrl:
				'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Emily Selman',
		email: 'emily.selman@example.com',
		href: '#',
		imageUrl:
				'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
]

type FormReminderSidebarProps = {
	open: boolean
	setOpen: (open: boolean) => void
	person?: {
		name: string
		username: string
	}[]
}

export default function FormReminderSidebar({open, setOpen, person}: FormReminderSidebarProps) {
	const [startDate, setStartDate] = useState<Date | null>(null);
	return (
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setOpen}>
					<div className="fixed inset-0"/>

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
								<Transition.Child
										as={Fragment}
										enter="transform transition ease-in-out duration-500 sm:duration-700"
										enterFrom="translate-x-full"
										enterTo="translate-x-0"
										leave="transform transition ease-in-out duration-500 sm:duration-700"
										leaveFrom="translate-x-0"
										leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
										<form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
											<div className="flex-1">
												{/* Header */}
												<div className="bg-indigo-700 px-4 py-6 sm:px-6">
													<div className="flex items-start justify-between space-x-3">
														<div className="space-y-1">
															<Dialog.Title className="text-base font-semibold leading-6 text-white">
																Nuevo recordatorio
															</Dialog.Title>
															<p className="text-sm text-gray-200">
																Comienza un nuevo recordatorio para tu cliente.
															</p>
														</div>
														<div className="flex h-7 items-center">
															<button
																	type="button"
																	className="text-gray-100 hover:text-gray-200"
																	onClick={() => setOpen(false)}
															>
																<span className="sr-only">Close panel</span>
																<XMarkIcon className="h-6 w-6" aria-hidden="true"/>
															</button>
														</div>
													</div>
												</div>

												{/* Divider container */}
												<div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
													{/* Project name */}
													<div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<div>
															<label
																	htmlFor="project-name"
																	className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
															>
																Nombre del recordatorio
															</label>
														</div>
														<div className="sm:col-span-2">
															<input
																	type="text"
																	name="project-name"
																	id="project-name"
																	className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
															/>
														</div>
													</div>

													{/* Project description */}
													<div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<div>
															<label
																	htmlFor="project-description"
																	className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
															>
																Descripción
															</label>
														</div>
														<div className="sm:col-span-2">
                            <textarea
		                            id="project-description"
		                            name="project-description"
		                            rows={3}
		                            className="resize-none block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
		                            defaultValue={''}
                            />
														</div>
													</div>

													{/* Price */}
													<div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<div>
															<label
																	htmlFor="price"
																	className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
															>
																Precio
															</label>
														</div>
														<div className="relative mt-2 rounded-md shadow-sm">
															<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
																<span className="text-gray-500 sm:text-sm">$</span>
															</div>
															<input
																	type="text"
																	name="price"
																	id="price"
																	className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
																	placeholder="0.00"
																	aria-describedby="price-currency"
															/>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
																<span className="text-gray-500 sm:text-sm" id="price-currency">
																	USD
																</span>
															</div>
														</div>
													</div>
													{/* Fecha */}
													<div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<div>
															<label
																	htmlFor="price"
																	className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
															>
																Fecha del recordatorio
															</label>
														</div>
														<div className="relative mt-2 rounded-md shadow-sm">
															<DatePicker
																	locale="es"
																	minDate={new Date()}
																	dateFormat="dd/MM/yyyy"
																	className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
																	selected={startDate} onChange={(date: Date | null) => setStartDate(date)}/>
															<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
																<CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
															</div>
														</div>
													</div>

													{/* Team members */}
													<div
															className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<div>
															<h3 className="text-sm font-medium leading-6 text-gray-900">Cliente</h3>
														</div>
														<div className="sm:col-span-2">
															<ClientComboInput peopleValue={person}/>
														</div>
													</div>

													{/* Privacy */}
													<fieldset
															className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<legend className="sr-only">Tipo</legend>
														<div className="text-sm font-medium leading-6 text-gray-900" aria-hidden="true">
															Tipo de recordatorio
														</div>
														<div className="space-y-5 sm:col-span-2">
															<div className="space-y-5 sm:mt-0">
																<div className="relative flex items-start">
																	<div className="absolute flex h-6 items-center">
																		<input
																				id="recurrent-reminder"
																				name="reminder-type"
																				aria-describedby="public-access-description"
																				type="radio"
																				className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
																				defaultChecked
																		/>
																	</div>
																	<div className="pl-7 text-sm leading-6">
																		<label htmlFor="recurrent-reminder" className="font-medium text-gray-900">
																			Recurrente
																		</label>
																		<p id="recurrent-reminder-description" className="text-gray-500">
																			Se repite cada mes, son enviados varios correos durante el proceso
																		</p>
																	</div>
																</div>
																<div className="relative flex items-start">
																	<div className="absolute flex h-6 items-center">
																		<input
																				id="unique-reminder"
																				name="reminder-type"
																				aria-describedby="restricted-access-description"
																				type="radio"
																				className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
																		/>
																	</div>
																	<div className="pl-7 text-sm leading-6">
																		<label htmlFor="unique-reminder" className="font-medium text-gray-900">
																			Único
																		</label>
																		<p id="unique-reminder-description" className="text-gray-500">
																			Se realiza el proceso de recordatorio una solo vez
																		</p>
																	</div>
																</div>
																<div className="relative flex items-start">
																	<div className="absolute flex h-6 items-center">
																		<input
																				id="recurrent-priority"
																				name="reminder-type"
																				aria-describedby="private-access-description"
																				type="radio"
																				className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
																		/>
																	</div>
																	<div className="pl-7 text-sm leading-6">
																		<label htmlFor="recurrent-priority" className="font-medium text-gray-900">
																			Recurrente - Prioritario
																		</label>
																		<p id="recurrent-priority-description" className="text-gray-500">
																			Proceso con más alertas hasta llegar a la fecha de vencimiento o confirmar el pago
																		</p>
																	</div>
																</div>
															</div>
															<hr className="border-gray-200"/>
															<div
																	className="space-between sm:space-between flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0">
																{/*<div className="flex-1">*/}
																{/*	<a*/}
																{/*			href="#"*/}
																{/*			className="group flex items-center space-x-2.5 text-sm font-medium text-indigo-600 hover:text-indigo-900"*/}
																{/*	>*/}
																{/*		<LinkIcon*/}
																{/*				className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"*/}
																{/*				aria-hidden="true"*/}
																{/*		/>*/}
																{/*		<span>Copy link</span>*/}
																{/*	</a>*/}
																{/*</div>*/}
																{/*<div>*/}
																{/*	<a*/}
																{/*			href="#"*/}
																{/*			className="group flex items-center space-x-2.5 text-sm text-gray-500 hover:text-gray-900"*/}
																{/*	>*/}
																{/*		<QuestionMarkCircleIcon*/}
																{/*				className="h-5 w-5 text-gray-400 group-hover:text-gray-500"*/}
																{/*				aria-hidden="true"*/}
																{/*		/>*/}
																{/*		<span>Learn more about sharing</span>*/}
																{/*	</a>*/}
																{/*</div>*/}
															</div>
														</div>
													</fieldset>
												</div>
											</div>

											{/* Action buttons */}
											<div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
												<div className="flex justify-end space-x-3">
													<button
															type="button"
															className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
															onClick={() => setOpen(false)}
													>
														Cancelar
													</button>
													<button
															type="submit"
															className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
													>
														Crear
													</button>
												</div>
											</div>
										</form>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
	)
}
