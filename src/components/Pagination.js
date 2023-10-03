import React from 'react';
import ReactPaginate from 'react-paginate';


const PaginationComponent = ({getAllPage, pagecount}) => {

  const pageCount =pagecount;
  const handlePageClick =(data)=>{
    console.log(data.selected +1)
    getAllPage(data.selected +1)
  }
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel=" &raquo;"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="&laquo;"
    containerClassName={'pagination justify-content-center p-3 mt-2'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    nextClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}

  />  )
}

export default PaginationComponent;