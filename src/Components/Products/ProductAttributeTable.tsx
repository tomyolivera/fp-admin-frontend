import {IProductAttribute} from "../../Interfaces/IProduct"
import TableButtonsAction from "../Table/TableButtonsAction";

const ProductAttributeTable = ({ id, slug, name, values }: IProductAttribute) => {
    return (
        <tr>
            <td className={"px-6 py-4 whitespace-nowrap"}>{id}</td>
            <td className={"px-6 py-4 whitespace-nowrap"}>{slug}</td>
            <td className={"px-6 py-4 whitespace-nowrap"}>{name}</td>
            <td className={"px-6 py-4 whitespace-nowrap"}>{values.map(v => (v)).join(' - ')}</td>
            <td className={"px-6 py-4 whitespace-nowrap"}><TableButtonsAction /></td>
        </tr>

    )
}

export default ProductAttributeTable