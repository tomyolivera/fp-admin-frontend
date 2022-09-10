import {useContext} from "react";
import SidebarContext from "../../../Context/SidebarContext";
import {MdClose} from "react-icons/all";

const SidebarCloseButton = () => {
    const { setSidebarOpen } = useContext(SidebarContext)

    return (
        <div className={"px-2 text-white bg-gray-900 rounded-md cursor-pointer right-0"}
                onClick={() => setSidebarOpen(false)}
        >
            <div className={"absolute top-3 right-3 bg-gray-900 text-white rounded-md"}>
                <MdClose />
            </div>
        </div>
    )
}

export default SidebarCloseButton