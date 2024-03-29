import {forwardRef, useEffect, useRef, useState} from 'react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {Combobox} from '@headlessui/react'
import {ClientResponse} from "../../models/ClientInterface";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

interface Props {
	register: any;
	setValue: any;
	peopleValue: ClientResponse[]
	actualClient?: ClientResponse
}

const ClientComboInput = (({peopleValue, register, actualClient, setValue}: Props) => {
	const [query, setQuery] = useState('')
	const [selectedPerson, setSelectedPerson] = useState(actualClient ? actualClient : null)
	const filteredPeople =
			query === ''
					? peopleValue
					: peopleValue.filter((person) => {
						return person.nombre.toLowerCase().includes(query.toLowerCase())
					})

	useEffect(() => {
				if (actualClient) {
					setValue('clientId', actualClient.id);
				}
			}, [actualClient, setValue]
	)
	const handleValueChange = (value: ClientResponse) => {
		console.log(value)
		setSelectedPerson(value);
		setValue('clientId', value.id);
	};
	return (
			<Combobox as="div" {...register} value={selectedPerson} onChange={handleValueChange}
			          disabled={actualClient ? true : false}>
				<Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">Asigna un cliente</Combobox.Label>
				<div className="relative mt-2">
					<Combobox.Input
							className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							onChange={(event) => setQuery(event.target.value)}
							displayValue={(person: ClientResponse) => person?.nombre}
					/>
					<Combobox.Button
							className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
						<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
					</Combobox.Button>

					{filteredPeople.length > 0 && (
							<Combobox.Options
									className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{filteredPeople.map((person) => (
										<Combobox.Option
												key={person.id}
												value={person}
												className={({active}) =>
														classNames(
																'relative cursor-default select-none py-2 pl-8 pr-4',
																active ? 'bg-indigo-600 text-white' : 'text-gray-900'
														)
												}
										>
											{({active, selected}) => (
													<>
														<div className="flex">
															<span
																	className={classNames('truncate', selected ? 'font-semibold' : '')}>{person.nombre}</span>
															<span
																	className={classNames(
																			'ml-2 truncate text-gray-500',
																			active ? 'text-indigo-200' : 'text-gray-500'
																	)}
															>
																{person.correoElectronico}
															</span>
														</div>

														{selected && (
																<span
																		className={classNames(
																				'absolute inset-y-0 left-0 flex items-center pl-1.5',
																				active ? 'text-white' : 'text-indigo-600'
																		)}
																>
                        <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                      </span>
														)}
													</>
											)}
										</Combobox.Option>
								))}
							</Combobox.Options>
					)}
				</div>
			</Combobox>
	)
});
export default ClientComboInput;
