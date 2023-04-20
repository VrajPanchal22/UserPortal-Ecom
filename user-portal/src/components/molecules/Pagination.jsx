import React from 'react'
import ReactPaginate from 'react-paginate'
import { LIMIT, PAGES_COUNT } from "../../constants/constants"

function Pagination({ totalCount=6, handlePageClick, currentPage }) {
    console.log(totalCount);
    return (
        <div className="d-flex justify-content-center align-items-center">
            <ReactPaginate
                containerClassName='pagination'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                activeClassName='active'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                breakLabel="..."
                nextLabel="&raquo;"
                previousLabel="&laquo;"
                forcePage={currentPage}
                onPageChange={handlePageClick}
                pageRangeDisplayed={Math.ceil(totalCount / LIMIT)}
                pageCount={Math.ceil(totalCount / LIMIT)}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Pagination