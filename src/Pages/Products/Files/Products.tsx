import {useContext, useEffect, useState} from "react"
import axios from "axios"
import UserContext from "../../../Context/UserContext"
import {IProduct} from "../../../Interfaces/IProduct"
import Table from "../../../Components/Table/Table"
import ProductTable from "../../../Components/Products/ProductTable"
import Loading from "../../../Components/Layout/Loading/Loading"
import ProductContext from "../../../Context/ProductContext";

const Products = () => {
    const { loading, products } = useContext(ProductContext)
    const [thead] = useState(["SKU", "Nombre", "Precio", "Precio de lista"])

    const handleEdit = (id: number) => {

    }

    const handleDelete = (id: number) => {

    }

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