import {useContext, useState} from "react"
import axios from "axios"

import Form from "../../../Components/Form/Form"
import UserContext from "../../../Context/UserContext"
import {IProductAttribute} from "../../../Interfaces/IProduct"
import {useNavigate} from "react-router-dom";

interface ProductAttributeFormProps {
    values?: IProductAttribute
    getAttrs: () => Promise<void>
    setInForm: (inForm: boolean) => void
}

const ProductAttributeForm = ({values, setInForm, getAttrs}: ProductAttributeFormProps) => {
    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    const [initialValues] = useState<IProductAttribute>(values || {
        name: "",
        slug: "",
        values: [""]
    })

    const handleSubmit = async (values: any) => {
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