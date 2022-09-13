import {useContext, useEffect, useState} from "react"
import axios from "axios"

import UserContext from "../../../Context/UserContext"
import Table from "../../../Components/Table/Table"
import ProductAttributeTable from "../../../Components/Products/ProductAttributeTable"
import Loading from "../../../Components/Layout/Loading/Loading"
import {IProductAttribute} from "../../../Interfaces/IProduct"

const ProductAttributes = () => {
    const { token } = useContext(UserContext)
    const [attrs, setAttrs] = useState<IProductAttribute[]>([])
    const [loading, setLoading] = useState(true)
    const [thead] = useState(["ID", "Slug", "Nombre", "Valores"])

    const getAttrs = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/attributes`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setAttrs(res.data.data)
    }

    const handleEdit = (id: number) => {

    }

    const handleDelete = (id: number) => {

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
            <Table
                head={thead}
                createButtonLabel={"Atributo"}
                hrefCreateButton={"/attributes/add"}
                Element={ProductAttributeTable}
                elements={attrs}
            />
        </div>
    )
}

export default ProductAttributes