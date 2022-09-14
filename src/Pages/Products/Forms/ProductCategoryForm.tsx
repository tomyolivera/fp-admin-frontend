import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios";
import UserContext from "../../../Context/UserContext"
import {IProductCategory} from "../../../Interfaces/IProduct"
import ProductContext from "../../../Context/ProductContext";
import Button from "../../../Components/Form/Button";
import {Formik, Form} from "formik";
import Input from "../../../Components/Form/Input";
import InputArray from "../../../Components/Form/InputArray";

const ProductCategoryForm = () => {
    const { token } = useContext(UserContext)
    const { categories, setCategories } = useContext(ProductContext)
    const navigate = useNavigate()
    const [initialValues] = useState<IProductCategory>({
        name: "",
        slug: ""
    })

    const handleSubmit = async (values: IProductCategory) => {
        categories.push({id: categories.length + 1, ...values})
        setCategories(categories)
        await axios.post(`${import.meta.env.VITE_API_URL}/categories`, values, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        navigate("/categories")
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
                        <Button type={"submit"} className={"btn-indigo-compact"} disabled={isSubmitting} >
                            { isSubmitting ? "Cargando..." : "Guardar" }
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProductCategoryForm