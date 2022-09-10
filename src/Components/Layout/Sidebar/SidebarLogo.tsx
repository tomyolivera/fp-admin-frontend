import {FaLayerGroup} from "react-icons/all";

const SidebarLogo = () => {
    return (
        <div className={"flex items-center text-xl px-2"}>
            <div className={"text-blue-500"}>
                <FaLayerGroup />
            </div>
            <h1 className="font-bold text-gray-200 ml-3">Admin - FP</h1>
        </div>
    )
}

export default SidebarLogo