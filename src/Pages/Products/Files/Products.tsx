import {useContext, useEffect, useState} from "react"
import axios from "axios"

import UserContext from "../../../Context/UserContext"
import {IProduct} from "../../../Interfaces/IProduct"
import Table from "../../../Components/Table/Table"
import Button from "../../../Components/Form/Button"
import ProductTable from "../../../Components/Products/ProductTable"
import Loading from "../../../Components/Layout/Loading/Loading";

const Products = () => {
    const { token } = useContext(UserContext)
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(true)
    const [thead] = useState(["SKU", "Nombre", "Precio", "Precio de lista"])

    const getProducts = async () => {
        const res = await axios.get("http://localhost:8000/api/products", {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setProducts(res.data.data)
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
            <Button href={"/products/add"} className={"button-blue"}>
                Añadir Producto
            </Button>

            <Table head={thead}>
                {
                    products.map((product, index) => (
                        <ProductTable {...product} key={index} />
                    ))
                }
            </Table>
        </div>
    )
}

export default Products