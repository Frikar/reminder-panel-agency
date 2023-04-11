import Link from "next/link";
import {CalendarIcon, MapPinIcon, UsersIcon, CurrencyDollarIcon} from '@heroicons/react/20/solid'
import {useState} from "react";
import FormReminderSidebar from "@/components/FormReminderSidebar";

const positions = [
	{
		id: 1,
		title: 'Back End Developer',
		status: 'Iniciado',
		clientEmail: 'diego@test.com',
		budget: 90,
		closeDate: '2020-01-07',
		closeDateFull: 'January 7, 2020',
	},
	{
		id: 2,
		title: 'Front End Developer',
		status: 'Iniciado',
		clientEmail: 'diego@test.com',
		budget: 90,
		closeDate: '2020-01-07',
		closeDateFull: 'January 7, 2020',
	},
	{
		id: 3,
		title: 'User Interface Designer',
		status: 'Iniciado',
		clientEmail: 'diego@test.com',
		budget: 80,
		closeDate: '2020-01-14',
		closeDateFull: 'January 14, 2020',
	},
]

export default function ListReminders() {
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
							{positions.map((position) => (
									<li key={position.id}>
										<Link href={`/recordatorios/${position.id}`} className="block hover:bg-gray-50">
											<div className="px-4 py-4 sm:px-6">
												<div className="flex items-center justify-between">
													<p className="truncate text-sm font-medium text-indigo-600">{position.title}</p>
													<div className="ml-2 flex flex-shrink-0">
														<p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
															{position.status}
														</p>
													</div>
												</div>
												<div className="mt-2 sm:flex sm:justify-between">
													<div className="sm:flex">
														<p className="flex items-center text-md text-gray-500">
															<CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
															                    aria-hidden="true"/>
															{position.budget}$
														</p>
														<p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
															<UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
															{position.clientEmail}
														</p>
													</div>
													<div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
														<CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
														<p>
															Closing on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
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
				<FormReminderSidebar open={open} setOpen={setOpen}/>
			</>
	)
}
