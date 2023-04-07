import Link from "next/link";
export default function FormUser() {
	return (
			<form className="space-y-8 divide-y divide-gray-200">
				<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
					<div className="space-y-6 sm:space-y-5">
						<div>
							<h3 className="text-base font-semibold leading-6 text-gray-900">Nuevo cliente</h3>
							<p className="mt-1 max-w-2xl text-sm text-gray-500">
								This information will be displayed publicly so be careful what you share.
							</p>
						</div>

						<div className="space-y-6 sm:space-y-5">
							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
									Nombre
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
									<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
									Apellido
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
									<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
									Descripción
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
                <textarea
		                id="about"
		                name="about"
		                rows={3}
		                className="block w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
		                defaultValue={''}
                />
									<p className="mt-2 text-sm text-gray-500">Escribe una breve descripción del cliente</p>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
									Foto
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
									<div className="flex items-center">
                  <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
										<button
												type="button"
												className="ml-5 rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
										>
											Cambiar
										</button>
									</div>
								</div>
							</div>
								<div className="pt-6 sm:pt-5 sm:border-t sm:border-gray-200">
									<div role="group" aria-labelledby="label-acquisition">
										<div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
											<div>
												<div className="text-sm font-semibold leading-6 text-gray-900" id="label-acquisition">
													Metodo de obtención
												</div>
											</div>
											<div className="sm:col-span-2">
												<div className="max-w-lg">
													<p className="text-sm text-gray-500">El medio por donde fue adquirido el cliente</p>
													<div className="mt-4 space-y-4">
														<div className="flex items-center">
															<input
																	id="instagram"
																	name="method-acquisition"
																	type="radio"
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
																	id="referral"
																	name="method-acquisition"
																	type="radio"
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
																	id="direct"
																	name="method-acquisition"
																	type="radio"
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
																	id="website"
																	name="method-acquisition"
																	type="radio"
																	className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																	htmlFor="website"
																	className="ml-3 block text-sm font-medium leading-6 text-gray-900"
															>
																Website
															</label>
														</div>
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
							<p className="mt-1 max-w-2xl text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
						</div>
						<div className="space-y-6 sm:space-y-5">

							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
									Dirección de correo electrónico
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
									<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
									País
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
									<select
											id="country"
											name="country"
											autoComplete="country-name"
											className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
									Ciudad
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
									<input
											type="text"
											name="city"
											id="city"
											autoComplete="address-level2"
											className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
									Empresa
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
									<input
											type="text"
											name="company"
											id="company"
											autoComplete="address-level1"
											className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
									Sitio web
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
									<input
											type="text"
											name="website"
											id="website"
											autoComplete="address-level1"
											className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
									Teléfono
								</label>
								<div className="mt-2 sm:col-span-2 sm:mt-0">
									<input
											type="phone"
											name="phone"
											id="phone"
											autoComplete="postal-code"
											className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
						<div>
							<h3 className="text-base font-semibold leading-6 text-gray-900">Proyectos</h3>
							<p className="mt-1 max-w-2xl text-sm text-gray-500">
								Well always let you know about important changes, but you pick what else you want to hear about.
							</p>
						</div>
						<div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
							<div className="pt-6 sm:pt-5">
								<div role="group" aria-labelledby="label-type-service">
									<div className="sm:grid sm:grid-cols-3 sm:gap-4">
										<div>
											<div className="text-sm font-semibold leading-6 text-gray-900" id="label-type-service">
												Tipos de servicios
											</div>
										</div>
										<div className="mt-4 sm:col-span-2 sm:mt-0">
											<div className="max-w-lg space-y-4">
												<div className="relative flex items-start">
													<div className="flex h-6 items-center">
														<input
																id="project"
																name="project"
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
														/>
													</div>
													<div className="ml-3">
														<label htmlFor="project" className="text-sm font-medium leading-6 text-gray-900">
															Proyecto unico
														</label>
														<p className="text-sm text-gray-500">
															Get notified when someones posts a comment on a posting.
														</p>
													</div>
												</div>
												<div className="relative flex items-start">
													<div className="flex h-6 items-center">
														<input
																id="service"
																name="service"
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
														/>
													</div>
													<div className="ml-3">
														<label htmlFor="service" className="text-sm font-medium leading-6 text-gray-900">
															Servicio recurrente
														</label>
														<p className="text-sm text-gray-500">Get notified when a candidate applies for a job.</p>
													</div>
												</div>
												<div className="relative flex items-start">
													<div className="flex h-6 items-center">
														<input
																id="maintenance"
																name="maintenance"
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
														/>
													</div>
													<div className="ml-3">
														<label htmlFor="maintenance" className="text-sm font-medium leading-6 text-gray-900">
															Mantenimiento mensual
														</label>
														<p className="text-sm text-gray-500">
															Get notified when a candidate accepts or rejects an offer.
														</p>
													</div>
												</div>
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
												<p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
												<div className="mt-4 space-y-4">
													<div className="flex items-center">
														<input
																id="high-value"
																name="client-type"
																type="radio"
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
																id="new-client"
																name="client-type"
																type="radio"
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
																id="new-contact"
																name="client-type"
																type="radio"
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
																id="recurrent-client"
																name="client-type"
																type="radio"
																className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
														/>
														<label
																htmlFor="recurrent-client"
																className="ml-3 block text-sm font-medium leading-6 text-gray-900"
														>
															Regular
														</label>
													</div>
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
								href={'/clientes'}
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
	)
}
