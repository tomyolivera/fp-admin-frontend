import SidebarElement from "./SidebarElement";
import {AiFillTags, FaMoneyBillAlt, FaTasks, MdCategory, MdSpaceDashboard} from "react-icons/all";
import Divider from "./Divider";
import {useContext} from "react";
import UserContext from "../../../Context/UserContext";

const SidebarLinks = () => {
    const { isAuthenticated } = useContext(UserContext)

    if(!isAuthenticated) return <div>
        <SidebarElement title={"Inicia sesión para continuar"} />
    </div>

    return (
        <div>
            <SidebarElement title={"Dashboard"} href={"/dashboard"} Icon={MdSpaceDashboard} disabled />
            <Divider />
            <SidebarElement title={"Pedidos"} />
            <SidebarElement title={"Pedidos"} href={"/orders"} Icon={FaTasks} disabled />
            <Divider />
            <SidebarElement title={"Productos"} />
            <SidebarElement title={"Productos"} href={"/products"} Icon={FaTasks} />
            <SidebarElement title={"Categorias"} href={"/categories"} Icon={MdCategory} />
            <SidebarElement title={"Atributos"} href={"/attributes"} Icon={AiFillTags} />
            <Divider />
            <SidebarElement title={"Administración"} />
            <SidebarElement title={"Costos"} href={"/bills"} Icon={FaMoneyBillAlt} disabled />
        </div>
    )
}

export default SidebarLinks