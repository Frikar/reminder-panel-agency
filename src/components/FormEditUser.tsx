import Link from "next/link";
import {useRouter} from "next/router";
import {useForm} from 'react-hook-form';
import {ClientResponse, CreateClientDto, UpdateClientDto} from '../models/ClientInterface';
import {createClient, updateClient} from '../services/clientsService';
import {useSession} from "next-auth/react";


interface FormEditUserProps {
	client: ClientResponse
}

export default function FormEditUser({client}: FormEditUserProps) {
	const router = useRouter();
	const {register, handleSubmit, reset, formState, control, setValue, getValues} = useForm<UpdateClientDto>();
	const onSubmit = async (data: UpdateClientDto) => {
		try {
			const updatedClient = await updateClient(client.id, data);
			reset();
			await router.back();
			console.log('Cliente editado', updatedClient);
		} catch (error) {
			console.error('Error editando cliente', error);
		}
	};
	return (
			<>
				<form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
						<div className="space-y-6 sm:space-y-5">
							<div>
								<h3 className="text-base font-semibold leading-6 text-gray-900">Editar cliente</h3>
								<p className="mt-1 max-w-2xl text-sm text-gray-500">
									Esta información sera almacenada para el uso de los recordatorios
								</p>
							</div>

							<div className="space-y-6 sm:space-y-5">
								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
									<label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
										Nombre
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
										<input
												{...register("nombre", {
													required: true,
												})}
												type="text"
												name="nombre"
												defaultValue={client?.nombre}
												id="nombre"
												autoComplete="given-name"
												className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										/>
										{formState.errors.nombre && <span className="text-sm text-red-600">Este campo es obligatorio</span>}
									</div>
								</div>

								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
									<label htmlFor="apellido" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
										Apellido
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
										<input
												{...register("apellido", {
													required: true,
												})}
												type="text"
												name="apellido"
												defaultValue={client?.apellido}
												id="apellido"
												autoComplete="family-name"
												className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										/>
										{formState.errors.apellido &&
					  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
									</div>
								</div>

								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
									<label htmlFor="descripcion" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
										Descripción
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
                <textarea
		                id="descripcion"
		                {...register("descripcion")}
		                name="descripcion"
		                rows={3}
		                className="block w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
		                defaultValue={client?.descripcion}
                />
										<p className="mt-2 text-sm text-gray-500">Escribe una breve descripción del cliente</p>
									</div>
								</div>
								<div className="pt-6 sm:pt-5 sm:border-t sm:border-gray-200">
									<div role="group" aria-labelledby="metodo-adquisicion">
										<div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
											<div>
												<div className="text-sm font-semibold leading-6 text-gray-900" id="metodo-adquisicion">
													Metodo de adquisición
												</div>
											</div>
											<div className="sm:col-span-2">
												<div className="max-w-lg">
													<p className="text-sm text-gray-500">El medio por donde fue adquirido el cliente</p>
													<div className="mt-4 space-y-4">
														<div className="flex items-center">
															<input
																	{...register("metodoAdquisicion", {
																		required: true,
																	})}
																	id="instagram"
																	name="metodoAdquisicion"
																	type="radio"
																	defaultChecked={client?.metodoAdquisicion === "Instagram"}
																	value="Instagram"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																	htmlFor="instagram"
																	className="ml-3 block text-sm font-medium leading-6 text-gray-900"
															>
																Instagram
															</label>
														</div>
														<div className="flex items-center">
															<input
																	{...register("metodoAdquisicion", {
																		required: true,
																	})}
																	id="referral"
																	name="metodoAdquisicion"
																	type="radio"
																	defaultChecked={client?.metodoAdquisicion === "Referido"}
																	value="Referido"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																	htmlFor="referral"
																	className="ml-3 block text-sm font-medium leading-6 text-gray-900"
															>
																Referido
															</label>
														</div>
														<div className="flex items-center">
															<input
																	{...register("metodoAdquisicion", {
																		required: true,
																	})}
																	id="direct"
																	name="metodoAdquisicion"
																	type="radio"
																	defaultChecked={client?.metodoAdquisicion === "Directo"}
																	value="Directo"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																	htmlFor="direct"
																	className="ml-3 block text-sm font-medium leading-6 text-gray-900"
															>
																Directo
															</label>
														</div>
														<div className="flex items-center">
															<input
																	{...register("metodoAdquisicion", {
																		required: true
																	})}
																	id="website"
																	name="metodoAdquisicion"
																	type="radio"
																	defaultChecked={client?.metodoAdquisicion === "Website"}
																	value="Website"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																	htmlFor="website"
																	className="ml-3 block text-sm font-medium leading-6 text-gray-900"
															>
																Website
															</label>
														</div>
														{formState.errors.metodoAdquisicion &&
							  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
							<div>
								<h3 className="text-base font-semibold leading-6 text-gray-900">Información de contacto</h3>
								<p className="mt-1 max-w-2xl text-sm text-gray-500">Datos de seguimiento para el cliente
									mail.</p>
							</div>
							<div className="space-y-6 sm:space-y-5">

								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
									<label htmlFor="correoElectronico"
									       className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
										Dirección de correo electrónico
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
										<input
												{...register("correoElectronico", {
													required: true,
												})}
												defaultValue={client?.correoElectronico}
												id="correoElectronico"
												name="correoElectronico"
												type="email"
												autoComplete="email"
												className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
										{formState.errors.correoElectronico &&
					  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
									</div>
								</div>

								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
									<label htmlFor="pais" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
										País
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
										<select
												{...register("pais", {
													required: true,
												})}
												defaultValue={client?.pais}
												id="pais"
												name="pais"
												autoComplete="country-name"
												className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										>
											<option>Estados Unidos</option>
											<option>Panamá</option>
											<option>Costa Rica</option>
											<option>Ecuador</option>
											<option>Chile</option>
											<option>Perú</option>
											<option>Argentina</option>
											<option>Venezuela</option>
											<option>Colombia</option>
											<option>Canada</option>
											<option>Mexico</option>
										</select>
										{formState.errors.pais &&
					  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
									</div>
								</div>

								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
									<label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
										Ciudad
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
										<input
												{...register("ciudad", {
													required: true,
												})}
												type="text"
												name="ciudad"
												defaultValue={client?.ciudad}
												id="city"
												autoComplete="address-level2"
												className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										/>
										{formState.errors.ciudad &&
					  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
									</div>
								</div>

								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
									<label htmlFor="empresa" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
										Empresa
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
										<input
												{...register("empresa", {
													required: true,
												})}
												type="text"
												name="empresa"
												defaultValue={client?.empresa}
												id="empresa"
												autoComplete="company"
												className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										/>
										{formState.errors.empresa &&
					  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
									</div>
								</div>
								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
									<label htmlFor="sitioWeb" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
										Sitio web
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
										<input
												{...register("sitioWeb", {
															required: true,
														}
												)}
												type="text"
												defaultValue={client?.sitioWeb}
												name="sitioWeb"
												id="sitioWeb"
												autoComplete="address-level1"
												className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										/>
										{formState.errors.sitioWeb &&
					  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
									</div>
								</div>

								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
									<label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
										Teléfono
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
										<input
												{...register("telefono", {
													required: true,
												})}
												type="phone"
												defaultValue={client?.telefono}
												name="telefono"
												id="telefono"
												autoComplete="phone-number"
												className="block w-full px-3 max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										/>
										{formState.errors.telefono &&
					  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
									</div>
								</div>
							</div>
						</div>

						<div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
							<div>
								<h3 className="text-base font-semibold leading-6 text-gray-900">Proyectos</h3>
								<p className="mt-1 max-w-2xl text-sm text-gray-500">
									Aquí se ubica la información relevante a nivel de gestión y prioridades
								</p>
							</div>
							<div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
								<div className="pt-6 sm:pt-5">
									<div role="group" aria-labelledby="tipoServicio">
										<div className="sm:grid sm:grid-cols-3 sm:gap-4">
											<div>
												<div className="text-sm font-semibold leading-6 text-gray-900" id="tipoServicio">
													Tipos de servicios
												</div>
											</div>
											<div className="mt-4 sm:col-span-2 sm:mt-0">
												<div className="max-w-lg space-y-4">
													<div className="relative flex items-start">
														<div className="flex h-6 items-center">
															<input
																	{...register("tipoServicio", {
																		required: true,
																	})}
																	id="project"
																	defaultChecked={client?.tipoServicio.includes("Proyecto único")}
																	name="tipoServicio"
																	type="checkbox"
																	value="Proyecto único"
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
														</div>
														<div className="ml-3">
															<label htmlFor="project" className="text-sm font-medium leading-6 text-gray-900">
																Proyecto único
															</label>
															<p className="text-sm text-gray-500">
																Proyecto en base a entregas donde el cliente queda en control de los resultados
															</p>
														</div>
													</div>
													<div className="relative flex items-start">
														<div className="flex h-6 items-center">
															<input
																	{...register("tipoServicio", {
																		required: true,
																	})}
																	id="service"
																	name="tipoServicio"
																	defaultChecked={client?.tipoServicio.includes("Servicio recurrente")}
																	value="Servicio recurrente"
																	type="checkbox"
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
														</div>
														<div className="ml-3">
															<label htmlFor="service" className="text-sm font-medium leading-6 text-gray-900">
																Servicio recurrente
															</label>
															<p className="text-sm text-gray-500">Servicio mensual como puede ser manejo de redes
																sociales, marketing, diseños constantes</p>
														</div>
													</div>
													<div className="relative flex items-start">
														<div className="flex h-6 items-center">
															<input
																	{...register("tipoServicio", {
																		required: true,
																	})}
																	id="maintenance"
																	name="tipoServicio"
																	defaultChecked={client?.tipoServicio.includes("Mantenimiento mensual")}
																	value="Mantenimiento mensual"
																	type="checkbox"
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
														</div>
														<div className="ml-3">
															<label htmlFor="maintenance" className="text-sm font-medium leading-6 text-gray-900">
																Mantenimiento mensual
															</label>
															<p className="text-sm text-gray-500">
																Solamente mantenimiento de servidor de hosting o correos
															</p>
														</div>
													</div>
													{formState.errors.tipoServicio &&
							<span className="text-sm text-red-600">Este campo es obligatorio</span>}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="pt-6 sm:pt-5">
									<div role="group" aria-labelledby="label-type">
										<div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
											<div>
												<div className="text-sm font-semibold leading-6 text-gray-900" id="label-type">
													Tipo de cliente
												</div>
											</div>
											<div className="sm:col-span-2">
												<div className="max-w-lg">
													<p className="text-sm text-gray-500">Estos son los valores con los que son asignados las
														actividades de seguimiento de cada cliente</p>
													<div className="mt-4 space-y-4">
														<div className="flex items-center">
															<input
																	{...register("tipoCliente", {
																		required: true,
																	})}
																	id="high-value"
																	defaultChecked={client?.tipoCliente === "Alto valor"}
																	name="tipoCliente"
																	type="radio"
																	value="Alto valor"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																	htmlFor="high-value"
																	className="ml-3 block text-sm font-medium leading-6 text-gray-900"
															>
																Alto valor
															</label>
														</div>
														<div className="flex items-center">
															<input
																	{...register("tipoCliente", {
																		required: true,
																	})}
																	defaultChecked={client?.tipoCliente === "Nuevo cliente"}
																	id="new-client"
																	name="tipoCliente"
																	type="radio"
																	value="Nuevo cliente"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																	htmlFor="new-client"
																	className="ml-3 block text-sm font-medium leading-6 text-gray-900"
															>
																Nuevo cliente
															</label>
														</div>
														<div className="flex items-center">
															<input
																	{...register("tipoCliente", {
																		required: true,
																	})}
																	id="new-contact"
																	defaultChecked={client?.tipoCliente === "Contacto nuevo"}
																	name="tipoCliente"
																	type="radio"
																	value="Contacto nuevo"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																	htmlFor="new-contact"
																	className="ml-3 block text-sm font-medium leading-6 text-gray-900"
															>
																Contacto nuevo
															</label>
														</div>
														<div className="flex items-center">
															<input
																	{...register("tipoCliente", {
																		required: true,
																	})}
																	id="recurrent-client"
																	defaultChecked={client?.tipoCliente === "Regular"}
																	name="tipoCliente"
																	type="radio"
																	value="Regular"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																	htmlFor="recurrent-client"
																	className="ml-3 block text-sm font-medium leading-6 text-gray-900"
															>
																Regular
															</label>
														</div>
														{formState.errors.tipoServicio &&
							  <span className="text-sm text-red-600">Este campo es obligatorio</span>}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="pt-5">
						<div className="flex justify-end gap-x-3">
							<Link
									href={`/clientes/${client?.id}`}
									type="button"
									className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							>
								Cancelar
							</Link>
							<button
									type="submit"
									className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Guardar
							</button>
						</div>
					</div>
				</form>
			</>
	)
}
