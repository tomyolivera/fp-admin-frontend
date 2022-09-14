import {useContext, useState} from "react"
import axios from "axios"

import Form from "../../../Components/Form/Form"
import UserContext from "../../../Context/UserContext"
import {IProductAttribute} from "../../../Interfaces/IProduct"
import {useNavigate} from "react-router-dom";
import ProductContext from "../../../Context/ProductContext";

const ProductAttributeForm = () => {
    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    const { attributes, setAttributes } = useContext(ProductContext)
    const [initialValues] = useState<IProductAttribute>( {
        name: "",
        slug: "",
        values: [""]
    })

    const handleSubmit = async (values: IProductAttribute) => {
        attributes.push({id: attributes.length + 1, ...values})
        setAttributes(attributes)
        await axios.post("http://localhost:8000/api/attributes", values, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        navigate("/attributes")
    }

    return (
        <>
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                buttonLabel={"Guardar"}
                buttonVolverHref={"/attributes"}
            />
        </>
    )
}

export default ProductAttributeForm