import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios";
import Form from "../../../Components/Form/Form"
import UserContext from "../../../Context/UserContext"
import {IProductCategory} from "../../../Interfaces/IProduct"
import ProductContext from "../../../Context/ProductContext";

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
        await axios.post("http://localhost:8000/api/categories", values, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        navigate("/categories")
    }

    return (
        <>
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                buttonLabel={"Guardar"}
                buttonVolverHref={"/categories"}
            />
        </>
    )
}

export default ProductCategoryForm