import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import pipe from 'lodash/fp/pipe';
import prop from 'lodash/fp/prop';
import filter from 'lodash/fp/filter';
import isEmpty from 'lodash/isEmpty';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { FILTERS, labelToId } from '../constant';
import PaginationPages from './PaginationPages';
import MonsterList from './MonsterList';

const filterMonsters = (filters, monsters) => {
  const curryFilter = (rawPropName, filterGroupId) =>
    filter(monster => {
      const monsterProp = prop([rawPropName], monster);
      const filterGroup = prop([filterGroupId], filters);
      if (isEmpty(filterGroup)) return true;
      return filterGroup.includes(labelToId(filterGroupId, monsterProp));
    });

  const filterPipe = pipe(
    curryFilter(FILTERS.RACES.rawPropName, FILTERS.RACES.id),
    curryFilter(FILTERS.STARS.rawPropName, FILTERS.STARS.id),
    curryFilter(FILTERS.ATTRIBUTES.rawPropName, FILTERS.ATTRIBUTES.id),
  );

  return filterPipe(monsters);
};

function SectionList(props) {
  const { monsters, filters, initialPage, cardPerPage } = props;
  const [currentPage, setPage] = useState(initialPage);
  const handleClick = pageNum => setPage(pageNum);

  const filteredMonsters = filterMonsters(filters, monsters);
  const totalPages = Math.ceil(filteredMonsters.length / cardPerPage);

  const sliceBegin = (currentPage - 1) * cardPerPage;
  const slicedMonsters = filteredMonsters.slice(
    sliceBegin,
    sliceBegin + cardPerPage,
  );

  useEffect(() => {
    setPage(initialPage);
  }, [monsters, filters]);

  return filteredMonsters.length === 0 ? (
    <h1>找不到搜尋結果</h1>
  ) : (
    <>
      <MonsterList slicedMonsters={slicedMonsters} />
      <Pagination className="d-flex justify-content-center">
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink first onClick={() => setPage(1)} />
        </PaginationItem>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            previous
            onClick={() => setPage(currentPage => currentPage - 1)}
          />
        </PaginationItem>
        <PaginationPages
          currentPage={currentPage}
          totalPages={totalPages}
          handleClick={handleClick}
        />
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink
            next
            onClick={() => setPage(currentPage => currentPage + 1)}
          />
        </PaginationItem>
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink last onClick={() => setPage(totalPages)} />
        </PaginationItem>
      </Pagination>
    </>
  );
}

SectionList.defaultProps = {
  initialPage: 1,
  cardPerPage: 15,
};

SectionList.propTypes = {
  monsters: PropTypes.array,
  filters: PropTypes.shape({
    ATTRIBUTES: PropTypes.arrayOf(PropTypes.string),
    RACES: PropTypes.arrayOf(PropTypes.string),
    STARS: PropTypes.arrayOf(PropTypes.string),
    TAGS: PropTypes.arrayOf(PropTypes.string),
  }),
  initialPage: PropTypes.number.isRequired,
  cardPerPage: PropTypes.number.isRequired,
};

export default SectionList;
