import {useContext, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import {Formik, Form} from "formik"
import axios from "axios"

import UserContext from "../../../Context/UserContext"
import {IProduct, IProductAttribute, IProductCategory} from "../../../Interfaces/IProduct"
import Input from "../../../Components/Form/Input"
import Button from "../../../Components/Form/Button"
import InputArraySelect from "../../../Components/Form/InputArraySelect"
import ProductContext from "../../../Context/ProductContext"

const ProductForm = () => {
    const { token } = useContext(UserContext)
    const { products, categories, attributes, setProducts } = useContext(ProductContext)
    const navigate = useNavigate()
    const [initialValues] = useState<IProduct>({
        sku: "",
        name: "",
        price: 0,
        list_price: 0,
        // @ts-ignore
        categories: [""],
        // @ts-ignore
        attributes: [""]
    })

    const handleSubmit = async (values: IProduct) => {
        products.push(values)
        setProducts(products)
        await axios.post(`${import.meta.env.VITE_API_URL}/products`, values, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        navigate("/products")
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
                                <Input name={"sku"} placeholder={"SKU"} label={"SKU"} />
                            </div>
                            <div className={"col-span-12 md:col-span-6"}>
                                <Input name={"name"} placeholder={"Nombre"} label={"Nombre"} />
                            </div>
                        </div>

                        <div className={"grid grid-cols-12 gap-2"}>
                            <div className={"col-span-12 md:col-span-6"}>
                                <Input type={"number"} name={"price"} label={"Precio"} placeholder={"$1000"} />
                            </div>
                            <div className={"col-span-12 md:col-span-6"}>
                                <Input type={"number"} name={"list_price"} label={"Precio de lista"} placeholder={"$1000"} />
                            </div>
                        </div>

                        <InputArraySelect
                            name={"categories"}
                            element={categories}
                            value={values.categories}
                            sp_name={"categoria"}
                            label={"Categorias"}
                        />

                        <InputArraySelect
                            name={"attributes"}
                            element={attributes}
                            value={values.attributes}
                            sp_name={"atributo"}
                            label={"Atributos"}
                        />

                        <Button type={"submit"} className={"btn-indigo-compact"} disabled={isSubmitting} >
                            { isSubmitting ? "Cargando..." : "Guardar" }
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProductForm
