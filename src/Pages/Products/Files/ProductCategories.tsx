import {useContext, useState} from "react"
import Table from "../../../Components/Table/Table"
import ProductCategoryTable from "../../../Components/Products/ProductCategoryTable"
import Loading from "../../../Components/Layout/Loading/Loading"
import ProductContext from "../../../Context/ProductContext"

const ProductCategories = () => {
    const { loading, categories } = useContext(ProductContext)
    const [thead] = useState(["ID", "Slug", "Nombre"])

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