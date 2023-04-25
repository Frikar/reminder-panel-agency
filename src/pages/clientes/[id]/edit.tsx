import {ClientResponse} from "../../../models/ClientInterface";
import {getClient} from "../../../services/clientsService";
import FormEditUser from "@/components/FormEditUser";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Head from "next/head";

interface ClientDetailProps {
	client: ClientResponse
}

const EditClient = ({client}: ClientDetailProps) => {
	return (
			<>
				<Head>
					<title>Editar cliente - {client.nombre} {client.apellido}</title>
				</Head>
				<div className="flex flex-col gap-3">
					<FormEditUser client={client}/>
				</div>
			</>
	)
}

export async function getServerSideProps(context: any) {
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
		const client = await getClient(id);
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


export default EditClient
