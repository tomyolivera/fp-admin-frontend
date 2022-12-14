import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

import FastForm from "../Components/Form/FastForm"
import UserContext from "../Context/UserContext"

interface ILogin {
    email: string
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const {setToken} = useContext(UserContext)
    const [error, setError] = useState<string>("")

    const initialValues: ILogin = {
        email: "matibjolivera@gmail.com",
        password: "Tuvieja123!"
    }

    const handleSubmit = async (values: ILogin) => {
        try {
            const res = await axios.post(`http://c1043.cloud.wiroos.net:8000/api/login`, values)

            localStorage.setItem("token", res.data.data.token)
            setToken(res.data.data.token)
            navigate("/products")
        } catch (e) {
            setError("Invalid credentials")
        }
    }

    return (
        <>
            <FastForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
                buttonLabel={"Login"}
            />
            {error && <span className="text-red-500">{error}</span>}
        </>
    )
}

export default Login