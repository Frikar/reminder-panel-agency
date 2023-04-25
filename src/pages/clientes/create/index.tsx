import type {NextPage} from 'next'
import FormUser from "@/components/FormUser";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {GetServerSidePropsContext} from "next";
import Head from "next/head";

const CreateCliente: NextPage = () => {
	return (
			<>
				<Head>
					<title>Crear Cliente</title>
				</Head>
				<div className="flex flex-col gap-3">
					<FormUser/>
				</div>
			</>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions);
	if (!session) {
		return {
			redirect: {
				destination: '/api/auth/signin',
				permanent: false
			}
		}
	}
	return {
		props: {},
	};
}

export default CreateCliente
