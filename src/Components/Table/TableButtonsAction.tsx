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
            <Button disabled={true} onClick={() => {}} className={"btn-yellow-compact text-xl"}>
                <MdEdit />
            </Button>
            <Button disabled={true} onClick={() => {}} className={"btn-red-compact text-xl"}>
                <IoMdTrash />
            </Button>
        </div>
    )
}

export default TableButtonsAction