import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import DetailUser from "@/components/DetailUser";

const ClientDetail: NextPage = () => {
	const router = useRouter()
	const {id} = router.query
	return (
			<div className="flex flex-col gap-3">
				<DetailUser/>
			</div>
	)
}

export default ClientDetail
