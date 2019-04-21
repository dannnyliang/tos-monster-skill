import React from 'react';

import { PaginationItem, PaginationLink } from 'reactstrap';

function PaginationPages(props) {
  const { currentPage, totalPages, handleClick } = props;
  const displayPagesLimit = 7;

  let minPage, pageList;
  if (totalPages < displayPagesLimit) {
    // get minPage
    minPage = 1;

    // get pageList
    pageList = Array.from(new Array(totalPages)).map((_, idx) => idx + minPage);
  } else {
    // get minPage
    for (let i = 0; i <= Math.floor(displayPagesLimit / 2); i++) {
      minPage = currentPage - i;
      if (currentPage - i <= 1) break;
    }
    if (minPage + displayPagesLimit - 1 > totalPages)
      minPage = totalPages - displayPagesLimit + 1;

    // get pageList
    pageList = Array.from(new Array(displayPagesLimit)).map(
      (_, idx) => idx + minPage,
    );
  }

  return pageList.map(pageNum => (
    <PaginationItem key={pageNum} active={currentPage === pageNum}>
      <PaginationLink onClick={() => handleClick(pageNum)}>
        {pageNum}
      </PaginationLink>
    </PaginationItem>
  ));
}

export default PaginationPages;
