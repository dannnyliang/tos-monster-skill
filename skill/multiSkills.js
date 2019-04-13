const { MULTITYPES } = require('../constant');

const multiSkills = [
  /***** [究極熔煉] 北歐神 *****/
  {
    monsterId: '2001',
    activeName: ['不死神授 ‧ 水'],
    activeDescription: [
      '1 回合內，掉落的水符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡',
    ],
    multiType: MULTITYPES.MULTI,
  },
  {
    monsterId: '2002',
    activeName: ['不死神授 ‧ 火'],
    activeDescription: [
      '1 回合內，掉落的火符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡',
    ],
    multiType: MULTITYPES.MULTI,
  },
  {
    monsterId: '2003',
    activeName: ['不死神授 ‧ 木'],
    activeDescription: [
      '1 回合內，掉落的木符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡',
    ],
    multiType: MULTITYPES.MULTI,
  },
  {
    monsterId: '2004',
    activeName: ['不死神授 ‧ 光'],
    activeDescription: [
      '1 回合內，掉落的光符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡',
    ],
    multiType: MULTITYPES.MULTI,
  },
  {
    monsterId: '2005',
    activeName: ['不死神授 ‧ 暗'],
    activeDescription: [
      '1 回合內，掉落的暗符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡',
    ],
    multiType: MULTITYPES.MULTI,
  },
  /***** [合體] 不死英雄 *****/
  {
    monsterId: '721',
    activeName: ['波濤的戰場'],
    activeDescription: [
      '2 回合內，敵方全體轉為火屬性，並提升水屬性對火屬性目標的攻擊力，若效果期間擊斃所有敵人，當前技能 CD 減少 3',
    ],
    multiType: MULTITYPES.MULTI,
  },
  {
    monsterId: '722',
    activeName: ['火烈的戰場'],
    activeDescription: [
      '2 回合內，敵方全體轉為木屬性，並提升火屬性對木屬性目標的攻擊力，若效果期間擊斃所有敵人，當前技能 CD 減少 3',
    ],
    multiType: MULTITYPES.MULTI,
  },
  {
    monsterId: '723',
    activeName: ['連環追擊 ‧ 木'],
    activeDescription: ['2 回合內，木屬性成員發動攻擊時追打木屬性攻擊 1 次'],
    multiType: MULTITYPES.MULTI,
  },
  {
    monsterId: '724',
    activeName: ['捨生換日'],
    activeDescription: [
      '3 回合內，每回合扣除 15% 自身生命力；敵方全體無法行動 3 回合，但效果會因自身生命力不足 15%而消失',
    ],
    multiType: MULTITYPES.MULTI,
  },
  {
    monsterId: '725',
    activeName: ['掩眼魔靈 ‧ 幽暗'],
    activeDescription: ['隨機將 2 直行的符石轉化為暗符石'],
    multiType: MULTITYPES.MULTI,
  },
];

module.exports = multiSkills;
