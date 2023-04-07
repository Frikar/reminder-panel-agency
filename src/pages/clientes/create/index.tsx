import type {NextPage} from 'next'
import FormUser from "@/components/FormUser";

const CreateCliente: NextPage = () => {
	return (
			<div className="flex flex-col gap-3">
				<FormUser/>
			</div>
	)
}

export default CreateCliente
