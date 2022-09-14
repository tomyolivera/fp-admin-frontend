import Button from "../Form/Button";
import classNames from "classnames";
import {FaArrowLeft} from "react-icons/all";

interface PaginationProps {
    postsPerPage: number
    totalPosts: number
    paginate: (n: number) => void
    currentPage: number
}

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }: PaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={"text-gray-700 dark:text-gray-300"}>
            <div>
                <p className='text-sm'>
                    Showing
                    <span className='font-medium'>
                        {" "} {currentPage * postsPerPage - (postsPerPage - 1)} {" "}
                    </span>
                    to
                    <span className='font-medium'> {currentPage === pageNumbers.length ? totalPosts : currentPage * postsPerPage} </span>
                    of
                    <span className='font-medium'> {totalPosts} </span>
                    results
                </p>
            </div>
            <nav className='block'>
                <ul className='flex pl-0 rounded list-none flex-wrap border-2 dark:border-gray-600'>
                    <li>
                        {pageNumbers.map((number, i) => (
                            <span key={i}>
                                {
                                    i === 0 &&
                                    <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage <= 1} className={"rounded-none btn-white"}>
                                        Prev
                                    </Button>
                                }
                                <Button onClick={() => paginate(number)}
                                    className={classNames(`
                                    rounded-none
                                        ${currentPage === number
                                        ? "btn-blue-compact"
                                        : "btn-white"}
                                    `)}
                                    key={i}
                                >
                                    {number}
                                </Button>
                                {
                                    i >= pageNumbers.length - 1 &&
                                    <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage >= pageNumbers.length} className={"rounded-none btn-white"}>
                                        Next
                                    </Button>
                                }
                            </span>
                        ))}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination