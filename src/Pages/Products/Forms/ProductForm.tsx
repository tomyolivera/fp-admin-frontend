import {useContext, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

import Form from "../../../Components/Form/Form"
import UserContext from "../../../Context/UserContext"
import {IProduct, IProductAttribute, IProductCategory} from "../../../Interfaces/IProduct"
import {Field, Formik, Form as FormikForm, FieldArray} from "formik";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/Button";
import Loading from "../../../Components/Layout/Loading/Loading";
import {FaMinus, FaPlus} from "react-icons/all";

const ProductForm = () => {
    const { token } = useContext(UserContext)
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [attributes, setAttributes] = useState([])
    const [loading, setLoading] = useState(true)
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

    const getCategories = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/categories`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setCategories(res.data.data)
    }

    const getAttributes = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/attributes`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setAttributes(res.data.data)
    }

    useEffect(() => {
        (async () => {
            await getCategories()
            await getAttributes()
            setLoading(false)
        })()
    }, [])

    const handleSubmit = async (values: any) => {
        await axios.post(`${import.meta.env.VITE_API_URL}/products`, values, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        navigate("/products")
    }

    if(loading) return <Loading />

    return (
        <div className={"py-3"}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ values, isSubmitting }) => (
                    <FormikForm className="flex flex-col gap-y-2">
                        <Input name={"sku"} placeholder={"SKU"} />
                        <Input name={"name"} placeholder={"Nombre"} />
                        <Input type={"number"} name={"price"} placeholder={"$1000"} />
                        <Input type={"number"} name={"list_price"} placeholder={"$1000"} />

                        <label htmlFor={"categories"} className={"text-sm font-medium text-gray-700"}>Categorias</label>
                        <FieldArray name={"categories"}>
                            {({ push, remove }) => (
                                <div>
                                    {values.categories.map((category: IProductCategory, index: number) => (
                                        <div key={index}>
                                            <p>Categoria {index + 1}</p>
                                            <Field name={`categories.${index}`} as={"select"} className={"my-2 input"}>
                                                <option value={""}>Seleccionar categoría</option>
                                                {
                                                    categories.map(({name, id, slug}: IProductCategory) => (
                                                        <option key={id} value={id}>{name}</option>
                                                    ))
                                                }
                                            </Field>
                                            {
                                                index > 0 && <Button className={"btn-red mt-2"} type="button" onClick={() => remove(index)}>
                                                <FaMinus />
                                                </Button>
                                            }
                                        </div>
                                    ))}
                                    <Button className={"btn-green my-2"} type="button" onClick={() => push("")}>
                                        <FaPlus />
                                    </Button>
                                </div>
                            )}
                        </FieldArray>
                        <label htmlFor={"attributes"} className={"text-sm font-medium text-gray-700"}>Atributos</label>
                        <FieldArray name={"attributes"}>
                            {({ push, remove }) => (
                                <div>
                                    {values.attributes.map((attribute: IProductAttribute, index: number) => (
                                        <div key={index}>
                                            <p>Atributo {index + 1}</p>
                                            <Field name={`attributes.${index}`} as={"select"} className={"my-2 input"}>
                                                <option value={""}>Seleccionar atributo</option>
                                                {
                                                    attributes.map(({name, id}: IProductAttribute) => (
                                                        <option key={id} value={id}>{name}</option>
                                                    ))
                                                }
                                            </Field>
                                            {
                                                index > 0 && <Button className={"btn-red mt-2"} type="button" onClick={() => remove(index)}>
                                                    <FaMinus />
                                                </Button>
                                            }
                                        </div>
                                    ))}
                                    <Button className={"btn-green my-2"} type="button" onClick={() => push("")}>
                                        <FaPlus />
                                    </Button>
                                </div>
                            )}
                        </FieldArray>

                        <Button type={"submit"} className={"btn-indigo-compact"} disabled={isSubmitting} >
                            { isSubmitting ? "Cargando..." : "Guardar" }
                        </Button>
                    </FormikForm>
                )}
            </Formik>
        </div>
    )
}

        // <Form
        //     initialValues={initialValues}
        //     onSubmit={handleSubmit}
        //     buttonLabel={"Guardar"}
        //     buttonVolverHref={"/products"}
        // />

export default ProductForm
