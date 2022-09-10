import {useContext, useState} from "react"
import Form from "../../../Components/Form/Form"
import axios from "axios";
import UserContext from "../../../Context/UserContext";
import {useNavigate} from "react-router-dom";
import Button from "../../../Components/Form/Button";
import {IProduct} from "../../../Interfaces/IProduct";

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
        const res = await axios.post("http://localhost:8000/api/products", values, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        navigate("/products")
    }

    return (
        <>
            <Button className={"button-gray mb-5"} href={"/products"}>Volver</Button>
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                buttonLabel={"Guardar"}
            />
        </>
    )
}

export default ProductForm