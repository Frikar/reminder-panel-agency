import Link from "next/link";
import Head from "next/head";
import {ClientResponse} from "../models/ClientInterface";

interface ClientsProps {
	people: ClientResponse[]
}

export default function TableUser({people}: ClientsProps) {
	return (
			<>
				<div className="mt-4">
					<div className="sm:flex sm:items-center">
						<div className="sm:flex-auto">
							<h1 className="text-2xl font-semibold leading-6 text-gray-900">Clientes</h1>
							<p className="mt-2 text-sm text-gray-700">
								Listado de todos los clientes en el sistema
							</p>
						</div>
						<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
							<Link
									href={'/clientes/create'}
									type="button"
									className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Añadir cliente
							</Link>
						</div>
					</div>
					<div className="mt-8 flow-root">
						<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-indigo-200">
									<tr>
										<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-2">
											Nombre
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Compañía
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Estado
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
											Tipo
										</th>
										<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-2">
											<span className="sr-only">Edit</span>
										</th>
									</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
									{people.map((person: ClientResponse) => (
											<tr key={person.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-5">
													<div className="flex items-center">
														<div className="h-10 w-10 flex-shrink-0">
															<img className="h-10 w-10 rounded-full" src={person.avatar} alt=""/>
														</div>
														<div className="ml-4">
															<div className="font-medium text-gray-900">{person.nombre} {person.apellido}</div>
															<div className="text-gray-500">{person.correoElectronico}</div>
														</div>
													</div>
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													<div className="text-gray-900">{person.empresa}</div>
													<div className="text-gray-500 truncate w-32">{person.descripcion}</div>
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span
		                      className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {person.status}
                      </span>
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.tipoCuenta}</td>
												<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-10">
													<Link href={`/clientes/${person.id}`} className="text-indigo-600 hover:text-indigo-900">
														Ver<span className="sr-only">, {person.id}</span>
													</Link>
												</td>
											</tr>
									))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</>
	)
}

