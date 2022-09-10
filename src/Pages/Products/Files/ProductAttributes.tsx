import {useContext, useEffect, useState} from "react"
import axios from "axios"

import UserContext from "../../../Context/UserContext"
import Table from "../../../Components/Table/Table"
import Button from "../../../Components/Form/Button"
import ProductAttributeTable from "../../../Components/Products/ProductAttributeTable";
import Loading from "../../../Components/Layout/Loading/Loading";
import {IProductAttribute} from "../../../Interfaces/IProduct";

const ProductAttributes = () => {
    const { token } = useContext(UserContext)
    const [attrs, setAttrs] = useState<IProductAttribute[]>([])
    const [loading, setLoading] = useState(true)
    const [thead] = useState(["ID", "Slug", "Nombre", "Valores"])

    const getAttrs = async () => {
        const res = await axios.get("http://localhost:8000/api/attributes", {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setAttrs(res.data.data)
    }

    useEffect(() => {
        (async () => {
            await getAttrs()
            setLoading(false)
        })()
    }, [])

    if(loading) return <Loading />

    return (
        <div>
            <Button href={"/attributes/add"} className={"button-blue"}>
                Añadir Atributo
            </Button>

            <Table head={thead}>
                {
                    attrs.map((attr, index) => (
                        <ProductAttributeTable {...attr} key={index} />
                    ))
                }
            </Table>
        </div>
    )
}

export default ProductAttributes