import {useContext, useState} from "react"
import axios from "axios"

import Form from "../../../Components/Form/Form"
import UserContext from "../../../Context/UserContext"
import {IProductAttribute} from "../../../Interfaces/IProduct"

interface ProductAttributeFormProps {
    values?: IProductAttribute
    getAttrs: () => Promise<void>
    setInForm: (inForm: boolean) => void
}

const ProductAttributeForm = ({values, setInForm, getAttrs}: ProductAttributeFormProps) => {
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
        await getAttrs()
        setInForm(false)
    }

    return (
        <>
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                buttonLabel={"Guardar"}
                setInForm={setInForm}
                arr={initialValues.values}
            />
        </>
    )
}

export default ProductAttributeForm