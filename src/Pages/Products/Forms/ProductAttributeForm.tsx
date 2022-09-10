import {useContext, useState} from "react"
import Form from "../../../Components/Form/Form"
import axios from "axios";
import UserContext from "../../../Context/UserContext";
import {useNavigate} from "react-router-dom";
import Button from "../../../Components/Form/Button";
import {IProductCategory} from "../../../Interfaces/IProduct";

const ProductAttributeForm = () => {
    const { token } = useContext(UserContext)
    const navigate = useNavigate()
    const [initialValues] = useState<IProductCategory>({
        name: "",
        slug: ""
    })

    const handleSubmit = async (values: any) => {
        await axios.post("http://localhost:8000/api/categories", values, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        navigate("/categories")
    }

    return (
        <>
            <Button className={"button-gray mb-5"} href={"/categories"}>Volver</Button>
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                buttonLabel={"Guardar"}
            />
        </>
    )
}

export default ProductAttributeForm