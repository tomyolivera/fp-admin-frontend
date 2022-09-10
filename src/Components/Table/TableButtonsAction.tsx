import Button from "../Form/Button";
import {IoMdTrash, MdEdit} from "react-icons/all";

interface TableButtonsActionProps {

}

const TableButtonsAction = ({}: TableButtonsActionProps) => {
    return (
        <div className={"flex justify-center gap-2"}>
            <Button className={"button-yellow text-xl"}>
                <MdEdit />
            </Button>
            <Button className={"button-red text-xl"}>
                <IoMdTrash />
            </Button>
        </div>
    )
}

export default TableButtonsAction