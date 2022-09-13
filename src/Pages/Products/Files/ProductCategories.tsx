import {useContext, useEffect, useState} from "react"
import axios from "axios"

import UserContext from "../../../Context/UserContext"
import {IProductCategory} from "../../../Interfaces/IProduct"
import Table from "../../../Components/Table/Table"
import ProductCategoryTable from "../../../Components/Products/ProductCategoryTable"
import Loading from "../../../Components/Layout/Loading/Loading"

const ProductCategories = () => {
    const { token } = useContext(UserContext)
    const [categories, setCategories] = useState<IProductCategory[]>([])
    const [loading, setLoading] = useState(true)
    const [thead] = useState(["ID", "Slug", "Nombre"])

    const getCategories = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/categories`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setCategories(res.data.data)
    }

    useEffect(() => {
        (async () => {
            await getCategories()
            setLoading(false)
        })()
    }, [])

    if(loading) return <Loading />

    return (
        <div>
            <Table
                head={thead}
                createButtonLabel={"Categoria"}
                hrefCreateButton={"/categories/add"}
                Element={ProductCategoryTable}
                elements={categories}
            />
        </div>
    )
}

export default ProductCategories