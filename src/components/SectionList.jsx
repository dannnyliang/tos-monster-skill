import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import pick from "lodash/fp/pick";
import isEmpty from "lodash/isEmpty";

import PaginationPages from "./PaginationPages";
import MonsterList from "./MonsterList";
import { propTypes as monsterTypes } from "./MonsterCard";
import { getFilteredMonsters } from "./utils/filters";
import { TagContext } from "../App";

function SectionList(props) {
  const { monsters, filters, initialPage, cardPerPage, searchStr } = props;
  const [currentPage, setPage] = useState(initialPage);
  const handleClick = pageNum => setPage(pageNum);

  let filteredMonsters;
  filteredMonsters = getFilteredMonsters(filters, monsters);

  const { monstersTags } = useContext(TagContext);

  if (!isEmpty(filters.TAGS)) {
    const filteredIds = Object.keys(monstersTags).filter(key =>
      filters.TAGS.every(tag => monstersTags[key].includes(tag))
    );
    filteredMonsters = filteredMonsters.filter(({ monsterId }) =>
      filteredIds.includes(monsterId)
    );
  }

  if (!isEmpty(searchStr)) {
    filteredMonsters = filteredMonsters.filter(monster => {
      const {
        monsterName,
        leaderName,
        leaderDescription,
        activeName,
        activeDescription
      } = pick(
        [
          "monsterName",
          "leaderName",
          "leaderDescription",
          "activeName",
          "activeDescription"
        ],
        monster
      );

      return (
        activeDescription.some(desc => desc.includes(searchStr)) ||
        activeName.some(name => name.includes(searchStr)) ||
        monsterName.includes(searchStr) ||
        leaderName.includes(searchStr) ||
        leaderDescription.includes(searchStr)
      );
    });
  }

  const totalPages = Math.ceil(filteredMonsters.length / cardPerPage);

  const sliceBegin = (currentPage - 1) * cardPerPage;
  const slicedMonsters = filteredMonsters.slice(
    sliceBegin,
    sliceBegin + cardPerPage
  );

  useEffect(() => {
    setPage(initialPage);
  }, [monsters, filters]);

  return filteredMonsters.length === 0 ? (
    <h1>找不到搜尋結果</h1>
  ) : (
    <>
      <MonsterList slicedMonsters={slicedMonsters} searchStr={searchStr} />
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
      <p className="text-center">最後更新時間：2019-4-18 16:16:17</p>
    </>
  );
}

SectionList.defaultProps = {
  initialPage: 1,
  cardPerPage: 15
};

SectionList.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.shape(monsterTypes)),
  filters: PropTypes.shape({
    ATTRIBUTES: PropTypes.arrayOf(PropTypes.string),
    RACES: PropTypes.arrayOf(PropTypes.string),
    STARS: PropTypes.arrayOf(PropTypes.string),
    TAGS: PropTypes.arrayOf(PropTypes.string)
  }),
  initialPage: PropTypes.number.isRequired,
  cardPerPage: PropTypes.number.isRequired
};

export default SectionList;
