import {useContext, useEffect, useState} from "react"
import axios from "axios"
import UserContext from "../../../Context/UserContext"
import {IProduct} from "../../../Interfaces/IProduct"
import Table from "../../../Components/Table/Table"
import ProductTable from "../../../Components/Products/ProductTable"
import Loading from "../../../Components/Layout/Loading/Loading"
import ProductForm from "../Forms/ProductForm"
import Pagination from "../../../Components/Table/Pagination";

const Products = () => {
    const { token } = useContext(UserContext)
    const [products, setProducts] = useState<IProduct[]>([])
    const [thead] = useState(["SKU", "Nombre", "Precio", "Precio de lista"])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        const res = await axios.get("http://localhost:8000/api/products", {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setProducts(res.data.data)
    }

    const handleEdit = (id: number) => {

    }

    const handleDelete = (id: number) => {

    }

    useEffect(() => {
        (async () => {
            await getProducts()
            setLoading(false)
        })()
    }, [])

    if(loading) return <Loading />

    return (
        <div>
            <Table
                head={thead}
                createButtonLabel={"Producto"}
                hrefCreateButton={"/products/add"}
                Element={ProductTable}
                elements={products}
            />
        </div>
    )
}

export default Products