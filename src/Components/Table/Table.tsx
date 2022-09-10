import TableHead from "./TableHead"
import {ReactNode} from "react"

interface TableProps {
    head: Array<string>
    children: ReactNode
}

const Table = ({ head, children }: TableProps) => {
    return (
        <div className="flex flex-col mt-5">
            <div className="overflow-x-auto">
                <div className="w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className={"table-auto min-w-full divide-y divide-gray-200"}>
                            <TableHead head={head} />

                            <tbody className={"divide-y divide-gray-200 text-center"}>
                                { children }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table