import {FC, useContext, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarContext from "../../../Context/SidebarContext";

interface SidebarElementProps {
    title: string
    description?: string|boolean
    href?: string
    Icon?: FC
    disabled?: boolean
}

const SidebarElement = ({ title, description, href, Icon, disabled }: SidebarElementProps) => {
    const { _location, setLocation } = useContext(SidebarContext)

    if(!href || !Icon) {
        return (
            <div className={"flex flex-col w-full text-left pl-5 py-1 text-gray-500"}>
                <p className={"text-2xl"}>{title}</p>
                <cite className={"text-sm"}>{description}</cite>
            </div>
        )
    }

    const handleLinkClick = () => {
        if(disabled) return
        setLocation(href)
    }

    return (
        <Link to={disabled ? _location : href}
              className={`
                  p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer text-white dark:text-gray-300
                  ${_location.split("/")[1] === href.split("/")[1] && "bg-gray-700"}
                  hover:bg-gray-700 ${disabled && "hover:bg-gray-800 bg-gray-800 cursor-not-allowed"}
              `}
        >
            <Icon />
            <span className="text-[15px] ml-4 text-gray-200 dark:text-gray-400 font-bold">{title}</span>
        </Link>
    );
}

export default SidebarElement;