import {lazy, Suspense, useContext} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import UserContext from "./Context/UserContext"
import ModalContext from "./Context/ModalContext"

const Home = lazy(() => import("./Pages/Home"))
const Dashboard = lazy(() => import("./Pages/Dashboard"))
const Login = lazy(() => import("./Pages/Login"))

{/* Orders */}
const Orders = lazy(() => import("./Pages/Orders/Files/Orders"))

{/* Products & Categories & Attributes & Forms */}
const Products = lazy(() => import("./Pages/Products/Files/Products"))
const ProductForm = lazy(() => import("./Pages/Products/Forms/ProductForm"))
const ProductCategories = lazy(() => import("./Pages/Products/Files/ProductCategories"))
const ProductCategoryForm = lazy(() => import("./Pages/Products/Forms/ProductCategoryForm"))
const ProductAttributes = lazy(() => import("./Pages/Products/Files/ProductAttributes"))
const ProductAttributeForm = lazy(() => import("./Pages/Products/Forms/ProductAttributeForm"))

{/* Components */}
import Modal from "./Components/Layout/Modal/Modal"
import Loading from "./Components/Layout/Loading/Loading"

const AppRouter = () => {
    const { isAuthenticated } = useContext(UserContext)
    const { modalOpen, modalData } = useContext(ModalContext)

    return (
        <>
            { modalOpen && <Modal { ...modalData } /> }
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/login" element={<Login />}/>
                    {/* <Route path="*" element={<p>Error 404</p>} /> */}

                    {
                        isAuthenticated &&
                        <>
                            {/* Orders */}
                            <Route path="/orders" element={<Orders />}/>


                            {/* Products */}
                            <Route path="/products" element={<Products />}/>
                            <Route path="/products/add" element={<ProductForm />}/>
                            {/* Product Categories */}
                            <Route path="/categories" element={<ProductCategories />}/>
                            <Route path="/categories/add" element={<ProductCategoryForm />}/>
                            {/* Product Attributes */}
                            <Route path="/attributes" element={<ProductAttributes />}/>
                            <Route path="/attributes/add" element={<ProductAttributeForm />}/>
                        </>
                    }
                </Routes>
            </Suspense>
        </>
    )
}

export default AppRouter