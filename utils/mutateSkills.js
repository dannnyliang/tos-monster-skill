/**
 * TODO:
 * - [*] 主動技：多技 multi、二選一 chooseOne、組合技 compose、變身 switch、合體 combine
 * - [ ] 非主動技：隊伍技 team、極限突破 ar、昇華 amelioration、武裝龍刻 dragonWare
 */

const findIndex = require('lodash/findIndex');
const multiSkills = require('../skill/multiSkills');

const mutateSkills = skills => monsters => {
  const addMultiSkill = ({ monsterId, activeName, activeDescription, multiType }) => {
    const index = findIndex(monsters, ['monsterId', String(monsterId)]);

    const monster = monsters[index];
    const newMonster = {
      ...monster,
      activeName: [...monster.activeName, ...activeName],
      activeDescription: [...monster.activeDescription, ...activeDescription],
      multiType,
    };

    monsters[index] = newMonster;
  };

  skills.forEach(skill => addMultiSkill({ ...skill }));
  return monsters;
};

module.exports = mutateSkills(multiSkills);
