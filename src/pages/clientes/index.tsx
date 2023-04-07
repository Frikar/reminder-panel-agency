import type {NextPage} from 'next'
import TableUser from "@/components/TableUser";

const Clientes: NextPage = () => {
	return (
			<div className="flex flex-col gap-3">
				<TableUser/>
			</div>
	)
}

export default Clientes
