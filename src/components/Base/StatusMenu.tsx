import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {
	ChevronDownIcon,
	CheckIcon,
	PauseCircleIcon,
	HeartIcon,
	TrashIcon,
	PlayCircleIcon
} from '@heroicons/react/20/solid'
import {
	deleteReminder,
	finishReminder,
	pauseReminder,
	pinReminder,
	unpauseReminder
} from "../../services/remindersService";
import {useRouter} from "next/router";
import {ReminderResponse} from "../../models/ReminderInterface";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

interface Props {
	reminder: ReminderResponse
	onStatusUpdate: (updatedReminder: ReminderResponse) => void
}

export default function StatusMenu({reminder, onStatusUpdate}: Props) {
	const router = useRouter()
	const handleDelete = async () => {
		await deleteReminder(reminder.id)
		await router.push('/recordatorios')
	}
	const handleFeatured = async () => {
		await pinReminder(reminder.id)
	}
	const handlePause = async () => {
		await pauseReminder(reminder.id)
		onStatusUpdate({...reminder, status: 'Pausado'})
	}
	const handleUnpause = async () => {
		await unpauseReminder(reminder.id)
		onStatusUpdate({...reminder, status: 'Iniciado'})
	}

	const handleComplete = async () => {
		await finishReminder(reminder.id)
		onStatusUpdate({...reminder, status: 'Completado'})
	}
	return (
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button
							className="inline-flex ml-3 w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-300 hover:bg-gray-50">
						Opciones
						<ChevronDownIcon className="-mr-1 h-5 w-5 text-indigo-400" aria-hidden="true"/>
					</Menu.Button>
				</div>

				<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items
							className="absolute -right-3 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							<Menu.Item>
								{({active}) => (
										<button
												onClick={() => handleComplete()}
												className={classNames(
														active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
														'group flex items-center px-4 py-2 text-sm'
												)}
										>
											<CheckIcon
													className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
													aria-hidden="true"
											/>
											Marcar completado
										</button>
								)}
							</Menu.Item>
							{reminder.status === 'Pausado' ? (
									<Menu.Item>
										{({active}) => (
												<button
														onClick={() => handleUnpause()}
														className={classNames(
																active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
																'group flex items-center px-4 py-2 text-sm'
														)}
												>
													<PlayCircleIcon
															className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
															aria-hidden="true"
													/>
													Reanudar
												</button>
										)}
									</Menu.Item>
							) : (
									<Menu.Item>
										{({active}) => (
												<button
														onClick={() => handlePause()}
														className={classNames(
																active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
																'group flex items-center px-4 py-2 text-sm'
														)}
												>
													<PauseCircleIcon
															className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
															aria-hidden="true"
													/>
													Pausar
												</button>
										)}
									</Menu.Item>
							)}
						</div>
						<div className="py-1">
							<Menu.Item>
								{({active}) => (
										<button
												onClick={() => handleFeatured()}
												className={classNames(
														active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
														'group flex items-center px-4 py-2 text-sm'
												)}
										>
											<HeartIcon
													className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
													aria-hidden="true"
											/>
											Fijar
										</button>
								)}
							</Menu.Item>
						</div>
						<div className="py-1">
							<Menu.Item>
								{({active}) => (
										<button
												onClick={() => handleDelete()}
												className={classNames(
														active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
														'group flex items-center px-4 py-2 text-sm'
												)}
										>
											<TrashIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true"/>
											Eliminar
										</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
	)
}
