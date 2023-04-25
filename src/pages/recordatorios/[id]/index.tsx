import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import DetailReminder from "@/components/DetailReminder";
import {useEffect, useState} from "react";
import {ReminderResponse} from "../../../models/ReminderInterface";
import {getReminder} from "../../../services/remindersService";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {GetServerSidePropsContext} from "next";

const ClientDetail: NextPage = () => {
	const router = useRouter()
	const {id} = router.query
	const [reminder, setReminder] = useState<ReminderResponse>();
	useEffect(() => {
		async function getReminderData() {
			if (!id) return;
			const response = await getReminder(id as string);
			setReminder(response);
		}

		getReminderData();
	}, [id])

	const handleFormSubmit = (newData: ReminderResponse) => {
		setReminder(newData);
	};

	const handleStatusUpdate = (updatedReminder: ReminderResponse) => {
		setReminder(updatedReminder);
	}

	if (!reminder) {
		return <div>Loading...</div>
	}

	return (
			<div className="flex flex-col gap-3">
				<DetailReminder reminder={reminder} onFormSubmit={handleFormSubmit} onStatusUpdate={handleStatusUpdate}/>
			</div>
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

export default ClientDetail
