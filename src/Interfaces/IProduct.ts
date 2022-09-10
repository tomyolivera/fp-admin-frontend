export interface IProduct {
    sku: string
    name: string
    list_price: number
    price: number
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
    values: Array<string>
}