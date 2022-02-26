import React, { Component } from "react";
import _ from "loadsh"; //library for array, integer, objects

class Pagination extends Component {
  render() {
    const { itemsCount, pageSize } = this.props;
    let pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1); // generate array from 1 to 3+1=4 [not included] => [1,2,3]
    return (
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {pages.map((
            page // iterate throgh array.
          ) => (
            <li class="page-item">
              <a class="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
