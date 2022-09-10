import {FaLayerGroup} from "react-icons/all";
import SidebarCloseButton from "./SidebarCloseButton";
import SidebarLogo from "./SidebarLogo";

const SidebarHeader = () => {
    return (
        <div className="relative p-2.5 mt-1 flex items-center">
            <SidebarLogo />
            { /* <SidebarCloseButton /> */ }
        </div>
    )
}

export default SidebarHeader