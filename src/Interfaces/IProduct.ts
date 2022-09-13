export interface IProduct {
    sku: string
    name: string
    list_price: number
    price: number
    categories: IProductCategory[]
    attributes: IProductAttribute[]
}

export interface IProductCategory {
    id?: number
    slug: string
    name: string
}

export interface IProductAttribute {
    id?: number
    slug: string
    name: string
    values: string[]
}