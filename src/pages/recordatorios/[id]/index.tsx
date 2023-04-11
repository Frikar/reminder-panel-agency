import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import DetailReminder from "@/components/DetailReminder";

const ClientDetail: NextPage = () => {
	const router = useRouter()
	const {id} = router.query
	return (
			<div className="flex flex-col gap-3">
				<DetailReminder/>
			</div>
	)
}

export default ClientDetail
