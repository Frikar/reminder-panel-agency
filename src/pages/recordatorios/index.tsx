import type {NextPage} from 'next'
import ListReminders from "@/components/ListReminders";
import Head from "next/head";

const Recordatorios: NextPage = () => {
	return (
			<>
				<Head>
					<title>Recordatorios</title>
				</Head>
				<div className="flex flex-col gap-3">
					<ListReminders/>
				</div>
			</>
	)
}

export default Recordatorios
