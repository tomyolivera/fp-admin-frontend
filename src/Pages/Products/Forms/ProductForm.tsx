import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

import Form from "../../../Components/Form/Form"
import UserContext from "../../../Context/UserContext"
import {IProduct} from "../../../Interfaces/IProduct"

const ProductForm = () => {
    const { token } = useContext(UserContext)
    const navigate = useNavigate()
    const [initialValues] = useState<IProduct>({
        sku: "",
        name: "",
        price: 0,
        list_price: 0
    })

    const handleSubmit = async (values: any) => {
        await axios.post("http://localhost:8000/api/products", values, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        navigate("/products")
    }

    return (
        <>
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                buttonLabel={"Guardar"}
                buttonVolverHref={"/products"}
            />
        </>
    )
}

export default ProductForm