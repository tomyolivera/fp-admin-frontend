import {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"

const SubHeader = () => {
    const { pathname } = useLocation()
    const [title] = useState(pathname.replace("/", "").toUpperCase())

    return (
        <div className={"flex justify-center py-8 bg-white shadow-md"}>
            <h1 className={"text-3xl font-bold font-medium"}>{ title || "Home" }</h1>
        </div>
    )
}

export default SubHeader