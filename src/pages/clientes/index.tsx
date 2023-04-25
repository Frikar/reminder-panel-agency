import type {GetServerSideProps, NextPage} from 'next'
import TableUser from "@/components/TableUser";
import {getClients} from "../../services/clientsService";
import {ClientResponse} from "../../models/ClientInterface";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {GetServerSidePropsContext} from "next";
import Head from "next/head";

interface ClientsProps {
	clients: ClientResponse[]
}

const Clientes = ({clients}: ClientsProps) => {
	return (
			<>
				<Head>
					<title>Clientes</title>
				</Head>
				<div className="flex flex-col gap-3">
					<TableUser people={clients}/>
				</div>
			</>
	)
}

export const getServerSideProps: GetServerSideProps<ClientsProps> = async (context: GetServerSidePropsContext) => {
	const session = await getServerSession(context.req, context.res, authOptions);
	if (!session) {
		return {
			redirect: {
				destination: '/api/auth/signin',
				permanent: false
			}
		}
	}
	try {
		const clients = await getClients()
		return {
			props: {
				clients
			}
		}
	} catch (error) {
		console.error('Error fetching clients:', error);
		return {
			props: {
				clients: []
			}
		}
	}
}

export default Clientes

