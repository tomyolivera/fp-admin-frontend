import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import { Formik, Form } from "formik"
import axios from "axios"

import UserContext from "../../../Context/UserContext"
import {IProductAttribute} from "../../../Interfaces/IProduct"
import ProductContext from "../../../Context/ProductContext"
import Button from "../../../Components/Form/Button"
import Input from "../../../Components/Form/Input"
import InputArray from "../../../Components/Form/InputArray"

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
        <div className={"py-3"}>
            <Button className={"btn-gray mb-5"} href={"/products"}>Volver</Button>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ values, isSubmitting }) => (
                    <Form className="flex flex-col gap-y-2">
                        <div className={"grid grid-cols-12 gap-2"}>
                            <div className={"col-span-12 md:col-span-6"}>
                                <Input name={"name"} placeholder={"Nombre"} label={"Nombre"} />
                            </div>
                            <div className={"col-span-12 md:col-span-6"}>
                                <Input name={"slug"} placeholder={"Slug"} label={"Slug"} />
                            </div>
                        </div>

                        <InputArray name={"values"} value={values.values} label={"Valores"} />

                        <Button type={"submit"} className={"btn-indigo-compact"} disabled={isSubmitting} >
                            { isSubmitting ? "Cargando..." : "Guardar" }
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProductAttributeForm