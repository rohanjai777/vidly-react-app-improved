import React, { Component } from "react";
import _ from "loadsh"; //library for array, integer, objects
import propTypes from "prop-types";

class Pagination extends Component {
  render() {
    const { itemsCount, pageSize, onPageChange, currentPage } = this.props;
    let pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1); // generate array from 1 to 3+1=4 [not included] => [1,2,3]

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((
            page // iterate throgh array.
          ) => (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
              onClick={() => onPageChange(page)}
            >
              <a className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired
};

export default Pagination;
