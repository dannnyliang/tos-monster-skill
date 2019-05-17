import React from "react";
import PropTypes from "prop-types";
import Highlighter from "react-highlight-words";
import {
  Card,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import pipe from "lodash/fp/pipe";
import map from "lodash/fp/map";
import split from "lodash/fp/split";
import flatten from "lodash/fp/flatten";

import MonsterTags from "./MonsterTags";
import ImageMacher from "./ImageMacher";

const semiBreakLine = pipe(
  split("；"),
  map(split("。")),
  flatten
);

function MonsterCard(props) {
  const { monster, searchStr } = props;

  return (
    <Card>
      <ListGroup>
        <ListGroupItem>
          <Row>
            <Col sm="1">
              <img src={monster.thumbnail} alt={monster.monsterName} />
            </Col>
            <Col sm="3" className="d-flex align-items-center">
              <a
                className="text-dark"
                href={monster["monsterLink-href"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="m-0">
                  <Highlighter
                    searchWords={[searchStr]}
                    textToHighlight={monster.monsterName}
                  />
                </h3>
              </a>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="mr-5">
                <ImageMacher category="race" label={monster.race} />
              </div>
              <div className="mr-5">
                <ImageMacher category="attribute" label={monster.attribute} />
              </div>
              <div className="mr-5">稀有度：{monster.star}</div>
              <div>編號：{monster.monsterId}</div>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem color="info" className="py-0">
          主動技
        </ListGroupItem>
        {monster.activeName.map((name, idx) => (
          <ListGroupItem key={idx}>
            <ListGroupItemHeading>
              <Highlighter searchWords={[searchStr]} textToHighlight={name} />
            </ListGroupItemHeading>
            {semiBreakLine(monster.activeDescription[idx]).map((line, idx) => (
              <ListGroupItemText className="mb-0" key={idx}>
                <Highlighter searchWords={[searchStr]} textToHighlight={line} />
              </ListGroupItemText>
            ))}
          </ListGroupItem>
        ))}
        <ListGroupItem color="warning" className="py-0">
          隊長技
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>
            <Highlighter
              searchWords={[searchStr]}
              textToHighlight={monster.leaderName}
            />
          </ListGroupItemHeading>
          <ListGroupItemText className="mb-1">
            <Highlighter
              searchWords={[searchStr]}
              textToHighlight={monster.leaderDescription}
            />
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem
          className="py-0"
          style={{ color: "#6e8767", backgroundColor: "#cae3c3" }}
        >
          技能標籤
        </ListGroupItem>
        <ListGroupItem>
          <MonsterTags monsterId={monster.monsterId} />
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export const propTypes = {
  monster: PropTypes.shape({
    monsterId: PropTypes.string,
    monsterName: PropTypes.string,
    attribute: PropTypes.string,
    race: PropTypes.string,
    star: PropTypes.string,
    leaderName: PropTypes.string,
    leaderDescription: PropTypes.string,
    activeName: PropTypes.arrayOf(PropTypes.string),
    activeDescription: PropTypes.arrayOf(PropTypes.string)
  })
};

MonsterCard.propTypes = propTypes;

export default MonsterCard;
