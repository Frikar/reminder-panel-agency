import {ArrowDownIcon, ArrowUpIcon} from '@heroicons/react/20/solid'
import {CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon} from '@heroicons/react/24/outline'
import Link from "next/link";

const stats = [
	{id: 1, name: 'Clientes registrados', href: '/clientes', stat: '5', icon: UsersIcon, change: '122', changeType: 'increase'},
	{id: 2, name: 'Recordatorios pendientes', href: '/recordatorios', stat: '50', icon: EnvelopeOpenIcon, change: '5', changeType: 'increase'},
	{id: 3, name: 'Recordatorios enviados', href: '/recordatorios', stat: '20', icon: CursorArrowRaysIcon, change: '3', changeType: 'decrease'},
]

export default function HomeStats() {
	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ')
	}
	return (
			<div>
				<div>
					<h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
				</div>
				<h3 className="text-base font-semibold leading-6 text-gray-900 mt-2">Overview</h3>

				<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
					{stats.map((item) => (
							<div
									key={item.id}
									className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
							>
								<dt>
									<div className="absolute rounded-md bg-indigo-500 p-3">
										<item.icon className="h-6 w-6 text-white" aria-hidden="true"/>
									</div>
									<p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
								</dt>
								<dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
									<p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
									<p
											className={classNames(
													item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
													'ml-2 flex items-baseline text-sm font-semibold'
											)}
									>
										{item.changeType === 'increase' ? (
												<ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true"/>
										) : (
												<ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true"/>
										)}

										<span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
										{item.change}
									</p>
									<div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
										<div className="text-sm">
											<Link href={item.href} className="font-medium text-indigo-600 hover:text-indigo-500">
												{' '}
												Ver todos<span className="sr-only"> {item.name} stats</span>
											</Link>
										</div>
									</div>
								</dd>
							</div>
					))}
				</dl>
			</div>
	)
}
