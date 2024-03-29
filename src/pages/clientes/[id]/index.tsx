import {useRouter} from 'next/router'
import DetailUser from "@/components/DetailUser";
import {ClientResponse} from "../../../models/ClientInterface";
import {getClient} from "../../../services/clientsService";
import FormEditUser from "@/components/FormEditUser";
import {GetServerSidePropsContext} from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Head from "next/head";

interface ClientDetailProps {
	client: ClientResponse
}

const ClientDetail = ({client}: ClientDetailProps) => {
	return (
			<>
				<Head>
					<title>Cliente - {client.nombre} {client.apellido}</title>
				</Head>
				<div className="flex flex-col gap-3">
					<DetailUser client={client}/>
				</div>
			</>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const {id} = context.query;
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
		const client = await getClient(id as string);
		return {
			props: {
				client
			}
		}
	} catch (error) {
		return {
			props: {
				client: {}
			}
		}
	}
}


export default ClientDetail
