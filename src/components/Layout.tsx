import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {signOut, useSession} from "next-auth/react";
import {
	Bars3Icon,
	CalendarIcon,
	ChartBarIcon,
	FolderIcon,
	HomeIcon,
	InboxIcon,
	UsersIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
	{name: 'Inicio', href: '/', icon: HomeIcon, current: true},
	{name: 'Clientes', href: '/clientes', icon: UsersIcon, current: false},
	{name: 'Recordatorios', href: '/recordatorios', icon: FolderIcon, current: false},
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

type Props = {
	children: React.ReactNode
}

export default function Layout({children}: Props) {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const {data: session} = useSession();
	if (session) {
		return (
				<div>
					<Transition.Root show={sidebarOpen} as={Fragment}>
						<Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
							<Transition.Child
									as={Fragment}
									enter="transition-opacity ease-linear duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="transition-opacity ease-linear duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
							>
								<div className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
							</Transition.Child>

							<div className="fixed inset-0 z-40 flex">
								<Transition.Child
										as={Fragment}
										enter="transition ease-in-out duration-300 transform"
										enterFrom="-translate-x-full"
										enterTo="translate-x-0"
										leave="transition ease-in-out duration-300 transform"
										leaveFrom="translate-x-0"
										leaveTo="-translate-x-full"
								>
									<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
										<Transition.Child
												as={Fragment}
												enter="ease-in-out duration-300"
												enterFrom="opacity-0"
												enterTo="opacity-100"
												leave="ease-in-out duration-300"
												leaveFrom="opacity-100"
												leaveTo="opacity-0"
										>
											<div className="absolute top-0 right-0 -mr-12 pt-2">
												<button
														type="button"
														className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
														onClick={() => setSidebarOpen(false)}
												>
													<span className="sr-only">Close sidebar</span>
													<XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
												</button>
											</div>
										</Transition.Child>
										<div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
											<div className="flex flex-shrink-0 items-center px-4">
												<img
														className="h-8 w-auto"
														src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
														alt="Your Company"
												/>
											</div>
											<nav className="mt-5 space-y-1 px-2">
												{navigation.map((item) => (
														<Link
																key={item.name}
																href={item.href}
																onClick={() => setSidebarOpen(false)}
																className={classNames(
																		item.current
																				? 'bg-gray-900 text-white'
																				: 'text-gray-300 hover:bg-gray-700 hover:text-white',
																		'group flex items-center rounded-md px-2 py-2 text-base font-medium'
																)}
														>
															<item.icon
																	className={classNames(
																			item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
																			'mr-4 h-6 w-6 flex-shrink-0'
																	)}
																	aria-hidden="true"
															/>
															{item.name}
														</Link>
												))}
											</nav>
										</div>
										<div className="flex flex-shrink-0 bg-gray-700 p-4">
											<div className="group block flex-shrink-0">
												<div className="flex items-center">
													<div>
														<img
																className="inline-block h-10 w-10 rounded-full"
																src={session.user?.image as string}
																alt=""
														/>
													</div>
													<div className="ml-3">
														<p className="text-base font-medium text-white">{session.user?.name}</p>
														<p className="text-sm font-medium text-red-300 group-hover:text-red-400">Cerrar sesión</p>
													</div>
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
								<div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
							</div>
						</Dialog>
					</Transition.Root>

					{/* Static sidebar for desktop */}
					<div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
						{/* Sidebar component, swap this element with another sidebar if you like */}
						<div className="flex min-h-0 flex-1 flex-col bg-gray-800">
							<div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
								<div className="flex flex-shrink-0 items-center px-4">
									{/*<img*/}
									{/*		className="h-8 w-auto"*/}
									{/*		src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"*/}
									{/*		alt="Your Company"*/}
									{/*/>*/}
								</div>
								<nav className="mt-5 flex-1 space-y-1 px-2">
									{navigation.map((item) => (
											<Link
													key={item.name}
													href={item.href}
													className={classNames(
															item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
															'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
													)}
											>
												<item.icon
														className={classNames(
																item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
																'mr-3 h-6 w-6 flex-shrink-0'
														)}
														aria-hidden="true"
												/>
												{item.name}
											</Link>
									))}
								</nav>
							</div>
							<div className="flex flex-shrink-0 bg-gray-700 p-4">
								<div className="group block w-full flex-shrink-0">
									<div className="flex items-center">
										<div>
											<img
													className="inline-block h-9 w-9 rounded-full"
													src={session.user?.image || ''}
													alt=""
											/>
										</div>
										<div className="ml-3">
											<p className="text-sm font-medium text-white">{session.user?.name}</p>
											<p onClick={() => signOut({callbackUrl: '/'})}
											   className="text-xs font-medium text-red-300 group-hover:text-red-400">Cerrar sesión</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-1 flex-col lg:pl-64">
						<div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden">
							<button
									type="button"
									className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									onClick={() => setSidebarOpen(true)}
							>
								<span className="sr-only">Open sidebar</span>
								<Bars3Icon className="h-6 w-6" aria-hidden="true"/>
							</button>
						</div>
						<main className="flex-1">
							<div className="py-6">
								<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
							</div>
						</main>
					</div>
				</div>
		)
	}
	return (
			<>
				No autorizado
			</>
	)
}
