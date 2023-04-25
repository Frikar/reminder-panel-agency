import HomeStats from "@/components/HomeStats";
import HomeList from "@/components/HomeList";
import TransactionList from "@/components/TransactionList";
import Head from "next/head";
import {ReminderResponse} from "../models/ReminderInterface";
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {getFeaturedReminders} from "../services/homeServices";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

interface HomeProps {
	reminders: ReminderResponse[]
}
const Home = ({reminders}: HomeProps) => {
	return (
			<>
				<Head>
					<title>Inicio</title>
				</Head>
				<div className="flex flex-col gap-3">
					<HomeStats/>
					<HomeList remindersFeatured={reminders}/>
					<TransactionList/>
				</div>
			</>
	)
}
export const getServerSideProps: GetServerSideProps<HomeProps> = async (context: GetServerSidePropsContext) => {
	const session =  await getServerSession(context.req, context.res, authOptions);
	if (!session) {
		return {
			redirect: {
				destination: '/api/auth/signin',
				permanent: false
			}
		}
	}
	try {
		const reminders = await getFeaturedReminders()
		return {
			props: {
				reminders
			}
		}
	} catch (error) {
		console.error('Error trayendo información:', error);
		return {
			props: {
				reminders: []
			}
		}
	}
}

export default Home
