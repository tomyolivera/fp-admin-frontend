import {useState, useEffect, createContext, ReactNode, useContext} from "react";
import {IProduct, IProductAttribute, IProductCategory} from "../Interfaces/IProduct";
import axios from "axios";
import UserContext from "./UserContext";
import Loading from "../Components/Layout/Loading/Loading";

interface ProductContextProps {
    loading: boolean
    products: IProduct[]
    setProducts: (products: IProduct[]) => void
    // getProducts: () => Promise<void>
    categories: IProductCategory[]
    setCategories: (categories: IProductCategory[]) => void
    // getCategories: () => Promise<void>
    attributes: IProductAttribute[]
    setAttributes: (attributes: IProductAttribute[]) => void
    // getAttributes: () => Promise<void>
}

const ProductContext = createContext<ProductContextProps>({
    loading: true,
    products: [],
    setProducts: () => {},
    // getProducts: async () => {},
    categories: [],
    setCategories: () => {},
    // getCategories: async () => {},
    attributes: [],
    setAttributes: () => {},
    // getAttributes: async () => {}
})

export default ProductContext

interface ProductProviderProps {
    children: ReactNode
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const { token } = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState<IProduct[]>([])
    const [categories, setCategories] = useState<IProductCategory[]>([])
    const [attributes, setAttributes] = useState<IProductAttribute[]>([])

    const getProducts = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setProducts(res.data.data)
    }

    const getCategories = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/categories`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setCategories(res.data.data)
    }

    const getAttributes = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/attributes`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        setAttributes(res.data.data)
    }

    useEffect(() => {
        (async () => {
            await getProducts()
            await getCategories()
            await getAttributes()
            setLoading(false)
        })()
    },[])

    return (
        <ProductContext.Provider value={{ loading, products, categories, attributes, setProducts, setCategories, setAttributes }}>
            {!loading && children}
        </ProductContext.Provider>
    )
}