import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import monsters from './tosMonsters';
import ErrorBoundary from './components/ErrorBoundary';
import MonsterList from './components/MonsterList';
import FilterPanel from './components/FilterPanel';

const sample = [
  {
    monsterName: '誅滅戰劍 · 費雷',
    activeName: ['汪洋神號', '不死神授 ‧ 水'],
    activeDescription: [
      '水符石轉化為水神族強化符石，同時火及心符石轉化為水強化符石',
      '1 回合內，掉落的水符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡',
    ],
    monsterId: '2001',
    leaderName: '浪濤 ‧ 極致',
    leaderDescription:
      '隊伍中只有水屬性成員時：全隊攻擊力 6 倍，生命力及回復力 1.2 倍；消除神族符石時，全隊攻擊力額外提升 1.5 倍；回合結束時，隨機將 3 粒水符石轉化為強化符石',
    attribute: '水',
    race: '神族',
    star: '8★',
    multiType: 'MULTI',
  },
  {
    monsterName: '高級水術士莫莉',
    activeName: ['符石解放 ‧ 水'],
    activeDescription: ['直接引爆木符石造成敵全體水屬性傷害'],
    monsterId: '2',
    leaderName: '海之力',
    leaderDescription: '水屬性攻擊力 1.5 倍',
    attribute: '水',
    race: '人類',
    star: '3★',
  },
  {
    monsterName: '水魔法師莫莉',
    activeName: ['符石解放 ‧ 水'],
    activeDescription: ['直接引爆木符石造成敵全體水屬性傷害'],
    monsterId: '3',
    leaderName: '海之怒',
    leaderDescription: '水屬性攻擊力 2 倍',
    attribute: '水',
    race: '人類',
    star: '4★',
  },
];

export const MonstersContext = React.createContext();

function App() {
  return (
    <ErrorBoundary renderError={<div>ERROR!!</div>}>
      <Container fluid>
        <Row>
          <Col
            md="4"
            style={{
              height: '100vh',
              position: 'fixed',
              overflowY: 'scroll',
              borderRight: '1px solid rgba(0, 0, 0, 0.125)',
            }}
          >
            <FilterPanel />
          </Col>
          <Col md={{ size: 8, offset: 4 }}>
            {/* TODO: Pagination */}
            {/* <MonstersContext.Provider value={{ monsters }}> */}
            <MonstersContext.Provider value={{ monsters: sample }}>
              <MonsterList />
            </MonstersContext.Provider>
          </Col>
        </Row>
      </Container>
    </ErrorBoundary>
  );
}

export default App;
