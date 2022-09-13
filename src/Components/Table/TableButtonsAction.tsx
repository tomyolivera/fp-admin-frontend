import Button from "../Form/Button";
import {IoMdTrash, MdEdit} from "react-icons/all";
import {useContext} from "react";
import ModalContext from "../../Context/ModalContext";

interface TableButtonsActionProps {
    element_id: number
}

const TableButtonsAction = () => {
    return (
        <div className={"flex justify-center gap-2"}>
            <Button onClick={() => {}} className={"btn-yellow text-xl"}>
                <MdEdit />
            </Button>
            <Button onClick={() => {}} className={"btn-red text-xl"}>
                <IoMdTrash />
            </Button>
        </div>
    )
}

export default TableButtonsAction