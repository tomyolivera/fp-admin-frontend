import TableHead from "./TableHead"
import {FC, ReactNode, useState} from "react"
import Button from "../Form/Button";
import Pagination from "./Pagination";

interface TableProps {
    head: Array<string>
    createButtonLabel?: string
    hrefCreateButton?: string
    Element: FC<any>
    elements: Array<any>
}

const Table = ({ head, createButtonLabel, hrefCreateButton, Element, elements }: TableProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentElements = elements.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    return (
        <>
            <div className={"flex flex-row gap-5 justify-between"}>
                {
                    createButtonLabel && <Button href={hrefCreateButton} className={"self-center btn-blue"}>
                        Añadir {createButtonLabel}
                    </Button>
                }

                <Pagination
                    paginate={paginate}
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                    totalPosts={elements.length}
                />
            </div>

            <div className="flex flex-col mt-5">
                <div className="overflow-x-auto">
                    <div className="w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className={"table-auto min-w-full divide-y divide-gray-200"}>
                                <TableHead head={head} />

                                <tbody className={"divide-y divide-gray-200 text-center"}>
                                    {
                                        currentElements.map((element: any, i: number) => (
                                            <Element key={i} {...element} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table