import {useContext} from "react"
import SidebarContext from "../../../Context/SidebarContext"
import Divider from "./Divider"
import SidebarLogo from "./SidebarHeader"
import SidebarOpenButton from "./SidebarOpenButton"
import SidebarLinks from "./SidebarLinks"

function Sidebar() {
    const { sidebarOpen } = useContext(SidebarContext)

    return (
        <div className={`sticky h-screen top-0 left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900`}>
            {
                sidebarOpen
                ? <div className={"text-gray-100 text-xl"}>
                        <SidebarLogo />
                        <Divider />
                        <SidebarLinks />
                </div>
                : <SidebarOpenButton />
            }
        </div>
    )
}

export default Sidebar