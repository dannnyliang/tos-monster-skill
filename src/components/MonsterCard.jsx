import React from 'react';
import {
  Card,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import split from 'lodash/fp/split';
import flatten from 'lodash/fp/flatten';

import ImageMacher from './ImageMacher';

const semiBreakLine = pipe(
  split('；'),
  map(split('。')),
  flatten,
  map(line => <div>{line}</div>)
);

function MonsterCard(props) {
  const { monster } = props;

  return (
    <Card>
      <ListGroup>
        <ListGroupItem>
          <Row>
            <Col>
              <h3>{monster.monsterName}</h3>
            </Col>
            <Col>
              <ImageMacher category="race" label={monster.race} />
            </Col>
            <Col>
              <ImageMacher category="attribute" label={monster.attribute} />
            </Col>
            <Col className="d-flex align-items-center">{monster.star}</Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem color="info" className="py-0">
          主動技
        </ListGroupItem>
        {monster.activeName.map((name, idx) => (
          <ListGroupItem key={idx}>
            <ListGroupItemHeading>{name}</ListGroupItemHeading>
            <ListGroupItemText className="mb-1">
              {semiBreakLine(monster.activeDescription[idx])}
              {console.log(semiBreakLine(monster.activeDescription[idx]))}
            </ListGroupItemText>
          </ListGroupItem>
        ))}
        <ListGroupItem color="warning" className="py-0">
          隊長技
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>{monster.leaderName}</ListGroupItemHeading>
          <ListGroupItemText className="mb-1">
            {monster.leaderDescription}
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default MonsterCard;
