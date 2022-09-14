import {useContext} from "react"
import { Link } from 'react-router-dom'

import UserContext from "../../../Context/UserContext"
import HeaderAuthButtons from './HeaderAuthButtons'
import ButtonTheme from "../../ButtonTheme";

const Header = () => {
    return (
        <div className="sticky top-0 dark:bg-gray-800 bg-white mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between border-b-2 border-gray-100 dark:border-gray-600 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link to="/">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto sm:h-10"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </Link>
                </div>

                <div className={"flex gap-2"}>
                    <ButtonTheme />
                    <HeaderAuthButtons />
                </div>
            </div>
        </div>
    )
}

export default Header