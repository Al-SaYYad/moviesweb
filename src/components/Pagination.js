import ReactPaginate from "react-paginate";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ getPage, pageCount }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName="page-item"
      pageLinkClassName="page-link no-select"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link no-select"
      nextLinkClassName="page-link no-select"
      breakClassName="page-item"
      breakLinkClassName="page-link no-select"
      activeClassName="active"
    />
  );
};

export default PaginationComponent;
