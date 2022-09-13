import {IProduct} from "../../Interfaces/IProduct"
import TableButtonsAction from "../Table/TableButtonsAction"

const ProductTable = ({ sku, name, price, list_price }: IProduct) => {
    return (
        <tr>
            <td className={"px-6 py-4 whitespace-nowrap"}>{sku}</td>
            <td className={"px-6 py-4 whitespace-nowrap"}>{name}</td>
            <td className={"px-6 py-4 whitespace-nowrap"}>${price}</td>
            <td className={"px-6 py-4 whitespace-nowrap"}>${list_price}</td>
            <td className={"px-6 py-4 whitespace-nowrap"}><TableButtonsAction /></td>
        </tr>
    )
}

export default ProductTable