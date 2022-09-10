import {useContext} from "react";
import SidebarContext from "../../../Context/SidebarContext";
import {FaBars} from "react-icons/all";

const SidebarOpenButton = () => {
    const { setSidebarOpen } = useContext(SidebarContext)

    return (
        <span
            className="text-white text-2xl left-4 cursor-pointer text-center"
            onClick={() => setSidebarOpen(true)}
        >
            <div className={"px-2 mt-5"}>
                <FaBars />
            </div>
        </span>
    )
}

export default SidebarOpenButton