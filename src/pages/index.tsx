import type {NextPage} from 'next'
import TableUser from "@/components/TableUser";
import HomeStats from "@/components/HomeStats";
import HomeList from "@/components/HomeList";
import TransactionList from "@/components/TransactionList";
import Head from "next/head";

const Home: NextPage = () => {
	return (
			<>
				<Head>
					<title>Inicio</title>
				</Head>
				<div className="flex flex-col gap-3">
					<HomeStats/>
					<HomeList/>
					<TransactionList/>
				</div>
			</>
	)
}

export default Home
