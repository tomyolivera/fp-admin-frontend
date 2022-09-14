import {useContext, useEffect, useState} from "react"
import axios from "axios"

import UserContext from "../../../Context/UserContext"
import Table from "../../../Components/Table/Table"
import ProductAttributeTable from "../../../Components/Products/ProductAttributeTable"
import Loading from "../../../Components/Layout/Loading/Loading"
import ProductContext from "../../../Context/ProductContext";

const ProductAttributes = () => {
    const { loading, attributes } = useContext(ProductContext)
    const [thead] = useState(["ID", "Slug", "Nombre", "Valores"])

    const handleEdit = (id: number) => {

    }

    const handleDelete = (id: number) => {

    }

    if(loading) return <Loading />

    return (
        <div>
            <Table
                head={thead}
                createButtonLabel={"Atributo"}
                hrefCreateButton={"/attributes/add"}
                Element={ProductAttributeTable}
                elements={attributes}
            />
        </div>
    )
}

export default ProductAttributes