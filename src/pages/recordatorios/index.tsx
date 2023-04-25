import type {GetServerSidePropsContext, NextPage} from 'next'
import ListReminders from "@/components/ListReminders";
import Head from "next/head";
import {ReminderResponse} from "../../models/ReminderInterface";
import {getReminders} from "../../services/remindersService";
import {useEffect, useState} from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

interface ReminderProps {
	reminders: ReminderResponse[]
}

const Recordatorios = () => {
	const [reminders, setReminders] = useState<ReminderResponse[]>([]);
	useEffect(() => {
		async function getRemindersData() {
			const response = await getReminders();
			setReminders(response);
		}

		getRemindersData();
	}, [])
	const handleFormSubmit = (newData: ReminderResponse) => {
		setReminders((prevData: any) => [...prevData, newData]);
	};
	return (
			<>
				<Head>
					<title>Recordatorios</title>
				</Head>
				<div className="flex flex-col gap-3">
					<ListReminders onFormSubmit={handleFormSubmit} reminders={reminders} />
				</div>
			</>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session =  await getServerSession(context.req, context.res, authOptions);
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
export default Recordatorios
