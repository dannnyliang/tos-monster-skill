export const FILTERS = {
  ATTRIBUTES: {
    id: "ATTRIBUTES",
    rawPropName: "attribute",
    label: "屬性"
  },
  RACES: {
    id: "RACES",
    rawPropName: "race",
    label: "種族"
  },
  STARS: {
    id: "STARS",
    rawPropName: "star",
    label: "稀有度"
  },
  TAGS: {
    id: "TAGS",
    label: "標籤"
  }
};

export const ATTRIBUTES = {
  WATER: {
    id: "WATER",
    label: "水"
  },
  FIRE: {
    id: "FIRE",
    label: "火"
  },
  EARTH: {
    id: "EARTH",
    label: "木"
  },
  LIGHT: {
    id: "LIGHT",
    label: "光"
  },
  DARK: {
    id: "DARK",
    label: "暗"
  }
};

export const RACES = {
  DRAGON: {
    id: "DRAGON",
    label: "龍類"
  },
  BEAST: {
    id: "BEAST",
    label: "獸類"
  },
  GOD: {
    id: "GOD",
    label: "神族"
  },
  DEMON: {
    id: "DEMON",
    label: "魔族"
  },
  ELF: {
    id: "ELF",
    label: "妖精類"
  },
  HUMAN: {
    id: "HUMAN",
    label: "人類"
  },
  MACHINA: {
    id: "MACHINA",
    label: "機械族"
  },
  EVOLVE: {
    id: "EVOLVE",
    label: "進化素材"
  },
  LEVELUP: {
    id: "LEVELUP",
    label: "強化素材"
  }
};

export const STARS = {
  1: {
    id: "1",
    label: "1★"
  },
  2: {
    id: "2",
    label: "2★"
  },
  3: {
    id: "3",
    label: "3★"
  },
  4: {
    id: "4",
    label: "4★"
  },
  5: {
    id: "5",
    label: "5★"
  },
  6: {
    id: "6",
    label: "6★"
  },
  7: {
    id: "7",
    label: "7★"
  },
  8: {
    id: "8",
    label: "8★"
  }
};

export const labelToId = (group, groupLabel) => {
  switch (group) {
    case FILTERS.ATTRIBUTES.id:
      return Object.values(ATTRIBUTES).find(({ label }) => label === groupLabel)
        .id;
    case FILTERS.RACES.id:
      return Object.values(RACES).find(({ label }) => label === groupLabel).id;
    case FILTERS.STARS.id:
      return Object.values(STARS).find(({ label }) => label === groupLabel).id;

    default:
      break;
  }
};
