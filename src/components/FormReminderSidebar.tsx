import {Fragment, useState, useEffect} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {useForm, Controller} from 'react-hook-form';
import {LinkIcon, PlusIcon, QuestionMarkCircleIcon, CalendarIcon} from '@heroicons/react/20/solid'
import DatePicker from "react-datepicker";
import {registerLocale, setDefaultLocale} from "react-datepicker";
import es from 'date-fns/locale/es';
import {format} from 'date-fns';

registerLocale('es', es)
import "react-datepicker/dist/react-datepicker.css";
import ClientComboInput from "@/components/Base/ClientComboInput";
import {ClientResponse} from "../models/ClientInterface";
import {CreateReminderDto, ReminderResponse} from "../models/ReminderInterface";
import {getClients} from "../services/clientsService";
import {createReminder, updateReminder} from "../services/remindersService";
import {useSession} from "next-auth/react";

type FormReminderSidebarProps = {
	open: boolean
	setOpen: (open: boolean) => void
	onFormSubmit?: (newData: ReminderResponse) => void
	reminder?: ReminderResponse
	client?: ClientResponse
}

export default function FormReminderSidebar({open, setOpen, onFormSubmit, reminder, client}: FormReminderSidebarProps) {
	const {register, handleSubmit, reset, formState, control, setValue} = useForm<CreateReminderDto>();
	const isEditMode = Boolean(reminder);
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [persons, setPersons] = useState<ClientResponse[]>([]);

	useEffect(() => {
		const fetchClients = async () => {
			const clients = await getClients();
			setPersons(clients);
		}
		const getDate = () => {
			if (reminder) {
				console.log('fecha', reminder.fechaRecordatorio);
				const date = new Date(reminder.fechaRecordatorio);
				setStartDate(date);
				setValue("fechaRecordatorio", reminder.fechaRecordatorio);
			}
		}
		fetchClients().then(r => console.log('clients', r));
		getDate()
	}, [reminder, setValue])

	const handleDateChange = (date: Date) => {
		const dateISOString = date.toISOString(); // Convierte la fecha a un string en formato ISO
		setStartDate(date)
		setValue("fechaRecordatorio", dateISOString);
	};
	const handleClose = () => {
		setOpen(false);
		reset()
		if (!isEditMode) {
			setStartDate(null)
		}
	}

	const onSubmit = async (data: CreateReminderDto) => {
		try {
			if (isEditMode && reminder) {
				const updatedReminder = await updateReminder(reminder.id, data);
				updatedReminder.fechaRecordatorio = format(new Date(updatedReminder.fechaRecordatorio), 'yyyy-MM-dd');
				if (onFormSubmit) {
					onFormSubmit(updatedReminder);
					console.log('Recordatorio actualizado', updatedReminder);
				}
			} else {
				const newReminder = await createReminder(data);
				newReminder.fechaRecordatorio = format(new Date(newReminder.fechaRecordatorio), 'yyyy-MM-dd');
				if (onFormSubmit) {
					onFormSubmit(newReminder);
					console.log('Recordatorio creado', newReminder);
				}
			}
			handleClose();
		} catch (error) {
			console.log('Error al crear recordatorio o editar', error);
		}
	}
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
										<form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
										      onSubmit={handleSubmit(onSubmit)}>
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
																	htmlFor="nombreRecordatorio"
																	className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
															>
																Nombre del recordatorio
															</label>
														</div>
														<div className="sm:col-span-2">
															<input
																	{...register('nombreRecordatorio', {
																		required: true
																	})}
																	type="text"
																	defaultValue={reminder?.nombreRecordatorio}
																	name="nombreRecordatorio"
																	id="nombreRecordatorio"
																	className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
															/>
															{formState.errors.nombreRecordatorio &&
								<span className="text-sm text-red-600">Este campo es obligatorio</span>}
														</div>
													</div>

													{/* Project description */}
													<div
															className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<div>
															<label
																	htmlFor="descripcion"
																	className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
															>
																Descripción
															</label>
														</div>
														<div className="sm:col-span-2">
																		<textarea
																				{...register('descripcion')}
																				id="descripcion"
																				name="descripcion"
																				rows={3}
																				className="resize-none block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
																				defaultValue={reminder?.descripcion}
																		/>
														</div>
													</div>

													{/* Price */}
													<div
															className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<div>
															<label
																	htmlFor="precioServicio"
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
																	{...register('precioServicio', {
																		required: true
																	})}
																	type="number" step="0.01"
																	name="precioServicio"
																	defaultValue={reminder?.precioServicio}
																	id="price"
																	className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
																	placeholder="0.00"
																	aria-describedby="precioServicio"
															/>
															<div
																	className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
																<span className="text-gray-500 sm:text-sm" id="precioServicio">
																	USD
																</span>
															</div>
														</div>
														{formState.errors.precioServicio &&
							  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
													</div>
													{/* Fecha */}
													<div
															className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<div>
															<label
																	htmlFor="fechaRecordatorio"
																	className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
															>
																Fecha del recordatorio
															</label>
														</div>
														<div className="relative mt-2 rounded-md shadow-sm">
															<DatePicker
																	{...register('fechaRecordatorio', {
																		required: true
																	})}
																	locale="es"
																	id={'fechaRecordatorio'}
																	name={'fechaRecordatorio'}
																	minDate={new Date(new Date().setDate(new Date().getDate() + 5))}
																	dateFormat="dd/MM/yyyy"
																	className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
																	selected={startDate} onChange={(date: Date) => handleDateChange(date)}/>
															<div
																	className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
																<CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
															</div>
														</div>
														{formState.errors.fechaRecordatorio &&
							  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
													</div>

													<div
															className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<div>
															<h3 className="text-sm font-medium leading-6 text-gray-900">Cliente {isEditMode && (
																	<span className="text-red-600">*</span>)}
															</h3>
														</div>
														<div className="sm:col-span-2">
															{client && !reminder && (
																	<Controller
																			name="clientId"
																			control={control}
																			rules={{required: 'Este campo es obligatorio'}}
																			render={({field}) => (
																					<ClientComboInput setValue={setValue} register={field} peopleValue={persons}
																					                  actualClient={client}/>
																			)}
																	/>
															)}
															{!client && (
																	<Controller
																			name="clientId"
																			control={control}
																			rules={{required: 'Este campo es obligatorio'}}
																			render={({field}) => (
																					<ClientComboInput setValue={setValue} register={field} peopleValue={persons}
																					                  actualClient={reminder?.cliente}/>
																			)}
																	/>
															)}
															{formState.errors.clientId &&
								<span className="text-sm text-red-600">Este campo es obligatorio</span>}
														</div>
													</div>

													{/* Privacy */}
													<fieldset
															className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
														<legend className="sr-only">Tipo</legend>
														<div className="text-sm font-medium leading-6 text-gray-900" aria-hidden="true">
															Tipo de recordatorio {isEditMode && (<span className="text-red-600">*</span>)}
														</div>

														<div className="space-y-5 sm:col-span-2">
															<div className="space-y-5 sm:mt-0">
																<div className="relative flex items-start">
																	<div className="absolute flex h-6 items-center">
																		<input
																				{...register('tipoRecordatorio')}
																				disabled={isEditMode}
																				id="recurrent-reminder"
																				name="tipoRecordatorio"
																				value="Recurrente"
																				aria-describedby="public-access-description"
																				defaultChecked={reminder?.tipoRecordatorio === 'Recurrente'}
																				type="radio"
																				className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
																				{...register('tipoRecordatorio')}
																				id="unique-reminder"
																				disabled={isEditMode}
																				name="tipoRecordatorio"
																				value="Unico"
																				aria-describedby="restricted-access-description"
																				type="radio"
																				defaultChecked={reminder?.tipoRecordatorio === 'Unico'}
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
																				{...register('tipoRecordatorio')}
																				disabled={isEditMode}
																				name="tipoRecordatorio"
																				value="Prioritario"
																				aria-describedby="private-access-description"
																				type="radio"
																				defaultChecked={reminder?.tipoRecordatorio === 'Prioritario'}
																				className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
																		/>
																	</div>
																	<div className="pl-7 text-sm leading-6">
																		<label htmlFor="recurrent-priority" className="font-medium text-gray-900">
																			Recurrente - Prioritario
																		</label>
																		<p id="recurrent-priority-description" className="text-gray-500">
																			Proceso con más alertas hasta llegar a la fecha de vencimiento o confirmar el
																			pago
																		</p>
																	</div>
																</div>
																{formState.errors.tipoRecordatorio &&
								  <span
									className="text-sm text-red-600">{formState.errors.tipoRecordatorio.message}</span>}
															</div>
															<hr className="border-gray-200"/>
															<div
																	className="space-between sm:space-between flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0">
																{isEditMode && (<span className="text-red-600">*No editables</span>)}
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
															onClick={() => handleClose()}
													>
														Cancelar
													</button>
													<button
															type="submit"
															className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
													>
														{isEditMode ? 'Editar' : 'Crear'}
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
