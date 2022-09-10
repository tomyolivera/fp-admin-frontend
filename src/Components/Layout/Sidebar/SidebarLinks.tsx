import SidebarElement from "./SidebarElement";
import {AiFillTags, FaMoneyBillAlt, FaTasks, MdCategory, MdSpaceDashboard} from "react-icons/all";
import Divider from "./Divider";

const SidebarLinks = () => {
    return (
        <div>
            <SidebarElement title={"Dashboard"} href={"/dashboard"} Icon={MdSpaceDashboard} />
            <Divider />
            <SidebarElement title={"Productos"} />
            <SidebarElement title={"Listado Productos"} href={"/products"} Icon={FaTasks} />
            <SidebarElement title={"Categorias"} href={"/categories"} Icon={MdCategory} />
            <SidebarElement title={"Atributos"} href={"/attributes"} Icon={AiFillTags} />
            <Divider />
            <SidebarElement title={"Gastos"} href={"/bills"} Icon={FaMoneyBillAlt} />
        </div>
    )
}

export default SidebarLinks