const monsters = [
  {
    "monsterName": "莫莉",
    "activeName": ["符石解放 ‧ 水"],
    "activeDescription": ["直接引爆木符石造成敵全體水屬性傷害"],
    "monsterId": "1",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "高級水術士莫莉",
    "activeName": ["符石解放 ‧ 水"],
    "activeDescription": ["直接引爆木符石造成敵全體水屬性傷害"],
    "monsterId": "2",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "水魔法師莫莉",
    "activeName": ["符石解放 ‧ 水"],
    "activeDescription": ["直接引爆木符石造成敵全體水屬性傷害"],
    "monsterId": "3",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "水元素賢者莫莉",
    "activeName": ["符石激發 ‧ 水"],
    "activeDescription": ["直接引爆木符石造成敵全體水屬性傷害，並產生強化符石"],
    "monsterId": "4",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "肖恩",
    "activeName": ["符石解放 ‧ 火"],
    "activeDescription": ["直接引爆水符石造成敵全體火屬性傷害"],
    "monsterId": "5",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "高級劍士肖恩",
    "activeName": ["符石解放 ‧ 火"],
    "activeDescription": ["直接引爆水符石造成敵全體火屬性傷害"],
    "monsterId": "6",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "火焰劍士肖恩",
    "activeName": ["符石解放 ‧ 火"],
    "activeDescription": ["直接引爆水符石造成敵全體火屬性傷害"],
    "monsterId": "7",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "紅蓮劍士肖恩",
    "activeName": ["符石激發 ‧ 火"],
    "activeDescription": ["直接引爆水符石造成敵全體火屬性傷害，並產生強化符石"],
    "monsterId": "8",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "鄧肯",
    "activeName": ["符石解放 ‧ 木"],
    "activeDescription": ["直接引爆火符石造成敵全體木屬性傷害"],
    "monsterId": "9",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "牧者鄧肯",
    "activeName": ["符石解放 ‧ 木"],
    "activeDescription": ["直接引爆火符石造成敵全體木屬性傷害"],
    "monsterId": "10",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "德魯依鄧肯",
    "activeName": ["符石解放 ‧ 木"],
    "activeDescription": ["直接引爆火符石造成敵全體木屬性傷害"],
    "monsterId": "11",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "森林王者鄧肯",
    "activeName": ["符石激發 ‧ 木"],
    "activeDescription": ["直接引爆火符石造成敵全體木屬性傷害，並產生強化符石"],
    "monsterId": "12",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "男爵奈寶尼",
    "activeName": ["符石解放 ‧ 光"],
    "activeDescription": ["直接引爆暗符石造成敵全體光屬性傷害"],
    "monsterId": "13",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "子爵奈寶尼",
    "activeName": ["符石解放 ‧ 光"],
    "activeDescription": ["直接引爆暗符石造成敵全體光屬性傷害"],
    "monsterId": "14",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "伯爵奈寶尼",
    "activeName": ["符石解放 ‧ 光"],
    "activeDescription": ["直接引爆暗符石造成敵全體光屬性傷害"],
    "monsterId": "15",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "侯爵奈寶尼",
    "activeName": ["符石激發 ‧ 光"],
    "activeDescription": ["直接引爆暗符石造成敵全體光屬性傷害，並產生強化符石"],
    "monsterId": "16",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "暗修導士安多",
    "activeName": ["符石解放 ‧ 暗"],
    "activeDescription": ["直接引爆光符石造成敵全體暗屬性傷害"],
    "monsterId": "17",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "高級暗修導士安多",
    "activeName": ["符石解放 ‧ 暗"],
    "activeDescription": ["直接引爆光符石造成敵全體暗屬性傷害"],
    "monsterId": "18",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "死靈術士安多",
    "activeName": ["符石解放 ‧ 暗"],
    "activeDescription": ["直接引爆光符石造成敵全體暗屬性傷害"],
    "monsterId": "19",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "死靈祭師安多",
    "activeName": ["符石激發 ‧ 暗"],
    "activeDescription": ["直接引爆光符石造成敵全體暗屬性傷害，並產生強化符石"],
    "monsterId": "20",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "水方士",
    "activeName": ["攻擊姿勢 ‧ 水"],
    "activeDescription": ["心符石轉化為水符石"],
    "monsterId": "21",
    "leaderName": "龍之怒",
    "leaderDescription": "龍類攻擊力 2 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "清川真人",
    "activeName": ["攻擊姿勢 ‧ 水"],
    "activeDescription": ["心符石轉化為水符石"],
    "monsterId": "22",
    "leaderName": "龍之怒",
    "leaderDescription": "龍類攻擊力 2 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "靈江仙人",
    "activeName": ["攻擊姿勢 ‧ 水"],
    "activeDescription": ["心符石轉化為水符石"],
    "monsterId": "23",
    "leaderName": "龍之怒",
    "leaderDescription": "龍類攻擊力 2 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "青龍孟章神君",
    "activeName": ["攻擊姿勢 ‧ 水"],
    "activeDescription": ["心符石轉化為水符石"],
    "monsterId": "24",
    "leaderName": "龍之狂怒",
    "leaderDescription": "龍類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "火方士",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "25",
    "leaderName": "野獸之復甦",
    "leaderDescription": "獸類回復力 2 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "赤灶真人",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "26",
    "leaderName": "野獸之復甦",
    "leaderDescription": "獸類回復力 2 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "真火仙人",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "27",
    "leaderName": "野獸之復甦",
    "leaderDescription": "獸類回復力 2 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "朱雀陵光神君",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "28",
    "leaderName": "野獸之再生",
    "leaderDescription": "獸類回復力 2.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "木方士",
    "activeName": ["防禦壁"],
    "activeDescription": ["3 回合內，所受傷害減少 50%"],
    "monsterId": "29",
    "leaderName": "野獸之血",
    "leaderDescription": "獸類生命力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "九地真人",
    "activeName": ["防禦壁"],
    "activeDescription": ["3 回合內，所受傷害減少 50%"],
    "monsterId": "30",
    "leaderName": "野獸之血",
    "leaderDescription": "獸類生命力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "虛土仙人",
    "activeName": ["防禦壁"],
    "activeDescription": ["3 回合內，所受傷害減少 50%"],
    "monsterId": "31",
    "leaderName": "野獸之血",
    "leaderDescription": "獸類生命力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "玄武執明神君",
    "activeName": ["防禦壁"],
    "activeDescription": ["3 回合內，所受傷害減少 50%"],
    "monsterId": "32",
    "leaderName": "野獸之意志",
    "leaderDescription": "獸類生命力 2.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "陽方士",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "33",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "聖明真人",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "34",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "耀尊仙人",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "35",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "白虎監兵神君",
    "activeName": ["護牆崩壞"],
    "activeDescription": ["3 回合內，無視全體敵人 90% 的防禦力"],
    "monsterId": "36",
    "leaderName": "野獸之狂怒",
    "leaderDescription": "獸類攻擊力 2.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "陰方士",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "37",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "幽陵真人",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "38",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "紫微妖仙",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "39",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "饕餮渾沌魔君",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "40",
    "leaderName": "野獸之狂怒",
    "leaderDescription": "獸類攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "冰花龍",
    "activeName": ["水波怒擊"],
    "activeDescription": ["對敵方全體造成 5 倍水屬性傷害"],
    "monsterId": "41",
    "leaderName": "水之防壁",
    "leaderDescription": "水屬性傷害減少 50%",
    "attribute": "水",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "冰晶龍",
    "activeName": ["水波怒擊"],
    "activeDescription": ["對敵方全體造成 5 倍水屬性傷害"],
    "monsterId": "42",
    "leaderName": "海森護牆",
    "leaderDescription": "水屬性傷害減少 50%，同時木屬性傷害減少 30%",
    "attribute": "水",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "冰晶龍王",
    "activeName": ["水波爆擊"],
    "activeDescription": ["對敵方全體造成自身攻擊力 30 倍的水屬性傷害"],
    "monsterId": "43",
    "leaderName": "海森闇之壁",
    "leaderDescription": "水屬性傷害減少 50%，同時木屬性和暗屬性傷害減少 30%",
    "attribute": "水",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "光輝龍",
    "activeName": ["閃光怒擊"],
    "activeDescription": ["對敵方全體造成 5 倍光屬性傷害"],
    "monsterId": "50",
    "leaderName": "光之防壁",
    "leaderDescription": "光屬性傷害減少 50%",
    "attribute": "光",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "閃耀龍",
    "activeName": ["閃光怒擊"],
    "activeDescription": ["對敵方全體造成 5 倍光屬性傷害"],
    "monsterId": "51",
    "leaderName": "聖海護牆",
    "leaderDescription": "光屬性傷害減少 50%，同時水屬性傷害減少 30%",
    "attribute": "光",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "聖衡機龍",
    "activeName": ["閃光爆撃"],
    "activeDescription": ["對敵方全體造成自身攻擊力 30 倍的光屬性傷害"],
    "monsterId": "52",
    "leaderName": "聖海森之壁",
    "leaderDescription": "光屬性傷害減少 50%，同時水屬性和木屬性傷害減少 30%",
    "attribute": "光",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "無頭龍",
    "activeName": ["暗影怒擊"],
    "activeDescription": ["對敵方全體造成 5 倍暗屬性傷害"],
    "monsterId": "53",
    "leaderName": "暗之防壁",
    "leaderDescription": "暗屬性傷害減少 50%",
    "attribute": "暗",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "斷頭龍",
    "activeName": ["暗影怒擊"],
    "activeDescription": ["對敵方全體造成 5 倍暗屬性傷害"],
    "monsterId": "54",
    "leaderName": "闇炎護牆",
    "leaderDescription": "暗屬性傷害減少 50%，同時火屬性傷害減少 30%",
    "attribute": "暗",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "魂索邪龍",
    "activeName": ["暗影爆撃"],
    "activeDescription": ["對敵方全體造成自身攻擊力 30 倍的暗屬性傷害"],
    "monsterId": "55",
    "leaderName": "闇炎聖之壁",
    "leaderDescription": "暗屬性傷害減少 50%，同時火屬性和光屬性傷害減少 30%",
    "attribute": "暗",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "冰原地精",
    "activeName": ["寒冰一擊"],
    "activeDescription": ["對單一敵人造成 5 倍水屬性傷害"],
    "monsterId": "56",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "淵寒大地精",
    "activeName": ["攻擊姿勢 ‧ 水"],
    "activeDescription": ["心符石轉化為水符石"],
    "monsterId": "57",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "火山地精",
    "activeName": ["烈炎一擊"],
    "activeDescription": ["對單一敵人造成 5 倍火屬性傷害"],
    "monsterId": "58",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "熾岩大地精",
    "activeName": ["攻擊姿勢 ‧ 火"],
    "activeDescription": ["心符石轉化為火符石"],
    "monsterId": "59",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "森林地精",
    "activeName": ["旋風一擊"],
    "activeDescription": ["對單一敵人造成 5 倍木屬性傷害"],
    "monsterId": "60",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "碧石大地精",
    "activeName": ["攻擊姿勢 ‧ 木"],
    "activeDescription": ["心符石轉化為木符石"],
    "monsterId": "61",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "光明地精",
    "activeName": ["金光一擊"],
    "activeDescription": ["對單一敵人造成 5 倍光屬性傷害"],
    "monsterId": "62",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "輝芒大地精",
    "activeName": ["攻擊姿勢 ‧ 光"],
    "activeDescription": ["心符石轉化為光符石"],
    "monsterId": "63",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "黑暗地精",
    "activeName": ["暗色一擊"],
    "activeDescription": ["對單一敵人造成 5 倍暗屬性傷害"],
    "monsterId": "64",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "冥土大地精",
    "activeName": ["攻擊姿勢 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗符石"],
    "monsterId": "65",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "海精靈",
    "activeName": ["生命補充"],
    "activeDescription": ["回復自身回復力 5 倍的生命力"],
    "monsterId": "66",
    "leaderName": "水之制裁",
    "leaderDescription": "提升水屬性對火屬性目標的攻擊力 (包括主動技）",
    "attribute": "水",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "海躍精靈",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "67",
    "leaderName": "水之制裁",
    "leaderDescription": "提升水屬性對火屬性目標的攻擊力 (包括主動技）",
    "attribute": "水",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "火精靈",
    "activeName": ["生命補充"],
    "activeDescription": ["回復自身回復力 5 倍的生命力"],
    "monsterId": "68",
    "leaderName": "火之制裁",
    "leaderDescription": "提升火屬性對木屬性目標的攻擊力 (包括主動技）",
    "attribute": "火",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "火舞精靈",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "69",
    "leaderName": "火之制裁",
    "leaderDescription": "提升火屬性對木屬性目標的攻擊力 (包括主動技）",
    "attribute": "火",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "花精靈",
    "activeName": ["生命補充"],
    "activeDescription": ["回復自身回復力 5 倍的生命力"],
    "monsterId": "70",
    "leaderName": "木之制裁",
    "leaderDescription": "提升木屬性對水屬性目標的攻擊力 (包括主動技）",
    "attribute": "木",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "花冠精靈",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "71",
    "leaderName": "木之制裁",
    "leaderDescription": "提升木屬性對水屬性目標的攻擊力 (包括主動技）",
    "attribute": "木",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "月精靈",
    "activeName": ["生命補充"],
    "activeDescription": ["回復自身回復力 5 倍的生命力"],
    "monsterId": "72",
    "leaderName": "光之制裁",
    "leaderDescription": "提升光屬性對暗屬性目標的攻擊力 (包括主動技）",
    "attribute": "光",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "月光精靈",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "73",
    "leaderName": "光之制裁",
    "leaderDescription": "提升光屬性對暗屬性目標的攻擊力 (包括主動技）",
    "attribute": "光",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "夜精靈",
    "activeName": ["生命補充"],
    "activeDescription": ["回復自身回復力 5 倍的生命力"],
    "monsterId": "74",
    "leaderName": "暗之制裁",
    "leaderDescription": "提升暗屬性對光屬性目標的攻擊力 (包括主動技）",
    "attribute": "暗",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "夜迷精靈",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "75",
    "leaderName": "暗之制裁",
    "leaderDescription": "提升暗屬性對光屬性目標的攻擊力 (包括主動技）",
    "attribute": "暗",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "冰蜥蜴戰士",
    "activeName": ["寒冰一擊"],
    "activeDescription": ["對單一敵人造成 5 倍水屬性傷害"],
    "monsterId": "76",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "冰河蜥蜴戰士",
    "activeName": ["寒冰強擊"],
    "activeDescription": ["對單一敵人造成 10 倍水屬性傷害"],
    "monsterId": "77",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "赤蜥蜴戰士",
    "activeName": ["烈炎一擊"],
    "activeDescription": ["對單一敵人造成 5 倍火屬性傷害"],
    "monsterId": "78",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "赤焰蜥蜴戰士",
    "activeName": ["烈炎強擊"],
    "activeDescription": ["對單一敵人造成 10 倍火屬性傷害"],
    "monsterId": "79",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "翠蜥蜴戰士",
    "activeName": ["旋風一擊"],
    "activeDescription": ["對單一敵人造成 5 倍木屬性傷害"],
    "monsterId": "80",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "森林蜥蜴戰士",
    "activeName": ["旋風強擊"],
    "activeDescription": ["對單一敵人造成 10 倍木屬性傷害"],
    "monsterId": "81",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "光蜥蜴戰士",
    "activeName": ["金光一擊"],
    "activeDescription": ["對單一敵人造成 5 倍光屬性傷害"],
    "monsterId": "82",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "金光蜥蜴戰士",
    "activeName": ["金光強擊"],
    "activeDescription": ["對單一敵人造成 10 倍光屬性傷害"],
    "monsterId": "83",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "暗蜥蜴戰士",
    "activeName": ["暗色一擊"],
    "activeDescription": ["對單一敵人造成 5 倍暗屬性傷害"],
    "monsterId": "84",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "漆黑蜥蜴戰士",
    "activeName": ["暗色強擊"],
    "activeDescription": ["對單一敵人造成 10 倍暗屬性傷害"],
    "monsterId": "85",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "小魔女愛莉絲",
    "activeName": ["流水連擊"],
    "activeDescription": ["進行 5 次水屬性攻擊"],
    "monsterId": "86",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "占星士愛莉絲",
    "activeName": ["流水狂擊"],
    "activeDescription": ["進行 15 次水屬性攻擊"],
    "monsterId": "87",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "小魔女瑪莉曼",
    "activeName": ["烈焰連擊"],
    "activeDescription": ["進行 5 次火屬性攻擊"],
    "monsterId": "88",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "火巫女瑪莉曼",
    "activeName": ["烈焰狂擊"],
    "activeDescription": ["進行 15 次火屬性攻擊"],
    "monsterId": "89",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "小魔女凱莉絲",
    "activeName": ["片葉連擊"],
    "activeDescription": ["進行 5 次木屬性攻擊"],
    "monsterId": "90",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "修道者凱莉絲",
    "activeName": ["片葉狂擊"],
    "activeDescription": ["進行 15 次木屬性攻擊"],
    "monsterId": "91",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "小魔女安迪莉亞",
    "activeName": ["光刃連擊"],
    "activeDescription": ["進行 5 次光屬性攻擊"],
    "monsterId": "92",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "傳教士安迪莉亞",
    "activeName": ["光刃狂擊"],
    "activeDescription": ["進行 15 次光屬性攻擊"],
    "monsterId": "93",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "小魔女莉莉絲",
    "activeName": ["暗戈連擊"],
    "activeDescription": ["進行 5 次暗屬性攻擊"],
    "monsterId": "94",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "鍊金士莉莉絲",
    "activeName": ["暗戈狂擊"],
    "activeDescription": ["進行 15 次暗屬性攻擊"],
    "monsterId": "95",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "水史萊姆",
    "activeName": ["流水連擊"],
    "activeDescription": ["進行 5 次水屬性攻擊"],
    "monsterId": "96",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "水",
    "race": "妖精類",
    "star": "1★"
  },
  {
    "monsterName": "液態史萊姆",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "97",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "水",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "火史萊姆",
    "activeName": ["烈焰連擊"],
    "activeDescription": ["進行 5 次火屬性攻擊"],
    "monsterId": "98",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "火",
    "race": "妖精類",
    "star": "1★"
  },
  {
    "monsterName": "燃燒史萊姆",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "99",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "火",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "木史萊姆",
    "activeName": ["片葉連擊"],
    "activeDescription": ["進行 5 次木屬性攻擊"],
    "monsterId": "100",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "木",
    "race": "妖精類",
    "star": "1★"
  },
  {
    "monsterName": "翠綠史萊姆",
    "activeName": ["防禦姿勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心符石"],
    "monsterId": "101",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "木",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "光史萊姆",
    "activeName": ["光刃連擊"],
    "activeDescription": ["進行 5 次光屬性攻擊"],
    "monsterId": "102",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "光",
    "race": "妖精類",
    "star": "1★"
  },
  {
    "monsterName": "天使史萊姆",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "103",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "光",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "暗史萊姆",
    "activeName": ["暗戈連擊"],
    "activeDescription": ["進行 5 次暗屬性攻擊"],
    "monsterId": "104",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "1★"
  },
  {
    "monsterName": "幽靈史萊姆",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "105",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "2★"
  },
  {
    "monsterName": "蒼幽狼",
    "activeName": ["寒冰一擊"],
    "activeDescription": ["對單一敵人造成 5 倍水屬性傷害"],
    "monsterId": "106",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "蒼幽狼人",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "107",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "赤幽狼",
    "activeName": ["烈炎一擊"],
    "activeDescription": ["對單一敵人造成 5 倍火屬性傷害"],
    "monsterId": "108",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "赤幽狼人",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "109",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "青幽狼",
    "activeName": ["旋風一擊"],
    "activeDescription": ["對單一敵人造成 5 倍木屬性傷害"],
    "monsterId": "110",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "青幽狼人",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "111",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "白幽狼",
    "activeName": ["金光一擊"],
    "activeDescription": ["對單一敵人造成 5 倍光屬性傷害"],
    "monsterId": "112",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "白幽狼人",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "113",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "黑幽狼",
    "activeName": ["暗色一擊"],
    "activeDescription": ["對單一敵人造成 5 倍暗屬性傷害"],
    "monsterId": "114",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "黑幽狼人",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "115",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "烏爾德",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "116",
    "leaderName": "攻守一體 ‧ 水",
    "leaderDescription": "水符石兼具 50% 心符石效果",
    "attribute": "水",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "過去之烏爾德",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "117",
    "leaderName": "攻守一體 ‧ 水",
    "leaderDescription": "水符石兼具 50% 心符石效果",
    "attribute": "水",
    "race": "神族",
    "star": "4★"
  },
  {
    "monsterName": "歷史之烏爾德",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "118",
    "leaderName": "攻守一體 ‧ 水",
    "leaderDescription": "水符石兼具 50% 心符石效果",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "斯庫爾德",
    "activeName": ["加速世界"],
    "activeDescription": ["6 秒內，可任意移動符石而不會發動消除"],
    "monsterId": "119",
    "leaderName": "攻守一體 ‧ 火",
    "leaderDescription": "火符石兼具 50% 心符石效果",
    "attribute": "火",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "未來之斯庫爾德",
    "activeName": ["疾風境界"],
    "activeDescription": ["8 秒內，可任意移動符石而不會發動消除"],
    "monsterId": "120",
    "leaderName": "攻守一體 ‧ 火",
    "leaderDescription": "火符石兼具 50% 心符石效果",
    "attribute": "火",
    "race": "神族",
    "star": "4★"
  },
  {
    "monsterName": "無常之斯庫爾德",
    "activeName": ["時間操縱"],
    "activeDescription": ["10 秒內，可任意移動符石而不會發動消除"],
    "monsterId": "121",
    "leaderName": "攻守一體 ‧ 火",
    "leaderDescription": "火符石兼具 50% 心符石效果",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "薇兒丹蒂",
    "activeName": ["寄生"],
    "activeDescription": [
      "敵方全體被寄生，每回合將吸取相當於自身回復力的生命力，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "122",
    "leaderName": "攻守一體 ‧ 木",
    "leaderDescription": "木符石兼具 50% 心符石效果",
    "attribute": "木",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "現在之薇兒丹蒂",
    "activeName": ["寄生"],
    "activeDescription": [
      "敵方全體被寄生，每回合將吸取相當於自身回復力的生命力，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "123",
    "leaderName": "攻守一體 ‧ 木",
    "leaderDescription": "木符石兼具 50% 心符石效果",
    "attribute": "木",
    "race": "神族",
    "star": "4★"
  },
  {
    "monsterName": "命運之薇兒丹蒂",
    "activeName": ["寄生"],
    "activeDescription": [
      "敵方全體被寄生，每回合將吸取相當於自身回復力的生命力，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "124",
    "leaderName": "攻守一體 ‧ 木",
    "leaderDescription": "木符石兼具 50% 心符石效果",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "伊登",
    "activeName": ["神聖結界"],
    "activeDescription": ["連續 5 回合大量恢復生命力"],
    "monsterId": "125",
    "leaderName": "治療之心",
    "leaderDescription": "每回合回復自身回復力 (需要消除符石)",
    "attribute": "光",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "聖果之伊登",
    "activeName": ["神聖結界"],
    "activeDescription": ["連續 5 回合大量恢復生命力"],
    "monsterId": "126",
    "leaderName": "治療之心",
    "leaderDescription": "每回合回復自身回復力 (需要消除符石)",
    "attribute": "光",
    "race": "神族",
    "star": "4★"
  },
  {
    "monsterName": "永生之伊登",
    "activeName": ["神聖結界"],
    "activeDescription": ["連續 5 回合大量恢復生命力"],
    "monsterId": "127",
    "leaderName": "痊癒之心",
    "leaderDescription": "每回合回復 3 倍自身回復力  (需要消除符石)",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "英靈殿侍女",
    "activeName": ["毒害"],
    "activeDescription": [
      "敵方全體中毒，每回合將受到施技者攻擊力的傷害，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "128",
    "leaderName": "靈魂收割 ‧ 起",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力追打 1 次",
    "attribute": "暗",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "戰魂之瓦爾基麗",
    "activeName": ["毒害"],
    "activeDescription": [
      "敵方全體中毒，每回合將受到施技者攻擊力的傷害，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "129",
    "leaderName": "靈魂收割 ‧ 狙",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 3 倍追打  1 次",
    "attribute": "暗",
    "race": "神族",
    "star": "4★"
  },
  {
    "monsterName": "催魂之瓦爾基麗",
    "activeName": ["毒害"],
    "activeDescription": [
      "敵方全體中毒，每回合將受到施技者攻擊力的傷害，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "130",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "水遊俠",
    "activeName": ["大海之壁"],
    "activeDescription": ["5 回合內，所受傷害減少 50%"],
    "monsterId": "131",
    "leaderName": "不倒意志",
    "leaderDescription": "當前生命力大於 70% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "水舞劍士",
    "activeName": ["大海之壁"],
    "activeDescription": ["5 回合內，所受傷害減少 50%"],
    "monsterId": "132",
    "leaderName": "不倒意志",
    "leaderDescription": "當前生命力大於 70% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "水",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "水舞劍神",
    "activeName": ["大海之壁"],
    "activeDescription": ["5 回合內，所受傷害減少 50%"],
    "monsterId": "133",
    "leaderName": "絕境意志",
    "leaderDescription": "當前生命力大於 50% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "火遊俠",
    "activeName": ["橫掃千軍"],
    "activeDescription": ["對敵方全體造成 5 倍火屬性傷害，此傷害無視防禦力"],
    "monsterId": "134",
    "leaderName": "狐仙軍神",
    "leaderDescription": "全隊攻擊力及回復力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "火焰戰士",
    "activeName": ["橫掃千軍"],
    "activeDescription": ["對敵方全體造成 5 倍火屬性傷害，此傷害無視防禦力"],
    "monsterId": "135",
    "leaderName": "狐仙軍神",
    "leaderDescription": "全隊攻擊力及回復力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "炎舞軍神",
    "activeName": ["橫掃千軍"],
    "activeDescription": ["對敵方全體造成 5 倍火屬性傷害，此傷害無視防禦力"],
    "monsterId": "136",
    "leaderName": "狐仙軍神",
    "leaderDescription": "全隊攻擊力及回復力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "木遊俠",
    "activeName": ["引弓狙擊"],
    "activeDescription": ["對單一敵人造成 15 倍木屬性傷害，此傷害無視防禦力"],
    "monsterId": "137",
    "leaderName": "矢無虛發",
    "leaderDescription": "當進行單體攻擊時，攻擊力 2 倍，適用於所有成員",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "翠綠狙擊手",
    "activeName": ["引弓狙擊"],
    "activeDescription": ["對單一敵人造成 15 倍木屬性傷害，此傷害無視防禦力"],
    "monsterId": "138",
    "leaderName": "矢無虛發",
    "leaderDescription": "當進行單體攻擊時，攻擊力 2 倍，適用於所有成員",
    "attribute": "木",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "疾風神射手",
    "activeName": ["引弓狙擊"],
    "activeDescription": ["對單一敵人造成 15 倍木屬性傷害，此傷害無視防禦力"],
    "monsterId": "139",
    "leaderName": "百步穿楊",
    "leaderDescription": "當進行單體攻擊時，攻擊力 2.5 倍，適用於所有成員",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "光遊俠",
    "activeName": ["完全回復"],
    "activeDescription": ["完全恢復生命力"],
    "monsterId": "140",
    "leaderName": "人之血脈",
    "leaderDescription": "人類生命力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "聖光遊俠",
    "activeName": ["完全回復"],
    "activeDescription": ["完全恢復生命力"],
    "monsterId": "141",
    "leaderName": "人之血脈",
    "leaderDescription": "人類生命力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "萬劍遊俠",
    "activeName": ["完全回復"],
    "activeDescription": ["完全恢復生命力"],
    "monsterId": "142",
    "leaderName": "人類之意志",
    "leaderDescription": "人類生命力 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "暗遊俠",
    "activeName": ["生命終解"],
    "activeDescription": ["敵方生命力 20% 以下時，即殺"],
    "monsterId": "143",
    "leaderName": "亡命攻擊",
    "leaderDescription": "當生命力 20% 以下，全隊攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "暗夜刺客",
    "activeName": ["生命終解"],
    "activeDescription": ["敵方生命力 20% 以下時，即殺"],
    "monsterId": "144",
    "leaderName": "亡命攻擊",
    "leaderDescription": "當生命力 20% 以下，全隊攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "暗影劍豪",
    "activeName": ["生命終解"],
    "activeDescription": ["敵方生命力 20% 以下時，即殺"],
    "monsterId": "145",
    "leaderName": "木馬屠城計",
    "leaderDescription": "當生命力 20% 以下，全隊攻擊力 3 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "冰耀巨像",
    "activeName": ["符石變換 ‧ 水"],
    "activeDescription": ["火符石轉化為水符石"],
    "monsterId": "146",
    "leaderName": "水之代價",
    "leaderDescription": "以所受傷害 2 倍對敵方攻擊者進行水屬性反擊",
    "attribute": "水",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "冰耀巨像 ‧ 解放",
    "activeName": ["符石變換 ‧ 水"],
    "activeDescription": ["火符石轉化為水符石"],
    "monsterId": "147",
    "leaderName": "水之代價",
    "leaderDescription": "以所受傷害 2 倍對敵方攻擊者進行水屬性反擊",
    "attribute": "水",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "冰耀巨鱷",
    "activeName": ["符石變換 ‧ 水"],
    "activeDescription": ["火符石轉化為水符石"],
    "monsterId": "148",
    "leaderName": "水之代價",
    "leaderDescription": "以所受傷害 2 倍對敵方攻擊者進行水屬性反擊",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "烙紅巨像",
    "activeName": ["符石變換 ‧ 火"],
    "activeDescription": ["木符石轉化為火符石"],
    "monsterId": "149",
    "leaderName": "灼熱境界",
    "leaderDescription": "無視敵方屬性，每回合以自身攻擊力追打 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "烙紅巨像 ‧ 解放",
    "activeName": ["符石變換 ‧ 火"],
    "activeDescription": ["木符石轉化為火符石"],
    "monsterId": "150",
    "leaderName": "灼熱境界",
    "leaderDescription": "無視敵方屬性，每回合以自身攻擊力追打 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "烙紅龍蜥",
    "activeName": ["符石變換 ‧ 火"],
    "activeDescription": ["木符石轉化為火符石"],
    "monsterId": "151",
    "leaderName": "燎原境界",
    "leaderDescription": "無視敵方屬性，每回合以自身攻擊力 3 倍追打 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "碧青巨像",
    "activeName": ["符石變換 ‧ 木"],
    "activeDescription": ["水符石轉化為木符石"],
    "monsterId": "152",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "碧青巨像 ‧ 解放",
    "activeName": ["符石變換 ‧ 木"],
    "activeDescription": ["水符石轉化為木符石"],
    "monsterId": "153",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "木",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "碧青行者",
    "activeName": ["符石變換 ‧ 木"],
    "activeDescription": ["水符石轉化為木符石"],
    "monsterId": "154",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "聖靈巨像",
    "activeName": ["符石變換 ‧ 光"],
    "activeDescription": ["暗符石轉化為光符石"],
    "monsterId": "155",
    "leaderName": "光明代價",
    "leaderDescription": "以所受傷害對敵方全體進行光屬性反擊",
    "attribute": "光",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "聖靈巨像 ‧ 解放",
    "activeName": ["符石變換 ‧ 光"],
    "activeDescription": ["暗符石轉化為光符石"],
    "monsterId": "156",
    "leaderName": "光明代價",
    "leaderDescription": "以所受傷害對敵方全體進行光屬性反擊",
    "attribute": "光",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "聖靈怒獅",
    "activeName": ["符石變換 ‧ 光"],
    "activeDescription": ["暗符石轉化為光符石"],
    "monsterId": "157",
    "leaderName": "光明代價",
    "leaderDescription": "以所受傷害對敵方全體進行光屬性反擊",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "暗月巨像",
    "activeName": ["符石變換 ‧ 暗"],
    "activeDescription": ["光符石轉化為暗符石"],
    "monsterId": "158",
    "leaderName": "暗黑代價",
    "leaderDescription": "以所受傷害對敵方全體進行暗屬性反擊",
    "attribute": "暗",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "暗月巨像 ‧ 解放",
    "activeName": ["符石變換 ‧ 暗"],
    "activeDescription": ["光符石轉化為暗符石"],
    "monsterId": "159",
    "leaderName": "暗黑代價",
    "leaderDescription": "以所受傷害對敵方全體進行暗屬性反擊",
    "attribute": "暗",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "暗月夜龍",
    "activeName": ["符石變換 ‧ 暗"],
    "activeDescription": ["光符石轉化為暗符石"],
    "monsterId": "160",
    "leaderName": "暗黑代價",
    "leaderDescription": "以所受傷害對敵方全體進行暗屬性反擊",
    "attribute": "暗",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "機械鯨鯊",
    "activeName": ["水波猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍水屬性傷害"],
    "monsterId": "161",
    "leaderName": "水之制裁",
    "leaderDescription": "提升水屬性對火屬性目標的攻擊力 (包括主動技）",
    "attribute": "水",
    "race": "機械族",
    "star": "2★"
  },
  {
    "monsterName": "強化機械鯨鯊",
    "activeName": ["水波猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍水屬性傷害"],
    "monsterId": "162",
    "leaderName": "水之制裁",
    "leaderDescription": "提升水屬性對火屬性目標的攻擊力 (包括主動技）",
    "attribute": "水",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "變異機械鯨鯊",
    "activeName": ["水波轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍水屬性傷害"],
    "monsterId": "163",
    "leaderName": "水之制裁",
    "leaderDescription": "提升水屬性對火屬性目標的攻擊力 (包括主動技）",
    "attribute": "水",
    "race": "機械族",
    "star": "4★"
  },
  {
    "monsterName": "機械獅子",
    "activeName": ["火焰猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍火屬性傷害"],
    "monsterId": "164",
    "leaderName": "火之制裁",
    "leaderDescription": "提升火屬性對木屬性目標的攻擊力 (包括主動技）",
    "attribute": "火",
    "race": "機械族",
    "star": "2★"
  },
  {
    "monsterName": "強化機械獅子",
    "activeName": ["火焰猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍火屬性傷害"],
    "monsterId": "165",
    "leaderName": "火之制裁",
    "leaderDescription": "提升火屬性對木屬性目標的攻擊力 (包括主動技）",
    "attribute": "火",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "狂暴機械獅子",
    "activeName": ["火焰轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍火屬性傷害"],
    "monsterId": "166",
    "leaderName": "火之制裁",
    "leaderDescription": "提升火屬性對木屬性目標的攻擊力 (包括主動技）",
    "attribute": "火",
    "race": "機械族",
    "star": "4★"
  },
  {
    "monsterName": "機械犀牛",
    "activeName": ["大地猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍木屬性傷害"],
    "monsterId": "167",
    "leaderName": "木之制裁",
    "leaderDescription": "提升木屬性對水屬性目標的攻擊力 (包括主動技）",
    "attribute": "木",
    "race": "機械族",
    "star": "2★"
  },
  {
    "monsterName": "強化機械犀牛",
    "activeName": ["大地猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍木屬性傷害"],
    "monsterId": "168",
    "leaderName": "木之制裁",
    "leaderDescription": "提升木屬性對水屬性目標的攻擊力 (包括主動技）",
    "attribute": "木",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "野蠻機械犀牛",
    "activeName": ["大地轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍木屬性傷害"],
    "monsterId": "169",
    "leaderName": "木之制裁",
    "leaderDescription": "提升木屬性對水屬性目標的攻擊力 (包括主動技）",
    "attribute": "木",
    "race": "機械族",
    "star": "4★"
  },
  {
    "monsterName": "機械狼",
    "activeName": ["閃光猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍光屬性傷害"],
    "monsterId": "170",
    "leaderName": "光之制裁",
    "leaderDescription": "提升光屬性對暗屬性目標的攻擊力 (包括主動技）",
    "attribute": "光",
    "race": "機械族",
    "star": "2★"
  },
  {
    "monsterName": "強化機械狼",
    "activeName": ["閃光猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍光屬性傷害"],
    "monsterId": "171",
    "leaderName": "光之制裁",
    "leaderDescription": "提升光屬性對暗屬性目標的攻擊力 (包括主動技）",
    "attribute": "光",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "重甲機械狼",
    "activeName": ["閃光轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍光屬性傷害"],
    "monsterId": "172",
    "leaderName": "光之制裁",
    "leaderDescription": "提升光屬性對暗屬性目標的攻擊力 (包括主動技）",
    "attribute": "光",
    "race": "機械族",
    "star": "4★"
  },
  {
    "monsterName": "機械豹",
    "activeName": ["暗影猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍暗屬性傷害"],
    "monsterId": "173",
    "leaderName": "暗之制裁",
    "leaderDescription": "提升暗屬性對光屬性目標的攻擊力 (包括主動技）",
    "attribute": "暗",
    "race": "機械族",
    "star": "2★"
  },
  {
    "monsterName": "強化機械豹",
    "activeName": ["暗影猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍暗屬性傷害"],
    "monsterId": "174",
    "leaderName": "暗之制裁",
    "leaderDescription": "提升暗屬性對光屬性目標的攻擊力 (包括主動技）",
    "attribute": "暗",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "掠奪機械豹",
    "activeName": ["暗影轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍暗屬性傷害"],
    "monsterId": "175",
    "leaderName": "暗之制裁",
    "leaderDescription": "提升暗屬性對光屬性目標的攻擊力 (包括主動技）",
    "attribute": "暗",
    "race": "機械族",
    "star": "4★"
  },
  {
    "monsterName": "海獸",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "176",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "克蘇魯",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "177",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "邪神克蘇魯",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "178",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "地獄三頭犬",
    "activeName": ["攻擊姿勢 ‧ 火"],
    "activeDescription": ["心符石轉化為火符石"],
    "monsterId": "179",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "基路比魯斯",
    "activeName": ["攻擊姿勢 ‧ 火"],
    "activeDescription": ["心符石轉化為火符石"],
    "monsterId": "180",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "冥府兇獸基路比魯斯",
    "activeName": ["攻擊姿勢 ‧ 火"],
    "activeDescription": ["心符石轉化為火符石"],
    "monsterId": "181",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "蛇妖",
    "activeName": ["石化"],
    "activeDescription": [
      "石化敵方全體，使受影響目標無法行動並轉為木屬性，持續 3 回合"
    ],
    "monsterId": "182",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "美杜莎",
    "activeName": ["石化"],
    "activeDescription": [
      "石化敵方全體，使受影響目標無法行動並轉為木屬性，持續 3 回合"
    ],
    "monsterId": "183",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "妖女美杜莎",
    "activeName": ["石化"],
    "activeDescription": [
      "石化敵方全體，使受影響目標無法行動並轉為木屬性，持續 3 回合"
    ],
    "monsterId": "184",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "鷹頭獸",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "185",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "獅鷲",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "186",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "獅鷲獸王",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "187",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "魔羊",
    "activeName": ["攻擊姿勢 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗符石"],
    "monsterId": "188",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "魔羊怪",
    "activeName": ["攻擊姿勢 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗符石"],
    "monsterId": "189",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "惡魔巴風特",
    "activeName": ["攻擊姿勢 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗符石"],
    "monsterId": "190",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "費雷",
    "activeName": ["符石強化 ‧ 水"],
    "activeDescription": ["水符石轉化為水強化符石"],
    "monsterId": "201",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "勝利海神費雷",
    "activeName": ["符石強化 ‧ 水"],
    "activeDescription": ["水符石轉化為水強化符石"],
    "monsterId": "202",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "提爾",
    "activeName": ["符石強化 ‧ 火"],
    "activeDescription": ["火符石轉化為火強化符石"],
    "monsterId": "203",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "獨臂戰神提爾",
    "activeName": ["符石強化 ‧ 火"],
    "activeDescription": ["火符石轉化為火強化符石"],
    "monsterId": "204",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "費蕾雅",
    "activeName": ["符石強化 ‧ 木"],
    "activeDescription": ["木符石轉化為木強化符石"],
    "monsterId": "205",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "妙曼愛神費蕾雅",
    "activeName": ["符石強化 ‧ 木"],
    "activeDescription": ["木符石轉化為木強化符石"],
    "monsterId": "206",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "索爾",
    "activeName": ["符石強化 ‧ 光"],
    "activeDescription": ["光符石轉化為光強化符石"],
    "monsterId": "207",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "轟天雷神索爾",
    "activeName": ["符石強化 ‧ 光"],
    "activeDescription": ["光符石轉化為光強化符石"],
    "monsterId": "208",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "洛基",
    "activeName": ["符石強化 ‧ 暗"],
    "activeDescription": ["暗符石轉化為暗強化符石"],
    "monsterId": "209",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "黃昏號角洛基",
    "activeName": ["符石強化 ‧ 暗"],
    "activeDescription": ["暗符石轉化為暗強化符石"],
    "monsterId": "210",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "泰芙努特",
    "activeName": ["符石解放 ‧ 水"],
    "activeDescription": ["直接引爆木符石造成敵全體水屬性傷害"],
    "monsterId": "211",
    "leaderName": "水之制裁",
    "leaderDescription": "提升水屬性對火屬性目標的攻擊力 (包括主動技）",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "雨神泰芙努特",
    "activeName": ["符石極限解放 ‧ 水"],
    "activeDescription": ["直接引爆水屬性以外的符石造成敵方全體水屬性傷害"],
    "monsterId": "212",
    "leaderName": "水之審判",
    "leaderDescription": "大幅提升水屬性對火屬性目標的攻擊力 (包括主動技）",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "賽特",
    "activeName": ["符石解放 ‧ 火"],
    "activeDescription": ["直接引爆水符石造成敵全體火屬性傷害"],
    "monsterId": "213",
    "leaderName": "火之制裁",
    "leaderDescription": "提升火屬性對木屬性目標的攻擊力 (包括主動技）",
    "attribute": "火",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "戰爭之神賽特",
    "activeName": ["符石極限解放 ‧ 火"],
    "activeDescription": ["直接引爆火屬性以外的符石造成敵方全體火屬性傷害"],
    "monsterId": "214",
    "leaderName": "火之審判",
    "leaderDescription": "大幅提升火屬性對木屬性目標的攻擊力 (包括主動技）",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "舒",
    "activeName": ["符石解放 ‧ 木"],
    "activeDescription": ["直接引爆火符石造成敵全體木屬性傷害"],
    "monsterId": "215",
    "leaderName": "木之制裁",
    "leaderDescription": "提升木屬性對水屬性目標的攻擊力 (包括主動技）",
    "attribute": "木",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "天空之神 ‧ 舒",
    "activeName": ["符石極限解放 ‧ 木"],
    "activeDescription": ["直接引爆木屬性以外的符石造成敵方全體木屬性傷害"],
    "monsterId": "216",
    "leaderName": "木之審判",
    "leaderDescription": "大幅提升木屬性對水屬性目標的攻擊力 (包括主動技）",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "拉",
    "activeName": ["符石解放 ‧ 光"],
    "activeDescription": ["直接引爆暗符石造成敵全體光屬性傷害"],
    "monsterId": "217",
    "leaderName": "光之制裁",
    "leaderDescription": "提升光屬性對暗屬性目標的攻擊力 (包括主動技）",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "太陽之子拉",
    "activeName": ["符石極限解放 ‧ 光"],
    "activeDescription": ["直接引爆光屬性以外的符石造成敵方全體光屬性傷害"],
    "monsterId": "218",
    "leaderName": "光之審判",
    "leaderDescription": "大幅提升光屬性對暗屬性目標的攻擊力 (包括主動技）",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "奧西利斯",
    "activeName": ["符石解放 ‧ 暗"],
    "activeDescription": ["直接引爆光符石造成敵全體暗屬性傷害"],
    "monsterId": "219",
    "leaderName": "暗之制裁",
    "leaderDescription": "提升暗屬性對光屬性目標的攻擊力 (包括主動技）",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "不死冥王奧西利斯",
    "activeName": ["符石極限解放 ‧ 暗"],
    "activeDescription": ["直接引爆暗屬性以外的符石造成敵方全體暗屬性傷害"],
    "monsterId": "220",
    "leaderName": "暗之審判",
    "leaderDescription": "大幅提升暗屬性對光屬性目標的攻擊力 (包括主動技）",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "海龍",
    "activeName": ["海洋大號令"],
    "activeDescription": ["火符石與心符石轉化為水符石"],
    "monsterId": "221",
    "leaderName": "龍之怒",
    "leaderDescription": "龍類攻擊力 2 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "東海龍王 ‧ 敖廣",
    "activeName": ["海洋大號令"],
    "activeDescription": ["火符石與心符石轉化為水符石"],
    "monsterId": "222",
    "leaderName": "海龍王之怒",
    "leaderDescription": "龍類及神族攻擊力 2 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "蓮藕仔",
    "activeName": ["焚燒大號令"],
    "activeDescription": ["木符石與心符石轉化為火符石"],
    "monsterId": "223",
    "leaderName": "燎原境界",
    "leaderDescription": "無視敵方屬性，每回合以自身攻擊力 3 倍追打 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "三太子 ‧ 哪吒",
    "activeName": ["焚燒大號令"],
    "activeDescription": ["木符石與心符石轉化為火符石"],
    "monsterId": "224",
    "leaderName": "獄炎境界",
    "leaderDescription": "無視敵方屬性，每回合以自身攻擊力 5 倍追打 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "大力王",
    "activeName": ["自然大號令"],
    "activeDescription": ["水符石與心符石轉化為木符石"],
    "monsterId": "225",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "平天大聖 ‧ 牛魔王",
    "activeName": ["自然大號令"],
    "activeDescription": ["水符石與心符石轉化為木符石"],
    "monsterId": "226",
    "leaderName": "牛魔王之怒",
    "leaderDescription": "獸類及妖精類攻擊力 2.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "美猴王",
    "activeName": ["金睛火眼"],
    "activeDescription": ["1 回合內，無視全體敵人的防禦力"],
    "monsterId": "227",
    "leaderName": "金剛不壞",
    "leaderDescription": "生命力愈高，所受傷害愈低，最多減少 60% 傷害",
    "attribute": "光",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "齊天大聖 ‧ 孫悟空",
    "activeName": ["金睛火眼"],
    "activeDescription": ["1 回合內，無視全體敵人的防禦力"],
    "monsterId": "228",
    "leaderName": "金剛不壞",
    "leaderDescription": "生命力愈高，所受傷害愈低，最多減少 60% 傷害",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "妖狐",
    "activeName": ["疾風境界"],
    "activeDescription": ["8 秒內，可任意移動符石而不會發動消除"],
    "monsterId": "229",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "白臉金毛 ‧ 妲己",
    "activeName": ["顛倒眾生"],
    "activeDescription": ["20 秒內，可任意移動符石而不會發動消除"],
    "monsterId": "230",
    "leaderName": "傾國傾城",
    "leaderDescription": "連擊 (Combo) 時攻擊力大幅提升 75%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "機械水龍",
    "activeName": ["水波轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍水屬性傷害"],
    "monsterId": "231",
    "leaderName": "暴擊",
    "leaderDescription": "每回合有 25% 機會攻擊力 5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "機械水神龍 ‧ 內拉羅斯",
    "activeName": ["水波爆擊"],
    "activeDescription": ["對敵方全體造成自身攻擊力 30 倍的水屬性傷害"],
    "monsterId": "232",
    "leaderName": "致命暴擊",
    "leaderDescription": "每回合有 30% 機會攻擊力 6 倍。當生命力少於 10%，機會由 30% 變成 50%",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "機械火龍",
    "activeName": ["火焰轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍火屬性傷害"],
    "monsterId": "233",
    "leaderName": "暴擊",
    "leaderDescription": "每回合有 25% 機會攻擊力 5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "機械火神龍 ‧ 伊索爾德",
    "activeName": ["火焰爆撃"],
    "activeDescription": ["對敵方全體造成自身攻擊力 30 倍的火屬性傷害"],
    "monsterId": "234",
    "leaderName": "致命暴擊",
    "leaderDescription": "每回合有 30% 機會攻擊力 6 倍。當生命力少於 10%，機會由 30% 變成 50%",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "機械地龍",
    "activeName": ["大地轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍木屬性傷害"],
    "monsterId": "235",
    "leaderName": "暴擊",
    "leaderDescription": "每回合有 25% 機會攻擊力 5 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "機械地神龍 ‧ 卡斯迪",
    "activeName": ["大地爆擊"],
    "activeDescription": ["對敵方全體造成自身攻擊力 30 倍的木屬性傷害"],
    "monsterId": "236",
    "leaderName": "致命暴擊",
    "leaderDescription": "每回合有 30% 機會攻擊力 6 倍。當生命力少於 10%，機會由 30% 變成 50%",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "機械聖龍",
    "activeName": ["閃光轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍光屬性傷害"],
    "monsterId": "237",
    "leaderName": "暴擊",
    "leaderDescription": "每回合有 25% 機會攻擊力 5 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "機械聖皇龍 ‧ 泰瑞那斯",
    "activeName": ["閃光爆撃"],
    "activeDescription": ["對敵方全體造成自身攻擊力 30 倍的光屬性傷害"],
    "monsterId": "238",
    "leaderName": "致命暴擊",
    "leaderDescription": "每回合有 30% 機會攻擊力 6 倍。當生命力少於 10%，機會由 30% 變成 50%",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "機械闇龍",
    "activeName": ["暗影轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍暗屬性傷害"],
    "monsterId": "239",
    "leaderName": "暴擊",
    "leaderDescription": "每回合有 25% 機會攻擊力 5 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "機械冥王龍 ‧ 萊瑞姆",
    "activeName": ["暗影爆撃"],
    "activeDescription": ["對敵方全體造成自身攻擊力 30 倍的暗屬性傷害"],
    "monsterId": "240",
    "leaderName": "致命暴擊",
    "leaderDescription": "每回合有 30% 機會攻擊力 6 倍。當生命力少於 10%，機會由 30% 變成 50%",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "破碎之蒼魂",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "241",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "破碎之赤魂",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "242",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "破碎之青魂",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "243",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "破碎之白魂",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "244",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "破碎之黑魂",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "245",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "重生之蒼魂",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "246",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "進化素材",
    "star": "2★"
  },
  {
    "monsterName": "重生之赤魂",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "247",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "進化素材",
    "star": "2★"
  },
  {
    "monsterName": "重生之青魂",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "248",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "進化素材",
    "star": "2★"
  },
  {
    "monsterName": "重生之白魂",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "249",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "進化素材",
    "star": "2★"
  },
  {
    "monsterName": "重生之黑魂",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "250",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "2★"
  },
  {
    "monsterName": "共生之蒼魂",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "251",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "共生之赤魂",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "252",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "共生之青魂",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "253",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "共生之白魂",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "254",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "共生之黑魂",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "255",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "永恆之蒼魂",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "256",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "永恆之赤魂",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "257",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "永恆之青魂",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "258",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "永恆之白魂",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "259",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "永恆之黑魂",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "260",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "水晶龍蛋",
    "activeName": ["防禦壁"],
    "activeDescription": ["3 回合內，所受傷害減少 50%"],
    "monsterId": "261",
    "leaderName": "不倒意志",
    "leaderDescription": "當前生命力大於 70% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "水",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "破殼水晶龍",
    "activeName": ["防禦壁"],
    "activeDescription": ["3 回合內，所受傷害減少 50%"],
    "monsterId": "262",
    "leaderName": "不倒意志",
    "leaderDescription": "當前生命力大於 70% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "水",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "稀有水晶龍",
    "activeName": ["防禦壁"],
    "activeDescription": ["3 回合內，所受傷害減少 50%"],
    "monsterId": "263",
    "leaderName": "不倒意志",
    "leaderDescription": "當前生命力大於 70% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "水",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "詛咒之劍",
    "activeName": ["烈焰連擊"],
    "activeDescription": ["進行 5 次火屬性攻擊"],
    "monsterId": "264",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "火",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "殺戮之劍",
    "activeName": ["烈焰連擊"],
    "activeDescription": ["進行 5 次火屬性攻擊"],
    "monsterId": "265",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "火",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "魔神之劍",
    "activeName": ["烈焰連擊"],
    "activeDescription": ["進行 5 次火屬性攻擊"],
    "monsterId": "266",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "火",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "蜜涎獸",
    "activeName": ["寄生"],
    "activeDescription": [
      "敵方全體被寄生，每回合將吸取相當於自身回復力的生命力，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "267",
    "leaderName": "野獸之血",
    "leaderDescription": "獸類生命力 2 倍",
    "attribute": "木",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "蜜羽獸",
    "activeName": ["寄生"],
    "activeDescription": [
      "敵方全體被寄生，每回合將吸取相當於自身回復力的生命力，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "268",
    "leaderName": "野獸之血",
    "leaderDescription": "獸類生命力 2 倍",
    "attribute": "木",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "蜜月獸",
    "activeName": ["寄生"],
    "activeDescription": [
      "敵方全體被寄生，每回合將吸取相當於自身回復力的生命力，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "269",
    "leaderName": "野獸之血",
    "leaderDescription": "獸類生命力 2 倍",
    "attribute": "木",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "海洋小靈魂石",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "270",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "1★"
  },
  {
    "monsterName": "火焰小靈魂石",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "271",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "1★"
  },
  {
    "monsterName": "大地小靈魂石",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "272",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "1★"
  },
  {
    "monsterName": "神聖小靈魂石",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "273",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "強化素材",
    "star": "1★"
  },
  {
    "monsterName": "鬼魅小靈魂石",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "274",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "強化素材",
    "star": "1★"
  },
  {
    "monsterName": "海洋靈魂石",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "275",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "火焰靈魂石",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "276",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "大地靈魂石",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "277",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "神聖靈魂石",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "278",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "鬼魅靈魂石",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "279",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "海洋千年靈魂石",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "280",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "火焰千年靈魂石",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "281",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "大地千年靈魂石",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "282",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "神聖千年靈魂石",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "283",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "鬼魅千年靈魂石",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "284",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "元素操縱者 ‧ 迪亞布羅",
    "activeName": ["偷天換日 ‧ 心"],
    "activeDescription": ["所有符石隨機轉換，同時心符石出現率上升"],
    "monsterId": "285",
    "leaderName": "罪之代價",
    "leaderDescription": "以所受傷害 2 倍對敵方攻擊者進行相剋屬性反擊",
    "attribute": "火",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "萬魔之王 ‧ 薩魯曼",
    "activeName": ["完全回復"],
    "activeDescription": ["完全恢復生命力"],
    "monsterId": "286",
    "leaderName": "妖精之舞",
    "leaderDescription": "妖精類攻擊力及回復力 2 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "碑紋騎士 ‧ 奧丁",
    "activeName": ["絕地逢生"],
    "activeDescription": [
      "1 回合內，自身生命力愈低，全隊攻擊力愈高，最大 2.5 倍"
    ],
    "monsterId": "287",
    "leaderName": "絕境意志",
    "leaderDescription": "當前生命力大於 50% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "雙體共生 ‧ 噬日狼",
    "activeName": ["聖神大號令"],
    "activeDescription": ["暗符石與心符石轉化為光符石"],
    "monsterId": "288",
    "leaderName": "一念之間",
    "leaderDescription": "減少一半移動符石時間，全隊攻擊力 2.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "雙體共生 ‧ 喰月狼",
    "activeName": ["邪魔大號令"],
    "activeDescription": ["光符石與心符石轉化為暗符石"],
    "monsterId": "289",
    "leaderName": "一念之間",
    "leaderDescription": "減少一半移動符石時間，全隊攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "雖死猶在 ‧ 毒龍尼德霍格",
    "activeName": ["靈之活 ‧ 龍"],
    "activeDescription": ["回復相當於龍類成員的生命力"],
    "monsterId": "290",
    "leaderName": "歃血之盟",
    "leaderDescription": "龍類攻擊力 3 倍及生命力 2 倍，每回合扣除自身總生命力 10%",
    "attribute": "木",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "鬼魅萬年靈魂石",
    "activeName": ["暗影猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍暗屬性傷害"],
    "monsterId": "291",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "人面怪鳥",
    "activeName": ["石化"],
    "activeDescription": [
      "石化敵方全體，使受影響目標無法行動並轉為木屬性，持續 3 回合"
    ],
    "monsterId": "292",
    "leaderName": "痊癒之心",
    "leaderDescription": "每回合回復 3 倍自身回復力  (需要消除符石)",
    "attribute": "木",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "米迦勒 ‧ 路西法",
    "activeName": ["魔力召喚"],
    "activeDescription": [
      "魔族攻擊力減至 0 及光屬性成員攻擊力減至 50%，並將被減去的攻擊力加入自身攻擊力。消除光符石才會發動攻擊 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "293",
    "leaderName": "光暗一體",
    "leaderDescription": "光符石兼具暗符石效果，同時暗符石兼具光符石效果",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "通透的蛋",
    "activeName": ["泡沫爆破"],
    "activeDescription": [
      "累積 3 回合內敵方所受傷害的 70% 再爆發 (不包括無屬性傷害)，此傷害無視屬性及防禦力"
    ],
    "monsterId": "294",
    "leaderName": "妖精之歌",
    "leaderDescription": "妖精類回復力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "海拉",
    "activeName": ["泡沫爆破"],
    "activeDescription": [
      "累積 3 回合內敵方所受傷害的 70% 再爆發 (不包括無屬性傷害)，此傷害無視屬性及防禦力"
    ],
    "monsterId": "295",
    "leaderName": "妖精之歌",
    "leaderDescription": "妖精類回復力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "幻夢魚仙 ‧ 伊德海拉",
    "activeName": ["泡沫爆破"],
    "activeDescription": [
      "累積 3 回合內敵方所受傷害的 70% 再爆發 (不包括無屬性傷害)，此傷害無視屬性及防禦力"
    ],
    "monsterId": "296",
    "leaderName": "妖精領域",
    "leaderDescription": "妖精類回復力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "火紅的蛋",
    "activeName": ["點燃"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標轉為火屬性並受到自身攻擊力 30 倍火屬性傷害，持續 3 回合"
    ],
    "monsterId": "297",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "梅格",
    "activeName": ["點燃"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標轉為火屬性並受到自身攻擊力 30 倍火屬性傷害，持續 3 回合"
    ],
    "monsterId": "298",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "龍裔 ‧ 梅格蘭斯",
    "activeName": ["點燃"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標轉為火屬性並受到自身攻擊力 30 倍火屬性傷害，持續 3 回合"
    ],
    "monsterId": "299",
    "leaderName": "妖精之怒",
    "leaderDescription": "妖精類攻擊力 2 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "翠綠的蛋",
    "activeName": ["生命採摘"],
    "activeDescription": ["3 回合內，敵方所受傷害的 20% 轉化為我方生命力"],
    "monsterId": "300",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "伊薇特",
    "activeName": ["生命採摘"],
    "activeDescription": ["3 回合內，敵方所受傷害的 20% 轉化為我方生命力"],
    "monsterId": "301",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "蝶妖伊薇特",
    "activeName": ["生命採摘"],
    "activeDescription": ["3 回合內，敵方所受傷害的 20% 轉化為我方生命力"],
    "monsterId": "302",
    "leaderName": "妖精之血",
    "leaderDescription": "妖精類生命力 2 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "閃亮的蛋",
    "activeName": ["擴散"],
    "activeDescription": [
      "3 回合內，敵方所受傷害的 50% 分別擴散到其他敵人身上"
    ],
    "monsterId": "303",
    "leaderName": "妖精之歌",
    "leaderDescription": "妖精類回復力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "瑪格",
    "activeName": ["擴散"],
    "activeDescription": [
      "3 回合內，敵方所受傷害的 50% 分別擴散到其他敵人身上"
    ],
    "monsterId": "304",
    "leaderName": "妖精之歌",
    "leaderDescription": "妖精類回復力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "聖蜂后 ‧ 瑪格莉特",
    "activeName": ["擴散"],
    "activeDescription": [
      "3 回合內，敵方所受傷害的 50% 分別擴散到其他敵人身上"
    ],
    "monsterId": "305",
    "leaderName": "妖精領域",
    "leaderDescription": "妖精類回復力 2 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "暗啞的蛋",
    "activeName": ["魅惑"],
    "activeDescription": ["3 回合內，敵方互相或自我進行1次攻擊"],
    "monsterId": "306",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "伊莎貝爾",
    "activeName": ["魅惑"],
    "activeDescription": ["3 回合內，敵方互相或自我進行1次攻擊"],
    "monsterId": "307",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "黑寡婦伊莎貝爾",
    "activeName": ["魅惑"],
    "activeDescription": ["3 回合內，敵方互相或自我進行1次攻擊"],
    "monsterId": "308",
    "leaderName": "妖精之怒",
    "leaderDescription": "妖精類攻擊力 2 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "水之異界龍",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "309",
    "leaderName": "龍之氣息",
    "leaderDescription": "龍類攻擊力 1.5 倍及增加 120 點回復力",
    "attribute": "水",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "深潛者之父 ‧ 達貢",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "310",
    "leaderName": "真龍之淚",
    "leaderDescription": "龍類攻擊力 2 倍及增加 150 點回復力",
    "attribute": "水",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "火之異界龍",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "311",
    "leaderName": "龍之氣息",
    "leaderDescription": "龍類攻擊力 1.5 倍及增加 120 點回復力",
    "attribute": "火",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "火焰共生者 ‧ 克圖格亞",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "312",
    "leaderName": "真龍之淚",
    "leaderDescription": "龍類攻擊力 2 倍及增加 150 點回復力",
    "attribute": "火",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "風之異界龍",
    "activeName": ["防禦姿勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心符石"],
    "monsterId": "313",
    "leaderName": "龍之氣息",
    "leaderDescription": "龍類攻擊力 1.5 倍及增加 120 點回復力",
    "attribute": "木",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "不朽尖吼者 ‧ 拜亞基",
    "activeName": ["防禦姿勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心符石"],
    "monsterId": "314",
    "leaderName": "真龍之淚",
    "leaderDescription": "龍類攻擊力 2 倍及增加 150 點回復力",
    "attribute": "木",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "光之異界龍",
    "activeName": ["雷光閃擊"],
    "activeDescription": [
      "對單一敵人造成 15,000點 光屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "315",
    "leaderName": "龍之氣息",
    "leaderDescription": "龍類攻擊力 1.5 倍及增加 120 點回復力",
    "attribute": "光",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "招蕩的輝芒 ‧ 圖爾茲查",
    "activeName": ["雷光閃擊"],
    "activeDescription": [
      "對單一敵人造成 15,000點 光屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "316",
    "leaderName": "真龍之淚",
    "leaderDescription": "龍類攻擊力 2 倍及增加 150 點回復力",
    "attribute": "光",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "暗之異界龍",
    "activeName": ["黑洞重擊"],
    "activeDescription": [
      "對單一敵人造成 15,000點 暗屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "317",
    "leaderName": "龍之氣息",
    "leaderDescription": "龍類攻擊力 1.5 倍及增加 120 點回復力",
    "attribute": "暗",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "群山中之恐怖 ‧ 法格恩",
    "activeName": ["黑洞重擊"],
    "activeDescription": [
      "對單一敵人造成 15,000點 暗屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "318",
    "leaderName": "真龍之淚",
    "leaderDescription": "龍類攻擊力 2 倍及增加 150 點回復力",
    "attribute": "暗",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "破損的海神守護石像",
    "activeName": ["寒冰強擊"],
    "activeDescription": ["對單一敵人造成 10 倍水屬性傷害"],
    "monsterId": "319",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "海神守護石像",
    "activeName": ["水火攻擊轉化"],
    "activeDescription": ["心符石轉化為水符石，同時將火符石轉化為心符石"],
    "monsterId": "320",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "破損的火神守護石像",
    "activeName": ["烈炎強擊"],
    "activeDescription": ["對單一敵人造成 10 倍火屬性傷害"],
    "monsterId": "321",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "火神守護石像",
    "activeName": ["火木攻擊轉化"],
    "activeDescription": ["心符石轉化為火符石，同時將木符石轉化為心符石"],
    "monsterId": "322",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "破損的女戰神守護石像",
    "activeName": ["旋風強擊"],
    "activeDescription": ["對單一敵人造成 10 倍木屬性傷害"],
    "monsterId": "323",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "女戰神守護石像",
    "activeName": ["木水攻擊轉化"],
    "activeDescription": ["心符石轉化為木符石，同時將水符石轉化為心符石"],
    "monsterId": "324",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "破損的太陽神守護石像",
    "activeName": ["金光強擊"],
    "activeDescription": ["對單一敵人造成 10 倍光屬性傷害"],
    "monsterId": "325",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "太陽神守護石像",
    "activeName": ["光暗攻擊轉化"],
    "activeDescription": ["心符石轉化為光符石，同時將暗符石轉化為心符石"],
    "monsterId": "326",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "破損的月神守護石像",
    "activeName": ["暗色強擊"],
    "activeDescription": ["對單一敵人造成 10 倍暗屬性傷害"],
    "monsterId": "327",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "強化素材",
    "star": "2★"
  },
  {
    "monsterName": "月神守護石像",
    "activeName": ["暗光攻擊轉化"],
    "activeDescription": ["心符石轉化為暗符石，同時將光符石轉化為心符石"],
    "monsterId": "328",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "浪濤史萊姆",
    "activeName": ["鐵壁陣勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心強化符石"],
    "monsterId": "329",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "水",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "烈炎史萊姆",
    "activeName": ["鐵壁陣勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心強化符石"],
    "monsterId": "330",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "火",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "花豔史萊姆",
    "activeName": ["鐵壁陣勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心強化符石"],
    "monsterId": "331",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "木",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "神聖史萊姆",
    "activeName": ["鐵壁陣勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心強化符石"],
    "monsterId": "332",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "光",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "邪魔史萊姆",
    "activeName": ["鐵壁陣勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心強化符石"],
    "monsterId": "333",
    "leaderName": "進擊支援",
    "leaderDescription": "連擊 (Combo) 時攻擊力提升 25%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "海韻女皇",
    "activeName": ["生命治癒"],
    "activeDescription": ["回復自身回復力 15 倍的生命力"],
    "monsterId": "334",
    "leaderName": "水之制裁",
    "leaderDescription": "提升水屬性對火屬性目標的攻擊力 (包括主動技）",
    "attribute": "水",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "火岩領主",
    "activeName": ["生命治癒"],
    "activeDescription": ["回復自身回復力 15 倍的生命力"],
    "monsterId": "335",
    "leaderName": "火之制裁",
    "leaderDescription": "提升火屬性對木屬性目標的攻擊力 (包括主動技）",
    "attribute": "火",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "花冠貴婦",
    "activeName": ["生命治癒"],
    "activeDescription": ["回復自身回復力 15 倍的生命力"],
    "monsterId": "336",
    "leaderName": "木之制裁",
    "leaderDescription": "提升木屬性對水屬性目標的攻擊力 (包括主動技）",
    "attribute": "木",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "月耀公主",
    "activeName": ["生命治癒"],
    "activeDescription": ["回復自身回復力 15 倍的生命力"],
    "monsterId": "337",
    "leaderName": "光之制裁",
    "leaderDescription": "提升光屬性對暗屬性目標的攻擊力 (包括主動技）",
    "attribute": "光",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "夜影魔女",
    "activeName": ["生命治癒"],
    "activeDescription": ["回復自身回復力 15 倍的生命力"],
    "monsterId": "338",
    "leaderName": "暗之制裁",
    "leaderDescription": "提升暗屬性對光屬性目標的攻擊力 (包括主動技）",
    "attribute": "暗",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "冰谷蜥蜴騎士",
    "activeName": ["寒冰崩擊"],
    "activeDescription": ["對單一敵人造成 15 倍水屬性傷害"],
    "monsterId": "339",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "岩漿蜥蜴騎士",
    "activeName": ["烈炎崩擊"],
    "activeDescription": ["對單一敵人造成 15 倍火屬性傷害"],
    "monsterId": "340",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "密林蜥蜴騎士",
    "activeName": ["旋風崩擊"],
    "activeDescription": ["對單一敵人造成 15 倍木屬性傷害"],
    "monsterId": "341",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "聖光蜥蜴騎士",
    "activeName": ["金光崩擊"],
    "activeDescription": ["對單一敵人造成 15 倍光屬性傷害"],
    "monsterId": "342",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "黑雷蜥蜴騎士",
    "activeName": ["暗色崩擊"],
    "activeDescription": ["對單一敵人造成 15 倍暗屬性傷害"],
    "monsterId": "343",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "特洛伊公主",
    "activeName": ["冰封之心"],
    "activeDescription": [
      "我方回復力減至 0，並將每個成員自身回復力的 2.5 倍各自加入自身攻擊力 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "344",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "受詛咒的先知 ‧ 卡珊德拉",
    "activeName": ["冰封之心"],
    "activeDescription": [
      "我方回復力減至 0，並將每個成員自身回復力的 2.5 倍各自加入自身攻擊力 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "345",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "科耳喀斯皇女",
    "activeName": ["四面受敵"],
    "activeDescription": [
      "所有成員攻擊力提升 1.5 倍，同時火符石掉落機率提升，但受到的傷害提升 1.5 倍 (效果會在再次發動此技能或死亡後消失）"
    ],
    "monsterId": "346",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "愛與恨的魔女 ‧ 美狄亞",
    "activeName": ["四面受敵"],
    "activeDescription": [
      "所有成員攻擊力提升 1.5 倍，同時火符石掉落機率提升，但受到的傷害提升 1.5 倍 (效果會在再次發動此技能或死亡後消失）"
    ],
    "monsterId": "347",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "薩爾瑪提亞女皇",
    "activeName": ["怒火中燒"],
    "activeDescription": [
      "達成 4 連擊(Combo) 或以上才會發動攻擊和回復，連擊 (Combo) 時攻擊力提升 25%，期間所有減傷效果無效 (效果會在再次發動此技能或死亡後消失）"
    ],
    "monsterId": "348",
    "leaderName": "大地之主義",
    "leaderDescription": "木屬性攻擊力及回復力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "黑魔法女巫 ‧ 喀耳刻",
    "activeName": ["怒火中燒"],
    "activeDescription": [
      "達成 4 連擊(Combo) 或以上才會發動攻擊和回復，連擊 (Combo) 時攻擊力提升 25%，期間所有減傷效果無效 (效果會在再次發動此技能或死亡後消失）"
    ],
    "monsterId": "349",
    "leaderName": "大地之強權",
    "leaderDescription": "木屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "寒霧劍塚 ‧ 卡戎",
    "activeName": ["靈石附魔 ‧ 水"],
    "activeDescription": ["1 回合內，其他屬性符石兼具水符石 50% 效果"],
    "monsterId": "350",
    "leaderName": "魔之復甦",
    "leaderDescription": "魔族回復力 2 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "機關傀儡 ‧ 紅月",
    "activeName": ["靈石附魔 ‧ 火"],
    "activeDescription": ["1 回合內，其他屬性符石兼具火符石 50% 效果"],
    "monsterId": "351",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "腐林魔女 ‧ 布萊爾",
    "activeName": ["靈石附魔 ‧ 木"],
    "activeDescription": ["1 回合內，其他屬性符石兼具木符石 50% 效果"],
    "monsterId": "352",
    "leaderName": "魔之怒火",
    "leaderDescription": "魔族攻擊力及生命力 1.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "鐵處女像 ‧ 浮士德",
    "activeName": ["靈石附魔 ‧ 光"],
    "activeDescription": ["1 回合內，其他屬性符石兼具光符石 50% 效果"],
    "monsterId": "353",
    "leaderName": "魔之戰鼓",
    "leaderDescription": "魔族攻擊力及回復力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "貓公爵 ‧ 費利克斯",
    "activeName": ["靈石附魔 ‧ 暗"],
    "activeDescription": ["1 回合內，其他屬性符石兼具暗符石 50% 效果"],
    "monsterId": "354",
    "leaderName": "魔之怒火",
    "leaderDescription": "魔族攻擊力及生命力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "持劍侍女 ‧ 波比",
    "activeName": ["灼熱盾擊"],
    "activeDescription": [
      "暈擊敵方全體，使受影響目標無法行動 5 回合，但效果會因受到攻擊而消失"
    ],
    "monsterId": "355",
    "leaderName": "煉獄之主義",
    "leaderDescription": "火屬性攻擊力及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "白羊宮 ‧ 波比",
    "activeName": ["灼熱盾擊"],
    "activeDescription": [
      "暈擊敵方全體，使受影響目標無法行動 5 回合，但效果會因受到攻擊而消失"
    ],
    "monsterId": "356",
    "leaderName": "煉獄之強權",
    "leaderDescription": "火屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "攻城者 ‧ 阿姆士唐",
    "activeName": ["狂戰士"],
    "activeDescription": [
      "在全部或最少 4 個成員可發動主動技時 ，發動此技會將所有成員技能 CD 重置，提升全隊攻擊力 2 倍並持續 8 回合"
    ],
    "monsterId": "357",
    "leaderName": "護甲之賦 ‧ 火",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時火屬性傷害減少 50%",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "金牛宮 ‧ 阿姆士唐",
    "activeName": ["狂戰士"],
    "activeDescription": [
      "在全部或最少 4 個成員可發動主動技時 ，發動此技會將所有成員技能 CD 重置，提升全隊攻擊力 2 倍並持續 8 回合"
    ],
    "monsterId": "358",
    "leaderName": "火木堅甲之賦",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時火屬性和木屬性傷害減少 50%",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "雙劍士 ‧ 波魯克斯",
    "activeName": ["鐵壁陣勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心強化符石"],
    "monsterId": "359",
    "leaderName": "愈戰愈強",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "雙子宮 ‧ 加斯陀與波魯克斯",
    "activeName": ["鐵壁陣勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心強化符石"],
    "monsterId": "360",
    "leaderName": "愈戰愈強 ‧ 改",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "暗影刺客 ‧ 約翰",
    "activeName": ["諸刃之擊"],
    "activeDescription": [
      "消耗現有一半的生命力， 以 125 倍自身攻擊力對敵方全體造成無屬性傷害"
    ],
    "monsterId": "361",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "巨蟹宮 ‧ 約翰",
    "activeName": ["諸刃之擊"],
    "activeDescription": [
      "消耗現有一半的生命力， 以 125 倍自身攻擊力對敵方全體造成無屬性傷害"
    ],
    "monsterId": "362",
    "leaderName": "神之怒",
    "leaderDescription": "神族攻擊力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "重劍士 ‧ 加里昂",
    "activeName": ["狂戰士"],
    "activeDescription": [
      "在全部或最少 4 個成員可發動主動技時 ，發動此技會將所有成員技能 CD 重置，提升全隊攻擊力 2 倍並持續 8 回合"
    ],
    "monsterId": "363",
    "leaderName": "護甲之賦 ‧ 光",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時光屬性傷害減少 50%",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "獅子宮 ‧ 加里昂",
    "activeName": ["狂戰士"],
    "activeDescription": [
      "在全部或最少 4 個成員可發動主動技時 ，發動此技會將所有成員技能 CD 重置，提升全隊攻擊力 2 倍並持續 8 回合"
    ],
    "monsterId": "364",
    "leaderName": "光水堅甲之賦",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時光屬性和水屬性傷害減少 50%",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "割穗少女 ‧ 普西芬妮",
    "activeName": ["能量爆發"],
    "activeDescription": ["單體攻擊轉化為全體攻擊，持續 3 回合"],
    "monsterId": "365",
    "leaderName": "神聖之主義",
    "leaderDescription": "光屬性攻擊力及回復力 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "處女宮 ‧ 普西芬妮",
    "activeName": ["能量爆發"],
    "activeDescription": ["單體攻擊轉化為全體攻擊，持續 3 回合"],
    "monsterId": "366",
    "leaderName": "神聖之強權",
    "leaderDescription": "光屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "聖殿武士 ‧ 露娜",
    "activeName": ["神魔共鳴"],
    "activeDescription": [
      "2 回合內，以神族及魔族其中造成的最大傷害轉換為全隊神族及魔族的傷害"
    ],
    "monsterId": "367",
    "leaderName": "聚精會神",
    "leaderDescription": "延長移動符石時間 3 秒",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "天秤宮 ‧ 露娜",
    "activeName": ["神魔共鳴"],
    "activeDescription": [
      "2 回合內，以神族及魔族其中造成的最大傷害轉換為全隊神族及魔族的傷害"
    ],
    "monsterId": "368",
    "leaderName": "明鏡止水",
    "leaderDescription": "攻擊力 1.5 倍，並延長移動符石時間 3 秒",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "重鐮刺客 ‧ 艾瑪",
    "activeName": ["暗光攻擊轉化"],
    "activeDescription": ["心符石轉化為暗符石，同時將光符石轉化為心符石"],
    "monsterId": "369",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "天蠍宮 ‧ 艾瑪",
    "activeName": ["暗光攻擊轉化"],
    "activeDescription": ["心符石轉化為暗符石，同時將光符石轉化為心符石"],
    "monsterId": "370",
    "leaderName": "神之怒",
    "leaderDescription": "神族攻擊力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "綠林行者 ‧ 赫茲",
    "activeName": ["一擊即中"],
    "activeDescription": ["1 回合內，單體攻擊時全隊追打火屬性攻擊1 次"],
    "monsterId": "371",
    "leaderName": "百步穿楊",
    "leaderDescription": "當進行單體攻擊時，攻擊力 2.5 倍，適用於所有成員",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "人馬宮 ‧ 赫茲",
    "activeName": ["一擊即中"],
    "activeDescription": ["1 回合內，單體攻擊時全隊追打火屬性攻擊1 次"],
    "monsterId": "372",
    "leaderName": "百步穿楊",
    "leaderDescription": "當進行單體攻擊時，攻擊力 2.5 倍，適用於所有成員",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "碎岩武者 ‧ 杜門",
    "activeName": ["蓄能轉換 ‧ 木"],
    "activeDescription": [
      "將等同於累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為木符石，最多 8 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "373",
    "leaderName": "護甲之賦 ‧ 木",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時木屬性傷害減少 50%",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "山羊宮 ‧ 杜門",
    "activeName": ["蓄能轉換 ‧ 木"],
    "activeDescription": [
      "將等同於累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為木符石，最多 8 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "374",
    "leaderName": "木水堅甲之賦",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時木屬性和水屬性傷害減少 50%",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "鬼魅舞者 ‧ 凱莉",
    "activeName": ["蓄力攻擊"],
    "activeDescription": [
      "1 回合內不能對敵方造成傷害，下一回合全隊攻擊力提升 2 倍"
    ],
    "monsterId": "375",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "水瓶宮 ‧ 凱莉",
    "activeName": ["蓄力攻擊"],
    "activeDescription": [
      "1 回合內不能對敵方造成傷害，下一回合全隊攻擊力提升 2 倍"
    ],
    "monsterId": "376",
    "leaderName": "大海之強權",
    "leaderDescription": "水屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "海浪騎士 ‧ 卡秋婭與拉維妮斯",
    "activeName": ["蓄能轉換 ‧ 水"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為水符石，最多 8 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "377",
    "leaderName": "護甲之賦 ‧ 水",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時水屬性傷害減少 50%",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "雙魚宮 ‧ 卡秋婭與拉維妮斯",
    "activeName": ["蓄能轉換 ‧ 水"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為水符石，最多 8 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "378",
    "leaderName": "水火堅甲之賦",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時水屬性和火屬性傷害減少 50%",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "黃道星靈 ‧ 水",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "379",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "黃道星靈 ‧ 火",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "380",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "黃道星靈 ‧ 木",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "381",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "黃道星靈 ‧ 光",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "382",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "黃道星靈 ‧ 暗",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "383",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "4★"
  },
  {
    "monsterName": "占星者",
    "activeName": ["閃光怒擊"],
    "activeDescription": ["對敵方全體造成 5 倍光屬性傷害"],
    "monsterId": "384",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "見習小丑",
    "activeName": ["毒害"],
    "activeDescription": [
      "敵方全體中毒，每回合將受到施技者攻擊力的傷害，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "385",
    "leaderName": "暗之精神",
    "leaderDescription": "暗屬性生命力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "無頭小丑",
    "activeName": ["毒害"],
    "activeDescription": [
      "敵方全體中毒，每回合將受到施技者攻擊力的傷害，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "386",
    "leaderName": "暗之精神",
    "leaderDescription": "暗屬性生命力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "午夜之丑角",
    "activeName": ["毒害"],
    "activeDescription": [
      "敵方全體中毒，每回合將受到施技者攻擊力的傷害，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "387",
    "leaderName": "暗之精神",
    "leaderDescription": "暗屬性生命力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "不懼的鬼戰士",
    "activeName": ["波濤的戰場"],
    "activeDescription": [
      "2 回合內，敵方全體轉為火屬性，並提升水屬性對火屬性目標的攻擊力"
    ],
    "monsterId": "388",
    "leaderName": "魔之力",
    "leaderDescription": "魔族攻擊力 1.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "屠龍者 ‧ 貝奧武夫",
    "activeName": ["波濤的戰場"],
    "activeDescription": [
      "2 回合內，敵方全體轉為火屬性，並提升水屬性對火屬性目標的攻擊力"
    ],
    "monsterId": "389",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "不仁的鬼鬥士",
    "activeName": ["火烈的戰場"],
    "activeDescription": [
      "2 回合內，敵方全體轉為木屬性，並提升火屬性對木屬性目標的攻擊力"
    ],
    "monsterId": "390",
    "leaderName": "魔之怒火",
    "leaderDescription": "魔族攻擊力及生命力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "戰神 ‧ 阿基里斯",
    "activeName": ["火烈的戰場"],
    "activeDescription": [
      "2 回合內，敵方全體轉為木屬性，並提升火屬性對木屬性目標的攻擊力"
    ],
    "monsterId": "391",
    "leaderName": "魔之本性",
    "leaderDescription": "魔族攻擊力，生命力及回復力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "不幸的鬼騎士",
    "activeName": ["攻擊姿勢 ‧ 木"],
    "activeDescription": ["心符石轉化為木符石"],
    "monsterId": "392",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "薔薇雙槍 ‧ 迪爾姆德",
    "activeName": ["攻擊姿勢 ‧ 木"],
    "activeDescription": ["心符石轉化為木符石"],
    "monsterId": "393",
    "leaderName": "魔之血怒",
    "leaderDescription": "魔族攻擊力 2 倍及生命力 1.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "不惑的鬼武士",
    "activeName": ["光暗攻擊轉化"],
    "activeDescription": ["心符石轉化為光符石，同時將暗符石轉化為心符石"],
    "monsterId": "394",
    "leaderName": "攻守同存 ‧ 光",
    "leaderDescription": "光屬性攻擊力 1.5 倍，同時心符石兼具 50% 光符石效果",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "遮那王 ‧ 源義經",
    "activeName": ["光暗攻擊轉化"],
    "activeDescription": ["心符石轉化為光符石，同時將暗符石轉化為心符石"],
    "monsterId": "395",
    "leaderName": "攻守同存 ‧ 光",
    "leaderDescription": "光屬性攻擊力 1.5 倍，同時心符石兼具 50% 光符石效果",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "聖言歌姬 ‧ 妍",
    "activeName": ["聖言詠歌"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至光符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "401",
    "leaderName": "神聖之主義",
    "leaderDescription": "光屬性攻擊力及回復力 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "夜言歌姬 ‧ 希",
    "activeName": ["夜言鳴曲"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至暗符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "402",
    "leaderName": "暗黑之主義",
    "leaderDescription": "暗屬性攻擊力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "波拉",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "403",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "奇美拉",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "404",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "潘",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "405",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "福魯斯",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "406",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "拉彌亞",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "407",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "大魔導士莫莉",
    "activeName": ["界限突破 ‧ 水"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升水屬性攻擊力"
    ],
    "monsterId": "408",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "龍焰騎士肖恩",
    "activeName": ["界限突破 ‧ 火"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升火屬性攻擊力"
    ],
    "monsterId": "409",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "大地霸主鄧肯",
    "activeName": ["界限突破 ‧ 木"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升木屬性攻擊力"
    ],
    "monsterId": "410",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "公爵奈寶尼",
    "activeName": ["界限突破 ‧ 光"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升光屬性攻擊力"
    ],
    "monsterId": "411",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "死靈魔導安多",
    "activeName": ["界限突破 ‧ 暗"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升暗屬性攻擊力"
    ],
    "monsterId": "412",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "蒼龍魂使",
    "activeName": ["龍魂共鳴"],
    "activeDescription": [
      "2 回合內，以龍類其中造成的最大傷害轉換為全隊龍類的傷害"
    ],
    "monsterId": "413",
    "leaderName": "噬血龍族",
    "leaderDescription": "龍類攻擊力 1.5 倍，將龍類對敵方造成傷害的 5% 轉化為生命力，最大為生命力等值的 50%  (傷害轉化效果不能疊加, 並不計算主動及隊長技傷害)",
    "attribute": "水",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "龍儀姬 ‧ 烏蘇拉",
    "activeName": ["龍魂共鳴"],
    "activeDescription": [
      "2 回合內，以龍類其中造成的最大傷害轉換為全隊龍類的傷害"
    ],
    "monsterId": "414",
    "leaderName": "噬血龍王",
    "leaderDescription": "龍類攻擊力 2 倍，將龍類對敵方造成傷害的 5% 轉化為生命力 (不計算主動及隊長技傷害)，最大為生命力等值的 50% (不能疊加)",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "赤龍魂使",
    "activeName": ["攻擊姿勢 ‧ 火"],
    "activeDescription": ["心符石轉化為火符石"],
    "monsterId": "415",
    "leaderName": "幻龍利牙",
    "leaderDescription": "龍類攻擊力 1.5 倍；消除一組 6 粒或以上的相同屬性符石，龍類攻擊力 3 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "龍儀姬 ‧ 愛格德",
    "activeName": ["攻擊姿勢 ‧ 火"],
    "activeDescription": ["心符石轉化為火符石"],
    "monsterId": "416",
    "leaderName": "幻龍利牙",
    "leaderDescription": "龍類攻擊力 1.5 倍；消除一組 6 粒或以上的相同屬性符石，龍類攻擊力 3 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "青龍魂使",
    "activeName": ["群龍壓迫"],
    "activeDescription": ["1 回合內，所受傷害將會以龍類的數量而減少"],
    "monsterId": "417",
    "leaderName": "噬血龍族",
    "leaderDescription": "龍類攻擊力 1.5 倍，將龍類對敵方造成傷害的 5% 轉化為生命力，最大為生命力等值的 50%  (傷害轉化效果不能疊加, 並不計算主動及隊長技傷害)",
    "attribute": "木",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "龍儀姬 ‧ 芭芭拉",
    "activeName": ["群龍壓迫"],
    "activeDescription": ["1 回合內，所受傷害將會以龍類的數量而減少"],
    "monsterId": "418",
    "leaderName": "噬血龍王",
    "leaderDescription": "龍類攻擊力 2 倍，將龍類對敵方造成傷害的 5% 轉化為生命力 (不計算主動及隊長技傷害)，最大為生命力等值的 50% (不能疊加)",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "光龍魂使",
    "activeName": ["攻擊姿勢 ‧ 光"],
    "activeDescription": ["心符石轉化為光符石"],
    "monsterId": "419",
    "leaderName": "幻龍利爪",
    "leaderDescription": "消除一組 6 粒或以上的相同符石，龍類攻擊力 3 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "龍脈者 ‧ 安納",
    "activeName": ["攻擊姿勢 ‧ 光"],
    "activeDescription": ["心符石轉化為光符石"],
    "monsterId": "420",
    "leaderName": "幻龍利爪",
    "leaderDescription": "消除一組 6 粒或以上的相同符石，龍類攻擊力 3 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "暗龍魂使",
    "activeName": ["龍力招來 ‧ 暗"],
    "activeDescription": [
      "龍類攻擊力減至 0，並將龍類攻擊力加入自身攻擊力，消除暗符石才會發動攻擊 (效果會在再次發動此技能或死亡後消失）"
    ],
    "monsterId": "421",
    "leaderName": "幻龍利牙",
    "leaderDescription": "龍類攻擊力 1.5 倍；消除一組 6 粒或以上的相同屬性符石，龍類攻擊力 3 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "龍脈者 ‧ 諾瓦利斯",
    "activeName": ["龍力招來 ‧ 暗"],
    "activeDescription": [
      "龍類攻擊力減至 0，並將龍類攻擊力加入自身攻擊力，消除暗符石才會發動攻擊 (效果會在再次發動此技能或死亡後消失）"
    ],
    "monsterId": "422",
    "leaderName": "幻龍利牙",
    "leaderDescription": "龍類攻擊力 1.5 倍；消除一組 6 粒或以上的相同屬性符石，龍類攻擊力 3 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "異域法眼",
    "activeName": ["旋風一擊"],
    "activeDescription": ["對單一敵人造成 5 倍木屬性傷害"],
    "monsterId": "423",
    "leaderName": "木之防護",
    "leaderDescription": "木屬性傷害減少 30%",
    "attribute": "木",
    "race": "強化素材",
    "star": "1★"
  },
  {
    "monsterName": "機關騎士",
    "activeName": ["烈炎一擊"],
    "activeDescription": ["對單一敵人造成 5 倍火屬性傷害"],
    "monsterId": "424",
    "leaderName": "火之防護",
    "leaderDescription": "火屬性傷害減少 30%",
    "attribute": "火",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "永劫碑文像",
    "activeName": ["寒冰一擊"],
    "activeDescription": ["對單一敵人造成 5 倍水屬性傷害"],
    "monsterId": "425",
    "leaderName": "水之防護",
    "leaderDescription": "水屬性傷害減少 30%",
    "attribute": "水",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "碧海萬年靈魂石",
    "activeName": ["水波猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍水屬性傷害"],
    "monsterId": "426",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "熾焰萬年靈魂石",
    "activeName": ["火焰猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍火屬性傷害"],
    "monsterId": "427",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "大地萬年靈魂石",
    "activeName": ["大地猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍木屬性傷害"],
    "monsterId": "428",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "追憶旅人",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "429",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "光",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "號角手加拉爾",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "430",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "光",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "貪婪精靈女王",
    "activeName": ["治癒之心"],
    "activeDescription": [
      "回復效果提升 2 倍，直至沒有消除心符石 (不包括主動及隊長技)"
    ],
    "monsterId": "431",
    "leaderName": "妖精之狂怒",
    "leaderDescription": "妖精類攻擊力 2.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "奪寶海盜",
    "activeName": ["水火攻擊轉化"],
    "activeDescription": ["心符石轉化為水符石，同時將火符石轉化為心符石"],
    "monsterId": "432",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "冰晶領航者 ‧ 奪寶海盜",
    "activeName": ["水火攻擊轉化"],
    "activeDescription": ["心符石轉化為水符石，同時將火符石轉化為心符石"],
    "monsterId": "433",
    "leaderName": "浪濤萬鈞之怒",
    "leaderDescription": "水屬性攻擊力 4 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "紅纓武者",
    "activeName": ["火木攻擊轉化"],
    "activeDescription": ["心符石轉化為火符石，同時將木符石轉化為心符石"],
    "monsterId": "434",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "火靈之舞 ‧ 紅纓武者",
    "activeName": ["火木攻擊轉化"],
    "activeDescription": ["心符石轉化為火符石，同時將木符石轉化為心符石"],
    "monsterId": "435",
    "leaderName": "熾燄萬鈞之怒",
    "leaderDescription": "火屬性攻擊力 4 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "捕風酋長",
    "activeName": ["木水攻擊轉化"],
    "activeDescription": ["心符石轉化為木符石，同時將水符石轉化為心符石"],
    "monsterId": "436",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "翡翠獵手 ‧ 捕風酋長",
    "activeName": ["木水攻擊轉化"],
    "activeDescription": ["心符石轉化為木符石，同時將水符石轉化為心符石"],
    "monsterId": "437",
    "leaderName": "藤木萬鈞之怒",
    "leaderDescription": "木屬性攻擊力 4 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "清泉守衛",
    "activeName": ["幸運治癒 ‧ 水"],
    "activeDescription": [
      "將 3 粒符石轉化為心符石 (火符石優先轉換) ，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "438",
    "leaderName": "絕境意志",
    "leaderDescription": "當前生命力大於 50% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "炎鎧戰士",
    "activeName": ["幸運治癒 ‧ 火"],
    "activeDescription": [
      "將 3 粒符石轉化為心符石 (木符石優先轉換) ，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "439",
    "leaderName": "狐仙軍神",
    "leaderDescription": "全隊攻擊力及回復力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "雁目射手",
    "activeName": ["幸運治癒 ‧ 木"],
    "activeDescription": [
      "將 3 粒符石轉化為心符石 (水符石優先轉換) ，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "440",
    "leaderName": "百步穿楊",
    "leaderDescription": "當進行單體攻擊時，攻擊力 2.5 倍，適用於所有成員",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "萬劍寵僕",
    "activeName": ["幸運治癒 ‧ 光"],
    "activeDescription": [
      "將 3 粒符石轉化為心符石 (暗符石優先轉換) ，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "441",
    "leaderName": "野獸之意志",
    "leaderDescription": "獸類生命力 2.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "暗影鬥士",
    "activeName": ["幸運治癒 ‧ 暗"],
    "activeDescription": [
      "將 3 粒符石轉化為心符石 (光符石優先轉換) ，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "442",
    "leaderName": "木馬屠城計",
    "leaderDescription": "當生命力 20% 以下，全隊攻擊力 3 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "占星蛙法師",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "443",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "道法飄蟲",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "444",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "修道雛鴨",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "445",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "賜福蜜蜂",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "446",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "奧秘魚術士",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "447",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "符靈典範 ‧ 綠茵國王",
    "activeName": ["元素共鳴 ‧ 獸"],
    "activeDescription": ["1 回合內，消除三種或以上屬性符石，獸類攻擊力 2 倍"],
    "monsterId": "448",
    "leaderName": "猛獸之強權",
    "leaderDescription": "獸類攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "狂怒蜥蜴暴君",
    "activeName": ["弱肉強食"],
    "activeDescription": [
      "對敵方全體進行火屬性攻擊，隊伍中龍族成員愈多，攻擊力愈高，每擊斃 1 個敵人回復自身總生命力 20%"
    ],
    "monsterId": "449",
    "leaderName": "龍之狂怒",
    "leaderDescription": "龍類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "法則女神 ‧ 姬氏",
    "activeName": ["引力之勢"],
    "activeDescription": ["1 回合內，光符石及暗符石兼具自身屬性符石效果"],
    "monsterId": "450",
    "leaderName": "神魔法則",
    "leaderDescription": "當隊伍中只有神族及魔族成員時，神族攻擊力 3 倍及魔族攻擊力 2.5 倍，同時火符石及木符石兼具 50% 水符石效果 (效果不能疊加)",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "地精絞殺者",
    "activeName": ["攻擊姿勢 ‧ 水"],
    "activeDescription": ["心符石轉化為水符石"],
    "monsterId": "451",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "地精斬首者",
    "activeName": ["攻擊姿勢 ‧ 火"],
    "activeDescription": ["心符石轉化為火符石"],
    "monsterId": "452",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "地精扼喉者",
    "activeName": ["攻擊姿勢 ‧ 木"],
    "activeDescription": ["心符石轉化為木符石"],
    "monsterId": "453",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "地精碎骨者",
    "activeName": ["攻擊姿勢 ‧ 光"],
    "activeDescription": ["心符石轉化為光符石"],
    "monsterId": "454",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "地精切裂者",
    "activeName": ["攻擊姿勢 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗符石"],
    "monsterId": "455",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "星佑法師愛莉絲",
    "activeName": ["流水暴擊"],
    "activeDescription": ["對敵方全體進行 20 次水屬性攻擊"],
    "monsterId": "456",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "管狐飼者瑪莉曼",
    "activeName": ["烈焰暴擊"],
    "activeDescription": ["對敵方全體進行 20 次火屬性攻擊"],
    "monsterId": "457",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "煉屍術士凱莉絲",
    "activeName": ["片葉暴擊"],
    "activeDescription": ["對敵方全體進行 20 次木屬性攻擊"],
    "monsterId": "458",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "神罰使者安迪莉亞",
    "activeName": ["光刃暴擊"],
    "activeDescription": ["對敵方全體進行 20 次光屬性攻擊"],
    "monsterId": "459",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "鍊金巫師莉莉絲",
    "activeName": ["暗戈暴擊"],
    "activeDescription": ["對敵方全體進行 20 次暗屬性攻擊"],
    "monsterId": "460",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "冽霜武僧",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "461",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "岩焰統領",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "462",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "木靈栽者",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "463",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "聖裁勇者",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "464",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "黑影刺客",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "465",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "貴族伊莉莎白",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "466",
    "leaderName": "戾氣盈溢 ‧ 水",
    "leaderDescription": "每次消除水符石，水屬性攻擊力持續提升。連續兩回合沒有消除水符石，攻擊力減少。當攻擊力達至最高 3 倍時，需每回合消除水符石，否則攻擊力減少。",
    "attribute": "水",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "血浴美人 ‧ 伊莉莎白",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "467",
    "leaderName": "戾氣盈溢 ‧ 水",
    "leaderDescription": "每次消除水符石，水屬性攻擊力持續提升。連續兩回合沒有消除水符石，攻擊力減少。當攻擊力達至最高 3 倍時，需每回合消除水符石，否則攻擊力減少。",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "信差潔琪",
    "activeName": ["狂魔暴噬"],
    "activeDescription": [
      "單體攻擊轉化為全體攻擊，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "468",
    "leaderName": "戾氣盈溢 ‧ 火",
    "leaderDescription": "每次消除火符石，火屬性攻擊力持續提升。連續兩回合沒有消除火符石，攻擊力減少。當攻擊力達至最高 3 倍時，需每回合消除火符石，否則攻擊力減少。",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "彈簧腿 ‧ 潔琪",
    "activeName": ["狂魔暴噬"],
    "activeDescription": [
      "單體攻擊轉化為全體攻擊，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "469",
    "leaderName": "戾氣盈溢 ‧ 火",
    "leaderDescription": "每次消除火符石，火屬性攻擊力持續提升。連續兩回合沒有消除火符石，攻擊力減少。當攻擊力達至最高 3 倍時，需每回合消除火符石，否則攻擊力減少。",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "婚約者貝莉",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "470",
    "leaderName": "戾氣盈溢 ‧ 木",
    "leaderDescription": "每次消除木符石，木屬性攻擊力持續提升。連續兩回合沒有消除木符石，攻擊力減少。當攻擊力達至最高 3 倍時，需每回合消除木符石，否則攻擊力減少。",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "罌花新娘 ‧ 貝莉",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "471",
    "leaderName": "戾氣盈溢 ‧ 木",
    "leaderDescription": "每次消除木符石，木屬性攻擊力持續提升。連續兩回合沒有消除木符石，攻擊力減少。當攻擊力達至最高 3 倍時，需每回合消除木符石，否則攻擊力減少。",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "紳士傑克",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "472",
    "leaderName": "魔之血怒",
    "leaderDescription": "魔族攻擊力 2 倍及生命力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "開膛怪傑 ‧ 傑克",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "473",
    "leaderName": "魔之血怒",
    "leaderDescription": "魔族攻擊力 2 倍及生命力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "理髮魔偶陶德",
    "activeName": ["狂魔暴噬"],
    "activeDescription": [
      "單體攻擊轉化為全體攻擊，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "474",
    "leaderName": "魔之本性",
    "leaderDescription": "魔族攻擊力，生命力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "戲謔小丑 ‧ 陶德",
    "activeName": ["狂魔暴噬"],
    "activeDescription": [
      "單體攻擊轉化為全體攻擊，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "475",
    "leaderName": "魔之本性",
    "leaderDescription": "魔族攻擊力，生命力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "冰雪巫師 ‧ 波葛",
    "activeName": ["遊刃有餘"],
    "activeDescription": ["大幅延長移動符石時間至 15 秒"],
    "monsterId": "476",
    "leaderName": "破釜沉舟",
    "leaderDescription": "10 回合內，全隊攻擊力 3 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "惡作劇精靈 ‧ 波加特",
    "activeName": ["遊刃有餘"],
    "activeDescription": ["大幅延長移動符石時間至 15 秒"],
    "monsterId": "477",
    "leaderName": "破釜沉舟",
    "leaderDescription": "10 回合內，全隊攻擊力 3 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "掃除小精靈 ‧ 布朗尼",
    "activeName": ["遊刃有餘"],
    "activeDescription": ["大幅延長移動符石時間至 15 秒"],
    "monsterId": "478",
    "leaderName": "破釜沉舟",
    "leaderDescription": "10 回合內，全隊攻擊力 3 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "沉思的賢者 ‧ 山特古羅斯",
    "activeName": ["出其不意"],
    "activeDescription": ["15 秒內，可任意移動符石而不會發動消除"],
    "monsterId": "479",
    "leaderName": "靈思之力",
    "leaderDescription": "人類及妖精類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "色慾胎飼魔母",
    "activeName": ["水之活靈"],
    "activeDescription": ["2 回合內，水符石兼具心符石效果"],
    "monsterId": "480",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "記憶與遺忘 ‧ 女武神烏爾德",
    "activeName": ["凝冰之際"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合，效果期間必然延長移動符石時間 5 秒"
    ],
    "monsterId": "481",
    "leaderName": "攻守一體 ‧ 水",
    "leaderDescription": "水符石兼具 50% 心符石效果",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "開端與終結 ‧ 女武神斯庫爾德",
    "activeName": ["操縱之火"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除，達成 8 連擊 (Combo) 或以上，火屬性攻擊力 2 倍"
    ],
    "monsterId": "482",
    "leaderName": "攻守一體 ‧ 火",
    "leaderDescription": "火符石兼具 50% 心符石效果",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "命定與改變 ‧ 女武神薇兒丹蒂",
    "activeName": ["腐蝕"],
    "activeDescription": [
      "敵方全體被寄生，每回合將吸取相當於自身 2 倍回復力的生命力，此傷害無視防禦力、屬性及敵方技能，並持續到死亡，效果最多可疊加 3 次"
    ],
    "monsterId": "483",
    "leaderName": "攻守一體 ‧ 木",
    "leaderDescription": "木符石兼具 50% 心符石效果",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "神木之眷 ‧ 永祭之伊登",
    "activeName": ["癒合結界"],
    "activeDescription": ["連續 5 回合回復自身回復力10倍的生命力"],
    "monsterId": "484",
    "leaderName": "超絕回復",
    "leaderDescription": "每回合回復自身 7 倍回復力的生命力 (需要消除符石)",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "破刃之鐮 ‧ 布倫希爾德",
    "activeName": ["斬斷束縛"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍，並解除所有成員被封鎖的技能及清除敵人身上的控制技能 (此技能無視封鎖技能)。發動技能的回合若擊斃所有敵人，下一回合全隊攻擊力 2.5 倍"
    ],
    "monsterId": "485",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "水龍牙棋",
    "activeName": ["寒冰強擊"],
    "activeDescription": ["對單一敵人造成 10 倍水屬性傷害"],
    "monsterId": "486",
    "leaderName": "魔之力",
    "leaderDescription": "魔族攻擊力 1.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "火龍牙棋",
    "activeName": ["烈炎強擊"],
    "activeDescription": ["對單一敵人造成 10 倍火屬性傷害"],
    "monsterId": "487",
    "leaderName": "魔之力",
    "leaderDescription": "魔族攻擊力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "木龍牙棋",
    "activeName": ["旋風強擊"],
    "activeDescription": ["對單一敵人造成 10 倍木屬性傷害"],
    "monsterId": "488",
    "leaderName": "魔之力",
    "leaderDescription": "魔族攻擊力 1.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "光龍牙棋",
    "activeName": ["金光強擊"],
    "activeDescription": ["對單一敵人造成 10 倍光屬性傷害"],
    "monsterId": "489",
    "leaderName": "魔之力",
    "leaderDescription": "魔族攻擊力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "暗龍牙棋",
    "activeName": ["暗色強擊"],
    "activeDescription": ["對單一敵人造成 10 倍暗屬性傷害"],
    "monsterId": "490",
    "leaderName": "魔之力",
    "leaderDescription": "魔族攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "仰望者瘋帽",
    "activeName": ["自由之軀"],
    "activeDescription": ["3 回合內，隊伍不會被封鎖主動技能"],
    "monsterId": "491",
    "leaderName": "靈獸之力",
    "leaderDescription": "獸類及妖精類攻擊力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "狂人三月兔",
    "activeName": ["連擊之盾"],
    "activeDescription": ["3 回合內，隊伍不受連擊技能影響"],
    "monsterId": "492",
    "leaderName": "靈獸之力",
    "leaderDescription": "獸類及妖精類攻擊力 2 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "建言者書頁蟲",
    "activeName": ["百毒不侵"],
    "activeDescription": ["3 回合內，隊伍不受中毒技能影響"],
    "monsterId": "493",
    "leaderName": "靈獸之力",
    "leaderDescription": "獸類及妖精類攻擊力 2 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "餐桌騎士睡鼠",
    "activeName": ["反擊護牆"],
    "activeDescription": ["1 回合內，受敵人反擊傷害減少 100%"],
    "monsterId": "494",
    "leaderName": "靈獸之力",
    "leaderDescription": "獸類及妖精類攻擊力 2 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "魔郡咧齒貓",
    "activeName": ["除威去脅"],
    "activeDescription": ["指定敵人無法在死亡後對召喚師造成傷害"],
    "monsterId": "495",
    "leaderName": "靈獸之力",
    "leaderDescription": "獸類及妖精類攻擊力 2 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "魔境之主 ‧ 紅心女王",
    "activeName": ["蓄能傳承 ‧ 心"],
    "activeDescription": [
      "將與累積戰鬥回合數同等數量的符石轉為心符石，最多 7 粒。發動技能後會將累積戰鬥回合數重置"
    ],
    "monsterId": "496",
    "leaderName": "心之連動",
    "leaderDescription": "每累計消除 3 粒心符石 ，將產生 1 粒心強化符石",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "笑容守護犬",
    "activeName": ["光暗攻擊轉化"],
    "activeDescription": ["心符石轉化為光符石，同時將暗符石轉化為心符石"],
    "monsterId": "497",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "福德神寵 ‧ 笑犬",
    "activeName": ["光暗攻擊轉化"],
    "activeDescription": ["心符石轉化為光符石，同時將暗符石轉化為心符石"],
    "monsterId": "498",
    "leaderName": "玄光萬鈞之怒",
    "leaderDescription": "光屬性攻擊力 4 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "怒顏守護犬",
    "activeName": ["暗光攻擊轉化"],
    "activeDescription": ["心符石轉化為暗符石，同時將光符石轉化為心符石"],
    "monsterId": "499",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "懲惡神衛 ‧ 怒犬",
    "activeName": ["暗光攻擊轉化"],
    "activeDescription": ["心符石轉化為暗符石，同時將光符石轉化為心符石"],
    "monsterId": "500",
    "leaderName": "幽冥萬鈞之怒",
    "leaderDescription": "暗屬性攻擊力 4 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "韶光仙獸 ‧ 年",
    "activeName": ["蓄勢暴擊"],
    "activeDescription": [
      "1 回合內不能對敵方造成傷害，下一回會追加上回的連擊 (Combo) 數目對敵人進行攻擊"
    ],
    "monsterId": "501",
    "leaderName": "符靈聚擊 ‧ 光",
    "leaderDescription": "消除 4 粒或以上的光符石，光屬性攻擊力 2.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "覓果幻獸",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "502",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "木",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "原始滄龍",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "503",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "水",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "魅果精靈",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "504",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "暗",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "審判魔人",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "505",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "火",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "不滅戰意 ‧ 費雷",
    "activeName": ["符石強化 ‧ 水"],
    "activeDescription": ["水符石轉化為水強化符石"],
    "monsterId": "506",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "烈火懲責 ‧ 提爾",
    "activeName": ["符石強化 ‧ 火"],
    "activeDescription": ["火符石轉化為火強化符石"],
    "monsterId": "507",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "唁魂之喚 ‧ 費蕾雅",
    "activeName": ["符石強化 ‧ 木"],
    "activeDescription": ["木符石轉化為木強化符石"],
    "monsterId": "508",
    "leaderName": "木之狂怒",
    "leaderDescription": "木屬性攻擊力 2.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "轟雷鳴動 ‧ 索爾",
    "activeName": ["符石強化 ‧ 光"],
    "activeDescription": ["光符石轉化為光強化符石"],
    "monsterId": "509",
    "leaderName": "光之狂怒",
    "leaderDescription": "光屬性攻擊力 2.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "不赦眚惡 ‧ 洛基",
    "activeName": ["符石強化 ‧ 暗"],
    "activeDescription": ["暗符石轉化為暗強化符石"],
    "monsterId": "510",
    "leaderName": "暗之狂怒",
    "leaderDescription": "暗屬性攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "乾坎天帝 ‧ 青龍",
    "activeName": ["攻擊姿勢 ‧ 水"],
    "activeDescription": ["心符石轉化為水符石"],
    "monsterId": "511",
    "leaderName": "真龍嘯天",
    "leaderDescription": "龍類攻擊力 2.5 倍及增加 200 點攻擊力",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "坎艮神鳥 ‧ 朱雀",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "512",
    "leaderName": "野獸之醒覺",
    "leaderDescription": "獸類回復力 3 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "震巽靈帝 ‧ 玄武",
    "activeName": ["防禦鐵壁"],
    "activeDescription": ["3 回合內，所受傷害減少 60%"],
    "monsterId": "513",
    "leaderName": "野獸之血晶",
    "leaderDescription": "獸類生命力 3 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "離坤獸皇 ‧ 白虎",
    "activeName": ["一髮千鈞"],
    "activeDescription": [
      "無視全體敵人 90% 的防禦力，持續 3 回合；並延遲其行動 1 回合"
    ],
    "monsterId": "514",
    "leaderName": "野獸之嗔怒",
    "leaderDescription": "獸類攻擊力 3 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "兌中邪帝 ‧ 饕餮",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "515",
    "leaderName": "野獸之嗔怒",
    "leaderDescription": "獸類攻擊力 3 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "復活火鳥",
    "activeName": ["火焰猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍火屬性傷害"],
    "monsterId": "516",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "魅影劍客",
    "activeName": ["水波猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍水屬性傷害"],
    "monsterId": "517",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "靈光飛刀手",
    "activeName": ["閃光猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍光屬性傷害"],
    "monsterId": "518",
    "leaderName": "妖精之歌",
    "leaderDescription": "妖精類回復力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "生命之光 ‧ 伊施妲",
    "activeName": ["屏氣養息"],
    "activeDescription": ["回復 50% 生命力"],
    "monsterId": "519",
    "leaderName": "聚精會神",
    "leaderDescription": "延長移動符石時間 3 秒",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "傲慢幽狼酋長",
    "activeName": ["屏氣養息"],
    "activeDescription": ["回復 50% 生命力"],
    "monsterId": "520",
    "leaderName": "猛獸之強權",
    "leaderDescription": "獸類攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "蝦兵 ‧ 蟹將",
    "activeName": ["橫掃怒擊 ‧ 水"],
    "activeDescription": ["對敵方全體進行 5 次水屬性攻擊"],
    "monsterId": "521",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "甲兵 ‧ 鎧將",
    "activeName": ["攻擊強化 ‧ 水"],
    "activeDescription": ["心符石轉化為水強化符石"],
    "monsterId": "522",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "修道客",
    "activeName": ["橫掃怒擊 ‧ 火"],
    "activeDescription": ["對敵方全體進行 5 次火屬性攻擊"],
    "monsterId": "523",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "崑崙道士",
    "activeName": ["攻擊強化 ‧ 火"],
    "activeDescription": ["心符石轉化為火強化符石"],
    "monsterId": "524",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "桃木精",
    "activeName": ["橫掃怒擊 ‧ 木"],
    "activeDescription": ["對敵方全體進行 5 次木屬性攻擊"],
    "monsterId": "525",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "千里眼",
    "activeName": ["攻擊強化 ‧ 木"],
    "activeDescription": ["心符石轉化為木強化符石"],
    "monsterId": "526",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "尋道者",
    "activeName": ["橫掃怒擊 ‧ 光"],
    "activeDescription": ["對敵方全體進行 5 次光屬性攻擊"],
    "monsterId": "527",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "散仙神女",
    "activeName": ["攻擊強化 ‧ 光"],
    "activeDescription": ["心符石轉化為光強化符石"],
    "monsterId": "528",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "柳鬼",
    "activeName": ["橫掃怒擊 ‧ 暗"],
    "activeDescription": ["對敵方全體進行 5 次暗屬性攻擊"],
    "monsterId": "529",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "順風耳",
    "activeName": ["攻擊強化 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗強化符石"],
    "monsterId": "530",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "太師聞仲",
    "activeName": ["絕地反擊 ‧ 水"],
    "activeDescription": [
      "3 回合內，心符石的掉落機率降至 0，並將原有機率增加至水符石的掉落機率"
    ],
    "monsterId": "531",
    "leaderName": "銳兵列陣",
    "leaderDescription": "隊伍中須有水和光屬性的成員，消除任何三種或以上屬性符石，水和光屬性攻擊力 2.5 倍；消除心符石時水及光屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "普化天尊 ‧ 聞仲",
    "activeName": ["絕地反擊 ‧ 水"],
    "activeDescription": [
      "3 回合內，心符石的掉落機率降至 0，並將原有機率增加至水符石的掉落機率"
    ],
    "monsterId": "532",
    "leaderName": "銳兵列陣",
    "leaderDescription": "隊伍中須有水和光屬性的成員，消除任何三種或以上屬性符石，水和光屬性攻擊力 2.5 倍；消除心符石時水及光屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "道僧燃燈",
    "activeName": ["鐵壁陣勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心強化符石"],
    "monsterId": "533",
    "leaderName": "符能點燃 ‧ 火之約",
    "leaderDescription": "2 粒火符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "錠光如來 ‧ 燃燈",
    "activeName": ["鐵壁陣勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心強化符石"],
    "monsterId": "534",
    "leaderName": "符能點燃 ‧ 火靈之約",
    "leaderDescription": "2 粒火符石或心符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "靈將楊戩",
    "activeName": ["枯朽的戰場"],
    "activeDescription": [
      "2 回合內，敵方全體轉為水屬性，並提升木屬性對水屬性目標的攻擊力"
    ],
    "monsterId": "535",
    "leaderName": "符能點燃 ‧ 木之約",
    "leaderDescription": "2 粒木符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "清源仙將 ‧ 楊戩",
    "activeName": ["枯朽的戰場"],
    "activeDescription": [
      "2 回合內，敵方全體轉為水屬性，並提升木屬性對水屬性目標的攻擊力"
    ],
    "monsterId": "536",
    "leaderName": "符能點燃 ‧ 木靈之約",
    "leaderDescription": "2 粒木符石或心符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "仙道姜尚",
    "activeName": ["鐵壁陣勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心強化符石"],
    "monsterId": "537",
    "leaderName": "銳兵列陣",
    "leaderDescription": "隊伍中須有水和光屬性的成員，消除任何三種或以上屬性符石，水和光屬性攻擊力 2.5 倍；消除心符石時水及光屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "封神仙帥 ‧ 姜子牙",
    "activeName": ["鐵壁陣勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心強化符石"],
    "monsterId": "538",
    "leaderName": "銳兵列陣",
    "leaderDescription": "隊伍中須有水和光屬性的成員，消除任何三種或以上屬性符石，水和光屬性攻擊力 2.5 倍；消除心符石時水及光屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "仙道申公豹",
    "activeName": ["攻擊強化 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗強化符石"],
    "monsterId": "539",
    "leaderName": "愈戰愈強",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "號雷鬥罡 ‧ 申公豹",
    "activeName": ["攻擊強化 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗強化符石"],
    "monsterId": "540",
    "leaderName": "愈戰愈強 ‧ 改",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "傀儡仙童",
    "activeName": ["火焰怒擊"],
    "activeDescription": ["對敵方全體造成 5 倍火屬性傷害"],
    "monsterId": "541",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "三清祖師 ‧ 元始天尊",
    "activeName": ["滄海圍城"],
    "activeDescription": ["將所有符石轉化為水符石"],
    "monsterId": "542",
    "leaderName": "凝神之力",
    "leaderDescription": "全體攻擊的攻擊力 3 倍 (不包括兼具效果)",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "靈寶天尊 ‧ 通天教主",
    "activeName": ["魔控乾坤 ‧ 火"],
    "activeDescription": ["1 回合內，光符石及暗符石兼具火符石效果"],
    "monsterId": "543",
    "leaderName": "魔之本性",
    "leaderDescription": "魔族攻擊力，生命力及回復力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "異界使者 ‧ 花蕊夫人",
    "activeName": ["延時之魅"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍，並延長移動符石時間至 8 秒"
    ],
    "monsterId": "544",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "尋夢人 ‧ 馬休",
    "activeName": ["隨念靈動"],
    "activeDescription": [
      "於移動符石時間內，可任意移動符石而不會發動消除，效果持續 2 回合"
    ],
    "monsterId": "545",
    "leaderName": "守護之念",
    "leaderDescription": "全隊攻擊力 3 倍；消除心符石時，該回合木屬性傷害減少 30% 及回復 2000 點生命力",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "諾弗 ‧ 刻",
    "activeName": ["橫掃攻擊 ‧ 水"],
    "activeDescription": ["對敵方全體進行 3 次水屬性攻擊"],
    "monsterId": "546",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "腹蛇異兵",
    "activeName": ["橫掃攻擊 ‧ 火"],
    "activeDescription": ["對敵方全體進行 3 次火屬性攻擊"],
    "monsterId": "547",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "異神之胎",
    "activeName": ["橫掃攻擊 ‧ 木"],
    "activeDescription": ["對敵方全體進行 3 次木屬性攻擊"],
    "monsterId": "548",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "銀曉信徒",
    "activeName": ["橫掃攻擊 ‧ 光"],
    "activeDescription": ["對敵方全體進行 3 次光屬性攻擊"],
    "monsterId": "549",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "噬土魔蟲",
    "activeName": ["橫掃攻擊 ‧ 暗"],
    "activeDescription": ["對敵方全體進行 3 次暗屬性攻擊"],
    "monsterId": "550",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "深潛的異族",
    "activeName": ["滄海倏怒"],
    "activeDescription": ["2 回合內，水屬性攻擊力 1.5 倍"],
    "monsterId": "551",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "深潛者之僕 ‧ 蟆鰣",
    "activeName": ["滄海倏怒"],
    "activeDescription": ["2 回合內，水屬性攻擊力 1.5 倍"],
    "monsterId": "552",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "魔焰吸血鬼",
    "activeName": ["熾焰倏怒"],
    "activeDescription": ["2 回合內，火屬性攻擊力 1.5 倍"],
    "monsterId": "553",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "永焰之渴 ‧ 唐納德",
    "activeName": ["熾焰倏怒"],
    "activeDescription": ["2 回合內，火屬性攻擊力 1.5 倍"],
    "monsterId": "554",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "巨蟾異獸",
    "activeName": ["大地倏怒"],
    "activeDescription": ["2 回合內，木屬性攻擊力 1.5 倍"],
    "monsterId": "555",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "食魂魔蟾 ‧ 札特瓜",
    "activeName": ["大地倏怒"],
    "activeDescription": ["2 回合內，木屬性攻擊力 1.5 倍"],
    "monsterId": "556",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "幻神化身",
    "activeName": ["玄光倏怒"],
    "activeDescription": ["2 回合內，光屬性攻擊力 1.5 倍"],
    "monsterId": "557",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "幻夢古神 ‧ 諾登斯",
    "activeName": ["玄光倏怒"],
    "activeDescription": ["2 回合內，光屬性攻擊力 1.5 倍"],
    "monsterId": "558",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "異域蟲族",
    "activeName": ["幽冥倏怒"],
    "activeDescription": ["2 回合內，暗屬性攻擊力 1.5 倍"],
    "monsterId": "559",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "門鑰之僕 ‧ 米戈",
    "activeName": ["幽冥倏怒"],
    "activeDescription": ["2 回合內，暗屬性攻擊力 1.5 倍"],
    "monsterId": "560",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "奈亞拉托提普",
    "activeName": ["魔王護壁"],
    "activeDescription": ["1 回合內，迴避所有敵人的攻擊"],
    "monsterId": "561",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "黃衣魅影 ‧ 哈斯塔",
    "activeName": ["絕地強化"],
    "activeDescription": ["所有符石轉化為強化符石"],
    "monsterId": "562",
    "leaderName": "魅幻神力",
    "leaderDescription": "全隊攻擊力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "負罪役夫 ‧ 尼祿",
    "activeName": ["光魂存械"],
    "activeDescription": ["1 回合內，所有符石兼具光符石 50% 效果"],
    "monsterId": "563",
    "leaderName": "魔之戰鼓",
    "leaderDescription": "魔族攻擊力及回復力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "機械原龍 ‧ 烏拉諾斯",
    "activeName": ["機動重炮"],
    "activeDescription": ["對敵方全體造成 50 倍自身攻擊力的無屬性傷害"],
    "monsterId": "564",
    "leaderName": "絕命暴擊",
    "leaderDescription": "每回合有 30% 機會攻擊力 7 倍。當生命力少於 10%，機會由 30% 變成 50%",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "趨炎之手‧ 紅袍皇后",
    "activeName": ["群起而攻 ‧ 獸"],
    "activeDescription": ["1 回合內，每個獸類成員追打攻擊 1 次"],
    "monsterId": "565",
    "leaderName": "猛獸之強權",
    "leaderDescription": "獸類攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "龍冠占星蛙",
    "activeName": ["狩獵之勢"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為獸類，同得此效果"
    ],
    "monsterId": "566",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "馭圈飄蟲",
    "activeName": ["攻守自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，回復 20,000 點生命力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "567",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "牛角雛鴨",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "568",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "金箍蜜蜂",
    "activeName": ["進退自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，所受傷害減少 80%；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "569",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "狐尾魚術士",
    "activeName": ["窮兇極怒"],
    "activeDescription": [
      "1 回合內，自身攻擊力 10 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "570",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "深潛之主宰 ‧ 達貢",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "571",
    "leaderName": "龍攻代守",
    "leaderDescription": "龍類攻擊力 2 倍，每個龍類成員自身回復力各自加入自身攻擊力；消除心符石可回復固定百分比的已損失生命力 ( 每粒心符石回復百分比相等於隊伍龍類數量的兩倍 )",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "冥炎之子嗣 ‧ 克圖格亞",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "572",
    "leaderName": "龍攻代守",
    "leaderDescription": "龍類攻擊力 2 倍，每個龍類成員自身回復力各自加入自身攻擊力；消除心符石可回復固定百分比的已損失生命力 ( 每粒心符石回復百分比相等於隊伍龍類數量的兩倍 )",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "撕星怒嘯者 ‧ 拜亞基",
    "activeName": ["防禦姿勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心符石"],
    "monsterId": "573",
    "leaderName": "龍攻代守",
    "leaderDescription": "龍類攻擊力 2 倍，每個龍類成員自身回復力各自加入自身攻擊力；消除心符石可回復固定百分比的已損失生命力 ( 每粒心符石回復百分比相等於隊伍龍類數量的兩倍 )",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "捕芒之聖主 ‧ 圖爾茲查",
    "activeName": ["雷光電擊"],
    "activeDescription": [
      "對全體敵人造成 15,000 點光屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "574",
    "leaderName": "真龍之脈",
    "leaderDescription": "龍類攻擊力 2.5 倍及增加 200 點回復力",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "怖慄飼食者 ‧ 法格恩",
    "activeName": ["黑洞瞬擊"],
    "activeDescription": [
      "對全體敵人造成 15,000 點暗屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "575",
    "leaderName": "龍之持守",
    "leaderDescription": "龍類攻擊力 2 倍及增加 200 點回復力，消除心符石時，等同消除暗符石，達 50% 暗符石效果",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "繁衍之結晶",
    "activeName": ["橫掃攻擊 ‧ 火"],
    "activeDescription": ["對敵方全體進行 3 次火屬性攻擊"],
    "monsterId": "576",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "精華搜捕者",
    "activeName": ["橫掃攻擊 ‧ 水"],
    "activeDescription": ["對敵方全體進行 3 次水屬性攻擊"],
    "monsterId": "577",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "4★"
  },
  {
    "monsterName": "蘊魔晶寵",
    "activeName": ["橫掃攻擊 ‧ 暗"],
    "activeDescription": ["對敵方全體進行 3 次暗屬性攻擊"],
    "monsterId": "578",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "雷霆天神宙斯",
    "activeName": ["戰意高昂"],
    "activeDescription": ["1 回合內，自身生命力愈高，攻擊力愈高，最大 2 倍"],
    "monsterId": "579",
    "leaderName": "元素防護",
    "leaderDescription": "所有屬性傷害減少 30%",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "驅靈冥神黑帝斯",
    "activeName": ["幽冥圍城"],
    "activeDescription": ["將所有符石轉化為暗符石"],
    "monsterId": "580",
    "leaderName": "元素凝匯",
    "leaderDescription": "隊伍成員的屬性愈多，攻擊力愈高，最大 3.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "龍霜城衛",
    "activeName": ["絕地反擊 ‧ 水"],
    "activeDescription": [
      "3 回合內，心符石的掉落機率降至 0，並將原有機率增加至水符石的掉落機率"
    ],
    "monsterId": "581",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "龍巫魔兵",
    "activeName": ["淨世一擊"],
    "activeDescription": [
      "消除所有附加效果，每個消除的效果對敵方全體造成 50,000 點無屬性傷害"
    ],
    "monsterId": "582",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "堅甲守軍",
    "activeName": ["群龍壓迫"],
    "activeDescription": ["1 回合內，所受傷害將會以龍類的數量而減少"],
    "monsterId": "583",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "4★"
  },
  {
    "monsterName": "龍牙主教",
    "activeName": ["能量爆發"],
    "activeDescription": ["單體攻擊轉化為全體攻擊，持續 3 回合"],
    "monsterId": "584",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "4★"
  },
  {
    "monsterName": "亡魂騎士",
    "activeName": ["狂魔暴噬"],
    "activeDescription": [
      "單體攻擊轉化為全體攻擊，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "585",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "4★"
  },
  {
    "monsterName": "怠惰綽約聖女",
    "activeName": ["靈氣圍城"],
    "activeDescription": ["將所有符石轉為心符石"],
    "monsterId": "586",
    "leaderName": "捨守為攻",
    "leaderDescription": "全隊攻擊力 2.5 倍，所受傷害提升 1.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "棋盤之主 ‧ 白皇后",
    "activeName": ["絕地逢生 ‧ 光"],
    "activeDescription": [
      "1 回合內，自身生命力愈低，光屬性攻擊力愈高，最大 2.5 倍"
    ],
    "monsterId": "587",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "雙生聖言者 ‧ 妍希",
    "activeName": ["聖言詠歌"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至光符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "588",
    "leaderName": "神聖之主義",
    "leaderDescription": "光屬性攻擊力及回復力 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "雙生夜言者 ‧ 妍希",
    "activeName": ["夜言鳴曲"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至暗符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "589",
    "leaderName": "暗黑之主義",
    "leaderDescription": "暗屬性攻擊力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "道德天尊 ‧ 太上老君",
    "activeName": ["森谷圍城"],
    "activeDescription": ["將所有符石轉化為木符石"],
    "monsterId": "590",
    "leaderName": "眾神之狂怒",
    "leaderDescription": "神族攻擊力 2.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "萬龍真主 ‧ 敖廣",
    "activeName": ["浪濤敕令"],
    "activeDescription": [
      "火符石與心符石轉化為水符石；同時將木符石轉換為心符石"
    ],
    "monsterId": "591",
    "leaderName": "真龍王震怒",
    "leaderDescription": "龍類攻擊力 3 倍及神族攻擊力 2.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "多聞護法 ‧ 哪吒",
    "activeName": ["燄火敕令"],
    "activeDescription": [
      "木符石與心符石轉化為火符石；同時將水符石轉換為心符石"
    ],
    "monsterId": "592",
    "leaderName": "真火煉獄",
    "leaderDescription": "無視敵方屬性，每回合以自身攻擊力 15 倍追打 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "混世霸者 ‧ 牛魔王",
    "activeName": ["森野敕令"],
    "activeDescription": [
      "水符石與心符石轉化為木符石；同時將火符石轉換為心符石"
    ],
    "monsterId": "593",
    "leaderName": "霸王震怒",
    "leaderDescription": "獸類及妖精類攻擊力 3 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "鬥神聖者 ‧ 孫悟空",
    "activeName": ["金睛火眼 ‧ 凝煉"],
    "activeDescription": ["3 回合內，無視全體敵人的防禦力"],
    "monsterId": "594",
    "leaderName": "護甲金身",
    "leaderDescription": "生命力愈高，所受傷害愈低，最多減少 60 % 傷害；生命力愈低，迴避敵人攻擊的機率愈高，最大 50%",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "傾世媚狐 ‧ 蘇妲己",
    "activeName": ["魅惑傾城"],
    "activeDescription": [
      "20 秒內，可任意移動符石而不會發動消除；消除的符石數目愈多，攻擊力提升愈多，最大 1.9 倍 (只計算首批消除的符石數目)"
    ],
    "monsterId": "595",
    "leaderName": "傾世絕色",
    "leaderDescription": "連擊 (Combo) 時攻擊力大幅提升 125%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "格蕾琴與海森堡",
    "activeName": ["攻守自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，回復 20,000 點生命力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "596",
    "leaderName": "龍魂輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上龍類成員時，人類攻擊力 3.5 倍，龍類攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "連肢機偶 · 格蕾琴與海森堡",
    "activeName": ["攻守自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，回復 20,000 點生命力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "597",
    "leaderName": "龍魂輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上龍類成員時，人類攻擊力 4.5 倍，龍類攻擊力 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "阿涅茜",
    "activeName": ["攻守自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，回復 20,000 點生命力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "598",
    "leaderName": "龍魂輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上龍類成員時，人類攻擊力 3.5 倍，龍類攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "焚魔學者 ‧ 阿涅茜",
    "activeName": ["攻守自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，回復 20,000 點生命力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "599",
    "leaderName": "龍魂輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上龍類成員時，人類攻擊力 4.5 倍，龍類攻擊力 3.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "風動傀儡",
    "activeName": ["攻勢如虹"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下時，無視全體敵人的防禦力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "600",
    "leaderName": "幻獸輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上獸類或妖精類成員時，人類攻擊力 3.5 倍，獸類及妖精類攻擊力 2.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "蠻牛貳式",
    "activeName": ["攻勢如虹"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下時，無視全體敵人的防禦力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "601",
    "leaderName": "幻獸輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上獸類或妖精類成員時，人類攻擊力 4.5 倍，獸類及妖精類攻擊力 3.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "莉莎 ‧ 畢法露",
    "activeName": ["進退自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，所受傷害減少 80%；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "602",
    "leaderName": "妖魔輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上魔族或妖精類成員時，人類攻擊力 3.5 倍，魔族及妖精類攻擊力 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "半偶研製者 ‧ 莉莎",
    "activeName": ["進退自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，所受傷害減少 80%；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "603",
    "leaderName": "妖魔輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上魔族或妖精類成員時，人類攻擊力 4.5 倍，魔族及妖精類攻擊力 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "米基利",
    "activeName": ["攻勢如虹"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下時，無視全體敵人的防禦力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "604",
    "leaderName": "神靈輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上神族成員時，人類攻擊力 3.5 倍，神族攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "偏狂學士 ‧ 米基利",
    "activeName": ["攻勢如虹"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下時，無視全體敵人的防禦力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "605",
    "leaderName": "神靈輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上神族成員時，人類攻擊力 4.5 倍，神族攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "澄澈歌手",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "606",
    "leaderName": "人類之歌",
    "leaderDescription": "人類回復力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "炎炔樂師",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "607",
    "leaderName": "人類之歌",
    "leaderDescription": "人類回復力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "靈木鼓手",
    "activeName": ["防禦姿勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心符石"],
    "monsterId": "608",
    "leaderName": "人類之歌",
    "leaderDescription": "人類回復力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "星魅琴師",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "609",
    "leaderName": "人類之歌",
    "leaderDescription": "人類回復力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "空弦提琴手",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "610",
    "leaderName": "人類之歌",
    "leaderDescription": "人類回復力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "DAESUNG",
    "activeName": ["轉守為攻 ‧ 水"],
    "activeDescription": [
      "將 3 粒符石轉化為水符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "611",
    "leaderName": "攻守同源 ‧ 水波",
    "leaderDescription": "水屬性攻擊力 2 倍，同時心符石兼具 50% 水符石效果 (效果不能疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "TAEYANG",
    "activeName": ["轉守為攻 ‧ 火"],
    "activeDescription": [
      "將 3 粒符石轉化為火符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "612",
    "leaderName": "攻守同源 ‧ 火燄",
    "leaderDescription": "火屬性攻擊力 2 倍，同時心符石兼具 50% 火符石效果 (效果不能疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "SEUNGRI",
    "activeName": ["轉守為攻 ‧ 木"],
    "activeDescription": [
      "將 3 粒符石轉化為木符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "613",
    "leaderName": "攻守同源 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 2 倍，同時心符石兼具 50% 木符石效果 (效果不能疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "T.O.P",
    "activeName": ["轉守為攻 ‧ 光"],
    "activeDescription": [
      "將 3 粒符石轉化為光符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "614",
    "leaderName": "攻守同源 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2 倍，同時心符石兼具 50% 光符石效果 (效果不能疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "G-Dragon",
    "activeName": ["轉守為攻 ‧ 暗"],
    "activeDescription": [
      "將 3 粒符石轉化為暗符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "615",
    "leaderName": "攻守同源 ‧ 幽暗",
    "leaderDescription": "暗屬性攻擊力 2 倍，同時心符石兼具 50% 暗符石效果 (效果不能疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "龍傲影控師",
    "activeName": ["蓄能移魂 ‧ 暗"],
    "activeDescription": [
      "將等同於累積戰鬥回合 (需要消除符石) 數量的符石轉換為暗符石，最多 5 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "616",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "人面雛鳥",
    "activeName": ["石化"],
    "activeDescription": [
      "石化敵方全體，使受影響目標無法行動並轉為木屬性，持續 3 回合"
    ],
    "monsterId": "617",
    "leaderName": "治療之心",
    "leaderDescription": "每回合回復自身回復力 (需要消除符石)",
    "attribute": "木",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "太陰星君 ‧ 常羲",
    "activeName": ["延壽靈丹"],
    "activeDescription": ["將場上數量最多的 1 種屬性符石轉化為心符石"],
    "monsterId": "618",
    "leaderName": "全神貫注",
    "leaderDescription": "當隊伍中只有神族成員時，全隊攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "搗藥兔",
    "activeName": ["暗影猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍暗屬性傷害"],
    "monsterId": "619",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "超獸魔神",
    "activeName": ["魔魂附體"],
    "activeDescription": ["5 回合內，所有屬性符石兼具 50% 其他屬性符石效果"],
    "monsterId": "620",
    "leaderName": "孤注一擲",
    "leaderDescription": "當隊伍中只有 2 個火屬性成員時，全隊攻擊力 4 倍及回復力 3 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "7★"
  },
  {
    "monsterName": "奧托",
    "activeName": ["狩獵之勢"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為獸類，同得此效果"
    ],
    "monsterId": "621",
    "leaderName": "水影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；水符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "水",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "孤傲的奧托",
    "activeName": ["狩獵之勢"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為獸類，同得此效果"
    ],
    "monsterId": "622",
    "leaderName": "水影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；水符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "水",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "部落勇士 ‧ 奧托",
    "activeName": ["狩獵之勢"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為獸類，同得此效果"
    ],
    "monsterId": "623",
    "leaderName": "水影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；水符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "伊奇多",
    "activeName": ["燄之結界"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標無法行動並轉為火屬性，持續 3 回合"
    ],
    "monsterId": "624",
    "leaderName": "燄影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；火符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "火",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "癲狂的伊奇多",
    "activeName": ["燄之結界"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標無法行動並轉為火屬性，持續 3 回合"
    ],
    "monsterId": "625",
    "leaderName": "燄影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；火符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "火",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "部落智者 ‧ 伊奇多",
    "activeName": ["燄之結界 ‧ 強"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標無法行動並轉為火屬性，持續 3 回合。效果持續期間火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "626",
    "leaderName": "燄影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；火符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "火",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "木法沙",
    "activeName": ["窮兇極怒"],
    "activeDescription": [
      "1 回合內，自身攻擊力 10 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "627",
    "leaderName": "森影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；木符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "木",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "勇猛的木法沙",
    "activeName": ["窮兇極怒"],
    "activeDescription": [
      "1 回合內，自身攻擊力 10 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "628",
    "leaderName": "森影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；木符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "木",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "部落首領 ‧ 木法沙",
    "activeName": ["窮兇極怒"],
    "activeDescription": [
      "1 回合內，自身攻擊力 10 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "629",
    "leaderName": "森影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；木符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "布瑪",
    "activeName": ["狩獵之勢"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為獸類，同得此效果"
    ],
    "monsterId": "630",
    "leaderName": "光影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；光符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "俠義的布瑪",
    "activeName": ["狩獵之勢"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為獸類，同得此效果"
    ],
    "monsterId": "631",
    "leaderName": "光影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；光符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "天空俠盜 ‧ 布瑪",
    "activeName": ["狩獵之勢"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為獸類，同得此效果"
    ],
    "monsterId": "632",
    "leaderName": "光影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；光符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "芭絲蒂",
    "activeName": ["窮兇極怒"],
    "activeDescription": [
      "1 回合內，自身攻擊力 10 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "633",
    "leaderName": "魅影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；暗符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "暗",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "溫柔的芭絲蒂",
    "activeName": ["窮兇極怒"],
    "activeDescription": [
      "1 回合內，自身攻擊力 10 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "634",
    "leaderName": "魅影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；暗符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "暗",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "月詠美神 ‧ 芭絲蒂",
    "activeName": ["窮兇極怒"],
    "activeDescription": [
      "1 回合內，自身攻擊力 10 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "635",
    "leaderName": "魅影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；暗符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "暗",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "式神 ‧ 大鯢鬼",
    "activeName": ["弱孤自療"],
    "activeDescription": [
      "1 回合內，生命力 50% 或以下時，回復隊伍 5 倍回復力的生命力；反之，心符石兼具水符石效果"
    ],
    "monsterId": "636",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "式神 ‧ 焚泣女",
    "activeName": ["弱孤延敵"],
    "activeDescription": [
      "1 回合內，生命力 50% 或以下時，延遲全體敵人行動 1 回合；反之，心符石兼具火符石效果"
    ],
    "monsterId": "637",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "式神 ‧ 夜刀神",
    "activeName": ["弱孤防護"],
    "activeDescription": [
      "1 回合內，生命力 50% 或以下時，所受傷害減少 60%；反之，心符石兼具木符石效果"
    ],
    "monsterId": "638",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "式神 ‧ 善童鬼",
    "activeName": ["弱孤懈敵"],
    "activeDescription": [
      "1 回合內，生命力 50% 或以下時，無視全體敵人的防禦力；反之，心符石兼具光符石效果"
    ],
    "monsterId": "639",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "式神 ‧ 妙童鬼",
    "activeName": ["弱孤頑抗"],
    "activeDescription": [
      "1 回合內，生命力 50% 或以下時，攻擊力 1.5 倍；反之，心符石兼具暗符石效果"
    ],
    "monsterId": "640",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "天律雨神 ‧ 泰芙努特",
    "activeName": ["符石極限解放 ‧ 水"],
    "activeDescription": ["直接引爆水屬性以外的符石造成敵方全體水屬性傷害"],
    "monsterId": "641",
    "leaderName": "水之誅罰",
    "leaderDescription": "水屬性攻擊無視屬性相剋。大幅提升水屬性對火及暗屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "水",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "公允戰神 ‧ 賽特",
    "activeName": ["符石極限解放 ‧ 火"],
    "activeDescription": ["直接引爆火屬性以外的符石造成敵方全體火屬性傷害"],
    "monsterId": "642",
    "leaderName": "火之誅罰",
    "leaderDescription": "火屬性攻擊無視屬性相剋。大幅提升火屬性對火及木屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "颶風龍神 ‧ 舒",
    "activeName": ["符石極限解放 ‧ 木"],
    "activeDescription": ["直接引爆木屬性以外的符石造成敵方全體木屬性傷害"],
    "monsterId": "643",
    "leaderName": "木之誅罰",
    "leaderDescription": "木屬性攻擊無視屬性相剋。大幅提升木屬性對水及光屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "木",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "公義太陽神 ‧ 拉",
    "activeName": ["符石極限解放 ‧ 光"],
    "activeDescription": ["直接引爆光屬性以外的符石造成敵方全體光屬性傷害"],
    "monsterId": "644",
    "leaderName": "光之誅罰",
    "leaderDescription": "光屬性攻擊無視屬性相剋。大幅提升光屬性對火及暗屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "光",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "冥界審判者 ‧ 奧西利斯",
    "activeName": ["符石極限解放 ‧ 暗"],
    "activeDescription": ["直接引爆暗屬性以外的符石造成敵方全體暗屬性傷害"],
    "monsterId": "645",
    "leaderName": "暗之誅罰",
    "leaderDescription": "暗屬性攻擊無視屬性相剋。大幅提升暗屬性對木及光屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "機械工程兵",
    "activeName": ["蓄能攻擊 ‧ 水"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的水屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "646",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "蒸氣火力手",
    "activeName": ["蓄能攻擊 ‧ 火"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的火屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "647",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "機械醫護兵",
    "activeName": ["蓄能攻擊 ‧ 木"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的木屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "648",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "機械後勤兵",
    "activeName": ["蓄能攻擊 ‧ 光"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的光屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "649",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "蒸氣突擊手",
    "activeName": ["蓄能攻擊 ‧ 暗"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的暗屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "650",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "戰鯨 ‧ 摩斯路",
    "activeName": ["蓄能攻擊 ‧ 水"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的水屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "651",
    "leaderName": "龍魂伴主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上龍類成員時，人類攻擊力 3 倍，龍類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "戰翼 ‧ 薇薇爾",
    "activeName": ["蓄能攻擊 ‧ 火"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的火屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "652",
    "leaderName": "龍魂伴主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上龍類成員時，人類攻擊力 3 倍，龍類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "戰兵 ‧ 毒刺",
    "activeName": ["蓄能攻擊 ‧ 木"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的木屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "653",
    "leaderName": "幻獸伴主",
    "leaderDescription": "當隊伍中只有人類、 2 個或以上獸類或妖精類成員時，人類攻擊力 3 倍，獸類及妖精類攻擊力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "戰偶 ‧ 皮諾曹",
    "activeName": ["蓄能攻擊 ‧ 光"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的光屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "654",
    "leaderName": "妖魔伴主",
    "leaderDescription": "當隊伍中只有人類、2 個或以上魔族或妖精類成員時，人類攻擊力 3 倍，魔族及妖精類攻擊力 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "戰巫 ‧ 傑佩諾",
    "activeName": ["蓄能攻擊 ‧ 暗"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 10,000 點的暗屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "655",
    "leaderName": "神靈伴主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上神族成員時，人類攻擊力 3 倍，神族攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "格蕾琴與海森堡 ‧ 戰鯨吐息",
    "activeName": ["蓄能暴擊 ‧ 水"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 20,000 點的水屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "656",
    "leaderName": "龍魂佐主",
    "leaderDescription": "當隊伍中只有人類及 1 個或以上龍類成員時，人類攻擊力 4.5 倍，龍類攻擊力 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "阿涅茜 ‧ 龍焰吞噬",
    "activeName": ["蓄能暴擊 ‧ 火"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 20,000 點的火屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "657",
    "leaderName": "龍魂佐主",
    "leaderDescription": "當隊伍中只有人類及 1 個或以上龍類成員時，人類攻擊力 4.5 倍，龍類攻擊力 3.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "蠻牛貳式 ‧ 蜂翼炮擊",
    "activeName": ["蓄能暴擊 ‧ 木"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 20,000 點的木屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "658",
    "leaderName": "幻獸佐主",
    "leaderDescription": "當隊伍中只有人類及 1 個或以上獸類或妖精類成員時，人類攻擊力 4.5 倍，獸類及妖精類攻擊力 3.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "莉莎 ‧ 聖魔脈衝",
    "activeName": ["蓄能暴擊 ‧ 光"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 20,000 點的光屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "659",
    "leaderName": "妖魔佐主",
    "leaderDescription": "當隊伍中只有人類及 1 個或以上魔族或妖精類成員時，人類攻擊力 4.5 倍，魔族及妖精類攻擊力 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "米基利 ‧ 鋼蛇咬噬",
    "activeName": ["蓄能暴擊 ‧ 暗"],
    "activeDescription": [
      "對全體敵人造成累積戰鬥回合 (需要消除符石) 倍化 20,000 點的暗屬性傷害，最大 100,000 點。發動技能後戰鬥回合將重新累積"
    ],
    "monsterId": "660",
    "leaderName": "神靈佐主",
    "leaderDescription": "當隊伍中只有人類及 1 個或以上神族成員時，人類攻擊力 4.5 倍，神族攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "冰霜魔像",
    "activeName": ["符石緩變 ‧ 水"],
    "activeDescription": ["將最多 3 粒火符石轉化為水符石"],
    "monsterId": "661",
    "leaderName": "水之代價",
    "leaderDescription": "以所受傷害 2 倍對敵方攻擊者進行水屬性反擊",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "天火魔像",
    "activeName": ["符石緩變 ‧ 火"],
    "activeDescription": ["將最多 3 粒木符石轉化為火符石"],
    "monsterId": "662",
    "leaderName": "燎原境界",
    "leaderDescription": "無視敵方屬性，每回合以自身攻擊力 3 倍追打 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "枯木魔像",
    "activeName": ["符石緩變 ‧ 木"],
    "activeDescription": ["將最多 3 粒水符石轉化為木符石"],
    "monsterId": "663",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "華光魔像",
    "activeName": ["符石緩變 ‧ 光"],
    "activeDescription": ["將最多 3 粒暗符石轉化為光符石"],
    "monsterId": "664",
    "leaderName": "光明代價",
    "leaderDescription": "以所受傷害對敵方全體進行光屬性反擊",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "無夜魔像",
    "activeName": ["符石緩變 ‧ 暗"],
    "activeDescription": ["將最多 3 粒光符石轉化為暗符石"],
    "monsterId": "665",
    "leaderName": "暗黑代價",
    "leaderDescription": "以所受傷害對敵方全體進行暗屬性反擊",
    "attribute": "暗",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "冰耀獸神兵",
    "activeName": ["水之轉換強化"],
    "activeDescription": ["火符石轉化為水符石，同時水符石轉化為水強化符石"],
    "monsterId": "666",
    "leaderName": "水之代價",
    "leaderDescription": "以所受傷害 2 倍對敵方攻擊者進行水屬性反擊",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "天火龍神兵",
    "activeName": ["火之轉換強化"],
    "activeDescription": ["木符石轉化為火符石，同時火符石轉化為火強化符石"],
    "monsterId": "667",
    "leaderName": "燎原境界",
    "leaderDescription": "無視敵方屬性，每回合以自身攻擊力 3 倍追打 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "碧青靈神兵",
    "activeName": ["木之轉換強化"],
    "activeDescription": ["水符石轉化為木符石，同時木符石轉化為木強化符石"],
    "monsterId": "668",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "聖靈巨神兵",
    "activeName": ["光之轉換強化"],
    "activeDescription": ["暗符石轉化為光符石，同時光符石轉化為光強化符石"],
    "monsterId": "669",
    "leaderName": "光明代價",
    "leaderDescription": "以所受傷害對敵方全體進行光屬性反擊",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "無夜魔神兵",
    "activeName": ["暗之轉換強化"],
    "activeDescription": ["光符石轉化為暗符石，同時暗符石轉化為暗強化符石"],
    "monsterId": "670",
    "leaderName": "暗黑代價",
    "leaderDescription": "以所受傷害對敵方全體進行暗屬性反擊",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "純真屠夫 ‧ 艾德",
    "activeName": ["殘暴之怒"],
    "activeDescription": ["1 回合內，自身攻擊力 15 倍，其他成員不能發動攻擊"],
    "monsterId": "671",
    "leaderName": "屠殺契機",
    "leaderDescription": "連擊 (Combo) 數為雙數時，全隊攻擊力 5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "南瓜三人組",
    "activeName": ["火焰猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍火屬性傷害"],
    "monsterId": "672",
    "leaderName": "魔之力",
    "leaderDescription": "魔族攻擊力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "4★"
  },
  {
    "monsterName": "骸骨巫妖",
    "activeName": ["魔王躍舞"],
    "activeDescription": [
      "2 回合內，隊伍中妖精類成員愈多，妖精類的攻擊力及回復力愈高，最大 2 倍"
    ],
    "monsterId": "673",
    "leaderName": "妖精之約會",
    "leaderDescription": "妖精類攻擊力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "萬魔主宰 ‧ 薩魯曼",
    "activeName": ["魔王躍舞"],
    "activeDescription": [
      "2 回合內，隊伍中妖精類成員愈多，妖精類的攻擊力及回復力愈高，最大 2 倍"
    ],
    "monsterId": "674",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "8★"
  },
  {
    "monsterName": "巨星之靈",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "675",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "暗",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "DAESUNG",
    "activeName": ["轉守為攻 ‧ 水"],
    "activeDescription": [
      "將 3 粒符石轉化為水符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "676",
    "leaderName": "攻守同源 ‧ 水波",
    "leaderDescription": "水屬性攻擊力 2 倍，同時心符石兼具 50% 水符石效果 (效果不能疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "洪濤元素師 ‧ DAESUNG",
    "activeName": ["轉守強攻 ‧ 水"],
    "activeDescription": [
      "將 3 粒符石轉化為水強化符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "677",
    "leaderName": "攻守同源 ‧ 水波",
    "leaderDescription": "水屬性攻擊力 2 倍，同時心符石兼具 50% 水符石效果 (效果不能疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "TAEYANG",
    "activeName": ["轉守為攻 ‧ 火"],
    "activeDescription": [
      "將 3 粒符石轉化為火符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "678",
    "leaderName": "攻守同源 ‧ 火燄",
    "leaderDescription": "火屬性攻擊力 2 倍，同時心符石兼具 50% 火符石效果 (效果不能疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "炎日元素師 ‧ TAEYANG",
    "activeName": ["轉守強攻 ‧ 火"],
    "activeDescription": [
      "將 3 粒符石轉化為火強化符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "679",
    "leaderName": "攻守同源 ‧ 火燄",
    "leaderDescription": "火屬性攻擊力 2 倍，同時心符石兼具 50% 火符石效果 (效果不能疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "SEUNGRI",
    "activeName": ["轉守為攻 ‧ 木"],
    "activeDescription": [
      "將 3 粒符石轉化為木符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "680",
    "leaderName": "攻守同源 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 2 倍，同時心符石兼具 50% 木符石效果 (效果不能疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "凱旋元素師 ‧ SEUNGRI",
    "activeName": ["轉守強攻 ‧ 木"],
    "activeDescription": [
      "將 3 粒符石轉化為木強化符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "681",
    "leaderName": "攻守同源 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 2 倍，同時心符石兼具 50% 木符石效果 (效果不能疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "T.O.P",
    "activeName": ["轉守為攻 ‧ 光"],
    "activeDescription": [
      "將 3 粒符石轉化為光符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "682",
    "leaderName": "攻守同源 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2 倍，同時心符石兼具 50% 光符石效果 (效果不能疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "鋒芒元素師 ‧ T.O.P",
    "activeName": ["轉守強攻 ‧ 光"],
    "activeDescription": [
      "將 3 粒符石轉化為光強化符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "683",
    "leaderName": "攻守同源 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2 倍，同時心符石兼具 50% 光符石效果 (效果不能疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "G-Dragon",
    "activeName": ["轉守為攻 ‧ 暗"],
    "activeDescription": [
      "將 3 粒符石轉化為暗符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "684",
    "leaderName": "攻守同源 ‧ 幽暗",
    "leaderDescription": "暗屬性攻擊力 2 倍，同時心符石兼具 50% 暗符石效果 (效果不能疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "龍影元素師 ‧ G-Dragon",
    "activeName": ["轉守強攻 ‧ 暗"],
    "activeDescription": [
      "將 3 粒符石轉化為暗強化符石 (心符石優先轉換)，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "685",
    "leaderName": "攻守同源 ‧ 幽暗",
    "leaderDescription": "暗屬性攻擊力 2 倍，同時心符石兼具 50% 暗符石效果 (效果不能疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "皇祐承傳 ‧ 水舞劍神",
    "activeName": ["不倒之志"],
    "activeDescription": [
      "5 回合內減少所受傷害 60%；而且首回合所受傷害不會使你死亡"
    ],
    "monsterId": "686",
    "leaderName": "絕境反噬 ‧ 水",
    "leaderDescription": "當前生命力大於 50% 時，下一次所受傷害不會使你死亡，並將未能正常扣除的傷害對敵方攻擊者進行水屬性反擊 (同一回合只會發動一次)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "熾焱承傳 ‧ 炎舞軍神",
    "activeName": ["縱橫千軍"],
    "activeDescription": ["對敵方全體造成 10 倍火屬性傷害，此傷害無視防禦力"],
    "monsterId": "687",
    "leaderName": "火舞傳人",
    "leaderDescription": "全隊攻擊力及回復力 1.5 倍，人類生命力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "悠古承傳 ‧ 疾風神射手",
    "activeName": ["領軍之箭"],
    "activeDescription": [
      "對單一敵人造成 15 倍木屬性傷害，此傷害無視防禦力。若以此技能擊斃敵人，1 回合內 100% 發動遊俠的隊伍技能"
    ],
    "monsterId": "688",
    "leaderName": "百箭穿楊",
    "leaderDescription": "當進行單體攻擊時，攻擊力 2.5 倍，若消除 3 種或以上屬性符石，攻擊力提升至 3 倍。適用於所有成員 (若發動全體攻擊時只有 1 個敵人，會視作單體攻擊計算)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "聖耀承傳 ‧ 萬劍遊俠",
    "activeName": ["治癒突擊 ‧ 光"],
    "activeDescription": [
      "回復相當於隊伍總血量的生命力，並以回血溢出值對敵方全體造成光屬性傷害"
    ],
    "monsterId": "689",
    "leaderName": "人之祈願",
    "leaderDescription": "人類生命力 3 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "邪譽承傳 ‧ 暗影劍豪",
    "activeName": ["生命終解"],
    "activeDescription": ["敵方生命力 20% 以下時，即殺"],
    "monsterId": "690",
    "leaderName": "愈戰愈強 ‧ 超",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "雨僮",
    "activeName": ["符石緩變 ‧ 水"],
    "activeDescription": ["將最多 3 粒火符石轉化為水符石"],
    "monsterId": "691",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "輪入道",
    "activeName": ["符石緩變 ‧ 火"],
    "activeDescription": ["將最多 3 粒木符石轉化為火符石"],
    "monsterId": "692",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "座敷童子",
    "activeName": ["符石緩變 ‧ 木"],
    "activeDescription": ["將最多 3 粒水符石轉化為木符石"],
    "monsterId": "693",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "豆腐小僧",
    "activeName": ["符石緩變 ‧ 光"],
    "activeDescription": ["將最多 3 粒暗符石轉化為光符石"],
    "monsterId": "694",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "二口女",
    "activeName": ["符石緩變 ‧ 暗"],
    "activeDescription": ["將最多 3 粒光符石轉化為暗符石"],
    "monsterId": "695",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "溪流水虎 ‧ 河童",
    "activeName": ["百川歸海"],
    "activeDescription": [
      "1 回合內，隊伍成員的種族愈多，水屬性攻擊力愈高，4 個種族的成員即可達至最大 2 倍"
    ],
    "monsterId": "696",
    "leaderName": "野獸之狂怒",
    "leaderDescription": "獸類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "守門鬼 ‧ 茨木童子",
    "activeName": ["氣燄迫人"],
    "activeDescription": [
      "1 回合內，自身生命力愈低，火屬性攻擊力愈高，最大 2 倍"
    ],
    "monsterId": "697",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "深山鬼婆 ‧ 山姥",
    "activeName": ["追魂奪魄"],
    "activeDescription": [
      "1 回合內，人類成員愈多，自身攻擊力愈高，最大 8 倍 (攻擊力不可與其他成員共享)"
    ],
    "monsterId": "698",
    "leaderName": "魔之怒火",
    "leaderDescription": "魔族攻擊力及生命力 1.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "落頭氏 ‧ 轆轤首",
    "activeName": ["符石變換 ‧ 光"],
    "activeDescription": ["暗符石轉化為光符石"],
    "monsterId": "699",
    "leaderName": "妖之靈力",
    "leaderDescription": "妖精類攻擊力及生命力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "奪瞳妖 ‧ 百目鬼",
    "activeName": ["一目十行"],
    "activeDescription": ["7 秒內，可任意移動符石而不會發動消除"],
    "monsterId": "700",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "輝日之聖魂",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "701",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "光",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "皎月之聖魄",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "702",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "暗",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "噬日誅天 ‧ 噬日狼",
    "activeName": ["光魂附暗"],
    "activeDescription": ["1 回合內，暗符石兼具光符石效果"],
    "monsterId": "703",
    "leaderName": "念之強勢 ‧ 光",
    "leaderDescription": "減少 50% 移動符石時間，全隊攻擊力 3 倍。",
    "attribute": "光",
    "race": "獸類",
    "star": "8★"
  },
  {
    "monsterName": "蝕月毀天 ‧ 喰月狼",
    "activeName": ["暗魂附光"],
    "activeDescription": ["1 回合內，光符石兼具暗符石效果"],
    "monsterId": "704",
    "leaderName": "念之強勢 ‧ 暗",
    "leaderDescription": "減少 50% 移動符石時間，全隊攻擊力 3 倍。",
    "attribute": "暗",
    "race": "獸類",
    "star": "8★"
  },
  {
    "monsterName": "怪盜黑手黨 ‧ 史古基",
    "activeName": ["熾焰圍城"],
    "activeDescription": ["將所有符石轉化為火符石"],
    "monsterId": "705",
    "leaderName": "俠盜之力",
    "leaderDescription": "人類及魔族攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "怒濤海妖 ‧ 波拉",
    "activeName": ["水屬印記"],
    "activeDescription": ["水屬性傷害持續提升，直至沒有水屬性傷害"],
    "monsterId": "706",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "天界異獸 ‧ 奇美拉",
    "activeName": ["火屬印記"],
    "activeDescription": ["火屬性傷害持續提升，直至沒有火屬性傷害"],
    "monsterId": "707",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "牧神 ‧ 潘",
    "activeName": ["木屬印記"],
    "activeDescription": ["木屬性傷害持續提升，直至沒有木屬性傷害"],
    "monsterId": "708",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "聖域勇士 ‧ 福魯斯",
    "activeName": ["光屬印記"],
    "activeDescription": ["光屬性傷害持續提升，直至沒有光屬性傷害"],
    "monsterId": "709",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "悲愴女妖 ‧ 拉彌亞",
    "activeName": ["暗屬印記"],
    "activeDescription": ["暗屬性傷害持續提升，直至沒有暗屬性傷害"],
    "monsterId": "710",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "血慾皇族 ‧ 伊莉莎白",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "711",
    "leaderName": "戾氣蔽日 ‧ 水",
    "leaderDescription": "每次消除水符石，水屬性攻擊力持續提升。連續兩回合沒有消除水符石，攻擊力減少。當攻擊力達至最高 3.5 倍時，需每回合消除水符石，否則攻擊力減少。",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "燧焰使者 ‧ 潔琪",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "712",
    "leaderName": "戾氣蔽日 ‧ 火",
    "leaderDescription": "每次消除火符石，火屬性攻擊力持續提升。連續兩回合沒有消除火符石，攻擊力減少。當攻擊力達至最高 3.5 倍時，需每回合消除火符石，否則攻擊力減少。",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "抱愛血妻 ‧ 貝莉",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "713",
    "leaderName": "戾氣蔽日‧ 木",
    "leaderDescription": "每次消除木符石，木屬性攻擊力持續提升。連續兩回合沒有消除木符石，攻擊力減少。當攻擊力達至最高 3.5 倍時，需每回合消除木符石，否則攻擊力減少。",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "死亡藝術家 ‧ 傑克",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "714",
    "leaderName": "魔之本性 ‧ 攻",
    "leaderDescription": "魔族攻擊力 2 倍，生命力及回復力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "蝕夢啃魂者 ‧ 陶德",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "715",
    "leaderName": "魔之本性 ‧ 攻",
    "leaderDescription": "魔族攻擊力 2 倍，生命力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "復仇半龍 ‧ 絲蔻比亞",
    "activeName": ["掩眼魔靈 ‧ 水"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的水符石，隨機將 2 直行的符石轉化為水符石；反之，隨機將 1 直行的符石轉化為水符石"
    ],
    "monsterId": "716",
    "leaderName": "魔之怒火",
    "leaderDescription": "魔族攻擊力及生命力 1.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "執拗聖盾 ‧ 忒提斯",
    "activeName": ["掩眼魔靈 ‧ 火"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的火符石，隨機將 2 直行的符石轉化為火符石；反之，隨機將 1 直行的符石轉化為火符石"
    ],
    "monsterId": "717",
    "leaderName": "魔之怒火",
    "leaderDescription": "魔族攻擊力及生命力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "嫉愛薔薇 ‧ 艾摩婭與瑟露絲",
    "activeName": ["薔薇連擊"],
    "activeDescription": ["3 回合內，自身發動攻擊時，個人追打木屬性攻擊 1 次"],
    "monsterId": "718",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "鬼刀意志 ‧ 今劍與薄綠",
    "activeName": ["捨生換夕"],
    "activeDescription": [
      "2 回合內，每回合扣除 15% 自身生命力；敵方全體無法行動 2 回合，但效果會因自身生命力不足 15%而消失"
    ],
    "monsterId": "719",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "魔骸戰意 ‧ 呂凌霜",
    "activeName": ["掩眼魔靈 ‧ 暗"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的暗符石，隨機將 2 直行的符石轉化為暗符石；反之，隨機將 1 直行的符石轉化為暗符石"
    ],
    "monsterId": "720",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "仇龍英雄 ‧ 貝奧武夫",
    "activeName": ["掩眼魔靈 ‧ 水波", "波濤的戰場"],
    "activeDescription": [
      "隨機將 2 直行的符石轉化為水符石",
      "2 回合內，敵方全體轉為火屬性，並提升水屬性對火屬性目標的攻擊力，若效果期間擊斃所有敵人，當前技能 CD 減少 3"
    ],
    "monsterId": "721",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "7★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "桀驁戰神 ‧ 阿基里斯",
    "activeName": ["掩眼魔靈 ‧ 火燄", "火烈的戰場"],
    "activeDescription": [
      "隨機將 2 直行的符石轉化為火符石",
      "2 回合內，敵方全體轉為木屬性，並提升火屬性對木屬性目標的攻擊力，若效果期間擊斃所有敵人，當前技能 CD 減少 3"
    ],
    "monsterId": "722",
    "leaderName": "魔之本性",
    "leaderDescription": "魔族攻擊力，生命力及回復力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "7★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "嫉愛雙槍 ‧ 迪爾姆德",
    "activeName": ["攻擊姿勢 ‧ 木", "連環追擊 ‧ 木"],
    "activeDescription": [
      "心符石轉化為木符石",
      "2 回合內，木屬性成員發動攻擊時追打木屬性攻擊 1 次"
    ],
    "monsterId": "723",
    "leaderName": "魔之血怒",
    "leaderDescription": "魔族攻擊力 2 倍及生命力 1.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "7★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "鬼面魔刃 ‧ 源義經",
    "activeName": ["光暗攻擊轉化", "捨生換日"],
    "activeDescription": [
      "心符石轉化為光符石，同時將暗符石轉化為心符石",
      "3 回合內，每回合扣除 15% 自身生命力；敵方全體無法行動 3 回合，但效果會因自身生命力不足 15%而消失"
    ],
    "monsterId": "724",
    "leaderName": "攻守同存 ‧ 光",
    "leaderDescription": "光屬性攻擊力 1.5 倍，同時心符石兼具 50% 光符石效果",
    "attribute": "光",
    "race": "魔族",
    "star": "7★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "魔骸神將 ‧ 王鬼呂布",
    "activeName": ["同歸於盡", "掩眼魔靈 ‧ 幽暗"],
    "activeDescription": [
      "消耗現有一半的生命力，並同時消耗敵方現有 30% 生命力",
      "隨機將 2 直行的符石轉化為暗符石"
    ],
    "monsterId": "725",
    "leaderName": "魔之軍勢",
    "leaderDescription": "魔族攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "雪女",
    "activeName": ["鐵壁陣勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心強化符石"],
    "monsterId": "726",
    "leaderName": "魔魅復甦 ‧ 水",
    "leaderDescription": "水屬性攻擊力 2 倍及魔族回復力 2 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "冰柱姬 ‧ 雪女",
    "activeName": ["鐵壁陣勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心強化符石"],
    "monsterId": "727",
    "leaderName": "魔魅復甦 ‧ 水波",
    "leaderDescription": "水屬性攻擊力 2.5 倍及魔族回復力 2 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "酒吞童子",
    "activeName": ["魔之怨念 ‧ 火"],
    "activeDescription": [
      "場上有附加效果時，1 回合內，火屬性攻擊力 1.5 倍及火屬性魔族攻擊力 2.5 倍"
    ],
    "monsterId": "728",
    "leaderName": "魔魅復甦 ‧ 火",
    "leaderDescription": "火屬性攻擊力 2 倍及魔族回復力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "百鬼統領 ‧ 酒吞童子",
    "activeName": ["魔之怨念 ‧ 火"],
    "activeDescription": [
      "場上有附加效果時，1 回合內，火屬性攻擊力 1.5 倍及火屬性魔族攻擊力 2.5 倍"
    ],
    "monsterId": "729",
    "leaderName": "魔魅復甦 ‧ 火燄",
    "leaderDescription": "火屬性攻擊力 2.5 倍及魔族回復力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "烏天狗",
    "activeName": ["延緩"],
    "activeDescription": ["延遲全體敵人行動 1 回合"],
    "monsterId": "730",
    "leaderName": "魔魅復甦 ‧ 木",
    "leaderDescription": "木屬性攻擊力 2 倍及魔族回復力 2 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "孤傲山僧 ‧ 大天狗",
    "activeName": ["延緩"],
    "activeDescription": ["延遲全體敵人行動 1 回合"],
    "monsterId": "731",
    "leaderName": "魔魅復甦 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 2.5 倍及魔族回復力 2 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "毛倡妓",
    "activeName": ["蓄能轉換 ‧ 光"],
    "activeDescription": [
      "將等同於累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為光符石，最多 8 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "732",
    "leaderName": "魔之狂怒 ‧ 光",
    "leaderDescription": "光屬性魔族攻擊力 2.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "血怨藝妓 ‧ 毛倡妓",
    "activeName": ["蓄能轉換 ‧ 光"],
    "activeDescription": [
      "將等同於累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為光符石，最多 8 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "733",
    "leaderName": "魔怒嘯天 ‧ 光",
    "leaderDescription": "光屬性魔族攻擊力 3.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "土蜘蛛",
    "activeName": ["狂魔暴戾"],
    "activeDescription": [
      "魔族攻擊力提升 1.5 倍，效果持續至受到敵人攻擊。效果持續期間技能不會冷卻"
    ],
    "monsterId": "734",
    "leaderName": "魔之狂怒 ‧ 暗",
    "leaderDescription": "暗屬性魔族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "八握脛 ‧ 土蜘蛛",
    "activeName": ["狂魔暴戾"],
    "activeDescription": [
      "魔族攻擊力提升 1.5 倍，效果持續至受到敵人攻擊。效果持續期間技能不會冷卻"
    ],
    "monsterId": "735",
    "leaderName": "魔怒嘯天 ‧ 暗",
    "leaderDescription": "暗屬性魔族攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "青行燈",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "736",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "火",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "道摩法師 ‧ 蘆屋道滿",
    "activeName": ["屠殺之勢"],
    "activeDescription": [
      "1 回合內，自身攻擊力 2.5 倍。若身旁的成員同為水屬性或魔族，同得此效果"
    ],
    "monsterId": "737",
    "leaderName": "魔魅之靈泉",
    "leaderDescription": "水屬性攻擊力 2.5 倍。當生命力少於 50% 時，心符石效果提升至 300% (效果不能疊加)",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "薨志神賢",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "738",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "暗",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "永恆之槍 ‧ 主神奧丁",
    "activeName": ["終極一擊"],
    "activeDescription": [
      "1 回合內，若生命力全滿：自身生命力扣至 1，並將心符石轉化為自身屬性符石；移動符石前自身生命力愈低，全隊攻擊力愈高，最大 2 倍。反之，自身生命力愈低，全隊攻擊力愈高，最大 3 倍"
    ],
    "monsterId": "739",
    "leaderName": "絕境意志",
    "leaderDescription": "當前生命力大於 50% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "暗",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "獨酌酒神 ‧ 泰奧尼修斯",
    "activeName": ["醉眼朦朧"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的心符石，隨機將 2 直行的符石轉化為心符石；反之，隨機將 1 直行的符石轉化為心符石"
    ],
    "monsterId": "740",
    "leaderName": "攻守同道 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2.5 倍，同時心符石兼具 50% 光符石效果 (效果不能疊加)",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "煉獄恐靈",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "741",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "火",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "噩耗元素噬者 ‧ 迪亞布羅",
    "activeName": ["搶天奪日 ‧ 心"],
    "activeDescription": [
      "所有符石隨機轉換，同時心符石出現率上升，並將心符石以心強化符石代替"
    ],
    "monsterId": "742",
    "leaderName": "罪之罰則",
    "leaderDescription": "以所受傷害 3 倍對敵方攻擊者進行相剋屬性反擊",
    "attribute": "火",
    "race": "妖精類",
    "star": "8★"
  },
  {
    "monsterName": "四方護神 ‧ 韶光仙獸",
    "activeName": ["蓄勢暴擊"],
    "activeDescription": [
      "1 回合內不能對敵方造成傷害，下一回會追加上回的連擊 (Combo) 數目對敵人進行攻擊"
    ],
    "monsterId": "743",
    "leaderName": "元素凝匯 ‧ 獸",
    "leaderDescription": "隊伍中獸類成員的屬性愈多，全隊攻擊力愈高，最大 3.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "鱗光青鯉",
    "activeName": ["水波猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍水屬性傷害"],
    "monsterId": "744",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "軒轅劍客 ‧ 何然",
    "activeName": ["御劍飛行"],
    "activeDescription": [
      "1 回合內，同時消除水、火及木符石時，無視全體敵人 80% 的防禦力；同時消除光及暗符石時，全隊攻擊力 1.5 倍；消除心符石時，心符石效果提升至 250%。(只計算首批消除的符石)"
    ],
    "monsterId": "745",
    "leaderName": "莫逆相伴 ‧ 人",
    "leaderDescription": "隊伍中的人類成員愈多，全隊攻擊力愈高，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "於小雪",
    "activeName": ["霧影乾坤"],
    "activeDescription": [
      "將 3 粒符石轉化為水符石 (光及暗符石優先轉換)。隊伍中每多 1 個人類成員，額外將 2 粒符石轉化為水符石"
    ],
    "monsterId": "746",
    "leaderName": "劍緣陣法",
    "leaderDescription": "隊伍中只有水、火及木屬性的成員時，消除任何三種或以上屬性符石，全隊攻擊力 3 倍，消除心符石時攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "女媧天石 ‧ 於小雪",
    "activeName": ["霧影乾坤"],
    "activeDescription": [
      "將 3 粒符石轉化為水符石 (光及暗符石優先轉換)。隊伍中每多 1 個人類成員，額外將 2 粒符石轉化為水符石"
    ],
    "monsterId": "747",
    "leaderName": "劍緣陣法",
    "leaderDescription": "隊伍中只有水、火及木屬性的成員時，消除任何三種或以上屬性符石，全隊攻擊力 3 倍，消除心符石時攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "拓跋玉兒",
    "activeName": ["菩提梵天"],
    "activeDescription": [
      "1 回合內，自身不會發動攻擊。下一回合，水、火及木屬性攻擊力 2 倍"
    ],
    "monsterId": "748",
    "leaderName": "劍緣陣法",
    "leaderDescription": "隊伍中只有水、火及木屬性的成員時，消除任何三種或以上屬性符石，全隊攻擊力 3 倍，消除心符石時攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "神農奇鼎 ‧ 拓跋玉兒",
    "activeName": ["菩提梵天"],
    "activeDescription": [
      "1 回合內，自身不會發動攻擊。下一回合，水、火及木屬性攻擊力 2 倍"
    ],
    "monsterId": "749",
    "leaderName": "劍緣陣法",
    "leaderDescription": "隊伍中只有水、火及木屬性的成員時，消除任何三種或以上屬性符石，全隊攻擊力 3 倍，消除心符石時攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "陳靖仇",
    "activeName": ["密林斗繁星"],
    "activeDescription": ["1 回合內，心符石兼具水符石、火符石及木符石效果"],
    "monsterId": "750",
    "leaderName": "劍緣陣法",
    "leaderDescription": "隊伍中只有水、火及木屬性的成員時，消除任何三種或以上屬性符石，全隊攻擊力 3 倍，消除心符石時攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "亡國少主 ‧ 陳靖仇",
    "activeName": ["密林斗繁星"],
    "activeDescription": ["1 回合內，心符石兼具水符石、火符石及木符石效果"],
    "monsterId": "751",
    "leaderName": "劍緣陣法",
    "leaderDescription": "隊伍中只有水、火及木屬性的成員時，消除任何三種或以上屬性符石，全隊攻擊力 3 倍，消除心符石時攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "車芸與雲狐",
    "activeName": ["光影雲舞"],
    "activeDescription": ["1 回合內，光屬性攻擊力 1.5 倍"],
    "monsterId": "752",
    "leaderName": "韶光疊影",
    "leaderDescription": "光屬性攻擊力 2 倍；隊伍中的人類成員愈多，光屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "木甲之術 ‧ 車芸與雲狐",
    "activeName": ["光影雲舞"],
    "activeDescription": ["1 回合內，光屬性攻擊力 1.5 倍"],
    "monsterId": "753",
    "leaderName": "韶光疊影",
    "leaderDescription": "光屬性攻擊力 2 倍；隊伍中的人類成員愈多，光屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "騎士賽特",
    "activeName": ["天狼巽閃"],
    "activeDescription": ["下一回合的自身攻擊力與此回合相同"],
    "monsterId": "754",
    "leaderName": "喋血狂屠",
    "leaderDescription": "隊伍中只有人類及魔族成員時，人類及魔族攻擊力 2.5 倍；當生命力未滿時，攻擊力提升至 3.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "尋道旅者 ‧ 賽特",
    "activeName": ["天狼巽閃"],
    "activeDescription": ["下一回合的自身攻擊力與此回合相同"],
    "monsterId": "755",
    "leaderName": "喋血狂屠",
    "leaderDescription": "隊伍中只有人類及魔族成員時，人類及魔族攻擊力 2.5 倍；當生命力未滿時，攻擊力提升至 3.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "沐月",
    "activeName": ["玄冰亂滄溟"],
    "activeDescription": ["光符石與暗符石轉化為心強化符石"],
    "monsterId": "756",
    "leaderName": "神之怒",
    "leaderDescription": "神族攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "華胥天人 ‧ 沐月",
    "activeName": ["玄冰亂滄溟"],
    "activeDescription": ["光符石與暗符石轉化為心強化符石"],
    "monsterId": "757",
    "leaderName": "神之怒",
    "leaderDescription": "神族攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "夏柔",
    "activeName": ["慈雲祥暉"],
    "activeDescription": ["連續 3 回合回復自身回復力 20 倍的生命力"],
    "monsterId": "758",
    "leaderName": "靈魂之緣",
    "leaderDescription": "關卡 \"靈魂之日\" 初級難度最後一層的敵人有 15% 機會轉化為蘊魔晶寵 (機率可以疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "東皇神鐘 ‧ 夏柔",
    "activeName": ["慈雲祥暉"],
    "activeDescription": ["連續 3 回合回復自身回復力 20 倍的生命力"],
    "monsterId": "759",
    "leaderName": "靈魂之約",
    "leaderDescription": "關卡 \"靈魂之日\" 初級難度最後一層的敵人有 30% 機會轉化為蘊魔晶寵 (機率可以疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "陸承軒",
    "activeName": ["運氣蓄勁"],
    "activeDescription": ["1 回合內，人類攻擊力 2 倍"],
    "monsterId": "760",
    "leaderName": "靈魂之緣",
    "leaderDescription": "關卡 \"靈魂之日\" 初級難度最後一層的敵人有 15% 機會轉化為蘊魔晶寵 (機率可以疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "昊天靈塔 ‧ 陸承軒",
    "activeName": ["運氣蓄勁"],
    "activeDescription": ["1 回合內，人類攻擊力 2 倍"],
    "monsterId": "761",
    "leaderName": "靈魂之約",
    "leaderDescription": "關卡 \"靈魂之日\" 初級難度最後一層的敵人有 30% 機會轉化為蘊魔晶寵 (機率可以疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "宇文拓",
    "activeName": ["雷霆光鏵"],
    "activeDescription": ["將所有符石轉化為光符石"],
    "monsterId": "762",
    "leaderName": "焚天煉日",
    "leaderDescription": "光屬性攻擊力 2.5 倍；消除場上所有光符石時，光屬性人類攻擊力 4 倍 (只計算首批消除的符石)",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "崑崙明鏡 ‧ 宇文拓",
    "activeName": ["雷霆光鏵"],
    "activeDescription": ["將所有符石轉化為光符石"],
    "monsterId": "763",
    "leaderName": "焚天煉日",
    "leaderDescription": "光屬性攻擊力 2.5 倍；消除場上所有光符石時，光屬性人類攻擊力 4 倍 (只計算首批消除的符石)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "焉逢與徐暮雲",
    "activeName": ["凝氣成劍"],
    "activeDescription": [
      "光符石轉化為光強化符石，同時將暗符石轉化為暗強化符石"
    ],
    "monsterId": "764",
    "leaderName": "陰陽煞陣",
    "leaderDescription": "光和暗屬性攻擊力 2 倍；同時消除光符石及暗符石，光和暗屬性攻擊力額外提升 1.5 倍 (效果可以疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "軒轅聖劍 ‧ 皇甫朝雲與皇甫暮雲",
    "activeName": ["凝氣成劍"],
    "activeDescription": [
      "光符石轉化為光強化符石，同時將暗符石轉化為暗強化符石"
    ],
    "monsterId": "765",
    "leaderName": "陰陽煞陣",
    "leaderDescription": "光和暗屬性攻擊力 2 倍；同時消除光符石及暗符石，光和暗屬性攻擊力額外提升 1.5 倍 (效果可以疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "司空宇",
    "activeName": ["天地流風"],
    "activeDescription": ["水符石與火符石轉化為心強化符石"],
    "monsterId": "766",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "軒轅遺民 ‧ 司空宇",
    "activeName": ["天地流風"],
    "activeDescription": ["水符石與火符石轉化為心強化符石"],
    "monsterId": "767",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "遺恨忠烈 ‧ 魔化陳輔",
    "activeName": ["蓄能移魂 ‧ 火"],
    "activeDescription": [
      "將等同於累積戰鬥回合 (需要消除符石) 數量的符石轉換為火符石，最多 5 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "768",
    "leaderName": "魔燄之輪",
    "leaderDescription": "首回合火屬性攻擊力 4 倍，次回合火屬性攻擊力 2 倍 (需要消除符石)，周而復始",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "魯班一脈 ‧ 黃雷",
    "activeName": ["癲之極"],
    "activeDescription": [
      "將場上數量最多的 1 種屬性符石 (不包括強化符石) 及心符石轉化為強化符石。(光及暗符石優先轉換)"
    ],
    "monsterId": "769",
    "leaderName": "野獸之嗔怒",
    "leaderDescription": "獸類攻擊力 3 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "靈天之首 ‧ 姬克",
    "activeName": ["七輪誅仙"],
    "activeDescription": [
      "1 回合內，隊伍中魔族成員愈多，魔族攻擊力愈高，5 個魔族成員即可達至最大 2 倍"
    ],
    "monsterId": "770",
    "leaderName": "魔之嗔怒",
    "leaderDescription": "魔族攻擊力 3 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "琥珀",
    "activeName": ["慈雲祥暉"],
    "activeDescription": ["連續 3 回合回復自身回復力 20 倍的生命力"],
    "monsterId": "771",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "小黃龍",
    "activeName": ["凝氣成劍"],
    "activeDescription": [
      "光符石轉化為光強化符石，同時將暗符石轉化為暗強化符石"
    ],
    "monsterId": "772",
    "leaderName": "龍之力",
    "leaderDescription": "龍類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "阿奇",
    "activeName": ["天地流風"],
    "activeDescription": ["水符石與火符石轉化為心強化符石"],
    "monsterId": "773",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "子大暑",
    "activeName": ["光影雲舞"],
    "activeDescription": ["1 回合內，光屬性攻擊力 1.5 倍"],
    "monsterId": "774",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "安卡",
    "activeName": ["天狼巽閃"],
    "activeDescription": ["下一回合的自身攻擊力與此回合相同"],
    "monsterId": "775",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "寒冰魔將 ‧ 藍魔神",
    "activeName": ["凝冰術"],
    "activeDescription": [
      "1 回合內，凍結敵方全體，使受影響目標無法行動並轉為水屬性。效果期間水屬性攻擊力 1.5 倍"
    ],
    "monsterId": "776",
    "leaderName": "人魔之怒",
    "leaderDescription": "人類及魔族攻擊力 2 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "烈焰魔將 ‧ 姆斯比爾",
    "activeName": ["火神力場"],
    "activeDescription": [
      "1 回合內，消除的火符石愈多，火屬性攻擊力愈高，消除 12 粒火符石即可達至最大 2 倍 (只計算首批消除的符石)"
    ],
    "monsterId": "777",
    "leaderName": "人魔之怒",
    "leaderDescription": "人類及魔族攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "奇門遁甲 ‧ 機關人",
    "activeName": ["聽天望月步"],
    "activeDescription": [
      "1 回合內，消除的木符石愈多，木屬性攻擊力愈高，消除 12 粒木符石即可達至最大 2 倍 (只計算首批消除的符石)"
    ],
    "monsterId": "778",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "護教騎士 ‧ 麥爾斯",
    "activeName": ["虛無幻境 ‧ 光"],
    "activeDescription": [
      "1 回合內，光符石不會被消除，同時所有屬性符石兼具 50% 光符石效果"
    ],
    "monsterId": "779",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "魔軀靈心 ‧ 獨孤寧珂",
    "activeName": ["怒空摘星"],
    "activeDescription": ["1 回合內，減少所受傷害 60%"],
    "monsterId": "780",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "魔女轉世 ‧ 妮可",
    "activeName": ["冥流氣罩"],
    "activeDescription": [
      "1 回合內，所受傷害減少 40%；若隊伍中有人類及魔族成員時，效果持續 2 回合"
    ],
    "monsterId": "781",
    "leaderName": "人魔之怒",
    "leaderDescription": "人類及魔族攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "鬼神之瞳 ‧ 鳳天凌",
    "activeName": ["焚炎端絡脈"],
    "activeDescription": ["1 回合內，水符石及木符石兼具火符石效果"],
    "monsterId": "782",
    "leaderName": "燄影堅甲之術",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時火屬性和暗屬性傷害減少 50%",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "符鬼",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "783",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "火",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "若冰歌姬 ‧ 妍",
    "activeName": ["元素精煉 ‧ 水"],
    "activeDescription": [
      "3 回合內，水符石的掉落機率提升，並將掉落的水符石以水強化符石代替"
    ],
    "monsterId": "784",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "共生霜言者 ‧ 妍希",
    "activeName": ["元素精煉 ‧ 水"],
    "activeDescription": [
      "3 回合內，水符石的掉落機率提升，並將掉落的水符石以水強化符石代替"
    ],
    "monsterId": "785",
    "leaderName": "水浪之護守",
    "leaderDescription": "水屬性攻擊力 2.5 倍，同時火屬性傷害減少 20%",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "熾炎歌姬 ‧ 希",
    "activeName": ["元素精煉 ‧ 火"],
    "activeDescription": [
      "3 回合內，火符石的掉落機率提升，並將掉落的火符石以火強化符石代替"
    ],
    "monsterId": "786",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "共生焰言者 ‧ 妍希",
    "activeName": ["元素精煉 ‧ 火"],
    "activeDescription": [
      "3 回合內，火符石的掉落機率提升，並將掉落的火符石以火強化符石代替"
    ],
    "monsterId": "787",
    "leaderName": "燄火之護守",
    "leaderDescription": "火屬性攻擊力 2.5 倍，同時木屬性傷害減少 20%",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "木靈歌姬 ‧ 妍",
    "activeName": ["元素精煉 ‧ 木"],
    "activeDescription": [
      "3 回合內，木符石的掉落機率提升，並將掉落的木符石以木強化符石代替"
    ],
    "monsterId": "788",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "共生森言者 ‧ 妍希",
    "activeName": ["元素精煉 ‧ 木"],
    "activeDescription": [
      "3 回合內，木符石的掉落機率提升，並將掉落的木符石以木強化符石代替"
    ],
    "monsterId": "789",
    "leaderName": "藤木之護守",
    "leaderDescription": "木屬性攻擊力 2.5 倍，同時水屬性傷害減少 20%",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "庫庫爾坎",
    "activeName": ["冰柱衝擊 ‧ 中"],
    "activeDescription": [
      "對單一敵人造成 30,000 點水屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "790",
    "leaderName": "神龍呼嘯 ‧ 水",
    "leaderDescription": "當隊伍中只有神族及龍類成員時，全隊攻擊力 2.5 倍，消除水符石及心符石時攻擊力有 40% 機會額外提升 2 倍 (機率可以疊加，倍率優先跟隨隊長技能)",
    "attribute": "水",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "守衛龍神 ‧ 庫庫爾坎",
    "activeName": ["冰柱墜擊 ‧ 中"],
    "activeDescription": [
      "對全體敵人造成 30,000 點水屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "791",
    "leaderName": "神龍呼嘯 ‧ 水",
    "leaderDescription": "當隊伍中只有神族及龍類成員時，全隊攻擊力 2.5 倍，消除水符石及心符石時攻擊力有 40% 機會額外提升 2 倍 (機率可以疊加，倍率優先跟隨隊長技能)",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "皮亞沙",
    "activeName": ["顧守之約 ‧ 火"],
    "activeDescription": [
      "所受傷害減少 20%，直至沒有消除火符石，不包括主動技及隊長技 (效果持續期間技能不會冷卻)"
    ],
    "monsterId": "792",
    "leaderName": "魔龍狂號 ‧ 火",
    "leaderDescription": "當隊伍中只有魔族及龍類成員時，全隊攻擊力 3 倍；場上有附加效果時，火屬性攻擊力有 25% 機會額外提升 1.5 倍 (機率可以疊加，倍率優先跟隨隊長技能)",
    "attribute": "火",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "墮魔傲龍 ‧ 皮亞沙",
    "activeName": ["顧守之約 ‧ 火"],
    "activeDescription": [
      "所受傷害減少 20%，直至沒有消除火符石，不包括主動技及隊長技 (效果持續期間技能不會冷卻)"
    ],
    "monsterId": "793",
    "leaderName": "魔龍狂號 ‧ 火",
    "leaderDescription": "當隊伍中只有魔族及龍類成員時，全隊攻擊力 3 倍；場上有附加效果時，火屬性攻擊力有 25% 機會額外提升 1.5 倍 (機率可以疊加，倍率優先跟隨隊長技能)",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "皮拉圖斯",
    "activeName": ["拚力迎戰"],
    "activeDescription": ["1 回合內，全隊攻擊力 2 倍；下一回合全隊回復力變 0"],
    "monsterId": "794",
    "leaderName": "神龍呼嘯 ‧ 木",
    "leaderDescription": "當隊伍中只有神族及龍類成員時，全隊攻擊力 2.5 倍，消除木符石及心符石時攻擊力有 40% 機會額外提升 2 倍 (機率可以疊加，倍率優先跟隨隊長技能)",
    "attribute": "木",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "復甦遺龍 ‧ 皮拉圖斯",
    "activeName": ["拚力迎戰"],
    "activeDescription": ["1 回合內，全隊攻擊力 2 倍；下一回合全隊回復力變 0"],
    "monsterId": "795",
    "leaderName": "神龍呼嘯 ‧ 木",
    "leaderDescription": "當隊伍中只有神族及龍類成員時，全隊攻擊力 2.5 倍，消除木符石及心符石時攻擊力有 40% 機會額外提升 2 倍 (機率可以疊加，倍率優先跟隨隊長技能)",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "法芙尼爾",
    "activeName": ["群族共鳴"],
    "activeDescription": [
      "1 回合內，隊伍成員的種族愈多，全隊攻擊力愈高，5 個種族的成員即可達至最大 2.25 倍"
    ],
    "monsterId": "796",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "攻伐龍神 ‧ 法芙尼爾",
    "activeName": ["群族共鳴"],
    "activeDescription": [
      "1 回合內，隊伍成員的種族愈多，全隊攻擊力愈高，5 個種族的成員即可達至最大 2.25 倍"
    ],
    "monsterId": "797",
    "leaderName": "光之狂怒",
    "leaderDescription": "光屬性攻擊力 2.5 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "瓦維爾",
    "activeName": ["噬血龍刃"],
    "activeDescription": [
      "1 回合內 ，龍類攻擊力 1.5 倍；將龍類對敵方造成實際傷害的 5% 轉化為生命力，最大為生命力等值的 50%（不計算主動及隊長技傷害）"
    ],
    "monsterId": "798",
    "leaderName": "勢煞龍息",
    "leaderDescription": "隊伍中只有龍類隊員時，連擊 (Combo) 時攻擊力大幅提升 125%",
    "attribute": "暗",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "罪孽霸龍 ‧ 瓦維爾",
    "activeName": ["噬血龍刃"],
    "activeDescription": [
      "1 回合內 ，龍類攻擊力 1.5 倍；將龍類對敵方造成實際傷害的 5% 轉化為生命力，最大為生命力等值的 50%（不計算主動及隊長技傷害）"
    ],
    "monsterId": "799",
    "leaderName": "勢煞龍息",
    "leaderDescription": "隊伍中只有龍類隊員時，連擊 (Combo) 時攻擊力大幅提升 125%",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "迷你瘋頭",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "800",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "水",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "阿特拉哈西斯",
    "activeName": ["水刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；消除一組 6 粒或以上的水符石，水屬性攻擊力 1.5 倍"
    ],
    "monsterId": "801",
    "leaderName": "元素之念 ‧ 水",
    "leaderDescription": "水屬性攻擊力 2 倍；每直行消除 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒水符石",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "智慧者 ‧ 阿特拉哈西斯",
    "activeName": ["水刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；消除一組 6 粒或以上的水符石，水屬性攻擊力 1.5 倍"
    ],
    "monsterId": "802",
    "leaderName": "穹蒼之賜 ‧ 水",
    "leaderDescription": "水屬性攻擊力 2.5 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒水符石",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "尼努爾塔",
    "activeName": ["燄刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；消除一組 6 粒或以上的火符石，火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "803",
    "leaderName": "元素之念 ‧ 火",
    "leaderDescription": "火屬性攻擊力 2 倍；每直行消除 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒火符石",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "暴風軍神 ‧ 尼努爾塔",
    "activeName": ["燄刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；消除一組 6 粒或以上的火符石，火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "804",
    "leaderName": "穹蒼之賜 ‧ 火",
    "leaderDescription": "火屬性攻擊力 2.5 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒火符石",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "杜穆濟",
    "activeName": ["藤刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；消除一組 6 粒或以上的木符石，木屬性攻擊力 1.5 倍"
    ],
    "monsterId": "805",
    "leaderName": "元素之念 ‧ 木",
    "leaderDescription": "木屬性攻擊力 2 倍；每直行消除 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒木符石",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "牧者國王 ‧ 杜穆濟",
    "activeName": ["藤刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；消除一組 6 粒或以上的木符石，木屬性攻擊力 1.5 倍"
    ],
    "monsterId": "806",
    "leaderName": "穹蒼之賜 ‧ 木",
    "leaderDescription": "木屬性攻擊力 2.5 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒木符石",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "伊南娜",
    "activeName": ["光刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；同時消除心符石、光符石及暗符石，光屬性攻擊力 1.5 倍"
    ],
    "monsterId": "807",
    "leaderName": "元素之念 ‧ 光",
    "leaderDescription": "光屬性攻擊力 2 倍；每直行消除 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒光符石",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "月神 ‧ 伊南娜",
    "activeName": ["光刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；同時消除心符石、光符石及暗符石，光屬性攻擊力 1.5 倍"
    ],
    "monsterId": "808",
    "leaderName": "穹蒼之賜 ‧ 光",
    "leaderDescription": "光屬性攻擊力 2.5 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒光符石",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "納姆塔爾",
    "activeName": ["魅刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；同時消除心符石、光符石及暗符石，暗屬性攻擊力 1.5 倍"
    ],
    "monsterId": "809",
    "leaderName": "元素之念 ‧ 暗",
    "leaderDescription": "暗屬性攻擊力 2 倍；每直行消除 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒暗符石",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "惡疾之神 ‧ 納姆塔爾",
    "activeName": ["魅刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；同時消除心符石、光符石及暗符石，暗屬性攻擊力 1.5 倍"
    ],
    "monsterId": "810",
    "leaderName": "穹蒼之賜 ‧ 暗",
    "leaderDescription": "暗屬性攻擊力 2.5 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒暗符石",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "半人英雄 ‧ 俄安內",
    "activeName": ["神之威譽 ‧ 水"],
    "activeDescription": [
      "1 回合內，水屬性攻擊力及回復力 1.5 倍；若隊伍中有 3 個或以上神族成員，水屬性攻擊力提升至 2 倍"
    ],
    "monsterId": "811",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "善惡火神 ‧ 吉比爾",
    "activeName": ["神之威譽 ‧ 火"],
    "activeDescription": [
      "1 回合內，火屬性攻擊力及回復力 1.5 倍；若隊伍中有 3 個或以上神族成員，火屬性攻擊力提升至 2 倍"
    ],
    "monsterId": "812",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "豐收與知識女神 ‧ 尼沙巴",
    "activeName": ["神之威譽 ‧ 木"],
    "activeDescription": [
      "1 回合內，木屬性攻擊力及回復力 1.5 倍；若隊伍中有 3 個或以上神族成員，木屬性攻擊力提升至 2 倍"
    ],
    "monsterId": "813",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "眾生之母 ‧ 寧胡爾薩格",
    "activeName": ["神之威譽 ‧ 光"],
    "activeDescription": [
      "1 回合內，光屬性攻擊力及回復力 1.5 倍；若隊伍中有 3 個或以上神族成員，光屬性攻擊力提升至 2 倍"
    ],
    "monsterId": "814",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "冥府守門者 ‧ 涅蒂",
    "activeName": ["神之威譽 ‧ 暗"],
    "activeDescription": [
      "1 回合內，暗屬性攻擊力及回復力 1.5 倍；若隊伍中有 3 個或以上神族成員，暗屬性攻擊力提升至 2 倍"
    ],
    "monsterId": "815",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "勇氣白羊 ‧ 波比",
    "activeName": ["灼熱盾擊"],
    "activeDescription": [
      "暈擊敵方全體，使受影響目標無法行動 5 回合，但效果會因受到攻擊而消失"
    ],
    "monsterId": "816",
    "leaderName": "煉獄之霸權",
    "leaderDescription": "火屬性攻擊力 2.5 倍及回復力 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "狂戰金牛 ‧ 阿姆士唐",
    "activeName": ["狂戰士"],
    "activeDescription": [
      "在全部或最少 4 個成員可發動主動技時 ，發動此技會將所有成員技能 CD 重置，提升全隊攻擊力 2 倍並持續 8 回合"
    ],
    "monsterId": "817",
    "leaderName": "火木堅甲之賦 ‧ 突破",
    "leaderDescription": "全隊攻擊力 2 倍；同時火屬性和木屬性傷害減少 50%，光屬性傷害減少 30%",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "憶念雙子 ‧ 加斯陀與波魯克斯",
    "activeName": ["鐵壁陣勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心強化符石"],
    "monsterId": "818",
    "leaderName": "愈戰愈強 ‧ 爆擊",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3 倍；同時消除光符石及暗符石，全隊攻擊力額外提升 1.5 倍  (效果可以疊加)",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "堅執巨蟹 ‧ 約翰",
    "activeName": ["諸刃之擊"],
    "activeDescription": [
      "消耗現有一半的生命力， 以 125 倍自身攻擊力對敵方全體造成無屬性傷害"
    ],
    "monsterId": "819",
    "leaderName": "眾神之狂怒",
    "leaderDescription": "神族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "奮戰獅子 ‧ 加里昂",
    "activeName": ["狂戰士"],
    "activeDescription": [
      "在全部或最少 4 個成員可發動主動技時 ，發動此技會將所有成員技能 CD 重置，提升全隊攻擊力 2 倍並持續 8 回合"
    ],
    "monsterId": "820",
    "leaderName": "光水堅甲之賦 ‧ 突破",
    "leaderDescription": "全隊攻擊力 2 倍；同時光屬性和水屬性傷害減少 50%，火屬性傷害減少 30%",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "見守處女 ‧ 普西芬妮",
    "activeName": ["能量暴發"],
    "activeDescription": [
      "單體攻擊轉化為全體攻擊，持續 3 回合；而且首回合全隊攻擊力 1.5 倍"
    ],
    "monsterId": "821",
    "leaderName": "神聖之霸權",
    "leaderDescription": "光屬性攻擊力 2.5 倍及回復力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "公義天秤 ‧ 露娜",
    "activeName": ["神魔共鳴"],
    "activeDescription": [
      "2 回合內，以神族及魔族其中造成的最大傷害轉換為全隊神族及魔族的傷害"
    ],
    "monsterId": "822",
    "leaderName": "虛靜恬淡",
    "leaderDescription": "攻擊力 2 倍，並延長移動符石時間 3 秒",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "敏銳天蠍 ‧ 艾瑪",
    "activeName": ["暗光攻擊轉化"],
    "activeDescription": ["心符石轉化為暗符石，同時將光符石轉化為心符石"],
    "monsterId": "823",
    "leaderName": "眾神之狂怒",
    "leaderDescription": "神族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "坦率人馬 ‧ 紅孩兒",
    "activeName": ["一擊即中"],
    "activeDescription": ["1 回合內，單體攻擊時全隊追打火屬性攻擊1 次"],
    "monsterId": "824",
    "leaderName": "百步穿楊 ‧ 神弩",
    "leaderDescription": "當進行單體攻擊時，攻擊力 2.5 倍，若同時消除火、木及暗符石，攻擊力提升至 4 倍。適用於所有成員",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "嚴謹山羊 ‧ 杜門",
    "activeName": ["蓄能轉換 ‧ 煉木"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為木符石，最多 8 粒；當累積至最多 8 粒時發動技能，轉化的木符石會以木強化符石代替。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "825",
    "leaderName": "木水堅甲之賦 ‧ 突破",
    "leaderDescription": "全隊攻擊力 2 倍；同時木屬性和水屬性傷害減少 50%，火屬性傷害減少 30%",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "異想水瓶 ‧ 凱莉",
    "activeName": ["蓄力攻擊"],
    "activeDescription": [
      "1 回合內不能對敵方造成傷害，下一回合全隊攻擊力提升 2 倍"
    ],
    "monsterId": "826",
    "leaderName": "大海之霸權",
    "leaderDescription": "水屬性攻擊力 2.5 倍及回復力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "憐愛雙魚 ‧ 卡秋婭與拉維妮斯",
    "activeName": ["蓄能轉換 ‧ 煉水"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為水符石，最多 8 粒；當累積至最多 8 粒時發動技能，轉化的水符石會以水強化符石代替。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "827",
    "leaderName": "水火堅甲之賦 ‧ 突破",
    "leaderDescription": "全隊攻擊力 2 倍；同時水屬性和火屬性傷害減少 50%，光屬性傷害減少 30%",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "守靈戰偶 ‧ 拉帕努伊",
    "activeName": ["復甦之力"],
    "activeDescription": [
      "1 回合內，隊伍回復力愈高，木屬性攻擊力愈高，隊伍回復力達 2,200 即可達至最大 2.5 倍"
    ],
    "monsterId": "828",
    "leaderName": "靈力充沛",
    "leaderDescription": "生命力全滿時，攻擊力 2.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "虛空建構者 ‧ 猶格索托斯",
    "activeName": ["元素掌控術"],
    "activeDescription": [
      "隨機將 20 粒符石轉化為固定數量的水、火、木、光及暗符石；1 回合內，所有屬性符石兼具 80% 其他屬性符石效果"
    ],
    "monsterId": "829",
    "leaderName": "元素逼力",
    "leaderDescription": "消除符石的屬性愈多，全隊攻擊力愈高：最少消除 3 種屬性符石，全隊攻擊力 3 倍，消除 5 種屬性符石可達至最高 4 倍。所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "千知賢者 ‧ 加諾奧斯",
    "activeName": ["穿梭之時"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍，並延長移動符石時間至 9 秒"
    ],
    "monsterId": "830",
    "leaderName": "夾腳拖",
    "leaderDescription": "移動符石時兼具夾腳拖聲效。達成 5 連擊或以上時 (只計算首批消除的符石)，全隊攻擊力 2.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "水戟守衛",
    "activeName": ["寒冰強擊"],
    "activeDescription": ["對單一敵人造成 10 倍水屬性傷害"],
    "monsterId": "831",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "水",
    "race": "神族",
    "star": "2★"
  },
  {
    "monsterName": "海戟守衛",
    "activeName": ["掩眼魔靈 ‧ 水"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的水符石，隨機將 2 直行的符石轉化為水符石；反之，隨機將 1 直行的符石轉化為水符石"
    ],
    "monsterId": "832",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "水",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "火劍守衛",
    "activeName": ["烈炎強擊"],
    "activeDescription": ["對單一敵人造成 10 倍火屬性傷害"],
    "monsterId": "833",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "火",
    "race": "神族",
    "star": "2★"
  },
  {
    "monsterName": "焰劍守衛",
    "activeName": ["掩眼魔靈 ‧ 火"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的火符石，隨機將 2 直行的符石轉化為火符石；反之，隨機將 1 直行的符石轉化為火符石"
    ],
    "monsterId": "834",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "火",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "木斧守衛",
    "activeName": ["旋風強擊"],
    "activeDescription": ["對單一敵人造成 10 倍木屬性傷害"],
    "monsterId": "835",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "木",
    "race": "神族",
    "star": "2★"
  },
  {
    "monsterName": "樹斧守衛",
    "activeName": ["薔薇連擊"],
    "activeDescription": ["3 回合內，自身發動攻擊時，個人追打木屬性攻擊 1 次"],
    "monsterId": "836",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "木",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "光盾守衛",
    "activeName": ["金光強擊"],
    "activeDescription": ["對單一敵人造成 10 倍光屬性傷害"],
    "monsterId": "837",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "光",
    "race": "神族",
    "star": "2★"
  },
  {
    "monsterName": "聖盾守衛",
    "activeName": ["玄冰亂滄溟"],
    "activeDescription": ["光符石與暗符石轉化為心強化符石"],
    "monsterId": "838",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "光",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "暗鐮守衛",
    "activeName": ["暗色強擊"],
    "activeDescription": ["對單一敵人造成 10 倍暗屬性傷害"],
    "monsterId": "839",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "暗",
    "race": "神族",
    "star": "2★"
  },
  {
    "monsterName": "月鐮守衛",
    "activeName": ["掩眼魔靈 ‧ 暗"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的暗符石，隨機將 2 直行的符石轉化為暗符石；反之，隨機將 1 直行的符石轉化為暗符石"
    ],
    "monsterId": "840",
    "leaderName": "神之力",
    "leaderDescription": "神族攻擊力 1.5倍",
    "attribute": "暗",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "大荒神 建速須佐之男命",
    "activeName": ["高天原危機"],
    "activeDescription": [
      "2 回合內，水屬性成員愈多，水屬性攻擊力愈高，最大 1.5 倍"
    ],
    "monsterId": "841",
    "leaderName": "大海之強權",
    "leaderDescription": "水屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "炎光神 天照大神",
    "activeName": ["來、再一次奮起吧"],
    "activeDescription": ["3 回合內，每回合回復 50% 生命力"],
    "monsterId": "842",
    "leaderName": "煉獄之強權",
    "leaderDescription": "火屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "八岐的牲禮公主 櫛名田",
    "activeName": ["八雲"],
    "activeDescription": [
      "3 回合內，自身攻擊力 1.5 倍。若身旁的成員同為木屬性，同得此效果"
    ],
    "monsterId": "843",
    "leaderName": "大地之強權",
    "leaderDescription": "木屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "天后 媽祖",
    "activeName": ["默娘之雨打漂萍"],
    "activeDescription": ["1 回合內，回復 50% 生命力及全隊攻擊力 1.5 倍"],
    "monsterId": "844",
    "leaderName": "生命之泉 ‧ 水",
    "leaderDescription": "水屬性攻擊力 2 倍及生命力 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "月想女神 月讀",
    "activeName": ["帶我飛向月球"],
    "activeDescription": [
      "1 回合內，無視全體敵人 50% 的防禦力；個人追打暗屬性攻擊 3 次"
    ],
    "monsterId": "845",
    "leaderName": "暗黑之強權",
    "leaderDescription": "暗屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "恐龍王雷奇利德",
    "activeName": ["火龍大進擊"],
    "activeDescription": ["隨機對敵方全體造成 3 至 5 次 30 倍火屬性傷害"],
    "monsterId": "846",
    "leaderName": "富饒之約 ‧ 火",
    "leaderDescription": "火屬性攻擊力 2 倍；戰鬥中所獲得的金幣增加 50% (可疊加)",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "神帝史特萊克",
    "activeName": ["天神史特萊克突擊"],
    "activeDescription": ["1 回合內，個人隨機追打光屬性攻擊 3 至 10 次"],
    "monsterId": "847",
    "leaderName": "陰陽之怒",
    "leaderDescription": "光和暗屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "黃泉津大神 伊邪那美",
    "activeName": ["黃泉的波動"],
    "activeDescription": [
      "1 回合內，個人對敵方全體追打全隊總攻擊力 1.5 倍的火屬性攻擊 1 次"
    ],
    "monsterId": "848",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "怨靈古木",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "849",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "木",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "末日屍龍 ‧ 尼德霍格",
    "activeName": ["捨生力敵"],
    "activeDescription": [
      "消秏現有 75% 生命力；1 回合內，木屬性或龍類攻擊力 2.5 倍"
    ],
    "monsterId": "850",
    "leaderName": "歃血之盟誓",
    "leaderDescription": "龍類攻擊力 3.5 倍及生命力 2 倍，每回合扣除自身總生命力 10%",
    "attribute": "木",
    "race": "龍類",
    "star": "8★"
  },
  {
    "monsterName": "拉萊耶之主 ‧ 克蘇魯",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "851",
    "leaderName": "水之怒嘯 ‧ 獸",
    "leaderDescription": "水屬性攻擊力 2 倍，水屬性獸類攻擊力 3.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "異界叩門者 ‧ 基路比魯斯",
    "activeName": ["攻擊姿勢 ‧ 火"],
    "activeDescription": ["心符石轉化為火符石"],
    "monsterId": "852",
    "leaderName": "火之怒嘯 ‧ 獸",
    "leaderDescription": "火屬性攻擊力 2 倍，火屬性獸類攻擊力 3.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "窳敗之瞳 ‧ 美杜莎",
    "activeName": ["石化之力"],
    "activeDescription": [
      "石化敵方全體，使受影響目標無法行動並轉為木屬性，持續 3 回合。效果期間木屬性攻擊力 1.5 倍"
    ],
    "monsterId": "853",
    "leaderName": "木之怒嘯 ‧ 獸",
    "leaderDescription": "木屬性攻擊力 2 倍，木屬性獸類攻擊力 3.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "聖耀獸王 ‧ 格里芬",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "854",
    "leaderName": "光之怒嘯 ‧ 獸",
    "leaderDescription": "光屬性攻擊力 2 倍，光屬性獸類攻擊力 3.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "深淵奪智者 ‧ 巴風特",
    "activeName": ["攻擊姿勢 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗符石"],
    "monsterId": "855",
    "leaderName": "暗之怒嘯 ‧ 獸",
    "leaderDescription": "暗屬性攻擊力 2 倍，暗屬性獸類攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "無心械軀",
    "activeName": ["聚首一隅 ‧ 水"],
    "activeDescription": ["隨機將 4 粒相連的符石轉化為水符石"],
    "monsterId": "856",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "溫琪女巫",
    "activeName": ["光火移魂"],
    "activeDescription": ["光符石轉化為火符石"],
    "monsterId": "857",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "稻草愚者",
    "activeName": ["木之護盾"],
    "activeDescription": ["1 回合內，木屬性傷害無效"],
    "monsterId": "858",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "托托",
    "activeName": ["水光移魂"],
    "activeDescription": ["水符石轉化為光符石"],
    "monsterId": "859",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "憂懼獅獸",
    "activeName": ["火暗移魂"],
    "activeDescription": ["火符石轉化為暗符石"],
    "monsterId": "860",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "千千",
    "activeName": ["逼力凝視"],
    "activeDescription": ["2 回合內，消除心符石時，無視全體敵人的防禦力"],
    "monsterId": "861",
    "leaderName": "妖精之約會",
    "leaderDescription": "妖精類攻擊力及回復力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "舞孃陀螺 ‧ 千千",
    "activeName": ["逼力凝視"],
    "activeDescription": ["2 回合內，消除心符石時，無視全體敵人的防禦力"],
    "monsterId": "862",
    "leaderName": "妖精之輕步",
    "leaderDescription": "妖精類攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "克拉拉",
    "activeName": ["絕地靈淵"],
    "activeDescription": ["1 回合內，自身生命力愈低，回復力愈高，最大 3.5 倍"],
    "monsterId": "863",
    "leaderName": "妖精之約會",
    "leaderDescription": "妖精類攻擊力及回復力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "胡桃夾子 ‧ 克拉拉",
    "activeName": ["絕地靈淵"],
    "activeDescription": ["1 回合內，自身生命力愈低，回復力愈高，最大 3.5 倍"],
    "monsterId": "864",
    "leaderName": "妖精之輕步",
    "leaderDescription": "妖精類攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "瑪特羅什卡",
    "activeName": ["治癒之靈"],
    "activeDescription": [
      "回復效果提升 2 倍，直至沒有消除心符石 (不包括主動及隊長技)"
    ],
    "monsterId": "865",
    "leaderName": "妖精之約會",
    "leaderDescription": "妖精類攻擊力及回復力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "套娃人偶 ‧ 瑪特羅什卡",
    "activeName": ["治癒之靈"],
    "activeDescription": [
      "回復效果提升 2 倍，直至沒有消除心符石 (不包括主動及隊長技)"
    ],
    "monsterId": "866",
    "leaderName": "妖精之輕步",
    "leaderDescription": "妖精類攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "鐵皮的哈梅爾",
    "activeName": ["暗靈移魂加冕"],
    "activeDescription": ["暗符石轉化為心符石，同時將心符石轉化為心強化符石"],
    "monsterId": "867",
    "leaderName": "妖精之約會",
    "leaderDescription": "妖精類攻擊力及回復力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "發條玩具 ‧ 鐵皮的哈梅爾",
    "activeName": ["暗靈移魂加冕"],
    "activeDescription": ["暗符石轉化為心符石，同時將心符石轉化為心強化符石"],
    "monsterId": "868",
    "leaderName": "妖精之輕步",
    "leaderDescription": "妖精類攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "莫里斯",
    "activeName": ["蓄能傳承 ‧ 心"],
    "activeDescription": [
      "將與累積戰鬥回合數同等數量的符石轉為心符石，最多 7 粒。發動技能後會將累積戰鬥回合數重置"
    ],
    "monsterId": "869",
    "leaderName": "妖精之約會",
    "leaderDescription": "妖精類攻擊力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "泰迪熊 ‧ 莫里斯",
    "activeName": ["蓄能傳承 ‧ 心"],
    "activeDescription": [
      "將與累積戰鬥回合數同等數量的符石轉為心符石，最多 7 粒。發動技能後會將累積戰鬥回合數重置"
    ],
    "monsterId": "870",
    "leaderName": "妖精之輕步",
    "leaderDescription": "妖精類攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "鐵皮小鴨騎士",
    "activeName": ["水刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；消除一組 6 粒或以上的水符石，水屬性攻擊力 1.5 倍"
    ],
    "monsterId": "871",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "鐵皮小豬騎士",
    "activeName": ["燄刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；消除一組 6 粒或以上的火符石，火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "872",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "鐵皮羊駝騎士",
    "activeName": ["藤刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；消除一組 6 粒或以上的木符石，木屬性攻擊力 1.5 倍"
    ],
    "monsterId": "873",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "鐵皮蜂鳥騎士",
    "activeName": ["光刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；同時消除心符石、光符石及暗符石，光屬性攻擊力 1.5 倍"
    ],
    "monsterId": "874",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "鐵皮章魚騎士",
    "activeName": ["魅刃之能"],
    "activeDescription": [
      "1 回合內，延長移動符石時間 3 秒；同時消除心符石、光符石及暗符石，暗屬性攻擊力 1.5 倍"
    ],
    "monsterId": "875",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "精靈使 ‧ 烏特博麗公主",
    "activeName": ["元素精煉 ‧ 心"],
    "activeDescription": [
      "3 回合內，心符石的掉落機率提升，並將掉落的心符石以心強化符石代替"
    ],
    "monsterId": "876",
    "leaderName": "妖精之舞",
    "leaderDescription": "妖精類攻擊力及回復力 2 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "永恆守候 · 牛郎",
    "activeName": ["郎之心扉"],
    "activeDescription": [
      "將場上左方的 15 粒符石轉化為固定數量及位置的火、木及心符石"
    ],
    "monsterId": "877",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "念郎仙子 · 織女",
    "activeName": ["妾之心扉"],
    "activeDescription": [
      "將場上右方的 15 粒符石轉化為固定數量及位置的水、火及心符石"
    ],
    "monsterId": "878",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "獨角仙君",
    "activeName": ["大地猛擊"],
    "activeDescription": ["對敵方全體造成 10 倍木屬性傷害"],
    "monsterId": "879",
    "leaderName": "野獸之力",
    "leaderDescription": "獸類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "機動要塞 · 斯特靈",
    "activeName": ["步步進擊"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下時，個人追打 25000 點無屬性傷害 1 次，此傷害無視防禦力；達成 5 至 6 連擊 (Combo) 時，全隊攻擊力 1.8 倍；達成 7 連擊 (Combo) 或以上時，全隊攻擊力 1.8 倍，個人隨機追打水屬性攻擊 3 至 5 次。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "880",
    "leaderName": "連環陷阱",
    "leaderDescription": "連擊 (Combo) 愈多，全隊攻擊力愈高，10 連擊 (Combo) 即可達至最大 4.5 倍；若連擊 (Combo) 數大於 10，則全隊攻擊力變 0",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "華衣國王",
    "activeName": ["進退有序"],
    "activeDescription": ["2 回合內，全隊攻擊力 1.5 倍，並減少所受傷害 50%"],
    "monsterId": "881",
    "leaderName": "童趣約定 ‧ 水",
    "leaderDescription": "連擊 (Combo) 數為單數時，水屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "赤裸美學家 ‧ 路易斯",
    "activeName": ["進退有序"],
    "activeDescription": ["2 回合內，全隊攻擊力 1.5 倍，並減少所受傷害 50%"],
    "monsterId": "882",
    "leaderName": "童趣約定 ‧ 水",
    "leaderDescription": "連擊 (Combo) 數為單數時，水屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "紅帽繼主",
    "activeName": ["符石變換 ‧ 火"],
    "activeDescription": ["木符石轉化為火符石"],
    "monsterId": "883",
    "leaderName": "童趣約定 ‧ 火",
    "leaderDescription": "連擊 (Combo) 數為單數時，火屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "紅帽火槍手 ‧ 桃樂絲",
    "activeName": ["移魂進攻 ‧ 火"],
    "activeDescription": [
      "將木符石轉化為火符石；所轉化的符石愈多，1 回合內全隊攻擊力愈高，轉化 4 粒木符石即可達至最大 1.8 倍"
    ],
    "monsterId": "884",
    "leaderName": "童趣約定 ‧ 火",
    "leaderDescription": "連擊 (Combo) 數為單數時，火屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "盜寶獵人",
    "activeName": ["同盜相益"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍。若使用相同的隊長及戰友時，全隊攻擊力 2.5 倍"
    ],
    "monsterId": "885",
    "leaderName": "童趣約定 ‧ 木",
    "leaderDescription": "連擊 (Combo) 數為單數時，木屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "大盜首領 ‧ 阿里巴巴",
    "activeName": ["同盜相益"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍。若使用相同的隊長及戰友時，全隊攻擊力 2.5 倍"
    ],
    "monsterId": "886",
    "leaderName": "童趣約定 ‧ 木",
    "leaderDescription": "連擊 (Combo) 數為單數時，木屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "許願燈",
    "activeName": ["符石變換 ‧ 光"],
    "activeDescription": ["暗符石轉化為光符石"],
    "monsterId": "887",
    "leaderName": "童趣約定 ‧ 光",
    "leaderDescription": "連擊 (Combo) 數為單數時，光屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "許願靈使 ‧ 傑尼",
    "activeName": ["移魂進攻 ‧ 光"],
    "activeDescription": [
      "將暗符石轉化為光符石；所轉化的符石愈多，1 回合內全隊攻擊力愈高，轉化 4 粒暗符石即可達至最大 1.8 倍"
    ],
    "monsterId": "888",
    "leaderName": "童趣約定 ‧ 光",
    "leaderDescription": "連擊 (Combo) 數為單數時，光屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "快樂王子",
    "activeName": ["引領之帥"],
    "activeDescription": [
      "1 回合內，自身及身旁的成員攻擊力 1.5 倍；若身旁成員的攻擊力低於自己，該成員的攻擊力提升至 3.5 倍"
    ],
    "monsterId": "889",
    "leaderName": "童趣約定 ‧ 暗",
    "leaderDescription": "連擊 (Combo) 數為單數時，暗屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則暗屬性攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "蝕軀靈戒 ‧ 愛德華",
    "activeName": ["引領之帥"],
    "activeDescription": [
      "1 回合內，自身及身旁的成員攻擊力 1.5 倍；若身旁成員的攻擊力低於自己，該成員的攻擊力提升至 3.5 倍"
    ],
    "monsterId": "890",
    "leaderName": "童趣約定 ‧ 暗",
    "leaderDescription": "連擊 (Combo) 數為單數時，暗屬性攻擊力 2 倍；若連擊 (Combo) 數為雙數時，則暗屬性攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "趙靈兒",
    "activeName": ["旋風咒"],
    "activeDescription": ["將所有符石轉化為固定數量的水、火、木及心符石"],
    "monsterId": "891",
    "leaderName": "仙劍同源",
    "leaderDescription": "隊伍中只有水、火及木屬性的成員時，水符石兼具火及木符石效果、火符石兼具水及木符石效果，同時木符石兼具水及火符石效果 (不能疊加)；消除心符石時攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "韓菱紗",
    "activeName": ["凌空摘星"],
    "activeDescription": ["水、火及木符石轉化為強化符石"],
    "monsterId": "901",
    "leaderName": "水波灩影",
    "leaderDescription": "水屬性攻擊力 2 倍；隊伍中的人類成員愈多，水屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "盜陵少女 ‧ 韓菱紗",
    "activeName": ["凌空摘星"],
    "activeDescription": ["水、火及木符石轉化為強化符石"],
    "monsterId": "902",
    "leaderName": "水波灩影",
    "leaderDescription": "水屬性攻擊力 2 倍；隊伍中的人類成員愈多，水屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "李憶如",
    "activeName": ["蓄能轉換 ‧ 火"],
    "activeDescription": [
      "將等同於累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為火符石，最多 8 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "903",
    "leaderName": "火燄舞影",
    "leaderDescription": "火屬性攻擊力 2 倍；隊伍中的人類成員愈多，火屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "御靈聖女 ‧ 李憶如",
    "activeName": ["蓄能轉換 ‧ 火"],
    "activeDescription": [
      "將等同於累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為火符石，最多 8 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "904",
    "leaderName": "火燄舞影",
    "leaderDescription": "火屬性攻擊力 2 倍；隊伍中的人類成員愈多，火屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "景天",
    "activeName": ["繡口錦心咒"],
    "activeDescription": ["1 回合內，人類攻擊力 1.5 倍"],
    "monsterId": "905",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "飛蓬轉世 ‧ 景天",
    "activeName": ["繡口錦心咒"],
    "activeDescription": ["1 回合內，人類攻擊力 1.5 倍"],
    "monsterId": "906",
    "leaderName": "藤木萬鈞之怒",
    "leaderDescription": "木屬性攻擊力 4 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "唐雨柔",
    "activeName": ["御靈旋"],
    "activeDescription": [
      "人類攻擊力減至 50%，光屬性人類成員攻擊力則減至 0，並將被減去攻擊力的 1.5 倍加入自身攻擊力。消除光符石才會發動攻擊 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "907",
    "leaderName": "韶光疊影",
    "leaderDescription": "光屬性攻擊力 2 倍；隊伍中的人類成員愈多，光屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "柔情如雨 ‧ 唐雨柔",
    "activeName": ["御靈旋"],
    "activeDescription": [
      "人類攻擊力減至 50%，光屬性人類成員攻擊力則減至 0，並將被減去攻擊力的 1.5 倍加入自身攻擊力。消除光符石才會發動攻擊 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "908",
    "leaderName": "韶光疊影",
    "leaderDescription": "光屬性攻擊力 2 倍；隊伍中的人類成員愈多，光屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "越今朝",
    "activeName": ["凌空飛劍"],
    "activeDescription": ["1 回合內，光及暗屬性攻擊力 2 倍"],
    "monsterId": "909",
    "leaderName": "暗黑之主義",
    "leaderDescription": "暗屬性攻擊力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "獨眼玄機 ‧ 越今朝",
    "activeName": ["凌空飛劍"],
    "activeDescription": ["1 回合內，光及暗屬性攻擊力 2 倍"],
    "monsterId": "910",
    "leaderName": "暗黑之主義",
    "leaderDescription": "暗屬性攻擊力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "越祈",
    "activeName": ["因念成劍 ‧ 水"],
    "activeDescription": [
      "個人追打水屬性攻擊。攻擊次數根據可發動技能的成員數目而定"
    ],
    "monsterId": "911",
    "leaderName": "劍緣列陣",
    "leaderDescription": "隊伍中只有水、火及木屬性的成員時，達成 4 連擊 (Combo) 或以上時，全隊攻擊力 3 倍；消除心符石時攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "化劍御空 ‧ 越祈",
    "activeName": ["因念成劍 ‧ 水"],
    "activeDescription": [
      "個人追打水屬性攻擊。攻擊次數根據可發動技能的成員數目而定"
    ],
    "monsterId": "912",
    "leaderName": "劍緣列陣",
    "leaderDescription": "隊伍中只有水、火及木屬性的成員時，達成 4 連擊 (Combo) 或以上時，全隊攻擊力 3 倍；消除心符石時攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "姜雲凡",
    "activeName": ["穹天虛空刃"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的木符石，隨機將 2 直行的符石轉化為木符石；反之，隨機將 1 直行的符石轉化為木符石"
    ],
    "monsterId": "913",
    "leaderName": "藤蔓碧影",
    "leaderDescription": "木屬性攻擊力 2 倍；隊伍中的人類成員愈多，木屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "魔君之子 ‧ 姜雲凡",
    "activeName": ["穹天虛空刃"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的木符石，隨機將 2 直行的符石轉化為木符石；反之，隨機將 1 直行的符石轉化為木符石"
    ],
    "monsterId": "914",
    "leaderName": "藤蔓碧影",
    "leaderDescription": "木屬性攻擊力 2 倍；隊伍中的人類成員愈多，木屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "明綉",
    "activeName": ["靈燈引芒"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的光符石，隨機將 2 直行的符石轉化為光符石；反之，隨機將 1 直行的符石轉化為光符石"
    ],
    "monsterId": "915",
    "leaderName": "韶光疊影",
    "leaderDescription": "光屬性攻擊力 2 倍；隊伍中的人類成員愈多，光屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "天仙靈燈 ‧ 明綉",
    "activeName": ["靈燈引芒"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的光符石，隨機將 2 直行的符石轉化為光符石；反之，隨機將 1 直行的符石轉化為光符石"
    ],
    "monsterId": "916",
    "leaderName": "韶光疊影",
    "leaderDescription": "光屬性攻擊力 2 倍；隊伍中的人類成員愈多，光屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "白苗巫女 ‧ 阿奴",
    "activeName": ["天女散花"],
    "activeDescription": [
      "直接引爆場上所有光及暗符石以提升攻擊力，8 粒即可達至最大 2 倍"
    ],
    "monsterId": "917",
    "leaderName": "木之盛怒 ‧ 人",
    "leaderDescription": "木屬性攻擊力 2 倍，木屬性人類攻擊力 2.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "屍身妖王 ‧ 星璇",
    "activeName": ["舞花音"],
    "activeDescription": [
      "1 回合內，自身生命力愈低，全隊攻擊力及回復力愈高，最大 2 倍"
    ],
    "monsterId": "918",
    "leaderName": "暗之狂怒",
    "leaderDescription": "暗屬性攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "蚩尤後裔 ‧ 姜承",
    "activeName": ["義釁"],
    "activeDescription": [
      "直接引爆場上所有暗屬性以外 2 粒或以上相連的符石以提升攻擊力，15 粒即可達至最大 2.5 倍"
    ],
    "monsterId": "919",
    "leaderName": "劍走偏鋒",
    "leaderDescription": "隊伍中的成員愈少，攻擊力愈高，最大 6 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "淨天魔君 ‧ 姜世離",
    "activeName": ["義釁"],
    "activeDescription": [
      "直接引爆場上所有暗屬性以外 2 粒或以上相連的符石以提升攻擊力，15 粒即可達至最大 2.5 倍"
    ],
    "monsterId": "920",
    "leaderName": "劍走偏鋒",
    "leaderDescription": "隊伍中的成員愈少，攻擊力愈高，最大 6 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "不撓武道 ‧ 王小虎",
    "activeName": ["撥雨撩雲"],
    "activeDescription": [
      "直接引爆心符石以增加人類攻擊力，引爆 8 粒心符石即可達至最大 2 倍"
    ],
    "monsterId": "921",
    "leaderName": "水之盛怒 ‧ 人",
    "leaderDescription": "水屬性攻擊力 2 倍，水屬性人類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "蜀門半妖 ‧ 南宮煌",
    "activeName": ["攝靈法陣"],
    "activeDescription": [
      "1 回合內，水符石兼具心符石效果，同時木符石兼具火符石效果"
    ],
    "monsterId": "922",
    "leaderName": "火之盛怒 ‧ 人",
    "leaderDescription": "火屬性攻擊力 2 倍，火屬性人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "望舒射日 ‧ 雲天河",
    "activeName": ["慟天貫日式"],
    "activeDescription": [
      "2 回合內，消除火符石時，全隊攻擊力 1.5 倍；消除水符石時，回復自身回復力 15 倍的生命力"
    ],
    "monsterId": "923",
    "leaderName": "火之盛怒 ‧ 人",
    "leaderDescription": "火屬性攻擊力 2 倍，火屬性人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "翰墨丹青 ‧ 夏侯瑾軒",
    "activeName": ["丹青化五靈"],
    "activeDescription": [
      "1 回合內，火符石兼具心符石效果，同時水符石兼具木符石效果"
    ],
    "monsterId": "924",
    "leaderName": "木之盛怒 ‧ 人",
    "leaderDescription": "木屬性攻擊力 2 倍，木屬性人類攻擊力 2.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "瑾中伊人 ‧ 瑕",
    "activeName": ["返靈"],
    "activeDescription": ["1 回合內，首次所受傷害不會使你死亡"],
    "monsterId": "925",
    "leaderName": "光之盛怒 ‧ 人",
    "leaderDescription": "光屬性攻擊力 2 倍，光屬性人類攻擊力 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "精精",
    "activeName": ["寒冰強擊"],
    "activeDescription": ["對單一敵人造成 10 倍水屬性傷害"],
    "monsterId": "926",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "飛龍探雲手 ‧ 精精",
    "activeName": ["凌空摘星"],
    "activeDescription": ["水、火及木符石轉化為強化符石"],
    "monsterId": "927",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "風、雅、頌",
    "activeName": ["烈炎強擊"],
    "activeDescription": ["對單一敵人造成 10 倍火屬性傷害"],
    "monsterId": "928",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "一靈三魂 ‧ 風、雅、頌",
    "activeName": ["靈血咒"],
    "activeDescription": ["光符石轉化為火符石，同時暗符石轉化為心符石"],
    "monsterId": "929",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "勇氣",
    "activeName": ["旋風強擊"],
    "activeDescription": ["對單一敵人造成 10 倍木屬性傷害"],
    "monsterId": "930",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "五毒靈獸 ‧ 勇氣",
    "activeName": ["穹天虛空刃"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的木符石，隨機將 2 直行的符石轉化為木符石；反之，隨機將 1 直行的符石轉化為木符石"
    ],
    "monsterId": "931",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "錦八爺",
    "activeName": ["金光強擊"],
    "activeDescription": ["對單一敵人造成 10 倍光屬性傷害"],
    "monsterId": "932",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "鼠族首領 ‧ 錦八爺",
    "activeName": ["靈燈引芒"],
    "activeDescription": [
      "若場上剩下 2 粒或以下的光符石，隨機將 2 直行的符石轉化為光符石；反之，隨機將 1 直行的符石轉化為光符石"
    ],
    "monsterId": "933",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "槐米",
    "activeName": ["暗色強擊"],
    "activeDescription": ["對單一敵人造成 10 倍暗屬性傷害"],
    "monsterId": "934",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "2★"
  },
  {
    "monsterName": "槐妖老大 ‧ 槐米",
    "activeName": ["天魔往生訣"],
    "activeDescription": [
      "我方回復力減至 0，同時必然延長移動符石時間 1 秒 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "935",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "3★"
  },
  {
    "monsterName": "軟星包子",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "936",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "暗",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "羲和宿主 ‧ 玄霄",
    "activeName": ["劍嘯九天"],
    "activeDescription": [
      "每回合鎖定 3 粒符石：消除所有被鎖定的符石，全隊攻擊力 2 倍；反之，扣除 10% 總生命力 (最多扣至 1 血)。效果會在再次發動此技能或死亡後消失"
    ],
    "monsterId": "937",
    "leaderName": "水之怒嘯 ‧ 魔",
    "leaderDescription": "水屬性攻擊力 2 倍及水屬性魔族攻擊力 3.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "魔尊 ‧ 重樓",
    "activeName": ["魔之刻印"],
    "activeDescription": ["光及暗符石轉化為火強化符石"],
    "monsterId": "938",
    "leaderName": "天魔血脈",
    "leaderDescription": "火屬性魔族攻擊力 3 倍及生命力 1.3 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "大祭司 ‧ 拜月教主",
    "activeName": ["刀龍金輝"],
    "activeDescription": [
      "1 回合內，自身攻擊力倍化累積戰鬥回合數 (需要消除符石)，最大 8 倍。發動技能後戰鬥回合數將會重新累積"
    ],
    "monsterId": "939",
    "leaderName": "不撓雄傑 ‧ 光",
    "leaderDescription": "光屬性攻擊力 2.5 倍；隊伍中的人類成員愈多時，光屬性成員的生命力及回復力愈高，5 個人類成員可達至最大 1.5 倍 (不計自身)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "夜叉謀士 ‧ 魔翳",
    "activeName": ["兩極雙生術"],
    "activeDescription": [
      "每回合以左下角的符石開始轉珠時，回復力 1.5 倍；以右下角的符石開始轉珠時，則攻擊力 1.5 倍。若以其他符石開始轉珠，該回合攻擊力及回復力減少 15%。(效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "940",
    "leaderName": "暗之怒嘯 ‧ 魔",
    "leaderDescription": "暗屬性攻擊力 2 倍及暗屬性魔族攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "大海之神 ‧ 波塞頓",
    "activeName": ["印記之念 ‧ 水"],
    "activeDescription": [
      "水屬性傷害持續提升，直至沒有消除一組 5 粒或以上的水屬性符石 (只計算首批消除的符石)。每累計消除 20 粒水符石，水屬性傷害加快提升。水屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "941",
    "leaderName": "水之連動",
    "leaderDescription": "每累計消除 3 粒水符石 ，將產生 1 粒水強化符石",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "煉火之神 ‧ 赫淮斯托斯",
    "activeName": ["印記之念 ‧ 火"],
    "activeDescription": [
      "火屬性傷害持續提升，直至沒有消除一組 5 粒或以上的火屬性符石 (只計算首批消除的符石)。每累計消除 20 粒火符石，火屬性傷害加快提升。火屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "942",
    "leaderName": "火之連動",
    "leaderDescription": "每累計消除 3 粒火符石 ，將產生 1 粒火強化符石",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "戰爭女神 ‧ 雅典娜",
    "activeName": ["印記之念 ‧ 木"],
    "activeDescription": [
      "木屬性傷害持續提升，直至沒有消除一組 5 粒或以上的木屬性符石 (只計算首批消除的符石)。每累計消除 20 粒木符石，木屬性傷害加快提升。木屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "943",
    "leaderName": "木之連動",
    "leaderDescription": "每累計消除 3 粒木符石 ，將產生 1 粒木強化符石",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "聖光之神 ‧ 阿波羅",
    "activeName": ["印記之念 ‧ 光"],
    "activeDescription": [
      "光屬性傷害持續提升，直至沒有消除一組 5 粒或以上的光屬性符石 (只計算首批消除的符石)。每累計消除 20 粒光符石，光屬性傷害加快提升。光屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "944",
    "leaderName": "光之連動",
    "leaderDescription": "每累計消除 3 粒光符石 ，將產生 1 粒光強化符石",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "月夜之神 ‧ 阿提密斯",
    "activeName": ["印記之念 ‧ 暗"],
    "activeDescription": [
      "暗屬性傷害持續提升，直至沒有消除一組 5 粒或以上的暗屬性符石 (只計算首批消除的符石)。每累計消除 20 粒暗符石，暗屬性傷害加快提升。暗屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "945",
    "leaderName": "暗之連動",
    "leaderDescription": "每累計消除 3 粒暗符石 ，將產生 1 粒暗強化符石",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "海濤看守者",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "946",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "看顧之翼 ‧ 拉法葉爾",
    "activeName": ["游刃而攻"],
    "activeDescription": [
      "移靈加冕 ‧ 水\n每次只能選取 1 個效果。\n效果1：1 回合內，水屬性攻擊力 1.5 倍，並於移動符石時間內，可任意移動符石而不會發動消除\n效果2：心符石轉化為水符石，同時將火符石轉化為心強化符石"
    ],
    "monsterId": "947",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "烈火看守者",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "948",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "熾焰之翼 ‧ 烏列爾",
    "activeName": ["熾燄之傲"],
    "activeDescription": [
      "移靈加冕 ‧ 火\n每次只能選取 1 個效果。\n效果1：1 回合內，火屬性攻擊力 1.5 倍，並無視全體敵人 90% 的防禦力\n效果2：心符石轉化為火符石，同時將木符石轉化為心強化符石"
    ],
    "monsterId": "949",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "源林看守者",
    "activeName": ["防禦姿勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心符石"],
    "monsterId": "950",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "顧惜之翼 ‧ 沙利葉",
    "activeName": ["淨世之姿"],
    "activeDescription": [
      "移靈加冕 ‧ 木\n每次只能選取 1 個效果。\n效果1：1 回合內，木屬性攻擊力 1.5 倍，並消除所有附加效果\n效果2：心符石轉化為木符石，同時將水符石轉化為心強化符石"
    ],
    "monsterId": "951",
    "leaderName": "木之狂怒",
    "leaderDescription": "木屬性攻擊力 2.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "耀光看守者",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "952",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "思念之翼 ‧ 加百列",
    "activeName": ["運籌之時"],
    "activeDescription": [
      "移靈加冕 ‧ 光\n每次只能選取 1 個效果。\n效果1：1 回合內，光屬性攻擊力 1.5 倍，並延長移動符石時間 2 秒\n效果2：心符石轉化為光符石，同時將暗符石轉化為心強化符石"
    ],
    "monsterId": "953",
    "leaderName": "光之狂怒",
    "leaderDescription": "光屬性攻擊力 2.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "暗窺看守者",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "954",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "睿智之翼 ‧ 拉貴爾",
    "activeName": ["轟動一瞬"],
    "activeDescription": [
      "移靈加冕 ‧ 暗\n每次只能選取 1 個效果。\n效果1：1 回合內，光及暗屬性攻擊力  2 倍，並將移動符石時間變為 2 秒\n效果2：心符石轉化為暗符石，同時將光符石轉化為心強化符石"
    ],
    "monsterId": "955",
    "leaderName": "暗之狂怒",
    "leaderDescription": "暗屬性攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "墮落之羽 ‧ 憂懼",
    "activeName": ["元素展變 ‧ 浪濤"],
    "activeDescription": [
      "點選 1 橫行的符石，並將該橫行的符石轉化為水強化符石"
    ],
    "monsterId": "956",
    "leaderName": "大海之主義",
    "leaderDescription": "水屬性攻擊力及回復力 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "墮落之羽 ‧ 衝動",
    "activeName": ["元素展變 ‧ 熾燄"],
    "activeDescription": [
      "點選 1 橫行的符石，並將該橫行的符石轉化為火強化符石"
    ],
    "monsterId": "957",
    "leaderName": "煉獄之主義",
    "leaderDescription": "火屬性攻擊力及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "墮落之羽 ‧ 溺愛",
    "activeName": ["元素展變 ‧ 藤木"],
    "activeDescription": [
      "點選 1 橫行的符石，並將該橫行的符石轉化為木強化符石"
    ],
    "monsterId": "958",
    "leaderName": "大地之主義",
    "leaderDescription": "木屬性攻擊力及回復力 1.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "墮落之羽 ‧ 自負",
    "activeName": ["元素展變 ‧ 玄光"],
    "activeDescription": [
      "點選 1 橫行的符石，並將該橫行的符石轉化為光強化符石"
    ],
    "monsterId": "959",
    "leaderName": "神聖之主義",
    "leaderDescription": "光屬性攻擊力及回復力 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "墮落之羽 ‧ 冷漠",
    "activeName": ["元素展變 ‧ 幽冥"],
    "activeDescription": [
      "點選 1 橫行的符石，並將該橫行的符石轉化為暗強化符石"
    ],
    "monsterId": "960",
    "leaderName": "暗黑之主義",
    "leaderDescription": "暗屬性攻擊力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "憂懼之罪 ‧ 梅塔特隆",
    "activeName": ["芒星法陣"],
    "activeDescription": [
      "1 回合內，移動符石時間延長 4 秒，消除任何 2 橫行內的所有符石時，全隊攻擊力 2.5 倍；消除任何 3 橫行內的所有符石時，全隊攻擊力 3 倍 (只計算首批消除的符石)"
    ],
    "monsterId": "961",
    "leaderName": "神界聯盟 ‧ 水",
    "leaderDescription": "神族及水屬性攻擊力 2.5 倍；若戰友為神族時，神族攻擊力提升至 3.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "衝動之罪 ‧ 梅塔特隆",
    "activeName": ["芒星法陣"],
    "activeDescription": [
      "1 回合內，移動符石時間延長 4 秒，消除任何 2 橫行內的所有符石時，全隊攻擊力 2.5 倍；消除任何 3 橫行內的所有符石時，全隊攻擊力 3 倍 (只計算首批消除的符石)"
    ],
    "monsterId": "962",
    "leaderName": "神界聯盟 ‧ 火",
    "leaderDescription": "神族及火屬性攻擊力 2.5 倍；若戰友為神族時，神族攻擊力提升至 3.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "溺愛之罪 ‧ 梅塔特隆",
    "activeName": ["芒星法陣"],
    "activeDescription": [
      "1 回合內，移動符石時間延長 4 秒，消除任何 2 橫行內的所有符石時，全隊攻擊力 2.5 倍；消除任何 3 橫行內的所有符石時，全隊攻擊力 3 倍 (只計算首批消除的符石)"
    ],
    "monsterId": "963",
    "leaderName": "神界聯盟 ‧ 木",
    "leaderDescription": "神族及木屬性攻擊力 2.5 倍；若戰友為神族時，神族攻擊力提升至 3.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "自負之罪 ‧ 梅塔特隆",
    "activeName": ["芒星法陣"],
    "activeDescription": [
      "1 回合內，移動符石時間延長 4 秒，消除任何 2 橫行內的所有符石時，全隊攻擊力 2.5 倍；消除任何 3 橫行內的所有符石時，全隊攻擊力 3 倍 (只計算首批消除的符石)"
    ],
    "monsterId": "964",
    "leaderName": "神界聯盟 ‧ 光",
    "leaderDescription": "神族及光屬性攻擊力 2.5 倍；若戰友為神族時，神族攻擊力提升至 3.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "冷漠之罪 ‧ 梅塔特隆",
    "activeName": ["芒星法陣"],
    "activeDescription": [
      "1 回合內，移動符石時間延長 4 秒，消除任何 2 橫行內的所有符石時，全隊攻擊力 2.5 倍；消除任何 3 橫行內的所有符石時，全隊攻擊力 3 倍 (只計算首批消除的符石)"
    ],
    "monsterId": "965",
    "leaderName": "神界聯盟 ‧ 暗",
    "leaderDescription": "神族及暗屬性攻擊力 2.5 倍；若戰友為神族時，神族攻擊力提升至 3.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "學徒凱爾文",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "966",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "魔法師凱爾文",
    "activeName": ["狩獵之勢"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為獸類，同得此效果"
    ],
    "monsterId": "967",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "學徒沃爾特",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "968",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "僧侶沃爾特",
    "activeName": ["攻守自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，回復 20,000 點生命力；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "969",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "學徒布賴恩",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "970",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "傳教士布賴恩",
    "activeName": ["狂魔之戾"],
    "activeDescription": [
      "全隊攻擊力提升 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)"
    ],
    "monsterId": "971",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "學徒內森",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "972",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "牧師內森",
    "activeName": ["進退自如"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下，所受傷害減少 80%；反之，所有成員攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "973",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "學徒亞歷克斯",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "974",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "術士亞歷克斯",
    "activeName": ["窮兇極怒"],
    "activeDescription": [
      "1 回合內，自身攻擊力 10 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "975",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "星辰之翼 ‧ 梅塔特隆",
    "activeName": ["星陣"],
    "activeDescription": [
      "1 回合內，移動符石時間延長 2 秒，消除任何 2 橫行內的所有符石時 (只計算首批消除的符石)，全隊攻擊力 2.5 倍"
    ],
    "monsterId": "976",
    "leaderName": "神界聯盟",
    "leaderDescription": "神族攻擊力 2.5 倍；若戰友為神族時，神族攻擊力提升至 3 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "繽果調飲師 ‧ 仙杜麗拉",
    "activeName": ["攻擊強化 ‧ 水"],
    "activeDescription": ["心符石轉化為水強化符石"],
    "monsterId": "977",
    "leaderName": "靈念 ‧ 水",
    "leaderDescription": "水屬性攻擊力 2 倍，同時水符石兼具 50% 心符石效果 (效果不能疊加)",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "月宮聖後 ‧ 嫦娥",
    "activeName": ["不老妙藥"],
    "activeDescription": ["光符石與木符石轉化為心符石"],
    "monsterId": "978",
    "leaderName": "全神貫注 ‧ 強",
    "leaderDescription": "隊伍中只有神族成員時，全隊攻擊力 3 倍。消除 5 粒或以上心符石時，全隊攻擊力額外提升 1.5 倍 (不能疊加)",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "蒼穹龍帝 ‧ 烏拉諾斯",
    "activeName": ["轟天重炮"],
    "activeDescription": ["對敵方全體造成 80 倍自身攻擊力的自身屬性傷害"],
    "monsterId": "979",
    "leaderName": "絕命暴擊",
    "leaderDescription": "每回合有 30% 機會攻擊力 7 倍。當生命力少於 10%，機會由 30% 變成 50%",
    "attribute": "光",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "忠誠守護犬",
    "activeName": ["水火攻擊轉化"],
    "activeDescription": ["心符石轉化為水符石，同時將火符石轉化為心符石"],
    "monsterId": "980",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "領路神寵 ‧ 忠犬",
    "activeName": ["水火攻擊轉化"],
    "activeDescription": ["心符石轉化為水符石，同時將火符石轉化為心符石"],
    "monsterId": "981",
    "leaderName": "浪濤萬鈞之怒",
    "leaderDescription": "水屬性攻擊力 4 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "勇猛守護犬",
    "activeName": ["火木攻擊轉化"],
    "activeDescription": ["心符石轉化為火符石，同時將木符石轉化為心符石"],
    "monsterId": "982",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "奮戰神衛 ‧ 猛犬",
    "activeName": ["火木攻擊轉化"],
    "activeDescription": ["心符石轉化為火符石，同時將木符石轉化為心符石"],
    "monsterId": "983",
    "leaderName": "熾燄萬鈞之怒",
    "leaderDescription": "火屬性攻擊力 4 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "仁厚守護犬",
    "activeName": ["木水攻擊轉化"],
    "activeDescription": ["心符石轉化為木符石，同時將水符石轉化為心符石"],
    "monsterId": "984",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "看顧神寵 ‧ 仁犬",
    "activeName": ["木水攻擊轉化"],
    "activeDescription": ["心符石轉化為木符石，同時將水符石轉化為心符石"],
    "monsterId": "985",
    "leaderName": "藤木萬鈞之怒",
    "leaderDescription": "木屬性攻擊力 4 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "詩嘉古爾",
    "activeName": ["武化"],
    "activeDescription": ["將隊長或戰友所在隊伍欄直行的符石轉化為自身屬性符石"],
    "monsterId": "986",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "聖盃的神酒 ‧ 詩嘉古爾",
    "activeName": ["武化之水"],
    "activeDescription": [
      "1 回合內，水屬性攻擊力 1.5 倍，並將隊長或戰友所在隊伍欄直行的符石轉化為水符石"
    ],
    "monsterId": "987",
    "leaderName": "大海之集權",
    "leaderDescription": "水屬性攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "絲克嘉莉德",
    "activeName": ["控壓"],
    "activeDescription": [
      "1 回合內，全體敵人的攻擊力弱化 20%，期間所有減傷效果無效"
    ],
    "monsterId": "988",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "激昂的戰意 ‧ 絲克嘉莉德",
    "activeName": ["武之控壓"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.5 倍及全體敵人的攻擊力弱化 80%，期間所有減傷效果無效"
    ],
    "monsterId": "989",
    "leaderName": "煉獄之集權",
    "leaderDescription": "火屬性攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "潔蘿露爾",
    "activeName": ["武化"],
    "activeDescription": ["將隊長或戰友所在隊伍欄直行的符石轉化為自身屬性符石"],
    "monsterId": "990",
    "leaderName": "木之狂怒",
    "leaderDescription": "木屬性攻擊力 2.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "藍霜巨人 ‧ 絲卡蒂",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1001",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "赤岩巨人 ‧ 赫朗格尼爾",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1002",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "青羽巨人 ‧ 夏基",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1003",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "璃電巨人 ‧ 法布提",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1004",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "紫髏巨人 ‧ 尤彌爾",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1005",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "水鬼",
    "activeName": ["攻擊姿勢 ‧ 水"],
    "activeDescription": ["心符石轉化為水符石"],
    "monsterId": "1006",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "2★"
  },
  {
    "monsterName": "深潛惡鬼",
    "activeName": ["霧影乾坤"],
    "activeDescription": [
      "將 3 粒符石轉化為水符石 (光及暗符石優先轉換)。隊伍中每多 1 個人類成員，額外將 2 粒符石轉化為水符石"
    ],
    "monsterId": "1007",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "殭屍",
    "activeName": ["攻擊姿勢 ‧ 火"],
    "activeDescription": ["心符石轉化為火符石"],
    "monsterId": "1008",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "2★"
  },
  {
    "monsterName": "玄火殭屍",
    "activeName": ["魔之怨念 ‧ 火"],
    "activeDescription": [
      "場上有附加效果時，1 回合內，火屬性攻擊力 1.5 倍及火屬性魔族攻擊力 2.5 倍"
    ],
    "monsterId": "1009",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "食屍鬼",
    "activeName": ["攻擊姿勢 ‧ 木"],
    "activeDescription": ["心符石轉化為木符石"],
    "monsterId": "1010",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "2★"
  },
  {
    "monsterName": "惡噬屍鬼",
    "activeName": ["同盜相益"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍。若使用相同的隊長及戰友時，全隊攻擊力 2.5 倍"
    ],
    "monsterId": "1011",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "木乃伊",
    "activeName": ["攻擊姿勢 ‧ 光"],
    "activeDescription": ["心符石轉化為光符石"],
    "monsterId": "1012",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "2★"
  },
  {
    "monsterName": "咒虐縛靈",
    "activeName": ["武化"],
    "activeDescription": ["將隊長或戰友所在隊伍欄直行的符石轉化為自身屬性符石"],
    "monsterId": "1013",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "骷髏兵",
    "activeName": ["攻擊姿勢 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗符石"],
    "monsterId": "1014",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "2★"
  },
  {
    "monsterName": "骷髏屠兵",
    "activeName": ["控壓"],
    "activeDescription": [
      "1 回合內，全體敵人的攻擊力弱化 20%，期間所有減傷效果無效"
    ],
    "monsterId": "1015",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "雷霆神像",
    "activeName": ["攻擊之姿"],
    "activeDescription": ["心符石轉化為自身屬性符石"],
    "monsterId": "1016",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "光",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "千殛雷霆 · 神皇宙斯",
    "activeName": ["戰意高昂"],
    "activeDescription": ["1 回合內，自身生命力愈高，攻擊力愈高，最大 2 倍"],
    "monsterId": "1017",
    "leaderName": "元素防護",
    "leaderDescription": "所有屬性傷害減少 30%",
    "attribute": "光",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "無頭騎士 ‧ 杜拉漢",
    "activeName": ["狂騎之燄"],
    "activeDescription": [
      "在全部或最少 3 個成員可發動主動技時，可發動此技能，並將這些成員的技能 CD 重置：1 回合內全隊攻擊力 2 倍及延長移動符石時間 2 秒。若多於 3 個成員的技能被重置，其後每個技能被重置的成員，額外增加效果持續 1 回合，最多可持續 4 回合"
    ],
    "monsterId": "1018",
    "leaderName": "魔之嗔怒",
    "leaderDescription": "魔族攻擊力 3 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "雪球四分衛 ‧ 雪高",
    "activeName": ["連珠 ‧ 雪炮"],
    "activeDescription": [
      "1 回合內，每消除 1 粒水符石 (只計算首批消除的符石)，個人追打 10000 點水屬性攻擊 1 次，最多可追打 30 次"
    ],
    "monsterId": "1019",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "永生的詛咒 ‧ 羅伯特",
    "activeName": ["血約"],
    "activeDescription": ["1 回合內，消除 3 種或以上的符石，全隊攻擊力 3 倍"],
    "monsterId": "1020",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "咆吼戰意 ‧ 費雷",
    "activeName": ["符石強化 ‧ 水"],
    "activeDescription": ["水符石轉化為水強化符石"],
    "monsterId": "1021",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "凱旋戰將 ‧ 費雷",
    "activeName": ["汪洋大號令"],
    "activeDescription": [
      "水符石轉化為水強化符石，同時將火符石與心符石轉化為水符石"
    ],
    "monsterId": "1022",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "熾焰懲責 ‧ 提爾",
    "activeName": ["符石強化 ‧ 火"],
    "activeDescription": ["火符石轉化為火強化符石"],
    "monsterId": "1023",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "剛毅戰將 ‧ 提爾",
    "activeName": ["熾燃大號令"],
    "activeDescription": [
      "火符石轉化為火強化符石，同時將木符石與心符石轉化為火符石"
    ],
    "monsterId": "1024",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "悼靈之喚 ‧ 費蕾雅",
    "activeName": ["符石強化 ‧ 木"],
    "activeDescription": ["木符石轉化為木強化符石"],
    "monsterId": "1025",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "魂牽愛意 ‧ 費蕾雅",
    "activeName": ["森野大號令"],
    "activeDescription": [
      "木符石轉化為木強化符石，同時將水符石與心符石轉化為木符石"
    ],
    "monsterId": "1026",
    "leaderName": "木之狂怒",
    "leaderDescription": "木屬性攻擊力 2.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "閃爍鳴動 ‧ 索爾",
    "activeName": ["符石強化 ‧ 光"],
    "activeDescription": ["光符石轉化為光強化符石"],
    "monsterId": "1027",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "威嚴鐵鎚 ‧ 索爾",
    "activeName": ["聖光大號令"],
    "activeDescription": [
      "光符石轉化為光強化符石，同時將暗符石與心符石轉化為光符石"
    ],
    "monsterId": "1028",
    "leaderName": "光之狂怒",
    "leaderDescription": "光屬性攻擊力 2.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "不赦惡神 ‧ 洛基",
    "activeName": ["符石強化 ‧ 暗"],
    "activeDescription": ["暗符石轉化為暗強化符石"],
    "monsterId": "1029",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "亡靈蝕骨 ‧ 洛基",
    "activeName": ["魅影大號令"],
    "activeDescription": [
      "暗符石轉化為暗強化符石，同時將光符石與心符石轉化為暗符石"
    ],
    "monsterId": "1030",
    "leaderName": "暗之狂怒",
    "leaderDescription": "暗屬性攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "阿羅哈",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1031",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "虎鯨德魯依 ‧ 阿羅哈",
    "activeName": ["元素均霑"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 7 秒，並將所有符石轉化為固定數量的水、火、木、光及暗符石"
    ],
    "monsterId": "1032",
    "leaderName": "百獸同心",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 3.5 倍，所有屬性符石兼具 25% 心符石效果 (效果可以疊加)",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "泊安娜",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1033",
    "leaderName": "煉獄之強權 ‧ 獸",
    "leaderDescription": "火屬性攻擊力 2 倍及回復力 1.5 倍；火屬性獸類攻擊力 3.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "靈鸛德魯依 ‧ 泊安娜",
    "activeName": ["獸化支援"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍；隊伍中每多一個獸類成員，額外增加效果持續 1 回合，最多可持續 6 回合 (效果持續期間技能不會冷卻)"
    ],
    "monsterId": "1034",
    "leaderName": "煉獄之強權 ‧ 獸",
    "leaderDescription": "火屬性攻擊力 2 倍及回復力 1.5 倍；火屬性獸類攻擊力 3.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "雲陽",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1035",
    "leaderName": "大地之強權 ‧ 獸",
    "leaderDescription": "木屬性攻擊力 2 倍及回復力 1.5 倍；木屬性獸類攻擊力 3.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "熊貓德魯依 ‧ 雲陽",
    "activeName": ["亡命感應 ‧ 木"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至木符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "1036",
    "leaderName": "大地之強權 ‧ 獸",
    "leaderDescription": "木屬性攻擊力 2 倍及回復力 1.5 倍；木屬性獸類攻擊力 3.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "多多",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1037",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "企鵝德魯依 ‧ 多多",
    "activeName": ["冰靈術"],
    "activeDescription": [
      "攻擊力 1.5 倍，直至消除心符石 (只計算首批消除的符石)，效果持續期間技能不會冷卻"
    ],
    "monsterId": "1038",
    "leaderName": "百獸同心",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 3.5 倍，所有屬性符石兼具 25% 心符石效果 (效果可以疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "蘇瑪塔",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1039",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "食夢貘德魯依 ‧ 蘇瑪塔",
    "activeName": ["蝕夢之靈"],
    "activeDescription": [
      "1 回合內，沒有消除心符石，全隊攻擊力 2 倍；反之，全隊攻擊力 1.5 倍"
    ],
    "monsterId": "1040",
    "leaderName": "百獸同盟",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "九天應元 ‧ 聞仲",
    "activeName": ["亡命感應 ‧ 水"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至水符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "1041",
    "leaderName": "銳兵列陣 ‧ 強",
    "leaderDescription": "隊伍中須有水和光屬性的成員，消除任何三種或以上屬性符石，水和光屬性攻擊力 3.5 倍。消除水和光符石時，水和光屬性的攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "彌勒世尊 ‧ 燃燈",
    "activeName": ["鐵壁陣勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心強化符石"],
    "monsterId": "1042",
    "leaderName": "火靈符籙",
    "leaderDescription": "2 粒火符石或心符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)。回合結束時，將 2 粒符石轉化為火符石 (光及暗符石優先轉換)",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "顯聖真君 ‧ 楊戩",
    "activeName": ["枯朽的戰場"],
    "activeDescription": [
      "2 回合內，敵方全體轉為水屬性，並提升木屬性對水屬性目標的攻擊力"
    ],
    "monsterId": "1043",
    "leaderName": "木靈符籙",
    "leaderDescription": "2 粒木符石或心符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)。回合結束時，將 2 粒符石轉化為木符石 (光及暗符石優先轉換)",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "齊恆天帥 ‧ 姜子牙",
    "activeName": ["鐵壁陣勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心強化符石"],
    "monsterId": "1044",
    "leaderName": "銳兵列陣 ‧ 強",
    "leaderDescription": "隊伍中須有水和光屬性的成員，消除任何三種或以上屬性符石，水和光屬性攻擊力 3.5 倍。消除水和光符石時，水和光屬性的攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "雷殛浪仙 ‧ 申公豹",
    "activeName": ["攻擊強化 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗強化符石"],
    "monsterId": "1045",
    "leaderName": "愈戰愈強 ‧ 聚擊",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3 倍。消除一組 5 粒或以上的暗符石時，全隊攻擊力額外提升 1.5 倍 (效果可以疊加)",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "預知者之歷劫 ‧ 卡珊德拉",
    "activeName": ["冰霜絕命"],
    "activeDescription": [
      "我方回復力減至 0，並將每個成員自身回復力的 3.5 倍各自加入自身攻擊力 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，當前技能 CD 減少 4"
    ],
    "monsterId": "1046",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "罪與責之承諾 ‧ 美狄亞",
    "activeName": ["喋血戰意"],
    "activeDescription": [
      "所有成員攻擊力提升 2 倍，同時火屬性符石掉落機率提升，但受到的傷害提升 1.5 倍 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，當前技能 CD 減少 4"
    ],
    "monsterId": "1047",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "黑巫術之疚惡 ‧ 喀耳刻",
    "activeName": ["魔法雙刃"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上才會發動攻擊和回復，連擊 (Combo) 時攻擊力提升 40%，期間所有減傷效果無效 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，當前技能 CD 減少 6"
    ],
    "monsterId": "1048",
    "leaderName": "大地之霸權",
    "leaderDescription": "木屬性攻擊力 2.5 倍及回復力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "古樹神母 ‧ 希栢利",
    "activeName": ["自然約章"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍，並延長移動符石時間 1 秒；隊伍中每多一個獸類成員，額外提升攻擊力 0.2 倍及延長移動符石時間 0.2 秒，最多可達 2.5 倍攻擊力及延長移動符石時間 2 秒"
    ],
    "monsterId": "1049",
    "leaderName": "野獸之嗔怒",
    "leaderDescription": "獸類攻擊力 3 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "魔源繼主 ‧ 奧茲瑪",
    "activeName": ["星火棋陣"],
    "activeDescription": [
      "1 回合內，消除 1 至 2 組火符石時，延遲全體敵人行動 1 回合；消除 3 組或以上的火符石時，全隊攻擊力 2 倍。回合結束時，隨機將 6 至 8 粒符石轉化為火符石"
    ],
    "monsterId": "1050",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "饑荒騎士 ‧ 芭婭",
    "activeName": ["移魂吮血 ‧ 水"],
    "activeDescription": [
      "暗符石轉化為水符石；1 回合內，將全隊對敵方造成傷害的 10% 轉化為生命力"
    ],
    "monsterId": "1051",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "屠殺騎士 ‧ 貝爾賽克",
    "activeName": ["移魂吮血 ‧ 火"],
    "activeDescription": [
      "暗符石轉化為火符石；1 回合內，將全隊對敵方造成傷害的 10% 轉化為生命力"
    ],
    "monsterId": "1052",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "瘟疫騎士 ‧ 塞普勒斯",
    "activeName": ["移魂吮血 ‧ 木"],
    "activeDescription": [
      "光符石轉化為木符石；1 回合內，將全隊對敵方造成傷害的 10% 轉化為生命力"
    ],
    "monsterId": "1053",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "災厄騎士 ‧ 畢夏普",
    "activeName": ["血魔法咒 ‧ 光"],
    "activeDescription": [
      "消秏現有 30% 的生命力，1 回合內，消秏的生命力愈多，光屬性及魔族攻擊力提升愈多，消秏 5000 點生命力即可達至最大 2 倍"
    ],
    "monsterId": "1054",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "衰老騎士 ‧ 奈普",
    "activeName": ["水暗移魂 ‧ 暗靈"],
    "activeDescription": [
      "水符石轉化為暗符石；1 回合內，暗符石兼具 50% 心符石效果"
    ],
    "monsterId": "1055",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "史蜜莉",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "1056",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "凱旋女皇 ‧ 史蜜莉",
    "activeName": ["流雲術"],
    "activeDescription": [
      "隨機將 4 至 7 粒符石轉化為水強化符石 (光及暗符石優先轉換)"
    ],
    "monsterId": "1057",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "海姆達爾",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "1058",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "熾焰神衛 ‧ 海姆達爾",
    "activeName": ["亡命感應 ‧ 火"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至火符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "1059",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "瓦利",
    "activeName": ["防禦姿勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心符石"],
    "monsterId": "1060",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "唁魂學者 ‧ 瓦利",
    "activeName": ["勇武之力"],
    "activeDescription": [
      "3 回合內，全隊攻擊力 1.8 倍及全隊回復力變 0；並於第 3 回合結束時，完全回復生命力"
    ],
    "monsterId": "1061",
    "leaderName": "木之狂怒",
    "leaderDescription": "木屬性攻擊力 2.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "摩迪與曼尼",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "1062",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "鳴動威嚴 ‧ 摩迪與曼尼",
    "activeName": ["木光移魂"],
    "activeDescription": ["木符石轉化為光符石"],
    "monsterId": "1063",
    "leaderName": "光之狂怒",
    "leaderDescription": "光屬性攻擊力 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "諾爾維",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "1064",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "不赦祭司 ‧ 諾爾維",
    "activeName": ["蓄能轉換 ‧ 暗"],
    "activeDescription": [
      "將等同於累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為暗符石，最多 8 粒。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "1065",
    "leaderName": "暗之狂怒",
    "leaderDescription": "暗屬性攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "蒼海的迴聲 ‧ 烏蘇拉",
    "activeName": ["龍魂共鳴"],
    "activeDescription": [
      "2 回合內，以龍類其中造成的最大傷害轉換為全隊龍類的傷害"
    ],
    "monsterId": "1066",
    "leaderName": "噬血龍王 ‧ 強",
    "leaderDescription": "龍類攻擊力 2.5 倍，將龍類對敵方造成傷害的 10%  轉化為生命力 (不計算主動及隊長技傷害)，最大為生命力等值的 50% (不能疊加)",
    "attribute": "水",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "赤焰的領袖 ‧ 愛格德",
    "activeName": ["攻勢強化 ‧ 火"],
    "activeDescription": [
      "心符石轉化為火強化符石，並將自身所在隊伍欄直行的符石轉化為火符石"
    ],
    "monsterId": "1067",
    "leaderName": "幻龍利牙",
    "leaderDescription": "龍類攻擊力 1.5 倍；消除一組 6 粒或以上的相同屬性符石，龍類攻擊力 3 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "青林的風祭 ‧ 芭芭拉",
    "activeName": ["群龍壓迫"],
    "activeDescription": ["1 回合內，所受傷害將會以龍類的數量而減少"],
    "monsterId": "1068",
    "leaderName": "噬血龍王 ‧ 強",
    "leaderDescription": "龍類攻擊力 2.5 倍，將龍類對敵方造成傷害的 10%  轉化為生命力 (不計算主動及隊長技傷害)，最大為生命力等值的 50% (不能疊加)",
    "attribute": "木",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "永恆的聖焰 ‧ 安納",
    "activeName": ["攻勢強化 ‧ 光"],
    "activeDescription": [
      "心符石轉化為光強化符石，並將自身所在隊伍欄直行的符石轉化為光符石"
    ],
    "monsterId": "1069",
    "leaderName": "幻龍利爪",
    "leaderDescription": "消除一組 6 粒或以上的相同符石，龍類攻擊力 3 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "闇噬的蘊量 ‧ 諾瓦利斯",
    "activeName": ["龍力招來 ‧ 幽冥"],
    "activeDescription": [
      "龍類攻擊力減至 0，並將龍類攻擊力的 1.5 倍加入自身攻擊力，消除暗符石才會發動攻擊 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "1070",
    "leaderName": "幻龍利牙",
    "leaderDescription": "龍類攻擊力 1.5 倍；消除一組 6 粒或以上的相同屬性符石，龍類攻擊力 3 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "伊恩 ‧ 克利夫",
    "activeName": ["玄冥劍"],
    "activeDescription": ["火符石轉化為光符石，同時將心符石轉化為暗符石"],
    "monsterId": "1071",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "愛葛莎",
    "activeName": ["轉攻為守 ‧ 強"],
    "activeDescription": [
      "隨機將 3 粒符石轉化為心強化符石，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "1072",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "巴爾德爾 ‧ 克利夫",
    "activeName": ["獨一"],
    "activeDescription": [
      "全隊攻擊力 1.7 倍，直至連擊 (Combo) 數為雙數時 (只計算首批消除的符石)。效果持續期間技能不會冷卻"
    ],
    "monsterId": "1073",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "黑騎士",
    "activeName": ["符石加冕 ‧ 暗"],
    "activeDescription": [
      "暗符石轉化為暗強化符石，若轉化的符石為 10 粒或以下，則當前技能 CD 減少 2"
    ],
    "monsterId": "1074",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "諾維雅 ‧ 克利夫",
    "activeName": ["流影劍"],
    "activeDescription": ["水符石轉化為光符石，同時將木符石轉化為暗符石"],
    "monsterId": "1075",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "傳頌靈碑",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1076",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "水",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "誓約的象徵 ‧ 華爾",
    "activeName": ["驚天之怒 ‧ 神"],
    "activeDescription": ["1 回合內，神族攻擊力 2.5 倍"],
    "monsterId": "1077",
    "leaderName": "神之強權",
    "leaderDescription": "神族攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "冥蟲頭甲",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1078",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "暗",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "冥界皇者 ‧ 黑帝斯",
    "activeName": ["幽冥圍城"],
    "activeDescription": ["將所有符石轉化為暗符石"],
    "monsterId": "1079",
    "leaderName": "元素凝滙 ‧ 強",
    "leaderDescription": "全隊攻擊力 1.5 倍，隊伍成員的屬性愈多，攻擊力愈高，最大 4 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "姻緣牽線 ‧ 月老",
    "activeName": ["緣來觸電"],
    "activeDescription": [
      "1 回合內，消除的心符石愈多，全隊攻擊力愈高，消除 10 粒心符石即可達至最大 2.5 倍"
    ],
    "monsterId": "1080",
    "leaderName": "神聖之集權",
    "leaderDescription": "光屬性攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "萬龍帝君 ‧ 敖廣",
    "activeName": ["浪濤敕令"],
    "activeDescription": [
      "火符石與心符石轉化為水符石；同時將木符石轉換為心符石"
    ],
    "monsterId": "1081",
    "leaderName": "真龍王震怒 ‧ 癒術",
    "leaderDescription": "龍類及神族攻擊力 4 倍，龍類回復力 2 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "孤高龍王 ‧ 敖廣",
    "activeName": ["海洋大號令 ‧ 加冕"],
    "activeDescription": ["火符石與心符石轉化為水強化符石"],
    "monsterId": "1082",
    "leaderName": "真龍王震怒",
    "leaderDescription": "龍類攻擊力 3 倍及神族攻擊力 2.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "威靈護法 ‧ 哪吒",
    "activeName": ["燄火敕令"],
    "activeDescription": [
      "木符石與心符石轉化為火符石；同時將水符石轉換為心符石"
    ],
    "monsterId": "1083",
    "leaderName": "真火煉獄 ‧ 熾岩",
    "leaderDescription": "無視敵方屬性，每回合對敵方全體追打 50,000 點無屬性傷害 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "狂戰鬥將 ‧ 哪吒",
    "activeName": ["焚燒大號令 ‧ 加冕"],
    "activeDescription": ["木符石與心符石轉化為火強化符石"],
    "monsterId": "1084",
    "leaderName": "真火煉獄",
    "leaderDescription": "無視敵方屬性，每回合以自身攻擊力 15 倍追打 1 次 (需要消除符石)",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "混世戰霸 ‧ 牛魔王",
    "activeName": ["森野敕令"],
    "activeDescription": [
      "水符石與心符石轉化為木符石；同時將火符石轉換為心符石"
    ],
    "monsterId": "1085",
    "leaderName": "霸王震怒 ‧ 癒術",
    "leaderDescription": "妖精類攻擊力 4.5 倍；獸類攻擊力 4 倍及回復力 1.8 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "山林霸妖 ‧ 牛魔王",
    "activeName": ["自然大號令 ‧ 加冕"],
    "activeDescription": ["水符石與心符石轉化為木強化符石"],
    "monsterId": "1086",
    "leaderName": "霸王震怒",
    "leaderDescription": "獸類及妖精類攻擊力 3 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "鬥神霸者 ‧ 孫悟空",
    "activeName": ["金睛火眼 ‧ 凝煉"],
    "activeDescription": ["3 回合內，無視全體敵人的防禦力"],
    "monsterId": "1087",
    "leaderName": "護甲金尊",
    "leaderDescription": "全隊回復力 1.5 倍；生命力愈高，所受傷害愈低，最多減少 60% 傷害；生命力愈低，迴避敵人攻擊的機率愈高，最大 50%",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "赫耀聖者 ‧ 孫悟空",
    "activeName": ["點石成金"],
    "activeDescription": [
      "1 回合內，無視全體敵人的防禦力；點選元素法陣上的 1 粒符石，並將該種符石轉化為光強化符石"
    ],
    "monsterId": "1088",
    "leaderName": "護甲金身",
    "leaderDescription": "生命力愈高，所受傷害愈低，最多減少 60 % 傷害；生命力愈低，迴避敵人攻擊的機率愈高，最大 50%",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "背疚媚狐 ‧ 蘇妲己",
    "activeName": ["魅惑傾城 ‧ 強"],
    "activeDescription": [
      "20 秒內，可任意移動符石而不會發動消除；消除的符石數目愈多，攻擊力提升愈多，最大 2.5 倍 (只計算首批消除的符石數目)"
    ],
    "monsterId": "1089",
    "leaderName": "傾世絕色",
    "leaderDescription": "連擊 (Combo) 時攻擊力大幅提升 125%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "善心狐仙 ‧ 蘇妲己",
    "activeName": ["回眸傾城"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除；消除的符石數目愈多，攻擊力提升愈多，最大 1.9 倍 (只計算首批消除的符石數目)"
    ],
    "monsterId": "1090",
    "leaderName": "傾世絕色",
    "leaderDescription": "連擊 (Combo) 時攻擊力大幅提升 125%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "水精靈仙女 忒琪菈",
    "activeName": ["水之仙女"],
    "activeDescription": [
      "將最底一橫行的符石轉化為水符石，並將最左方一直行的 4 粒符石轉化為心符石"
    ],
    "monsterId": "1091",
    "leaderName": "流雲雙刃斬",
    "leaderDescription": "水屬性攻擊力 2.5 倍；消除最底一橫行內的所有符石時，自身攻擊力額外提升 3 倍，若使用相同的隊長及戰友時，自身攻擊力額外提升至 9 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "炎輝神 雅格娜姆特",
    "activeName": ["神之秘剣 - 光炎破碎"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 時，個人追打攻擊力 6 倍的火屬性攻擊 1 次，每多 1 連擊 (Combo)，追打倍率增加 2 倍，6 連擊 (Combo) 可達至最大 10 倍"
    ],
    "monsterId": "1092",
    "leaderName": "煉獄之集權",
    "leaderDescription": "火屬性攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "妖精皇 闇黑基姆雷特",
    "activeName": ["撒旦王權"],
    "activeDescription": [
      "1 回合內，木屬性及妖精類攻擊力 2 倍；並對全體敵人造成自身攻擊力 30 倍的木屬性傷害"
    ],
    "monsterId": "1093",
    "leaderName": "莫逆相伴 ‧ 妖",
    "leaderDescription": "隊伍中的妖精類成員愈多，全隊攻擊力愈高，最大 3.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "騎士王亞瑟",
    "activeName": ["騎士王神劍 - 王者之劍"],
    "activeDescription": ["將場上固定位置的符石轉化為光符石"],
    "monsterId": "1094",
    "leaderName": "電殛雙刃斬",
    "leaderDescription": "光屬性攻擊力 2.5 倍；消除最底一橫行內的所有符石時，自身攻擊力額外提升 3 倍，若使用相同的隊長及戰友時，自身攻擊力額外提升至 9 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "頹廢的黑薔薇 赫拉",
    "activeName": ["背叛的神父"],
    "activeDescription": [
      "1 回合內，敵方全體轉為光屬性，並大幅提升暗屬性對光屬性目標的攻擊力"
    ],
    "monsterId": "1095",
    "leaderName": "天魔道 ‧ 暗",
    "leaderDescription": "暗屬性攻擊力 2 倍，隊伍中每個魔族成員，扣除 5 %總生命力上限及增加暗屬性攻擊力 0.5 倍，6 個魔族成員共扣除 30% 總生命力上限及可達至最高 5 倍暗屬性攻擊力",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "世界樹神 尤克特拉希爾",
    "activeName": ["世界樹之克勞諾斯閃擊"],
    "activeDescription": [
      "1 回合內，所有成員無視屬性相剋及追打無屬性攻擊 1 次"
    ],
    "monsterId": "1096",
    "leaderName": "靈力迫人",
    "leaderDescription": "生命力全滿時，攻擊力 3 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "反叛的墮天使 路西法",
    "activeName": ["憐憫惡魔之歌"],
    "activeDescription": [
      "將場上所有符石轉化為固定數量及位置的暗及心符石，並延長移動符石時間 3 秒"
    ],
    "monsterId": "1097",
    "leaderName": "穹蒼之賜 ‧ 護心",
    "leaderDescription": "全隊攻擊力 2.5 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒心符石。生命力全滿時，所受傷害減少 20%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "倭男具那命 日本武尊",
    "activeName": ["真・草薙剣"],
    "activeDescription": [
      "1 回合內，自身以全體水屬性成員攻擊力的 2 倍發動攻擊，其他水屬性成員不能發動攻擊"
    ],
    "monsterId": "1098",
    "leaderName": "雙刃斬 ‧ 水",
    "leaderDescription": "水屬性攻擊力 2.5 倍；消除一組 5 粒或以上的水符石時，自身攻擊力額外提升 2 倍，若使用相同的隊長及戰友時，自身攻擊力額外提升至 4 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "多端幻變 ‧ 貓又",
    "activeName": ["疊影之瞳"],
    "activeDescription": [
      "當場上的暗符石少於 5 粒時，隨機將暗屬性以外的符石轉化為暗符石，直至場上有 5 粒暗符石為止；其後，場上每粒暗符石旁的 1 粒符石會轉化為暗符石 (暗符石以外的符石優先)"
    ],
    "monsterId": "1099",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "復仇魔君 ‧ 貝利爾",
    "activeName": ["魔道之巔"],
    "activeDescription": [
      "1 回合內，扣減魔族成員的自身生命力 (隊伍總生命力最多減至 1)，並將魔族成員的自身生命力的 2.5 倍加入自身攻擊力，上限為提升至自身攻擊力 20 倍。此技能不能與神魔共鳴、魔力召喚或魔力歸一同時發動"
    ],
    "monsterId": "1100",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "阿撒茲勒",
    "activeName": ["元素歸一 ‧ 水"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，水屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1101",
    "leaderName": "無影幻像 ‧ 水",
    "leaderDescription": "水屬性攻擊力 2 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 水符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為水符石時，則兼具效果變為水屬性攻擊力提升 1.4 倍 (可疊加)",
    "attribute": "水",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "代罪之泉 ‧ 阿撒茲勒",
    "activeName": ["元素歸一 ‧ 水"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，水屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1102",
    "leaderName": "無影幻像 ‧ 浪濤",
    "leaderDescription": "水屬性攻擊力 3 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 水符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為水符石時，則兼具效果變為水屬性攻擊力提升 1.4 倍 (可疊加)",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "亞巴頓",
    "activeName": ["元素歸一 ‧ 火"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，火屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1103",
    "leaderName": "無影幻像 ‧ 火",
    "leaderDescription": "火屬性攻擊力 2 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 火符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為火符石時，則兼具效果變為火屬性攻擊力提升 1.4 倍 (可疊加)",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "毀滅之炎 ‧ 亞巴頓",
    "activeName": ["元素歸一 ‧ 火"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，火屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1104",
    "leaderName": "無影幻像 ‧ 熾燄",
    "leaderDescription": "火屬性攻擊力 3 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 火符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為火符石時，則兼具效果變為火屬性攻擊力提升 1.4 倍 (可疊加)",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "薩麥爾",
    "activeName": ["元素歸一 ‧ 木"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，木屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1105",
    "leaderName": "無影幻像 ‧ 木",
    "leaderDescription": "木屬性攻擊力 2 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 木符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為木符石時，則兼具效果變為木屬性攻擊力提升 1.4 倍 (可疊加)",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "盤木智者 ‧ 薩麥爾",
    "activeName": ["元素歸一 ‧ 木"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，木屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1106",
    "leaderName": "無影幻像 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 3 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 木符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為木符石時，則兼具效果變為木屬性攻擊力提升 1.4 倍 (可疊加)",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "別西卜",
    "activeName": ["結界術 ‧ 玄光"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒光符石"
    ],
    "monsterId": "1107",
    "leaderName": "流螢結陣 ‧ 初",
    "leaderDescription": "光屬性攻擊力 2 倍，並延長移動符石時間 1 秒；消除一組 5 粒或以上的光符石時，光屬性攻擊力額外提升 1.5 倍 (可疊加)",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "蒼蠅之王 ‧ 別西卜",
    "activeName": ["結界術 ‧ 玄光"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒光符石"
    ],
    "monsterId": "1108",
    "leaderName": "流螢結陣 ‧ 繼",
    "leaderDescription": "光屬性攻擊力 3 倍，並延長移動符石時間 1 秒；消除一組 5 粒或以上的光符石時，光屬性攻擊力額外提升 1.5 倍 (可疊加)",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "莫斯提馬",
    "activeName": ["結界術 ‧ 幽冥"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒暗符石"
    ],
    "monsterId": "1109",
    "leaderName": "幽冥結陣 ‧ 初",
    "leaderDescription": "暗屬性攻擊力 2 倍，並延長移動符石時間 1 秒；消除一組 5 粒或以上的暗符石時，暗屬性攻擊力額外提升 1.5 倍 (可疊加)",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "邪心之靈 ‧ 莫斯提馬",
    "activeName": ["結界術 ‧ 幽冥"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒暗符石"
    ],
    "monsterId": "1110",
    "leaderName": "幽冥結陣 ‧ 繼",
    "leaderDescription": "暗屬性攻擊力 3 倍，並延長移動符石時間 1 秒；消除一組 5 粒或以上的暗符石時，暗屬性攻擊力額外提升 1.5 倍 (可疊加)",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "寒霜幼龍",
    "activeName": ["防禦姿勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心符石"],
    "monsterId": "1111",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "寒霜龍",
    "activeName": ["元素歸一 ‧ 水"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，水屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1112",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "吐焰幼龍",
    "activeName": ["防禦姿勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心符石"],
    "monsterId": "1113",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "吐焰龍",
    "activeName": ["元素歸一 ‧ 火"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，火屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1114",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "蝕地幼龍",
    "activeName": ["防禦姿勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心符石"],
    "monsterId": "1115",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "蝕地龍",
    "activeName": ["元素歸一 ‧ 木"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，木屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1116",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "骸光幼龍",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "1117",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "骸光龍",
    "activeName": ["結界術 ‧ 玄光"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒光符石"
    ],
    "monsterId": "1118",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "暗影幼龍",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "1119",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "2★"
  },
  {
    "monsterName": "暗影龍",
    "activeName": ["結界術 ‧ 幽冥"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒暗符石"
    ],
    "monsterId": "1120",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "3★"
  },
  {
    "monsterName": "冰棘水龍",
    "activeName": ["龍淵之力"],
    "activeDescription": [
      "1 回合內，隊伍的龍類成員愈多，水屬性及龍類攻擊力愈高，4 個龍類成員即可達至最大 2 倍"
    ],
    "monsterId": "1121",
    "leaderName": "龍之怒",
    "leaderDescription": "龍類攻擊力 2 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "翼火王龍",
    "activeName": ["朦朧之間"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 7 秒，所有成員無視屬性相剋"
    ],
    "monsterId": "1122",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "朽蟲化龍",
    "activeName": ["血魔法咒 ‧ 木"],
    "activeDescription": [
      "消秏現有 30% 的生命力，1 回合內，消秏的生命力愈多，木屬性及魔族攻擊力提升愈多，消秏 5000 點生命力即可達至最大 2 倍"
    ],
    "monsterId": "1123",
    "leaderName": "龍之怒",
    "leaderDescription": "龍類攻擊力 2 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "磷光骨龍",
    "activeName": ["同化 ‧ 光"],
    "activeDescription": ["隨機將光屬性以外的一種符石轉化為光符石"],
    "monsterId": "1124",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "古鱗魔龍",
    "activeName": ["破空之力 ‧ 龍"],
    "activeDescription": [
      "1 回合內，龍類攻擊力 2 倍，並無視全體敵人 90% 的防禦力"
    ],
    "monsterId": "1125",
    "leaderName": "龍之怒",
    "leaderDescription": "龍類攻擊力 2 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "寒霜冰姬 ‧ 雪女",
    "activeName": ["鐵壁陣勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心強化符石"],
    "monsterId": "1126",
    "leaderName": "魔魅復甦 ‧ 凝水",
    "leaderDescription": "水屬性攻擊力 2.5 倍及魔族回復力 2 倍；同時木、光和暗屬性傷害減少 50%。所有成員對木屬性目標時無視屬性相剋",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "獄火赤鬼 ‧ 酒吞童子",
    "activeName": ["魔之怨念 ‧ 火"],
    "activeDescription": [
      "場上有附加效果時，1 回合內，火屬性攻擊力 1.5 倍及火屬性魔族攻擊力 2.5 倍"
    ],
    "monsterId": "1127",
    "leaderName": "魔魅復甦 ‧ 凝火",
    "leaderDescription": "火屬性攻擊力 2.5 倍及魔族回復力 2 倍；同時水、光和暗屬性傷害減少 50%。所有成員對水屬性目標時無視屬性相剋",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "颶風怒號 ‧ 大天狗",
    "activeName": ["延緩"],
    "activeDescription": ["延遲全體敵人行動 1 回合"],
    "monsterId": "1128",
    "leaderName": "魔魅復甦 ‧ 凝木",
    "leaderDescription": "木屬性攻擊力 2.5 倍及魔族回復力 2 倍；同時火、光和暗屬性傷害減少 50%。所有成員對火屬性目標時無視屬性相剋",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "噬靈血妖 ‧ 毛倡妓",
    "activeName": ["蓄能轉換 ‧ 煉光"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為光符石，最多 8 粒；當累積至最多 8 粒時發動技能，轉化的光符石會以光強化符石代替。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "1129",
    "leaderName": "魔怒嘯天 ‧ 天雷陣",
    "leaderDescription": "光屬性攻擊力 2.5 倍及光屬性魔族攻擊力 3.5 倍，並提升光屬性對暗屬性目標的攻擊力 (不包括主動技)",
    "attribute": "光",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "陰陽五行 ‧ 土蜘蛛",
    "activeName": ["狂魔暴戾 ‧ 強"],
    "activeDescription": ["魔族攻擊力提升 1.8 倍，效果持續至受到敵人攻擊"],
    "monsterId": "1130",
    "leaderName": "魔怒嘯天 ‧ 冥極",
    "leaderDescription": "暗屬性魔族攻擊力 3.5 倍，每消除一組暗符石，暗屬性攻擊力提升 0.5 倍，消除 3 組暗符石即可達至最高 5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "索布兔騎士 ‧ 摩艾",
    "activeName": ["活心術"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 8 秒，並回復 50% 生命力"
    ],
    "monsterId": "1131",
    "leaderName": "野獸之狂怒",
    "leaderDescription": "獸類攻擊力 2.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "森林暗鬼 ‧ 斯蘭達",
    "activeName": ["暗夜獨行 ‧ 陰霾"],
    "activeDescription": [
      "當場上只有 1 個敵人時，根據發動此技能時敵人的生命力觸發以下效果。\n\n敵人生命力 90% 或以上時：消耗敵人 20% 生命力，1 回合內，暗屬性攻擊力 2 倍。\n\n敵人生命力 50% 或以上，並少於 90% 時：2 回合內，暗屬性攻擊力 2 倍\n\n敵人生命力少於 50% 時：2 回合內，暗屬性攻擊力 2.5 倍"
    ],
    "monsterId": "1132",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "睿哲的開導 ‧ 安努",
    "activeName": ["冷煞霜刃"],
    "activeDescription": [
      "1 回合內，消除的符石數量愈多，全隊攻擊力愈高，消除 30 粒可達至最大 2.5 倍"
    ],
    "monsterId": "1133",
    "leaderName": "元素之念 ‧ 光",
    "leaderDescription": "光屬性攻擊力 2 倍；每直行消除 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒光符石",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "曠古戰王 ‧ 吉爾伽美什",
    "activeName": ["同仇念"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.3 倍，此回合發動的技能愈多 (此技能發動後計算)，全隊攻擊力提升愈多，發動 2 個技能全隊攻擊力可達至最大 2 倍"
    ],
    "monsterId": "1134",
    "leaderName": "眾神之狂怒",
    "leaderDescription": "神族攻擊力 2.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "渾天原始神卡俄斯",
    "activeName": ["無垠結界"],
    "activeDescription": [
      "額外增加 3 行強化符石；15 秒內，可任意移動符石而不會發動消除"
    ],
    "monsterId": "1135",
    "leaderName": "歸元結念",
    "leaderDescription": "全隊攻擊力 3.5 倍，龍類生命力 1.3 倍，魔族攻擊力 1.3 倍及妖精類回復力 1.3 倍；每個獸類成員延長移動符石時間 0.5 秒。當隊伍中有 4 種或以上種族成員時，所有屬性符石兼具 50% 其他屬性符石效果",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "蓬托斯",
    "activeName": ["水之流"],
    "activeDescription": [
      "1 回合內，水屬性攻擊力 1.5 倍，並隨機將 3 粒符石轉化為水符石"
    ],
    "monsterId": "1136",
    "leaderName": "浪濤界限 ‧ 變革",
    "leaderDescription": "3 粒或以上的水符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "浪濤海神 ‧ 蓬托斯",
    "activeName": ["隅角花海 ‧ 水"],
    "activeDescription": ["隨機將 2 個角落共 8 粒符石轉化為水符石"],
    "monsterId": "1137",
    "leaderName": "界限變革",
    "leaderDescription": "3 粒或以上相同種類的符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "法那斯",
    "activeName": ["火之流"],
    "activeDescription": [
      "1 回合內，火屬性攻擊力 1.5 倍，並隨機將 3 粒符石轉化為火符石"
    ],
    "monsterId": "1138",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "熽焰火神 ‧ 法那斯",
    "activeName": ["火影約章"],
    "activeDescription": [
      "1 回合內，消除一組 5 粒或以上的火符石，火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "1139",
    "leaderName": "熾燄萬鈞之怒",
    "leaderDescription": "火屬性攻擊力 4 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "寧芙墨利阿得斯",
    "activeName": ["木之流"],
    "activeDescription": [
      "1 回合內，木屬性攻擊力 1.5 倍，並隨機將 3 粒符石轉化為木符石"
    ],
    "monsterId": "1151",
    "leaderName": "木之治療",
    "leaderDescription": "木屬性回復力 1.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "光耀寧芙",
    "activeName": ["防禦姿勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心符石"],
    "monsterId": "1152",
    "leaderName": "光之治療",
    "leaderDescription": "光屬性回復力 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "2★"
  },
  {
    "monsterName": "寧芙達芙妮",
    "activeName": ["光之流"],
    "activeDescription": [
      "1 回合內，光屬性攻擊力 1.5 倍，並隨機將 3 粒符石轉化為光符石"
    ],
    "monsterId": "1153",
    "leaderName": "光之治療",
    "leaderDescription": "光屬性回復力 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "幽夜寧芙",
    "activeName": ["防禦姿勢 ‧ 暗"],
    "activeDescription": ["光符石轉化為心符石"],
    "monsterId": "1154",
    "leaderName": "暗之治療",
    "leaderDescription": "暗屬性回復力 1.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "2★"
  },
  {
    "monsterName": "寧芙斯堤克斯",
    "activeName": ["暗之流"],
    "activeDescription": [
      "1 回合內，暗屬性攻擊力 1.5 倍，並隨機將 3 粒符石轉化為暗符石"
    ],
    "monsterId": "1155",
    "leaderName": "暗之治療",
    "leaderDescription": "暗屬性回復力 1.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "3★"
  },
  {
    "monsterName": "子夜藍嬰",
    "activeName": ["靈之守"],
    "activeDescription": [
      "每次受到敵人攻擊時，場上隨機 3 粒符石轉化為心符石，效果持續至沒有消除心符石"
    ],
    "monsterId": "1156",
    "leaderName": "妖精之怒",
    "leaderDescription": "妖精類攻擊力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "辮子姑娘",
    "activeName": ["斷魂辮"],
    "activeDescription": [
      "若場上只有 1 個敵人時，1 回合內全隊攻擊力 1.5 倍；反之，1 回合內，敵方所受傷害的 100% 分別擴散到其他敵人身上"
    ],
    "monsterId": "1157",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "天蛾人",
    "activeName": ["群蛹之力"],
    "activeDescription": [
      "自身攻擊力 4 倍，下回合開始時回復 10% 自身總生命力，效果持續至沒有首批消除場上所有木符石"
    ],
    "monsterId": "1158",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "斬人賓尼兔",
    "activeName": ["突斬 ‧ 光月"],
    "activeDescription": [
      "1 回合內，光符石不能被消除及減少 30% 所受傷害，下回合光屬性攻擊力 2 倍"
    ],
    "monsterId": "1159",
    "leaderName": "魔之怒",
    "leaderDescription": "魔族攻擊力 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "小丑雕像",
    "activeName": ["掩眼幻術"],
    "activeDescription": [
      "延遲全體敵人行動 1 回合，場上敵人數量愈多，延遲行動的回合愈多，3 個敵人在場即可延遲全體敵人行動達最多 3 回合"
    ],
    "monsterId": "1160",
    "leaderName": "妖精之怒",
    "leaderDescription": "妖精類攻擊力 2 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "時尚洪流 ‧ 雨依",
    "activeName": ["魅影迷霧"],
    "activeDescription": [
      "火符石轉化為暗符石；消除場上所有暗符石時 (只計算首批消除的符石)，1 回合內暗屬性攻擊力 1.8 倍"
    ],
    "monsterId": "1161",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "嫉妒異教教主",
    "activeName": ["善妒之源 ‧ 暗"],
    "activeDescription": [
      "隨機將 1 種屬性符石轉化為暗符石；若轉化的符石數量比原有的暗符石數量少， 1 回合內自身攻擊力 4 倍"
    ],
    "monsterId": "1162",
    "leaderName": "幽闇魅影",
    "leaderDescription": "暗屬性攻擊力 2 倍；隊伍中的人類成員愈多，暗屬性攻擊力額外提升愈多，最大 3.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "海盜王 ‧ 弗朗西斯",
    "activeName": ["怒海重炮 ‧ 光"],
    "activeDescription": [
      "自身對敵方全體造成自身攻擊力 100 倍光屬性傷害，其他成員則對敵方全體造成其自身 50 倍火屬性傷害"
    ],
    "monsterId": "1163",
    "leaderName": "富饒之約 ‧ 光",
    "leaderDescription": "光屬性攻擊力 2 倍；戰鬥中所獲得的金幣增加 50% (可疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "正義的酷刑 ‧ 假面判官",
    "activeName": ["勇武之力 ‧ 水"],
    "activeDescription": [
      "3 回合內，水屬性攻擊力 1.8 倍及全隊回復力變 0；並於第 3 回合結束時，完全回復生命力"
    ],
    "monsterId": "1164",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "陰陽搜靈 ‧ 黑白無常",
    "activeName": ["陰靈之力"],
    "activeDescription": [
      "每擊斃 1 個敵人可以累積 1 點靈力 (主動技能除外)，最多可累積 3 點。發動此技能時的靈力愈多，全隊攻擊力提升愈多，最大 2 倍。發動技能後靈力將重新累積"
    ],
    "monsterId": "1165",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "冰花",
    "activeName": ["符石同化術 ‧ 水"],
    "activeDescription": ["隨機將 3 至 5 粒符石轉化為水符石 (心符石優先轉換)"],
    "monsterId": "1166",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "明鏡之諜 ‧ 冰花",
    "activeName": ["符石同化術 ‧ 流雲"],
    "activeDescription": ["隨機將 4 至 6 粒符石轉化為水符石 (火符石優先轉換)"],
    "monsterId": "1167",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "洛可可",
    "activeName": ["符石同化術 ‧ 火"],
    "activeDescription": ["隨機將 3 至 5 粒符石轉化為火符石 (心符石優先轉換)"],
    "monsterId": "1168",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "堅守赤心 ‧ 洛可可",
    "activeName": ["符石同化術 ‧ 赤燄"],
    "activeDescription": ["隨機將 4 至 6 粒符石轉化為火符石 (木符石優先轉換)"],
    "monsterId": "1169",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "新月",
    "activeName": ["符石同化術 ‧ 木"],
    "activeDescription": ["隨機將 3 至 5 粒符石轉化為木符石 (心符石優先轉換)"],
    "monsterId": "1170",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "拳風療動 ‧ 新月",
    "activeName": ["符石同化術 ‧ 藤棘"],
    "activeDescription": ["隨機將 4 至 6 粒符石轉化為木符石 (水符石優先轉換)"],
    "monsterId": "1171",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "摩斯",
    "activeName": ["符石同化術 ‧ 光"],
    "activeDescription": ["隨機將 3 至 5 粒符石轉化為光符石 (心符石優先轉換)"],
    "monsterId": "1172",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "思考殿主 ‧ 摩斯",
    "activeName": ["符石同化術 ‧ 電殛"],
    "activeDescription": ["隨機將 4 至 6 粒符石轉化為光符石 (暗符石優先轉換)"],
    "monsterId": "1173",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "優格圖",
    "activeName": ["符石同化術 ‧ 暗"],
    "activeDescription": ["隨機將 3 至 5 粒符石轉化為暗符石 (心符石優先轉換)"],
    "monsterId": "1174",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "漆黑啟示 ‧ 優格圖",
    "activeName": ["符石同化術 ‧ 魅影"],
    "activeDescription": ["隨機將 4 至 6 粒符石轉化為暗符石 (光符石優先轉換)"],
    "monsterId": "1175",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "冰海霸王 ‧ 萊夫",
    "activeName": ["點滴加冕 ‧ 水"],
    "activeDescription": [
      "水符石轉化為水強化符石，並隨機將場上 1 粒火、木、光及暗符石轉化為強化符石"
    ],
    "monsterId": "1176",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "紅色骷髏 ‧ 埃里克",
    "activeName": ["蓄能加冕 ‧ 火"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) 雙倍數量的符石轉化為強化符石 (火符石優先轉換)；若轉換的符石數量多於 14 粒，該回合火屬性攻擊力 1.5 倍。發動技能後重置累積戰鬥回合"
    ],
    "monsterId": "1177",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "毒霧蜘蛛 ‧ 安妮",
    "activeName": ["蓄能加冕 ‧ 木"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) 雙倍數量的符石轉化為強化符石 (木符石優先轉換)；若轉換的符石數量多於 14 粒，該回合木屬性攻擊力 1.5 倍。發動技能後重置累積戰鬥回合"
    ],
    "monsterId": "1178",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "秘寶收藏家 ‧ 張保仔",
    "activeName": ["流光刀刃"],
    "activeDescription": [
      "2 回合內，光屬性及人類攻擊力 1.5 倍；光屬性人類攻擊力 2.25 倍"
    ],
    "monsterId": "1179",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "大海羅賓漢 ‧ 薩姆",
    "activeName": ["墨化"],
    "activeDescription": [
      "隨機將 3 至 7 粒暗屬性以外的符石轉化為暗符石；1 回合內，達成 7 連擊 (Combo) 或以上時，自身攻擊力 7 倍"
    ],
    "monsterId": "1180",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "龍神守天 ‧ 庫庫爾坎",
    "activeName": ["冰柱墜擊 ‧ 強"],
    "activeDescription": [
      "對全體敵人造成 30,000 點水屬性傷害，此傷害無視防禦力，若沒有擊斃任何敵人，則隨機將 10 粒符石轉化為固定數量的水及心符石 (水及心以外的符石優先轉換)"
    ],
    "monsterId": "1181",
    "leaderName": "神龍呼嘯 ‧ 浪濤",
    "leaderDescription": "隊伍中只有神族及龍類成員時，全隊攻擊力 3 倍及龍類回復力提升 100 點；消除水符石及心符石時，全隊攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加，倍率優先跟隨隊長技能)",
    "attribute": "水",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "焚魔傲龍 ‧ 皮亞沙",
    "activeName": ["顧守之約 ‧ 熾燄"],
    "activeDescription": [
      "所受傷害減少 35%，直至沒有消除火及心符石，不包括主動技及隊長技"
    ],
    "monsterId": "1182",
    "leaderName": "魔龍狂號 ‧ 熾燄",
    "leaderDescription": "隊伍中只有魔族及龍類成員時，全隊攻擊力 3 倍及龍類回復力提升 100 點；場上有附加效果時，火屬性攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加，倍率優先跟隨隊長技能)",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "龍靈覺醒 ‧ 皮拉圖斯",
    "activeName": ["拚力迎戰 ‧ 強"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2.5 倍；下一回合全隊回復力變 0"
    ],
    "monsterId": "1183",
    "leaderName": "神龍呼嘯 ‧ 藤木",
    "leaderDescription": "隊伍中只有神族及龍類成員時，全隊攻擊力 3 倍及龍類增加 100 點攻擊力；消除場上所有木符石時，全隊攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加，倍率優先跟隨隊長技能)",
    "attribute": "木",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "龍神伐義 ‧ 法芙尼爾",
    "activeName": ["群族共鳴 ‧ 強"],
    "activeDescription": [
      "1 回合內，隊伍成員的種族愈多，全隊攻擊力愈高，4 種族的成員即可達至最大 2.5 倍"
    ],
    "monsterId": "1184",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "亟惡霸龍 ‧ 瓦維爾",
    "activeName": ["噬血龍刃 ‧ 強"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍；將全隊對敵方造成實際傷害的 5% 轉化為生命力 (不計算主動及隊長技傷害)"
    ],
    "monsterId": "1185",
    "leaderName": "勢煞龍息 ‧ 迸發",
    "leaderDescription": "隊伍中只有龍類成員時，龍類增加 250 點攻擊力，連擊 (Combo) 時攻擊力大幅提升 200%",
    "attribute": "暗",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "馴獸師 ‧ 寶寶",
    "activeName": ["馴化之鞭"],
    "activeDescription": [
      "將自身所在隊伍欄直行的符石轉化為暗符石；每 1 粒被轉化的暗以外的屬性符石，將提升全隊攻擊力，最大 1.5 倍"
    ],
    "monsterId": "1186",
    "leaderName": "猛獸之強權",
    "leaderDescription": "獸類攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "法則天秤",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1187",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "水",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "世界的平衡 ‧ 法神姬氏",
    "activeName": ["引力之勢"],
    "activeDescription": ["1 回合內，光符石及暗符石兼具自身屬性符石效果"],
    "monsterId": "1188",
    "leaderName": "神魔法則 ‧ 強",
    "leaderDescription": "隊伍中只有神族及魔族成員時，全隊攻擊力 3 倍，火符石及木符石兼具 50% 水符石效果 (可疊加)",
    "attribute": "水",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "清絮祭師 ‧ 希",
    "activeName": ["信誓的泉源"],
    "activeDescription": [
      "光符石與心符石轉化為水符石；所轉化的符石愈多，1 回合內水屬性攻擊力愈高，轉化 8 粒符石即可達至最大 2 倍"
    ],
    "monsterId": "1189",
    "leaderName": "浪濤萬鈞之怒 ‧ 強",
    "leaderDescription": "水屬性攻擊力 4.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "烈焰舞者 ‧ 妍",
    "activeName": ["熾熱的約定"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上時，全隊攻擊力 2 倍及回復力減少 50% (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，隨機將 8 粒符石轉化為心符石"
    ],
    "monsterId": "1190",
    "leaderName": "熾燄萬鈞之怒 ‧ 強",
    "leaderDescription": "火屬性攻擊力 4.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "華麗舞姬 ‧ 千千",
    "activeName": ["逼力凝視 ‧ 攻"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.5 倍，消除心符石時，無視全體敵人的防禦力"
    ],
    "monsterId": "1191",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "熾盛指揮 ‧ 克拉拉",
    "activeName": ["絕地靈淵 ‧ 強"],
    "activeDescription": [
      "1 回合內，自身生命力愈低，回復力愈高，最大 3.5 倍；並將心以外的 1 種符石轉化為心符石"
    ],
    "monsterId": "1192",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "人偶覺悟 ‧ 瑪特羅什卡",
    "activeName": ["治癒之靈 ‧ 強"],
    "activeDescription": [
      "回復效果提升 2 倍，直至沒有消除心符石 (不包括主動及隊長技)；發動技能時，將自身所在隊伍欄直行的符石轉化為心符石"
    ],
    "monsterId": "1193",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "神秘魔術 ‧ 鐵皮的哈梅爾",
    "activeName": ["暗靈移魂加冕 ‧ 強"],
    "activeDescription": ["暗符石及心符石轉化為心強化符石"],
    "monsterId": "1194",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "熊心壯志 ‧ 莫里斯",
    "activeName": ["蓄能傳承 ‧ 煉靈"],
    "activeDescription": [
      "將與累積戰鬥回合數同等數量的符石轉化為心強化符石，最多 7 粒。發動技能後會將戰鬥回合數重置"
    ],
    "monsterId": "1195",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "樹蔭之目 ‧ 伊部",
    "activeName": ["化攻術"],
    "activeDescription": [
      "1 回合內，將全體敵人的攻擊力減至 0；攻擊力最高的一個敵人每減少 3000 點攻擊力，自身攻擊力提升 1 倍，減少 18,000 點攻擊力即可達至最大 7 倍"
    ],
    "monsterId": "1196",
    "leaderName": "莫逆相伴 ‧ 妖",
    "leaderDescription": "隊伍中的妖精類成員愈多，全隊攻擊力愈高，最大 3.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "熾熱血牢 ‧ 拿姆",
    "activeName": ["凝時摧魂 ‧ 火"],
    "activeDescription": [
      "1 回合內，火屬性攻擊力 1.5 倍；場上有附加效果時，於 7 秒內可任意移動符石而不會發動消除"
    ],
    "monsterId": "1197",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "魅之歌姬 ‧ 派蒙",
    "activeName": ["魔靈的印記"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2 倍。回合結束時將場上的符石變回發動技能時的分佈"
    ],
    "monsterId": "1198",
    "leaderName": "魔之本性",
    "leaderDescription": "魔族攻擊力，生命力及回復力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "祝願海蝶",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1199",
    "leaderName": "治療之心",
    "leaderDescription": "每回合回復自身回復力 (需要消除符石)",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "千日瘋頭",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1200",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "逗趣童心 ‧ 金貝貝",
    "activeName": ["童叟耍戲"],
    "activeDescription": [
      "隨機將 1 至 5 種水以外的符石轉化為水符石，若轉換了 1 種或 5 種符石，則 1 回合內水屬性攻擊力 2 倍"
    ],
    "monsterId": "1201",
    "leaderName": "富饒之約 ‧ 浪濤",
    "leaderDescription": "水屬性攻擊力 3 倍；戰鬥中所獲得的金幣增加 75% (可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "嬌蠻皇女 ‧ 莎拉公主",
    "activeName": ["驚天之怒 ‧ 人"],
    "activeDescription": ["1 回合內，人類攻擊力 2.5 倍"],
    "monsterId": "1202",
    "leaderName": "聚首同樂 ‧ 人",
    "leaderDescription": "火屬性攻擊力 2 倍；隊伍中的人類成員愈多時，火屬性成員的生命力、攻擊力及回復力愈高，5 個人類成員可達至最大 1.5 倍 (不計自身)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "狡詐賭王 ‧ 大老千",
    "activeName": ["玄虛幻變 ‧ 木"],
    "activeDescription": [
      "1 回合內，木屬性攻擊力 1.5 倍；並將移動符石時觸碰的首 6 粒符石轉化為木符石"
    ],
    "monsterId": "1203",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "暴富酋長 ‧ 沙隆巴斯",
    "activeName": ["盛勢追擊"],
    "activeDescription": [
      "2 回合內，自身攻擊力最高 (最左方) 的光屬性成員追打光屬性攻擊 3 次"
    ],
    "monsterId": "1204",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "謎之黑影 ‧ 忍太郎",
    "activeName": ["秘幻術 ‧ 暗"],
    "activeDescription": ["點選一直行的符石，並將該直行的符石轉化為暗符石"],
    "monsterId": "1205",
    "leaderName": "黑隱法",
    "leaderDescription": "人類及魔族攻擊力 3 倍，並延長移動符石時間 1 秒。當直行消除一組 5 粒或以上符石時，所受傷害減少 30% (只計算首批消除的符石)",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "善心智多星 ‧ 孫小美",
    "activeName": ["赤燄玲瓏"],
    "activeDescription": [
      "1 回合內，火屬性攻擊力 1.5 倍，10 秒內可任意移動符石而不會發動消除；若擊斃所有敵人，下回合火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "1206",
    "leaderName": "聚首同樂 ‧ 人",
    "leaderDescription": "火屬性攻擊力 2 倍；隊伍中的人類成員愈多時，火屬性成員的生命力、攻擊力及回復力愈高，5 個人類成員可達至最大 1.5 倍 (不計自身)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "樂天老頭 ‧ 阿土伯",
    "activeName": ["天降甘露 ‧ 木"],
    "activeDescription": ["1 回合內，移動符石後首批掉落的符石必定為木符石"],
    "monsterId": "1207",
    "leaderName": "車行道 ‧ 木",
    "leaderDescription": "消除 1 組木符石的數量愈多，木屬性攻擊力愈高，消除 1 組 6 粒的木符石可達至最大 5 倍；此外，必然延長移動符石時間 1.5 秒",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "股市女神 ‧ 錢夫人",
    "activeName": ["絳紫之惑"],
    "activeDescription": [
      "暗屬性及人類攻擊力 1.5 倍，減少 50% 所受傷害，效果持續至受到敵人攻擊"
    ],
    "monsterId": "1208",
    "leaderName": "嬌媚殺機",
    "leaderDescription": "達成 3 連擊 (Combo) 或以上時，光及暗屬性人類攻擊力 4 倍，連擊 (Combo) 的數量愈多，攻擊力愈高，6 連擊 (Combo) 可以達至最大 4.75 倍。光符石兼具 50% 暗符石效果，同時暗符石兼具 50% 光符石效果 (可疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "時來運到 ‧ 福神",
    "activeName": ["天眷之燄"],
    "activeDescription": [
      "隨機發動以下 1 種效果：1 回合內，全隊攻擊力 1.8 倍；或將 8 粒火屬性以外的符石轉化為火符石"
    ],
    "monsterId": "1209",
    "leaderName": "煉獄之集權",
    "leaderDescription": "火屬性攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "窮也窮開心 ‧ 窮神",
    "activeName": ["窮極虐烈 ‧ 暗"],
    "activeDescription": [
      "自身生命力扣至 1；1 回合內，暗屬性攻擊力 2.5 倍及暗屬性魔族攻擊力 3 倍"
    ],
    "monsterId": "1210",
    "leaderName": "窮竭之力",
    "leaderDescription": "全隊攻擊力 5 倍及回復力減至 0，所有成員無視屬性相剋",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "財源滾滾 ‧ 財神",
    "activeName": ["運財法"],
    "activeDescription": ["連續引爆光屬性以外的符石 3 次"],
    "monsterId": "1211",
    "leaderName": "神聖之霸權",
    "leaderDescription": "光屬性攻擊力 2.5 倍及回復力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "蒜你倒霉 ‧ 衰神",
    "activeName": ["瀝血霉化咒"],
    "activeDescription": [
      "2 回合內，每回合扣除現有 10% 生命力，同時心符石兼具所有屬性符石效果"
    ],
    "monsterId": "1212",
    "leaderName": "顯靈",
    "leaderDescription": "水屬性攻擊力 3 倍及回復力減少 50%",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "溫婉白蕾 ‧ 妍",
    "activeName": ["隱世之念 ‧ 木"],
    "activeDescription": [
      "將隊長或戰友所在隊伍欄直行的符石轉化為木符石；並於10 秒內，可任意移動符石而不會發動消除"
    ],
    "monsterId": "1213",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "翱翔銀翼 ‧ 科雷",
    "activeName": ["三原絕塵 ‧ 凝時"],
    "activeDescription": [
      "直接引爆場上所有水、火及木符石，以掉落光、暗及心強化符石；1 回合內，可任意移動符石而不會發動消除"
    ],
    "monsterId": "1214",
    "leaderName": "真龍之淚",
    "leaderDescription": "龍類攻擊力 2 倍及增加 150 點回復力",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "黑貓摩托車 ‧ 十月三十",
    "activeName": ["秘幻之火"],
    "activeDescription": ["隨機將 5 粒或以上的符石轉化為火符石"],
    "monsterId": "1215",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "機研始祖 ‧ 阿特拉哈西斯",
    "activeName": ["水刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的水符石，水屬性攻擊力 1.5 倍"
    ],
    "monsterId": "1216",
    "leaderName": "穹蒼之賜 ‧ 浪濤",
    "leaderDescription": "水屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒水符石",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "暴火戰領 ‧ 尼努爾塔",
    "activeName": ["燄刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的火符石，火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "1217",
    "leaderName": "穹蒼之賜 ‧ 熾燄",
    "leaderDescription": "火屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒火符石",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "真樸王者 ‧ 杜穆濟",
    "activeName": ["藤刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的木符石，木屬性攻擊力 1.5 倍"
    ],
    "monsterId": "1218",
    "leaderName": "穹蒼之賜 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒木符石",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "甦醒之月 ‧ 伊南娜",
    "activeName": ["光刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的光符石，光屬性攻擊力 1.5 倍"
    ],
    "monsterId": "1219",
    "leaderName": "穹蒼之賜 ‧ 玄光",
    "leaderDescription": "光屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒光符石",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "破命疾神 ‧ 納姆塔爾",
    "activeName": ["魅刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的暗符石，暗屬性攻擊力 1.5 倍"
    ],
    "monsterId": "1220",
    "leaderName": "穹蒼之賜 ‧ 幽冥",
    "leaderDescription": "暗屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒暗符石",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "普普璐",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1221",
    "leaderName": "妖精之怒",
    "leaderDescription": "妖精類攻擊力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "水靈偵探 ‧ 普普璐",
    "activeName": ["浪濤噬"],
    "activeDescription": [
      "1 回合內，自身攻擊力 20 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "1222",
    "leaderName": "妖精萬鈞之怒",
    "leaderDescription": "妖精類攻擊力 4 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "鈴子",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1223",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "犬神護佑 ‧ 鈴子",
    "activeName": ["炙熱爪擊"],
    "activeDescription": [
      "將 10 個固定位置的符石轉化：當中的火符石轉化為火強化符石，其他符石則轉化為火符石。1 回合內，火屬性及獸類攻擊力 2 倍"
    ],
    "monsterId": "1224",
    "leaderName": "血燄注魂術 ‧ 獸",
    "leaderDescription": "隊伍中只有獸類成員時：全隊攻擊力 5 倍；進入關卡後所有成員的主動技能 CD 減少 5 (效果不能疊加)",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "哈沙",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1225",
    "leaderName": "野獸之怒",
    "leaderDescription": "獸類攻擊力 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "獨角尋蹤 ‧ 哈沙",
    "activeName": ["森野之力"],
    "activeDescription": ["1 回合內，木屬性及獸類攻擊力 1.5 倍"],
    "monsterId": "1226",
    "leaderName": "自然之力 ‧ 靈泉",
    "leaderDescription": "隊伍中只有獸類成員時：全隊攻擊力 4 倍及生命力 1.5 倍；每首批消除 1 粒符石，回復 0.6% 總生命力 (受連擊 (Combo) 加乘影響)。",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "銅丸",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1227",
    "leaderName": "龍之怒",
    "leaderDescription": "龍類攻擊力 2 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "懸紅捕手 ‧ 銅丸",
    "activeName": ["麒麟之傲"],
    "activeDescription": [
      "消耗現有 20% 生命力，1 回合內，迴避所有敵人的攻擊。下回合開始前，將所有符石轉化為強化符石，且全隊攻擊力 1.5 倍"
    ],
    "monsterId": "1228",
    "leaderName": "萬鈞龍怒 ‧ 壽延",
    "leaderDescription": "隊伍中只有龍類成員時，龍類攻擊力 4 倍及生命力 1.25 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "向日葵",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1229",
    "leaderName": "龍之怒",
    "leaderDescription": "龍類攻擊力 2 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "覓食龍騎士 ‧ 向日葵",
    "activeName": ["魅影術"],
    "activeDescription": [
      "隨機將 4 至 7 粒符石轉化為暗強化符石 (水、火及木符石優先轉換)"
    ],
    "monsterId": "1230",
    "leaderName": "幽冥怒嘯",
    "leaderDescription": "暗屬性攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "深海野孩 ‧ 海豆",
    "activeName": ["顧守之約 ‧ 水"],
    "activeDescription": [
      "所受傷害減少 20%，直至沒有消除水及心符石，不包括主動技及隊長技能"
    ],
    "monsterId": "1231",
    "leaderName": "野獸之嗔怒",
    "leaderDescription": "獸類攻擊力 3 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "獸心獵女 ‧ 阿格麗",
    "activeName": ["因靈之力 ‧ 妖魅"],
    "activeDescription": [
      "引爆心符石以掉落強化符石及增加妖精類攻擊力，引爆 8 粒可達至最大 3 倍"
    ],
    "monsterId": "1232",
    "leaderName": "妖精之狂怒",
    "leaderDescription": "妖精類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "蛇妖術士 ‧ 御鬼",
    "activeName": ["蛇之幻境"],
    "activeDescription": ["2 回合內，首次所受傷害不會使你死亡"],
    "monsterId": "1233",
    "leaderName": "妖精之狂怒",
    "leaderDescription": "妖精類攻擊力 2.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "野獸之聲 ‧ 歡歡",
    "activeName": ["猩猩之怒 ‧ 光"],
    "activeDescription": ["3 回合內，全隊攻擊力持續提升，最大 2.2 倍"],
    "monsterId": "1234",
    "leaderName": "野獸之嗔怒",
    "leaderDescription": "獸類攻擊力 3 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "拜金獵手 ‧ 銀丸",
    "activeName": ["因靈之力 ‧ 強獸"],
    "activeDescription": [
      "引爆心符石以掉落強化符石及增加獸類攻擊力，引爆 8 粒即可達至最大 3 倍"
    ],
    "monsterId": "1235",
    "leaderName": "野獸之嗔怒",
    "leaderDescription": "獸類攻擊力 3 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "亞伯汗",
    "activeName": ["寒冰強擊"],
    "activeDescription": ["對單一敵人造成 10 倍水屬性傷害"],
    "monsterId": "1236",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "噬念束縛 ‧ 亞伯汗",
    "activeName": ["海連環"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 10 秒，消除符石的組數愈多時，全隊攻擊力愈高，消除 10 組可達至最大 2.5 倍"
    ],
    "monsterId": "1237",
    "leaderName": "浪濤殺機",
    "leaderDescription": "水屬性攻擊力 3.75 倍。每個連擊 (Combo) 均有 50% 機會額外計算多 1 連擊 (Combo)，最多可額外增加 10 連擊 (Combo) (機率及連擊數目可以疊加)。加乘不受其他技能影響",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "切西亞",
    "activeName": ["烈炎強擊"],
    "activeDescription": ["對單一敵人造成 10 倍火屬性傷害"],
    "monsterId": "1238",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "變臉火術 ‧ 切西亞",
    "activeName": ["三原靈陣 ‧ 血燄"],
    "activeDescription": [
      "所有符石隨機轉化為水、火、木及心符石，同時火符石出現率上升，並將火符石以火強化符石代替"
    ],
    "monsterId": "1239",
    "leaderName": "透幻之燄",
    "leaderDescription": "火屬性攻擊力 3.2 倍。消除 3 種符石時，火屬性攻擊力額外提升 1.5 倍；消除 4 種或以上符石時，火屬性攻擊力則額外提升 1.8 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "瑰洱",
    "activeName": ["旋風強擊"],
    "activeDescription": ["對單一敵人造成 10 倍木屬性傷害"],
    "monsterId": "1240",
    "leaderName": "大地之集權",
    "leaderDescription": "木屬性攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "追念羇絆 ‧ 瑰洱",
    "activeName": ["玄冥絕塵"],
    "activeDescription": [
      "木符石轉化為木強化符石，並直接引爆場上所有光及暗符石，以掉落水、火、木及心強化符石"
    ],
    "monsterId": "1241",
    "leaderName": "大地之集權",
    "leaderDescription": "木屬性攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "帛曳",
    "activeName": ["金光強擊"],
    "activeDescription": ["對單一敵人造成 10 倍光屬性傷害"],
    "monsterId": "1242",
    "leaderName": "元素調勻 ‧ 光",
    "leaderDescription": "光屬性生命力、攻擊力及回復力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "刺骨封印 ‧ 帛曳",
    "activeName": ["棄愛之光"],
    "activeDescription": [
      "消耗現有一半生命力，以 25 倍所扣除生命力對敵方全體造成光屬性傷害"
    ],
    "monsterId": "1243",
    "leaderName": "元素調勻 ‧ 光",
    "leaderDescription": "光屬性生命力、攻擊力及回復力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "撒旦",
    "activeName": ["暗色強擊"],
    "activeDescription": ["對單一敵人造成 10 倍暗屬性傷害"],
    "monsterId": "1244",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "放任孽魔 ‧ 撒旦",
    "activeName": ["追魂之幽"],
    "activeDescription": [
      "1 回合內，暗屬性攻擊力 2 倍，自身攻擊力額外提升 3 倍"
    ],
    "monsterId": "1245",
    "leaderName": "魔魅斷魂劍",
    "leaderDescription": "暗屬性攻擊力 3.5 倍，消除 3 種或以上的符石及自身發動攻擊時，個人追打自身攻擊力 4 倍的暗屬性攻擊 1 次",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "昔拉",
    "activeName": ["寒冰強擊"],
    "activeDescription": ["對單一敵人造成 10 倍水屬性傷害"],
    "monsterId": "1246",
    "leaderName": "妖精之狂怒",
    "leaderDescription": "妖精類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "藍蝶女王 ‧ 昔拉",
    "activeName": ["蝶之翼"],
    "activeDescription": [
      "1 回合內，減少所受傷害 30%，消除水符石及心符石時，則減少所受傷害 60%"
    ],
    "monsterId": "1247",
    "leaderName": "妖靈鞭 ‧ 水",
    "leaderDescription": "隊伍中只有水屬性妖精類成員時，全隊攻擊力 4.25 倍，並將每個成員自身回復力的 1.75 倍各自加入自身攻擊力",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "撒斯姆",
    "activeName": ["旋風強擊"],
    "activeDescription": ["對單一敵人造成 10 倍木屬性傷害"],
    "monsterId": "1248",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "慾念幻化 ‧ 撒斯姆",
    "activeName": ["魔之權勢"],
    "activeDescription": ["1 回合內，魔族攻擊力及回復力 1.5 倍"],
    "monsterId": "1249",
    "leaderName": "權欲之森 ‧ 魔",
    "leaderDescription": "木屬性攻擊力 2 倍；隊伍中的魔族成員愈多，木屬性攻擊力額外提升愈多，5 個魔族成員可達至最大 3.5 倍 (不計自身)。消除場上所有木符石時，木屬性攻擊力額外提升 1.5 倍 (只計算首批消除的符石)",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "瑪伊雅彌",
    "activeName": ["金光強擊"],
    "activeDescription": ["對單一敵人造成 10 倍光屬性傷害"],
    "monsterId": "1250",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "背德榮光 ‧ 瑪伊雅彌",
    "activeName": ["玄虛幻變 ‧ 光"],
    "activeDescription": [
      "1 回合內，光屬性攻擊力 1.5 倍；並將移動符石時觸碰的首 6 粒符石轉化為光符石"
    ],
    "monsterId": "1251",
    "leaderName": "權欲之光 ‧ 人",
    "leaderDescription": "光屬性攻擊力 2 倍；隊伍中的人類成員愈多時，光屬性攻擊力額外提升愈多，5 個人類成員可達至最大 3.5 倍 (不計自身)。消除場上所有光符石時，光屬性攻擊力額外提升 1.5 倍 (只計算首批消除的符石)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "不潔誘惑 ‧ 莉拉可",
    "activeName": ["魅惑深淵"],
    "activeDescription": [
      "2 回合內，暗屬性攻擊力 2 倍，並將心符石的掉落機率降至 0"
    ],
    "monsterId": "1252",
    "leaderName": "冥神萬鈞之怒 ‧ 強",
    "leaderDescription": "暗屬性神族攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "墓劍銘 ‧ 干將莫邪",
    "activeName": ["劍匠噬魂 ‧ 烈燄"],
    "activeDescription": [
      "1 回合內，若首批消除的連擊 (Combo) 數為單數時，火屬性攻擊力 1.5 倍；反之，人類及魔族攻擊力 1.5 倍。若首批消除的連擊 (Combo) 數達至 6 或以上，可以同時獲得以上兩個效果"
    ],
    "monsterId": "1253",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "千子斬 ‧ 妖刀村正",
    "activeName": ["弒血冷刃"],
    "activeDescription": [
      "1 回合內，妖精攻擊力及回復力 1.5 倍；消除心符石時，所有成員的主動技能 CD 減少 2"
    ],
    "monsterId": "1254",
    "leaderName": "妖精之靈泉",
    "leaderDescription": "妖精類回復力 4 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "魔笛",
    "activeName": ["窮途幻變 ‧ 冰雪"],
    "activeDescription": [
      "當場上的水符石少於 5 粒時，將 3 粒符石轉化為水強化符石 (木符石優先轉換)；反之，將水符石轉化為水強化符石"
    ],
    "monsterId": "1256",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "淚紅傘",
    "activeName": ["窮途幻變 ‧ 泣血"],
    "activeDescription": [
      "當場上的火符石少於 5 粒時，將 3 粒符石轉化為火強化符石 (水符石優先轉換)；反之，將火符石轉化為火強化符石"
    ],
    "monsterId": "1257",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "宿怨鳥籠",
    "activeName": ["逍遙之志"],
    "activeDescription": [
      "完全回復生命力，並解除所有成員被鎖的技能及清除敵人身上的控制技能 (此技能無視封鎖技能)"
    ],
    "monsterId": "1258",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "閃靈照相機",
    "activeName": ["閃光彈"],
    "activeDescription": [
      "所有符石轉化為強化符石；1 回合內，消除的強化符石愈多，全隊攻擊力愈高，消除 25 粒可達至最大 2 倍"
    ],
    "monsterId": "1259",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "纏身人偶",
    "activeName": ["附纏約定"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，每回合扣除現有 20% 生命力，效果持續至受到 2 次攻擊為止"
    ],
    "monsterId": "1260",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "澈悟之匙 ‧ 拉法葉爾",
    "activeName": ["游刃而攻 ‧ 強"],
    "activeDescription": [
      "移靈加冕 ‧ 耀光之浪\n每次只能選取 1 個效果。\n效果1：1 回合內，水屬性攻擊力 1.8 倍，並於移動符石時間內，可任意移動符石而不會發動消除\n效果2：心符石轉化為水強化符石，同時將火符石轉化為心強化符石，並將木符石轉化為光強化符石"
    ],
    "monsterId": "1261",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "剛烈之矛 ‧ 烏列爾",
    "activeName": ["熾燄之傲 ‧ 強"],
    "activeDescription": [
      "移靈加冕 ‧ 幽冥之燄\n每次只能選取 1 個效果。\n效果1：1 回合內，火屬性攻擊力 1.5 倍，並無視全體敵人的防禦力\n效果2：心符石轉化為火強化符石，同時將木符石轉化為心強化符石，並將光符石轉化為暗強化符石"
    ],
    "monsterId": "1262",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "垂憐之目 ‧ 沙利葉",
    "activeName": ["淨世之姿 ‧ 強"],
    "activeDescription": [
      "移靈加冕 ‧ 耀光之森\n每次只能選取 1 個效果。\n效果1：1 回合內，木屬性攻擊力 1.75 倍，並消除所有附加效果，消除的效果愈多，木屬性攻擊力提升愈多，最大提升至 2.5 倍\n效果2：心符石轉化為木強化符石，同時將水符石轉化為心強化符石，並將火符石轉化為光強化符石"
    ],
    "monsterId": "1263",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "追思之映 ‧ 加百列",
    "activeName": ["運籌之時 ‧ 強"],
    "activeDescription": [
      "移靈加冕 ‧ 浪濤之耀\n每次只能選取 1 個效果。\n效果1：1 回合內，光屬性攻擊力 1.8 倍，並延長移動符石時間 2 秒\n效果2：心符石轉化為光強化符石，同時將暗符石轉化為心強化符石，並將火符石轉化為水強化符石"
    ],
    "monsterId": "1264",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "剖辨之鎗 ‧ 拉貴爾",
    "activeName": ["轟動一瞬 ‧ 強"],
    "activeDescription": [
      "移靈加冕 ‧ 森林之幽\n每次只能選取 1 個效果。\n效果1：1 回合內，暗及光屬性攻擊力 2 倍\n效果2：心符石轉化為暗強化符石，同時將光符石轉化為心強化符石，並將水符石轉化為木強化符石"
    ],
    "monsterId": "1265",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "魔血荊棘 ‧ 路易斯",
    "activeName": ["進退有序 ‧ 強"],
    "activeDescription": ["2 回合內，全隊攻擊力 1.8 倍，並減少所受傷害 65%"],
    "monsterId": "1266",
    "leaderName": "童趣約定 ‧ 浪濤",
    "leaderDescription": "連擊 (Combo) 數為單數時，水屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則水屬性攻擊力 5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "白焰鎗火 ‧ 桃樂絲",
    "activeName": ["移魂進攻 ‧ 熾燄"],
    "activeDescription": [
      "將木符石轉化為火符石；所轉化的符石愈多，1 回合內全隊攻擊力愈高，轉化 6 粒木符石即可達至最大 2.2 倍"
    ],
    "monsterId": "1267",
    "leaderName": "童趣約定 ‧ 熾燄",
    "leaderDescription": "連擊 (Combo) 數為單數時，火屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則火屬性攻擊力 5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "貓霧盜賊團 ‧ 阿里巴巴",
    "activeName": ["同盜相益 ‧ 強"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2 倍。若使用相同的隊長及戰友時，全隊攻擊力 3 倍"
    ],
    "monsterId": "1268",
    "leaderName": "童趣約定 ‧ 藤木",
    "leaderDescription": "連擊 (Combo) 數為單數時，木屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則木屬性攻擊力 5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "疾走精靈 ‧ 傑尼",
    "activeName": ["移魂進攻 ‧ 玄光"],
    "activeDescription": [
      "將暗符石轉化為光符石；所轉化的符石愈多，1 回合內全隊攻擊力愈高，轉化 6 粒暗符石即可達至最大 2.2 倍"
    ],
    "monsterId": "1269",
    "leaderName": "童趣約定 ‧ 玄光",
    "leaderDescription": "連擊 (Combo) 數為單數時，光屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則光屬性攻擊力 5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "哀樂王子 ‧ 愛德華",
    "activeName": ["引領之帥 ‧ 強"],
    "activeDescription": [
      "1 回合內，自身及身旁的成員攻擊力 3.5 倍；若身旁成員的攻擊力均低於自己，則效果持續 2 回合"
    ],
    "monsterId": "1270",
    "leaderName": "童趣約定 ‧ 幽冥",
    "leaderDescription": "連擊 (Combo) 數為單數時，暗屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則暗屬性攻擊力 5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "弓弩手",
    "activeName": ["流水追擊"],
    "activeDescription": ["1 回合內，個人追打水屬性攻擊 3 次"],
    "monsterId": "1271",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "鋼槍兵",
    "activeName": ["流燄追擊"],
    "activeDescription": ["1 回合內，個人追打火屬性攻擊 3 次"],
    "monsterId": "1272",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "刀盾兵",
    "activeName": ["流木追擊"],
    "activeDescription": ["1 回合內，個人追打木屬性攻擊 3 次"],
    "monsterId": "1273",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "鐵騎兵",
    "activeName": ["流光追擊"],
    "activeDescription": ["1 回合內，個人追打光屬性攻擊 3 次"],
    "monsterId": "1274",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "妖術士",
    "activeName": ["流影追擊"],
    "activeDescription": ["1 回合內，個人追打暗屬性攻擊 3 次"],
    "monsterId": "1275",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "關羽",
    "activeName": ["流水追擊"],
    "activeDescription": ["1 回合內，個人追打水屬性攻擊 3 次"],
    "monsterId": "1276",
    "leaderName": "結義之力",
    "leaderDescription": "隊伍中只有水、火及木屬性成員時：水符石兼具火及木符石 50% 效果、火符石兼具水及木符石 50% 效果、木符石兼具水符石及火符石 50% 效果 (兼具效果可以疊加) 。消除水、火、木及心符石其中 2 種符石時，全隊攻擊力 2.5 倍，消除其中 3 種符石時，則全隊攻擊力 3 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "青龍偃月 ‧ 關羽",
    "activeName": ["三原流水刃"],
    "activeDescription": [
      "光符石轉化為水符石，暗符石轉化為火符石，並將心符石轉化為木符石；1 回合內，水符石兼具 50% 心符石效果"
    ],
    "monsterId": "1277",
    "leaderName": "結義之力",
    "leaderDescription": "隊伍中只有水、火及木屬性成員時：水符石兼具火及木符石 50% 效果、火符石兼具水及木符石 50% 效果、木符石兼具水符石及火符石 50% 效果 (兼具效果可以疊加) 。消除水、火、木及心符石其中 2 種符石時，全隊攻擊力 2.5 倍，消除其中 3 種符石時，則全隊攻擊力 3 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "曹操",
    "activeName": ["流燄追擊"],
    "activeDescription": ["1 回合內，個人追打火屬性攻擊 3 次"],
    "monsterId": "1278",
    "leaderName": "殘妒之火",
    "leaderDescription": "魔族攻擊力 2 倍，生命力及回復力 1.35 倍，並延長移動符石時間 1 秒；消除火符石的組數愈多，火屬性攻擊力提升愈多，3 組可達至最大 2.4 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "暴虐魔帝 ‧ 曹操",
    "activeName": ["星火延展"],
    "activeDescription": [
      "將 8 個固定位置的符石轉化為火符石；1 回合內，延長移動符石時間至 8 秒"
    ],
    "monsterId": "1279",
    "leaderName": "殘妒之火",
    "leaderDescription": "魔族攻擊力 2 倍，生命力及回復力 1.35 倍，並延長移動符石時間 1 秒；消除火符石的組數愈多，火屬性攻擊力提升愈多，3 組可達至最大 2.4 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "劉備",
    "activeName": ["流木追擊"],
    "activeDescription": ["1 回合內，個人追打木屬性攻擊 3 次"],
    "monsterId": "1280",
    "leaderName": "水靈附攻 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 2 倍，同時水符石及心符石兼具 50% 木符石效果",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "鐵血義師 ‧ 劉備",
    "activeName": ["光華獵擊"],
    "activeDescription": [
      "1 回合內，每消除 1 組水、火或木符石，個人追打光屬性攻擊 1 次 ，最多可追打 10 次"
    ],
    "monsterId": "1281",
    "leaderName": "水靈附攻 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 2 倍，同時水符石及心符石兼具 50% 木符石效果",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "司馬懿",
    "activeName": ["流光追擊"],
    "activeDescription": ["1 回合內，個人追打光屬性攻擊 3 次"],
    "monsterId": "1282",
    "leaderName": "暗靈附攻 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2 倍，同時暗符石及心符石兼具 50% 光符石效果",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "彈指謀略 ‧ 司馬懿",
    "activeName": ["玄光勢略"],
    "activeDescription": ["將技能冷卻中的成員所在隊伍欄直行的符石轉化為光符石"],
    "monsterId": "1283",
    "leaderName": "暗靈附攻 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2 倍，同時暗符石及心符石兼具 50% 光符石效果",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "諸葛亮",
    "activeName": ["流影追擊"],
    "activeDescription": ["1 回合內，個人追打暗屬性攻擊 3 次"],
    "monsterId": "1284",
    "leaderName": "魔之本性 ‧ 強攻",
    "leaderDescription": "魔族攻擊力 3 倍，生命力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "雙面謀士 ‧ 諸葛亮",
    "activeName": ["魅影連環 ‧ 加冕"],
    "activeDescription": [
      "暗符石轉化為暗強化符石；1 回合內，連擊 (Combo) 數目增加 8"
    ],
    "monsterId": "1285",
    "leaderName": "魔之本性 ‧ 強攻",
    "leaderDescription": "魔族攻擊力 3 倍，生命力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "孫權",
    "activeName": ["流水追擊"],
    "activeDescription": ["1 回合內，個人追打水屬性攻擊 3 次"],
    "monsterId": "1286",
    "leaderName": "結盟 ‧ 湧浪之力",
    "leaderDescription": "隊伍中只有水和光屬性成員時，水和光屬性攻擊力 3.5 倍，消除水符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "僭逆王徒 ‧ 孫權",
    "activeName": ["水月醉光華"],
    "activeDescription": [
      "將最左方直行的符石轉化為水符石，並將最右方直行的符石轉化為光符石；1 回合內，水屬性成員追打光屬性攻擊 1 次，光屬性成員則追打水屬性攻擊 1 次"
    ],
    "monsterId": "1287",
    "leaderName": "結盟 ‧ 湧浪之力",
    "leaderDescription": "隊伍中只有水和光屬性成員時，水和光屬性攻擊力 3.5 倍，消除水符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "大喬與小喬",
    "activeName": ["流光追擊"],
    "activeDescription": ["1 回合內，個人追打光屬性攻擊 3 次"],
    "monsterId": "1288",
    "leaderName": "結盟 ‧ 守護之光",
    "leaderDescription": "隊伍中只有水和光屬性成員時，水和光屬性攻擊力 3.5 倍，消除光符石時，所受傷害減少 35%",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "戀眷朝暮 ‧ 大喬與小喬",
    "activeName": ["盈光術"],
    "activeDescription": [
      "發動此技能及下回合開始時，將 3 粒水及光以外的符石轉化為光強化符石"
    ],
    "monsterId": "1289",
    "leaderName": "結盟 ‧ 守護之光",
    "leaderDescription": "隊伍中只有水和光屬性成員時，水和光屬性攻擊力 3.5 倍，消除光符石時，所受傷害減少 35%",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "呂布",
    "activeName": ["流影追擊"],
    "activeDescription": ["1 回合內，個人追打暗屬性攻擊 3 次"],
    "monsterId": "1290",
    "leaderName": "虓虎之勇 ‧ 暗",
    "leaderDescription": "暗屬性攻擊力 3.75 倍，單體攻擊轉化為全體攻擊，並延長移動符石時間 1 秒；每消除一組 5 粒或以上的符石時，暗屬性攻擊力提升，消除 3 組可達至最大 2.2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "轉世狂將 ‧ 呂布",
    "activeName": ["玄靈滅絕 ‧ 暗流"],
    "activeDescription": ["光及心符石轉化為暗符石"],
    "monsterId": "1291",
    "leaderName": "虓虎之勇 ‧ 暗",
    "leaderDescription": "暗屬性攻擊力 3.75 倍，單體攻擊轉化為全體攻擊，並延長移動符石時間 1 秒；每消除一組 5 粒或以上的符石時，暗屬性攻擊力提升，消除 3 組可達至最大 2.2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "蒼生之龍 ‧ 趙雲",
    "activeName": ["子龍兇勢"],
    "activeDescription": [
      "子龍兇勢\n每次只能選取 1 個效果。\n效果1：延遲全體敵人行動 1 回合\n效果2：15 秒內，可任意移動符石而不會發動消除"
    ],
    "monsterId": "1292",
    "leaderName": "龍之嗔怒",
    "leaderDescription": "龍類攻擊力 3 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "野熊將 ‧ 張飛",
    "activeName": ["兩儀化靈 ‧ 加冕"],
    "activeDescription": [
      "光符石與暗符石轉化為心強化符石，2 回合內，減少所受傷害 50%"
    ],
    "monsterId": "1293",
    "leaderName": "木靈附攻 ‧ 火燄",
    "leaderDescription": "火屬性攻擊力 2 倍，同時木符石及心符石兼具 50% 火符石效果",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "飛瓣千金 ‧ 孫尚香",
    "activeName": ["點石加冕 ‧ 木"],
    "activeDescription": [
      "點選元素法陣上的 1 粒符石，並將該種符石轉化為木強化符石"
    ],
    "monsterId": "1294",
    "leaderName": "靈魂契約 ‧ 強",
    "leaderDescription": "全隊攻擊力 3 倍，關卡 \"靈魂之日\"，其初級難度及高級難度最後一層的敵人分別有 30% 及 50% 機會轉化為蘊魔晶寵 (機率可以疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "愁楚孤女 ‧ 甄宓",
    "activeName": ["迷香蕩漾 ‧ 玄光"],
    "activeDescription": [
      "2 回合內，光屬性攻擊力及回復力 1.5 倍，光屬性神族攻擊力及回復力則提升 2 倍"
    ],
    "monsterId": "1295",
    "leaderName": "眾神之嗔怒",
    "leaderDescription": "神族攻擊力 3 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "花千繡 ‧ 貂蟬",
    "activeName": ["懾魂魅靈"],
    "activeDescription": ["將場上的符石轉化為固定數量的心及暗符石"],
    "monsterId": "1296",
    "leaderName": "靈石附體 ‧ 強",
    "leaderDescription": "心符石兼具 300% 所有屬性效果",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "羽扇綸巾 ‧ 周瑜",
    "activeName": ["雄烈之火"],
    "activeDescription": [
      "連續引爆火屬性以外的符石 3 次，並根據引爆的符石數量倍化自身攻擊力對敵方全體造成火屬性傷害。1 回合內，消除 8 粒或以上的火符石，火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "1297",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "幻筆師凱瑟琳",
    "activeName": ["界限突破"],
    "activeDescription": ["額外增加 3 行符石，並大幅延長移動符石時間至 12 秒"],
    "monsterId": "1298",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "道賀信天翁",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1299",
    "leaderName": "治療之心",
    "leaderDescription": "每回合回復自身回復力 (需要消除符石)",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "派對瘋頭",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1300",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "水動戰軀 ‧ 潘琪",
    "activeName": ["水月連擊"],
    "activeDescription": [
      "將 4 個角落共 12 粒符石轉化為水符石，1 回合內，以 30% 自身攻擊力追打 20 次水屬性攻擊"
    ],
    "monsterId": "1301",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "瘋狂武裝 ‧ 法拉",
    "activeName": ["火影連擊"],
    "activeDescription": [
      "將 4 個角落共 12 粒符石轉化為火符石，1 回合內，以 30% 自身攻擊力追打 20 次火屬性攻擊"
    ],
    "monsterId": "1302",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "神蹟追蹤 ‧ 菲凱倫",
    "activeName": ["木葉連擊"],
    "activeDescription": [
      "將 4 個角落共 12 粒符石轉化為木符石，1 回合內，以 30% 自身攻擊力追打 20 次木屬性攻擊"
    ],
    "monsterId": "1303",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "復仇理論 ‧ 桑芝",
    "activeName": ["光華連擊"],
    "activeDescription": [
      "將 4 個角落共 12 粒符石轉化為光符石，1 回合內，以 30% 自身攻擊力追打 20 次光屬性攻擊"
    ],
    "monsterId": "1304",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "血色子彈 ‧ 麥卡蒂",
    "activeName": ["暗流連擊"],
    "activeDescription": [
      "將 4 個角落共 12 粒符石轉化為暗符石，1 回合內，以 30% 自身攻擊力追打 20 次暗屬性攻擊"
    ],
    "monsterId": "1305",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "鹿角組",
    "activeName": ["帥氣槍擊 ‧ 火強"],
    "activeDescription": [
      "火符石轉化為火強化符石，1 回合內自身追打 3 次火屬性攻擊"
    ],
    "monsterId": "1306",
    "leaderName": "俠盜之力",
    "leaderDescription": "人類及魔族攻擊力 2.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "紅鼻組",
    "activeName": ["鹿力同心 ‧ 火"],
    "activeDescription": [
      "心符石轉化為火符石，1 回合內，自身及身旁成員的攻擊力 2 倍"
    ],
    "monsterId": "1307",
    "leaderName": "俠盜之力",
    "leaderDescription": "人類及魔族攻擊力 2.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "禮物黑手黨 ‧ 馴鹿組",
    "activeName": ["攻擊強化 ‧ 火"],
    "activeDescription": ["心符石轉化為火強化符石"],
    "monsterId": "1308",
    "leaderName": "俠盜之力",
    "leaderDescription": "人類及魔族攻擊力 2.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "永恆碑紋 ‧ 主神奧丁",
    "activeName": ["終極一擊 ‧ 強"],
    "activeDescription": [
      "1 回合內，若生命力全滿：自身生命力扣至 1，並將心符石轉化為自身屬性符石；移動符石前自身生命力愈低，全隊攻擊力愈高，最大 2.5 倍。反之，自身生命力愈低，全隊攻擊力愈高，最大 3.5 倍"
    ],
    "monsterId": "1309",
    "leaderName": "絕境意志 ‧ 暗",
    "leaderDescription": "當前生命力大於 50% 時，下一次所受傷害不會使你死亡，並以未能扣除的傷害對敵方攻擊者進行暗屬性反擊 (同一回合只會發動一次)",
    "attribute": "暗",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "眾生天命 ‧ 主神奧丁",
    "activeName": ["主神之威"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2.5 倍；若在最左及最右直行各消除 1 組 5 粒或以上的符石，下回合全隊攻擊力 2.5 倍"
    ],
    "monsterId": "1310",
    "leaderName": "絕境意志",
    "leaderDescription": "當前生命力大於 50% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "暗",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "終焉的嘆息 ‧ 詩嘉古爾",
    "activeName": ["武化之水 ‧ 強"],
    "activeDescription": [
      "1 回合內，水屬性攻擊力 1.5 倍，並可選擇將隊長或戰友所在隊伍欄直行的符石轉化為水強化符石"
    ],
    "monsterId": "1311",
    "leaderName": "大海之皇權",
    "leaderDescription": "水屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "竭力的咆吼 ‧ 絲克嘉莉德",
    "activeName": ["武之控壓 ‧ 強"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.8 倍及全體敵人的攻擊力弱化 85%，期間所有減傷效果無效"
    ],
    "monsterId": "1312",
    "leaderName": "煉獄之皇權",
    "leaderDescription": "火屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "萌芽的槍舞 ‧ 潔蘿露爾",
    "activeName": ["武化之木 ‧ 強"],
    "activeDescription": [
      "1 回合內，木屬性攻擊力 1.5 倍，並可選擇將隊長或戰友所在隊伍欄直行的符石轉化為木強化符石"
    ],
    "monsterId": "1313",
    "leaderName": "大地之皇權",
    "leaderDescription": "木屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "戰鼓的鏗鏘 ‧ 斯露德",
    "activeName": ["武之控壓 ‧ 強"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.8 倍及全體敵人的攻擊力弱化 85%，期間所有減傷效果無效"
    ],
    "monsterId": "1314",
    "leaderName": "神聖之皇權",
    "leaderDescription": "光屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "王冠的骷骨 ‧ 格恩達爾",
    "activeName": ["武化之暗 ‧ 強"],
    "activeDescription": [
      "1 回合內，暗屬性攻擊力 1.5 倍，並可選擇將隊長或戰友所在隊伍欄直行的符石轉化為暗強化符石"
    ],
    "monsterId": "1315",
    "leaderName": "暗黑之皇權",
    "leaderDescription": "暗屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "霜石龍王",
    "activeName": ["水波爆擊 ‧ 盈水"],
    "activeDescription": [
      "對敵方全體造成自身攻擊力 80 倍的水屬性傷害；並將 3 粒符石轉化為水符石 (心符石優先轉換)，首次使用後有一定機會可即時再次發動技能 (每層最多觸發一次) ，隊伍中的龍類成員愈多，機率愈高，最高可達 60% 機率 (機率不能疊加)"
    ],
    "monsterId": "1316",
    "leaderName": "海森闇之鐵壁",
    "leaderDescription": "水屬性、木屬性和暗屬性傷害減少 50%，其他屬性傷害減少 30%；當受到攻擊後，下回合全隊攻擊力提升 3 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "淬金火龍",
    "activeName": ["火焰爆擊 ‧ 盈火"],
    "activeDescription": [
      "對敵方全體造成自身攻擊力 80 倍的火屬性傷害；並將 3 粒符石轉化為火符石 (心符石優先轉換)，首次使用後有一定機會可即時再次發動技能 (每層最多觸發一次) ，隊伍中的龍類成員愈多，機率愈高，最高可達 60% 機率 (機率不能疊加)"
    ],
    "monsterId": "1317",
    "leaderName": "炎海聖之鐵壁",
    "leaderDescription": "水屬性、火屬性和光屬性傷害減少 50%，其他屬性傷害減少 30%；當受到攻擊後，下回合全隊攻擊力提升 3 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "騰木猛龍",
    "activeName": ["大地爆擊 ‧ 盈木"],
    "activeDescription": [
      "對敵方全體造成自身攻擊力 80 倍的木屬性傷害；並將 3 粒符石轉化為木符石 (心符石優先轉換)，首次使用後有一定機會可即時再次發動技能 (每層最多觸發一次) ，隊伍中的龍類成員愈多，機率愈高，最高可達 60% 機率 (機率不能疊加)"
    ],
    "monsterId": "1318",
    "leaderName": "森炎闇之鐵壁",
    "leaderDescription": "火屬性、木屬性和暗屬性傷害減少 50%，其他屬性傷害減少 30%；當受到攻擊後，下回合全隊攻擊力提升 3 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "澟霞機龍",
    "activeName": ["閃光爆擊 ‧ 盈光"],
    "activeDescription": [
      "對敵方全體造成自身攻擊力 80 倍的光屬性傷害；並將 3 粒符石轉化為光符石 (心符石優先轉換)，首次使用後有一定機會可即時再次發動技能 (每層最多觸發一次) ，隊伍中的龍類成員愈多，機率愈高，最高可達 60% 機率 (機率不能疊加)"
    ],
    "monsterId": "1319",
    "leaderName": "聖海森之鐵壁",
    "leaderDescription": "水屬性、木屬性和光屬性傷害減少 50%，其他屬性傷害減少 30%；當受到攻擊後，下回合全隊攻擊力提升 3 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "絕命邪龍",
    "activeName": ["暗影爆擊 ‧ 盈暗"],
    "activeDescription": [
      "對敵方全體造成自身攻擊力 80 倍的暗屬性傷害；並將 3 粒符石轉化為暗符石 (心符石優先轉換)，首次使用後有一定機會可即時再次發動技能 (每層最多觸發一次) ，隊伍中的龍類成員愈多，機率愈高，最高可達 60% 機率 (機率不能疊加)"
    ],
    "monsterId": "1320",
    "leaderName": "闇炎聖之鐵壁",
    "leaderDescription": "火屬性、光屬性和暗屬性傷害減少 50%，其他屬性傷害減少 30%；當受到攻擊後，下回合全隊攻擊力提升 3 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "怒海鯊將 ‧ 奧托",
    "activeName": ["狩獵之勢 ‧ 水"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為水屬性或獸類，同得此效果"
    ],
    "monsterId": "1321",
    "leaderName": "水影結界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 4.5 倍；水符石兼具其他屬性符石效果，每個獸類成員提升 12.5% 效果，最高 75% (效果可以疊加)",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "蛙躍爆彈 ‧ 伊奇多",
    "activeName": ["燄之結界 ‧ 強"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標無法行動並轉為火屬性，持續 3 回合。效果持續期間火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "1322",
    "leaderName": "燄影結界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 4.5 倍；火符石兼具其他屬性符石效果，每個獸類成員提升 12.5% 效果，最高 75% (效果可以疊加)",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "獅吼震森 ‧ 木法沙",
    "activeName": ["窮兇極怒 ‧ 強"],
    "activeDescription": [
      "1 回合內，自身攻擊力 12 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "1323",
    "leaderName": "森影結界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 4.5 倍；木符石兼具其他屬性符石效果，每個獸類成員提升 12.5% 效果，最高 75% (效果可以疊加)",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "碧天義盜 ‧ 布瑪",
    "activeName": ["狩獵之勢 ‧ 光"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為光屬性或獸類，同得此效果"
    ],
    "monsterId": "1324",
    "leaderName": "光影結界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 4.5 倍；光符石兼具其他屬性符石效果，每個獸類成員提升 12.5% 效果，最高 75% (效果可以疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "冥夜貓頌 ‧ 芭絲蒂",
    "activeName": ["窮兇極怒 ‧ 強"],
    "activeDescription": [
      "1 回合內，自身攻擊力 12 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "1325",
    "leaderName": "魅影結界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 4.5 倍；暗符石兼具其他屬性符石效果，每個獸類成員提升 12.5% 效果，最高 75% (效果可以疊加)",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "血慾永生 ‧ 伊莉莎白",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "1326",
    "leaderName": "戾吞天下 ‧ 水",
    "leaderDescription": "水屬性攻擊力 3 倍；每次消除 1 組水符石，水屬性攻擊力持續提升，消除 3 組可提升至最高 6 倍。連續 2 回合沒有消除水符石，攻擊力減少",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "不生不滅 ‧ 伊莉莎白",
    "activeName": ["幻象破滅 ‧ 水"],
    "activeDescription": [
      "將場上的符石變回原始模樣。1 回合內，所有符石兼具水符石效果"
    ],
    "monsterId": "1327",
    "leaderName": "流水魔影",
    "leaderDescription": "水屬性魔族攻擊力 4.5 倍，並提升水屬性對火屬性目標的攻擊力 (不包括主動技)",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "燧焰熾火 ‧ 潔琪",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "1328",
    "leaderName": "戾吞天下 ‧ 火",
    "leaderDescription": "火屬性攻擊力 3 倍；每次消除 1 組火符石，火屬性攻擊力持續提升，消除 3 組可提升至最高 6 倍。連續 2 回合沒有消除火符石，攻擊力減少",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "命之燃燒 ‧ 潔琪",
    "activeName": ["幻象破滅 ‧ 火"],
    "activeDescription": [
      "將場上的符石變回原始模樣。1 回合內，所有符石兼具火符石效果"
    ],
    "monsterId": "1329",
    "leaderName": "赤燄魔影",
    "leaderDescription": "火屬性魔族攻擊力 4.5 倍，並提升火屬性對木屬性目標的攻擊力 (不包括主動技)",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "毒草血妻 ‧ 貝莉",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "1330",
    "leaderName": "戾吞天下 ‧ 木",
    "leaderDescription": "木屬性攻擊力 3 倍；每次消除 1 組木符石，木屬性攻擊力持續提升，消除 3 組可提升至最高 6 倍。連續 2 回合沒有消除木符石，攻擊力減少",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "靈魂枯萎 ‧ 貝莉",
    "activeName": ["幻象破滅 ‧ 木"],
    "activeDescription": [
      "將場上的符石變回原始模樣。1 回合內，所有符石兼具木符石效果"
    ],
    "monsterId": "1331",
    "leaderName": "森葉魔影",
    "leaderDescription": "木屬性魔族攻擊力 4.5 倍，並提升木屬性對水屬性目標的攻擊力 (不包括主動技)",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "死亡美學 ‧ 傑克",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "1332",
    "leaderName": "魔性流曳 ‧ 光",
    "leaderDescription": "光屬性魔族攻擊力 4 倍，生命力及回復力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "殺戮迷思 ‧ 傑克",
    "activeName": ["血祭狂屠 ‧ 光"],
    "activeDescription": [
      "消耗現有 75% 的生命力，1 回合內，所有符石兼具光符石效果；若未能擊斃所有敵人，則回復所消耗的生命力"
    ],
    "monsterId": "1333",
    "leaderName": "絕命誅戮 ‧ 光",
    "leaderDescription": "當隊伍中只有光屬性成員時，生命力愈低時，全隊攻擊力會愈高，最大 6 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "淒迷啃魂者 ‧ 陶德",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "1334",
    "leaderName": "魔性流曳 ‧ 暗",
    "leaderDescription": "暗屬性魔族攻擊力 4 倍，生命力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "虛構歡樂 ‧ 陶德",
    "activeName": ["血祭狂屠 ‧ 暗"],
    "activeDescription": [
      "消耗現有 75% 的生命力，1 回合內，所有符石兼具暗符石效果；若未能擊斃所有敵人，則回復所消耗的生命力"
    ],
    "monsterId": "1335",
    "leaderName": "絕命誅戮 ‧ 暗",
    "leaderDescription": "當隊伍中只有暗屬性成員時，生命力愈低時，全隊攻擊力會愈高，最大 6 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "勝利紋章 ‧ 史蜜莉",
    "activeName": ["流雲術 ‧ 煉"],
    "activeDescription": [
      "隨機將 4 至 7 粒符石轉化為水強化符石 (光及暗符石優先轉換)。若隊伍中有 4 個或以上人類成員時，轉化 7 粒水強化符石的機率大幅提升"
    ],
    "monsterId": "1336",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "無挽狂意 ‧ 海姆達爾",
    "activeName": ["亡命感應 ‧ 火"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至火符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "1337",
    "leaderName": "熾燄怒嘯",
    "leaderDescription": "火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "思憶臂環 ‧ 瓦利",
    "activeName": ["勇武之力 ‧ 強"],
    "activeDescription": [
      "3 回合內，全隊攻擊力 1.8 倍；並於第 3 回合結束時，完全回復生命力"
    ],
    "monsterId": "1338",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "固盾雷楔 ‧ 摩迪與曼尼",
    "activeName": ["玄冥招來 ‧ 加冕"],
    "activeDescription": [
      "木符石轉化為光強化符石，同時將火符石轉化為暗強化符石"
    ],
    "monsterId": "1339",
    "leaderName": "玄光怒嘯",
    "leaderDescription": "光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "靈魂淚輓 ‧ 諾爾維",
    "activeName": ["蓄能轉換 ‧ 煉暗"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為暗符石，最多 8 粒；當累積至最多 8 粒時發動技能，轉化的暗符石會以暗強化符石代替。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "1340",
    "leaderName": "幽冥怒嘯",
    "leaderDescription": "暗屬性攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "夢中歌謠 ‧ 伊德海拉",
    "activeName": ["泡沫爆裂 ‧ 加冕"],
    "activeDescription": [
      "每回合敵方所受傷害的 110% 再爆發 (不包括無屬性傷害)，此傷害無視屬性及防禦力，效果持續 2 回合；每回合結束時，所有符石轉化為強化符石"
    ],
    "monsterId": "1341",
    "leaderName": "妖之靈 ‧ 水",
    "leaderDescription": "水屬性及妖精類攻擊力及回復力 3 倍；所有屬性符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "惡夢焚燒 ‧ 梅格蘭斯",
    "activeName": ["點燃 ‧ 強"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標轉為火屬性及受到自身攻擊力 60 倍的火屬性傷害，並持續到死亡；效果持續期間，觸碰被燃燒的位置所受的傷害減至 0 (不包括煉獄之火所造成的傷害)"
    ],
    "monsterId": "1342",
    "leaderName": "妖之靈 ‧ 火",
    "leaderDescription": "火屬性及妖精類攻擊力及回復力 3 倍；所有屬性符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "火",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "棲息平凡 ‧ 伊薇特",
    "activeName": ["生靈採奪"],
    "activeDescription": [
      "3 回合內，全隊攻擊力 1.5 倍，妖精類攻擊力則提升至 2 倍，敵方所受傷害的 20% 轉化為我方生命力"
    ],
    "monsterId": "1343",
    "leaderName": "妖之靈 ‧ 木",
    "leaderDescription": "木屬性及妖精類攻擊力及回復力 3 倍；所有屬性符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "為愛蛻變 ‧ 瑪格莉特",
    "activeName": ["妖之髓 ‧ 擴散"],
    "activeDescription": [
      "3 回合內，移動符石時觸碰的符石轉化為妖族符石，敵方所受傷害的 50% 分別擴散到其他敵人身上"
    ],
    "monsterId": "1344",
    "leaderName": "光之魅惑",
    "leaderDescription": "光屬性攻擊力 3 倍，光屬性妖精類攻擊力則 4 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "回憶吞食 ‧ 伊莎貝爾",
    "activeName": ["魅惑之誘"],
    "activeDescription": ["3 回合內，敵方互相或自我進行 1 次攻擊"],
    "monsterId": "1345",
    "leaderName": "暗之魅惑",
    "leaderDescription": "暗屬性攻擊力 3 倍，暗屬性妖精類攻擊力則 4 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "鈷藍劍影 ‧ 萊昂內爾",
    "activeName": ["驚濤械浪"],
    "activeDescription": [
      "1 回合內，機械族及水屬性成員攻擊力 1.8 倍，每多 1 個附加效果，攻擊力額外提升 0.4 倍，最多可提升至最大 3 倍"
    ],
    "monsterId": "1346",
    "leaderName": "激濤之鎧",
    "leaderDescription": "全隊攻擊力 4 倍，每 1 種屬性成員發動攻擊時，個人追打自身攻擊力 2 倍的水屬性攻擊 1 次；消除 5 種屬性符石時 (只計算首批消除的符石)，自身攻擊無視全體敵人的防禦力",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "血銅鋼臂 ‧ 萊昂內爾",
    "activeName": ["時間延展"],
    "activeDescription": [
      "1 回合內，發動技能時若生命力為 50% 或以上：減少 40% 所受傷害，並延長移動符石時間至 10 秒。反之，1 回合內，減少 80% 所受傷害，並延長移動符石時間至 15 秒"
    ],
    "monsterId": "1347",
    "leaderName": "爆燄之鎧",
    "leaderDescription": "全隊攻擊力 4 倍，每 1 種屬性成員發動攻擊時，個人追打自身攻擊力 2 倍的火屬性攻擊 1 次；消除 5 種屬性符石時 (只計算首批消除的符石)，自身攻擊無視全體敵人的防禦力",
    "attribute": "火",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "碧鉑鐳槍 ‧ 萊昂內爾",
    "activeName": ["攻前鳴擊"],
    "activeDescription": [
      "每回合發動攻擊前以 60 倍自身攻擊力對敵方全體造成無屬性傷害 (需消除符石及效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，所有機械族成員的主動技能 CD 減少 1"
    ],
    "monsterId": "1348",
    "leaderName": "狂森之鎧",
    "leaderDescription": "全隊攻擊力 4 倍，每 1 種屬性成員發動攻擊時，個人追打自身攻擊力 2 倍的木屬性攻擊 1 次；消除 5 種屬性符石時 (只計算首批消除的符石)，自身攻擊無視全體敵人的防禦力",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "重裝聖盾 ‧ 萊昂內爾",
    "activeName": ["光芒集結"],
    "activeDescription": [
      "在全部或最少 4 個成員可發動主動技時，發動此技會將所有成員技能 CD 重置：1 回合內，自身攻擊力及回復力 10 倍 (攻擊力不可與其他成員共享)"
    ],
    "monsterId": "1349",
    "leaderName": "雷電之鎧",
    "leaderDescription": "全隊攻擊力 4 倍，每 1 種屬性成員發動攻擊時，個人追打自身攻擊力 2 倍的光屬性攻擊 1 次；消除 5 種屬性符石時 (只計算首批消除的符石)，自身攻擊無視全體敵人的防禦力",
    "attribute": "光",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "墨濺刀鋒 ‧ 萊昂內爾",
    "activeName": ["刺殺戮"],
    "activeDescription": [
      "隨機將場上 1 粒水、火、木、光及暗符石轉化為強化符石；1 回合內，消除屬性強化符石時，個人追打與消除強化符石屬性相同的攻擊各 1 次"
    ],
    "monsterId": "1350",
    "leaderName": "暗殺之鎧",
    "leaderDescription": "全隊攻擊力 4 倍，每 1 種屬性成員發動攻擊時，個人追打自身攻擊力 2 倍的暗屬性攻擊 1 次；消除 5 種屬性符石時 (只計算首批消除的符石)，自身攻擊無視全體敵人的防禦力",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "漓澌原罪 ‧ 阿撒茲勒",
    "activeName": ["元素歸一 ‧ 浪濤"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 12 秒，消除符石的種類愈多，水屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1351",
    "leaderName": "無影幻像 ‧ 浪濤襲",
    "leaderDescription": "水屬性攻擊力 4 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 水符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為水符石時，則兼具效果變為水屬性攻擊力提升 1.8 倍 (可疊加)",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "熽炎煉獄 ‧ 亞巴頓",
    "activeName": ["元素歸一 ‧ 熾燄"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 12 秒，消除符石的種類愈多，火屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1352",
    "leaderName": "無影幻像 ‧ 熾燄襲",
    "leaderDescription": "火屬性攻擊力 4 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 火符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為火符石時，則兼具效果變為火屬性攻擊力提升 1.8 倍 (可疊加)",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "蒼翠茂綠 ‧ 薩麥爾",
    "activeName": ["元素歸一 ‧ 藤木"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 12 秒，消除符石的種類愈多，木屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1353",
    "leaderName": "無影幻像 ‧ 藤木襲",
    "leaderDescription": "木屬性攻擊力 4 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 木符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為木符石時，則兼具效果變為木屬性攻擊力提升 1.8 倍 (可疊加)",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "暮光蠅王 ‧ 別西卜",
    "activeName": ["玄光結界 ‧ 加冕"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上的符石時 (只計算首批消除的符石)，該直行將產生 2 粒光強化符石"
    ],
    "monsterId": "1354",
    "leaderName": "流螢結陣 ‧ 盛",
    "leaderDescription": "光屬性攻擊力 4 倍，並延長移動符石時間 1 秒；消除一組 5 粒或以上的光符石時，光屬性攻擊力額外提升 1.5 倍 (可疊加)",
    "attribute": "光",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "浩宕昏暗 ‧ 莫斯提馬",
    "activeName": ["幽冥結界 ‧ 加冕"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上的符石時 (只計算首批消除的符石)，該直行將產生 2 粒暗強化符石"
    ],
    "monsterId": "1355",
    "leaderName": "幽冥結陣 ‧ 盛",
    "leaderDescription": "暗屬性攻擊力 4 倍，並延長移動符石時間 1 秒；消除一組 5 粒或以上的暗符石時，暗屬性攻擊力額外提升 1.5 倍 (可疊加)",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "湛藍海神 ‧ 波塞頓",
    "activeName": ["印記之念 ‧ 水月"],
    "activeDescription": [
      "水屬性傷害持續提升，直至沒有消除一組 5 粒或以上的水符石 (只計算首批消除的符石)。每累計消除 20 粒符石，水屬性傷害加快提升。水屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "1356",
    "leaderName": "浪濤連動",
    "leaderDescription": "每首批消除 1 組符石，將產生 1 粒水符石；每累計消除 3 粒水符石，將產生 1 粒水強化符石",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "一剎永恆 ‧ 波塞頓",
    "activeName": ["神族符能 ‧ 浪濤陣"],
    "activeDescription": [
      "3 回合內，每回合隨機將 5 粒火符石轉化為水強化神族符石"
    ],
    "monsterId": "1357",
    "leaderName": "神 ‧ 浪之力",
    "leaderDescription": "水屬性神族攻擊力 4.5 倍；消除神族符石時，水屬性攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "爐火神鑄 ‧ 赫淮斯托斯",
    "activeName": ["印記之念 ‧ 火影"],
    "activeDescription": [
      "火屬性傷害持續提升，直至沒有消除一組 5 粒或以上的火符石 (只計算首批消除的符石)。每累計消除 20 粒符石，火屬性傷害加快提升。火屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "1358",
    "leaderName": "熾燄連動",
    "leaderDescription": "每首批消除 1 組符石，將產生 1 粒火符石；每累計消除 3 粒火符石，將產生 1 粒火強化符石",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "掌火神兵 ‧ 赫淮斯托斯",
    "activeName": ["神族符能 ‧ 熾燄陣"],
    "activeDescription": [
      "3 回合內，每回合隨機將 5 粒木符石轉化為火強化神族符石"
    ],
    "monsterId": "1359",
    "leaderName": "神 ‧ 焰之力",
    "leaderDescription": "火屬性神族攻擊力 4.5 倍；消除神族符石時，火屬性攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "戰神自傲 ‧ 雅典娜",
    "activeName": ["印記之念 ‧ 木葉"],
    "activeDescription": [
      "木屬性傷害持續提升，直至沒有消除一組 5 粒或以上的木符石 (只計算首批消除的符石)。每累計消除 20 粒符石，木屬性傷害加快提升。木屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "1360",
    "leaderName": "藤木連動",
    "leaderDescription": "每首批消除 1 組符石，將產生 1 粒木符石；每累計消除 3 粒木符石，將產生 1 粒木強化符石",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "棄神擇愛 ‧ 雅典娜",
    "activeName": ["神族符能 ‧ 藤木陣"],
    "activeDescription": [
      "3 回合內，每回合隨機將 5 粒水符石轉化為木強化神族符石"
    ],
    "monsterId": "1361",
    "leaderName": "神 ‧ 森之力",
    "leaderDescription": "木屬性神族攻擊力 4.5 倍；消除神族符石時，木屬性攻擊力額外提升 1.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "炫目聖光 ‧ 阿波羅",
    "activeName": ["印記之念 ‧ 光華"],
    "activeDescription": [
      "光屬性傷害持續提升，直至沒有消除一組 5 粒或以上的光符石 (只計算首批消除的符石)。每累計消除 20 粒符石，光屬性傷害加快提升。光屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "1362",
    "leaderName": "玄光連動",
    "leaderDescription": "每首批消除 1 組符石，將產生 1 粒光符石；每累計消除 3 粒光符石，將產生 1 粒光強化符石",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "晨光熹微 ‧ 阿波羅",
    "activeName": ["神族符能 ‧ 玄光陣"],
    "activeDescription": [
      "3 回合內，每回合隨機將 5 粒暗符石轉化為光強化神族符石"
    ],
    "monsterId": "1363",
    "leaderName": "神 ‧ 玄之力",
    "leaderDescription": "光屬性神族攻擊力 4.5 倍；消除神族符石時，光屬性攻擊力額外提升 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "澄明月夜 ‧ 阿提密斯",
    "activeName": ["印記之念 ‧ 暗流"],
    "activeDescription": [
      "暗屬性傷害持續提升，直至沒有消除一組 5 粒或以上的暗符石 (只計算首批消除的符石)。每累計消除 20 粒符石，暗屬性傷害加快提升。暗屬性傷害會於每一層數 (Wave) 重置"
    ],
    "monsterId": "1364",
    "leaderName": "幽冥連動",
    "leaderDescription": "每首批消除 1 組符石，將產生 1 粒暗符石；每累計消除 3 粒暗符石，將產生 1 粒暗強化符石",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "明月披星 ‧ 阿提密斯",
    "activeName": ["神族符能 ‧ 幽冥陣"],
    "activeDescription": [
      "3 回合內，每回合隨機將 5 粒光符石轉化為暗強化神族符石"
    ],
    "monsterId": "1365",
    "leaderName": "神 ‧ 秘之力",
    "leaderDescription": "暗屬性神族攻擊力 4.5 倍；消除神族符石時，暗屬性攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "思念動力 ‧ 格蕾琴與海森堡",
    "activeName": ["攻守自如 ‧ 指令"],
    "activeDescription": [
      "1 回合內，首批消除 12 粒或以下符石時，回復 25000 點生命力；反之，全隊攻擊力 2.2 倍"
    ],
    "monsterId": "1366",
    "leaderName": "水浪 ‧ 驅動",
    "leaderDescription": "水屬性攻擊力 3.5 倍，水屬性機械族攻擊力 4 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "剛體展翼 ‧ 阿涅茜",
    "activeName": ["攻守自如 ‧ 指令"],
    "activeDescription": [
      "1 回合內，首批消除 12 粒或以下符石時，回復 25000 點生命力；反之，全隊攻擊力 2.2 倍"
    ],
    "monsterId": "1367",
    "leaderName": "火焰 ‧ 驅動",
    "leaderDescription": "火屬性攻擊力 3.5 倍，火屬性機械族攻擊力 4 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "徹底械化 ‧ 蠻牛貳式",
    "activeName": ["攻勢如虹 ‧ 指令"],
    "activeDescription": [
      "1 回合內，首批消除 12 粒或以下符石時，無視全體敵人的防禦力；反之，全隊攻擊力 2.2 倍"
    ],
    "monsterId": "1368",
    "leaderName": "木林 ‧ 驅動",
    "leaderDescription": "木屬性攻擊力 3.5 倍，木屬性機械族攻擊力 4 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "金屬教義 ‧ 莉莎",
    "activeName": ["進退自如 ‧ 指令"],
    "activeDescription": [
      "1 回合內，首批消除 12 粒或以下符石時，減少 85% 所受傷害；反之，全隊攻擊力 2.2 倍"
    ],
    "monsterId": "1369",
    "leaderName": "光源 ‧ 驅動",
    "leaderDescription": "光屬性攻擊力 3.5 倍，光屬性機械族攻擊力 4 倍",
    "attribute": "光",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "渴望成鋼 ‧ 米基利",
    "activeName": ["攻勢如虹 ‧ 指令"],
    "activeDescription": [
      "1 回合內，首批消除 12 粒或以下符石時，無視全體敵人的防禦力；反之，全隊攻擊力 2.2 倍"
    ],
    "monsterId": "1370",
    "leaderName": "暗魄 ‧ 驅動",
    "leaderDescription": "暗屬性攻擊力 3.5 倍，暗屬性機械族攻擊力 4 倍",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "清絮綺羅 ‧ 希",
    "activeName": ["誓約的泉源 ‧ 加冕"],
    "activeDescription": [
      "暗及心符石轉化為水強化符石；所轉化的符石愈多，1 回合內水屬性攻擊力愈高，轉化 10 粒符石可達至最大 2.25 倍"
    ],
    "monsterId": "1371",
    "leaderName": "水元素暴濤",
    "leaderDescription": "水屬性攻擊力 4.5 倍，消除水符石的組數愈多，水屬性攻擊力愈高，消除 3 組可提升至最大 6 倍。每回合結束時，隨機將 2 粒符石轉化為水神族符石",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "幻影如水 ‧ 希",
    "activeName": ["疾速之浪"],
    "activeDescription": [
      "水符石掉落率提升至 20%，消除水符石愈多，水屬性攻擊力愈高，消除 12 粒水符石可達至最大 2.2 倍，效果持續至沒有消除神族符石"
    ],
    "monsterId": "1372",
    "leaderName": "水元素之力 ‧ 護壁",
    "leaderDescription": "水屬性攻擊力 4.5 倍；減少所受傷害 35%",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "烈焰染暮 ‧ 妍",
    "activeName": ["熾熱的約定 ‧ 加冕"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上時，全隊攻擊力 2 倍 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，隨機將 8 粒符石轉化為心強化符石"
    ],
    "monsterId": "1373",
    "leaderName": "熊熊之火",
    "leaderDescription": "火屬性攻擊力 4.5 倍；若有消除火符石，該回合結束時將火符石轉化為火神族強化符石",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "芍花愛戀 ‧ 妍",
    "activeName": ["綻放之焰"],
    "activeDescription": [
      "木符石掉落率降至 0，並將原有機率增加至火符石的掉落機率，消除神族符石時，火符石掉落率提升至 40% (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "1374",
    "leaderName": "心中的火苖",
    "leaderDescription": "火屬性攻擊力 4.5 倍；消除心符石時，火屬性攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "滔天浪神 ‧ 蓬托斯",
    "activeName": ["隅角花海 ‧ 浪濤"],
    "activeDescription": ["隨機將 2 個角落共 8 粒符石轉化為水神族符石"],
    "monsterId": "1375",
    "leaderName": "界限變革 ‧ 神",
    "leaderDescription": "3 粒或以上相同種類的符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)；消除神族符石時，神族攻擊力 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "隕星燄神 ‧ 法那斯",
    "activeName": ["火影約章 ‧ 強"],
    "activeDescription": [
      "火符石轉化為神族符石。1 回合內，消除 1 組 5 粒或以上的火符石，火屬性攻擊力 1.6 倍"
    ],
    "monsterId": "1376",
    "leaderName": "熾燄萬鈞 ‧ 絕命之怒",
    "leaderDescription": "火屬性攻擊力 4.5 倍；消除 12 粒或以上的火符石時，火屬性攻擊力額外提升 1.8 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "生命女神 ‧ 蓋婭",
    "activeName": ["木葉約章 ‧ 強"],
    "activeDescription": [
      "木符石轉化為神族符石。1 回合內，消除 1 組 5 粒或以上的木符石，木屬性攻擊力 1.6 倍"
    ],
    "monsterId": "1377",
    "leaderName": "藤木萬鈞 ‧ 絕命之怒",
    "leaderDescription": "木屬性攻擊力 4.5 倍；消除 12 粒或以上的木符石時，木屬性攻擊力額外提升 1.8 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "移月星神 ‧ 埃忒耳",
    "activeName": ["五屬同源 ‧ 加冕"],
    "activeDescription": [
      "1 回合內，所有符石兼具 30% 其他屬性符石效果；若隊伍中有 5 個或以上種族時，隨機將 3 粒水、火、木、光及暗符石轉化為強化符石"
    ],
    "monsterId": "1378",
    "leaderName": "五念凝匯 ‧ 強極",
    "leaderDescription": "隊伍中有 5 種屬性的成員時，全隊攻擊力 2.5 倍；若有 5 種或以上的種族成員時，全隊攻擊力額外提升 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "混沌夜神 ‧ 厄瑞玻斯",
    "activeName": ["隅角花海 ‧ 幽冥"],
    "activeDescription": ["隨機將 2 個角落共 8 粒符石轉化為暗神族符石"],
    "monsterId": "1379",
    "leaderName": "界限變革 ‧ 神",
    "leaderDescription": "3 粒或以上相同種類的符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)；消除神族符石時，神族攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "天律善心 ‧ 泰芙努特",
    "activeName": ["極限解放 ‧ 浪濤"],
    "activeDescription": [
      "直接引爆水屬性以外的符石造成敵方全體水屬性傷害；並提高水屬性攻擊力：引爆的符石愈多，水屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "1380",
    "leaderName": "浪濤之誅罰",
    "leaderDescription": "水屬性對火及暗屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；火及暗屬性傷害減少 25%",
    "attribute": "水",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "扼殺惻隱 ‧ 泰芙努特",
    "activeName": ["終極之判 ‧ 水"],
    "activeDescription": [
      "隨機將 3 粒符石轉化為水強化符石。發動技能時，若敵方全體均為火屬性，1 回合內，提升水屬性對火屬性目標的攻擊力；反之，將敵方全體轉為火屬性"
    ],
    "monsterId": "1381",
    "leaderName": "水獸之力",
    "leaderDescription": "水屬性及獸類攻擊力 4.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "公允長存 ‧ 賽特",
    "activeName": ["極限解放 ‧ 熾燄"],
    "activeDescription": [
      "直接引爆火屬性以外的符石造成敵方全體火屬性傷害；並提高火屬性攻擊力：引爆的符石愈多，火屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "1382",
    "leaderName": "熾燄之誅罰",
    "leaderDescription": "火屬性對火及木屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；火及木屬性傷害減少 25%",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "始祖真諦 ‧ 賽特",
    "activeName": ["終極之判 ‧ 火"],
    "activeDescription": [
      "隨機將 3 粒符石轉化為火強化符石。發動技能時，若敵方全體均為木屬性，1 回合內，提升火屬性對木屬性目標的攻擊力；反之，將敵方全體轉為木屬性"
    ],
    "monsterId": "1383",
    "leaderName": "赤龍之力",
    "leaderDescription": "火屬性及龍類攻擊力 4.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "颶風不終 ‧ 舒",
    "activeName": ["極限解放 ‧ 藤木"],
    "activeDescription": [
      "直接引爆木屬性以外的符石造成敵方全體木屬性傷害；並提高木屬性攻擊力：引爆的符石愈多，木屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "1384",
    "leaderName": "藤棘之誅罰",
    "leaderDescription": "木屬性對水及光屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；水及光屬性傷害減少 25%",
    "attribute": "木",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "天命不違 ‧ 舒",
    "activeName": ["終極之判 ‧ 木"],
    "activeDescription": [
      "隨機將 3 粒符石轉化為木強化符石。發動技能時，若敵方全體均為水屬性，1 回合內，提升木屬性對水屬性目標的攻擊力；反之，將敵方全體轉為水屬性"
    ],
    "monsterId": "1385",
    "leaderName": "森龍之力",
    "leaderDescription": "木屬性及龍類攻擊力 4.5 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "執行公義 ‧ 拉",
    "activeName": ["極限解放 ‧ 玄光"],
    "activeDescription": [
      "直接引爆光屬性以外的符石造成敵方全體光屬性傷害；並提高光屬性攻擊力：引爆的符石愈多，光屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "1386",
    "leaderName": "玄光之誅罰",
    "leaderDescription": "光屬性對火及暗屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；火及暗屬性傷害減少 25%",
    "attribute": "光",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "善惡不變 ‧ 拉",
    "activeName": ["終極之判 ‧ 光"],
    "activeDescription": [
      "隨機將 3 粒符石轉化為光強化符石。發動技能時，若敵方全體均為暗屬性，1 回合內，提升光屬性對暗屬性目標的攻擊力；反之，將敵方全體轉為暗屬性"
    ],
    "monsterId": "1387",
    "leaderName": "玄獸之力",
    "leaderDescription": "光屬性及獸類攻擊力 4.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "冥界判罪 ‧ 奧西利斯",
    "activeName": ["極限解放 ‧ 幽冥"],
    "activeDescription": [
      "直接引爆暗屬性以外的符石造成敵方全體暗屬性傷害；並提高暗屬性攻擊力：引爆的符石愈多，暗屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "1388",
    "leaderName": "幽冥之誅罰",
    "leaderDescription": "暗屬性對木及光屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；木及光屬性傷害減少 25%",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "死寂救贖 ‧ 奧西利斯",
    "activeName": ["終極之判 ‧ 暗"],
    "activeDescription": [
      "隨機將 3 粒符石轉化為暗強化符石。發動技能時，若敵方全體均為光屬性，1 回合內，提升暗屬性對光屬性目標的攻擊力；反之，將敵方全體轉為光屬性"
    ],
    "monsterId": "1389",
    "leaderName": "冥神之力",
    "leaderDescription": "暗屬性及神族攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "霞鏡靈動 ‧ 普普璐",
    "activeName": ["浪濤噬"],
    "activeDescription": [
      "1 回合內，自身攻擊力 20 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "1390",
    "leaderName": "瑰秘之妖力",
    "leaderDescription": "妖精類攻擊力 5 倍，回合結束時，隨機將 3 粒水符石轉化為妖族符石。消除 4 種或以上符石時，自身攻擊力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "淨邪降惡 ‧ 鈴子",
    "activeName": ["炙熱爪擊 ‧ 強"],
    "activeDescription": [
      "將 10 個固定位置的符石轉化為火強化符石。1 回合內，火屬性攻擊力 2 倍，火屬性獸類及獸類攻擊力 3 倍"
    ],
    "monsterId": "1391",
    "leaderName": "血燄注魂術 ‧ 強獸",
    "leaderDescription": "隊伍中只有獸類成員時：全隊攻擊力 5 倍；進入關卡後所有成員的主動技能 CD 減少 5 (效果不能疊加)；消除 1 組 5 粒或以上的符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "驅逐惡念 ‧ 哈沙",
    "activeName": ["森野之力 ‧ 強"],
    "activeDescription": [
      "1 回合內，木屬性及獸類攻擊力 1.5 倍，木屬性獸類攻擊力則提升至 1.8 倍"
    ],
    "monsterId": "1392",
    "leaderName": "自然流溢之力 ‧ 靈泉",
    "leaderDescription": "隊伍中只有獸類成員時：全隊攻擊力 5 倍及生命力 1.5 倍；每首批消除 1 粒符石，回復 0.6% 總生命力 (受連擊 (Combo) 加乘影響)；木符石兼具 50% 其他屬性符石效果 (可疊加)",
    "attribute": "木",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "堅韌麟心 ‧ 銅丸",
    "activeName": ["麒麟之傲 ‧ 強"],
    "activeDescription": [
      "1 回合內，迴避所有敵人的攻擊。下回合開始前，所有符石轉化為龍族強化符石，全隊攻擊力 1.5 倍"
    ],
    "monsterId": "1393",
    "leaderName": "矢志萬鈞龍怒 ‧ 壽延",
    "leaderDescription": "隊伍中只有龍類成員時，龍類攻擊力 5 倍及生命力 1.25 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "究極美食家 ‧ 向日葵",
    "activeName": ["魅影術 ‧ 煉"],
    "activeDescription": [
      "將 4 至 7 粒符石轉化為暗強化符石 (水、火及木符石優先轉換)；若隊伍中有 4 個以上龍類成員時，轉化 7 粒暗強化符石的機率大幅提升"
    ],
    "monsterId": "1394",
    "leaderName": "幽冥萬鈞之怒 ‧ 強",
    "leaderDescription": "暗屬性攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "擺脫亡歿之障 ‧ 羅伯特",
    "activeName": ["魔族的血約"],
    "activeDescription": [
      "1 回合內，消除 3 種或以上的符石，全隊攻擊力 3 倍；下回合隨機將 3 個魔族成員直行的符石轉化為魔族強化符石"
    ],
    "monsterId": "1395",
    "leaderName": "魔性流淌",
    "leaderDescription": "水屬性攻擊力 2.5 倍及魔族攻擊力 3 倍，水屬性魔族攻擊力則 7.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "拼生獸",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1396",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "水",
    "race": "進化素材",
    "star": "6★"
  },
  {
    "monsterName": "台式瘋頭",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1399",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "火",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "港式瘋頭",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1400",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "銅瘋頭",
    "activeName": ["無價的瑰寶"],
    "activeDescription": ["於「瘋頭」系列中，屬於極為稀有的瘋頭"],
    "monsterId": "1401",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "水",
    "race": "強化素材",
    "star": "3★"
  },
  {
    "monsterName": "銀瘋頭",
    "activeName": ["無價的瑰寶"],
    "activeDescription": ["於「瘋頭」系列中，屬於極為稀有的瘋頭"],
    "monsterId": "1402",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "水",
    "race": "強化素材",
    "star": "4★"
  },
  {
    "monsterName": "金瘋頭",
    "activeName": ["無價的瑰寶"],
    "activeDescription": ["於「瘋頭」系列中，屬於極為稀有的瘋頭"],
    "monsterId": "1403",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "水",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "鐵扇公主 ‧ 羅剎女",
    "activeName": ["逆焰之扇"],
    "activeDescription": [
      "木屬性傷害可剋制火屬性目標。每消除一組木符石，個人追打木屬性攻擊 1 次，最多 10 次 (效果會在關閉此技能或死亡後消失)。技能關閉時，所有符石轉化為木符石"
    ],
    "monsterId": "1404",
    "leaderName": "神魔之森",
    "leaderDescription": "隊伍中只有木屬性魔族、或只有木屬性神族及木屬性魔族時：全隊攻擊力 3.5 倍，每消除 4 組符石時，必定掉落 3 粒木符石",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "聖賢哲者 ‧ 唐三藏",
    "activeName": ["光之大義"],
    "activeDescription": [
      "1 回合內，光屬性攻擊力及回復力 2 倍；當隊伍中所有成員的攻擊力基值相同時，所有符石兼具 50% 其他屬性符石效果"
    ],
    "monsterId": "1405",
    "leaderName": "種族凝匯 ‧ 光",
    "leaderDescription": "隊伍中有 4 種或以上的種族成員時，光屬性攻擊力 4.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "浪速虎鯨 ‧ 阿羅哈",
    "activeName": ["元素均霑 ‧ 強"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 9 秒，並將所有符石轉化為固定數量的水、火、木、光及暗強化符石"
    ],
    "monsterId": "1406",
    "leaderName": "百獸同心 ‧ 強",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 5 倍，所有屬性符石兼具 25% 心符石效果 (效果可以疊加)",
    "attribute": "水",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "火生靈鸛 ‧ 泊安娜",
    "activeName": ["獸化支援 ‧ 強"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.8 倍；隊伍中每多一個獸類成員，額外增加效果持續 1 回合，最多可持續 6 回合"
    ],
    "monsterId": "1407",
    "leaderName": "煉獄之霸業 ‧ 獸",
    "leaderDescription": "火屬性攻擊力 3 倍及回復力 2 倍；火屬性獸類攻擊力 4.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "弦力熊貓 ‧ 雲陽",
    "activeName": ["亡命感應 ‧ 木"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至木符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "1408",
    "leaderName": "大地之霸業 ‧ 獸",
    "leaderDescription": "木屬性攻擊力 3 倍及回復力 2 倍；木屬性獸類攻擊力 4.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "破冰企鵝 ‧ 多多",
    "activeName": ["三原契約 ‧ 獸"],
    "activeDescription": ["獸類攻擊力 2 倍，效果持續至沒有發動 3 種屬性攻擊"],
    "monsterId": "1409",
    "leaderName": "百獸同心 ‧ 強",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 5 倍，所有屬性符石兼具 25% 心符石效果 (效果可以疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "織幻夢貘 ‧ 蘇瑪塔",
    "activeName": ["蝕夢之靈 ‧ 強"],
    "activeDescription": [
      "1 回合內，沒有消除心符石，全隊攻擊力 2.2 倍；反之，全隊攻擊力及回復力 1.5 倍"
    ],
    "monsterId": "1410",
    "leaderName": "百獸同盟 ‧ 強",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 5 倍。消除 3 種符石時，攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "惡鬼殺人魚",
    "activeName": ["符石強化 ‧ 水"],
    "activeDescription": ["水符石轉化為水強化符石"],
    "monsterId": "1411",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "4★"
  },
  {
    "monsterName": "燒符活死屍",
    "activeName": ["符石強化 ‧ 火"],
    "activeDescription": ["火符石轉化為火強化符石"],
    "monsterId": "1412",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "4★"
  },
  {
    "monsterName": "變種食屍鬼",
    "activeName": ["符石強化 ‧ 木"],
    "activeDescription": ["木符石轉化為木強化符石"],
    "monsterId": "1413",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "4★"
  },
  {
    "monsterName": "縛殺怨靈",
    "activeName": ["符石強化 ‧ 光"],
    "activeDescription": ["光符石轉化為光強化符石"],
    "monsterId": "1414",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "4★"
  },
  {
    "monsterName": "骷髏屠官",
    "activeName": ["符石強化 ‧ 暗"],
    "activeDescription": ["暗符石轉化為暗強化符石"],
    "monsterId": "1415",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "4★"
  },
  {
    "monsterName": "須佐之男",
    "activeName": ["符石緩變 ‧ 水"],
    "activeDescription": ["將最多 3 粒火符石轉化為水符石"],
    "monsterId": "1416",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "滄海浪子 ‧ 須佐之男",
    "activeName": ["靈石激濤 ‧ 草薙劍"],
    "activeDescription": [
      "所有符石兼具 75% 水符石效果；若技能發動時場上有水、火、木、光及暗符石時，當前技能 CD 減少 3"
    ],
    "monsterId": "1417",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "迦具土",
    "activeName": ["符石緩變 ‧ 火"],
    "activeDescription": ["將最多 3 粒木符石轉化為火符石"],
    "monsterId": "1418",
    "leaderName": "熾燄怒嘯",
    "leaderDescription": "火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "火靈邪印 ‧ 迦具土",
    "activeName": ["烈燄斬"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2 倍；若技能發動時場上有 5 粒或以上的火符石，效果持續 2 回合"
    ],
    "monsterId": "1419",
    "leaderName": "熾燄怒嘯",
    "leaderDescription": "火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "稻荷",
    "activeName": ["符石緩變 ‧ 木"],
    "activeDescription": ["將最多 3 粒水符石轉化為木符石"],
    "monsterId": "1420",
    "leaderName": "大地之強權 ‧ 獸",
    "leaderDescription": "木屬性攻擊力 2 倍及回復力 1.5 倍；木屬性獸類攻擊力 3.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "百狐變 ‧ 稻荷",
    "activeName": ["獸權加冕"],
    "activeDescription": [
      "木符石轉化為木強化符石；若技能發動時場上沒有心符石，將所有符石轉化為獸族符石"
    ],
    "monsterId": "1421",
    "leaderName": "百獸同盟",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "櫛名田",
    "activeName": ["符石緩變 ‧ 光"],
    "activeDescription": ["將最多 3 粒暗符石轉化為光符石"],
    "monsterId": "1422",
    "leaderName": "玄光怒嘯",
    "leaderDescription": "光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "出雲之女 ‧ 櫛名田比賣",
    "activeName": ["流螢幻術"],
    "activeDescription": [
      "3 回合內，首批消除場上所有光符石時，下回合開始時將最底一橫行的符石轉化為光強化符石；反之，下回合開始時將 3 粒符石 (心符石優先轉換) 轉化為光強化符石"
    ],
    "monsterId": "1423",
    "leaderName": "玄光怒嘯",
    "leaderDescription": "光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "伊邪那美",
    "activeName": ["符石緩變 ‧ 暗"],
    "activeDescription": ["將最多 3 粒光符石轉化為暗符石"],
    "monsterId": "1424",
    "leaderName": "元素調勻 ‧ 暗",
    "leaderDescription": "暗屬性生命力、攻擊力及回復力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "古怨經 ‧ 伊邪那美",
    "activeName": ["暗神加冕"],
    "activeDescription": ["光符石轉化為暗符石，暗符石轉化為暗神族符石"],
    "monsterId": "1425",
    "leaderName": "元素調勻 ‧ 暗",
    "leaderDescription": "暗屬性生命力、攻擊力及回復力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "天照",
    "activeName": ["神權八咫鏡"],
    "activeDescription": [
      "將所有符石轉化為神族符石；1 回合內，吸收本回合敵人首次攻擊傷害，並以所吸收攻擊力的 5 倍對其進行火屬性反擊，此傷害無視防禦力"
    ],
    "monsterId": "1426",
    "leaderName": "燄神咒術",
    "leaderDescription": "火屬性及神族攻擊力 4.5 倍，火符石兼具 50% 其他屬性符石效果 (效果可以疊加)；消除一種符石達 15 粒或以上時，全隊攻擊力額外提升 2.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "日向高天 ‧ 天照",
    "activeName": ["神權八咫鏡"],
    "activeDescription": [
      "將所有符石轉化為神族符石；1 回合內，吸收本回合敵人首次攻擊傷害，並以所吸收攻擊力的 5 倍對其進行火屬性反擊，此傷害無視防禦力"
    ],
    "monsterId": "1427",
    "leaderName": "燄神咒術",
    "leaderDescription": "火屬性及神族攻擊力 4.5 倍，火符石兼具 50% 其他屬性符石效果 (效果可以疊加)；消除一種符石達 15 粒或以上時，全隊攻擊力額外提升 2.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "伊邪那岐",
    "activeName": ["靈木無量"],
    "activeDescription": [
      "將場上所有符石轉化為固定數量及位置的心符石及木強化符石"
    ],
    "monsterId": "1428",
    "leaderName": "藤木之靈",
    "leaderDescription": "木屬性攻擊力 4 倍，同時心符石兼具 50% 木符石效果 (可疊加)",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "瓊珠之咒 ‧ 伊邪那岐",
    "activeName": ["靈木無量"],
    "activeDescription": [
      "將場上所有符石轉化為固定數量及位置的心符石及木強化符石"
    ],
    "monsterId": "1429",
    "leaderName": "藤木之靈",
    "leaderDescription": "木屬性攻擊力 4 倍，同時心符石兼具 50% 木符石效果 (可疊加)",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "月讀",
    "activeName": ["凝時之念"],
    "activeDescription": [
      "移動符石時間延長至 10 秒，於移動符石時間內，可任意移動符石而不會發動消除，並無視全體敵人的防禦力。效果持續至沒有擊斃所有敵人"
    ],
    "monsterId": "1430",
    "leaderName": "魅之花海",
    "leaderDescription": "暗屬性攻擊力 4 倍；回合結束時，將隨機 2 粒暗強化符石旁邊的符石轉化為暗符石",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "星夜線偶 ‧ 月讀",
    "activeName": ["凝時之念"],
    "activeDescription": [
      "移動符石時間延長至 10 秒，於移動符石時間內，可任意移動符石而不會發動消除，並無視全體敵人的防禦力。效果持續至沒有擊斃所有敵人"
    ],
    "monsterId": "1431",
    "leaderName": "魅之花海",
    "leaderDescription": "暗屬性攻擊力 4 倍；回合結束時，將隨機 2 粒暗強化符石旁邊的符石轉化為暗符石",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "梵天守門者 ‧ 毘沙門天",
    "activeName": ["浪 ‧ 追魂"],
    "activeDescription": [
      "1 回合內，個人對敵方全體追打全隊總攻擊力 1.5 倍的水屬性攻擊 1 次"
    ],
    "monsterId": "1432",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "五眼怒嚴 ‧ 金剛夜叉明王",
    "activeName": ["熾岩流 ‧ 神"],
    "activeDescription": [
      "將 3 粒符石轉化為火符石 (光及暗符石優先轉換)。隊伍中每多 1 個神族成員，額外將 2 粒符石轉化為火符石。若隊伍中有 3 個或以上的神族成員時，轉化的火符石會以火強化符石代替"
    ],
    "monsterId": "1433",
    "leaderName": "熾燄怒嘯",
    "leaderDescription": "火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "一扇月 ‧ 輝夜姬",
    "activeName": ["流雲無蹤"],
    "activeDescription": [
      "延遲水屬性敵人行動 2 回合，而且首回合木屬性攻擊力 1.5 倍，並直接引爆場上所有水符石，以掉落水屬性以外的符石，引爆的水符石愈多，木屬性攻擊力提升愈多，5 粒可提升至最大 2.5 倍"
    ],
    "monsterId": "1434",
    "leaderName": "木之怒嘯 ‧ 獵魔",
    "leaderDescription": "木屬性攻擊力 3.5 倍，同時木屬性對魔族目標的攻擊力額外提升 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "金糧神 ‧ 大黑天",
    "activeName": ["光靈加冕圍城"],
    "activeDescription": [
      "心符石轉化為心強化符石，同時將心以外的符石轉化為光強化符石"
    ],
    "monsterId": "1435",
    "leaderName": "玄光怒嘯",
    "leaderDescription": "光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "斷惡修善 ‧ 不動明王",
    "activeName": ["玄虛幻變 ‧ 幽冥"],
    "activeDescription": [
      "1 回合內，暗屬性攻擊力 1.5 倍，並將移動符石時觸碰的首 6 粒符石轉化為暗強化符石"
    ],
    "monsterId": "1436",
    "leaderName": "幽冥怒嘯",
    "leaderDescription": "暗屬性攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "護生明君 ‧ 大國主",
    "activeName": ["兩儀加冕 ‧ 水"],
    "activeDescription": ["光及暗符石轉化為水強化符石"],
    "monsterId": "1437",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "白金美神 ‧ 維納斯",
    "activeName": ["水月光華加冕"],
    "activeDescription": [
      "回復隊伍 50% 生命力；暗符石轉化為光強化符石，並將木符石轉化為水強化符石"
    ],
    "monsterId": "1438",
    "leaderName": "光之再生",
    "leaderDescription": "光屬性回復力 2.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "創曆者 ‧ 瑪雅",
    "activeName": ["突破之結界"],
    "activeDescription": [
      "所有符石轉化為強化符石。1 回合內，神族及魔族攻擊力 2 倍；光符石兼具 50% 心符石效果及暗符石兼具 50% 光符石效果"
    ],
    "monsterId": "1439",
    "leaderName": "光華獨尊",
    "leaderDescription": "光符石兼具 25% 心符石效果、暗符石兼具 25% 光符石效果、心符石兼具 50% 光符石效果 (效果可以疊加)。消除光、暗及心符石其中 2 種符石時，光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "生死胡狼 ‧ 阿努比斯",
    "activeName": ["斷魂冥流"],
    "activeDescription": [
      "所有成員攻擊力提升 1.3 倍，同時暗屬性符石掉落率提升，每回合開始時，暗符石轉化為暗強化符石 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，該回合暗屬性神族攻擊力 2 倍及當前技能 CD 減少 2"
    ],
    "monsterId": "1440",
    "leaderName": "神權在握",
    "leaderDescription": "神族攻擊力 4.5 倍；消除暗強化符石時，全隊攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "拳擊盾步兵",
    "activeName": ["兵卒變心術 ‧ 火殞"],
    "activeDescription": ["隨機將 3 粒火符石轉化為心符石"],
    "monsterId": "1441",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "佩劍步兵",
    "activeName": ["兵卒變心術 ‧ 木殞"],
    "activeDescription": ["隨機將 3 粒木符石轉化為心符石"],
    "monsterId": "1442",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "長柄步兵",
    "activeName": ["兵卒變心術 ‧ 水殞"],
    "activeDescription": ["隨機將 3 粒水符石轉化為心符石"],
    "monsterId": "1443",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "傳令步兵",
    "activeName": ["兵卒變心術 ‧ 暗殞"],
    "activeDescription": ["隨機將 3 粒暗符石轉化為心符石"],
    "monsterId": "1444",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "十字弓步兵",
    "activeName": ["兵卒變心術 ‧ 光殞"],
    "activeDescription": ["隨機將 3 粒光符石轉化為心符石"],
    "monsterId": "1445",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "加拉哈德",
    "activeName": ["兵卒變心術 ‧ 火殞"],
    "activeDescription": ["隨機將 3 粒火符石轉化為心符石"],
    "monsterId": "1446",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "鑄者騎士 ‧ 加拉哈德",
    "activeName": ["團結聚力 ‧ 人"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.5 倍，隊伍中每多一個水屬性人類或光屬性人類成員時，攻擊力提升，最多提升至 2.5 倍"
    ],
    "monsterId": "1447",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "崔斯坦",
    "activeName": ["兵卒變心術 ‧ 木殞"],
    "activeDescription": ["隨機將 3 粒木符石轉化為心符石"],
    "monsterId": "1448",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "遠征騎士 ‧ 崔斯坦",
    "activeName": ["秘幻術 ‧ 火"],
    "activeDescription": ["點選一直行的符石，並將該直行的符石轉化為火符石"],
    "monsterId": "1449",
    "leaderName": "騎士之盟",
    "leaderDescription": "隊伍中只有火、木及暗屬性成員時：全隊攻擊力 4 倍；消除心符石時，全隊攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "高文",
    "activeName": ["兵卒變心術 ‧ 水殞"],
    "activeDescription": ["隨機將 3 粒水符石轉化為心符石"],
    "monsterId": "1450",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "修道騎士 ‧ 高文",
    "activeName": ["盛勢一瞬"],
    "activeDescription": ["1 回合內，隨機 3 個人類成員的攻擊力提升 3 倍"],
    "monsterId": "1451",
    "leaderName": "不撓雄傑 ‧ 木",
    "leaderDescription": "木屬性攻擊力 2.5 倍；隊伍中的人類成員愈多時，木屬性成員的生命力及回復力愈高，5 個人類成員可達至最大 1.5 倍 (不計自身)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "亞瑟",
    "activeName": ["兵卒變心術 ‧ 暗殞"],
    "activeDescription": ["隨機將 3 粒暗符石轉化為心符石"],
    "monsterId": "1452",
    "leaderName": "聖劍",
    "leaderDescription": "隊伍中只有光屬性人類時，全隊攻擊力 3 倍，所有符石兼具 15% 光符石效果",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "高潔騎士 ‧ 亞瑟",
    "activeName": ["王之劍"],
    "activeDescription": [
      "1 回合內，消除水符石時，減少所受傷害 60%；消除火符石時，無視全體敵人的防禦力；消除木符石時，回復 15000 點生命力。同時消除水、火及木符石時，全隊攻擊力提升 2 倍"
    ],
    "monsterId": "1453",
    "leaderName": "聖劍",
    "leaderDescription": "隊伍中只有光屬性人類時，全隊攻擊力 3 倍，所有符石兼具 15% 光符石效果",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "蘭斯洛特",
    "activeName": ["兵卒變心術 ‧ 光殞"],
    "activeDescription": ["隨機將 3 粒光符石轉化為心符石"],
    "monsterId": "1454",
    "leaderName": "騎士之盟",
    "leaderDescription": "隊伍中只有火、木及暗屬性成員時：全隊攻擊力 4 倍；消除心符石時，全隊攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "千刃騎士 ‧ 蘭斯洛特",
    "activeName": ["暗黑之劍氣"],
    "activeDescription": [
      "水符石轉化為暗強化符石，下回合開始時，將本回合所消除強化符石的數量等值的符石轉化為暗強化符石 (水及光符石優先轉換)"
    ],
    "monsterId": "1455",
    "leaderName": "騎士之盟",
    "leaderDescription": "隊伍中只有火、木及暗屬性成員時：全隊攻擊力 4 倍；消除心符石時，全隊攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "貝德維爾",
    "activeName": ["兵卒變心術 ‧ 木殞"],
    "activeDescription": ["隨機將 3 粒木符石轉化為心符石"],
    "monsterId": "1456",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "雄炎騎士 ‧ 貝德維爾",
    "activeName": ["忠義 ‧ 燄火"],
    "activeDescription": [
      "火屬性攻擊力 2 倍，直至沒有消除 5 連擊 (Combo) 或以上的符石"
    ],
    "monsterId": "1457",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "加雷斯",
    "activeName": ["兵卒變心術 ‧ 水殞"],
    "activeDescription": ["隨機將 3 粒水符石轉化為心符石"],
    "monsterId": "1458",
    "leaderName": "人類之怒",
    "leaderDescription": "人類攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "玩心騎士 ‧ 加雷斯",
    "activeName": ["隅角花海 ‧ 木"],
    "activeDescription": ["隨機將 2 個角落共 8 粒符石轉化為木符石"],
    "monsterId": "1459",
    "leaderName": "騎士之盟",
    "leaderDescription": "隊伍中只有火、木及暗屬性成員時：全隊攻擊力 4 倍；消除心符石時，全隊攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "梅林",
    "activeName": ["兵卒變心術 ‧ 暗殞"],
    "activeDescription": ["隨機將 3 粒暗符石轉化為心符石"],
    "monsterId": "1460",
    "leaderName": "暗黑回復魔法",
    "leaderDescription": "妖精類攻擊力及回復力 4 倍。回合結束時，將心符石轉化為心強化符石",
    "attribute": "光",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "幻變術師 ‧ 梅林",
    "activeName": ["治癒之賦 ‧ 化擊"],
    "activeDescription": [
      "1 回合內，隊伍成員的屬性愈多，回復力愈高，最大 3.5 倍；當隊伍中所有成員的回復力基值相同時，所有成員追打一次暗屬性傷害，並將全隊對敵方造成傷害的 5% 轉化為生命力 (不計算主動及隊長技傷害)"
    ],
    "monsterId": "1461",
    "leaderName": "暗黑回復魔法",
    "leaderDescription": "妖精類攻擊力及回復力 4 倍。回合結束時，將心符石轉化為心強化符石",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "叛逆帝王 ‧ 莫德雷德",
    "activeName": ["傲浪之濤"],
    "activeDescription": [
      "水符石轉化為人族符石；2 回合內，每回合扣除 30% 總生命力，水屬性攻擊力 2.25 倍，若技能發動時隊伍回復為 0 時，則不會每回合扣除生命力"
    ],
    "monsterId": "1462",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "暴欲狂獅 ‧ 蘭馬洛克",
    "activeName": ["馴獅之志"],
    "activeDescription": [
      "木符石轉化為火強化符石；並將 4 個角落共 4 粒符石轉化為火符石。若技能發動後 4 個角落均為火符石時，1 回合內，全隊攻擊力 1.5 倍"
    ],
    "monsterId": "1463",
    "leaderName": "火之怒嘯 ‧ 獵魔",
    "leaderDescription": "火屬性攻擊力 3.5 倍，同時火屬性對魔族目標的攻擊力額外提升 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "自由蒼蝶 ‧ 桂妮薇兒",
    "activeName": ["森化幻術"],
    "activeDescription": [
      "1 回合內，所有符石兼具 50% 木符石效果。消除最底一橫行內的所有符石時，木屬性攻擊力 2 倍"
    ],
    "monsterId": "1464",
    "leaderName": "魔怒嘯天 ‧ 木",
    "leaderDescription": "木屬性魔族攻擊力 3.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "深淵魔女 ‧ 摩根勒菲",
    "activeName": ["緩兵術"],
    "activeDescription": [
      "延長所有敵人行動 1 回合。將技能冷卻中的成員 (不包括自己) 所在隊伍欄直行的符石轉化為心符石"
    ],
    "monsterId": "1465",
    "leaderName": "莫逆相伴 ‧ 妖",
    "leaderDescription": "隊伍中的妖精類成員愈多，全隊攻擊力愈高，最大 3.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "脫兔派對王 ‧ 君士坦丁",
    "activeName": ["王之翼"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 8 秒，若隊伍中只有人類成員時，全隊攻擊力 1.8 倍。只消除 3 粒光符石時 (只計算首批消除的符石)，移動符石後首批必定掉落 5 粒或以上的光符石"
    ],
    "monsterId": "1466",
    "leaderName": "燄影堅甲之術",
    "leaderDescription": "全隊攻擊力 1.5 倍，同時火屬性和暗屬性傷害減少 50%",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "眩目之光 ‧ 亞弗戈蒙",
    "activeName": ["化靈延敵"],
    "activeDescription": [
      "當我方生命力 30% 或以下時，隨機將 20 粒符石轉化為心符石；反之，延遲全體敵人行動 1 回合"
    ],
    "monsterId": "1467",
    "leaderName": "攻守化境",
    "leaderDescription": "全隊攻擊力 4 倍，每首批消除 1 粒符石，回復總生命力等值的 0.5% 生命力 (效果可以疊加)",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "二刀武痴 ‧ 宮本武藏",
    "activeName": ["燄火刀流"],
    "activeDescription": [
      "2 回合內，人類及龍類攻擊力 1.5 倍；火屬性人類及火屬性龍類攻擊力提升至 2.25 倍"
    ],
    "monsterId": "1468",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "無憂武士 ‧ 小次郎",
    "activeName": ["藤棘結界"],
    "activeDescription": [
      "使受影響目標無法行動 5 回合，但效果會因我方發動攻擊而減少 1 回合 (每回合最多減少 1 回合效果持續時間)"
    ],
    "monsterId": "1469",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "藏真忍士 ‧ 服部半藏",
    "activeName": ["電殛之屠"],
    "activeDescription": [
      "1 回合內，自身攻擊力 2.5 倍。若身旁的成員同為光屬性或人類，同得此效果"
    ],
    "monsterId": "1470",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "淺井長政",
    "activeName": ["流水追擊"],
    "activeDescription": ["1 回合內，個人追打水屬性攻擊 3 次"],
    "monsterId": "1471",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "無求浪人 ‧ 淺井長政",
    "activeName": ["水月之濤"],
    "activeDescription": [
      "2 回合內，水屬性攻擊力 1.5 倍，若首回合沒有受到攻擊，下回合水屬性攻擊力提升至 2.5 倍"
    ],
    "monsterId": "1472",
    "leaderName": "人之復甦 ‧ 凝水",
    "leaderDescription": "水屬性攻擊力 3 倍及人類回復力 2 倍；受到攻擊時，場上每粒水符石可減少 5% 所受傷害，最多可減少 30% 傷害 (減傷效果不可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "織田信長",
    "activeName": ["流燄追擊"],
    "activeDescription": ["1 回合內，個人追打火屬性攻擊 3 次"],
    "monsterId": "1473",
    "leaderName": "燄刃襲",
    "leaderDescription": "火屬性人類及火屬性龍類成員的攻擊力 4.5 倍，並延長移動符石時間 1 秒。消除 12 粒或以上火符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "烽火武心 ‧ 織田信長",
    "activeName": ["森濤盡噬 ‧ 赤火"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.3 倍；將火符石轉化為火強化符石，並直接引爆場上所有水、木及心符石，以掉落火、光及暗強化符石"
    ],
    "monsterId": "1474",
    "leaderName": "燄刃襲",
    "leaderDescription": "火屬性人類及火屬性龍類成員的攻擊力 4.5 倍，並延長移動符石時間 1 秒。消除 12 粒或以上火符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "豐臣秀吉",
    "activeName": ["流木追擊"],
    "activeDescription": ["1 回合內，個人追打木屬性攻擊 3 次"],
    "monsterId": "1475",
    "leaderName": "木葉之森",
    "leaderDescription": "消除 6 粒木符石時，木屬性人類攻擊力 3.75 倍；消除的木符石數量愈多，攻擊力愈高，消除 15 粒木符石可達至最大 6 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "扇頁浮金 ‧ 豐臣秀吉",
    "activeName": ["藤棘術"],
    "activeDescription": [
      "隨機將 4 至 7 粒符石轉化為木強化符石 (光及暗符石優先轉換)"
    ],
    "monsterId": "1476",
    "leaderName": "木葉之森",
    "leaderDescription": "消除 6 粒木符石時，木屬性人類攻擊力 3.75 倍；消除的木符石數量愈多，攻擊力愈高，消除 15 粒木符石可達至最大 6 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "本多忠勝",
    "activeName": ["流光追擊"],
    "activeDescription": ["1 回合內，個人追打光屬性攻擊 3 次"],
    "monsterId": "1477",
    "leaderName": "巨力之腕",
    "leaderDescription": "隊伍中只有 2 種屬性成員時，全隊攻擊力 2.5 倍。若隊伍中有 4 個或以上人類成員，全隊攻擊力額外提升 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "豪拳斷罪 ‧ 本多忠勝",
    "activeName": ["百戰不摧"],
    "activeDescription": [
      "1 回合內，將我方所受傷害直接轉化為我方生命力。若該回合敵人沒有發動攻擊，下回合全隊攻擊力 2 倍"
    ],
    "monsterId": "1478",
    "leaderName": "巨力之腕",
    "leaderDescription": "隊伍中只有 2 種屬性成員時，全隊攻擊力 2.5 倍。若隊伍中有 4 個或以上人類成員，全隊攻擊力額外提升 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "稻姬",
    "activeName": ["流影追擊"],
    "activeDescription": ["1 回合內，個人追打暗屬性攻擊 3 次"],
    "monsterId": "1479",
    "leaderName": "妖之靈力",
    "leaderDescription": "妖精類攻擊力及生命力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "蓉花粉黛 ‧ 稻姬",
    "activeName": ["結界術 ‧ 靈"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒心符石"
    ],
    "monsterId": "1480",
    "leaderName": "妖精萬鈞之怒 ‧ 靈泉",
    "leaderDescription": "妖精類攻擊力 4 倍及生命力 2 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "阿市",
    "activeName": ["流水追擊"],
    "activeDescription": ["1 回合內，個人追打水屬性攻擊 3 次"],
    "monsterId": "1481",
    "leaderName": "人之復甦 ‧ 凝水",
    "leaderDescription": "水屬性攻擊力 3 倍及人類回復力 2 倍；受到攻擊時，場上每粒水符石可減少 5% 所受傷害，最多可減少 30% 傷害 (減傷效果不可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "白化狂噬 ‧ 阿市",
    "activeName": ["啜血甦靈術"],
    "activeDescription": [
      "回復累積戰鬥回合數 (需要消除符石) 倍化 2000 點等值的生命力，10 回合可回復最多 20000 點生命力。發動技能後將累積戰鬥回合數重置"
    ],
    "monsterId": "1482",
    "leaderName": "人之復甦 ‧ 凝水",
    "leaderDescription": "水屬性攻擊力 3 倍及人類回復力 2 倍；受到攻擊時，場上每粒水符石可減少 5% 所受傷害，最多可減少 30% 傷害 (減傷效果不可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "濃姬",
    "activeName": ["流燄追擊"],
    "activeDescription": ["1 回合內，個人追打火屬性攻擊 3 次"],
    "monsterId": "1483",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "華絲瀲灩 ‧ 濃姬",
    "activeName": ["森濤化燄"],
    "activeDescription": ["水符石及木符石轉化為火符石"],
    "monsterId": "1484",
    "leaderName": "人之復甦 ‧ 凝火",
    "leaderDescription": "火屬性攻擊力 3 倍及人類回復力 2 倍；受到攻擊時，場上每粒火符石可減少 5% 所受傷害，最多可減少 30% 傷害 (減傷效果不可疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "德川家康",
    "activeName": ["流光追擊"],
    "activeDescription": ["1 回合內，個人追打光屬性攻擊 3 次"],
    "monsterId": "1485",
    "leaderName": "魔之狂怒 ‧ 光",
    "leaderDescription": "光屬性魔族攻擊力 2.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "雲詭機心 ‧ 德川家康",
    "activeName": ["驚天之怒 ‧ 魔"],
    "activeDescription": ["1 回合內，魔族攻擊力 2.5 倍"],
    "monsterId": "1486",
    "leaderName": "天魔道 ‧ 光",
    "leaderDescription": "光屬性攻擊力 2 倍，隊伍中每個魔族成員，扣除 5 %總生命力上限及增加光屬性攻擊力 0.5 倍，6 個魔族成員共扣除 30% 總生命力上限及可達至最高 5 倍光屬性攻擊力",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "五感響宴 ‧ 上杉謙信",
    "activeName": ["速勢之濤"],
    "activeDescription": [
      "水符石轉化為水強化符石；1 回合內，可任意移動符石而不會發動消除"
    ],
    "monsterId": "1487",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "忌心妒者 ‧ 明智光秀",
    "activeName": ["移魂進攻 ‧ 木"],
    "activeDescription": [
      "將水符石轉化為木符石；所轉化的符石愈多，1 回合內全隊攻擊力愈高，轉化 4 粒水符石即可達至最大 1.8 倍"
    ],
    "monsterId": "1488",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "戰慄追求者 ‧ 伊達政宗",
    "activeName": ["龍魂共鳴 ‧ 暗流"],
    "activeDescription": [
      "將 3 粒符石轉化為暗符石 (光符石優先)；1 回合內，以龍類其中造成的最大傷害轉換為全隊龍類的傷害"
    ],
    "monsterId": "1489",
    "leaderName": "真龍之源",
    "leaderDescription": "暗屬性龍類攻擊力 4 倍及增加 180 點回復力",
    "attribute": "暗",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "跋扈狂獸 ‧ 武田信玄",
    "activeName": ["風林火山"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍；隊伍成員的屬性愈多，延長移動符石時間愈長，最多延長 5 秒；若全隊均為獸類成員，1 回合內，連擊 (Combo) 數目增加 8"
    ],
    "monsterId": "1490",
    "leaderName": "燄影世界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 2.5 倍；火符石兼具其他屬性符石效果，每個獸類成員提升 10% 效果，最高 50% (效果可以疊加)",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "燈火宵行 ‧ 秀太",
    "activeName": ["星落欄柵"],
    "activeDescription": [
      "隨機將 3 個角落的符石轉化為 3 粒水符石、3 粒光符石及 3 粒心符石"
    ],
    "monsterId": "1491",
    "leaderName": "流螢之約",
    "leaderDescription": "心符石兼具 50% 水符石效果。隊伍中只有水屬性妖精時，全隊攻擊力 4.5 倍及生命力 1.3 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "多情刀客 ‧ 真田幸村",
    "activeName": ["淨世之燄"],
    "activeDescription": [
      "消除所有附加效果。2 回合內，受到攻擊時，隨機將火及心以外的一種符石轉化為火符石 (每回合最多可轉化一次)"
    ],
    "monsterId": "1492",
    "leaderName": "火之怒嘯 ‧ 獵魔",
    "leaderDescription": "火屬性攻擊力 3.5 倍，同時火屬性對魔族目標的攻擊力額外提升 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "震疫驅瘟 ‧ 瑞龍",
    "activeName": ["龍之煞勢"],
    "activeDescription": [
      "龍類攻擊力 1.5 倍，效果持續至沒有消除 5 粒木符石或 5 粒暗符石"
    ],
    "monsterId": "1493",
    "leaderName": "真龍之脈",
    "leaderDescription": "龍類攻擊力 2.5 倍及增加 200 點回復力",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "金蛋守護者",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1494",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "光",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "孤虎連舞 ‧ 井伊直虎",
    "activeName": ["雙刀連舞奧義 孤虎"],
    "activeDescription": [
      "直接引爆場上所有木符石以掉落火符石。3 回合內，人類攻擊力 1.3 倍"
    ],
    "monsterId": "1495",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "炎樂舞姬 ‧ 靜御前",
    "activeName": ["煌炎之神樂"],
    "activeDescription": [
      "直接引爆場上所有火屬性以外 2 粒或以上相連的符石，以掉落強化符石。2 回合內，火屬性回復力 1.5 倍"
    ],
    "monsterId": "1496",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "夜櫻紛飛之嵐 ‧ 黃泉",
    "activeName": ["櫻花鬼神亂舞"],
    "activeDescription": [
      "直接引爆場上所有符石並掉落強化符石。2 回合內，神族攻擊力 1.5 倍"
    ],
    "monsterId": "1497",
    "leaderName": "冥神萬鈞之怒 ‧ 強",
    "leaderDescription": "暗屬性神族攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "百川海中主 ‧ 蛟龍",
    "activeName": ["霸蛟龍的逆鱗"],
    "activeDescription": ["光符石轉化為水強化符石。2 回合內，減少所受傷害 65%"],
    "monsterId": "1498",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "冥縱之凶獅 ‧ 基加美修",
    "activeName": ["凶性死棋"],
    "activeDescription": [
      "引爆火屬性以外數量最多的一種屬性符石，以掉落火強化符石，於移動並消除符石後，引爆該屬性符石，直至場上沒有該種符石 (同一回合內只可發動一次)"
    ],
    "monsterId": "1499",
    "leaderName": "連鎖聖令 ‧ 火",
    "leaderDescription": "火屬性攻擊力 3.5 倍。消除一組 12 粒或以上的符石時，火屬性攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "神魔小妹",
    "activeName": ["小妹亂撞"],
    "activeDescription": ["所有符石隨機轉換"],
    "monsterId": "1500",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "書生布偶",
    "activeName": ["太初一擊"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.5 倍；倍率有 50% 機率提升至 2.25 倍及 25% 機率提升至 3.375 倍"
    ],
    "monsterId": "1501",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "炎令布偶",
    "activeName": ["蛾龍天劫"],
    "activeDescription": [
      "心符石轉化為火符石。1 回合內，將龍類、獸類及魔族的攻擊力加入自身攻擊力"
    ],
    "monsterId": "1502",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "長眉仙偶",
    "activeName": ["十劍擎天傲臨風"],
    "activeDescription": [
      "1 回合內，每消除 1 連擊 (Combo)，個人追打無屬性攻擊 1 次，最多 15 次"
    ],
    "monsterId": "1503",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "執扇布偶",
    "activeName": ["紅塵一步終"],
    "activeDescription": [
      "1 回合內，減少所受傷害 75%，下回合迴避所有敵人的攻擊"
    ],
    "monsterId": "1504",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "指花女偶",
    "activeName": ["魔流劍風之痕"],
    "activeDescription": [
      "12 秒內，可任意移動符石而不會發動消除；首批消除水、火、木、光及暗符石時，全隊攻擊力 1.5 倍"
    ],
    "monsterId": "1505",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "3★"
  },
  {
    "monsterName": "清香白蓮 ‧ 素還真",
    "activeName": ["天問三誓"],
    "activeDescription": [
      "將所有符石轉化為固定數量的水強化、光強化及心強化符石，並延長移動符石時間至 8 秒"
    ],
    "monsterId": "1506",
    "leaderName": "流雲斷念劍",
    "leaderDescription": "水屬性攻擊力 4 倍。消除 3 種或以上的符石及自身發動攻擊時，個人追打自身攻擊力 3 倍的水屬性攻擊 1 次；消除心符石及自身發動攻擊時，個人追打自身攻擊力 1.5 倍的水屬性攻擊 1 次",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "火宅佛獄的異數 ‧ 魔王子",
    "activeName": ["蛾龍天劫"],
    "activeDescription": [
      "心符石轉化為火符石。1 回合內，將龍類、獸類及魔族的攻擊力加入自身攻擊力"
    ],
    "monsterId": "1507",
    "leaderName": "魔火之燄",
    "leaderDescription": "火屬性魔族、火屬性龍類及火屬性獸類攻擊力 3.5 倍。隊伍中有合體召喚獸時，全隊攻擊力額外提升 1.6 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "慈光之塔的驚嘆 ‧ 劍之初",
    "activeName": ["十劍擎天傲臨風"],
    "activeDescription": [
      "1 回合內，每消除 1 連擊 (Combo)，個人追打無屬性攻擊 1 次，最多 15 次"
    ],
    "monsterId": "1508",
    "leaderName": "玄冥不侵 ‧ 化燄",
    "leaderDescription": "全隊攻擊力 3.5 倍，光屬性和暗屬性傷害減少 30%，同時火屬性傷害減少 40%",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "百世經綸 ‧ 一頁書",
    "activeName": ["笑盡英雄"],
    "activeDescription": [
      "2 回合內，以人類其中造成最大傷害轉換為全隊人類的傷害。首批消除場上所有光符石時，下回合開始時將心符石轉化為光強化符石"
    ],
    "monsterId": "1509",
    "leaderName": "玄光雄傑闖天下",
    "leaderDescription": "光屬性及暗屬性攻擊力 3.5 倍。當隊伍中只有光及暗屬性成員時，暗符石兼具光符石效果，人類攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "刀狂劍痴 ‧ 葉小釵",
    "activeName": ["天劍三絕"],
    "activeDescription": [
      "光屬性人類及暗屬性人類成員的攻擊力減至 50%，並將被減去的攻擊力加入自身攻擊力 (效果會在再次發動此技能或死亡後消失)。發動技能首回合，將 3 粒符石轉化為暗強化符石 (水、火及木符石優先轉換)"
    ],
    "monsterId": "1510",
    "leaderName": "幽冥雄傑闖天下",
    "leaderDescription": "光屬性及暗屬性攻擊力 3.5 倍。當隊伍中只有光及暗屬性成員時，光符石兼具暗符石效果，人類攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "殺戮碎島的救贖 ‧ 戢武王",
    "activeName": ["太初一擊"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.5 倍；倍率有 50% 機率提升至 2.25 倍及 25% 機率提升至 3.375 倍"
    ],
    "monsterId": "1511",
    "leaderName": "玄冥不侵 ‧ 化木",
    "leaderDescription": "全隊攻擊力 3.5 倍，光屬性和暗屬性傷害減少 30%，同時木屬性傷害減少 40%",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "傲笑紅塵",
    "activeName": ["紅塵一步終"],
    "activeDescription": [
      "1 回合內，減少所受傷害 75%，下回合迴避所有敵人的攻擊"
    ],
    "monsterId": "1512",
    "leaderName": "玄冥不侵 ‧ 化浪",
    "leaderDescription": "全隊攻擊力 3.5 倍，光屬性和暗屬性傷害減少 30%，同時水屬性傷害減少 40%",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "魔流劍 ‧ 風之痕",
    "activeName": ["魔流劍風之痕"],
    "activeDescription": [
      "12 秒內，可任意移動符石而不會發動消除；首批消除水、火、木、光及暗符石時，全隊攻擊力 1.5 倍"
    ],
    "monsterId": "1513",
    "leaderName": "冥流之劍",
    "leaderDescription": "首回合暗屬性攻擊力 2.25 倍，次回合暗屬性攻擊力 4.5 倍 (需要消除符石)，周而復始",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "道教頂峰 ‧ 劍子仙跡",
    "activeName": ["仙影飄跡"],
    "activeDescription": [
      "隨機將 9 粒符石分別轉化為 3 粒水強化符石、3 粒火符石及 3 粒木符石。同時發動水、火及木屬性攻擊時，當前技能 CD 減少 2"
    ],
    "monsterId": "1514",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "儒門龍首 ‧ 疏樓龍宿",
    "activeName": ["紫龍捲怒濤"],
    "activeDescription": [
      "隨機將 9 粒符石分別轉化為 3 粒火強化符石、3 粒水符石及 3 粒木符石。同時發動水、火及木屬性攻擊時，當前技能 CD 減少 2"
    ],
    "monsterId": "1515",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "聖行者 ‧ 佛劍分說",
    "activeName": ["萬諦一滅"],
    "activeDescription": [
      "隨機將 9 粒符石分別轉化為 3 粒木強化符石、3 粒水符石及 3 粒火符石。同時發動水、火及木屬性攻擊時，當前技能 CD 減少 2"
    ],
    "monsterId": "1516",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "七星之主 ‧ 天策真龍",
    "activeName": ["天龍泣"],
    "activeDescription": [
      "1 回合內，每消除一組光符石、暗符石或心符石時，個人追打自身屬性攻擊 1 次及回復 1500 點生命力，最多追打 15 次及回復 22500 點生命力"
    ],
    "monsterId": "1517",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "毀滅之神 ‧ 棄天帝",
    "activeName": ["神之滅"],
    "activeDescription": [
      "點選元素法陣上的 1 粒符石，並將該種符石引爆，以掉落暗強化符石。1 回合內，自身攻擊力 5 倍"
    ],
    "monsterId": "1518",
    "leaderName": "冥神萬鈞之怒 ‧ 強",
    "leaderDescription": "暗屬性神族攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "邪尊道之主 ‧ 妖后",
    "activeName": ["祅政之火"],
    "activeDescription": [
      "引爆心以外的符石並對敵方全體造成 20000 點暗屬性傷害，此傷害無視防禦力；並提升妖精類攻擊力：引爆的符石愈多，妖精類攻擊力愈高，引爆 25 粒可達至最高 2 倍"
    ],
    "monsterId": "1519",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "六絃之首 ‧ 蒼",
    "activeName": ["怒海蒼流"],
    "activeDescription": [
      "光屬性攻擊力 1.5 倍及光屬性人類攻擊力 2 倍；效果持續至沒有首批消除所有光符石"
    ],
    "monsterId": "1520",
    "leaderName": "玄光怒嘯",
    "leaderDescription": "光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "煙螢夜瓏 ‧ 灼蘿",
    "activeName": ["熾烈之靈"],
    "activeDescription": [
      "火符石兼具 50% 心符石效果，效果持續至沒有消除火符石 (效果持續期間技能不會冷卻)"
    ],
    "monsterId": "1521",
    "leaderName": "煙火龍舞",
    "leaderDescription": "火屬性及龍類攻擊力 2 倍；火屬性龍類攻擊力 4 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "日月巨狼 ‧ 芬爾厄",
    "activeName": ["噬狼吮血"],
    "activeDescription": [
      "引爆隊伍成員屬性以外的符石，以掉落屬性符石。1 回合內，將全隊對敵方造成傷害的 2.5% 轉化為生命力 (不計算主動技傷害)，最大為生命力等值的 50% (不能疊加)"
    ],
    "monsterId": "1522",
    "leaderName": "一念之間 ‧ 極",
    "leaderDescription": "減少一半移動符石時間，全隊攻擊力 5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "8★"
  },
  {
    "monsterName": "無盡夢境 ‧ 睡魔",
    "activeName": ["永恆幻夢"],
    "activeDescription": [
      "3 回合內，所有成員不能發動攻擊及所受傷害減少 95%。期間每回合回復 50% 總生命力 (需消除符石)"
    ],
    "monsterId": "1523",
    "leaderName": "暗黑之皇權",
    "leaderDescription": "暗屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "闇黑小妹",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1524",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "傭兵貓團長 ‧ 費利克斯",
    "activeName": ["靈石附魔 ‧ 幽魂"],
    "activeDescription": [
      "所有符石轉化為強化符石。1 回合內，所有符石兼具暗符石效果"
    ],
    "monsterId": "1525",
    "leaderName": "魔之本性 ‧ 強攻",
    "leaderDescription": "魔族攻擊力 3 倍，生命力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "冰盔大地精",
    "activeName": ["攻擊姿勢 ‧ 浪濤"],
    "activeDescription": [
      "心符石轉化為水符石，並將其中 1 粒水符石轉化為水強化符石"
    ],
    "monsterId": "1526",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "赤盔大地精",
    "activeName": ["攻擊姿勢 ‧ 熾燄"],
    "activeDescription": [
      "心符石轉化為火符石，並將其中 1 粒火符石轉化為火強化符石"
    ],
    "monsterId": "1527",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "碧盔大地精",
    "activeName": ["攻擊姿勢 ‧ 藤木"],
    "activeDescription": [
      "心符石轉化為木符石，並將其中 1 粒木符石轉化為木強化符石"
    ],
    "monsterId": "1528",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "耀盔大地精",
    "activeName": ["攻擊姿勢 ‧ 玄光"],
    "activeDescription": [
      "心符石轉化為光符石，並將其中 1 粒光符石轉化為光強化符石"
    ],
    "monsterId": "1529",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "闇盔大地精",
    "activeName": ["攻擊姿勢 ‧ 幽冥"],
    "activeDescription": [
      "心符石轉化為暗符石，並將其中 1 粒暗符石轉化為暗強化符石"
    ],
    "monsterId": "1530",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "冰藍愛莉絲",
    "activeName": ["水月 ‧ 猛擊"],
    "activeDescription": [
      "將 3 粒水符石轉化為水強化符石，並進行 10 次水屬性攻擊"
    ],
    "monsterId": "1531",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "赤紅瑪莉曼",
    "activeName": ["火影 ‧ 猛擊"],
    "activeDescription": [
      "將 3 粒火符石轉化為火強化符石，並進行 10 次火屬性攻擊"
    ],
    "monsterId": "1532",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "翠綠凱莉絲",
    "activeName": ["木葉 ‧ 猛擊"],
    "activeDescription": [
      "將 3 粒木符石轉化為木強化符石，並進行 10 次木屬性攻擊"
    ],
    "monsterId": "1533",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "金光安迪莉亞",
    "activeName": ["光華 ‧ 猛擊"],
    "activeDescription": [
      "將 3 粒光符石轉化為光強化符石，並進行 10 次光屬性攻擊"
    ],
    "monsterId": "1534",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "艷紫莉莉絲",
    "activeName": ["暗流 ‧ 猛擊"],
    "activeDescription": [
      "將 3 粒暗符石轉化為暗強化符石，並進行 10 次暗屬性攻擊"
    ],
    "monsterId": "1535",
    "leaderName": "人之精神",
    "leaderDescription": "人類生命力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "安德洛",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "1536",
    "leaderName": "流水之惑",
    "leaderDescription": "水屬性攻擊力 1.5 倍，妖精類攻擊力額外提升 3.5 倍。消除 4 種或以上符石時，該回合所受傷害減少 25%",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "綺香誘惑 ‧ 仙女座安德洛",
    "activeName": ["幻影流星"],
    "activeDescription": [
      "消除屬性符石時，個人追打與消除符石屬性相同的攻擊各 1 次。效果持續至沒有消除 3 種或以上的屬性符石"
    ],
    "monsterId": "1537",
    "leaderName": "流水之惑",
    "leaderDescription": "水屬性攻擊力 1.5 倍，妖精類攻擊力額外提升 3.5 倍。消除 4 種或以上符石時，該回合所受傷害減少 25%",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "珀耳修",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "1538",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "譴責罪惡 ‧ 英仙座珀耳修",
    "activeName": ["赤火之靈"],
    "activeDescription": [
      "光及暗符石轉化為火神族符石，並將水及木符石轉化為心符石"
    ],
    "monsterId": "1539",
    "leaderName": "燄之化境",
    "leaderDescription": "火屬性攻擊力 4 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "斯克勒",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "1540",
    "leaderName": "神魅殺勢",
    "leaderDescription": "隊伍中只有神族及妖精類成員時，全隊攻擊力 3.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "宿命扭轉 ‧ 蛇夫座斯克勒",
    "activeName": ["蛇影靈動"],
    "activeDescription": [
      "15 秒內，可任意移動符石而不會發動消除。若隊伍中只有神族及妖精類成員時，1 回合內全隊攻擊力 2 倍"
    ],
    "monsterId": "1541",
    "leaderName": "神魅殺勢",
    "leaderDescription": "隊伍中只有神族及妖精類成員時，全隊攻擊力 3.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "米堤與波子",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "1542",
    "leaderName": "神聖之強權 ‧ 獸",
    "leaderDescription": "光屬性攻擊力 2 倍及回復力 1.5 倍；光屬性獸類攻擊力 3.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "斷災解危‧ 大犬與小犬座",
    "activeName": ["月影強念"],
    "activeDescription": [
      "光及暗符石轉化為強化符石。若隊伍中有 3 個或以上的獸類成員時，將強化符石轉化為獸族符石"
    ],
    "monsterId": "1543",
    "leaderName": "神聖之強權 ‧ 獸",
    "leaderDescription": "光屬性攻擊力 2 倍及回復力 1.5 倍；光屬性獸類攻擊力 4 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "琳叩斯",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "1544",
    "leaderName": "百獸同盟",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "危命獵殺 ‧ 天貓座琳叩斯",
    "activeName": ["天降夜露"],
    "activeDescription": ["1 回合內，移動符石後首批掉落的符石必定為暗符石"],
    "monsterId": "1545",
    "leaderName": "紫魅斷魂 ‧ 強",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 5 倍及生命力 1.2 倍。每消除 3 種或以上符石時 (不計重複)，掉落 1 粒暗獸族強化符石",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "希波呂",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "1546",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "希望之車‧ 御夫座希波呂",
    "activeName": ["星靈結界"],
    "activeDescription": [
      "1 回合內，根據累積戰鬥回合數多寡減少所受傷害，每 1 回戰鬥回合數可減少 12.5% 所受傷害，累積 8 回戰鬥回合數最多可減少 100% 傷害。發動技能後會將累積戰鬥回合數重置"
    ],
    "monsterId": "1547",
    "leaderName": "燄之化境",
    "leaderDescription": "火屬性攻擊力 4 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "拉冬",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "1548",
    "leaderName": "龍之嗔怒",
    "leaderDescription": "龍類攻擊力 3 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "血染黑白 ‧ 天龍座拉冬",
    "activeName": ["追魂噬"],
    "activeDescription": [
      "隊伍中攻擊力最高 (最左方) 的 1 個龍類成員追打暗屬性攻擊 2 次，效果持續至該龍類成員沒有發動攻擊"
    ],
    "monsterId": "1549",
    "leaderName": "真龍血契",
    "leaderDescription": "龍類攻擊力 4 倍及增加 180 點回復力",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "奧菲斯",
    "activeName": ["反戈一擊"],
    "activeDescription": ["對單一敵人造成 500 點無屬性傷害，此傷害無視防禦力"],
    "monsterId": "1550",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "決裂斷章 ‧ 天琴座奧菲斯",
    "activeName": ["靈化術"],
    "activeDescription": ["隨機將 4 至 7 粒符石轉化為心強化符石"],
    "monsterId": "1551",
    "leaderName": "螢之化境",
    "leaderDescription": "光屬性攻擊力 4 倍及回復力 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "不破護行 ‧ 武仙座海格力斯",
    "activeName": ["冰凌激射"],
    "activeDescription": [
      "1 回合內，所有符石兼具水符石效果；同時消除水、光及心符石時，自身以外所有水屬性成員的主動技能 CD 減少 2"
    ],
    "monsterId": "1552",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "命之真意 ‧ 獵戶座俄里翁",
    "activeName": ["火屑漫天"],
    "activeDescription": [
      "1 回合內，火屬性攻擊力 1.5 倍及延長移動符石時間至 8 秒。首批消除全部火符石時，下回合隨機將符石轉化為火符石，直至場上有 12 粒火符石為止"
    ],
    "monsterId": "1553",
    "leaderName": "熾燄怒嘯",
    "leaderDescription": "火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "信守諾言 ‧ 天兔座球球",
    "activeName": ["席捲之幽冥"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍；每首批消除 1 組暗以外的符石，必定掉落 2 粒暗符石"
    ],
    "monsterId": "1554",
    "leaderName": "幽冥怒嘯",
    "leaderDescription": "暗屬性攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "疾馳傳訊 ‧ 天馬座珀伽索斯",
    "activeName": ["暴烈之鎧"],
    "activeDescription": [
      "自身攻擊力 3 倍，每回合扣除 20% 總生命力，並在每回合發動攻擊後提升自身攻擊力 1 倍 (需要消除符石)，最大可提升至 8 倍。效果會在再次發動此技能或死亡後消失"
    ],
    "monsterId": "1555",
    "leaderName": "百獸同盟",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "無知的天真 ‧ 海豚座絲諾",
    "activeName": ["海之盟誓"],
    "activeDescription": [
      "每回合移動符石前，出現隨機 4 至 6 的連擊 (Combo) 數，當達成指定連擊 (Combo) 時(只計算首批消除的符石)，水屬性攻擊力 2 倍及回復 5000 點生命力，效果持續至沒有達成指定連擊 (Combo) 數目"
    ],
    "monsterId": "1556",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "優雅滑行 ‧ 天鵝座涅墨西斯",
    "activeName": ["曼妙的旋律"],
    "activeDescription": [
      "自身直行的符石轉化為強化符石，所轉化的種類符石兼具自身屬性符石效果；1 回合內，延長移動符石時間 2 秒"
    ],
    "monsterId": "1557",
    "leaderName": "百獸同盟",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "輝翼遨遊 ‧ 鳳凰座科爾武",
    "activeName": ["三原歸一 ‧ 流燄"],
    "activeDescription": [
      "水、火及木符石轉化為強化符石。1 回合內，水符石及木符石兼具火符石效果"
    ],
    "monsterId": "1558",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "計算的善意‧ 長蛇座契布曼",
    "activeName": ["水霧瀰漫"],
    "activeDescription": [
      "1 回合內，水屬性攻擊力及回復力 1.5 倍；場上有其他附加效果時，則提升至 2.25 倍"
    ],
    "monsterId": "1559",
    "leaderName": "妖精之狂怒",
    "leaderDescription": "妖精類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "善良的強大 ‧巨爵座柏克",
    "activeName": ["穹天之光"],
    "activeDescription": [
      "3 回合內，暗符石的掉落機率降至 0，並將原有機率增加至光符石的掉落機率；此外，有一定機會掉落光人族符石"
    ],
    "monsterId": "1560",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "暗夜曙光 ‧ 烏鴉座卡蓮婭",
    "activeName": ["眷佑之翼"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 10 秒，同時暗符石兼具心符石效果；若隊伍中有 5 種屬性成員時，則暗符石兼具所有符石效果"
    ],
    "monsterId": "1561",
    "leaderName": "魔之狂怒",
    "leaderDescription": "魔族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "弗麗嘉",
    "activeName": ["天地之掌"],
    "activeDescription": [
      "隊長需為神族才可發動此技能：1 回合內，敵方全體轉為自身克制的屬性；效果期間全隊攻擊力 1.8 倍及必然延長移動符石時間 2 秒。若隊長為北歐神系列角色，回合結束時，自身技能 CD 減少 5"
    ],
    "monsterId": "1562",
    "leaderName": "神界之念",
    "leaderDescription": "隊伍中只有神族成員時：全隊攻擊力 5 倍；隊伍中有 5 種屬性成員時，全隊攻擊力及回復力額外提升 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "眾心所牽 ‧ 凱拉",
    "activeName": ["援之寄意"],
    "activeDescription": [
      "自身不能發動攻擊；暗符石兼具 50% 心符石效果，並將移動符石時觸碰的暗符石轉化為神族符石；隊伍中的「不赦惡神 ‧ 洛基」、「亡靈蝕骨 ‧ 洛基」及「罪愆篡改 · 洛基」追打暗屬性攻擊 1 次 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉"
    ],
    "monsterId": "1563",
    "leaderName": "冥神萬鈞之怒 ‧ 強",
    "leaderDescription": "暗屬性神族攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "源生混沌 ‧ 倪克斯",
    "activeName": ["混沌退散"],
    "activeDescription": [
      "對敵方全體施放印記，並將所有符石轉化為五屬符石。印記生效期間，將黑白符石變回原來色調，並必然延長移動符石時間 3 秒"
    ],
    "monsterId": "1564",
    "leaderName": "妖精之狂怒",
    "leaderDescription": "妖精類攻擊力 2.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "銘黃金閃 ‧ 萊昂內爾",
    "activeName": ["淨世滅靈"],
    "activeDescription": [
      "消除所有附加效果；並直接引爆場上所有心符石，以掉落強化符石"
    ],
    "monsterId": "1565",
    "leaderName": "轟烈之光",
    "leaderDescription": "全隊攻擊力 3 倍，隊伍中每 1 種屬性成員發動攻擊時，個人追打自身攻擊力 1.5 倍的光屬性攻擊 1 次；首批消除 5 種屬性符石時，自身攻擊無視全體敵人的防禦力",
    "attribute": "光",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "強拳少年",
    "activeName": ["吃肉饅"],
    "activeDescription": [
      "解除所有水屬性成員被鎖的技能 (此技能無視封鎖技能)，並有 75% 機率完全回復生命力"
    ],
    "monsterId": "1566",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "暴走少女",
    "activeName": ["雷光拳"],
    "activeDescription": [
      "光符石及自身所在隊伍欄直行的符石轉化為光強化符石；1 回合內，自身攻擊力 5 倍"
    ],
    "monsterId": "1567",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "鐵拳漢子",
    "activeName": ["鳳凰天舞腳"],
    "activeDescription": [
      "1 回合內，移動符石所觸碰的符石轉化為人類符石；並以 30% 自身攻擊力追打 20 次木屬性傷害"
    ],
    "monsterId": "1568",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "狼牙流氓",
    "activeName": ["能量噴泉"],
    "activeDescription": [
      "1 回合內，水、暗及心符石兼具光符石效果；個人追打光屬性攻擊 3 次"
    ],
    "monsterId": "1569",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "濃妝高中生",
    "activeName": ["閃光水晶波 ‧ 水晶超射"],
    "activeDescription": [
      "人類攻擊力 1.3 倍及減少 30% 所受傷害，持續 4 回合；期間若首批同時消除 5 種屬性符石時，人類攻擊力提升至 2 倍及中止持續效果"
    ],
    "monsterId": "1570",
    "leaderName": "人類之力",
    "leaderDescription": "人類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "龍拳少年 ‧ 椎拳崇",
    "activeName": ["吃肉饅"],
    "activeDescription": [
      "解除所有水屬性成員被鎖的技能 (此技能無視封鎖技能)，並有 75% 機率完全回復生命力"
    ],
    "monsterId": "1571",
    "leaderName": "全力格鬥",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，人類攻擊力 3.5 倍；生命力全滿時，人類攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "烈陽赤炎 ‧ 草薙京",
    "activeName": ["最終決戰奧義 ‧ 無式"],
    "activeDescription": [
      "MAX 版 裏百八式 ‧ 大蛇薙\n每次只能選取 1 個效果。\n效果1：最終決戰奧義 ‧ 無式：引爆隊伍成員屬性以外的符石，以掉落強化符石。1 回合內，自身攻擊力 1.5 倍，個人追打火屬性攻擊 4 次\n效果2：MAX 版 裏百八式 ‧ 大蛇薙：自身進入儲力狀態，每回合提升自身攻擊力 3 倍，最大可提升至 9 倍，效果持續至沒有消除一組 6 粒或以上的火符石。發動此技能時需要儲滿龍脈儀及該回合不能發動龍刻脈動"
    ],
    "monsterId": "1572",
    "leaderName": "時之格鬥術",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 3.5 倍，及必然延長移動符石時間 1 秒；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒與該直行成員屬性相同的符石",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "熱血蹴拳王 ‧ 金家藩",
    "activeName": ["鳳凰天舞腳"],
    "activeDescription": [
      "1 回合內，移動符石所觸碰的符石轉化為人類符石；並以 30% 自身攻擊力追打 20 次木屬性傷害"
    ],
    "monsterId": "1573",
    "leaderName": "全力格鬥",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，人類攻擊力 3.5 倍；生命力全滿時，人類攻擊力額外提升 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "雷光美獸 ‧ 二階堂紅丸",
    "activeName": ["雷光拳"],
    "activeDescription": [
      "光符石及自身所在隊伍欄直行的符石轉化為光強化符石；1 回合內，自身攻擊力 5 倍"
    ],
    "monsterId": "1574",
    "leaderName": "絕殺格鬥術",
    "leaderDescription": "人類攻擊力 3 倍，隊伍中有 3 個或以上拳皇合作角色成員時，直行消除一組 5 粒或以上符石時 (只計算首批消除的符石)，自身攻擊力額外提升 2 倍，若使用相同的隊長及戰友時，自身攻擊力額外提升至 4 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "紫藍之月 ‧ 八神庵",
    "activeName": ["裏百八式 ‧ 八酒杯"],
    "activeDescription": [
      "MAX 版 禁千貳百拾壹式 ‧ 八稚女\n每次只能選取 1 個效果。\n效果1：裏百八式 ‧ 八酒杯：敵方全體點燃，使受影響目標無法行動並轉為暗屬性，持續 2 回合，但效果會因受到攻擊而消失。2 回合內，人類攻擊力提升 2.5 倍\n效果2：MAX 版 禁千貳百拾壹式 ‧ 八稚女：1 回合內，將全體敵人的攻擊力及防禦力減至 0；自身攻擊力提升 1.5 倍，並以 30% 自身攻擊力追打 8 次暗屬性攻擊。所有成員攻擊後，再對全體敵人追打 1 次自身攻擊力 30 倍的暗屬性傷害。發動此技能時需要儲滿龍脈儀及該回合不能發動龍刻脈動"
    ],
    "monsterId": "1575",
    "leaderName": "連擊格鬥術",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 3 倍；消除 6 連擊 (Combo) 或以上時額外提升 1.5 倍攻擊力；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒與該直行成員屬性相同的符石",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "忍術的傳承 ‧ 不知火舞",
    "activeName": ["超必殺忍蜂"],
    "activeDescription": [
      "MAX 版  超必殺忍蜂\n每次只能選取 1 個效果。\n效果1：超必殺忍蜂：將所有符石轉化為固定數量的火強化、木強化、暗強化及心強化符石\n效果2：MAX 版 超必殺忍蜂：將所有符石轉化為固定數量及位置的火強化、木強化、暗強化及心強化符石。發動此技能時需要儲滿龍脈儀及該回合不能發動龍刻脈動"
    ],
    "monsterId": "1576",
    "leaderName": "焰之格鬥術",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 3.5 倍，並必然延長移動符石時間 1 秒；火符石兼具 50% 其他屬性符石效果 (可疊加)；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒與該直行成員屬性相同的符石",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "餓狼狂嚎 ‧ 泰利波格",
    "activeName": ["能量噴泉"],
    "activeDescription": [
      "1 回合內，水、暗及心符石兼具光符石效果；個人追打光屬性攻擊 3 次"
    ],
    "monsterId": "1577",
    "leaderName": "格鬥之金光",
    "leaderDescription": "人類攻擊力 3 倍，隊伍中有 3 個或以上拳皇合作角色成員時，火符石及木符石兼具 50% 光符石效果 (可疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "超能女高中生 ‧ 麻宮雅典娜",
    "activeName": ["閃光水晶波 ‧ 水晶超射"],
    "activeDescription": [
      "人類攻擊力 1.3 倍及減少 30% 所受傷害，持續 4 回合；期間若首批同時消除 5 種屬性符石時，人類攻擊力提升至 2 倍及中止持續效果"
    ],
    "monsterId": "1578",
    "leaderName": "格鬥精神",
    "leaderDescription": "人類攻擊力 3 倍，隊伍中有 3 個或以上拳皇合作角色成員時，全隊攻擊力及回復力提升 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "萬物之念 ‧ 大蛇",
    "activeName": ["混"],
    "activeDescription": [
      "1 回合內，每消除一種屬性符石，必定掉落 6 粒水符石，消除 5 種可掉落最多 30 粒水符石"
    ],
    "monsterId": "1579",
    "leaderName": "格鬥之魂",
    "leaderDescription": "全隊攻擊力 2 倍，隊伍成員的屬性愈多，攻擊力提升愈多，最大提升至 4 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "虐殺交響曲 ‧ 路卡爾",
    "activeName": ["巨人壓殺"],
    "activeDescription": [
      "隨機將 2 直行的符石轉化為暗符石；1 回合內，該 2 直行所在隊伍欄成員的攻擊力提升：人類成員攻擊力 5 倍及非人類成員攻擊力 2.5 倍"
    ],
    "monsterId": "1580",
    "leaderName": "格鬥暗擊流",
    "leaderDescription": "暗屬性攻擊力 3.5 倍；消除 10 粒或以上的暗符石，暗屬性攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "八咫鏡之守護 ‧ 神樂千鶴",
    "activeName": ["裡面八拾五活 ‧ 零技之礎"],
    "activeDescription": [
      "水、光及心符石轉化為心強化符石。1 回合內，心符石兼具所有屬性符石效果"
    ],
    "monsterId": "1581",
    "leaderName": "八咫鏡之護",
    "leaderDescription": "隊長及戰友不相同時，全隊攻擊力 3.5 倍；消除 15 粒或以上的心符石時，全隊攻擊力額外提升 2.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "閃靈狩獵 ‧ 克里斯",
    "activeName": ["龍捲風擊"],
    "activeDescription": [
      "1 回合內，每消除 1 粒水符石，自身追打 1 次火屬性攻擊，消除 10 粒可追打最多 10 次。若消除 10 粒或以上的水強化符石，效果持續 2 回合"
    ],
    "monsterId": "1582",
    "leaderName": "格鬥激濤",
    "leaderDescription": "人類攻擊力 3 倍，隊伍中有 3 個或以上拳皇合作角色成員時，心符石兼具 50% 水符石效果 (可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "終極衝殺 ‧ 七枷社",
    "activeName": ["百萬大錘蒸汽"],
    "activeDescription": [
      "於移動符石並消除符石後，根據首批消除的連擊 (Combo) 數目增加相同的連擊 (Combo) 數目，效果持續至達成 15 連擊 (Combo) 或以上"
    ],
    "monsterId": "1583",
    "leaderName": "格鬥驚森",
    "leaderDescription": "人類攻擊力 3 倍，隊伍中有 3 個或以上拳皇合作角色成員時，心符石兼具 50% 木符石效果 (可疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "重力旋投 ‧ 舍露美",
    "activeName": ["舍露美嘉年華"],
    "activeDescription": [
      "對敵方全體施放印記，印記生效期間，全隊攻擊力 1.3 倍，敵人所受攻擊次數愈多，全隊攻擊力提升愈多，敵人受攻擊 15 次可達至最高 2.8 倍"
    ],
    "monsterId": "1584",
    "leaderName": "格鬥光芒",
    "leaderDescription": "人類攻擊力 3 倍，隊伍中有 3 個或以上拳皇合作角色成員時，心符石兼具 50% 光符石效果 (可疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "軍武傭兵 ‧ 莉安娜",
    "activeName": ["V 字殺手"],
    "activeDescription": [
      "1 回合內，敵方全體轉為火屬性，並「V 型」 轉化 10 個固定位置的符石為水符石"
    ],
    "monsterId": "1585",
    "leaderName": "獵人激濤",
    "leaderDescription": "水屬性攻擊力 3.5 倍，水屬性對人類目標的攻擊力額外提升 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "極藍震動 ‧ 果凍",
    "activeName": ["吞噬之藍"],
    "activeDescription": [
      "3 回合內，水屬性及妖精類攻擊力 1.5 倍；水屬性妖精攻擊力提升至 2.25 倍。發動技能時若生命力未滿，效果持續期間每回合回復 8000 點生命力"
    ],
    "monsterId": "1586",
    "leaderName": "妖精萬鈞之怒",
    "leaderDescription": "妖精類攻擊力 4 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "箭神在野 ‧ 后羿",
    "activeName": ["穿雲射日箭"],
    "activeDescription": [
      "1 回合內，自身追打木屬性攻擊 9 次，此回合每擊斃 1 個敵人，當前技能 CD 減少 1，最多可減少 5 CD"
    ],
    "monsterId": "1587",
    "leaderName": "人類之狂怒",
    "leaderDescription": "人類攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "致命糬兔",
    "activeName": ["暴力之魅"],
    "activeDescription": [
      "小幅提升暗符石掉落率；若隊伍中只有暗屬性獸類時，全隊攻擊力提升 1.5 倍，心符石的掉落機率降至 0，並將原有機率增加至暗符石的掉落機率 。效果持續至沒有消除暗符石"
    ],
    "monsterId": "1588",
    "leaderName": "暗獸之怒嘯",
    "leaderDescription": "暗屬性獸類攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "Terry",
    "activeName": ["遠目之擊 ‧ 光"],
    "activeDescription": ["對敵方全體造成 5 倍的光屬性傷害，此傷害無視防禦力"],
    "monsterId": "1589",
    "leaderName": "記憶碎片",
    "leaderDescription": "全隊攻擊力 3 倍，完成旅人的記憶副本中級或高級時，會額外掉落一個碎片",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "灼熱本能 ‧ K´",
    "activeName": ["熱力驅動"],
    "activeDescription": [
      "1 回合內，自身攻擊力 8 倍。回合結束時，自身及身旁的火屬性成員所在隊伍欄直行的符石轉化為火符石"
    ],
    "monsterId": "1590",
    "leaderName": "格鬥術",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒與該直行成員屬性相同的符石",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "瞬間凍結 ‧ 庫拉",
    "activeName": ["鑽石冰刃"],
    "activeDescription": [
      "將自身所在隊伍欄直行的符石轉化為水強化符石並儲滿龍脈儀。若龍脈儀已儲滿，更會凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 1 回合 (同一回合只能發動一次)"
    ],
    "monsterId": "1591",
    "leaderName": "格鬥激濤",
    "leaderDescription": "人類攻擊力 3 倍，隊伍中有 3 個或以上拳皇合作角色成員時，心符石兼具 50% 水符石效果 (可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "黑鐵凱爾文",
    "activeName": ["水波進擊"],
    "activeDescription": [
      "對敵方全體造成 3 倍水屬性傷害，若以此技能擊斃敵人，可即時再次發動此技能"
    ],
    "monsterId": "1592",
    "leaderName": "水之精神",
    "leaderDescription": "水屬性生命力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "黑鐵沃爾特",
    "activeName": ["火焰進擊"],
    "activeDescription": [
      "對敵方全體造成 3 倍火屬性傷害，若以此技能擊斃敵人，可即時再次發動此技能"
    ],
    "monsterId": "1593",
    "leaderName": "火之精神",
    "leaderDescription": "火屬性生命力 1.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "黑鐵布賴恩",
    "activeName": ["大地進擊"],
    "activeDescription": [
      "對敵方全體造成 3 倍木屬性傷害，若以此技能擊斃敵人，可即時再次發動此技能"
    ],
    "monsterId": "1594",
    "leaderName": "木之精神",
    "leaderDescription": "木屬性生命力 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "黑鐵內森",
    "activeName": ["閃光進擊"],
    "activeDescription": [
      "對敵方全體造成 3 倍光屬性傷害，若以此技能擊斃敵人，可即時再次發動此技能"
    ],
    "monsterId": "1595",
    "leaderName": "光之精神",
    "leaderDescription": "光屬性生命力 1.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "黑鐵亞歷克斯",
    "activeName": ["暗影進擊"],
    "activeDescription": [
      "對敵方全體造成 3 倍暗屬性傷害，若以此技能擊斃敵人，可即時再次發動此技能"
    ],
    "monsterId": "1596",
    "leaderName": "暗之精神",
    "leaderDescription": "暗屬性生命力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "3★"
  },
  {
    "monsterName": "撲克國王 ‧ 派斯頓",
    "activeName": ["執傲之燄"],
    "activeDescription": [
      "1 回合內，暗符石兼具火符石效果；每消除 1 組屬性符石 (只計算首批消除的符石)，自身追打火屬性攻擊 1 次。發動技能時，隊伍中撲克女皇 ‧ 茱迪思的主動技能 CD 減少 5"
    ],
    "monsterId": "1597",
    "leaderName": "臣之列陣",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 2 倍。只有 3 種種族成員時，全隊攻擊力額外提升 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "撲克騎士 ‧ 奧吉爾",
    "activeName": ["狂之森"],
    "activeDescription": [
      "1 回合內，火符石兼具木符石效果；自身攻擊力 4 倍。發動技能時，隊伍中撲克國王 ‧ 派斯頓的主動技能 CD 減少 5"
    ],
    "monsterId": "1598",
    "leaderName": "臣之列陣",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 2 倍。只有 3 種種族成員時，全隊攻擊力額外提升 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "撲克女皇 ‧ 茱迪思",
    "activeName": ["清靈化幽 ‧ 唯我"],
    "activeDescription": [
      "1 回合內，木符石兼具暗符石效果；心符石轉化為暗符石。發動技能時，隊伍中撲克騎士 ‧ 奧吉爾的主動技能 CD 減少 5"
    ],
    "monsterId": "1599",
    "leaderName": "臣之列陣",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 2 倍。只有 3 種種族成員時，全隊攻擊力額外提升 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "袋中瘋頭",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1600",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "矢車菊",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1601",
    "leaderName": "妖嬈之藍",
    "leaderDescription": "水屬性及妖精類攻擊力 4.5 倍，消除 2 組或以上的水符石時，攻擊力提升至 5 倍。消除心符石時，水屬性及妖精類攻擊力額外提升 1.5 倍。沒有消除水符石時 (只計算首批消除的符石)，所受傷害減少 35%",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "綻放榮耀 ‧ 矢車菊",
    "activeName": ["逆我盡滅"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.3 倍，並直接引爆場上所有非克制敵人屬性的屬性符石，以掉落敵人屬性以外的符石；若隊伍中只有妖精類成員時，1 回合內，連擊 (Combo) 數目增加 8"
    ],
    "monsterId": "1602",
    "leaderName": "妖嬈之藍",
    "leaderDescription": "水屬性及妖精類攻擊力 4.5 倍，消除 2 組或以上的水符石時，攻擊力提升至 5 倍。消除心符石時，水屬性及妖精類攻擊力額外提升 1.5 倍。沒有消除水符石時 (只計算首批消除的符石)，所受傷害減少 35%",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "櫻",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1603",
    "leaderName": "櫻之花雨",
    "leaderDescription": "妖精類攻擊力 1.3 倍；火及心符石兼具 25% 其他屬性符石效果 (可疊加)。2 粒火或心符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)。隊伍回復力愈高，全隊攻擊力額外提升愈多，隊伍回復力達 3000 可提升 1.5 倍，4000 可達至最大 2 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "閉鎖心蕾 ‧ 櫻",
    "activeName": ["幻櫻花海 ‧ 魅"],
    "activeDescription": [
      "將火及心符石轉化為妖族符石。根據本回合的連擊 (Combo) 數目，下回合開始時將火及心以外的符石，轉化為該數目等值的火強化符石"
    ],
    "monsterId": "1604",
    "leaderName": "櫻之花雨",
    "leaderDescription": "妖精類攻擊力 1.3 倍；火及心符石兼具 25% 其他屬性符石效果 (可疊加)。2 粒火或心符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)。隊伍回復力愈高，全隊攻擊力額外提升愈多，隊伍回復力達 3000 可提升 1.5 倍，4000 可達至最大 2 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "水仙",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1605",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "凋零痛愛 ‧ 水仙",
    "activeName": ["幻滅之恨"],
    "activeDescription": [
      "隊伍中有 3 個或以上的屬性成員時，連擊 (Combo) 時攻擊力提升 30%，效果持續至自身沒有發動攻擊"
    ],
    "monsterId": "1606",
    "leaderName": "木之魅惑",
    "leaderDescription": "木屬性攻擊力 3 倍，木屬性妖精類攻擊力則 4 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "天堂鳥",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1607",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "折落驕傲 ‧ 天堂鳥",
    "activeName": ["斑斕盡化擊"],
    "activeDescription": [
      "1 回合內，每消除 3 粒心符石，以 3 倍自身攻擊力追打無屬性攻擊 1 次，消除 30 粒可追打最多 10 次"
    ],
    "monsterId": "1608",
    "leaderName": "光之魅惑",
    "leaderDescription": "光屬性攻擊力 3 倍，光屬性妖精類攻擊力則 4 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "薔薇",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1609",
    "leaderName": "魅豔之刺",
    "leaderDescription": "妖精類攻擊力 4.5 倍，心符石兼具 25% 所有屬性符石效果 (可疊加)",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "戀慕瀰漫 ‧ 薔薇",
    "activeName": ["如一之靈"],
    "activeDescription": [
      "點選一橫行的符石，並將該橫行的符石轉化為心強化符石；1 回合內，妖精類攻擊力 2 倍"
    ],
    "monsterId": "1610",
    "leaderName": "魅豔之刺",
    "leaderDescription": "妖精類攻擊力 4.5 倍，心符石兼具 25% 所有屬性符石效果 (可疊加)",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "鈴蘭",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1611",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "夢想寄生 ‧ 鈴蘭",
    "activeName": ["酷藍之意"],
    "activeDescription": [
      "將自身及身旁的水屬性或妖精類成員，其所在隊伍欄直行的符石轉化為 3 粒水符石及 2 粒心符石"
    ],
    "monsterId": "1612",
    "leaderName": "水之魅惑",
    "leaderDescription": "水屬性攻擊力 3 倍，水屬性妖精類攻擊力則 4 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "芙蓉",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1613",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "執念吐播 ‧ 芙蓉",
    "activeName": ["塗靈之瓣"],
    "activeDescription": [
      "將場上的心符石轉化為所屬隊伍欄直行成員屬性的強化符石。發動技能時，若我方生命力為 1 或全滿，當前技能 CD 減少 3"
    ],
    "monsterId": "1614",
    "leaderName": "火之魅惑",
    "leaderDescription": "火屬性攻擊力 3 倍，火屬性妖精類攻擊力則 4 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "風信子",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1615",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "殘次孤獨 ‧ 風信子",
    "activeName": ["嗜毒之靈"],
    "activeDescription": [
      "「殘次孤獨 ‧ 風信子」以外所有妖精類成員的主動技能 CD 減少 1。生命力全滿時，將自身所在隊伍欄直行的符石轉化為暗符石，反之，則將自身所在隊伍欄的符石轉化為心符石"
    ],
    "monsterId": "1616",
    "leaderName": "暗之魅惑",
    "leaderDescription": "暗屬性攻擊力 3 倍，暗屬性妖精類攻擊力則 4 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "捕食惡意 ‧ 食人花",
    "activeName": ["吞噬之燄"],
    "activeDescription": [
      "火符石轉化為火強化符石。1 回合內，消除 2 組或以上的火符石時，火屬性攻擊力 2.5 倍，消除火符石的組數愈多，火屬性攻擊力提升愈多，消除 4 組可達至最大 3.5 倍"
    ],
    "monsterId": "1617",
    "leaderName": "熾燄怒嘯",
    "leaderDescription": "火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "枯旱遺志 ‧ 含羞草",
    "activeName": ["摧滅 ‧ 無聲"],
    "activeDescription": [
      "1 回合內，所受傷害減少 50%；全隊攻擊力 1.5 倍，妖精攻擊力則提升至 2 倍。回合結束時，若我方生命力為 50% 或以上，當前技能 CD 減少 5"
    ],
    "monsterId": "1618",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "憎恨蓬勃 ‧ 罌粟",
    "activeName": ["甜膩的毒汁"],
    "activeDescription": [
      "全隊攻擊力 2 倍，每移動 1 步，扣除 1% 總生命力 (最多扣至 1 血)。效果會在關閉此技能或死亡後消失"
    ],
    "monsterId": "1619",
    "leaderName": "幽冥怒嘯",
    "leaderDescription": "暗屬性攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "慈愛紮根 ‧ 千歲蘭",
    "activeName": ["王之恩澤"],
    "activeDescription": [
      "1 回合內，發動技能時攻擊力基值為 1500 以下的成員，自身攻擊力 4 倍；攻擊力基值為 1500 或以上的成員則追打暗屬性攻擊 1 次"
    ],
    "monsterId": "1620",
    "leaderName": "蓄勢之力 ‧ 木",
    "leaderDescription": "全隊回復力 1.5 倍；每回合移動符石的時間愈長，木屬性攻擊力愈高及全隊回復力愈低，剩餘移動符石時間為 0 時，木屬性攻擊力 4.5 倍及全隊回復力變 0",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "灌溉盎然 ‧ 時鐘藤",
    "activeName": ["屠化之喚"],
    "activeDescription": [
      "1 回合內，隊伍成員的種族愈少，全隊攻擊力及回復力愈高，只有 1 個種族成員可達至最大 2.2 倍。使用後有一定機會使當前技能 CD 變為 0"
    ],
    "monsterId": "1621",
    "leaderName": "妖精萬鈞之怒",
    "leaderDescription": "妖精類攻擊力 4 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "挺拔固守 ‧ 仙人掌",
    "activeName": ["勇武之刺"],
    "activeDescription": [
      "消除的心符石愈多，全隊攻擊力及回復力提升愈多，消除 8 粒心符石可提升至最大 2 倍；但受到的傷害提升 1.5 倍，效果持續至沒有消除心符石"
    ],
    "monsterId": "1622",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "香甜殺意 ‧ 諾亞",
    "activeName": ["甜蜜殺機"],
    "activeDescription": [
      "1 回合內，隊伍中攻擊力最高 (最左方) 的光屬性成員攻擊力 10 倍"
    ],
    "monsterId": "1623",
    "leaderName": "魔族萬鈞之怒",
    "leaderDescription": "魔族攻擊力 4 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "絲堤",
    "activeName": ["神妖呼召"],
    "activeDescription": [
      "神族及妖精類成員所在隊伍欄直行的符石轉化為該直行成員的種族符石；1 回合內，消除神族符石時，全隊攻擊力 2 倍，消除妖族符石時，妖精類成員追打自身屬性攻擊 1 次"
    ],
    "monsterId": "1624",
    "leaderName": "深沉之藍",
    "leaderDescription": "水屬性攻擊力 3 倍及水屬性神族攻擊力 4.5 倍；妖精類生命力、攻擊力及回復力額外提升 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "玩具怨念",
    "activeName": ["符石解放 ‧ 水"],
    "activeDescription": ["直接引爆木符石造成敵全體水屬性傷害"],
    "monsterId": "1625",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "2★"
  },
  {
    "monsterName": "賢智泉源 ‧ 亞特蘭堤斯",
    "activeName": ["自由激濤"],
    "activeDescription": [
      "15 秒內，可任意移動符石而不會發動消除；首批消除所有水符石時，水屬性攻擊力 1.8 倍"
    ],
    "monsterId": "1626",
    "leaderName": "海淵凝念",
    "leaderDescription": "隊伍中只有水屬性成員時，全隊攻擊力 5 倍，每消除 1 粒水符石，回復 1.2% 總生命力 (受連擊 (Combo) 加乘影響)；若首批消除的連擊 (Combo) 數為單數時，所受傷害減少 30%；反之，全隊攻擊力額外提升 1.8 倍。若首批消除的連擊 (Combo) 數達至 6 或以上，可以同時獲得以上兩個效果",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "鯨吞眾生 ‧ 暴食史萊姆王",
    "activeName": ["時間凍結 ‧ 心相印"],
    "activeDescription": [
      "12 秒內，可任意移動符石而不會發動消除；1 回合內，所有掉落的心符石必定相連"
    ],
    "monsterId": "1627",
    "leaderName": "靈石附體 ‧ 延時",
    "leaderDescription": "心符石兼具 250% 所有屬性符石效果，並延長移動符石時間 1 秒",
    "attribute": "水",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "忠貞不渝 ‧ 利維坦",
    "activeName": ["破冰之濤"],
    "activeDescription": [
      "1 回合內，水屬性攻擊力 1.6 倍；隨機引爆場上 4 粒凍結符石，以掉落水強化符石"
    ],
    "monsterId": "1628",
    "leaderName": "魔怒嘯天 ‧ 水",
    "leaderDescription": "水屬性魔族攻擊力 3.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "狂妄傲氣 ‧ 貝爾芬格",
    "activeName": ["反弱之森"],
    "activeDescription": [
      "1 回合內，木屬性攻擊力 1.6 倍；隨機引爆場上 2 個種類的弱化符石，以掉落木強化符石"
    ],
    "monsterId": "1629",
    "leaderName": "魔怒嘯天 ‧ 木",
    "leaderDescription": "木屬性魔族攻擊力 3.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "奪寶炫光 ‧ 瑪門",
    "activeName": ["絕電之玄"],
    "activeDescription": [
      "1 回合內，光屬性攻擊力 1.6 倍；隨機引爆場上 3 粒被電擊的符石，以掉落光強化符石"
    ],
    "monsterId": "1630",
    "leaderName": "魔怒嘯天 ‧ 光",
    "leaderDescription": "光屬性魔族攻擊力 3.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "賢者羊駝",
    "activeName": ["水波轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍水屬性傷害"],
    "monsterId": "1631",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "鬥士羊駝",
    "activeName": ["火焰轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍火屬性傷害"],
    "monsterId": "1632",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "醫師羊駝",
    "activeName": ["大地轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍木屬性傷害"],
    "monsterId": "1633",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "牧師羊駝",
    "activeName": ["閃光轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍光屬性傷害"],
    "monsterId": "1634",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "舞者羊駝",
    "activeName": ["暗影轟擊"],
    "activeDescription": ["對敵方全體造成 15 倍暗屬性傷害"],
    "monsterId": "1635",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "烏波 ‧ 薩斯拉",
    "activeName": ["橫掃攻擊 ‧ 水"],
    "activeDescription": ["對敵方全體進行 3 次水屬性攻擊"],
    "monsterId": "1636",
    "leaderName": "龍之狂怒",
    "leaderDescription": "龍類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "自生之源 ‧ 烏波",
    "activeName": ["水龍之濤"],
    "activeDescription": [
      "1 回合內，水屬性及龍類攻擊力 1.6 倍，首批消除所有水符石時，則提升至 2 倍。技能發動回合若有擊斃敵人，回合結束時完全回復生命力"
    ],
    "monsterId": "1637",
    "leaderName": "噬血龍王 ‧ 強",
    "leaderDescription": "龍類攻擊力 2.5 倍，將龍類對敵方造成傷害的 10%  轉化為生命力 (不計算主動及隊長技傷害)，最大為生命力等值的 50% (不能疊加)",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "格赫羅斯",
    "activeName": ["橫掃攻擊 ‧ 火"],
    "activeDescription": ["對敵方全體進行 3 次火屬性攻擊"],
    "monsterId": "1638",
    "leaderName": "吞噬之慾",
    "leaderDescription": "魔族、龍類及獸類攻擊力 4 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "瘋癲夢界度 ‧ 格赫羅斯",
    "activeName": ["夢中結界"],
    "activeDescription": [
      "1 回合內，2 粒符石相連，即可發動消除，效果持續至消除一種符石達 30 粒"
    ],
    "monsterId": "1639",
    "leaderName": "吞噬之慾",
    "leaderDescription": "魔族、龍類及獸類攻擊力 4 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "伊波 ‧ 茲特爾",
    "activeName": ["橫掃攻擊 ‧ 木"],
    "activeDescription": ["對敵方全體進行 3 次木屬性攻擊"],
    "monsterId": "1640",
    "leaderName": "魔之狂怒 ‧ 木",
    "leaderDescription": "木屬性魔族攻擊力 2.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "邪惡源核 ‧ 伊波",
    "activeName": ["魔念擴散"],
    "activeDescription": [
      "1 回合內，隊長及戰友攻擊力 2.5 倍。若隊長及戰友都是魔族時，將兩者所在隊伍欄直行的符石分別轉化為兩者屬性的符石"
    ],
    "monsterId": "1641",
    "leaderName": "天魔道 ‧ 木",
    "leaderDescription": "木屬性攻擊力 2 倍，隊伍中每個魔族成員，扣除 5 %總生命力上限及增加木屬性攻擊力 0.5 倍，6 個魔族成員共扣除 30% 總生命力上限及可達至最高 5 倍木屬性攻擊力",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "道羅斯",
    "activeName": ["橫掃攻擊 ‧ 光"],
    "activeDescription": ["對敵方全體進行 3 次光屬性攻擊"],
    "monsterId": "1642",
    "leaderName": "創造之能",
    "leaderDescription": "光屬性龍類、光屬性獸類及光屬性妖精類生命力 1.5 倍及攻擊力 3.5 倍，並延長移動符石時間 1 秒；且消除 1 組 5 粒符石攻擊力額外提升 1.8 倍，消除 1 組符石的數目愈多，攻擊力額外提升愈多，消除 1 組 8 粒符石可提升至最大 2.4 倍攻擊力",
    "attribute": "光",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "悖論創造 ‧ 道羅斯",
    "activeName": ["力量之源"],
    "activeDescription": [
      "1 回合內，自身攻擊力 4 倍；連擊 (Combo) 數目增加 6；隊伍中每個龍類、獸類或妖精類成員將額外增加 1 連擊 (Combo)，最多可額外增加 6 連擊 (Combo)"
    ],
    "monsterId": "1643",
    "leaderName": "創造之能",
    "leaderDescription": "光屬性龍類、光屬性獸類及光屬性妖精類生命力 1.5 倍及攻擊力 3.5 倍，並延長移動符石時間 1 秒；且消除 1 組 5 粒符石攻擊力額外提升 1.8 倍，消除 1 組符石的數目愈多，攻擊力額外提升愈多，消除 1 組 8 粒符石可提升至最大 2.4 倍攻擊力",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "阿撒托斯",
    "activeName": ["橫掃攻擊 ‧ 暗"],
    "activeDescription": ["對敵方全體進行 3 次暗屬性攻擊"],
    "monsterId": "1644",
    "leaderName": "暗龍暴",
    "leaderDescription": "龍類生命力 1.3 倍及攻擊力 4 倍。每首批消除 1 連擊 (Combo)，自身直行掉落 1 粒暗強化符石。消除 10 粒或以上的暗符石時，全隊攻擊力額外提升 1.6 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "5★"
  },
  {
    "monsterName": "因果破壞 ‧ 阿撒托斯",
    "activeName": ["滅絕之噬"],
    "activeDescription": [
      "直接引爆場上所有符石，以掉落所屬隊伍欄直行龍類成員屬性的符石，龍類以外成員隊伍欄直行的符石則隨機掉落"
    ],
    "monsterId": "1645",
    "leaderName": "暗龍暴",
    "leaderDescription": "龍類生命力 1.3 倍及攻擊力 4 倍。每首批消除 1 連擊 (Combo)，自身直行掉落 1 粒暗強化符石。消除 10 粒或以上的暗符石時，全隊攻擊力額外提升 1.6 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "阿布霍斯",
    "activeName": ["橫掃攻擊 ‧ 水"],
    "activeDescription": ["對敵方全體進行 3 次水屬性攻擊"],
    "monsterId": "1646",
    "leaderName": "水之怒嘯 ‧ 獸",
    "leaderDescription": "水屬性攻擊力 2 倍，水屬性獸類攻擊力 3.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "救贖思考 ‧ 阿布霍斯",
    "activeName": ["思潮迸發"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2 倍；若首批消除相同連擊 (Combo) 數目的水符石及心符石，當前技能 CD 減少 5"
    ],
    "monsterId": "1647",
    "leaderName": "大海之強權 ‧ 獸",
    "leaderDescription": "水屬性攻擊力 2 倍及回復力 1.5 倍；水屬性獸類攻擊力 3.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "加塔諾托亞",
    "activeName": ["橫掃攻擊 ‧ 光"],
    "activeDescription": ["對敵方全體進行 3 次光屬性攻擊"],
    "monsterId": "1648",
    "leaderName": "光之怒嘯 ‧ 獸",
    "leaderDescription": "光屬性攻擊力 2 倍，光屬性獸類攻擊力 3.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "原初潔淨 ‧ 加塔諾托亞",
    "activeName": ["光芒創造"],
    "activeDescription": [
      "隊伍中每個光屬性成員扣除 15% 當前生命力，並將光屬性成員所在隊伍欄直行的屬性符石轉化為光強化符石"
    ],
    "monsterId": "1649",
    "leaderName": "神聖之強權 ‧ 獸",
    "leaderDescription": "光屬性攻擊力 2 倍及回復力 1.5 倍；光屬性獸類攻擊力 3.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "阿特拉克 ‧ 納克亞",
    "activeName": ["橫掃攻擊 ‧ 暗"],
    "activeDescription": ["對敵方全體進行 3 次暗屬性攻擊"],
    "monsterId": "1650",
    "leaderName": "暗之怒嘯 ‧ 獸",
    "leaderDescription": "暗屬性攻擊力 2 倍，暗屬性獸類攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "灰暗擴散 ‧ 阿特拉克",
    "activeName": ["誅殺之魅"],
    "activeDescription": [
      "將 3 粒符石轉化為暗獸族強化符石 (心符石優先轉換)；若隊伍中只有暗獸類成員時，1 回合內強化符石效果提升 15%"
    ],
    "monsterId": "1651",
    "leaderName": "暗黑之強權 ‧ 獸",
    "leaderDescription": "暗屬性攻擊力 2 倍及回復力 1.5 倍；暗屬性獸類攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "存留的火舌 ‧ 弗塔古亞",
    "activeName": ["吞滅之燄"],
    "activeDescription": [
      "1 回合內，個人追打自身攻擊力 3 倍的攻擊 1 次。若身旁的成員同為火屬性或龍類，同得此效果"
    ],
    "monsterId": "1652",
    "leaderName": "熾燄怒嘯",
    "leaderDescription": "火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "容納侵蝕 ‧ 阿爾瓦撒",
    "activeName": ["採靈術"],
    "activeDescription": [
      "龍類成員對敵方所造成傷害的 2.5% 轉化為我方生命力，效果持續至回合結束時我方生命力全滿 (效果持續期間技能不會冷卻)。發動技能首回合，龍類攻擊力 1.5 倍"
    ],
    "monsterId": "1653",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "敗德的散播 ‧ 伊戈隆納克",
    "activeName": ["元素破滅"],
    "activeDescription": [
      "直接引爆場上所有符石並對敵方全體造成光屬性傷害；每直行首粒掉落的必定為光符石"
    ],
    "monsterId": "1654",
    "leaderName": "玄光怒嘯",
    "leaderDescription": "光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "統覺進化 ‧ 莫爾迪基安",
    "activeName": ["陰寒狂潮"],
    "activeDescription": [
      "隨機將 2 個魔族成員所在隊伍欄直行的符石轉化為水符石；2 回合內，全隊攻擊力 1.5 倍，且水屬性傷害可剋制木屬性目標"
    ],
    "monsterId": "1655",
    "leaderName": "浪濤萬鈞之怒",
    "leaderDescription": "水屬性攻擊力 4 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "元素連結 ‧ 塔維爾",
    "activeName": ["元素眷佑 ‧ 聖光"],
    "activeDescription": [
      "自身攻擊力 2 倍及個人追打光屬性攻擊 1 次，效果持續至自身沒有發動攻擊"
    ],
    "monsterId": "1656",
    "leaderName": "幽冥萬鈞之怒",
    "leaderDescription": "暗屬性攻擊力 4 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "世界線的觀測者 ‧ 伊塔庫亞",
    "activeName": ["元素加冕 ‧ 支配"],
    "activeDescription": [
      "3 回合內，發動技能及回合開始時將木符石轉化為神族符石；並將所有掉落的符石轉化為強化符石"
    ],
    "monsterId": "1657",
    "leaderName": "木之怒嘯 ‧ 獵魔",
    "leaderDescription": "木屬性攻擊力 3.5 倍，同時木屬性對魔族目標的攻擊力額外提升 2 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "祈願實現 ‧ 緋花",
    "activeName": ["一瞬奇蹟"],
    "activeDescription": [
      "1 回合內，發動技能時若有 3 個或以上的人類或妖精類成員攻擊力基值為 1500 或以下，全隊攻擊力 2.6 倍；反之，引爆場上光及暗符石，以掉落火及心符石。若隊伍中有「沉思的賢者．山特古羅斯」或「參透的賢者 ‧ 山特古羅斯」，可以同時獲得以上兩個效果"
    ],
    "monsterId": "1658",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "聖誕小妹",
    "activeName": ["聚首一隅 ‧ 火"],
    "activeDescription": ["隨機將 4 粒相連的符石轉化為火符石"],
    "monsterId": "1659",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "動力核心",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1660",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "光",
    "race": "進化素材",
    "star": "5★"
  },
  {
    "monsterName": "殼兵 ‧ 悍將",
    "activeName": ["種族符石 ‧ 浪濤"],
    "activeDescription": ["水符石轉化為自身種族符石，心符石轉化為水強化符石"],
    "monsterId": "1661",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "得道仙客",
    "activeName": ["種族符石 ‧ 熾燄"],
    "activeDescription": ["火符石轉化為自身種族符石，心符石轉化為火強化符石"],
    "monsterId": "1662",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "通天眼",
    "activeName": ["種族符石 ‧ 藤木"],
    "activeDescription": ["木符石轉化為自身種族符石，心符石轉化為木強化符石"],
    "monsterId": "1663",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "煥光仙女",
    "activeName": ["種族符石 ‧ 玄光"],
    "activeDescription": ["光符石轉化為自身種族符石，心符石轉化為光強化符石"],
    "monsterId": "1664",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "長耳妖鬼",
    "activeName": ["種族符石 ‧ 幽冥"],
    "activeDescription": ["暗符石轉化為自身種族符石，心符石轉化為暗強化符石"],
    "monsterId": "1665",
    "leaderName": "妖精之心",
    "leaderDescription": "妖精類生命力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "流沙河魔將 ‧ 沙僧",
    "activeName": ["加冕之卍"],
    "activeDescription": [
      "將所有符石轉化為固定數量及位置的心符石及自身屬性強化符石"
    ],
    "monsterId": "1666",
    "leaderName": "浪濤萬鈞之怒",
    "leaderDescription": "水屬性攻擊力 4 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "蓮花洞雙童 ‧ 金角與銀角",
    "activeName": ["兩儀加冕 ‧ 火"],
    "activeDescription": [
      "元素凝力\n每次只能選取 1 個效果。\n效果1：光及暗符石轉化為火強化符石\n效果2：1 回合內，隊伍成員的屬性愈多，全隊攻擊力愈高，4 種屬性可達至最大 3 倍"
    ],
    "monsterId": "1667",
    "leaderName": "熾燄萬鈞之怒",
    "leaderDescription": "火屬性攻擊力 4 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "天蓬使者 ‧ 豬八戒",
    "activeName": ["釘鈀之力"],
    "activeDescription": [
      "2 回合內，隨機 2 個成員的攻擊力提升：獸類成員攻擊力 5 倍及非獸類成員攻擊力 3 倍"
    ],
    "monsterId": "1668",
    "leaderName": "藤木萬鈞之怒",
    "leaderDescription": "木屬性攻擊力 4 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "白髏屍魔 ‧ 白骨精",
    "activeName": ["骷髏的加冕"],
    "activeDescription": [
      "龍類、獸類及妖精類成員所在隊伍欄直行的符石轉化為強化符石。1 回合內，每首批消除 5 粒強化符石，當前技能 CD 減少 1，首批消除 20 粒可減少最多 4 CD"
    ],
    "monsterId": "1669",
    "leaderName": "玄光萬鈞之怒",
    "leaderDescription": "光屬性攻擊力 4 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "盤絲洞主 ‧ 蜘蛛精",
    "activeName": ["暗黑魅網的戰場"],
    "activeDescription": [
      "2 回合內，敵方全體轉為光屬性，並提升暗屬性對光屬性目標的攻擊力。若敵人為人類、獸類或神族，自身攻擊力額外提升 3 倍"
    ],
    "monsterId": "1670",
    "leaderName": "幽冥萬鈞之怒",
    "leaderDescription": "暗屬性攻擊力 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "孫策",
    "activeName": ["流水追擊"],
    "activeDescription": ["1 回合內，個人追打水屬性攻擊 3 次"],
    "monsterId": "1671",
    "leaderName": "霸者盛勢 ‧ 靈之控",
    "leaderDescription": "延長移動符石時間 1 秒。隊伍中只有水屬性人類時，全隊攻擊力 4.5 倍；每消除 1 組符石額外計算多 1 連擊 (Combo)；屬性符石需 4 粒或以上相連才可發動消除；心符石 2 粒或以上相連即可發動消除",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "耿直理想家 ‧ 孫策",
    "activeName": ["驍雄之攻"],
    "activeDescription": [
      "1 回合內，連擊 (Combo) 數目愈高，自身攻擊力愈高，消除 10 連擊 (Combo) 可達至最大 15 倍"
    ],
    "monsterId": "1672",
    "leaderName": "霸者盛勢 ‧ 靈之控",
    "leaderDescription": "延長移動符石時間 1 秒。隊伍中只有水屬性人類時，全隊攻擊力 4.5 倍；每消除 1 組符石額外計算多 1 連擊 (Combo)；屬性符石需 4 粒或以上相連才可發動消除；心符石 2 粒或以上相連即可發動消除",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "祝融",
    "activeName": ["流燄追擊"],
    "activeDescription": ["1 回合內，個人追打火屬性攻擊 3 次"],
    "monsterId": "1673",
    "leaderName": "巾幗之燄",
    "leaderDescription": "隊伍中有 3 個或以上屬性成員時，全隊攻擊力 2.5 倍；火符石兼具 25% 其他屬性符石效果 (可疊加)。隊伍中有 3 個或以上人類成員時，人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "蟄伏魍魎 ‧ 祝融",
    "activeName": ["驍勇之力"],
    "activeDescription": [
      "每首批消除 3 種或以上的屬性符石可以累積 1 點蠻力，最多可累積 5 點。1 回合內，自身攻擊力 2.5 倍，發動此技能時的蠻力愈多，自身攻擊力提升愈多，最大 10 倍。發動技能後蠻力將重新累積"
    ],
    "monsterId": "1674",
    "leaderName": "巾幗之燄",
    "leaderDescription": "隊伍中有 3 個或以上屬性成員時，全隊攻擊力 2.5 倍；火符石兼具 25% 其他屬性符石效果 (可疊加)。隊伍中有 3 個或以上人類成員時，人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "陸遜",
    "activeName": ["流木追擊"],
    "activeDescription": ["1 回合內，個人追打木屬性攻擊 3 次"],
    "monsterId": "1675",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "爛漫術士 ‧ 陸遜",
    "activeName": ["自然之護"],
    "activeDescription": [
      "每首批消除 1 粒木符石可減少 6.25% 所受傷害，消除 12 粒可減少最多 75% 所受傷害，效果持續至沒有首批消除木符石。效果持續期間技能不會冷卻"
    ],
    "monsterId": "1676",
    "leaderName": "原野之守",
    "leaderDescription": "木屬性攻擊力 3 倍及人類回復力 2 倍；受到攻擊時，場上每粒木符石可減少  5% 所受傷害，最多可減少 30% 傷害 (減傷效果不可疊加)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "黃忠",
    "activeName": ["流光追擊"],
    "activeDescription": ["1 回合內，個人追打光屬性攻擊 3 次"],
    "monsterId": "1677",
    "leaderName": "暗靈附攻 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2 倍，同時暗符石及心符石兼具 50% 光符石效果",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "忠義無悔 ‧ 黃忠",
    "activeName": ["穿心箭"],
    "activeDescription": [
      "光屬性人類成員攻擊力減至 0，並將被減去攻擊力的 1.5 倍加入自身攻擊力 (效果會在再次發動此技能或死亡後消失)。此技能可隨時關閉，關閉時，當前技能 CD 減少 2"
    ],
    "monsterId": "1678",
    "leaderName": "暗靈附攻 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2 倍，同時暗符石及心符石兼具 50% 光符石效果",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "夏侯惇",
    "activeName": ["流影追擊"],
    "activeDescription": ["1 回合內，個人追打暗屬性攻擊 3 次"],
    "monsterId": "1679",
    "leaderName": "酷冷之殺意 ‧ 強",
    "leaderDescription": "隊伍中只有火、木及暗屬性成員時，全隊攻擊力 4 倍；任意消除火、木或暗符石達 9 粒或以上，全隊攻擊力額外提升 1.8 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "獨眼戰鬼 ‧ 夏侯惇",
    "activeName": ["反殺之狠"],
    "activeDescription": [
      "自身攻擊力 2.5 倍；每當敵人發動攻擊，下回合人類及魔族成員以 50% 自身攻擊力追打 1 次自身屬性攻擊。效果持續至首批消除 5 種屬性符石"
    ],
    "monsterId": "1680",
    "leaderName": "酷冷之殺意 ‧ 強",
    "leaderDescription": "隊伍中只有火、木及暗屬性成員時，全隊攻擊力 4 倍；任意消除火、木或暗符石達 9 粒或以上，全隊攻擊力額外提升 1.8 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "蔡文姬",
    "activeName": ["流水追擊"],
    "activeDescription": ["1 回合內，個人追打水屬性攻擊 3 次"],
    "monsterId": "1681",
    "leaderName": "火靈附攻 ‧ 水波",
    "leaderDescription": "水屬性攻擊力 2 倍，同時火符石及心符石兼具 50% 水符石效果",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "多舛才女 ‧ 蔡文姬",
    "activeName": ["三原漫布"],
    "activeDescription": [
      "將水、火及木符石轉化為人族符石，並引爆所有光、暗及心符石，以掉落水、火及木符石"
    ],
    "monsterId": "1682",
    "leaderName": "火靈附攻 ‧ 水波",
    "leaderDescription": "水屬性攻擊力 2 倍，同時火符石及心符石兼具 50% 水符石效果",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "孟獲",
    "activeName": ["流燄追擊"],
    "activeDescription": ["1 回合內，個人追打火屬性攻擊 3 次"],
    "monsterId": "1683",
    "leaderName": "木靈附攻 ‧ 火燄",
    "leaderDescription": "火屬性攻擊力 2 倍，同時木符石及心符石兼具 50% 火符石效果",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "愚者蠻王 ‧ 孟獲",
    "activeName": ["烈焰之志"],
    "activeDescription": [
      "所有符石隨機轉化為火符石及 2 種屬性符石 (優先轉換隊伍成員屬性符石)；1 回合內，其他屬性符石兼具 50% 火符石效果"
    ],
    "monsterId": "1684",
    "leaderName": "木靈附攻 ‧ 火燄",
    "leaderDescription": "火屬性攻擊力 2 倍，同時木符石及心符石兼具 50% 火符石效果",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "袁紹",
    "activeName": ["流光追擊"],
    "activeDescription": ["1 回合內，個人追打光屬性攻擊 3 次"],
    "monsterId": "1685",
    "leaderName": "暗靈附攻 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2 倍，同時暗符石及心符石兼具 50% 光符石效果",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "妄為紈絝 ‧ 袁紹",
    "activeName": ["人族戰略 ‧ 光"],
    "activeDescription": [
      "全隊回復力減少 50%；光屬性攻擊力 1.5 倍，當隊伍中只有人類成員時，光屬性攻擊力額外提升 1.3 倍 (效果會在關閉此技能或死亡後消失)"
    ],
    "monsterId": "1686",
    "leaderName": "暗靈附攻 ‧ 光明",
    "leaderDescription": "光屬性攻擊力 2 倍，同時暗符石及心符石兼具 50% 光符石效果",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "匠氣興霸 ‧ 甘寧",
    "activeName": ["水之鋒芒"],
    "activeDescription": [
      "隨機將 1 種屬性符石轉化為水符石；若轉化的符石數量比原有的水符石數量少， 1 回合內自身攻擊力 4 倍"
    ],
    "monsterId": "1687",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "號令羊駝 ‧ 馬超",
    "activeName": ["草原的力量"],
    "activeDescription": [
      "1 回合內，人類攻擊力 1.6 倍；隊伍中每多 1 個木屬性成員，額外增加效果持續 1 回合，最多可持續 6 回合"
    ],
    "monsterId": "1688",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "離經叛道 ‧ 張角",
    "activeName": ["毒水之泉"],
    "activeDescription": [
      "敵方全體中毒，每回合將受到施技者攻擊力的傷害，此傷害無視防禦力及屬性並持續到死亡。效果期間全隊攻擊力 1.6 倍，並延長移動符石時間至 15 秒"
    ],
    "monsterId": "1689",
    "leaderName": "玄光怒嘯",
    "leaderDescription": "光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "好運常在 ‧ 張遼",
    "activeName": ["奪魂鐮刃"],
    "activeDescription": [
      "隨機將 6 粒符石轉化為水人族符石；1 回合內，達成 6 連擊 (Combo) 或以上時，自身攻擊力 6 倍"
    ],
    "monsterId": "1690",
    "leaderName": "浪濤萬鈞之怒",
    "leaderDescription": "水屬性攻擊力 4 倍",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "老奸巨猾 ‧ 董卓",
    "activeName": ["順我者昌"],
    "activeDescription": [
      "1 回合內，本回合發動過技能的成員追打自身攻擊力 4 倍的暗屬性攻擊 1 次"
    ],
    "monsterId": "1691",
    "leaderName": "幽之化境",
    "leaderDescription": "暗屬性攻擊力 4 倍及回復力 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "刁潑巾幗 ‧ 關銀屏",
    "activeName": ["藤木交纏"],
    "activeDescription": [
      "心符石轉化為木強化符石；1 回合內，消除 1 組 4 粒或以上的木符石，全隊攻擊力提升，消除 4 粒提升 1.16 倍，消除 8 粒可提升至最大 1.8 倍"
    ],
    "monsterId": "1692",
    "leaderName": "木之怒嘯 ‧ 獵魔",
    "leaderDescription": "木屬性攻擊力 3.5 倍，同時木屬性對魔族目標的攻擊力額外提升 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "萬人敵 ‧ 關師傅",
    "activeName": ["三原利刃 ‧ 人族"],
    "activeDescription": [
      "1 回合內，消除符石後首 30 粒掉落的符石必定為水人族、火人族及木人族符石"
    ],
    "monsterId": "1693",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "疾速機械劍齒虎",
    "activeName": ["赤紅助力"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上時，自身及左旁的火屬性成員攻擊力 2.5 倍 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，所有符石轉化為強化符石"
    ],
    "monsterId": "1694",
    "leaderName": "盟友支援",
    "leaderDescription": "全隊攻擊力 3 倍；當隊伍中只有 2 個火屬性成員時，全隊攻擊力提升至 5 倍及生命力 2 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "三星拱照 ‧ 福祿壽",
    "activeName": ["嫩桃賜力"],
    "activeDescription": [
      "1 回合內，人類及神族攻擊力 1.5 倍，當前獲得的金幣數量愈多，攻擊力提升愈多，當前獲得 40000 金幣可提升至最大 2.5 倍"
    ],
    "monsterId": "1695",
    "leaderName": "富饒之約 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 3 倍；戰鬥中所獲得的金幣增加 75% (可疊加)",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "無感本心 ‧ 貝魯",
    "activeName": ["動力提升 ‧ 水"],
    "activeDescription": [
      "1 回合內，自身攻擊變為 160 萬水屬性傷害 (自身需發動攻擊)；自身行動值提升 20%"
    ],
    "monsterId": "1696",
    "leaderName": "全速前進 ‧ 水",
    "leaderDescription": "10 回合內，水屬性攻擊力 8 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "虛擬人性 ‧ 耶魯",
    "activeName": ["動力提升 ‧ 火"],
    "activeDescription": [
      "1 回合內，自身攻擊變為 160 萬火屬性傷害 (自身需發動攻擊)；自身行動值提升 20%"
    ],
    "monsterId": "1697",
    "leaderName": "全速前進 ‧ 火",
    "leaderDescription": "10 回合內，火屬性攻擊力 8 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "璀璨遺光 ‧ 小呼",
    "activeName": ["動力提升 ‧ 木"],
    "activeDescription": [
      "1 回合內，自身攻擊變為 160 萬木屬性傷害 (自身需發動攻擊)；自身行動值提升 20%"
    ],
    "monsterId": "1698",
    "leaderName": "全速前進 ‧ 木",
    "leaderDescription": "10 回合內，木屬性攻擊力 8 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "黝光萬丈 · 神皇宙斯",
    "activeName": ["元素結聚之力"],
    "activeDescription": [
      "電擊烙印\n每次只能選取 1 個效果。\n效果1：1 回合內，消除 15 粒或以上自身屬性符石，全隊攻擊力 2 倍\n效果2：心符石轉化為自身屬性神族符石"
    ],
    "monsterId": "1699",
    "leaderName": "元素防護",
    "leaderDescription": "所有屬性傷害減少 30%",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "浮游幸福 ‧ 青郎君",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1700",
    "leaderName": "治療之心",
    "leaderDescription": "每回合回復自身回復力 (需要消除符石)",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "笑看紅塵 ‧ 藍采和",
    "activeName": ["水月光華幻變 ‧ 強"],
    "activeDescription": [
      "2 回合內，移動符石時觸碰的火符石轉化為水強化符石，觸碰的暗符石轉化為光強化符石"
    ],
    "monsterId": "1701",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "傲骨仙蹤 ‧ 曹國舅",
    "activeName": ["傲視之燄"],
    "activeDescription": [
      "1 回合內，敵方全體點燃，使受影響目標無法行動並轉為火屬性；效果期間，無視全體敵人 80% 的防禦力"
    ],
    "monsterId": "1702",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "血植異足 ‧ 鐵拐李",
    "activeName": ["穿魂之力 ‧ 機械"],
    "activeDescription": [
      "木屬性及機械族攻擊力 1.8 倍，若發動技能時自身行動值達至 100%，攻擊力提升至 2.2 倍；隊伍中若有 3 個或以上機械族成員，必然延長移動符石時間 3 秒。效果會在進入下一層數 (Wave) 時消失"
    ],
    "monsterId": "1703",
    "leaderName": "奪魄之森",
    "leaderDescription": "妖精類及魔族以外的木屬性成員攻擊力 4 倍；所有成員對消除符石屬性相同的目標攻擊力提升 1.5 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "菡萏香銷 ‧ 何仙姑",
    "activeName": ["仙荷之力 ‧ 強"],
    "activeDescription": [
      "神族攻擊力 2 倍；每首批消除 1 組隊伍成員屬性符石或心符石時，將產生 1 粒神族強化符石，最多可產生 6 粒，效果持續至受到敵人攻擊"
    ],
    "monsterId": "1704",
    "leaderName": "八仙陣",
    "leaderDescription": "隊伍中有 3 個或以上八仙系列角色時，連擊 (Combo) 時攻擊力提升 125%；消除心符石時，全隊攻擊力額外提升 1.6 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "劍氣御神 ‧ 呂洞賓",
    "activeName": ["幽魂八卦陣"],
    "activeDescription": [
      "點選元素法陣上的 1 粒符石，並將該種符石引爆，以掉落暗神族強化符石。1 回合內，暗符石兼具 50% 其他屬性符石效果"
    ],
    "monsterId": "1705",
    "leaderName": "冥神 ‧ 符籙",
    "leaderDescription": "暗屬性及神族攻擊力 3.4 倍。消除 3 粒符石可額外提升 1.3 倍攻擊力，消除 15 粒可提升至最大 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "正陽真人 ‧ 鍾離權",
    "activeName": ["烈火鬥心"],
    "activeDescription": [
      "水符石轉化為火強化符石。1 回合內，所有成員對火屬性目標攻擊力提升 2 倍"
    ],
    "monsterId": "1706",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "玩心不盡 ‧ 韓湘子",
    "activeName": ["木葉同靈術"],
    "activeDescription": [
      "將 5 粒符石轉化為木神族強化符石 (心符石優先轉換)。1 回合內，每首批消除 1 粒神族符石，回復 3000 點生命力，首批消除 30 粒可回復最多 90000 點生命力"
    ],
    "monsterId": "1707",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "滄心童顏 ‧ 張果老",
    "activeName": ["八仙光華"],
    "activeDescription": [
      "1 回合內，自身攻擊力 9 倍 (攻擊力不可與其他成員共享)；技能發動回合若有擊斃敵人，「滄心童顏 ‧ 張果老」以外所有八仙系列成員的主動技能 CD 減少 2"
    ],
    "monsterId": "1708",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "燭龍",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1709",
    "leaderName": "火之治療",
    "leaderDescription": "火屬性回復力 1.5 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "魅惑他心 ‧ 白面狐狸",
    "activeName": ["惑靈術"],
    "activeDescription": [
      "2 回合內，可任意移動符石而不會發動消除；並將移動符石所觸碰的心符石轉化為妖族符石"
    ],
    "monsterId": "1710",
    "leaderName": "妖怒萬鈞 ‧ 絕命之力",
    "leaderDescription": "妖精類攻擊力 4 倍。消除妖族符石時，妖精類攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "磷火奪嬰 ‧ 姑獲鳥",
    "activeName": ["喪嬰血仇"],
    "activeDescription": [
      "自身攻擊力減至 0 及人類及魔族攻擊力 2.2 倍，效果持續至全隊沒有發動攻擊"
    ],
    "monsterId": "1711",
    "leaderName": "莫逆相伴 ‧ 魔",
    "leaderDescription": "隊伍中的魔族成員愈多，全隊攻擊力愈高，最大 3.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "躍然紙上 ‧ 無名",
    "activeName": ["斷魂 ‧ 戟濤"],
    "activeDescription": [
      "自身攻擊力 3 倍，場上有凍結符石時，攻擊力提升至 6 倍，效果持續至沒有消除水符石"
    ],
    "monsterId": "1712",
    "leaderName": "大海之強權",
    "leaderDescription": "水屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "神來之筆 ‧ 春香",
    "activeName": ["融冰之靈"],
    "activeDescription": [
      "1 回合內，凍結符石轉化為可消除的狀態，每消除 1 粒凍結符石，全隊攻擊力提升 0.2 倍及回復 3000 點生命力，消除 10 粒可提升至最大 3 倍攻擊力及回復 30000 點生命力"
    ],
    "monsterId": "1713",
    "leaderName": "大海之強權",
    "leaderDescription": "水屬性攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "妒犬搗蛋 ‧ 苟杳",
    "activeName": ["玄光化幽"],
    "activeDescription": [
      "光符石轉化為暗符石；1 回合內，每首批消除 1 組暗符石，當前技能 CD 減少 1，首批消除 3 組可減少最多 3 CD"
    ],
    "monsterId": "1714",
    "leaderName": "靈獸輔主",
    "leaderDescription": "當隊伍中只有人類及 2 個或以上獸類成員時，人類攻擊力 3.5 倍，獸類攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "門之鑰",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1715",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "火",
    "race": "進化素材",
    "star": "6★"
  },
  {
    "monsterName": "全知的支配者 ‧ 猶格索托斯",
    "activeName": ["元素掌控術 ‧ 全"],
    "activeDescription": [
      "隨機將 24 粒符石轉化為固定數量的水、火、木、光、暗及心符石；1 回合內，所有屬性符石兼具其他屬性符石效果"
    ],
    "monsterId": "1716",
    "leaderName": "元素逼力 ‧ 強",
    "leaderDescription": "消除符石的屬性愈多，全隊攻擊力愈高：消除 3 種屬性符石，全隊攻擊力 4 倍，消除 5 種屬性符石可達至 5 倍。消除 6 種符石時，全隊攻擊力可提升至最大 6 倍。所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)",
    "attribute": "火",
    "race": "魔族",
    "star": "8★"
  },
  {
    "monsterName": "心願彩蛋 ‧ 黃色小雞",
    "activeName": ["小雞的護佑"],
    "activeDescription": [
      "完全回復生命力；當隊伍中只有獸類成員時，1 回合內，所受傷害不會使你死亡"
    ],
    "monsterId": "1717",
    "leaderName": "光之怒嘯 ‧ 獸",
    "leaderDescription": "光屬性攻擊力 2 倍，光屬性獸類攻擊力 3.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "金果蛾龍",
    "activeName": ["橫掃攻擊 ‧ 光"],
    "activeDescription": ["對敵方全體進行 3 次光屬性攻擊"],
    "monsterId": "1718",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "燃火末日 ‧ 龐貝",
    "activeName": ["唯我傲臨 ‧ 三原結界"],
    "activeDescription": [
      "所有符石轉化為固定數量及位置的水強化、火強化及木強化符石。1 回合內，無視指定形狀盾"
    ],
    "monsterId": "1719",
    "leaderName": "滅族之燄",
    "leaderDescription": "火屬性及機械族攻擊力 4 倍。首批消除相同連擊 (Combo) 數目的水、火及木符石時，機械族成員以 50% 自身攻擊力追打自身屬性攻擊 1 次",
    "attribute": "火",
    "race": "機械族",
    "star": "7★"
  },
  {
    "monsterName": "機鎧昂揚 ‧ 貝塔",
    "activeName": ["機甲加冕"],
    "activeDescription": [
      "隨機 2 個機械族成員所在隊伍欄直行的符石轉化為強化符石。1 回合內，機械族成員的攻擊力及回復力 1.3 倍"
    ],
    "monsterId": "1720",
    "leaderName": "水浪 ‧ 驅動",
    "leaderDescription": "水屬性攻擊力 3.5 倍，水屬性機械族攻擊力 4 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "機鎧捨身 ‧ 艾普塞朗",
    "activeName": ["熾靈密佈"],
    "activeDescription": [
      "發動技能時，若我方生命力為 1 ，將場上的符石轉化為固定數量及位置的火強化及心強化符石；反之，最左方直行的符石轉化為火強化符石，最右方直行的符石轉化為心強化符石"
    ],
    "monsterId": "1721",
    "leaderName": "火焰 ‧ 驅動",
    "leaderDescription": "火屬性攻擊力 3.5 倍，火屬性機械族攻擊力 4 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "機鎧構想 ‧ 弗愛",
    "activeName": ["能源再生"],
    "activeDescription": [
      "每消除 1 種屬性符石，回復機械族成員 10% 總生命力，消除 5 種可回復最多機械族成員 50% 總生命力 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "1722",
    "leaderName": "木林 ‧ 驅動",
    "leaderDescription": "木屬性攻擊力 3.5 倍，木屬性機械族攻擊力 4 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "機鎧岑寂 ‧ 阿爾法",
    "activeName": ["雷電之槍"],
    "activeDescription": [
      "1 回合內，自身攻擊力 3 倍，隊伍中機械族成員愈多，自身攻擊力提升愈多，5 個機械族成員可提升至最大 5 倍"
    ],
    "monsterId": "1723",
    "leaderName": "光源 ‧ 驅動",
    "leaderDescription": "光屬性攻擊力 3.5 倍，光屬性機械族攻擊力 4 倍",
    "attribute": "光",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "機鎧叛離 ‧ 史納莎",
    "activeName": ["命懸一線的進擊"],
    "activeDescription": [
      "自身生命力扣至 1 (生命力為 1 時無法發動技能)。1 回合內，隊伍中攻擊力基值最高的 3 個機械族成員攻擊力 2.5 倍"
    ],
    "monsterId": "1724",
    "leaderName": "暗魄 ‧ 驅動",
    "leaderDescription": "暗屬性攻擊力 3.5 倍，暗屬性機械族攻擊力 4 倍",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "機鎧聯結 ‧ 貝塔與阿爾法",
    "activeName": ["機甲武裝加冕"],
    "activeDescription": [
      "機械族成員所在隊伍欄直行的符石轉化為強化符石。1 回合內，機械族成員的攻擊力及回復力 1.6 倍"
    ],
    "monsterId": "1725",
    "leaderName": "機械萬鈞之怒 ‧ 極",
    "leaderDescription": "機械族攻擊力 5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "不可能性現翼 ‧ 莫比烏斯",
    "activeName": ["反擊性穩定定向器"],
    "activeDescription": [
      "隨機將符石轉化為水強化符石，直至場上有 20 粒水強化符石為止。3 回合內，機械族、獸類及魔族攻擊力及回復力 2 倍"
    ],
    "monsterId": "1726",
    "leaderName": "彩虹的衝擊",
    "leaderDescription": "機械族攻擊力 4 倍，個人以 50% 攻擊力追打水、火、木及光屬性攻擊各 1 次。消除 10 粒或以上強化符石時，全隊攻擊力 1.5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "想心之戀鎖 ‧ 摩斯",
    "activeName": ["戀焦戀鎖電報"],
    "activeDescription": [
      "心符石轉化為火人族強化符石，並引爆場上所有水及光符石以提升火屬性攻擊力，引爆 8 粒可達至最大 1.8 倍 (倍攻效果持續 2 回合)；2 回合內，心符石的掉落機率降至 0，並將原有機率增加至火符石的掉落機率，掉落的火符石以火強化符石代替"
    ],
    "monsterId": "1727",
    "leaderName": "赤熱之靈",
    "leaderDescription": "火屬性攻擊力 3.5 倍；每回合回復 3 倍自身回復力等值的生命力 (需消除符石)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "最終焉算之鋼砲 ‧ 圖靈",
    "activeName": ["最終翠械行動綱領"],
    "activeDescription": [
      "水及火符石轉化為心強化符石。引爆場上所有光及暗符石以掉落水強化、火強化及木強化符石；引爆 1 粒符石可減少 4% 所受傷害，引爆 10 粒可減少最多 40% 所受傷害 (減傷效果持續 2 回合)。2 回合內，延長移動符石時間至 8 秒"
    ],
    "monsterId": "1728",
    "leaderName": "翠械戰略",
    "leaderDescription": "隊伍中只有機械族；或只有機械族及人類成員時，全隊攻擊力 4 倍及生命力 1.3 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "電裝烙雷芯 ‧ 法拉第",
    "activeName": ["億雷接電 脈衝感應"],
    "activeDescription": [
      "木符石轉化為光強化符石；1 回合內，首批掉落的 15 粒符石必定為光人族符石"
    ],
    "monsterId": "1729",
    "leaderName": "雷電戰意",
    "leaderDescription": "隊伍中只有光屬性人類成員時，全隊攻擊力 2.5 倍；消除 2 種符石，攻擊力額外提升 1.5 倍，消除 4 種符石可提升至最大 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "夢二夢斬之游獵 ‧ 佛洛伊德",
    "activeName": ["白日夢捕手"],
    "activeDescription": [
      "引爆場上所有非強化符石以掉落屬性強化符石。2 回合內，減少 40% 所受傷害，自身對神族目標攻擊力提升 3 倍"
    ],
    "monsterId": "1730",
    "leaderName": "神族無光的夢境",
    "leaderDescription": "暗屬性攻擊力 3.5 倍；暗屬性對神族目標的攻擊力提升 2 倍",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "廣寒宮護主 ‧ 嫦娥",
    "activeName": ["圓月幻星舞"],
    "activeDescription": [
      "引爆場上所有符石以掉落火以外的符石；1 回合內，掉落的水及心符石分別以水強化及心強化符石代替"
    ],
    "monsterId": "1731",
    "leaderName": "獵人激濤",
    "leaderDescription": "水屬性攻擊力 3.5 倍，水屬性對人類目標的攻擊力額外提升 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "帝冷的劍氏 ‧ 攝爾修斯",
    "activeName": ["絕對零度"],
    "activeDescription": [
      "將 8 粒心以外的符石轉化為心強化符石。1 回合內，首批掉落的符石必定為水、光及暗符石，當中掉落的水符石以水強化符石代替。右旁成員的主動技能 CD 減少 1"
    ],
    "monsterId": "1732",
    "leaderName": "大海之皇權",
    "leaderDescription": "水屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "華熱的麗腳 ‧ 華倫海特",
    "activeName": ["華氏的極熱"],
    "activeDescription": [
      "「X 型」引爆 10 個固定位置的符石以掉落火強化符石。2 回合內，減少 30% 所受傷害，心符石的掉落機率降至 0，並將原有機率增加至火符石的掉落機率"
    ],
    "monsterId": "1733",
    "leaderName": "煉獄之皇權",
    "leaderDescription": "火屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "宇宙天紡的星明 ‧ 哈勃",
    "activeName": ["綺煌的深層 ‧ 世界"],
    "activeDescription": [
      "水、火及木符石轉化為心強化符石，暗符石轉化為光符石。1 回合內，以回復的生命力等值對全體敵人造成無屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "1734",
    "leaderName": "焚天煉日 ‧ 強",
    "leaderDescription": "光屬性攻擊力 3 倍；消除場上所有光符石時，光屬性人類攻擊力 4.5 倍 (只計算首批消除的符石)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "秘術的果實",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1735",
    "leaderName": "水之治療",
    "leaderDescription": "水屬性回復力 1.5 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "萬世始皇帝 ‧ 嬴政",
    "activeName": ["紅蓮滅卻鹿盧劍"],
    "activeDescription": [
      "引爆火、木及光符石，並將最底 3 橫行的符石轉化為強化符石。2 回合內，水屬性攻擊力 1.6 倍"
    ],
    "monsterId": "1736",
    "leaderName": "萬世皇帝之氣勢",
    "leaderDescription": "水屬性攻擊力 2.5 倍，水屬性對人類目標攻擊力提升 2 倍；我方生命力為 35% 或以下時，所受傷害減少 40%",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "炎影的征討者 ‧ 織田信長",
    "activeName": ["刪除 終末"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 10 秒，火屬性攻擊力 1.6 倍；所有火屬性成員的攻擊力跟隨攻擊力基值最高的火屬性成員"
    ],
    "monsterId": "1737",
    "leaderName": "猩紅血刃",
    "leaderDescription": "火屬性攻擊力 3.5 倍，強化符石效果提升 15%",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "勝臨之機銳槍 ‧ 岡尼爾",
    "activeName": ["英勝之豪突"],
    "activeDescription": [
      "木符石轉化為光強化符石。引爆心符石以掉落木以外的符石及提升自身攻擊力，引爆 5 粒可達至最大 6 倍 (倍攻效果持續 2 回合)"
    ],
    "monsterId": "1738",
    "leaderName": "制敵之槍",
    "leaderDescription": "光屬性人類攻擊力 3.5 倍，光屬性對神族及機械族目標攻擊力提升 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "艾爾芙萊姆的女王 ‧ 蘿斯",
    "activeName": ["相稱型僵局突破型態"],
    "activeDescription": [
      "光及木符石轉化為水強化符石，暗及心符石轉化為火強化符石。1 回合內，水符石掉落率減少及延長移動符石時間 3 秒"
    ],
    "monsterId": "1739",
    "leaderName": "躍動之流燄",
    "leaderDescription": "火屬性攻擊力 4.5 倍；我方生命力為 90% 或以上時，所受傷害減少 15%。同 1 回合消除的水符石數量比消除的火符石數量多，火屬性攻擊力額外提升 1.6 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "太學一番 ‧ 孔子",
    "activeName": ["美食天命 不惑"],
    "activeDescription": [
      "火符石轉化為光人族符石，風化符石轉化為光符石。2 回合內，木符石的掉落機率降至 0，並將原有機率增加至光符石的掉落機率"
    ],
    "monsterId": "1740",
    "leaderName": "焚天煉日 ‧ 強",
    "leaderDescription": "光屬性攻擊力 3 倍；消除場上所有光符石時，光屬性人類攻擊力 4.5 倍 (只計算首批消除的符石)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "荒龍復魂 ‧ 天叢雲",
    "activeName": ["八災難"],
    "activeDescription": [
      "火及木符石轉化為水符石；1 回合內，首批掉落的 15 粒符石必定為水人族符石"
    ],
    "monsterId": "1741",
    "leaderName": "連鎖聖令 ‧ 水",
    "leaderDescription": "水屬性攻擊力 3.5 倍。消除 1 組 12 粒或以上的符石時，水屬性攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "破築的連創 ‧ 璐畢卡",
    "activeName": ["狂妄發展 黃色休止符"],
    "activeDescription": [
      "火符石轉化為木符石，水符石轉化為光符石；3 回合內，火符石掉落率減少，自身對神族目標攻擊力提升 2.5 倍"
    ],
    "monsterId": "1742",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "勇義耀刃 ‧ 俄魯",
    "activeName": ["動力提升 ‧ 光芒"],
    "activeDescription": [
      "1 回合內，自身攻擊變為 160 萬光屬性攻擊 (自身需發動攻擊)；機械族成員的行動值提升 5%"
    ],
    "monsterId": "1743",
    "leaderName": "全速前進 ‧ 光",
    "leaderDescription": "10 回合內，光屬性攻擊力 8 倍",
    "attribute": "光",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "使命恪守 ‧ 多魯",
    "activeName": ["動力提升 ‧ 魅影"],
    "activeDescription": [
      "1 回合內，自身攻擊變為 160 萬暗屬性攻擊 (自身需發動攻擊)；機械族成員的行動值提升 5%"
    ],
    "monsterId": "1744",
    "leaderName": "全速前進 ‧ 暗",
    "leaderDescription": "10 回合內，暗屬性攻擊力 8 倍",
    "attribute": "暗",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "異瞳醫者 ‧ 桔梗",
    "activeName": ["無畏之心"],
    "activeDescription": [
      "心符石兼具 50% 自身屬性符石效果；發動技能時，場上每 1 粒心符石，額外增加 1 回合效果，3 粒心符石可持續最多 4 回合"
    ],
    "monsterId": "1745",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "金屬機甲人",
    "activeName": ["符石變換 ‧ 光"],
    "activeDescription": ["暗符石轉化為光符石"],
    "monsterId": "1751",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "西摩",
    "activeName": ["審判之刑"],
    "activeDescription": [
      "水及光屬性機械族成員的行動值提升至 100%。若此時全隊機械族成員的行動值達至 100%：將所有符石轉化為機械族符石；身旁的水屬性機械族及光屬性機械族成員攻擊力提升 2.5 倍；效果持續至沒有首批消除光符石"
    ],
    "monsterId": "1752",
    "leaderName": "玄光之濤 ‧ 機械",
    "leaderDescription": "隊伍中只有水屬性機械族及光屬性機械族成員時：全隊攻擊力 5 倍及生命力 1.5 倍，延長移動符石時間 1 秒；所有成員的行動值達至 100% 時，攻擊力額外提升 2 倍",
    "attribute": "光",
    "race": "機械族",
    "star": "7★"
  },
  {
    "monsterName": "眾仙統率 ‧ 元始天尊",
    "activeName": ["滄海圍城之勢"],
    "activeDescription": [
      "水符石轉化為水神族強化符石，其他符石轉化為水符石。若全隊均為水屬性神族成員，1 回合內，連擊 (Combo) 數目增加 5"
    ],
    "monsterId": "1753",
    "leaderName": "凝神之力 ‧ 強",
    "leaderDescription": "全體攻擊的攻擊力 6 倍 (不包括兼具效果)",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "護境仙陣 ‧ 通天教主",
    "activeName": ["魔控乾坤 ‧ 燄火"],
    "activeDescription": [
      "火符石轉化為魔族強化符石；1 回合內，其他屬性符石兼具火符石效果"
    ],
    "monsterId": "1754",
    "leaderName": "魔之殺意",
    "leaderDescription": "魔族攻擊力 4 倍、生命力及回復力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "太極相承 ‧ 太上老君",
    "activeName": ["森谷圍城之勢"],
    "activeDescription": [
      "木符石轉化為木神族強化符石，其他符石轉化為木符石。若全隊均為木屬性神族成員，1 回合內，連擊 (Combo) 數目增加 5"
    ],
    "monsterId": "1755",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "靈寶經 ‧ 飛龜授袟",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1756",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "水",
    "race": "進化素材",
    "star": "6★"
  },
  {
    "monsterName": "靈寶經 ‧ 平衡",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1757",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "火",
    "race": "進化素材",
    "star": "6★"
  },
  {
    "monsterName": "靈寶經 ‧ 正機",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1758",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "木",
    "race": "進化素材",
    "star": "6★"
  },
  {
    "monsterName": "雷歐力",
    "activeName": ["念拳"],
    "activeDescription": [
      "1 回合內，火、木、心符石兼具水符石效果；個人追打自身攻擊力 3.5 倍的水屬性攻擊 1 次"
    ],
    "monsterId": "1759",
    "leaderName": "人類之力量",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 4 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "比司吉",
    "activeName": ["魔法美容師"],
    "activeDescription": [
      "將 4 粒符石轉化為心強化符石 (隊伍成員屬性以外的屬性符石優先轉換)。隊伍中每多 1 個人類成員，額外將 1 粒符石轉化為心符石"
    ],
    "monsterId": "1760",
    "leaderName": "人類之力量",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 4 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "真 ‧ 比司吉",
    "activeName": ["魔法美容師 ‧ 強"],
    "activeDescription": [
      "將 4 粒符石轉化為心強化符石 (隊伍成員屬性以外的屬性符石優先轉換)。隊伍中每多 1 個人類成員，額外將 1 粒符石轉化為心強化符石"
    ],
    "monsterId": "1761",
    "leaderName": "人類之潛力",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 4.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "小傑",
    "activeName": ["猜猜拳"],
    "activeDescription": [
      "1 回合內，以指定圖示的符石開始轉珠時，將觸發以下效果：剪刀：全隊攻擊力及回復力 1.6 倍；石頭：自身攻擊力 7 倍，自身攻擊無視敵人的防禦力；布：於發動攻擊前以 30 倍自身攻擊力對敵方全體造成木屬性傷害"
    ],
    "monsterId": "1762",
    "leaderName": "小傑之本能",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 4 倍；減少 25% 所受傷害；於成員所在直行，首批消除 1 粒或以上該成員屬性的符石，該成員攻擊力額外提升 2 倍 (倍率不可疊加) ；消除強化符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "強製成長 ‧ 小傑",
    "activeName": ["猜猜拳"],
    "activeDescription": [
      "1 回合內，以指定圖示的符石開始轉珠時，將觸發以下效果：剪刀：全隊攻擊力及回復力 1.6 倍；石頭：自身攻擊力 7 倍，自身攻擊無視敵人的防禦力；布：於發動攻擊前以 30 倍自身攻擊力對敵方全體造成木屬性傷害"
    ],
    "monsterId": "1763",
    "leaderName": "小傑之本能・成長",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 4.5 倍；減少 30% 所受傷害；於成員所在直行，首批消除 1 粒或以上該成員屬性的符石，該成員攻擊力額外提升 2 倍 (倍率不可疊加) ；消除強化符石時，全隊攻擊力額外提升 1.8 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "酷拉皮卡",
    "activeName": ["無名指追魂鍊"],
    "activeDescription": [
      "自身攻擊力 4 倍，自身攻擊傷害可克制敵人；效果持續至首批消除 1 組 6 粒或以上的光符石"
    ],
    "monsterId": "1764",
    "leaderName": "制約之力",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 3.2 倍，光屬性人類攻擊力則提升至 3.6 倍；必然延長移動符石時間 0.5 秒；消除人族符石時，減少 15% 所受傷害",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "火紅眼 ‧ 酷拉皮卡",
    "activeName": ["無名指追魂鍊"],
    "activeDescription": [
      "自身攻擊力 4 倍，自身攻擊傷害可克制敵人；效果持續至首批消除 1 組 6 粒或以上的光符石"
    ],
    "monsterId": "1765",
    "leaderName": "誓約之力",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 3.6 倍，光屬性人類攻擊力則提升至 4 倍；必然延長移動符石時間 1 秒；消除人族符石時，減少 15% 所受傷害",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "奇犽",
    "activeName": ["落雷"],
    "activeDescription": [
      "將 4 粒符石轉化為暗強化符石 (心符石優先轉換)；1 回合內，個人以 25% 自身攻擊力追打光屬性攻擊 1 次"
    ],
    "monsterId": "1766",
    "leaderName": "奇犽之體能",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 4.5 倍及生命力 1.3 倍；每首批消除 1 種屬性符石，於回合結束時，隨機將該屬性的其中 2 粒符石轉化為強化符石",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "神速 ‧ 奇犽",
    "activeName": ["疾風迅雷"],
    "activeDescription": [
      "將 4 粒符石轉化為暗強化符石 (心符石優先轉換)；1 回合內，個人追打光屬性攻擊 2 次"
    ],
    "monsterId": "1767",
    "leaderName": "奇犽之體能．成長",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 5 倍及生命力 1.3 倍；每首批消除 1 種屬性符石，於回合結束時，隨機將該屬性的其中 3 粒符石轉化為強化符石",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "西索",
    "activeName": ["伸縮自在的愛"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.2 倍，根據開始轉珠及結束轉珠的位置距離，提升全隊攻擊力，9 格距離可提升至最大 3 倍"
    ],
    "monsterId": "1768",
    "leaderName": "人類之戰意",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 4.5 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "伊耳謎",
    "activeName": ["針人"],
    "activeDescription": [
      "2 回合內，使敵方全體無法行動；效果期間，於每回合結束時消耗敵方現有 10% 生命力"
    ],
    "monsterId": "1769",
    "leaderName": "人類之力量",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 4 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "庫洛洛",
    "activeName": ["盜賊的秘訣"],
    "activeDescription": [
      "1 回合內，所有屬性符石兼具 50% 其他屬性符石效果；所有成員的攻擊傷害可克制敵人"
    ],
    "monsterId": "1770",
    "leaderName": "人類之規律",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 3 倍。隊伍成員每多 1 個屬性，攻擊力額外提升 ，4 個可提升至最大 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "梅路艾姆",
    "activeName": ["照亮一切的光"],
    "activeDescription": [
      "1 回合內，所有敵人的攻擊力減至 50%，並將被減去的攻擊力加入自身攻擊力"
    ],
    "monsterId": "1771",
    "leaderName": "強悍之力量",
    "leaderDescription": "隊伍中只有妖精類及魔族成員時，每累計消除 1 粒符石，全隊攻擊力持續提升，最多可提升至 7 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "尼特羅",
    "activeName": ["百式觀音"],
    "activeDescription": [
      "水、火、木符石轉化為光符石，暗符石轉化為心符石；並將光及心符石轉化為強化符石；1 回合內，以 10% 自身攻擊力追打光屬性攻擊 10 次；下回合自身不能發動攻擊"
    ],
    "monsterId": "1772",
    "leaderName": "人類之戰意",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 4.5 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "尼飛彼多",
    "activeName": ["黑子舞想"],
    "activeDescription": [
      "8 秒內，可任意移動符石而不會發動消除；1 回合內，妖精類及魔族攻擊力 1.6 倍"
    ],
    "monsterId": "1773",
    "leaderName": "魔族萬鈞之怒",
    "leaderDescription": "魔族攻擊力 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "凱特",
    "activeName": ["死神的圓舞曲"],
    "activeDescription": [
      "場上外側的符石轉化為水人族強化符石，若全隊均為水屬性人類成員，自身以外所有成員的主動技能 CD 減少 1"
    ],
    "monsterId": "1774",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "孟徒徒尤匹",
    "activeName": ["憤怒的攻擊"],
    "activeDescription": [
      "1 回合內，自身攻擊力倍化累積戰鬥回合數 (需消除符石)，最大 6 倍。發動技能後戰鬥回合數將會重新累積"
    ],
    "monsterId": "1775",
    "leaderName": "魔之嗔怒",
    "leaderDescription": "魔族攻擊力 3 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "梟亞普夫",
    "activeName": ["麟粉乃愛泉"],
    "activeDescription": [
      "2 回合內，每回合將隊伍成員屬性的符石轉化為妖族符石，消除 1 粒妖族符石可減少 10% 所受傷害，消除 8 粒可減少最多 80% 所受傷害"
    ],
    "monsterId": "1776",
    "leaderName": "妖精之意志",
    "leaderDescription": "妖精類生命力 2.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "斯芬克斯",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1777",
    "leaderName": "光之治療",
    "leaderDescription": "光屬性回復力 1.5 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "自由童心 ‧ 小明",
    "activeName": ["心花夏放"],
    "activeDescription": [
      "將隨機 2 個火屬性成員所在隊伍欄直行的符石分別轉化為 3 粒火強化符石及 2 粒心強化符石"
    ],
    "monsterId": "1778",
    "leaderName": "人類之復甦",
    "leaderDescription": "人類回復力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "見習魔導士 ‧ 朗傑",
    "activeName": ["拖延術"],
    "activeDescription": [
      "1 回合內，自身不能對敵方造成傷害，減少 20% 所受傷害；下回合開始時，隨機 3 個人類成員所在直行的符石轉化為該成員屬性的符石"
    ],
    "monsterId": "1779",
    "leaderName": "元素之掌",
    "leaderDescription": "人類攻擊力 3 倍；光和暗屬性傷害減少 30%",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "顛世的魔音 ‧ 朗傑",
    "activeName": ["烈火凶勢"],
    "activeDescription": [
      "1 回合內，自身不能對敵方造成傷害，減少 60% 所受傷害；下回合火屬性及人類成員攻擊力提升 2 倍，火屬性傷害可克制水屬性目標"
    ],
    "monsterId": "1781",
    "leaderName": "火影魔法",
    "leaderDescription": "人類攻擊力 3.5 倍；合計消除 6 粒或以上的水或火符石時，人類攻擊力額外提升 1.5 倍；水及火屬性傷害減少 30%",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "阿路加",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1785",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "浦飯幽助",
    "activeName": ["靈丸"],
    "activeDescription": [
      "將 9 粒符石轉化為 3 粒水強化、3 粒光強化及 3 粒心強化符石。1 回合內，合計消除的水、光或心符石愈多，自身攻擊力愈高，消除 15 粒可提升至最大 7 倍"
    ],
    "monsterId": "1786",
    "leaderName": "三界最強集結",
    "leaderDescription": "隊伍中只有人類、妖精類或魔族成員時，全隊攻擊力 4.5 倍，生命力及回復力 1.5 倍；延長移動符石時間 1 秒；水符石兼具 50% 光符石效果，光符石兼具 50% 水符石效果 (可疊加)；消除 4 連擊 (Combo) 或以上，全隊攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "魔人 ‧ 幽助",
    "activeName": ["靈丸"],
    "activeDescription": [
      "將 9 粒符石轉化為 3 粒水強化、3 粒光強化及 3 粒心強化符石。1 回合內，合計消除的水、光或心符石愈多，自身攻擊力愈高，消除 15 粒可提升至最大 7 倍"
    ],
    "monsterId": "1787",
    "leaderName": "三界最強集結 ‧ 強",
    "leaderDescription": "隊伍中只有人類、妖精類或魔族成員時，全隊攻擊力 5 倍，生命力及回復力 1.5 倍；延長移動符石時間 1 秒；水符石兼具 50% 光符石效果，光符石兼具 50% 水符石效果 (可疊加)；消除 4 連擊 (Combo) 或以上，全隊攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "幻海",
    "activeName": ["靈丸 (幻海)"],
    "activeDescription": [
      "將 3 粒符石轉化為火符石 (心符石優先轉換)；1 回合內，自身攻擊轉化為水屬性；合計消除的水、火及木符石愈多，自身攻擊力愈高，消除 10 粒可提升至最大 5 倍"
    ],
    "monsterId": "1788",
    "leaderName": "五元素之靈",
    "leaderDescription": "隊伍中有 5 種屬性成員時，全隊攻擊力 3.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "少女 ‧ 幻海",
    "activeName": ["靈丸 (幻海)"],
    "activeDescription": [
      "將 3 粒符石轉化為火符石 (心符石優先轉換)；1 回合內，自身攻擊轉化為水屬性；合計消除的水、火及木符石愈多，自身攻擊力愈高，消除 10 粒可提升至最大 5 倍"
    ],
    "monsterId": "1789",
    "leaderName": "五元素之靈 ‧ 強",
    "leaderDescription": "隊伍中有 5 種屬性成員時，全隊攻擊力 4 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "藏馬",
    "activeName": ["風華円舞陣"],
    "activeDescription": [
      "所有符石隨機轉換，同時木符石出現率上升，並將木符石以木妖族符石代替"
    ],
    "monsterId": "1790",
    "leaderName": "薔薇之瓣",
    "leaderDescription": "隊伍中只有妖精類或魔族成員時，全隊攻擊力 4 倍，生命力及回復力 1.3 倍；所有屬性符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "妖狐 ‧ 藏馬",
    "activeName": ["樹靈妖斬拳"],
    "activeDescription": [
      "2 回合內，自身攻擊力 4 倍；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "1791",
    "leaderName": "漫天薔薇之瓣",
    "leaderDescription": "隊伍中只有妖精類或魔族成員時，全隊攻擊力 4 倍，生命力及回復力 1.3 倍；所有屬性符石兼具 50% 心符石效果 (可疊加)",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "桑原和真",
    "activeName": ["次元刀"],
    "activeDescription": [
      "1 回合內，隊長及戰友所在直行的符石轉化為該成員屬性的符石；若隊長及戰友均為幽☆遊☆白書系列角色，全隊攻擊力 1.8 倍"
    ],
    "monsterId": "1792",
    "leaderName": "五元素之靈",
    "leaderDescription": "隊伍中有 5 種屬性成員時，全隊攻擊力 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "飛影",
    "activeName": ["邪王炎殺煉獄焦"],
    "activeDescription": ["木符石轉化為暗魔族符石，心符石轉化為火魔族符石"],
    "monsterId": "1793",
    "leaderName": "酷冷幽燄",
    "leaderDescription": "隊伍中只有人類、妖精類或魔族成員時，全隊攻擊力 3.8 倍，魔族生命力、攻擊力及回復力額外提升 1.6 倍；火符石兼具 50% 暗符石效果，暗符石兼具 50% 火符石效果 (可疊加)",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "邪眼 ‧ 飛影",
    "activeName": ["邪王炎殺劍"],
    "activeDescription": [
      "自身直行的符石轉化為暗魔族強化符石；隊伍中火屬性魔族成員所在直行的符石轉化為火魔族強化符石"
    ],
    "monsterId": "1794",
    "leaderName": "酷冷幽燄 ‧ 強",
    "leaderDescription": "隊伍中只有人類、妖精類或魔族成員時，全隊攻擊力 4 倍，魔族生命力、攻擊力及回復力額外提升 1.6 倍；火符石兼具 50% 暗符石效果，暗符石兼具 50% 火符石效果 (可疊加)",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "雷禪",
    "activeName": ["鬥神之擊"],
    "activeDescription": [
      "水及光符石轉化為強化符石，暗符石轉化為心強化符石。1 回合內，自身對人類以外目標攻擊力提升 5 倍"
    ],
    "monsterId": "1795",
    "leaderName": "銳兵列陣 ‧ 強",
    "leaderDescription": "隊伍中須有水和光屬性的成員，消除任何三種或以上屬性符石，水和光屬性攻擊力 3.5 倍。消除水和光符石時，水和光屬性的攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "小閻王",
    "activeName": ["魔封環"],
    "activeDescription": [
      "1 回合內，減少 90% 所受傷害，將 5 粒符石轉化為心符石 (水及木符石優先轉換)"
    ],
    "monsterId": "1796",
    "leaderName": "五元素之靈",
    "leaderDescription": "隊伍中有 5 種屬性成員時，全隊攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "戶愚呂兄",
    "activeName": ["擬態假人"],
    "activeDescription": [
      "1 回合內，首次所受傷害不會使你死亡；下回合隨機將 6 粒符石轉化為暗符石，並將所有符石轉化為強化符石"
    ],
    "monsterId": "1797",
    "leaderName": "魔族萬鈞之怒",
    "leaderDescription": "魔族攻擊力 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "軀",
    "activeName": ["斷空束縛"],
    "activeDescription": [
      "點選 1 橫行及 1 直行的符石並引爆，以掉落魔族強化符石；1 回合內，消除符石後首 20 粒掉落的符石必定為火及暗符石"
    ],
    "monsterId": "1798",
    "leaderName": "斷魂之燄 ‧ 魔",
    "leaderDescription": "魔族攻擊力 4 倍；火符石兼具 50% 暗符石效果，暗符石兼具 50% 火符石效果",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "黃泉",
    "activeName": ["魔古忌流煉破反衝壁"],
    "activeDescription": [
      "木符石轉化為妖族符石；1 回合內，吸收本回合敵人首次攻擊傷害，並以所吸收攻擊力的 50 倍對其進行木屬性反擊"
    ],
    "monsterId": "1799",
    "leaderName": "聚靈之核",
    "leaderDescription": "妖精類攻擊力 3 倍，所有屬性符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "人面鳥騎士 ‧ 瘋頭",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1800",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "木",
    "race": "強化素材",
    "star": "7★"
  },
  {
    "monsterName": "小波",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1801",
    "leaderName": "水之精神",
    "leaderDescription": "水屬性生命力 1.5 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "戶愚呂弟 100%中的100%",
    "activeName": ["全能量 100% 中的 100%"],
    "activeDescription": [
      "首批消除 5 粒或以上暗符石，自身攻擊力 5.5 倍，其後每回合需要首批消除的暗符石數量 +1，達成條件時自身攻擊力額外提升 1.5 倍，最大 10 倍。效果持續至沒有達成條件"
    ],
    "monsterId": "1802",
    "leaderName": "最強之念 ‧ 肌肉操縱",
    "leaderDescription": "全隊攻擊力 2 倍；生命力愈低，全隊攻擊力愈高及所受傷害減少愈多，我方生命力為 25% 或以下時攻擊力可達至最大 5 倍及減少最多 45% 所受傷害",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "陣",
    "activeName": ["修羅旋風拳"],
    "activeDescription": [
      "所有木符石由左上方開始向下排序。1 回合內，每直行首批消除 1 組 5 粒或以上符石時，該直行將產生 2 粒木妖族符石"
    ],
    "monsterId": "1805",
    "leaderName": "木之魅惑",
    "leaderDescription": "木屬性攻擊力 3 倍，木屬性妖精類攻擊力則 4 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "死死若丸",
    "activeName": ["怨呼障縛壁"],
    "activeDescription": [
      "水符石轉化為妖族強化符石；1 回合內，消除妖族符石時，妖精類攻擊力 1.5 倍"
    ],
    "monsterId": "1806",
    "leaderName": "水之魅惑",
    "leaderDescription": "水屬性攻擊力 3 倍，水屬性妖精類攻擊力則 4 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "雪菜",
    "activeName": ["冰之淚"],
    "activeDescription": [
      "1 回合內，凍結敵方全體，使受影響目標無法行動並轉為水屬性，效果期間必然延長移動符石時間 5 秒"
    ],
    "monsterId": "1807",
    "leaderName": "三界之力",
    "leaderDescription": "隊伍中只有人類、妖精類或魔族成員時，全隊攻擊力 4.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "牡丹",
    "activeName": ["浪濤歸一 ‧ 魔"],
    "activeDescription": [
      "所有符石轉化為魔族符石；1 回合內，消除符石的種類愈多，水屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "1808",
    "leaderName": "靈魂契約 ‧ 強",
    "leaderDescription": "全隊攻擊力 3 倍，關卡 \"靈魂之日\"，其初級難度及高級難度最後一層的敵人分別有 30% 及 50% 機會轉化為蘊魔晶寵 (機率可以疊加)",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "六臂爐兵",
    "activeName": ["力量迸發的契機 ‧ 機械"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為自身屬性符石，最多 6 粒；若隊伍中有 3 個或以上機械族成員時，則轉化為自身屬性機械族符石。當累積至最多 6 粒時發動技能，自身攻擊力 2 倍。發動技能後可轉換符石數量將重新累積"
    ],
    "monsterId": "1809",
    "leaderName": "機械始動",
    "leaderDescription": "全隊攻擊力 3.5 倍，機械族成員攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "天火賢者",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1812",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "無夜賢者",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1815",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "斷頭裁決 ‧ 夏爾",
    "activeName": ["冷冽斷頭刀"],
    "activeDescription": [
      "最頂 1 橫行的符石轉化為水強化符石；1 回合內，消除最底 1 橫行內的所有符石時，全隊攻擊力 2.5 倍"
    ],
    "monsterId": "1816",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "戶愚呂弟 80%",
    "activeName": ["怒號"],
    "activeDescription": [
      "首批消除 5 粒或以上暗符石，自身攻擊力 5.5 倍，其後每回合需要首批消除的暗符石數量 +1，達成條件時自身攻擊力額外提升 1.5 倍，最大 10 倍。效果持續至沒有達成條件"
    ],
    "monsterId": "1817",
    "leaderName": "最強之念",
    "leaderDescription": "全隊攻擊力 2 倍；生命力愈低，全隊攻擊力愈高，我方生命力為 25% 或以下時攻擊力可達至最大 5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "煌耀女帝 ‧ 美索不達米亞",
    "activeName": ["強悍之志"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上時，個人追打光及暗屬性攻擊 1 次；達成 6 連擊 (Combo) 或以上時，自身攻擊力 3 倍；達成 8 連擊 (Combo) 或以上時，自身攻擊無視「固定連擊盾」。效果持續至沒有達成 4 連擊 (Combo) 或以上"
    ],
    "monsterId": "1818",
    "leaderName": "千秋的傳承",
    "leaderDescription": "木屬性攻擊力 4 倍，木屬性人類攻擊力則 5 倍；必然延長移動符石時間 2.5 秒；每消除 1 組光或暗符石，於該回合結束時，將 1 粒符石 (木及心符石優先轉換) 轉化為人族強化符石，最多 30 粒",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "雛鳥騎士 ‧ 瘋頭",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1820",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "木",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "睿哲始祖 ‧ 阿特拉哈西斯",
    "activeName": ["水刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的水符石，水屬性攻擊力 2 倍"
    ],
    "monsterId": "1821",
    "leaderName": "穹蒼賜賞 ‧ 浪濤",
    "leaderDescription": "水屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒水神族符石",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "思研求知 ‧ 阿特拉哈西斯",
    "activeName": ["水靈飄灑"],
    "activeDescription": [
      "引爆自身直行的符石以掉落水強化及心強化符石。若身旁的成員同為水屬性神族，同得此效果"
    ],
    "monsterId": "1822",
    "leaderName": "穹蒼賜賞 ‧ 神浪",
    "leaderDescription": "水屬性攻擊力 3.5 倍；每橫行首批消除 1 組 3 粒或以上符石時，將產生 1 粒水神族符石",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "桀傲戰領 ‧ 尼努爾塔",
    "activeName": ["燄刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的火符石，火屬性攻擊力 2 倍"
    ],
    "monsterId": "1823",
    "leaderName": "穹蒼賜賞 ‧ 熾燄",
    "leaderDescription": "火屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒火神族符石",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "驍戰啟悟 ‧ 尼努爾塔",
    "activeName": ["火靈飄灑"],
    "activeDescription": [
      "引爆自身直行的符石以掉落火強化及心強化符石。若身旁的成員同為火屬性神族，同得此效果"
    ],
    "monsterId": "1824",
    "leaderName": "穹蒼賜賞 ‧ 神燄",
    "leaderDescription": "火屬性攻擊力 3.5 倍；每橫行首批消除 1 組 3 粒或以上符石時，將產生 1 粒火神族符石",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "仁心王者 ‧ 杜穆濟",
    "activeName": ["藤刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的木符石，木屬性攻擊力 2 倍"
    ],
    "monsterId": "1825",
    "leaderName": "穹蒼賜賞 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒木神族符石",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "無私犧牲 ‧ 杜穆濟",
    "activeName": ["木靈飄灑"],
    "activeDescription": [
      "引爆自身直行的符石以掉落木強化及心強化符石。若身旁的成員同為木屬性神族，同得此效果"
    ],
    "monsterId": "1826",
    "leaderName": "穹蒼賜賞 ‧ 神木",
    "leaderDescription": "木屬性攻擊力 3.5 倍；每橫行首批消除 1 組 3 粒或以上符石時，將產生 1 粒木神族符石",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "貞潔之月 ‧ 伊南娜",
    "activeName": ["光刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的光符石，光屬性攻擊力 2 倍"
    ],
    "monsterId": "1827",
    "leaderName": "穹蒼賜賞 ‧ 玄光",
    "leaderDescription": "光屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒光神族符石",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "依戀漣漪 ‧ 伊南娜",
    "activeName": ["光靈飄灑"],
    "activeDescription": [
      "引爆自身直行的符石以掉落光強化及心強化符石。若身旁的成員同為光屬性神族，同得此效果"
    ],
    "monsterId": "1828",
    "leaderName": "穹蒼賜賞 ‧ 神光",
    "leaderDescription": "光屬性攻擊力 3.5 倍；每橫行首批消除 1 組 3 粒或以上符石時，將產生 1 粒光神族符石",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "濁化疾神 ‧ 納姆塔爾",
    "activeName": ["魅刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的暗符石，暗屬性攻擊力 2 倍"
    ],
    "monsterId": "1829",
    "leaderName": "穹蒼賜賞 ‧ 幽冥",
    "leaderDescription": "暗屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒暗神族符石",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "破梏命運 ‧ 納姆塔爾",
    "activeName": ["暗靈飄灑"],
    "activeDescription": [
      "引爆自身直行的符石以掉落暗強化及心強化符石。若身旁的成員同為暗屬性神族，同得此效果"
    ],
    "monsterId": "1830",
    "leaderName": "穹蒼賜賞 ‧ 神幽",
    "leaderDescription": "暗屬性攻擊力 3.5 倍；每橫行首批消除 1 組 3 粒或以上符石時，將產生 1 粒暗神族符石",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "濕婆",
    "activeName": ["寒冰強擊"],
    "activeDescription": ["對單一敵人造成 10 倍水屬性傷害"],
    "monsterId": "1836",
    "leaderName": "神妖滅世",
    "leaderDescription": "隊伍中只有神族或妖精類成員時，全隊攻擊力 4 倍，並延長移動符石時間 1 秒。消除神族或妖族符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "大自在天 ‧ 濕婆",
    "activeName": ["混沌再生"],
    "activeDescription": [
      "將黑白符石變回原來色調；點選 2 直行的符石並引爆，以掉落水神族強化符石"
    ],
    "monsterId": "1837",
    "leaderName": "神妖滅世",
    "leaderDescription": "隊伍中只有神族或妖精類成員時，全隊攻擊力 4 倍，並延長移動符石時間 1 秒。消除神族或妖族符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "梵天",
    "activeName": ["烈炎強擊"],
    "activeDescription": ["對單一敵人造成 10 倍火屬性傷害"],
    "monsterId": "1838",
    "leaderName": "元素創念",
    "leaderDescription": "隊伍中只有神族成員時，全隊攻擊力 4 倍；首批掉落「沒有首批消除」的其中 1 種屬性符石 (剩餘數量最少優先)。消除 5 種屬性符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "唯識無境 ‧ 梵天",
    "activeName": ["力量的肇始"],
    "activeDescription": [
      "將黑白符石變回原來色調；1 回合內，必然延長移動符石時間 6 秒；自身攻擊力 6 倍；連擊 (Combo) 數目增加 6"
    ],
    "monsterId": "1839",
    "leaderName": "元素創念",
    "leaderDescription": "隊伍中只有神族成員時，全隊攻擊力 4 倍；首批掉落「沒有首批消除」的其中 1 種屬性符石 (剩餘數量最少優先)。消除 5 種屬性符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "帕爾瓦蒂",
    "activeName": ["旋風強擊"],
    "activeDescription": ["對單一敵人造成 10 倍木屬性傷害"],
    "monsterId": "1840",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "木",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "清蓮無垢 ‧ 帕爾瓦蒂",
    "activeName": ["不渝之援"],
    "activeDescription": [
      "1 回合內，隊長及戰友攻擊力 4 倍；隊伍中每多 1 個神族成員，額外增加 1 回合效果，最多持續 5 回合"
    ],
    "monsterId": "1841",
    "leaderName": "神 ‧ 森之力",
    "leaderDescription": "木屬性神族攻擊力 4.5 倍；消除神族符石時，木屬性攻擊力額外提升 1.5 倍",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "拉克什米",
    "activeName": ["金光強擊"],
    "activeDescription": ["對單一敵人造成 10 倍光屬性傷害"],
    "monsterId": "1842",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "光",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "業惡纏身 ‧ 拉克什米",
    "activeName": ["神力契約"],
    "activeDescription": [
      "1 回合內，同時消除光、暗及心符石時，全隊攻擊力 2.2 倍；隊伍中每多 1 個神族成員，額外增加 1 回合效果，最多持續 5 回合"
    ],
    "monsterId": "1843",
    "leaderName": "神 ‧ 玄之力",
    "leaderDescription": "光屬性神族攻擊力 4.5 倍；消除神族符石時，光屬性攻擊力額外提升 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "毗濕奴",
    "activeName": ["暗色強擊"],
    "activeDescription": ["對單一敵人造成 10 倍暗屬性傷害"],
    "monsterId": "1844",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "持戒苦行 ‧ 毗濕奴",
    "activeName": ["化厄之念"],
    "activeDescription": [
      "將黑白符石變回原來色調；1 回合內，減少 50% 所受傷害；消除神族符石愈多，全隊攻擊力提升愈多，5 粒可提升至最大 2 倍"
    ],
    "monsterId": "1845",
    "leaderName": "幻惑護生",
    "leaderDescription": "隊伍中只有神族成員時，全隊攻擊力 4 倍及回復力 1.5 倍；同時消除光及暗符石時，全隊攻擊力 1.5 倍及減少 20% 所受傷害",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "伐樓那",
    "activeName": ["寒冰強擊"],
    "activeDescription": ["對單一敵人造成 10 倍水屬性傷害"],
    "monsterId": "1846",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "殺生嗜血 ‧ 伐樓那",
    "activeName": ["天海之濤"],
    "activeDescription": [
      "1 回合內，每首批消除 2 粒水符石，將產生 1 粒水神族符石；隊伍中每多 1 個神族成員，額外增加 1 回合效果，最多持續 5 回合"
    ],
    "monsterId": "1847",
    "leaderName": "神 ‧ 浪之力",
    "leaderDescription": "水屬性神族攻擊力 4.5 倍；消除神族符石時，水屬性攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "阿耆尼",
    "activeName": ["烈炎強擊"],
    "activeDescription": ["對單一敵人造成 10 倍火屬性傷害"],
    "monsterId": "1848",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "火",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "嗔怨無明 ‧ 阿耆尼",
    "activeName": ["火焰舞動"],
    "activeDescription": [
      "1 回合內，可任意移動符石而不會發動消除；隊伍中每多 1 個神族成員，額外增加 1 回合效果，最多持續 5 回合"
    ],
    "monsterId": "1849",
    "leaderName": "神 ‧ 焰之力",
    "leaderDescription": "火屬性神族攻擊力 4.5 倍；消除神族符石時，火屬性攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "伐樓尼",
    "activeName": ["暗色強擊"],
    "activeDescription": ["對單一敵人造成 10 倍暗屬性傷害"],
    "monsterId": "1850",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "執迷塵垢 ‧ 伐樓尼",
    "activeName": ["神權之慾"],
    "activeDescription": [
      "1 回合內，神族攻擊力及回復力 1.5 倍；隊伍中每多 1 個神族成員，額外增加 1 回合效果，最多持續 5 回合"
    ],
    "monsterId": "1851",
    "leaderName": "神 ‧ 秘之力",
    "leaderDescription": "暗屬性神族攻擊力 4.5 倍；消除神族符石時，暗屬性攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "燃熠比翼 ‧ 迦樓羅",
    "activeName": ["燄鳥振翅"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 10 秒及火屬性攻擊力 1.5 倍，場上有其他附加效果時，火屬性獸類攻擊力則提升至 3 倍"
    ],
    "monsterId": "1853",
    "leaderName": "獸類萬鈞之怒",
    "leaderDescription": "獸類攻擊力 4 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "富悅財婪 ‧ 俱毗羅",
    "activeName": ["永生之護"],
    "activeDescription": [
      "若全隊均為神族成員：2 回合內，減少 80% 所受傷害，隊長及戰友攻擊力提升 3.5 倍；反之，2 回合內，減少 50% 所受傷害，隊長及戰友攻擊力提升 2 倍"
    ],
    "monsterId": "1856",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "背城之旅龍 ‧ 藍托",
    "activeName": ["龍量之約"],
    "activeDescription": [
      "隊伍中有人類、神族或魔族成員時，隨機將 15 粒符石轉化為強化符石，隊伍中齊集上述 3 個種族的成員時，則將所有符石轉化為強化符石；隊伍中有龍類、獸類或妖精類成員時，1 回合內，全隊攻擊力 2 倍，隊伍中齊集上述 3 個種族的成員時，則全隊攻擊力 2.5 倍；若隊伍中有機械族成員時，1 回合內，完全回復生命力及無視全體敵人的防禦力"
    ],
    "monsterId": "1857",
    "leaderName": "龍類萬鈞之怒",
    "leaderDescription": "龍類攻擊力 4 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "虔心象神 ‧ 葛內舍",
    "activeName": ["獸靈之力"],
    "activeDescription": [
      "木符石轉化為獸族強化符石，並對全體敵人造成 25 倍「獸類成員生命力等值」的木屬性傷害"
    ],
    "monsterId": "1858",
    "leaderName": "獸類萬鈞之怒",
    "leaderDescription": "獸類攻擊力 4 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "紺藍動甲",
    "activeName": ["機械配置 ‧ 水"],
    "activeDescription": ["水符石轉化為機械族符石"],
    "monsterId": "1859",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "胭紅動甲",
    "activeName": ["機械配置 ‧ 火"],
    "activeDescription": ["火符石轉化為機械族符石"],
    "monsterId": "1860",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "青碧動甲",
    "activeName": ["機械配置 ‧ 木"],
    "activeDescription": ["木符石轉化為機械族符石"],
    "monsterId": "1861",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "橘霧動甲",
    "activeName": ["機械配置 ‧ 光"],
    "activeDescription": ["光符石轉化為機械族符石"],
    "monsterId": "1862",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "紫橡動甲",
    "activeName": ["機械配置 ‧ 暗"],
    "activeDescription": ["暗符石轉化為機械族符石"],
    "monsterId": "1863",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "機械族",
    "star": "3★"
  },
  {
    "monsterName": "機巧治癒 ‧ 蘭布達",
    "activeName": ["潛能激發"],
    "activeDescription": [
      "1 回合內，隊伍生命力愈高，機械族成員攻擊力愈高及行動值提升愈多，生命力達 40000 點攻擊力可達至最大 2.2 倍及提升最多 40% 行動值"
    ],
    "monsterId": "1865",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "孤伶之獸 ‧ 席茲",
    "activeName": ["獸力召喚"],
    "activeDescription": [
      "獸類成員所在直行的符石轉化為獸族符石；1 回合內，獸類成員追打自身攻擊力 2.5 倍的光屬性攻擊 1 次"
    ],
    "monsterId": "1866",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "命途引領者 ‧ 華倫西亞",
    "activeName": ["獸化加冕 ‧ 追擊"],
    "activeDescription": [
      "引爆隊長及戰友所在直行的符石，以掉落獸族強化符石；1 回合內，獸類成員以 30% 自身攻擊力追打隨機屬性攻擊 3 次"
    ],
    "monsterId": "1867",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "迷失者的聖炎 ‧ 巴哈姆特",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1868",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "墜落殺戮 ‧ 貝西摩斯",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1870",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "光",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "菜鳥廚師 ‧ 點心娘",
    "activeName": ["喝口茶吃個包"],
    "activeDescription": [
      "3 回合內，生命力未滿時，根據隊伍中人類成員的數量，回復相應的生命力，6 個人類成員可回復最多 15000 點生命力"
    ],
    "monsterId": "1872",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "酥脆春卷",
    "activeName": ["芳香四溢 ‧ 水"],
    "activeDescription": [
      "根據隊伍中水屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1873",
    "leaderName": "水之復甦",
    "leaderDescription": "水屬性回復力 2 倍",
    "attribute": "水",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "晶瑩蝦餃",
    "activeName": ["芳香四溢 ‧ 火"],
    "activeDescription": [
      "根據隊伍中火屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1874",
    "leaderName": "火之復甦",
    "leaderDescription": "火屬性回復力 2 倍",
    "attribute": "火",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "飽足糯米雞",
    "activeName": ["芳香四溢 ‧ 木"],
    "activeDescription": [
      "根據隊伍中木屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1875",
    "leaderName": "木之復甦",
    "leaderDescription": "木屬性回復力 2 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "嫩滑燒賣",
    "activeName": ["芳香四溢 ‧ 光"],
    "activeDescription": [
      "根據隊伍中光屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1876",
    "leaderName": "光之復甦",
    "leaderDescription": "光屬性回復力 2 倍",
    "attribute": "光",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "濃香牛肉球",
    "activeName": ["芳香四溢 ‧ 暗"],
    "activeDescription": [
      "根據隊伍中暗屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1877",
    "leaderName": "暗之復甦",
    "leaderDescription": "暗屬性回復力 2 倍",
    "attribute": "暗",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "部件 ‧ 飛船",
    "activeName": ["光暗靈 ‧ 元素擴散"],
    "activeDescription": [
      "1 回合內，光、暗及心符石同時兼具 50% 水、火及木符石效果；若發動技能時自身行動值達 50% 或以上時，兼具效果提升至 100%"
    ],
    "monsterId": "1878",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "部件 ‧ 大炮",
    "activeName": ["再三爆發"],
    "activeDescription": [
      "連續引爆最底 1 橫行符石 3 次造成敵方全體火屬性傷害；1 回合內，自身攻擊力 3.5 倍"
    ],
    "monsterId": "1879",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "部件 ‧ 機翼",
    "activeName": ["輸入 ‧ 攻回指令"],
    "activeDescription": [
      "1 回合內，個人追打隨機屬性攻擊 3 次；消除 3 種或以上屬性符石時，全隊攻擊力 2 倍及回復 6000 點生命力"
    ],
    "monsterId": "1880",
    "leaderName": "木之狂怒",
    "leaderDescription": "木屬性攻擊力 2.5 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "斬毀屏障 ‧ 魔式幻兵",
    "activeName": ["執行 ‧ 攻回指令"],
    "activeDescription": [
      "1 回合內，每首批消除 1 組水、火或木符石時，個人追打自身攻擊力 2 倍的隨機屬性攻擊 1 次；每首批消除 1 組光或暗符石時，回復 3000 點生命力"
    ],
    "monsterId": "1881",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "智障女神 ‧ 阿克婭",
    "activeName": ["神光拳"],
    "activeDescription": [
      "1 回合內，首批 2 粒相連的符石可發動消除；若首批消除 25 粒或以上符石時，下回合所有符石隨機轉化為水、火、木、光及暗符石"
    ],
    "monsterId": "1882",
    "leaderName": "神聖之水",
    "leaderDescription": "水屬性及「美好世界」系列角色攻擊力 5 倍，首批消除 5 連擊 (Combo) 或以上，攻擊力額外提升 1.3 倍；只能消除首批符石",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "華麗爆裂 ‧ 惠惠",
    "activeName": ["爆裂魔法"],
    "activeDescription": [
      "爆裂魔法 ‧ 真紅的金光\n每次只能選取 1 個效果。\n效果1：最頂及最底 1 橫行的符石轉化為火強化符石；對敵方全體造成 800 萬火屬性傷害，此傷害無視防禦力及強化突破敵技。回合結束時，自身進入 1 回合疲憊狀態\n效果2：單數橫行的符石轉化為火強化符石；對敵方全體造成 1000 萬火屬性傷害，此傷害無視防禦力及強化突破敵技。回合結束時，2 回合內自身進入疲憊狀態及「華麗爆裂 ‧ 惠惠」以外人類及神族成員進入亢奮狀態。發動此技能時需儲滿龍脈儀及該回合不能發動龍刻脈動"
    ],
    "monsterId": "1883",
    "leaderName": "釋放最強魔法",
    "leaderDescription": "隊伍中有 3 種或以上屬性成員時，人類及神族攻擊力 5 倍；所有成員對光及暗屬性目標攻擊力提升 2 倍，對其他屬性目標攻擊力提升 1.5 倍 (包括主動技)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "鬼畜小偷 ‧ 和真",
    "activeName": ["偷竊"],
    "activeDescription": [
      "引爆「美好世界」系列成員直行的符石以掉落強化符石，並隨機獲得以下一個效果。劍：1 回合內，全隊攻擊力 1.8 倍；胖次：1 回合內，全隊攻擊力及回復力 2 倍"
    ],
    "monsterId": "1884",
    "leaderName": "界限變革",
    "leaderDescription": "3 粒或以上相同種類的符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "受辱狂歡 ‧ 達克妮絲",
    "activeName": ["堅忍的盾牌"],
    "activeDescription": [
      "心符石的掉落率降至 0，並將原有機率增加至光符石的掉落機率；減少 15% 所受傷害，每次受到敵人攻擊，減傷效果將提升 10%，最多可減傷 35% (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，隨機將 8 粒符石轉化為心符石"
    ],
    "monsterId": "1885",
    "leaderName": "聖騎士之意志",
    "leaderDescription": "隊伍中只有人類成員時，人類生命力及攻擊力 1.5 倍，光屬性人類則 2 倍；每次受到敵人攻擊時，人類攻擊力額外持續提升，最大 6 倍。連續 2 回合沒有受到敵人攻擊，攻擊力減少",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "不變美貌 ‧ 維茲",
    "activeName": ["咒怨晶獄"],
    "activeDescription": [
      "自身攻擊力 1.5 倍，若隊伍中有 3 個或以上屬性成員時，自身攻擊轉化為水屬性及自身攻擊力提升至 3.5 倍 (效果會在關閉此技能或死亡後消失)。技能關閉時，凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 1 回合"
    ],
    "monsterId": "1886",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "魔劍的持有者 ‧ 御劍響夜",
    "activeName": ["魔劍格拉墨"],
    "activeDescription": [
      "引爆自身、隊長及戰友直行的符石；1 回合內，若場上有其他附加效果時，全隊攻擊力 2 倍"
    ],
    "monsterId": "1887",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "羞澀法師 ‧ 芸芸",
    "activeName": ["上級魔法 ‧ 光之刃"],
    "activeDescription": [
      "將 6 粒符石轉化為 3 粒火強化及 3 粒心強化符石 (隊伍成員屬性以外符石優先轉換)；隊伍中有「華麗爆裂 ‧ 惠惠」，可即時再次發動技能 (每層最多觸發 1 次)"
    ],
    "monsterId": "1888",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "神速盜竊 ‧ 克莉絲",
    "activeName": ["技能封印"],
    "activeDescription": [
      "暗、光及心符石分別轉化為水強化、火強化及木強化符石；1 回合內，自身對魔族攻擊力提升 5 倍"
    ],
    "monsterId": "1889",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "地獄公爵 ‧ 巴尼爾",
    "activeName": ["巴尼爾式殺人光線"],
    "activeDescription": [
      "將 6 粒符石轉化為暗魔族符石 (暗及心以外符石優先轉換)；對單一敵人造成 80000 點火屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "1890",
    "leaderName": "負面情感吞食",
    "leaderDescription": "暗屬性攻擊力 3 倍，所有成員對人類目標攻擊力提升 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "無頭騎士 ‧ 貝爾迪亞",
    "activeName": ["死亡宣告"],
    "activeDescription": [
      "對 1 個人類敵人施以詛咒：每回合消耗敵人 15% 總生命力，效果持續至受到敵人攻擊"
    ],
    "monsterId": "1891",
    "leaderName": "魔族萬鈞之怒",
    "leaderDescription": "魔族攻擊力 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "公會接待員 ‧ 露娜",
    "activeName": ["緊急召集 ‧ 光靈"],
    "activeDescription": [
      "隨機 1 個人類及 1 個魔族成員直行的符石轉化為光強化符石；隨機 1 個神族及 1 個妖精類成員直行的符石轉化為心強化符石"
    ],
    "monsterId": "1893",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "淘氣女神 ‧ 艾莉絲",
    "activeName": ["秘密的約定"],
    "activeDescription": [
      "隊伍中只有人類或神族時，下一次所受傷害不會使你死亡，並於該回合完結時完全回復生命力"
    ],
    "monsterId": "1894",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "冬將軍",
    "activeName": ["魔族符能 ‧ 加冕"],
    "activeDescription": ["所有符石轉化為魔族強化符石"],
    "monsterId": "1895",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "奔跑蜥蝪",
    "activeName": ["玄冥絕塵 ‧ 聚靈"],
    "activeDescription": [
      "引爆光及暗符石以掉落強化符石；2 回合內，移動符石後光及暗符石的掉落率降至 50%，並將原有機率增加至心符石的掉落機率"
    ],
    "monsterId": "1896",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "高麗菜",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1897",
    "leaderName": "木之精神",
    "leaderDescription": "木屬性生命力 1.5 倍",
    "attribute": "木",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "雪精靈",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1898",
    "leaderName": "水之精神",
    "leaderDescription": "水屬性生命力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "青蛙 ‧ 水",
    "activeName": ["芳香四溢 ‧ 水"],
    "activeDescription": [
      "根據隊伍中水屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1899",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "青蛙 ‧ 火",
    "activeName": ["芳香四溢 ‧ 火"],
    "activeDescription": [
      "根據隊伍中火屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1900",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "青蛙 ‧ 木",
    "activeName": ["芳香四溢 ‧ 木"],
    "activeDescription": [
      "根據隊伍中木屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1901",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "青蛙 ‧ 光",
    "activeName": ["芳香四溢 ‧ 光"],
    "activeDescription": [
      "根據隊伍中光屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1902",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "青蛙 ‧ 暗",
    "activeName": ["芳香四溢 ‧ 暗"],
    "activeDescription": [
      "根據隊伍中暗屬性成員的數量，回復相應的生命力，最多可回復 6000 點生命力"
    ],
    "monsterId": "1903",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "4★"
  },
  {
    "monsterName": "銅牛蒸獄 ‧ 皮爾婁",
    "activeName": ["曼妙的尖叫 ‧ 火烤"],
    "activeDescription": [
      "2 回合內，隨機將 3 粒符石轉化為火強化符石，移動符石時觸碰的火符石轉化為獸族符石"
    ],
    "monsterId": "1904",
    "leaderName": "獸類萬鈞之怒",
    "leaderDescription": "獸類攻擊力 4 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "爽脆酸甜 ‧ 青蘋果",
    "activeName": ["蜜甜之妖靈 ‧ 木"],
    "activeDescription": [
      "木符石轉化為妖族符石。1 回合內，心符石兼具 50% 木符石效果；首批消除 5 種屬性符石時，自身主動技能 CD 減少 2"
    ],
    "monsterId": "1905",
    "leaderName": "妖精之再生",
    "leaderDescription": "妖精類回復力 2.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "飽滿馥香 ‧ 香蕉",
    "activeName": ["蜜甜之妖靈 ‧ 光"],
    "activeDescription": [
      "光符石轉化為妖族符石。1 回合內，心符石兼具 50% 光符石效果；首批消除 5 種屬性符石時，自身主動技能 CD 減少 2"
    ],
    "monsterId": "1907",
    "leaderName": "妖精之再生",
    "leaderDescription": "妖精類回復力 2.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "魔法的原始碼 ‧ Android",
    "activeName": ["機械零件 ‧ 木"],
    "activeDescription": ["隨機將 3 粒木符石轉化為機械族強化符石"],
    "monsterId": "1908",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "木",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "機器人的詠願 ‧ Android",
    "activeName": ["機械零件 ‧ 火"],
    "activeDescription": ["隨機將 3 粒火符石轉化為機械族強化符石"],
    "monsterId": "1909",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "科技與魔法 ‧ Android 與莫莉",
    "activeName": ["水靈召喚"],
    "activeDescription": [
      "1 回合內，人類及機械族攻擊力及回復力 1.6 倍；首批掉落的 15 粒符石必定為水及心符石"
    ],
    "monsterId": "1910",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "約定盟誓 ‧ 索貝克",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1916",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "黷武狂執 ‧ 凱布利",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1917",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "忠職銘守 ‧ 塞爾凱特",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1918",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "穹蒼之隼 ‧ 荷魯斯",
    "activeName": ["決勝的謀略"],
    "activeDescription": [
      "隨機引爆 3 個神族成員直行的符石，以掉落該直行成員屬性的強化符石"
    ],
    "monsterId": "1919",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "法老王 ‧ 那爾邁",
    "activeName": ["符紋秘術"],
    "activeDescription": [
      "將最底 1 橫行的符石轉化為 3 粒光符石及 3 粒心符石，並將最左及最右方各 1 直行的 4 粒符石轉化為暗符石；技能發動回合若有擊斃敵人，於回合結束時完全回復生命力"
    ],
    "monsterId": "1920",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "肉圓",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1921",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "溫軟肉球 ‧ 肉圓",
    "activeName": ["渾身是肉"],
    "activeDescription": [
      "2 回合內，完全回復生命力，若於最後一層 (Wave) 發動此技能，獸類攻擊力 2.5 倍"
    ],
    "monsterId": "1922",
    "leaderName": "萌之治癒 ‧ 獸",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4 倍；每回合回復 3 倍自身回復力等值的生命力 (需消除符石)",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "高柏飛",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1923",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "森羅幻象 ‧ 高柏飛",
    "activeName": ["熾燄幻術"],
    "activeDescription": [
      "將 3 粒符石轉化為火符石 (心符石優先轉換)。1 回合內，自身攻擊力 8 倍 (攻擊力不可與其他成員共享)；若此技能為該回合最後發動的主動技能時，自身主動技能 CD 減少 3"
    ],
    "monsterId": "1924",
    "leaderName": "火影戲法 ‧ 獸",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4.5 倍；消除 6 粒或以上火符石時，全隊攻擊力額外提升 1.8 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "阿飄",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1925",
    "leaderName": "幽魂的力量",
    "leaderDescription": "隊伍中只有獸類成員時，全隊生命力 2 倍及攻擊力 5.5 倍；每回合扣除自身總生命力 10%；每消除 1 粒獸族符石，回復 5% 總生命力",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "如煙無跡 ‧ 阿飄",
    "activeName": ["驚世爆破"],
    "activeDescription": [
      "所有符石轉化為獸族強化符石。隊伍中只有獸類成員時，1 回合內，首批 1 粒符石即可發動消除"
    ],
    "monsterId": "1926",
    "leaderName": "幽魂的力量",
    "leaderDescription": "隊伍中只有獸類成員時，全隊生命力 2 倍及攻擊力 5.5 倍；每回合扣除自身總生命力 10%；每消除 1 粒獸族符石，回復 5% 總生命力",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "零",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1927",
    "leaderName": "異瞳的力量",
    "leaderDescription": "獸類生命力及回復力 1.5 倍，並延長移動符石時間 2 秒；連擊 (Combo) 時攻擊力提升 125%；所有屬性符石兼具其他屬性符石效果：隊伍中每多 1 個獸類成員可提升 20% 兼具效果，最大 100% (可疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "隨緣順心 ‧ 零",
    "activeName": ["順勢而攻"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，若隊長及戰友均為獸類成員時，全隊攻擊力 2.5 倍；消除 5 種屬性符石時，該回合所受傷害不會使你死亡"
    ],
    "monsterId": "1928",
    "leaderName": "異瞳的力量",
    "leaderDescription": "獸類生命力及回復力 1.5 倍，並延長移動符石時間 2 秒；連擊 (Combo) 時攻擊力提升 125%；所有屬性符石兼具其他屬性符石效果：隊伍中每多 1 個獸類成員可提升 20% 兼具效果，最大 100% (可疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "蜜兒",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1929",
    "leaderName": "女王的力量",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4 倍及增加 400 點回復力。隊伍中沒有重複成員時，每回合消除符石的組數愈多，全隊攻擊力額外提升愈多，消除 10 組可提升至最大 3 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "領風典範 ‧ 蜜兒",
    "activeName": ["伺機而攻"],
    "activeDescription": [
      "發動技能時敵方全體生命力需為全滿：所有成員進入潛行模式及攻擊力提升 3 倍，效果持續至對敵人造成傷害 (效果持續期間技能不會冷卻)"
    ],
    "monsterId": "1930",
    "leaderName": "女王的力量",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4 倍及增加 400 點回復力。隊伍中沒有重複成員時，每回合消除符石的組數愈多，全隊攻擊力額外提升愈多，消除 10 組可提升至最大 3 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "慌慌",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1931",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "精破奇鎖 ‧ 慌慌",
    "activeName": ["機獸之鑰"],
    "activeDescription": [
      "解除獸類及機械族成員被封鎖的技能 (此技能無視封鎖技能)。隨機將 3 個獸類及機械族成員直行的符石轉化為強化符石"
    ],
    "monsterId": "1932",
    "leaderName": "機關術 ‧ 獸",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 3 倍；獸類對機械族目標攻擊力額外提升 2 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "泡芙",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1933",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "巧手廚魂 ‧ 泡芙",
    "activeName": ["符石強化劑"],
    "activeDescription": [
      "引爆獸類成員直行的符石，以掉落強化符石；1 回合內，消除光及暗符石時，個人追打光屬性攻擊 1 次。若此技能為該回合首個發動的主動技能時，自身主動技能 CD 減少 3"
    ],
    "monsterId": "1934",
    "leaderName": "玄光盛宴 ‧ 獸",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4.5 倍；消除 6 粒或以上光符石時，全隊攻擊力額外提升 1.8 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "添哥",
    "activeName": ["裝甲破壞"],
    "activeDescription": ["3 回合內，無視全體敵人 75% 的防禦力"],
    "monsterId": "1935",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "按圖索籍 ‧ 添哥",
    "activeName": ["元素精算"],
    "activeDescription": [
      "1 回合內，每首批消除 1 組屬性符石，首批掉落 3 粒被其克制的屬性符石 (暗符石優先掉落)；若於最後一層 (Wave) 發動此技能，獸類攻擊力 2.5 倍"
    ],
    "monsterId": "1936",
    "leaderName": "記憶療法 ‧ 獸",
    "leaderDescription": "隊伍中只有獸類成員時，全隊回復力 3.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "醫密祕方 ‧ 紅藥水",
    "activeName": ["貓療術"],
    "activeDescription": [
      "3 回合內，根據隊伍中獸類成員的數量，回復相應的生命力，6 個獸類成員可回復最多 15000 點生命力；於單數層數 (Wave) 發動此技能，此技能回復量 2 倍及最多可回復 30000 點生命力"
    ],
    "monsterId": "1937",
    "leaderName": "熾燄萬鈞之怒",
    "leaderDescription": "火屬性攻擊力 4 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "毛拳重擊 ‧ 鐵拳",
    "activeName": ["爆烈之肌"],
    "activeDescription": [
      "引爆場上所有符石，以掉落該直行獸類成員屬性的符石，獸類以外成員直行的符石則隨機掉落"
    ],
    "monsterId": "1938",
    "leaderName": "玄光萬鈞之怒",
    "leaderDescription": "光屬性攻擊力 4 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "詭譎專研 ‧ 布洛傑特",
    "activeName": ["奪目的光與影"],
    "activeDescription": [
      "所有符石轉化為固定數量的光及暗符石；於雙數層數 (Wave) 發動此技能，則轉化為固定數量的光強化及暗強化符石"
    ],
    "monsterId": "1939",
    "leaderName": "幽冥萬鈞之怒",
    "leaderDescription": "暗屬性攻擊力 4 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "家貲萬貫 ‧ 庫利南",
    "activeName": ["煉寶秘術"],
    "activeDescription": [
      "1 回合內，所有非強化符石轉化為強化符石；轉化的符石數量愈多，全隊攻擊力提升愈多，轉化 30 粒可提升至最大 2.8 倍"
    ],
    "monsterId": "1940",
    "leaderName": "幽冥萬鈞之怒",
    "leaderDescription": "暗屬性攻擊力 4 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "探偵情報 ‧ 一毛",
    "activeName": ["掃蕩叛逆"],
    "activeDescription": [
      "引爆自身、隨機 1 個火屬性獸類及 1 個木屬性獸類成員直行的符石；1 回合內，消除 6 粒或以上獸族符石時，獸類攻擊力 2.2 倍"
    ],
    "monsterId": "1941",
    "leaderName": "元素為力 ‧ 獸",
    "leaderDescription": "隊伍中有 3 個或以上屬性成員時，獸類攻擊力 5 倍",
    "attribute": "水",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "蒐集本色 ‧ 二毛",
    "activeName": ["吞食記錄"],
    "activeDescription": [
      "心符石轉化為強化符石，水、火及木符石轉化為獸族符石。1 回合內，將掉落的水、火及木符石以獸族強化符石代替"
    ],
    "monsterId": "1942",
    "leaderName": "元素協力 ‧ 獸",
    "leaderDescription": "隊伍中有 3 個或以上屬性成員時，獸類攻擊力 4 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "小聰明獻策 ‧ 三毛",
    "activeName": ["木葉攻勢"],
    "activeDescription": [
      "1 回合內，個人追打自身攻擊力 3 倍的木屬性攻擊 2 次；發動技能時，若場上有獸族符石，技能效果變為持續 3 回合"
    ],
    "monsterId": "1943",
    "leaderName": "元素協力 ‧ 獸",
    "leaderDescription": "隊伍中有 3 個或以上屬性成員時，獸類攻擊力 4 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "參透的賢者 ‧ 山特古羅斯",
    "activeName": ["出其不意之肌力"],
    "activeDescription": [
      "15 秒，可任意移動符石而不會發動消除。1 回合內，人類及妖精類攻擊力 2 倍"
    ],
    "monsterId": "1944",
    "leaderName": "巧靈深思之力",
    "leaderDescription": "人類及妖精類攻擊力 6 倍",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "聖誕麋鹿",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1945",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "火",
    "race": "進化素材",
    "star": "6★"
  },
  {
    "monsterName": "萬魔壟斷 ‧  薩魯曼",
    "activeName": ["群魔共舞"],
    "activeDescription": ["2 回合內，暗屬性及妖精類的攻擊力及回復力 2 倍"],
    "monsterId": "1946",
    "leaderName": "萬妖齊舞",
    "leaderDescription": "妖精類攻擊力及回復力 3.5 倍。生命力全滿時，妖精類攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "8★"
  },
  {
    "monsterName": "骷骸操縱 ‧ 薩魯曼",
    "activeName": ["妖魅咒訣"],
    "activeDescription": [
      "隨機 2 個妖精類成員直行的符石轉化為妖族符石。1 回合內，消除妖族符石愈多，全隊攻擊力提升愈多，消除 25 粒可提升至最大 3 倍"
    ],
    "monsterId": "1947",
    "leaderName": "萬妖狂舞之幽",
    "leaderDescription": "暗屬性及妖精類攻擊力 4.5 倍。消除妖族符石時，暗屬性及妖精類攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "8★"
  },
  {
    "monsterName": "骷羚面具 ‧ 薩魯曼",
    "activeName": ["神妖化幽"],
    "activeDescription": [
      "將 3 粒符石轉化為暗強化符石 (心符石優先轉換)，若隊伍中只有神族及妖精類成員，則轉化 6 粒暗強化符石"
    ],
    "monsterId": "1948",
    "leaderName": "萬妖狂舞之幽",
    "leaderDescription": "暗屬性及妖精類攻擊力 4.5 倍。消除妖族符石時，暗屬性及妖精類攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "8★"
  },
  {
    "monsterName": "古羚魂面具 ‧ 薩魯曼",
    "activeName": ["神妖化幽"],
    "activeDescription": [
      "將 3 粒符石轉化為暗強化符石 (心符石優先轉換)，若隊伍中只有神族及妖精類成員，則轉化 6 粒暗強化符石"
    ],
    "monsterId": "1949",
    "leaderName": "萬妖狂舞之幽",
    "leaderDescription": "暗屬性及妖精類攻擊力 4.5 倍。消除妖族符石時，暗屬性及妖精類攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "8★"
  },
  {
    "monsterName": "霓彩鳥",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1950",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "暗",
    "race": "進化素材",
    "star": "6★"
  },
  {
    "monsterName": "虹螢騰蛇",
    "activeName": ["超級治療"],
    "activeDescription": ["回復自身回復力 10 倍的生命力"],
    "monsterId": "1951",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "光",
    "race": "進化素材",
    "star": "6★"
  },
  {
    "monsterName": "九頭吐舌 ‧ 海德拉",
    "activeName": ["九九激濤"],
    "activeDescription": [
      "將 9 粒符石轉化為水強化符石 (火符石優先轉換)。1 回合內，首批消除所有水符石時，個人追打水屬性攻擊 9 次"
    ],
    "monsterId": "1952",
    "leaderName": "九龍洶勢",
    "leaderDescription": "龍類攻擊力 3 倍，消除 3 組或以上的水符石時，龍類攻擊力額外提升 3 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "泯滅陰陽 ‧ 蘆屋道滿",
    "activeName": ["屠殺之勢 ‧ 強"],
    "activeDescription": [
      "1 回合內，自身及身旁成員的攻擊力 2.5 倍，若身旁的成員同為水屬性或魔族，該成員攻擊力提升至 5 倍"
    ],
    "monsterId": "1953",
    "leaderName": "魔魅之靈泉 ‧ 強",
    "leaderDescription": "水屬性攻擊力 4.5 倍。當生命力少於 50% 時，心符石效果提升至 300% (效果不能疊加)",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "六目蜈蚣",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1954",
    "leaderName": "兩儀",
    "leaderDescription": "所受傷害 30% (不包括敵技傷害) 轉化為我方生命力",
    "attribute": "水",
    "race": "進化素材",
    "star": "6★"
  },
  {
    "monsterName": "星靈魔導士 ‧ 露西",
    "activeName": ["星靈召喚・水瓶座"],
    "activeDescription": [
      "水符石轉化為強化符石，全隊攻擊力 2.5 倍及減少 50% 所受傷害，效果持續至受到敵人攻擊"
    ],
    "monsterId": "1955",
    "leaderName": "星靈魔法",
    "leaderDescription": "人類及妖精類攻擊力 4 倍，心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "火之滅龍魔導士 ‧ 納茲",
    "activeName": ["火龍的鐵拳"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標轉為火屬性及每回合以 30 倍自身攻擊力對敵方全體造成火屬性傷害，並持續至死亡；效果持續期間，自身攻擊力 5 倍"
    ],
    "monsterId": "1956",
    "leaderName": "滅龍魔法・炎",
    "leaderDescription": "隊伍中只有人類、妖精類或龍類成員時：全隊攻擊力 5 倍，生命力及回復力 1.3 倍；消除 2 組或以上的火符石時，全隊攻擊力額外提升 1.5 倍；隊伍成員屬性對龍類目標的攻擊力提升 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "天空的巫女 ‧ 溫蒂",
    "activeName": ["天龍的翼擊"],
    "activeDescription": [
      "1 回合內，隨機將 3 粒符石轉化為心符石；人類攻擊力及回復力 1.3 倍；首次使用後有一定機會可即時再次發動技能 (每層最多觸發 1 次)"
    ],
    "monsterId": "1957",
    "leaderName": "滅龍魔法・天空",
    "leaderDescription": "隊伍中只有人類成員時：全隊攻擊力 3.5 倍；心符石兼具 25% 木符石效果 (可疊加)；隊伍成員屬性對龍類目標的攻擊力提升 2.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "妖精女王 ‧ 艾爾莎",
    "activeName": ["天輪・五芒星之劍"],
    "activeDescription": [
      "1 回合內，以累積戰鬥回合數 (需消除符石) +1 的數量，轉化光人族符石 (水、光及心以外符石優先轉換)、額外增加連擊 (Combo) 數目及追打次數，最多可轉化 5 粒光人族符石、額外增加 5 連擊 (Combo) 及以 50% 自身攻擊力追打光屬性攻擊 5 次。發動技能後將累積戰鬥回合數重置"
    ],
    "monsterId": "1958",
    "leaderName": "換裝魔法",
    "leaderDescription": "隊伍中只有人類及妖精類成員時：全隊攻擊力 3.5 倍；達成的連擊 (Combo) 數目愈多，全隊攻擊力額外提升愈多，8 連擊 (Combo) 可提升至最大 2.6 倍；消除水及光符石時，有 50% 機會減少 40% 所受傷害 (機率可以疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "鐵影之龍 ‧ 戈吉爾",
    "activeName": ["鐵龍劍"],
    "activeDescription": [
      "將自身及身旁直行 9 個指定位置的符石轉化為 6 粒暗強化符石及 3 粒暗符石；1 回合內，首批消除所有暗符石時，無視全體敵人的防禦力"
    ],
    "monsterId": "1959",
    "leaderName": "滅龍魔法・鐵",
    "leaderDescription": "隊伍中只有人類成員時：全隊攻擊力 3.5 倍；心符石兼具 25% 暗符石效果 (可疊加)；隊伍成員屬性對龍類目標的攻擊力提升 2.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "冰之魔導士 ‧ 格雷",
    "activeName": ["限界突破 一勢亂舞"],
    "activeDescription": [
      "隨機將 3 粒水符石四周的符石轉化為水強化符石；1 回合內，每消除 3 粒水符石，個人追打水屬性攻擊 1 次，最多追打 5 次"
    ],
    "monsterId": "1960",
    "leaderName": "造型魔法・冰",
    "leaderDescription": "隊伍中只有人類成員時：全隊攻擊力 4 倍；水屬性對龍類、神族及魔族目標的攻擊力提升 2.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "雷之滅龍魔導士 ‧ 拉格薩斯",
    "activeName": ["鳴御雷"],
    "activeDescription": [
      "1 回合內，引爆心及暗符石，以掉落光人族強化符石；引爆的符石愈多，自身攻擊力愈高，引爆 14 粒可達至最高 8 倍 (攻擊力不可與其他成員共享)"
    ],
    "monsterId": "1961",
    "leaderName": "滅龍魔法・雷",
    "leaderDescription": "隊伍中只有人類成員時：全隊攻擊力 3.5 倍；心符石兼具 25% 光符石效果 (可疊加)；隊伍成員屬性對龍類目標的攻擊力提升 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "撒旦之魂 ‧ 米拉珍",
    "activeName": ["撒旦之魂"],
    "activeDescription": [
      "3 回合內，將心及暗符石轉化為強化符石；所有成員百毒不侵；延長移動符石時間至 15 秒"
    ],
    "monsterId": "1962",
    "leaderName": "接收",
    "leaderDescription": "人類及魔族攻擊力 4 倍；每次魔族成員發動技能，人類及魔族攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "魔女之罪 ‧ 傑拉爾",
    "activeName": ["七星劍"],
    "activeDescription": [
      "隊伍中有水及光屬性成員才可發動此技能：所有符石轉化為固定數量及位置的 6 種符石"
    ],
    "monsterId": "1963",
    "leaderName": "天體魔法",
    "leaderDescription": "全隊攻擊力 3 倍，首批消除 6、7 或 9 連擊 (Combo) 時，攻擊力額外提升 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "炎龍王 ‧ 伊格尼爾",
    "activeName": ["炎龍王的咆哮"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 12 秒；引爆隊長及戰友直行的符石，以掉落火強化符石，並對敵方全體造成 200 萬火屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "1964",
    "leaderName": "炎龍王",
    "leaderDescription": "火屬性及龍類攻擊力 3 倍，火屬性龍類攻擊力則 9 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "黑魔導士 ‧ 瑟雷夫",
    "activeName": ["死亡狩獵"],
    "activeDescription": [
      "將敵方全體轉為暗屬性及防禦力減至 0，效果持續至敵人死亡；效果期間敵人所受到的暗屬性傷害提升 2.5 倍。將心及光符石轉化為暗強化符石；下回合開始時，自身直行的符石轉化為暗強化符石"
    ],
    "monsterId": "1965",
    "leaderName": "黑魔法",
    "leaderDescription": "暗屬性攻擊力 5 倍；當前生命力大於 80% 時，下一次所受傷害不會使你死亡  (同 1 回合只發動 1 次)；當前生命力少於 25% 時，自身攻擊力及回復力額外提升 2.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "妖尾會長 ‧ 馬卡羅夫",
    "activeName": ["妖精的法律"],
    "activeDescription": [
      "以 200 倍自身攻擊力對敵方全體造成無屬性傷害；若隊伍中有 4 個或以上「FAIRY TAIL 公會成員」 (包括 FAIRY TAIL 石抽系列角色、梅比斯、馬卡羅夫、茱比亞及龐沙利利) 時，此傷害無視敵人技能"
    ],
    "monsterId": "1967",
    "leaderName": "巨人",
    "leaderDescription": "隊伍中只有人類成員時，全隊生命力及攻擊力 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "最強之貓 ‧ 龐沙利利",
    "activeName": ["巨劍降臨"],
    "activeDescription": [
      "將最頂 1 橫行的符石轉化為木強化符石；1 回合內，單體攻擊轉化為全體攻擊；消除 3 種或以上屬性符石時，自身攻擊力 8 倍 (攻擊力不可與其他成員共享)"
    ],
    "monsterId": "1968",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "水之魔導士 ‧ 茱比亞",
    "activeName": ["水流昇霞"],
    "activeDescription": [
      "引爆暗符石，以掉落水強化符石；1 回合內，暗符石的掉落率降至 0，並將原有機率增加至水符石的掉落機率"
    ],
    "monsterId": "1969",
    "leaderName": "水流魔法",
    "leaderDescription": "水屬性攻擊力 3 倍；回合結束時，隨機將 2 粒水強化符石四周的符石轉化為水符石",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "時間操控 ‧ 烏璐緹雅",
    "activeName": ["薔薇的王冠"],
    "activeDescription": ["1 回合內，全隊攻擊力 2.5 倍；減少 70% 所受傷害"],
    "monsterId": "1970",
    "leaderName": "時間的弧形",
    "leaderDescription": "全隊攻擊力 3 倍，延長移動符石時間 5 秒，每回合扣除自身 10% 總生命力",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "妖精軍師 ‧ 梅比斯",
    "activeName": ["妖精軍師的戰術"],
    "activeDescription": [
      "5 回合內，將光符石轉化為妖族符石；全隊攻擊力 1.5 倍，「FAIRY TAIL 公會成員」(包括 FAIRY TAIL 石抽系列角色、梅比斯、馬卡羅夫、茱比亞及龐沙利利) 的攻擊力則 2.25 倍"
    ],
    "monsterId": "1971",
    "leaderName": "妖精軍師",
    "leaderDescription": "妖精類生命力、攻擊力及回復力 2 倍；消除妖族符石時，妖精類攻擊力額外提升 2 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "哈比",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1972",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "水",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "夏璐璐",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "1973",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "強化素材",
    "star": "5★"
  },
  {
    "monsterName": "奪霸凶猴 ‧ 猿真",
    "activeName": ["狂獸侵略"],
    "activeDescription": [
      "自身直行的符石轉化為木獸族強化符石。隊伍中只有獸類成員時：於回合結束時於隨機將 3 粒自身直行的符石轉化為木獸族強化符石，效果持續至沒有消除獸族符石"
    ],
    "monsterId": "1975",
    "leaderName": "獸類萬鈞之怒",
    "leaderDescription": "獸類攻擊力 4 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "迅殺芭扇 ‧ 羅剎女",
    "activeName": ["逆焰之一扇天涯"],
    "activeDescription": [
      "木屬性傷害可克制火及木屬性目標；每消除 1 組木符石，個人追打木屬性攻擊 1 次，最多 10 次 (效果會在關閉此技能或死亡後消失)。技能關閉時，當前技能 CD 減少 2 ，並將所有符石轉化為木強化符石"
    ],
    "monsterId": "1981",
    "leaderName": "神魔之森 ‧ 狂風",
    "leaderDescription": "隊伍中只有木屬性魔族或木屬性神族成員時：全隊攻擊力 4 倍，每消除 4 組符石時，必定掉落 4 粒木強化符石",
    "attribute": "木",
    "race": "魔族",
    "star": "8★"
  },
  {
    "monsterName": "大乘儆惡 ‧ 唐三藏",
    "activeName": ["弘揚大義 ‧ 除障"],
    "activeDescription": [
      "引爆場上所有風化符石及凍結符石；1 回合內，光屬性攻擊力及回復力 2.2 倍；當隊伍中所有成員的攻擊力基值相同時，所有符石兼具其他符石效果"
    ],
    "monsterId": "1982",
    "leaderName": "種族凝滙 ‧ 光之暴",
    "leaderDescription": "隊伍中有 4 種或以上種族成員時：光屬性攻擊力 6 倍；每消除 1 種「種族符石」，光屬性攻擊力額外提升 1.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "千古一帝 ‧ 秦始皇",
    "activeName": ["焚書坑儒"],
    "activeDescription": [
      "將場上的符石變回原始模樣；點擊元素法陣上的符石 3 次，並將固定位置的符石轉化為所點擊的強化符石"
    ],
    "monsterId": "1983",
    "leaderName": "亂世重典",
    "leaderDescription": "暗屬性及魔族攻擊力 6 倍；自身攻擊無視敵人的防禦力；必然延長移動符石時間 2 秒。消除 1 組 5 粒或以上符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "六彩斑斕 ‧ 蠑子",
    "activeName": ["凍結"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合"
    ],
    "monsterId": "1985",
    "leaderName": "治療之心",
    "leaderDescription": "每回合回復自身回復力 (需要消除符石)",
    "attribute": "水",
    "race": "強化素材",
    "star": "6★"
  },
  {
    "monsterName": "萬銃呼喚 · 克蘇魯",
    "activeName": ["浪濤如虹"],
    "activeDescription": [
      "火及心符石轉化為心強化符石，水及暗符石轉化為水強化符石；機械族成員的行動值提升 30%。若此時所有機械族成員的行動值達至 100%，自身主動技能 CD 減少 2"
    ],
    "monsterId": "1991",
    "leaderName": "機械萬鈞之怒 ‧ 極",
    "leaderDescription": "機械族攻擊力 5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "狙槍轟射 · 基路比魯斯",
    "activeName": ["機甲吐焰"],
    "activeDescription": [
      "隨機將 2 個機械族成員直行的符石轉化為火強化符石；若隊長及戰友均為機械族時，1 回合內，隊長及戰友攻擊力 2.5 倍"
    ],
    "monsterId": "1992",
    "leaderName": "機械萬鈞之怒 ‧ 極",
    "leaderDescription": "機械族攻擊力 5 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "木旋輪彈 · 美杜莎",
    "activeName": ["電流石化"],
    "activeDescription": [
      "電擊敵方全體，使受影響目標無法行動，持續 3 回合。效果期間機械族攻擊力 1.5 倍"
    ],
    "monsterId": "1993",
    "leaderName": "機械萬鈞之怒 ‧ 極",
    "leaderDescription": "機械族攻擊力 5 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "遊炮厲耀 · 格里芬",
    "activeName": ["電光如虹"],
    "activeDescription": [
      "暗及心符石轉化為心強化符石，光及火符石轉化為光強化符石。機械族成員的行動值提升 30%；若此時所有機械族成員的行動值達至 100%，自身主動技能 CD 減少 2"
    ],
    "monsterId": "1994",
    "leaderName": "機械萬鈞之怒 ‧ 極",
    "leaderDescription": "機械族攻擊力 5 倍",
    "attribute": "光",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "幽附鋼刀 · 巴風特",
    "activeName": ["機甲魅鐮"],
    "activeDescription": [
      "隨機將 2 個機械族成員直行的符石轉化為暗強化符石；若隊長及戰友均為機械族時，1 回合內，隊長及戰友攻擊力 2.5 倍"
    ],
    "monsterId": "1995",
    "leaderName": "機械萬鈞之怒 ‧ 極",
    "leaderDescription": "機械族攻擊力 5 倍",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "誅滅戰劍 · 費雷",
    "activeName": ["汪洋神號", "不死神授 ‧ 水"],
    "activeDescription": [
      "水符石轉化為水神族強化符石，同時火及心符石轉化為水強化符石",
      "1 回合內，掉落的水符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡"
    ],
    "monsterId": "2001",
    "leaderName": "浪濤 ‧ 極致",
    "leaderDescription": "隊伍中只有水屬性成員時：全隊攻擊力 6 倍，生命力及回復力 1.2 倍；消除神族符石時，全隊攻擊力額外提升 1.5 倍；回合結束時，隨機將 3 粒水符石轉化為強化符石",
    "attribute": "水",
    "race": "神族",
    "star": "8★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "超然焚烈 · 提爾",
    "activeName": ["熾燃神號", "不死神授 ‧ 火"],
    "activeDescription": [
      "火符石轉化為火神族強化符石，同時木及心符石轉化為火強化符石",
      "1 回合內，掉落的火符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡"
    ],
    "monsterId": "2002",
    "leaderName": "流焰 ‧ 極致",
    "leaderDescription": "隊伍中只有火屬性成員時：全隊攻擊力 6 倍，生命力及回復力 1.2 倍；消除神族符石時，全隊攻擊力額外提升 1.5 倍；回合結束時，隨機將 3 粒火符石轉化為強化符石",
    "attribute": "火",
    "race": "神族",
    "star": "8★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "終章詠嘆 · 費蕾雅",
    "activeName": ["森野神號", "不死神授 ‧ 木"],
    "activeDescription": [
      "木符石轉化為木神族強化符石，同時水及心符石轉化為木強化符石",
      "1 回合內，掉落的木符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡"
    ],
    "monsterId": "2003",
    "leaderName": "藤蔓 ‧ 極致",
    "leaderDescription": "隊伍中只有木屬性成員時：全隊攻擊力 6 倍，生命力及回復力 1.2 倍；消除神族符石時，全隊攻擊力額外提升 1.5 倍；回合結束時，隨機將 3 粒木符石轉化為強化符石",
    "attribute": "木",
    "race": "神族",
    "star": "8★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "擎天萬鈞 · 索爾",
    "activeName": ["聖光神號", "不死神授 ‧ 光"],
    "activeDescription": [
      "光符石轉化為光神族強化符石，同時暗及心符石轉化為光強化符石",
      "1 回合內，掉落的光符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡"
    ],
    "monsterId": "2004",
    "leaderName": "驚雷 ‧ 極致",
    "leaderDescription": "隊伍中只有光屬性成員時：全隊攻擊力 6 倍，生命力及回復力 1.2 倍；消除神族符石時，全隊攻擊力額外提升 1.5 倍；回合結束時，隨機將 3 粒光符石轉化為強化符石",
    "attribute": "光",
    "race": "神族",
    "star": "8★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "罪愆篡改 · 洛基",
    "activeName": ["魅影神號", "不死神授 ‧ 暗"],
    "activeDescription": [
      "暗符石轉化為暗神族強化符石，同時光及心符石轉化為暗強化符石",
      "1 回合內，掉落的暗符石以神族強化符石代替；首批消除 10 粒或以上神族符石時，本回合所受傷害不會使你死亡"
    ],
    "monsterId": "2005",
    "leaderName": "狂魅 ‧ 極致",
    "leaderDescription": "隊伍中只有暗屬性成員時：全隊攻擊力 6 倍，生命力及回復力 1.2 倍；消除神族符石時，全隊攻擊力額外提升 1.5 倍；回合結束時，隨機將 3 粒暗符石轉化為強化符石",
    "attribute": "暗",
    "race": "神族",
    "star": "8★",
    "multiType": "MULTI"
  },
  {
    "monsterName": "愛因斯坦",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "2006",
    "leaderName": "機械理論",
    "leaderDescription": "隊伍中只有機械族或人類成員時：全隊攻擊力 4.5 倍及減少 40% 所受傷害；消除水強化符石時，機械族成員的行動值提升 5%；所有機械族成員的行動值達至 100% 時，攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "時空相對論 ‧ 愛因斯坦",
    "activeName": ["流水定律"],
    "activeDescription": [
      "3 回合內，首批掉落的 8 粒符石必定為水強化符石；技能持續時若所有機械族成員的行動值達至 100%，自身攻擊力 3 倍"
    ],
    "monsterId": "2007",
    "leaderName": "機械理論",
    "leaderDescription": "隊伍中只有機械族或人類成員時：全隊攻擊力 4.5 倍及減少 40% 所受傷害；消除水強化符石時，機械族成員的行動值提升 5%；所有機械族成員的行動值達至 100% 時，攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "牛頓",
    "activeName": ["火焰攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍火屬性傷害"],
    "monsterId": "2008",
    "leaderName": "靈氣迫人 ‧ 火",
    "leaderDescription": "人類攻擊力 3.5 倍，火符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "自然律變奏 ‧ 牛頓",
    "activeName": ["焰火引力"],
    "activeDescription": [
      "1 回合內，首批掉落的 15 粒符石必定為火強化符石；所有掉落的火符石必定相連"
    ],
    "monsterId": "2009",
    "leaderName": "靈氣迫人 ‧ 火",
    "leaderDescription": "人類攻擊力 3.5 倍，火符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "達爾文",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "2010",
    "leaderName": "金液流動",
    "leaderDescription": "隊伍中只有機械族成員時：全隊生命力、攻擊力及回復力 2 倍；消除 3 種或以上符石時，全隊攻擊力額外提升 3 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "木",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "生物多樣性 ‧ 達爾文",
    "activeName": ["元素探研"],
    "activeDescription": [
      "引爆所有符石以掉落強化符石，每引爆 1 種屬性符石，1 回合內自身攻擊力額外提升 1 倍，最多可提升至 6 倍；消除 5 種屬性符石時，自身主動技能 CD 減少 3"
    ],
    "monsterId": "2011",
    "leaderName": "金液流動",
    "leaderDescription": "隊伍中只有機械族成員時：全隊生命力、攻擊力及回復力 2 倍；消除 3 種或以上符石時，全隊攻擊力額外提升 3 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "愛迪生",
    "activeName": ["閃光攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍光屬性傷害"],
    "monsterId": "2012",
    "leaderName": "靈氣迫人 ‧ 光",
    "leaderDescription": "人類攻擊力 3.5 倍，光符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "無界限發明 ‧ 愛迪生",
    "activeName": ["雷電流竄"],
    "activeDescription": [
      "隨機 2 直行的符石轉化為該直行成員的種族強化符石；若隊伍中有 2 個或以上種族，所有符石轉化為該直行成員的種族強化符石"
    ],
    "monsterId": "2013",
    "leaderName": "靈氣迫人 ‧ 光",
    "leaderDescription": "人類攻擊力 3.5 倍，光符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "伽利略",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "2014",
    "leaderName": "幾何結界",
    "leaderDescription": "隊伍中只有機械族成員時：全隊攻擊力 5 倍及必然延長移動符石時間 1 秒；自身的攻擊力減至 0，並將原有的攻擊力基值的 2 倍分別加入所有成員的攻擊力基值，若使用相同的隊長及戰友，則分別加入所有隊員的攻擊力基值；於自身直行首批消除 1 組 4 粒或以上符石時，身旁成員的主動技能 CD 減少 1",
    "attribute": "暗",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "超新星序曲 ‧ 伽利略",
    "activeName": ["機械解密"],
    "activeDescription": [
      "解除機械族成員被封鎖的技能 (此技能無視封鎖技能)。3 回合內，機械族成員的攻擊力及回復力 1.8 倍；發動技能時若所有機械族成員的行動值達至 100%，延長移動符石時間至 15 秒"
    ],
    "monsterId": "2015",
    "leaderName": "幾何結界",
    "leaderDescription": "隊伍中只有機械族成員時：全隊攻擊力 5 倍及必然延長移動符石時間 1 秒；自身的攻擊力減至 0，並將原有的攻擊力基值的 2 倍分別加入所有成員的攻擊力基值，若使用相同的隊長及戰友，則分別加入所有隊員的攻擊力基值；於自身直行首批消除 1 組 4 粒或以上符石時，身旁成員的主動技能 CD 減少 1",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "瑪麗居禮",
    "activeName": ["水波攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍水屬性傷害"],
    "monsterId": "2016",
    "leaderName": "靈氣迫人 ‧ 水",
    "leaderDescription": "人類攻擊力 3.5 倍，水符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "同位素放射 ‧ 瑪麗居禮",
    "activeName": ["冷豔吐毒"],
    "activeDescription": [
      "解除水屬性成員被封鎖的技能 (此技能無視封鎖技能)。敵方全體中毒，每回合將受到施技者攻擊力 10 倍的傷害，此傷害無視防禦力及屬性並持續到死亡"
    ],
    "monsterId": "2017",
    "leaderName": "靈氣迫人 ‧ 水",
    "leaderDescription": "人類攻擊力 3.5 倍，水符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "蘇格拉底",
    "activeName": ["大地攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍木屬性傷害"],
    "monsterId": "2018",
    "leaderName": "機械陣式",
    "leaderDescription": "隊伍中有 3 種或以上屬性的機械族成員時：全隊攻擊力 3.5 倍；所有機械族成員的行動值達至 100% 時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "5★"
  },
  {
    "monsterName": "道德反詰法 ‧ 蘇格拉底",
    "activeName": ["機械重臂"],
    "activeDescription": [
      "1 回合內，機械族攻擊力及回復力 1.6 倍；回合結束時若「理想世界 ‧ 柏拉圖」及「乙太紛裂 ‧ 亞里士多德」的行動值達至 100% 時，自身主動技能 CD 減少 5"
    ],
    "monsterId": "2019",
    "leaderName": "機械陣式",
    "leaderDescription": "隊伍中有 3 種或以上屬性的機械族成員時：全隊攻擊力 3.5 倍；所有機械族成員的行動值達至 100% 時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "妮可",
    "activeName": ["暗影攻擊"],
    "activeDescription": ["對敵方全體造成 3 倍暗屬性傷害"],
    "monsterId": "2020",
    "leaderName": "靈氣迫人 ‧ 暗",
    "leaderDescription": "人類攻擊力 3.5 倍，暗符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "歸回星哈雷 ‧ 妮可",
    "activeName": ["過目不忘"],
    "activeDescription": [
      "於下回合開始時將場上的符石變回發動技能時的分佈 (包括強化符石、種族符石)，效果持續 2 回合"
    ],
    "monsterId": "2021",
    "leaderName": "靈氣迫人 ‧ 暗",
    "leaderDescription": "人類攻擊力 3.5 倍，暗符石兼具 25% 心符石效果 (可疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "理想世界 ‧ 柏拉圖",
    "activeName": ["機械化的紀錄"],
    "activeDescription": [
      "2 回合內，將火、木及暗符石轉化為機械族強化符石；發動技能時若「道德反詰法 ‧ 蘇格拉底」及「乙太紛裂 ‧ 亞里士多德」的行動值達至 100% 時，所有符石轉化為機械族強化符石"
    ],
    "monsterId": "2022",
    "leaderName": "機械始動",
    "leaderDescription": "全隊攻擊力 3.5 倍，機械族成員攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "引力牽繫 ‧ 哥白尼",
    "activeName": ["日心說"],
    "activeDescription": [
      "引爆所有符石，並將所有符石轉化為固定數量及位置的光強化符石及暗符石"
    ],
    "monsterId": "2023",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "乙太紛裂 ‧ 亞里士多德",
    "activeName": ["極樂之魅"],
    "activeDescription": [
      "1 回合內，自身攻擊力 5 倍 (攻擊力不可與其他成員共享)；發動技能時若「道德反詰法 ‧ 蘇格拉底」及「理想世界 ‧ 柏拉圖」的行動值達至 100% 時，自身攻擊力則提升至 10 倍"
    ],
    "monsterId": "2024",
    "leaderName": "機械始動",
    "leaderDescription": "全隊攻擊力 3.5 倍，機械族成員攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "新大陸展航 ‧ 哥倫布",
    "activeName": ["全速航行"],
    "activeDescription": [
      "1 回合內，機械族成員追打水、火及木屬性攻擊各 1 次；回合結束時，將水、火及木符石轉化為強化符石"
    ],
    "monsterId": "2025",
    "leaderName": "機械始動",
    "leaderDescription": "全隊攻擊力 3.5 倍，機械族成員攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "7★"
  },
  {
    "monsterName": "最後的審判 ‧ 米開朗基羅",
    "activeName": ["傲雅之森"],
    "activeDescription": [
      "心符石兼具木符石效果，隊長及戰友攻擊力 1.5 倍，效果持續至沒有達成 6 連擊 (Combo) 或以上"
    ],
    "monsterId": "2026",
    "leaderName": "目空四海",
    "leaderDescription": "全隊攻擊力 5 倍，所有成員無視屬性相剋",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "可塑性生命 · 薛丁格",
    "activeName": ["機械實驗"],
    "activeDescription": [
      "引爆隊伍中攻擊力基值最高的 3 個機械族成員直行的符石，以掉落該直行成員屬性的符石；若發動技能時我方生命力為 1，機械族成員的主動技能 CD 減少 2"
    ],
    "monsterId": "2027",
    "leaderName": "暗魄 ‧ 驅動",
    "leaderDescription": "暗屬性攻擊力 3.5 倍，暗屬性機械族攻擊力 4 倍",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "鍊合化光 · 佩脫拉",
    "activeName": ["不老魔法"],
    "activeDescription": [
      "隊伍中有 3 個或以上魔族成員時：連擊 (Combo) 時攻擊力提升 30%；回合結束時，將 3 粒符石轉化為魔族強化符石 (隊伍成員屬性符石優先轉換)，效果持續至沒有消除魔族符石"
    ],
    "monsterId": "2028",
    "leaderName": "魔族萬鈞之怒",
    "leaderDescription": "魔族攻擊力 4 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "我思故我在 ‧ 笛卡兒",
    "activeName": ["鑽探激濤"],
    "activeDescription": [
      "15 秒內，可任意移動符石而不會發動消除；發動技能時，若我方生命力為 1，本回合發動技能的機械族成員的技能 CD 減少 2"
    ],
    "monsterId": "2030",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "經驗匯聚 ‧ 培根",
    "activeName": ["靜守突擊"],
    "activeDescription": [
      "發動技能時記錄火符石的分佈；此技能可隨時關閉，關閉時，引爆所記錄位置的符石造成敵方全體無屬性傷害"
    ],
    "monsterId": "2031",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "定義質疑 ‧ 波以耳",
    "activeName": ["木石震天"],
    "activeDescription": [
      "1 回合內，消除木符石的數量愈多，自身攻擊力愈高，消除 30 粒可達至最高 10 倍 (攻擊力不可與其他成員共享)"
    ],
    "monsterId": "2032",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "甜心女僕 · 蒂芙妮",
    "activeName": ["偷心蜜語"],
    "activeDescription": [
      "心符石轉化為光機械族符石。1 回合內，每首批消除 1 粒機械族符石，可減少 10% 所受傷害，消除 8 粒可減少最多 80% 所受傷害"
    ],
    "monsterId": "2033",
    "leaderName": "光源 ‧ 驅動",
    "leaderDescription": "光屬性攻擊力 3.5 倍，光屬性機械族攻擊力 4 倍",
    "attribute": "光",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "盈水劍舞 · 冰花",
    "activeName": ["符石同化術 ‧ 水強"],
    "activeDescription": [
      "隨機將 3 至 5 粒符石轉化為水強化符石 (心符石優先轉換)；發動技能時若我方生命力全滿，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "2041",
    "leaderName": "流雲奧義 ‧ 人",
    "leaderDescription": "水屬性攻擊力 4 倍及人類攻擊力 1.5 倍，水屬性人類攻擊力則 6 倍",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "瀑浴雙劍 · 冰花",
    "activeName": ["流雲同化術 ‧ 加冕"],
    "activeDescription": [
      "隨機將 4 至 6 粒符石轉化為水強化符石 (火符石優先轉換)，發動技能時若我方生命力全滿，則轉化為水人族強化符石"
    ],
    "monsterId": "2042",
    "leaderName": "流雲奧義 ‧ 人",
    "leaderDescription": "水屬性攻擊力 4 倍及人類攻擊力 1.5 倍，水屬性人類攻擊力則 6 倍",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "熾軍雄志 · 洛可可",
    "activeName": ["符石同化術 ‧ 火強"],
    "activeDescription": [
      "隨機將 3 至 5 粒符石轉化為火強化符石 (心符石優先轉換)；發動技能時若我方生命力全滿，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "2043",
    "leaderName": "赤燄奧義 ‧ 人",
    "leaderDescription": "火屬性攻擊力 4 倍及人類攻擊力 1.5 倍，火屬性人類攻擊力則 6 倍",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "麗姿炸現 · 洛可可",
    "activeName": ["赤燄同化術 ‧ 加冕"],
    "activeDescription": [
      "隨機將 4 至 6 粒符石轉化為火強化符石 (木符石優先轉換)，發動技能時若我方生命力全滿，則轉化為火人族強化符石"
    ],
    "monsterId": "2044",
    "leaderName": "赤燄奧義 ‧ 人",
    "leaderDescription": "火屬性攻擊力 4 倍及人類攻擊力 1.5 倍，火屬性人類攻擊力則 6 倍",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "狂亂妙醫 · 新月",
    "activeName": ["符石同化術 ‧ 木強"],
    "activeDescription": [
      "隨機將 3 至 5 粒符石轉化為木強化符石 (心符石優先轉換)；發動技能時若我方生命力全滿，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "2045",
    "leaderName": "藤棘奧義 ‧ 人",
    "leaderDescription": "木屬性攻擊力 4 倍及人類攻擊力 1.5 倍，木屬性人類攻擊力則 6 倍",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "武裝狂醫 · 新月",
    "activeName": ["藤棘同化術 ‧ 加冕"],
    "activeDescription": [
      "隨機將 4 至 6 粒符石轉化為木強化符石 (水符石優先轉換)，發動技能時若我方生命力全滿，則轉化為木人族強化符石"
    ],
    "monsterId": "2046",
    "leaderName": "藤棘奧義 ‧ 人",
    "leaderDescription": "木屬性攻擊力 4 倍及人類攻擊力 1.5 倍，木屬性人類攻擊力則 6 倍",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "思維擴張 · 摩斯",
    "activeName": ["符石同化術 ‧ 光強"],
    "activeDescription": [
      "隨機將 3 至 5 粒符石轉化為光強化符石 (心符石優先轉換)；發動技能時若我方生命力全滿，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "2047",
    "leaderName": "電殛奧義 ‧ 人",
    "leaderDescription": "光屬性攻擊力 4 倍及人類攻擊力 1.5 倍，光屬性人類攻擊力則 6 倍",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "迸拓啟思 · 摩斯",
    "activeName": ["電殛同化術 ‧ 加冕"],
    "activeDescription": [
      "隨機將 4 至 6 粒符石轉化為光強化符石 (暗符石優先轉換)，發動技能時若我方生命力全滿，則轉化為光人族強化符石"
    ],
    "monsterId": "2048",
    "leaderName": "電殛奧義 ‧ 人",
    "leaderDescription": "光屬性攻擊力 4 倍及人類攻擊力 1.5 倍，光屬性人類攻擊力則 6 倍",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "沒入冥行 · 優格圖",
    "activeName": ["符石同化術 ‧ 暗強"],
    "activeDescription": [
      "隨機將 3 至 5 粒符石轉化為暗強化符石 (心符石優先轉換)；發動技能時若我方生命力全滿，使用後有一定機會可即時再次發動技能"
    ],
    "monsterId": "2049",
    "leaderName": "魅影奧義 ‧ 人",
    "leaderDescription": "暗屬性攻擊力 4 倍及人類攻擊力 1.5 倍，暗屬性人類攻擊力則 6 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "聖化庇護 · 優格圖",
    "activeName": ["魅影同化術 ‧ 加冕"],
    "activeDescription": [
      "隨機將 4 至 6 粒符石轉化為暗強化符石 (光符石優先轉換)，發動技能時若我方生命力全滿，則轉化為暗人族強化符石"
    ],
    "monsterId": "2050",
    "leaderName": "魅影奧義 ‧ 人",
    "leaderDescription": "暗屬性攻擊力 4 倍及人類攻擊力 1.5 倍，暗屬性人類攻擊力則 6 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "驪姬",
    "activeName": ["水波猛擊 ‧ 強"],
    "activeDescription": ["對敵方全體造成 20 倍水屬性傷害"],
    "monsterId": "2051",
    "leaderName": "妖魔萬鈞之怒",
    "leaderDescription": "妖精類及魔族攻擊力 4 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "母愛啟蒙 · 驪姬",
    "activeName": ["醉人之姿"],
    "activeDescription": [
      "2 回合內，可任意移動符石而不會發動消除，水屬性及妖精類攻擊力 2 倍"
    ],
    "monsterId": "2052",
    "leaderName": "魔魅合擊",
    "leaderDescription": "妖精類及魔族攻擊力 4.5 倍，消除妖族符石或魔族符石時，妖精類及魔族成員追打自身攻擊 1 次",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "夏娃",
    "activeName": ["火焰猛擊 ‧ 強"],
    "activeDescription": ["對敵方全體造成 20 倍火屬性傷害"],
    "monsterId": "2053",
    "leaderName": "魔念之罪",
    "leaderDescription": "隊伍中只有魔族或妖精類成員時：全隊攻擊力 6 倍及生命力 2 倍；所有屬性符石兼具 25% 其他屬性符石效果 (可疊加)；每回合回復相等於隊伍中所有「魔性原罪 · 夏娃」攻擊力基值總和的生命力 (需消除符石)",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "魔性原罪 · 夏娃",
    "activeName": ["禁果之惑"],
    "activeDescription": [
      "火及心符石轉化為魔族強化符石，若隊長及戰友均為「魔性原罪 · 夏娃」時，所有「魔性原罪 · 夏娃」獲得 1 個禁果"
    ],
    "monsterId": "2054",
    "leaderName": "魔念之罪",
    "leaderDescription": "隊伍中只有魔族或妖精類成員時：全隊攻擊力 6 倍及生命力 2 倍；所有屬性符石兼具 25% 其他屬性符石效果 (可疊加)；每回合回復相等於隊伍中所有「魔性原罪 · 夏娃」攻擊力基值總和的生命力 (需消除符石)",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "龍陽君",
    "activeName": ["大地猛擊 ‧ 強"],
    "activeDescription": ["對敵方全體造成 20 倍木屬性傷害"],
    "monsterId": "2055",
    "leaderName": "妖魔萬鈞之怒",
    "leaderDescription": "妖精類及魔族攻擊力 4 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "斷袖縱情 · 龍陽君",
    "activeName": ["慾念之誘"],
    "activeDescription": [
      "木符石轉化為妖族符石。1 回合內，隊伍成員攻擊次數 (不計炮擊) 愈多，所受傷害減少愈多，10 次攻擊可減少最多 100% 所受傷害"
    ],
    "monsterId": "2056",
    "leaderName": "魔魅合擊",
    "leaderDescription": "妖精類及魔族攻擊力 4.5 倍，消除妖族符石或魔族符石時，妖精類及魔族成員追打自身攻擊 1 次",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "武則天",
    "activeName": ["閃光猛擊 ‧ 強"],
    "activeDescription": ["對敵方全體造成 20 倍光屬性傷害"],
    "monsterId": "2057",
    "leaderName": "魔曌之勢",
    "leaderDescription": "隊伍中只有魔族成員時：魔族攻擊力 4 倍，光屬性魔族攻擊力則 5 倍；消除魔族符石時，全隊攻擊力額外提升 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "後儀天下 · 武則天",
    "activeName": ["集權之謀"],
    "activeDescription": [
      "引爆隊伍成員屬性以外的符石，以掉落強化符石。1 回合內，延長移動符石時間至 12 秒；每首批消除 2 組符石，魔族及光屬性成員以 30% 自身攻擊力追打光屬性攻擊 1 次，最多可追打 5 次"
    ],
    "monsterId": "2058",
    "leaderName": "魔曌之勢",
    "leaderDescription": "隊伍中只有魔族成員時：魔族攻擊力 4 倍，光屬性魔族攻擊力則 5 倍；消除魔族符石時，全隊攻擊力額外提升 2 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "克麗奧",
    "activeName": ["暗影猛擊 ‧ 強"],
    "activeDescription": ["對敵方全體造成 20 倍暗屬性傷害"],
    "monsterId": "2059",
    "leaderName": "傾世魅顏",
    "leaderDescription": "隊伍中只有魔族或妖精類成員時：全隊生命力、攻擊力及回復力 1.5 倍；每首批消除 1 個角落的符石時，全隊攻擊力提升 1.25 倍，4 個角落可達至最大 5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "艷后爭鳴 · 克麗奧",
    "activeName": ["翩躚起舞"],
    "activeDescription": [
      "點選 2 直行的符石，將之轉化為暗魔族強化符石；1 回合內，魔族及妖精類攻擊力 2 倍"
    ],
    "monsterId": "2060",
    "leaderName": "傾世魅顏",
    "leaderDescription": "隊伍中只有魔族或妖精類成員時：全隊生命力、攻擊力及回復力 1.5 倍；每首批消除 1 個角落的符石時，全隊攻擊力提升 1.25 倍，4 個角落可達至最大 5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "褒姒",
    "activeName": ["火焰猛擊 ‧ 強"],
    "activeDescription": ["對敵方全體造成 20 倍火屬性傷害"],
    "monsterId": "2061",
    "leaderName": "妖魔萬鈞之怒",
    "leaderDescription": "妖精類及魔族攻擊力 4 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "禍國魔娃 · 褒姒",
    "activeName": ["魔媚之焰"],
    "activeDescription": [
      "1 回合內，移動符石時觸碰的符石轉化為魔族符石；攻擊力基值最高 (最左方) 的魔族成員追打自身攻擊 1 次"
    ],
    "monsterId": "2062",
    "leaderName": "魔魅合擊",
    "leaderDescription": "妖精類及魔族攻擊力 4.5 倍，消除妖族符石或魔族符石時，妖精類及魔族成員追打自身攻擊 1 次",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "楊玉環",
    "activeName": ["閃光猛擊 ‧ 強"],
    "activeDescription": ["對敵方全體造成 20 倍光屬性傷害"],
    "monsterId": "2063",
    "leaderName": "妖魔萬鈞之怒",
    "leaderDescription": "妖精類及魔族攻擊力 4 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "殉愛杳渺 · 楊玉環",
    "activeName": ["羞花之迷"],
    "activeDescription": [
      "消除所有附加效果及完全回復生命力。發動技能時若所有成員的回復力基值相同，「殉愛杳渺 · 楊玉環」以外所有成員的主動技能 CD 減少 1"
    ],
    "monsterId": "2064",
    "leaderName": "魔魅合擊",
    "leaderDescription": "妖精類及魔族攻擊力 4.5 倍，消除妖族符石或魔族符石時，妖精類及魔族成員追打自身攻擊 1 次",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "妺喜",
    "activeName": ["暗影猛擊 ‧ 強"],
    "activeDescription": ["對敵方全體造成 20 倍暗屬性傷害"],
    "monsterId": "2065",
    "leaderName": "妖魔萬鈞之怒",
    "leaderDescription": "妖精類及魔族攻擊力 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "烈女勳章 · 妺喜",
    "activeName": ["紅顏之暴"],
    "activeDescription": ["隊長及戰友攻擊力 2.5 倍，效果持續至首批消除心符石"],
    "monsterId": "2066",
    "leaderName": "魔魅合擊",
    "leaderDescription": "妖精類及魔族攻擊力 4.5 倍，消除妖族符石或魔族符石時，妖精類及魔族成員追打自身攻擊 1 次",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "落雁琴姬 · 王昭君",
    "activeName": ["落雁之魅"],
    "activeDescription": [
      "妖精類攻擊力 1.5 倍；每首批消除 1 組符石時，將產生 1 粒妖族強化符石，最多可產生 8 粒，效果持續至沒有消除種族符石"
    ],
    "monsterId": "2068",
    "leaderName": "妖魔萬鈞之怒",
    "leaderDescription": "妖精類及魔族攻擊力 4 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "獵皮艷妖 · 西施",
    "activeName": ["沉魚之惑"],
    "activeDescription": [
      "將最左方 3 直行的符石轉化為固定數量及位置的水強化、火強化、木強化、光強化及暗強化符石。若隊伍中只有妖精類成員，自身主動技能 CD 減少 2"
    ],
    "monsterId": "2069",
    "leaderName": "妖魔萬鈞之怒",
    "leaderDescription": "妖精類及魔族攻擊力 4 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "誘食禁果 ‧ 烏洛波",
    "activeName": ["魔鬼的使命"],
    "activeDescription": [
      "1 回合內，敵方互相或自我進行 1 次攻擊；效果期間，自身攻擊力跟隨隊長的攻擊力，個人追打水、火、木、光、暗屬性攻擊各 1 次"
    ],
    "monsterId": "2070",
    "leaderName": "妖魔萬鈞之怒",
    "leaderDescription": "妖精類及魔族攻擊力 4 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "虛憶迴夢 · 虞姬",
    "activeName": ["細水情堅"],
    "activeDescription": [
      "隨機將 2 個人類成員直行的符石轉化為水人族強化符石。2 回合內，敵方全體轉為火屬性"
    ],
    "monsterId": "2073",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "俏漢柔情 · 李蓮英",
    "activeName": ["赤燄術 ‧ 強"],
    "activeDescription": [
      "隨機將 4 至 8 粒符石轉化為火強化符石 (光及暗符石優先轉換)"
    ],
    "monsterId": "2074",
    "leaderName": "人類集權",
    "leaderDescription": "隊伍中有 3 種或以上屬性成員時：人類攻擊力 4 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "秉筆弄權 ‧ 魏忠賢",
    "activeName": ["藤棘術 ‧ 強"],
    "activeDescription": [
      "隨機將 4 至 8 粒符石轉化為木強化符石 (光及暗符石優先轉換)"
    ],
    "monsterId": "2075",
    "leaderName": "人類集權",
    "leaderDescription": "隊伍中有 3 種或以上屬性成員時：人類攻擊力 4 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "金童",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "2077",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "光",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "玉女",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "2078",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "暗",
    "race": "人類",
    "star": "4★"
  },
  {
    "monsterName": "幽怨新娘 ‧ 烏爾德",
    "activeName": ["凝冰之際"],
    "activeDescription": [
      "凍結敵方全體，使受影響目標無法行動並轉為水屬性，持續 3 回合，效果期間必然延長移動符石時間 5 秒"
    ],
    "monsterId": "6001",
    "leaderName": "攻守一體 ‧ 水",
    "leaderDescription": "水符石兼具 50% 心符石效果",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "淘氣剪刀手 ‧ 斯庫爾德",
    "activeName": ["操縱之火"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除，達成 8 連擊 (Combo) 或以上，火屬性攻擊力 2 倍"
    ],
    "monsterId": "6002",
    "leaderName": "攻守一體 ‧ 火",
    "leaderDescription": "火符石兼具 50% 心符石效果",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "甜酒血族 ‧ 薇兒丹蒂",
    "activeName": ["腐蝕"],
    "activeDescription": [
      "敵方全體被寄生，每回合將吸取相當於自身 2 倍回復力的生命力，此傷害無視防禦力、屬性及敵方技能，並持續到死亡，效果最多可疊加 3 次"
    ],
    "monsterId": "6003",
    "leaderName": "攻守一體 ‧ 木",
    "leaderDescription": "木符石兼具 50% 心符石效果",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "聖殿死者 ‧ 伊登",
    "activeName": ["癒合結界"],
    "activeDescription": ["連續 5 回合回復自身回復力10倍的生命力"],
    "monsterId": "6004",
    "leaderName": "超絕回復",
    "leaderDescription": "每回合回復自身 7 倍回復力的生命力 (需要消除符石)",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "獵巫死者 ‧ 布倫希爾德",
    "activeName": ["斬斷束縛"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.5 倍，並解除所有成員被封鎖的技能及清除敵人身上的控制技能 (此技能無視封鎖技能)。發動技能的回合若擊斃所有敵人，下一回合全隊攻擊力 2.5 倍"
    ],
    "monsterId": "6005",
    "leaderName": "靈魂收割 ‧ 結",
    "leaderDescription": "當敵方生命力 40% 以下，無視防禦力和屬性，每回合以自身攻擊力 6 倍追打 1 次",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "驚喜創造 ‧ 伊德海拉",
    "activeName": ["泡沫爆破"],
    "activeDescription": [
      "累積 3 回合內敵方所受傷害的 70% 再爆發 (不包括無屬性傷害)，此傷害無視屬性及防禦力"
    ],
    "monsterId": "6006",
    "leaderName": "妖精領域",
    "leaderDescription": "妖精類回復力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "冬日暖燈 ‧ 梅格蘭斯",
    "activeName": ["點燃"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標轉為火屬性並受到自身攻擊力 30 倍火屬性傷害，持續 3 回合"
    ],
    "monsterId": "6007",
    "leaderName": "妖精之怒",
    "leaderDescription": "妖精類攻擊力 2 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "七彩琉璃 ‧ 伊薇特",
    "activeName": ["生命採摘"],
    "activeDescription": ["3 回合內，敵方所受傷害的 20% 轉化為我方生命力"],
    "monsterId": "6008",
    "leaderName": "妖精之血",
    "leaderDescription": "妖精類生命力 2 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "頌慶佳音 ‧ 瑪格莉特",
    "activeName": ["擴散"],
    "activeDescription": [
      "3 回合內，敵方所受傷害的 50% 分別擴散到其他敵人身上"
    ],
    "monsterId": "6009",
    "leaderName": "妖精領域",
    "leaderDescription": "妖精類回復力 2 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "祝福分派 ‧ 伊莎貝爾",
    "activeName": ["魅惑"],
    "activeDescription": ["3 回合內，敵方互相或自我進行1次攻擊"],
    "monsterId": "6010",
    "leaderName": "妖精之怒",
    "leaderDescription": "妖精類攻擊力 2 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "賢明魔導 ‧ 主任莫莉",
    "activeName": ["界限突破 ‧ 水"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升水屬性攻擊力"
    ],
    "monsterId": "6011",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "龍焰熱忱 ‧ 班長肖恩",
    "activeName": ["界限突破 ‧ 火"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升火屬性攻擊力"
    ],
    "monsterId": "6012",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "肅穆公義 ‧ 風紀鄧肯",
    "activeName": ["界限突破 ‧ 木"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升木屬性攻擊力"
    ],
    "monsterId": "6013",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "矚目耀劍 ‧ 會長奈寶尼",
    "activeName": ["界限突破 ‧ 光"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升光屬性攻擊力"
    ],
    "monsterId": "6014",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "亡骸解析 ‧ 教授安多",
    "activeName": ["界限突破 ‧ 暗"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升暗屬性攻擊力"
    ],
    "monsterId": "6015",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "女媧天石 ‧ 莫莉",
    "activeName": ["界限突破 ‧ 水"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升水屬性攻擊力"
    ],
    "monsterId": "6016",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "水精靈仙女 忒琪菈(造型)",
    "activeName": ["水之仙女"],
    "activeDescription": [
      "將最底一橫行的符石轉化為水符石，並將最左方一直行的 4 粒符石轉化為心符石"
    ],
    "monsterId": "6017",
    "leaderName": "流雲雙刃斬",
    "leaderDescription": "水屬性攻擊力 2.5 倍；消除最底一橫行內的所有符石時，自身攻擊力額外提升 3 倍，若使用相同的隊長及戰友時，自身攻擊力額外提升至 9 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "炎輝神 雅格娜姆特(造型)",
    "activeName": ["神之秘剣 - 光炎破碎"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 時，個人追打攻擊力 6 倍的火屬性攻擊 1 次，每多 1 連擊 (Combo)，追打倍率增加 2 倍，6 連擊 (Combo) 可達至最大 10 倍"
    ],
    "monsterId": "6018",
    "leaderName": "煉獄之集權",
    "leaderDescription": "火屬性攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "妖精皇 闇黑基姆雷特(造型)",
    "activeName": ["撒旦王權"],
    "activeDescription": [
      "1 回合內，木屬性及妖精類攻擊力 2 倍；並對全體敵人造成自身攻擊力 30 倍的木屬性傷害"
    ],
    "monsterId": "6019",
    "leaderName": "莫逆相伴 ‧ 妖",
    "leaderDescription": "隊伍中的妖精類成員愈多，全隊攻擊力愈高，最大 3.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "騎士王亞瑟(造型)",
    "activeName": ["騎士王神劍 - 王者之劍"],
    "activeDescription": ["將場上固定位置的符石轉化為光符石"],
    "monsterId": "6020",
    "leaderName": "電殛雙刃斬",
    "leaderDescription": "光屬性攻擊力 2.5 倍；消除最底一橫行內的所有符石時，自身攻擊力額外提升 3 倍，若使用相同的隊長及戰友時，自身攻擊力額外提升至 9 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "頹廢的黑薔薇 赫拉(造型)",
    "activeName": ["背叛的神父"],
    "activeDescription": [
      "1 回合內，敵方全體轉為光屬性，並大幅提升暗屬性對光屬性目標的攻擊力"
    ],
    "monsterId": "6021",
    "leaderName": "天魔道 ‧ 暗",
    "leaderDescription": "暗屬性攻擊力 2 倍，隊伍中每個魔族成員，扣除 5 %總生命力上限及增加暗屬性攻擊力 0.5 倍，6 個魔族成員共扣除 30% 總生命力上限及可達至最高 5 倍暗屬性攻擊力",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "世界樹神 尤克特拉希爾(造型)",
    "activeName": ["世界樹之克勞諾斯閃擊"],
    "activeDescription": [
      "1 回合內，所有成員無視屬性相剋及追打無屬性攻擊 1 次"
    ],
    "monsterId": "6022",
    "leaderName": "靈力迫人",
    "leaderDescription": "生命力全滿時，攻擊力 3 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "反叛的墮天使 路西法(造型)",
    "activeName": ["憐憫惡魔之歌"],
    "activeDescription": [
      "將場上所有符石轉化為固定數量及位置的暗及心符石，並延長移動符石時間 3 秒"
    ],
    "monsterId": "6023",
    "leaderName": "穹蒼之賜 ‧ 護心",
    "leaderDescription": "全隊攻擊力 2.5 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒心符石。生命力全滿時，所受傷害減少 20%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "Terry(造型)",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "6024",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "光",
    "race": "人類",
    "star": "8★"
  },
  {
    "monsterName": "Terence(造型)",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "6025",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "8★"
  },
  {
    "monsterName": "浴血戰王 ‧ 吉爾伽美什",
    "activeName": ["同仇念"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.3 倍，此回合發動的技能愈多 (此技能發動後計算)，全隊攻擊力提升愈多，發動 2 個技能全隊攻擊力可達至最大 2 倍"
    ],
    "monsterId": "6026",
    "leaderName": "眾神之狂怒",
    "leaderDescription": "神族攻擊力 2.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "永恆雪紗 ‧ 希",
    "activeName": ["信誓的泉源"],
    "activeDescription": [
      "光符石與心符石轉化為水符石；所轉化的符石愈多，1 回合內水屬性攻擊力愈高，轉化 8 粒符石即可達至最大 2 倍"
    ],
    "monsterId": "6027",
    "leaderName": "浪濤萬鈞之怒 ‧ 強",
    "leaderDescription": "水屬性攻擊力 4.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "紅鸞降世 ‧ 妍",
    "activeName": ["熾熱的約定"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上時，全隊攻擊力 2 倍及回復力減少 50% (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，隨機將 8 粒符石轉化為心符石"
    ],
    "monsterId": "6028",
    "leaderName": "熾燄萬鈞之怒 ‧ 強",
    "leaderDescription": "火屬性攻擊力 4.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "命盤牌局 ‧ 阿特拉哈西斯",
    "activeName": ["水刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的水符石，水屬性攻擊力 1.5 倍"
    ],
    "monsterId": "6029",
    "leaderName": "穹蒼之賜 ‧ 浪濤",
    "leaderDescription": "水屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒水符石",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "火炙百味 ‧ 尼努爾塔",
    "activeName": ["燄刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的火符石，火屬性攻擊力 1.5 倍"
    ],
    "monsterId": "6030",
    "leaderName": "穹蒼之賜 ‧ 熾燄",
    "leaderDescription": "火屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒火符石",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "醇厚碧釀 ‧ 杜穆濟",
    "activeName": ["藤刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的木符石，木屬性攻擊力 1.5 倍"
    ],
    "monsterId": "6031",
    "leaderName": "穹蒼之賜 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒木符石",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "蜜味女郎 ‧ 伊南娜",
    "activeName": ["光刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的光符石，光屬性攻擊力 1.5 倍"
    ],
    "monsterId": "6032",
    "leaderName": "穹蒼之賜 ‧ 玄光",
    "leaderDescription": "光屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒光符石",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "鋼舞王者 ‧ 納姆塔爾",
    "activeName": ["魅刃之能 ‧ 馭時"],
    "activeDescription": [
      "1 回合內，移動符石時間延長至 8 秒；消除一組 6 粒或以上的暗符石，暗屬性攻擊力 1.5 倍"
    ],
    "monsterId": "6033",
    "leaderName": "穹蒼之賜 ‧ 幽冥",
    "leaderDescription": "暗屬性攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒暗符石",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "滅罪貴公子 ‧ 審結判官",
    "activeName": ["勇武之力 ‧ 水"],
    "activeDescription": [
      "3 回合內，水屬性攻擊力 1.8 倍及全隊回復力變 0；並於第 3 回合結束時，完全回復生命力"
    ],
    "monsterId": "6034",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "媚惑魔音 ‧ 派蒙",
    "activeName": ["魔靈的印記"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2 倍。回合結束時將場上的符石變回發動技能時的分佈"
    ],
    "monsterId": "6035",
    "leaderName": "魔之本性",
    "leaderDescription": "魔族攻擊力，生命力及回復力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "心玥猶憐 ‧ 蘇妲己",
    "activeName": ["魅惑傾城"],
    "activeDescription": [
      "20 秒內，可任意移動符石而不會發動消除；消除的符石數目愈多，攻擊力提升愈多，最大 1.9 倍 (只計算首批消除的符石數目)"
    ],
    "monsterId": "6036",
    "leaderName": "傾世絕色",
    "leaderDescription": "連擊 (Combo) 時攻擊力大幅提升 125%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "仙如心玥 ‧ 蘇妲己",
    "activeName": ["魅惑傾城 ‧ 強"],
    "activeDescription": [
      "20 秒內，可任意移動符石而不會發動消除；消除的符石數目愈多，攻擊力提升愈多，最大 2.5 倍 (只計算首批消除的符石數目)"
    ],
    "monsterId": "6037",
    "leaderName": "傾世絕色",
    "leaderDescription": "連擊 (Combo) 時攻擊力大幅提升 125%",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "水縹舞孃 ‧ 卡珊德拉",
    "activeName": ["冰霜絕命"],
    "activeDescription": [
      "我方回復力減至 0，並將每個成員自身回復力的 3.5 倍各自加入自身攻擊力 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，當前技能 CD 減少 4"
    ],
    "monsterId": "6038",
    "leaderName": "水之狂怒",
    "leaderDescription": "水屬性攻擊力 2.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "緋舞天火 ‧ 美狄亞",
    "activeName": ["喋血戰意"],
    "activeDescription": [
      "所有成員攻擊力提升 2 倍，同時火屬性符石掉落機率提升，但受到的傷害提升 1.5 倍 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，當前技能 CD 減少 4"
    ],
    "monsterId": "6039",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "浮世若煙 ‧ 喀耳刻",
    "activeName": ["魔法雙刃"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上才會發動攻擊和回復，連擊 (Combo) 時攻擊力提升 40%，期間所有減傷效果無效 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，當前技能 CD 減少 6"
    ],
    "monsterId": "6040",
    "leaderName": "大地之霸權",
    "leaderDescription": "木屬性攻擊力 2.5 倍及回復力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "光祐星晴 ‧ 露娜",
    "activeName": ["神魔共鳴"],
    "activeDescription": [
      "2 回合內，以神族及魔族其中造成的最大傷害轉換為全隊神族及魔族的傷害"
    ],
    "monsterId": "6041",
    "leaderName": "虛靜恬淡",
    "leaderDescription": "攻擊力 2 倍，並延長移動符石時間 3 秒",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "魔道刺青 ‧ 撒旦",
    "activeName": ["追魂之幽"],
    "activeDescription": [
      "1 回合內，暗屬性攻擊力 2 倍，自身攻擊力額外提升 3 倍"
    ],
    "monsterId": "6042",
    "leaderName": "魔魅斷魂劍",
    "leaderDescription": "暗屬性攻擊力 3.5 倍，消除 3 種或以上的符石及自身發動攻擊時，個人追打自身攻擊力 4 倍的暗屬性攻擊 1 次",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "破幻水術士 ‧ 莫莉",
    "activeName": ["界限突破 ‧ 水"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升水屬性攻擊力"
    ],
    "monsterId": "6043",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "焚龍劍士 ‧ 肖恩",
    "activeName": ["界限突破 ‧ 火"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升火屬性攻擊力"
    ],
    "monsterId": "6044",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "牧原獸魂 ‧ 鄧肯",
    "activeName": ["界限突破 ‧ 木"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升木屬性攻擊力"
    ],
    "monsterId": "6045",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "夢殿公爵 ‧ 奈寶尼",
    "activeName": ["界限突破 ‧ 光"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升光屬性攻擊力"
    ],
    "monsterId": "6046",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "囈語祭師 ‧ 安多",
    "activeName": ["界限突破 ‧ 暗"],
    "activeDescription": [
      "額外增加 3 行符石，大幅延長移動符石時間至 10 秒，並提升暗屬性攻擊力"
    ],
    "monsterId": "6047",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "勝利啟航 ‧ 費雷",
    "activeName": ["符石強化 ‧ 水"],
    "activeDescription": ["水符石轉化為水強化符石"],
    "monsterId": "6048",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "戰斧烈女 ‧ 提爾",
    "activeName": ["符石強化 ‧ 火"],
    "activeDescription": ["火符石轉化為火強化符石"],
    "monsterId": "6049",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "初喚之靈 ‧ 費蕾雅",
    "activeName": ["符石強化 ‧ 木"],
    "activeDescription": ["木符石轉化為木強化符石"],
    "monsterId": "6050",
    "leaderName": "木之震怒",
    "leaderDescription": "木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "小雷鎚 ‧ 索爾",
    "activeName": ["符石強化 ‧ 光"],
    "activeDescription": ["光符石轉化為光強化符石"],
    "monsterId": "6051",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "黃昏暗役 ‧ 洛基",
    "activeName": ["符石強化 ‧ 暗"],
    "activeDescription": ["暗符石轉化為暗強化符石"],
    "monsterId": "6052",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "滅鼠之泉 ‧ 阿撒茲勒",
    "activeName": ["元素歸一 ‧ 水"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，水屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "6053",
    "leaderName": "無影幻像 ‧ 浪濤",
    "leaderDescription": "水屬性攻擊力 3 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 水符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為水符石時，則兼具效果變為水屬性攻擊力提升 1.4 倍 (可疊加)",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "毀滅之叉 ‧ 亞巴頓",
    "activeName": ["元素歸一 ‧ 火"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，火屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "6054",
    "leaderName": "無影幻像 ‧ 熾燄",
    "leaderDescription": "火屬性攻擊力 3 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 火符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為火符石時，則兼具效果變為火屬性攻擊力提升 1.4 倍 (可疊加)",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "梳理智者 ‧ 薩麥爾",
    "activeName": ["元素歸一 ‧ 木"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多，木屬性攻擊力提升愈多，最大提升至 2.2 倍"
    ],
    "monsterId": "6055",
    "leaderName": "無影幻像 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 3 倍，每回合場上數量最多的 1 種屬性符石兼具 50% 木符石效果 (可疊加)，如場上數量最多的 1 種屬性符石為木符石時，則兼具效果變為木屬性攻擊力提升 1.4 倍 (可疊加)",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "點心之王 ‧ 別西卜",
    "activeName": ["結界術 ‧ 玄光"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒光符石"
    ],
    "monsterId": "6056",
    "leaderName": "流螢結陣 ‧ 繼",
    "leaderDescription": "光屬性攻擊力 3 倍，並延長移動符石時間 1 秒；消除一組 5 粒或以上的光符石時，光屬性攻擊力額外提升 1.5 倍 (可疊加)",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "逗貓之靈 ‧ 莫斯提馬",
    "activeName": ["結界術 ‧ 幽冥"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒暗符石"
    ],
    "monsterId": "6057",
    "leaderName": "幽冥結陣 ‧ 繼",
    "leaderDescription": "暗屬性攻擊力 3 倍，並延長移動符石時間 1 秒；消除一組 5 粒或以上的暗符石時，暗屬性攻擊力額外提升 1.5 倍 (可疊加)",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "血吻的魅惑 ‧ 女王切西亞",
    "activeName": ["三原靈陣 ‧ 血燄"],
    "activeDescription": [
      "所有符石隨機轉化為水、火、木及心符石，同時火符石出現率上升，並將火符石以火強化符石代替"
    ],
    "monsterId": "6058",
    "leaderName": "透幻之燄",
    "leaderDescription": "火屬性攻擊力 3.2 倍。消除 3 種符石時，火屬性攻擊力額外提升 1.5 倍；消除 4 種或以上符石時，火屬性攻擊力則額外提升 1.8 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "戰皇 ‧ 呂布",
    "activeName": ["玄靈滅絕 ‧ 暗流"],
    "activeDescription": ["光及心符石轉化為暗符石"],
    "monsterId": "6059",
    "leaderName": "虓虎之勇 ‧ 暗",
    "leaderDescription": "暗屬性攻擊力 3.75 倍，單體攻擊轉化為全體攻擊，並延長移動符石時間 1 秒；每消除一組 5 粒或以上的符石時，暗屬性攻擊力提升，消除 3 組可達至最大 2.2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "愛恨交纏之歌 ‧ 美狄亞",
    "activeName": ["喋血戰意"],
    "activeDescription": [
      "所有成員攻擊力提升 2 倍，同時火屬性符石掉落機率提升，但受到的傷害提升 1.5 倍 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，當前技能 CD 減少 4"
    ],
    "monsterId": "6061",
    "leaderName": "火之狂怒",
    "leaderDescription": "火屬性攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "神轎出巡 ‧ 伊邪那岐",
    "activeName": ["靈木無量"],
    "activeDescription": [
      "將場上所有符石轉化為固定數量及位置的心符石及木強化符石"
    ],
    "monsterId": "6062",
    "leaderName": "藤木之靈",
    "leaderDescription": "木屬性攻擊力 4 倍，同時心符石兼具 50% 木符石效果 (可疊加)",
    "attribute": "木",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "無機混沌 ‧ 路西法",
    "activeName": ["魔力歸一"],
    "activeDescription": [
      "光屬性成員攻擊力減至 50%及魔族攻擊力減至 0，並將被減去的攻擊力加入自身攻擊力。消除光符石才會發動攻擊 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "6063",
    "leaderName": "光暗一體",
    "leaderDescription": "光符石兼具暗符石效果，同時暗符石兼具光符石效果",
    "attribute": "光",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "群妖亂舞 ‧ 暗地精",
    "activeName": ["攻擊姿勢 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗符石"],
    "monsterId": "6064",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "乘風破浪 ‧ 聞仲",
    "activeName": ["亡命感應 ‧ 水"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至水符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "6065",
    "leaderName": "銳兵列陣 ‧ 強",
    "leaderDescription": "隊伍中須有水和光屬性的成員，消除任何三種或以上屬性符石，水和光屬性攻擊力 3.5 倍。消除水和光符石時，水和光屬性的攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "奮力挺舉 ‧ 燃燈",
    "activeName": ["鐵壁陣勢 ‧ 火"],
    "activeDescription": ["木符石轉化為心強化符石"],
    "monsterId": "6066",
    "leaderName": "火靈符籙",
    "leaderDescription": "2 粒火符石或心符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)。回合結束時，將 2 粒符石轉化為火符石 (光及暗符石優先轉換)",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "精準揮擊 ‧ 楊戩",
    "activeName": ["枯朽的戰場"],
    "activeDescription": [
      "2 回合內，敵方全體轉為水屬性，並提升木屬性對水屬性目標的攻擊力"
    ],
    "monsterId": "6067",
    "leaderName": "木靈符籙",
    "leaderDescription": "2 粒木符石或心符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)。回合結束時，將 2 粒符石轉化為木符石 (光及暗符石優先轉換)",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "百發百中 ‧ 姜子牙",
    "activeName": ["鐵壁陣勢 ‧ 光"],
    "activeDescription": ["暗符石轉化為心強化符石"],
    "monsterId": "6068",
    "leaderName": "銳兵列陣 ‧ 強",
    "leaderDescription": "隊伍中須有水和光屬性的成員，消除任何三種或以上屬性符石，水和光屬性攻擊力 3.5 倍。消除水和光符石時，水和光屬性的攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "盛裝騰躍 ‧ 申公豹",
    "activeName": ["攻擊強化 ‧ 暗"],
    "activeDescription": ["心符石轉化為暗強化符石"],
    "monsterId": "6069",
    "leaderName": "愈戰愈強 ‧ 聚擊",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3 倍。消除一組 5 粒或以上的暗符石時，全隊攻擊力額外提升 1.5 倍 (效果可以疊加)",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "蓮池正旦 ‧ 泰芙努特",
    "activeName": ["符石極限解放 ‧ 水"],
    "activeDescription": ["直接引爆水屬性以外的符石造成敵方全體水屬性傷害"],
    "monsterId": "6070",
    "leaderName": "水之誅罰",
    "leaderDescription": "水屬性攻擊無視屬性相剋。大幅提升水屬性對火及暗屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "水",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "熾盛赤旗 ‧ 賽特",
    "activeName": ["符石極限解放 ‧ 火"],
    "activeDescription": ["直接引爆火屬性以外的符石造成敵方全體火屬性傷害"],
    "monsterId": "6071",
    "leaderName": "火之誅罰",
    "leaderDescription": "火屬性攻擊無視屬性相剋。大幅提升火屬性對火及木屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "臉譜變幻 ‧ 舒",
    "activeName": ["符石極限解放 ‧ 木"],
    "activeDescription": ["直接引爆木屬性以外的符石造成敵方全體木屬性傷害"],
    "monsterId": "6072",
    "leaderName": "木之誅罰",
    "leaderDescription": "木屬性攻擊無視屬性相剋。大幅提升木屬性對水及光屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "木",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "大旗揮舞 ‧ 拉",
    "activeName": ["符石極限解放 ‧ 光"],
    "activeDescription": ["直接引爆光屬性以外的符石造成敵方全體光屬性傷害"],
    "monsterId": "6073",
    "leaderName": "光之誅罰",
    "leaderDescription": "光屬性攻擊無視屬性相剋。大幅提升光屬性對火及暗屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "光",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "舞槍如影 ‧ 奧西利斯",
    "activeName": ["符石極限解放 ‧ 暗"],
    "activeDescription": ["直接引爆暗屬性以外的符石造成敵方全體暗屬性傷害"],
    "monsterId": "6074",
    "leaderName": "暗之誅罰",
    "leaderDescription": "暗屬性攻擊無視屬性相剋。大幅提升暗屬性對木及光屬性目標的攻擊力，並提升對其他屬性目標的攻擊力 (包括主動技)",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "夏日豔花 ‧ 烏蘇拉",
    "activeName": ["龍魂共鳴"],
    "activeDescription": [
      "2 回合內，以龍類其中造成的最大傷害轉換為全隊龍類的傷害"
    ],
    "monsterId": "6075",
    "leaderName": "噬血龍王 ‧ 強",
    "leaderDescription": "龍類攻擊力 2.5 倍，將龍類對敵方造成傷害的 10%  轉化為生命力 (不計算主動及隊長技傷害)，最大為生命力等值的 50% (不能疊加)",
    "attribute": "水",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "火熱接球 ‧ 愛格德",
    "activeName": ["攻勢強化 ‧ 火"],
    "activeDescription": [
      "心符石轉化為火強化符石，並將自身所在隊伍欄直行的符石轉化為火符石"
    ],
    "monsterId": "6076",
    "leaderName": "幻龍利牙",
    "leaderDescription": "龍類攻擊力 1.5 倍；消除一組 6 粒或以上的相同屬性符石，龍類攻擊力 3 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "炎夏寒瓜 ‧ 芭芭拉",
    "activeName": ["群龍壓迫"],
    "activeDescription": ["1 回合內，所受傷害將會以龍類的數量而減少"],
    "monsterId": "6077",
    "leaderName": "噬血龍王 ‧ 強",
    "leaderDescription": "龍類攻擊力 2.5 倍，將龍類對敵方造成傷害的 10%  轉化為生命力 (不計算主動及隊長技傷害)，最大為生命力等值的 50% (不能疊加)",
    "attribute": "木",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "炫光追擊 ‧ 安納",
    "activeName": ["攻勢強化 ‧ 光"],
    "activeDescription": [
      "心符石轉化為光強化符石，並將自身所在隊伍欄直行的符石轉化為光符石"
    ],
    "monsterId": "6078",
    "leaderName": "幻龍利爪",
    "leaderDescription": "消除一組 6 粒或以上的相同符石，龍類攻擊力 3 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "紅海滑浪 ‧ 諾瓦利斯",
    "activeName": ["龍力招來 ‧ 幽冥"],
    "activeDescription": [
      "龍類攻擊力減至 0，並將龍類攻擊力的 1.5 倍加入自身攻擊力，消除暗符石才會發動攻擊 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "6079",
    "leaderName": "幻龍利牙",
    "leaderDescription": "龍類攻擊力 1.5 倍；消除一組 6 粒或以上的相同屬性符石，龍類攻擊力 3 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "機甲小妹",
    "activeName": ["小妹亂撞"],
    "activeDescription": ["所有符石隨機轉換"],
    "monsterId": "6080",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "烈陽赤炎 ‧ 草薙京(動態造型)",
    "activeName": ["最終決戰奧義 ‧ 無式"],
    "activeDescription": [
      "MAX 版 裏百八式 ‧ 大蛇薙\n每次只能選取 1 個效果。\n效果1：最終決戰奧義 ‧ 無式：引爆隊伍成員屬性以外的符石，以掉落強化符石。1 回合內，自身攻擊力 1.5 倍，個人追打火屬性攻擊 4 次\n效果2：MAX 版 裏百八式 ‧ 大蛇薙：自身進入儲力狀態，每回合提升自身攻擊力 3 倍，最大可提升至 9 倍，效果持續至沒有消除一組 6 粒或以上的火符石。發動此技能時需要儲滿龍脈儀及該回合不能發動龍刻脈動"
    ],
    "monsterId": "6081",
    "leaderName": "時之格鬥術",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 3.5 倍，及必然延長移動符石時間 1 秒；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒與該直行成員屬性相同的符石",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "紫藍之月 ‧ 八神庵(動態造型)",
    "activeName": ["裏百八式 ‧ 八酒杯"],
    "activeDescription": [
      "MAX 版 禁千貳百拾壹式 ‧ 八稚女\n每次只能選取 1 個效果。\n效果1：裏百八式 ‧ 八酒杯：敵方全體點燃，使受影響目標無法行動並轉為暗屬性，持續 2 回合，但效果會因受到攻擊而消失。2 回合內，人類攻擊力提升 2.5 倍\n效果2：MAX 版 禁千貳百拾壹式 ‧ 八稚女：1 回合內，將全體敵人的攻擊力及防禦力減至 0；自身攻擊力提升 1.5 倍，並以 30% 自身攻擊力追打 8 次暗屬性攻擊。所有成員攻擊後，再對全體敵人追打 1 次自身攻擊力 30 倍的暗屬性傷害。發動此技能時需要儲滿龍脈儀及該回合不能發動龍刻脈動"
    ],
    "monsterId": "6082",
    "leaderName": "連擊格鬥術",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 3 倍；消除 6 連擊 (Combo) 或以上時額外提升 1.5 倍攻擊力；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 2 粒與該直行成員屬性相同的符石",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "忍術的傳承 ‧ 不知火舞(動態造型)",
    "activeName": ["超必殺忍蜂"],
    "activeDescription": [
      "MAX 版  超必殺忍蜂\n每次只能選取 1 個效果。\n效果1：超必殺忍蜂：將所有符石轉化為固定數量的火強化、木強化、暗強化及心強化符石\n效果2：MAX 版 超必殺忍蜂：將所有符石轉化為固定數量及位置的火強化、木強化、暗強化及心強化符石。發動此技能時需要儲滿龍脈儀及該回合不能發動龍刻脈動"
    ],
    "monsterId": "6083",
    "leaderName": "焰之格鬥術",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 3.5 倍，並必然延長移動符石時間 1 秒；火符石兼具 50% 其他屬性符石效果 (可疊加)；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒與該直行成員屬性相同的符石",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "香汗淋漓 ‧ 路易斯",
    "activeName": ["進退有序 ‧ 強"],
    "activeDescription": ["2 回合內，全隊攻擊力 1.8 倍，並減少所受傷害 65%"],
    "monsterId": "6084",
    "leaderName": "童趣約定 ‧ 浪濤",
    "leaderDescription": "連擊 (Combo) 數為單數時，水屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則水屬性攻擊力 5 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "泉鬥亂擊 ‧ 桃樂絲",
    "activeName": ["移魂進攻 ‧ 熾燄"],
    "activeDescription": [
      "將木符石轉化為火符石；所轉化的符石愈多，1 回合內全隊攻擊力愈高，轉化 6 粒木符石即可達至最大 2.2 倍"
    ],
    "monsterId": "6085",
    "leaderName": "童趣約定 ‧ 熾燄",
    "leaderDescription": "連擊 (Combo) 數為單數時，火屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則火屬性攻擊力 5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "萌貓泡湯 ‧ 阿里巴巴",
    "activeName": ["同盜相益 ‧ 強"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2 倍。若使用相同的隊長及戰友時，全隊攻擊力 3 倍"
    ],
    "monsterId": "6086",
    "leaderName": "童趣約定 ‧ 藤木",
    "leaderDescription": "連擊 (Combo) 數為單數時，木屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則木屬性攻擊力 5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "浴後饗宴 ‧ 傑尼",
    "activeName": ["移魂進攻 ‧ 玄光"],
    "activeDescription": [
      "將暗符石轉化為光符石；所轉化的符石愈多，1 回合內全隊攻擊力愈高，轉化 6 粒暗符石即可達至最大 2.2 倍"
    ],
    "monsterId": "6087",
    "leaderName": "童趣約定 ‧ 玄光",
    "leaderDescription": "連擊 (Combo) 數為單數時，光屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則光屬性攻擊力 5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "浴前祭舞 ‧ 愛德華",
    "activeName": ["引領之帥 ‧ 強"],
    "activeDescription": [
      "1 回合內，自身及身旁的成員攻擊力 3.5 倍；若身旁成員的攻擊力均低於自己，則效果持續 2 回合"
    ],
    "monsterId": "6088",
    "leaderName": "童趣約定 ‧ 幽冥",
    "leaderDescription": "連擊 (Combo) 數為單數時，暗屬性攻擊力 3 倍；若連擊 (Combo) 數為雙數時，則暗屬性攻擊力 5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "萬物之念 ‧ 大蛇(動態造型)",
    "activeName": ["混"],
    "activeDescription": [
      "1 回合內，每消除一種屬性符石，必定掉落 6 粒水符石，消除 5 種可掉落最多 30 粒水符石"
    ],
    "monsterId": "6089",
    "leaderName": "格鬥之魂",
    "leaderDescription": "全隊攻擊力 2 倍，隊伍成員的屬性愈多，攻擊力提升愈多，最大提升至 4 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "性感繚亂 ‧ 不知火舞",
    "activeName": ["超必殺忍蜂"],
    "activeDescription": [
      "MAX 版  超必殺忍蜂\n每次只能選取 1 個效果。\n效果1：超必殺忍蜂：將所有符石轉化為固定數量的火強化、木強化、暗強化及心強化符石\n效果2：MAX 版 超必殺忍蜂：將所有符石轉化為固定數量及位置的火強化、木強化、暗強化及心強化符石。發動此技能時需要儲滿龍脈儀及該回合不能發動龍刻脈動"
    ],
    "monsterId": "6090",
    "leaderName": "焰之格鬥術",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 3.5 倍，並必然延長移動符石時間 1 秒；火符石兼具 50% 其他屬性符石效果 (可疊加)；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒與該直行成員屬性相同的符石",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "超灼熱本能 ‧ K´",
    "activeName": ["熱力驅動"],
    "activeDescription": [
      "1 回合內，自身攻擊力 8 倍。回合結束時，自身及身旁的火屬性成員所在隊伍欄直行的符石轉化為火符石"
    ],
    "monsterId": "6091",
    "leaderName": "格鬥術",
    "leaderDescription": "隊伍中只有 3 種屬性成員時，全隊攻擊力 3 倍；每直行消除一組 4 粒或以上符石時 (只計算首批消除的符石)，該直行將產生 1 粒與該直行成員屬性相同的符石",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "浪潮貝斯手 ‧ 阿羅哈",
    "activeName": ["元素均霑 ‧ 強"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 9 秒，並將所有符石轉化為固定數量的水、火、木、光及暗強化符石"
    ],
    "monsterId": "6092",
    "leaderName": "百獸同心 ‧ 強",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 5 倍，所有屬性符石兼具 25% 心符石效果 (效果可以疊加)",
    "attribute": "水",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "火辣主唱 ‧ 泊安娜",
    "activeName": ["獸化支援 ‧ 強"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.8 倍；隊伍中每多一個獸類成員，額外增加效果持續 1 回合，最多可持續 6 回合"
    ],
    "monsterId": "6093",
    "leaderName": "煉獄之霸業 ‧ 獸",
    "leaderDescription": "火屬性攻擊力 3 倍及回復力 2 倍；火屬性獸類攻擊力 4.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "狂野吉他手 ‧ 雲陽",
    "activeName": ["亡命感應 ‧ 木"],
    "activeDescription": [
      "心符石的掉落機率降至 0，並將原有機率增加至木符石的掉落機率 (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "6094",
    "leaderName": "大地之霸業 ‧ 獸",
    "leaderDescription": "木屬性攻擊力 3 倍及回復力 2 倍；木屬性獸類攻擊力 4.5 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "雷閃鍵盤手 ‧ 多多",
    "activeName": ["三原契約 ‧ 獸"],
    "activeDescription": ["獸類攻擊力 2 倍，效果持續至沒有發動 3 種屬性攻擊"],
    "monsterId": "6095",
    "leaderName": "百獸同心 ‧ 強",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 5 倍，所有屬性符石兼具 25% 心符石效果 (效果可以疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "夢遊鼓手 ‧ 蘇瑪塔",
    "activeName": ["蝕夢之靈 ‧ 強"],
    "activeDescription": [
      "1 回合內，沒有消除心符石，全隊攻擊力 2.2 倍；反之，全隊攻擊力及回復力 1.5 倍"
    ],
    "monsterId": "6096",
    "leaderName": "百獸同盟 ‧ 強",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 5 倍。消除 3 種符石時，攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "綻放榮耀 ‧ 矢車菊(動態造型)",
    "activeName": ["逆我盡滅"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 1.3 倍，並直接引爆場上所有非克制敵人屬性的屬性符石，以掉落敵人屬性以外的符石；若隊伍中只有妖精類成員時，1 回合內，連擊 (Combo) 數目增加 8"
    ],
    "monsterId": "6097",
    "leaderName": "妖嬈之藍",
    "leaderDescription": "水屬性及妖精類攻擊力 4.5 倍，消除 2 組或以上的水符石時，攻擊力提升至 5 倍。消除心符石時，水屬性及妖精類攻擊力額外提升 1.5 倍。沒有消除水符石時 (只計算首批消除的符石)，所受傷害減少 35%",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "閉鎖心蕾 ‧ 櫻(動態造型)",
    "activeName": ["幻櫻花海"],
    "activeDescription": [
      "根據本回合所消除的連擊 (Combo) 數目，下回合開始時將火及心以外的符石，轉化為該數目等值的火強化符石"
    ],
    "monsterId": "6098",
    "leaderName": "櫻之花雨",
    "leaderDescription": "妖精類攻擊力 1.3 倍；火及心符石兼具 25% 其他屬性符石效果 (可疊加)。2 粒火或心符石相連，即可發動消除，所有符石掉落機率不受其他技能影響 (包括改變掉落符石屬性的技能)。隊伍回復力愈高，全隊攻擊力額外提升愈多，隊伍回復力達 3000 可提升 1.5 倍，4000 可達至最大 2 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "戀慕瀰漫 ‧ 薔薇(動態造型)",
    "activeName": ["如一之靈"],
    "activeDescription": [
      "點選一橫行的符石，並將該橫行的符石轉化為心強化符石；1 回合內，妖精類攻擊力 2 倍"
    ],
    "monsterId": "6099",
    "leaderName": "魅豔之刺",
    "leaderDescription": "妖精類攻擊力 4.5 倍，心符石兼具 25% 所有屬性符石效果 (可疊加)",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "捕食惡意 ‧ 食人花(動態造型)",
    "activeName": ["吞噬之燄"],
    "activeDescription": [
      "火符石轉化為火強化符石。1 回合內，消除 2 組或以上的火符石時，火屬性攻擊力 2.5 倍，消除火符石的組數愈多，火屬性攻擊力提升愈多，消除 4 組可達至最大 3.5 倍"
    ],
    "monsterId": "6100",
    "leaderName": "熾燄怒嘯",
    "leaderDescription": "火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "枯旱遺志 ‧ 含羞草(動態造型)",
    "activeName": ["摧滅 ‧ 無聲"],
    "activeDescription": [
      "1 回合內，所受傷害減少 50%；全隊攻擊力 1.5 倍，妖精攻擊力則提升至 2 倍。回合結束時，若我方生命力為 50% 或以上，當前技能 CD 減少 5"
    ],
    "monsterId": "6101",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "憎恨蓬勃 ‧ 罌粟(動態造型)",
    "activeName": ["甜膩的毒汁"],
    "activeDescription": [
      "全隊攻擊力 2 倍，每移動 1 步，扣除 1% 總生命力 (最多扣至 1 血)。效果會在關閉此技能或死亡後消失"
    ],
    "monsterId": "6102",
    "leaderName": "幽冥怒嘯",
    "leaderDescription": "暗屬性攻擊力 3.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "清香白蓮 ‧ 素還真(動態造型)",
    "activeName": ["天問三誓"],
    "activeDescription": [
      "將所有符石轉化為固定數量的水強化、光強化及心強化符石，並延長移動符石時間至 8 秒"
    ],
    "monsterId": "6103",
    "leaderName": "流雲斷念劍",
    "leaderDescription": "水屬性攻擊力 4 倍。消除 3 種或以上的符石及自身發動攻擊時，個人追打自身攻擊力 3 倍的水屬性攻擊 1 次；消除心符石及自身發動攻擊時，個人追打自身攻擊力 1.5 倍的水屬性攻擊 1 次",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "百世經綸 ‧ 一頁書(動態造型)",
    "activeName": ["笑盡英雄"],
    "activeDescription": [
      "2 回合內，以人類其中造成最大傷害轉換為全隊人類的傷害。首批消除場上所有光符石時，下回合開始時將心符石轉化為光強化符石"
    ],
    "monsterId": "6104",
    "leaderName": "玄光雄傑闖天下",
    "leaderDescription": "光屬性及暗屬性攻擊力 3.5 倍。當隊伍中只有光及暗屬性成員時，暗符石兼具光符石效果，人類攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "刀狂劍痴 ‧ 葉小釵(動態造型)",
    "activeName": ["天劍三絕"],
    "activeDescription": [
      "光屬性人類及暗屬性人類成員的攻擊力減至 50%，並將被減去的攻擊力加入自身攻擊力 (效果會在再次發動此技能或死亡後消失)。發動技能首回合，將 3 粒符石轉化為暗強化符石 (水、火及木符石優先轉換)"
    ],
    "monsterId": "6105",
    "leaderName": "幽冥雄傑闖天下",
    "leaderDescription": "光屬性及暗屬性攻擊力 3.5 倍。當隊伍中只有光及暗屬性成員時，光符石兼具暗符石效果，人類攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "毀滅之神 ‧ 棄天帝(動態造型)",
    "activeName": ["神之滅"],
    "activeDescription": [
      "點選元素法陣上的 1 粒符石，並將該種符石引爆，以掉落暗強化符石。1 回合內，自身攻擊力 5 倍"
    ],
    "monsterId": "6106",
    "leaderName": "冥神萬鈞之怒 ‧ 強",
    "leaderDescription": "暗屬性神族攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "瘋癲夢界度 ‧ 格赫羅斯(動態造型)",
    "activeName": ["夢中結界"],
    "activeDescription": [
      "1 回合內，2 粒符石相連，即可發動消除，效果持續至消除一種符石達 30 粒"
    ],
    "monsterId": "6107",
    "leaderName": "吞噬之慾",
    "leaderDescription": "魔族、龍類及獸類攻擊力 4 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "悖論創造 ‧ 道羅斯(動態造型)",
    "activeName": ["力量之源"],
    "activeDescription": [
      "1 回合內，自身攻擊力 4 倍；連擊 (Combo) 數目增加 6；隊伍中每個龍類、獸類或妖精類成員將額外增加 1 連擊 (Combo)，最多可額外增加 6 連擊 (Combo)"
    ],
    "monsterId": "6108",
    "leaderName": "創造之能",
    "leaderDescription": "光屬性龍類、光屬性獸類及光屬性妖精類生命力 1.5 倍及攻擊力 3.5 倍，並延長移動符石時間 1 秒；且消除 1 組 5 粒符石攻擊力額外提升 1.8 倍，消除 1 組符石的數目愈多，攻擊力額外提升愈多，消除 1 組 8 粒符石可提升至最大 2.4 倍攻擊力",
    "attribute": "光",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "因果破壞 ‧ 阿撒托斯(動態造型)",
    "activeName": ["滅絕之噬"],
    "activeDescription": [
      "直接引爆場上所有符石，以掉落所屬隊伍欄直行龍類成員屬性的符石，龍類以外成員隊伍欄直行的符石則隨機掉落"
    ],
    "monsterId": "6109",
    "leaderName": "暗龍暴",
    "leaderDescription": "龍類生命力 1.3 倍及攻擊力 4 倍。每首批消除 1 連擊 (Combo)，自身直行掉落 1 粒暗強化符石。消除 10 粒或以上的暗符石時，全隊攻擊力額外提升 1.6 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "存留的火舌 ‧ 弗塔古亞(動態造型)",
    "activeName": ["吞滅之燄"],
    "activeDescription": [
      "1 回合內，個人追打自身攻擊力 3 倍的攻擊 1 次。若身旁的成員同為火屬性或龍類，同得此效果"
    ],
    "monsterId": "6110",
    "leaderName": "熾燄怒嘯",
    "leaderDescription": "火屬性攻擊力 3.5 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "容納侵蝕 ‧ 阿爾瓦撒(動態造型)",
    "activeName": ["採靈術"],
    "activeDescription": [
      "龍類成員對敵方所造成傷害的 2.5% 轉化為我方生命力，效果持續至回合結束時我方生命力全滿 (效果持續期間技能不會冷卻)。發動技能首回合，龍類攻擊力 1.5 倍"
    ],
    "monsterId": "6111",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "敗德的散播 ‧ 伊戈隆納克(動態造型)",
    "activeName": ["元素破滅"],
    "activeDescription": [
      "直接引爆場上所有符石並對敵方全體造成光屬性傷害；每直行首粒掉落的必定為光符石"
    ],
    "monsterId": "6112",
    "leaderName": "玄光怒嘯",
    "leaderDescription": "光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "雀躍恰恰 ‧ 詩嘉古爾",
    "activeName": ["武化之水 ‧ 強"],
    "activeDescription": [
      "1 回合內，水屬性攻擊力 1.5 倍，並可選擇將隊長或戰友所在隊伍欄直行的符石轉化為水強化符石"
    ],
    "monsterId": "6113",
    "leaderName": "大海之皇權",
    "leaderDescription": "水屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "倜儻鬥舞 ‧ 絲克嘉莉德",
    "activeName": ["武之控壓 ‧ 強"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.8 倍及全體敵人的攻擊力弱化 85%，期間所有減傷效果無效"
    ],
    "monsterId": "6114",
    "leaderName": "煉獄之皇權",
    "leaderDescription": "火屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "恬雅綽約 ‧ 潔蘿露爾",
    "activeName": ["武化之木 ‧ 強"],
    "activeDescription": [
      "1 回合內，木屬性攻擊力 1.5 倍，並可選擇將隊長或戰友所在隊伍欄直行的符石轉化為木強化符石"
    ],
    "monsterId": "6115",
    "leaderName": "大地之皇權",
    "leaderDescription": "木屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "媚光誘舞 ‧ 斯露德",
    "activeName": ["武之控壓 ‧ 強"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.8 倍及全體敵人的攻擊力弱化 85%，期間所有減傷效果無效"
    ],
    "monsterId": "6116",
    "leaderName": "神聖之皇權",
    "leaderDescription": "光屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "端莊華爾 ‧ 格恩達爾",
    "activeName": ["武化之暗 ‧ 強"],
    "activeDescription": [
      "1 回合內，暗屬性攻擊力 1.5 倍，並可選擇將隊長或戰友所在隊伍欄直行的符石轉化為暗強化符石"
    ],
    "monsterId": "6117",
    "leaderName": "暗黑之皇權",
    "leaderDescription": "暗屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "萬魔圖騰 ‧ 薩魯曼",
    "activeName": ["魔王躍舞"],
    "activeDescription": [
      "2 回合內，隊伍中妖精類成員愈多，妖精類的攻擊力及回復力愈高，最大 2 倍"
    ],
    "monsterId": "6118",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "8★"
  },
  {
    "monsterName": "雋永神姿 · 奧丁",
    "activeName": ["主神之威"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2.5 倍；若在最左及最右直行各消除 1 組 5 粒或以上的符石，下回合全隊攻擊力 2.5 倍"
    ],
    "monsterId": "6121",
    "leaderName": "絕境意志",
    "leaderDescription": "當前生命力大於 50% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "暗",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "帽子公爵 ‧ 蘭斯洛特",
    "activeName": ["暗黑之劍氣"],
    "activeDescription": [
      "水符石轉化為暗強化符石，下回合開始時，將本回合所消除強化符石的數量等值的符石轉化為暗強化符石 (水及光符石優先轉換)"
    ],
    "monsterId": "6122",
    "leaderName": "騎士之盟",
    "leaderDescription": "隊伍中只有火、木及暗屬性成員時：全隊攻擊力 4 倍；消除心符石時，全隊攻擊力有 50% 機會額外提升 2 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "浮金貴公子 ‧ 豐臣秀吉",
    "activeName": ["藤棘術"],
    "activeDescription": [
      "隨機將 4 至 7 粒符石轉化為木強化符石 (光及暗符石優先轉換)"
    ],
    "monsterId": "6123",
    "leaderName": "木葉之森",
    "leaderDescription": "消除 6 粒木符石時，木屬性人類攻擊力 3.75 倍；消除的木符石數量愈多，攻擊力愈高，消除 15 粒木符石可達至最大 6 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "噬日誅天 ‧ 噬日狼(動態造型)",
    "activeName": ["光魂附暗"],
    "activeDescription": ["1 回合內，暗符石兼具光符石效果"],
    "monsterId": "6125",
    "leaderName": "念之強勢 ‧ 光",
    "leaderDescription": "減少 50% 移動符石時間，全隊攻擊力 3 倍。",
    "attribute": "光",
    "race": "獸類",
    "star": "8★"
  },
  {
    "monsterName": "蝕月毀天 ‧ 喰月狼(動態造型)",
    "activeName": ["暗魂附光"],
    "activeDescription": ["1 回合內，光符石兼具暗符石效果"],
    "monsterId": "6126",
    "leaderName": "念之強勢 ‧ 暗",
    "leaderDescription": "減少 50% 移動符石時間，全隊攻擊力 3 倍。",
    "attribute": "暗",
    "race": "獸類",
    "star": "8★"
  },
  {
    "monsterName": "眾生天命 ‧ 主神奧丁(動態造型)",
    "activeName": ["主神之威"],
    "activeDescription": [
      "1 回合內，全隊攻擊力 2.5 倍；若在最左及最右直行各消除 1 組 5 粒或以上的符石，下回合全隊攻擊力 2.5 倍"
    ],
    "monsterId": "6127",
    "leaderName": "絕境意志",
    "leaderDescription": "當前生命力大於 50% 時，下一次所受傷害不會使你死亡 (同一回合只會發動一次）",
    "attribute": "暗",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "噩耗元素噬者 ‧ 迪亞布羅(動態造型)",
    "activeName": ["搶天奪日 ‧ 心"],
    "activeDescription": [
      "所有符石隨機轉換，同時心符石出現率上升，並將心符石以心強化符石代替"
    ],
    "monsterId": "6128",
    "leaderName": "罪之罰則",
    "leaderDescription": "以所受傷害 3 倍對敵方攻擊者進行相剋屬性反擊",
    "attribute": "火",
    "race": "妖精類",
    "star": "8★"
  },
  {
    "monsterName": "末日屍龍 ‧ 尼德霍格(動態造型)",
    "activeName": ["捨生力敵"],
    "activeDescription": [
      "消秏現有 75% 生命力；1 回合內，木屬性或龍類攻擊力 2.5 倍"
    ],
    "monsterId": "6129",
    "leaderName": "歃血之盟誓",
    "leaderDescription": "龍類攻擊力 3.5 倍及生命力 2 倍，每回合扣除自身總生命力 10%",
    "attribute": "木",
    "race": "龍類",
    "star": "8★"
  },
  {
    "monsterName": "耿直理想家 ‧ 孫策(動態造型)",
    "activeName": ["驍雄之攻"],
    "activeDescription": [
      "1 回合內，連擊 (Combo) 數目愈高，自身攻擊力愈高，消除 10 連擊 (Combo) 可達至最大 15 倍"
    ],
    "monsterId": "6134",
    "leaderName": "霸者盛勢",
    "leaderDescription": "延長移動符石時間 1 秒。隊伍中只有水屬性人類時，全隊攻擊力 4.5 倍；每組消除符石額外計算多 1 連擊 (Combo)；符石需 4 粒或以上相連才可發動消除",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "蟄伏魍魎 ‧ 祝融(動態造型)",
    "activeName": ["驍勇之力"],
    "activeDescription": [
      "每首批消除 3 種或以上的屬性符石可以累積 1 點蠻力，最多可累積 5 點。1 回合內，自身攻擊力 2.5 倍，發動此技能時的蠻力愈多，自身攻擊力提升愈多，最大 10 倍。發動技能後蠻力將重新累積"
    ],
    "monsterId": "6135",
    "leaderName": "巾幗之燄",
    "leaderDescription": "隊伍中有 3 個或以上屬性成員時，全隊攻擊力 2.5 倍；火符石兼具 25% 其他屬性符石效果 (可疊加)。隊伍中有 3 個或以上人類成員時，人類攻擊力 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "獨眼戰鬼 ‧ 夏侯惇(動態造型)",
    "activeName": ["反殺"],
    "activeDescription": [
      "每當敵人發動攻擊，下回合人類及魔族成員以 50% 自身攻擊力追打 1 次自身屬性攻擊，效果持續至首批消除 5 種屬性符石"
    ],
    "monsterId": "6136",
    "leaderName": "酷冷之殺意",
    "leaderDescription": "隊伍中只有火、木及暗屬性成員時，全隊攻擊力 4 倍；合計消除火、木或暗符石達 9 粒或以上，全隊攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "匠氣興霸 ‧ 甘寧(動態造型)",
    "activeName": ["水之鋒芒"],
    "activeDescription": [
      "隨機將 1 種屬性符石轉化為水符石；若轉化的符石數量比原有的水符石數量少， 1 回合內自身攻擊力 4 倍"
    ],
    "monsterId": "6137",
    "leaderName": "浪濤怒嘯",
    "leaderDescription": "水屬性攻擊力 3.5 倍",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "號令羊駝 ‧ 馬超(動態造型)",
    "activeName": ["草原的力量"],
    "activeDescription": [
      "1 回合內，人類攻擊力 1.6 倍；隊伍中每多 1 個木屬性成員，額外增加效果持續 1 回合，最多可持續 6 回合"
    ],
    "monsterId": "6138",
    "leaderName": "藤木怒嘯",
    "leaderDescription": "木屬性攻擊力 3.5 倍",
    "attribute": "木",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "離經叛道 ‧ 張角(動態造型)",
    "activeName": ["毒水之泉"],
    "activeDescription": [
      "敵方全體中毒，每回合將受到施技者攻擊力的傷害，此傷害無視防禦力及屬性並持續到死亡。效果期間全隊攻擊力 1.6 倍，並延長移動符石時間至 15 秒"
    ],
    "monsterId": "6139",
    "leaderName": "玄光怒嘯",
    "leaderDescription": "光屬性攻擊力 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "吉龍銜珠 ‧ 千千",
    "activeName": ["逼力凝視 ‧ 攻"],
    "activeDescription": [
      "2 回合內，全隊攻擊力 1.5 倍，消除心符石時，無視全體敵人的防禦力"
    ],
    "monsterId": "6140",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "喜慶萬歲子 ‧ 克拉拉",
    "activeName": ["絕地靈淵 ‧ 強"],
    "activeDescription": [
      "1 回合內，自身生命力愈低，回復力愈高，最大 3.5 倍；並將心以外的 1 種符石轉化為心符石"
    ],
    "monsterId": "6141",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "幸福攢盒 ‧ 瑪特羅什卡",
    "activeName": ["治癒之靈 ‧ 強"],
    "activeDescription": [
      "回復效果提升 2 倍，直至沒有消除心符石 (不包括主動及隊長技)；發動技能時，將自身所在隊伍欄直行的符石轉化為心符石"
    ],
    "monsterId": "6142",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "木",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "弄獅躍舞 ‧ 鐵皮的哈梅爾",
    "activeName": ["暗靈移魂加冕 ‧ 強"],
    "activeDescription": ["暗符石及心符石轉化為心強化符石"],
    "monsterId": "6143",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "光",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "熊來慶賀 ‧ 莫里斯",
    "activeName": ["蓄能傳承 ‧ 煉靈"],
    "activeDescription": [
      "將與累積戰鬥回合數同等數量的符石轉化為心強化符石，最多 7 粒。發動技能後會將戰鬥回合數重置"
    ],
    "monsterId": "6144",
    "leaderName": "妖精之舞步",
    "leaderDescription": "妖精類攻擊力及回復力 2.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "清絮綺羅 ‧ 希(造型)",
    "activeName": ["誓約的泉源 ‧ 加冕"],
    "activeDescription": [
      "暗及心符石轉化為水強化符石；所轉化的符石愈多，1 回合內水屬性攻擊力愈高，轉化 10 粒符石可達至最大 2.25 倍"
    ],
    "monsterId": "6146",
    "leaderName": "水元素暴濤",
    "leaderDescription": "水屬性攻擊力 4.5 倍，消除水符石的組數愈多，水屬性攻擊力愈高，消除 3 組可提升至最大 6 倍。每回合結束時，隨機將 2 粒符石轉化為水神族符石",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "烈焰染暮 ‧ 妍(造型)",
    "activeName": ["熾熱的約定 ‧ 加冕"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上時，全隊攻擊力 2 倍 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，隨機將 8 粒符石轉化為心強化符石"
    ],
    "monsterId": "6147",
    "leaderName": "熊熊之火",
    "leaderDescription": "火屬性攻擊力 4.5 倍；若有消除火符石，該回合結束時將火符石轉化為火神族強化符石",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "雙魚獻祭 ‧ 卡秋婭與拉維妮斯",
    "activeName": ["蓄能轉換 ‧ 煉水"],
    "activeDescription": [
      "將累積戰鬥回合 (需要消除符石) +1 數量的符石轉化為水符石，最多 8 粒；當累積至最多 8 粒時發動技能，轉化的水符石會以水強化符石代替。發動技能後可轉換符石數將重新累積"
    ],
    "monsterId": "6148",
    "leaderName": "水火堅甲之賦 ‧ 突破",
    "leaderDescription": "全隊攻擊力 2 倍；同時水屬性和火屬性傷害減少 50%，光屬性傷害減少 30%",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "紗白舞蝶 · 別西卜",
    "activeName": ["玄光結界 ‧ 加冕"],
    "activeDescription": [
      "1 回合內，每直行消除一組 4 粒或以上的符石時 (只計算首批消除的符石)，該直行將產生 2 粒光強化符石"
    ],
    "monsterId": "6149",
    "leaderName": "流螢結陣 ‧ 盛",
    "leaderDescription": "光屬性攻擊力 4 倍，並延長移動符石時間 1 秒；消除一組 5 粒或以上的光符石時，光屬性攻擊力額外提升 1.5 倍 (可疊加)",
    "attribute": "光",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "黝光萬丈 · 神皇宙斯(動態造型)",
    "activeName": ["元素結聚之力"],
    "activeDescription": [
      "電擊烙印\n每次只能選取 1 個效果。\n效果1：1 回合內，消除 15 粒或以上自身屬性符石，全隊攻擊力 2 倍\n效果2：心符石轉化為自身屬性神族符石"
    ],
    "monsterId": "6150",
    "leaderName": "元素防護",
    "leaderDescription": "所有屬性傷害減少 30%",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "千殛雷霆 · 神皇宙斯(動態造型)",
    "activeName": ["戰意高昂"],
    "activeDescription": ["1 回合內，自身生命力愈高，攻擊力愈高，最大 2 倍"],
    "monsterId": "6151",
    "leaderName": "元素防護",
    "leaderDescription": "所有屬性傷害減少 30%",
    "attribute": "光",
    "race": "神族",
    "star": "8★"
  },
  {
    "monsterName": "鐵扇公主 ‧ 羅剎女(動態造型)",
    "activeName": ["逆焰之扇"],
    "activeDescription": [
      "木屬性傷害可剋制火屬性目標。每消除一組木符石，個人追打木屬性攻擊 1 次，最多 10 次 (效果會在關閉此技能或死亡後消失)。技能關閉時，所有符石轉化為木符石"
    ],
    "monsterId": "6153",
    "leaderName": "神魔之森",
    "leaderDescription": "隊伍中只有木屬性魔族、或只有木屬性神族及木屬性魔族時：全隊攻擊力 3.5 倍，每消除 4 組符石時，必定掉落 3 粒木符石",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "聖賢哲者 ‧ 唐三藏(動態造型)",
    "activeName": ["光之大義"],
    "activeDescription": [
      "1 回合內，光屬性攻擊力及回復力 2 倍；當隊伍中所有成員的攻擊力基值相同時，所有符石兼具 50% 其他屬性符石效果"
    ],
    "monsterId": "6154",
    "leaderName": "種族凝匯 ‧ 光",
    "leaderDescription": "隊伍中有 4 種或以上的種族成員時，光屬性攻擊力 4.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "血植異足 ‧ 鐵拐李(動態造型)",
    "activeName": ["穿魂之力 ‧ 機械"],
    "activeDescription": [
      "木屬性及機械族攻擊力 1.8 倍，若發動技能時自身行動值達至 100%，攻擊力提升至 2.2 倍；隊伍中若有 3 個或以上機械族成員，必然延長移動符石時間 3 秒。效果會在進入下一層數 (Wave) 時消失"
    ],
    "monsterId": "6155",
    "leaderName": "奪魄之森",
    "leaderDescription": "妖精類及魔族以外的木屬性成員攻擊力 4 倍；所有成員對消除符石屬性相同的目標攻擊力提升 1.5 倍",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "菡萏香銷 ‧ 何仙姑(動態造型)",
    "activeName": ["仙荷之力"],
    "activeDescription": [
      "神族攻擊力 1.8 倍；每首批消除 1 組隊伍成員屬性符石或心符石時，將產生 1 粒神族強化符石，最多可產生 6 粒，效果持續至受到敵人攻擊"
    ],
    "monsterId": "6156",
    "leaderName": "八仙陣",
    "leaderDescription": "隊伍中有 3 個或以上八仙系列角色時，連擊 (Combo) 時攻擊力提升 125%；消除心符石時，全隊攻擊力額外提升 1.6 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "劍氣御神 ‧ 呂洞賓(動態造型)",
    "activeName": ["幽魂八卦陣"],
    "activeDescription": [
      "點選元素法陣上的 1 粒符石，並將該種符石引爆，以掉落暗神族強化符石。1 回合內，暗符石兼具 50% 其他屬性符石效果"
    ],
    "monsterId": "6157",
    "leaderName": "冥神 ‧ 符籙",
    "leaderDescription": "暗屬性及神族攻擊力 3.4 倍。消除 3 粒符石可額外提升 1.3 倍攻擊力，消除 15 粒可提升至最大 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "無盡夢境 ‧ 睡魔(動態造型)",
    "activeName": ["永恆幻夢"],
    "activeDescription": [
      "3 回合內，所有成員不能發動攻擊及所受傷害減少 95%。期間每回合回復 50% 總生命力 (需消除符石)"
    ],
    "monsterId": "6158",
    "leaderName": "暗黑之皇權",
    "leaderDescription": "暗屬性攻擊力 3.5 倍及回復力 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "魅惑他心 ‧ 白面狐狸(動態造型)",
    "activeName": ["惑靈術"],
    "activeDescription": [
      "2 回合內，可任意移動符石而不會發動消除；並將移動符石所觸碰的心符石轉化為妖族符石"
    ],
    "monsterId": "6159",
    "leaderName": "妖怒萬鈞 ‧ 絕命之力",
    "leaderDescription": "妖精類攻擊力 4 倍。消除妖族符石時，妖精類攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "磷火奪嬰 ‧ 姑獲鳥(動態造型)",
    "activeName": ["喪嬰血仇"],
    "activeDescription": [
      "自身攻擊力減至 0 及人類及魔族攻擊力 2.2 倍，效果持續至全隊沒有發動攻擊"
    ],
    "monsterId": "6160",
    "leaderName": "莫逆相伴 ‧ 魔",
    "leaderDescription": "隊伍中的魔族成員愈多，全隊攻擊力愈高，最大 3.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "不可能性現翼 ‧ 莫比烏斯(動態造型)",
    "activeName": ["反擊性穩定定向器"],
    "activeDescription": [
      "隨機將符石轉化為水強化符石，直至場上有 20 粒水強化符石為止。3 回合內，機械族、獸類及魔族攻擊力及回復力 2 倍"
    ],
    "monsterId": "6161",
    "leaderName": "彩虹的衝擊",
    "leaderDescription": "機械族攻擊力 4 倍，個人以 50% 攻擊力追打水、火、木及光屬性攻擊各 1 次。消除 10 粒或以上強化符石時，全隊攻擊力 1.5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "最終焉算之鋼砲 ‧ 圖靈(動態造型)",
    "activeName": ["最終翠械行動綱領"],
    "activeDescription": [
      "水及火符石轉化為心強化符石。引爆場上所有光及暗符石以掉落水強化、火強化及木強化符石；引爆 1 粒符石可減少 4% 所受傷害，引爆 10 粒可減少最多 40% 所受傷害 (減傷效果持續 2 回合)。2 回合內，延長移動符石時間至 8 秒"
    ],
    "monsterId": "6162",
    "leaderName": "翠械戰略",
    "leaderDescription": "隊伍中只有機械族；或只有機械族及人類成員時，全隊攻擊力 4 倍及生命力 1.3 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "電裝烙雷芯 ‧ 法拉第(動態造型)",
    "activeName": ["億雷接電 脈衝感應"],
    "activeDescription": [
      "木符石轉化為光強化符石；1 回合內，首批掉落的 15 粒符石必定為光人族符石"
    ],
    "monsterId": "6163",
    "leaderName": "雷電戰意",
    "leaderDescription": "隊伍中只有光屬性人類成員時，全隊攻擊力 2.5 倍；消除 2 種符石，攻擊力額外提升 1.5 倍，消除 4 種符石可提升至最大 2.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "萬世始皇帝 ‧ 嬴政(動態造型)",
    "activeName": ["紅蓮滅卻鹿盧劍"],
    "activeDescription": [
      "引爆火、木及光符石，並將最底 3 橫行的符石轉化為強化符石。2 回合內，水屬性攻擊力 1.6 倍"
    ],
    "monsterId": "6164",
    "leaderName": "萬世皇帝之氣勢",
    "leaderDescription": "水屬性攻擊力 2.5 倍，水屬性對人類目標攻擊力提升 2 倍；我方生命力為 35% 或以下時，所受傷害減少 40%",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "炎影的征討者 ‧ 織田信長(動態造型)",
    "activeName": ["刪除 終末"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 10 秒，火屬性攻擊力 1.6 倍；所有火屬性成員的攻擊力跟隨攻擊力基值最高的火屬性成員"
    ],
    "monsterId": "6165",
    "leaderName": "猩紅血刃",
    "leaderDescription": "火屬性攻擊力 3.5 倍，強化符石效果提升 15%",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "艾爾芙萊姆的女王 ‧ 蘿斯(動態造型)",
    "activeName": ["相稱型僵局突破型態"],
    "activeDescription": [
      "光及木符石轉化為水強化符石，暗及心符石轉化為火強化符石。1 回合內，水符石掉落率減少及延長移動符石時間 3 秒"
    ],
    "monsterId": "6166",
    "leaderName": "躍動之流燄",
    "leaderDescription": "火屬性攻擊力 4.5 倍；我方生命力為 90% 或以上時，所受傷害減少 15%。同 1 回合消除的水符石數量比消除的火符石數量多，火屬性攻擊力額外提升 1.6 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "維珍尼亞",
    "activeName": ["審判之刑"],
    "activeDescription": [
      "水及光屬性機械族成員的行動值提升至 100%。若此時全隊機械族成員的行動值達至 100%：將所有符石轉化為機械族符石；身旁的水屬性機械族及光屬性機械族成員攻擊力提升 2.5 倍；效果持續至沒有首批消除光符石"
    ],
    "monsterId": "6167",
    "leaderName": "玄光之濤 ‧ 機械",
    "leaderDescription": "隊伍中只有水屬性機械族及光屬性機械族成員時：全隊攻擊力 5 倍及生命力 1.5 倍，延長移動符石時間 1 秒；所有成員的行動值達至 100% 時，攻擊力額外提升 2 倍",
    "attribute": "光",
    "race": "機械族",
    "star": "7★"
  },
  {
    "monsterName": "資源堪察 ‧ 拉法葉爾",
    "activeName": ["游刃而攻 ‧ 強"],
    "activeDescription": [
      "移靈加冕 ‧ 耀光之浪\n每次只能選取 1 個效果。\n效果1：1 回合內，水屬性攻擊力 1.8 倍，並於移動符石時間內，可任意移動符石而不會發動消除\n效果2：心符石轉化為水強化符石，同時將火符石轉化為心強化符石，並將木符石轉化為光強化符石"
    ],
    "monsterId": "6168",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "戰車女郎 ‧ 烏列爾",
    "activeName": ["熾燄之傲 ‧ 強"],
    "activeDescription": [
      "移靈加冕 ‧ 幽冥之燄\n每次只能選取 1 個效果。\n效果1：1 回合內，火屬性攻擊力 1.5 倍，並無視全體敵人的防禦力\n效果2：心符石轉化為火強化符石，同時將木符石轉化為心強化符石，並將光符石轉化為暗強化符石"
    ],
    "monsterId": "6169",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "太空飛行 ‧ 加百列",
    "activeName": ["運籌之時 ‧ 強"],
    "activeDescription": [
      "移靈加冕 ‧ 浪濤之耀\n每次只能選取 1 個效果。\n效果1：1 回合內，光屬性攻擊力 1.8 倍，並延長移動符石時間 2 秒\n效果2：心符石轉化為光強化符石，同時將暗符石轉化為心強化符石，並將火符石轉化為水強化符石"
    ],
    "monsterId": "6171",
    "leaderName": "光之震怒",
    "leaderDescription": "光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "秘密監察 ‧ 拉貴爾",
    "activeName": ["轟動一瞬 ‧ 強"],
    "activeDescription": [
      "移靈加冕 ‧ 森林之幽\n每次只能選取 1 個效果。\n效果1：1 回合內，暗及光屬性攻擊力 2 倍\n效果2：心符石轉化為暗強化符石，同時將光符石轉化為心強化符石，並將水符石轉化為木強化符石"
    ],
    "monsterId": "6172",
    "leaderName": "暗之震怒",
    "leaderDescription": "暗屬性攻擊力 3 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "異瞳醫者 ‧ 桔梗(動態造型)",
    "activeName": ["無畏之心"],
    "activeDescription": [
      "心符石兼具 50% 自身屬性符石效果；發動技能時，場上每 1 粒心符石，額外增加 1 回合效果，3 粒心符石可持續最多 4 回合"
    ],
    "monsterId": "6173",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "蓮池正旦 ‧ 泰芙努特(造型)",
    "activeName": ["極限解放 ‧ 浪濤"],
    "activeDescription": [
      "直接引爆水屬性以外的符石造成敵方全體水屬性傷害；並提高水屬性攻擊力：引爆的符石愈多，水屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "6174",
    "leaderName": "浪濤之誅罰",
    "leaderDescription": "水屬性對火及暗屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；火及暗屬性傷害減少 25%",
    "attribute": "水",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "熾盛赤旗 ‧ 賽特(造型)",
    "activeName": ["極限解放 ‧ 熾燄"],
    "activeDescription": [
      "直接引爆火屬性以外的符石造成敵方全體火屬性傷害；並提高火屬性攻擊力：引爆的符石愈多，火屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "6175",
    "leaderName": "熾燄之誅罰",
    "leaderDescription": "火屬性對火及木屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；火及木屬性傷害減少 25%",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "臉譜變幻 ‧ 舒(造型)",
    "activeName": ["極限解放 ‧ 藤木"],
    "activeDescription": [
      "直接引爆木屬性以外的符石造成敵方全體木屬性傷害；並提高木屬性攻擊力：引爆的符石愈多，木屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "6176",
    "leaderName": "藤棘之誅罰",
    "leaderDescription": "木屬性對水及光屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；水及光屬性傷害減少 25%",
    "attribute": "木",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "大旗揮舞 ‧ 拉(造型)",
    "activeName": ["極限解放 ‧ 玄光"],
    "activeDescription": [
      "直接引爆光屬性以外的符石造成敵方全體光屬性傷害；並提高光屬性攻擊力：引爆的符石愈多，光屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "6177",
    "leaderName": "玄光之誅罰",
    "leaderDescription": "光屬性對火及暗屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；火及暗屬性傷害減少 25%",
    "attribute": "光",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "舞槍如影 ‧ 奧西利斯(造型)",
    "activeName": ["極限解放 ‧ 幽冥"],
    "activeDescription": [
      "直接引爆暗屬性以外的符石造成敵方全體暗屬性傷害；並提高暗屬性攻擊力：引爆的符石愈多，暗屬性攻擊力愈高，25 粒可達至最高 2 倍"
    ],
    "monsterId": "6178",
    "leaderName": "幽冥之誅罰",
    "leaderDescription": "暗屬性對木及光屬性目標的攻擊力提升 5.5 倍，對其他屬性目標攻擊力提升 3.5 倍 (包括主動技)；木及光屬性傷害減少 25%",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "神速 ‧ 奇犽(動態造型)",
    "activeName": ["疾風迅雷"],
    "activeDescription": [
      "將 4 粒符石轉化為暗強化符石 (心符石優先轉換)；1 回合內，個人追打光屬性攻擊 2 次"
    ],
    "monsterId": "6182",
    "leaderName": "奇犽之體能．成長",
    "leaderDescription": "隊伍中只有人類成員時，人類攻擊力 5 倍及生命力 1.3 倍；每首批消除 1 種屬性符石，於回合結束時，隨機將該屬性的其中 3 粒符石轉化為強化符石",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "梅路艾姆(動態造型)",
    "activeName": ["照亮一切的光"],
    "activeDescription": [
      "1 回合內，所有敵人的攻擊力減至 50%，並將被減去的攻擊力加入自身攻擊力"
    ],
    "monsterId": "6183",
    "leaderName": "強悍之力量",
    "leaderDescription": "隊伍中只有妖精類及魔族成員時，每累計消除 1 粒符石，全隊攻擊力持續提升，最多可提升至 7 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "尼飛彼多(動態造型)",
    "activeName": ["黑子舞想"],
    "activeDescription": [
      "8 秒內，可任意移動符石而不會發動消除；1 回合內，妖精類及魔族攻擊力 1.6 倍"
    ],
    "monsterId": "6185",
    "leaderName": "魔族萬鈞之怒",
    "leaderDescription": "魔族攻擊力 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "奔馳速度 ‧ 奧托",
    "activeName": ["狩獵之勢 ‧ 水"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為水屬性或獸類，同得此效果"
    ],
    "monsterId": "6186",
    "leaderName": "水影結界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 4.5 倍；水符石兼具其他屬性符石效果，每個獸類成員提升 12.5% 效果，最高 75% (效果可以疊加)",
    "attribute": "水",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "豪邁殺拳 ‧ 木法沙",
    "activeName": ["窮兇極怒 ‧ 強"],
    "activeDescription": [
      "1 回合內，自身攻擊力 12 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "6188",
    "leaderName": "森影結界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 4.5 倍；木符石兼具其他屬性符石效果，每個獸類成員提升 12.5% 效果，最高 75% (效果可以疊加)",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "跳進節奏 ‧ 布瑪",
    "activeName": ["狩獵之勢 ‧ 光"],
    "activeDescription": [
      "2 回合內，自身攻擊力 3 倍。若身旁的成員同為光屬性或獸類，同得此效果"
    ],
    "monsterId": "6189",
    "leaderName": "光影結界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 4.5 倍；光符石兼具其他屬性符石效果，每個獸類成員提升 12.5% 效果，最高 75% (效果可以疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "焦點扮裝 ‧ 芭絲蒂",
    "activeName": ["窮兇極怒 ‧ 強"],
    "activeDescription": [
      "1 回合內，自身攻擊力 12 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "6190",
    "leaderName": "魅影結界 ‧ 獸",
    "leaderDescription": "獸類攻擊力 4.5 倍；暗符石兼具其他屬性符石效果，每個獸類成員提升 12.5% 效果，最高 75% (效果可以疊加)",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "戶愚呂弟 100%中的100%(動態造型)",
    "activeName": ["全能量 100% 中的 100%"],
    "activeDescription": [
      "首批消除 5 粒或以上暗符石，自身攻擊力 5.5 倍，其後每回合需要首批消除的暗符石數量 +1，達成條件時自身攻擊力額外提升 1.5 倍，最大 10 倍。效果持續至沒有達成條件"
    ],
    "monsterId": "6194",
    "leaderName": "最強之念 ‧ 肌肉操縱",
    "leaderDescription": "全隊攻擊力 2 倍；生命力愈低，全隊攻擊力愈高及所受傷害減少愈多，我方生命力為 25% 或以下時攻擊力可達至最大 5 倍及減少最多 45% 所受傷害",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "斷頭裁決 ‧ 夏爾(動態造型)",
    "activeName": ["冷冽斷頭刀"],
    "activeDescription": [
      "最頂 1 橫行的符石轉化為水強化符石；1 回合內，消除最底 1 橫行內的所有符石時，全隊攻擊力 2.5 倍"
    ],
    "monsterId": "6196",
    "leaderName": "水之震怒",
    "leaderDescription": "水屬性攻擊力 3 倍",
    "attribute": "水",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "夢覺涼夏 ‧ 喀耳刻",
    "activeName": ["魔法雙刃"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上才會發動攻擊和回復，連擊 (Combo) 時攻擊力提升 40%，期間所有減傷效果無效 (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，當前技能 CD 減少 6"
    ],
    "monsterId": "6199",
    "leaderName": "大地之霸權",
    "leaderDescription": "木屬性攻擊力 2.5 倍及回復力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "命盤牌局 ‧ 阿特拉哈西斯(造型)",
    "activeName": ["水刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的水符石，水屬性攻擊力 2 倍"
    ],
    "monsterId": "6200",
    "leaderName": "穹蒼賜賞 ‧ 浪濤",
    "leaderDescription": "水屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒水神族符石",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "火炙百味 ‧ 尼努爾塔(造型)",
    "activeName": ["燄刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的火符石，火屬性攻擊力 2 倍"
    ],
    "monsterId": "6201",
    "leaderName": "穹蒼賜賞 ‧ 熾燄",
    "leaderDescription": "火屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒火神族符石",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "醇厚碧釀 ‧ 杜穆濟(造型)",
    "activeName": ["藤刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的木符石，木屬性攻擊力 2 倍"
    ],
    "monsterId": "6202",
    "leaderName": "穹蒼賜賞 ‧ 藤木",
    "leaderDescription": "木屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒木神族符石",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "蜜味女郎 ‧ 伊南娜(造型)",
    "activeName": ["光刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的光符石，光屬性攻擊力 2 倍"
    ],
    "monsterId": "6203",
    "leaderName": "穹蒼賜賞 ‧ 玄光",
    "leaderDescription": "光屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒光神族符石",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "鋼舞王者 ‧ 納姆塔爾(造型)",
    "activeName": ["魅刃煞陣 ‧ 掌時"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，消除 1 組 6 粒或以上的暗符石，暗屬性攻擊力 2 倍"
    ],
    "monsterId": "6204",
    "leaderName": "穹蒼賜賞 ‧ 幽冥",
    "leaderDescription": "暗屬性攻擊力 4.5 倍；每直行首批消除 1 組 4 粒或以上符石時，該直行將產生 1 粒暗神族符石",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "大自在天 ‧ 濕婆(動態造型)",
    "activeName": ["混沌再生"],
    "activeDescription": [
      "將黑白符石變回原來色調；點選 2 直行的符石並引爆，以掉落水神族強化符石"
    ],
    "monsterId": "6205",
    "leaderName": "神妖滅世",
    "leaderDescription": "隊伍中只有神族或妖精類成員時，全隊攻擊力 4 倍，並延長移動符石時間 1 秒。消除神族或妖族符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "唯識無境 ‧ 梵天(動態造型)",
    "activeName": ["力量的肇始"],
    "activeDescription": [
      "將黑白符石變回原來色調；1 回合內，必然延長移動符石時間 6 秒；自身攻擊力 6 倍；連擊 (Combo) 數目增加 6"
    ],
    "monsterId": "6206",
    "leaderName": "元素創念",
    "leaderDescription": "隊伍中只有神族成員時，全隊攻擊力 4 倍；首批掉落「沒有首批消除」的其中 1 種屬性符石 (剩餘數量最少優先)。消除 5 種屬性符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "持戒苦行 ‧ 毗濕奴(動態造型)",
    "activeName": ["化厄之念"],
    "activeDescription": [
      "將黑白符石變回原來色調；1 回合內，減少 50% 所受傷害；消除神族符石愈多，全隊攻擊力提升愈多，5 粒可提升至最大 2 倍"
    ],
    "monsterId": "6207",
    "leaderName": "幻惑護生",
    "leaderDescription": "隊伍中只有神族成員時，全隊攻擊力 4 倍及回復力 1.5 倍；同時消除光及暗符石時，全隊攻擊力 1.5 倍及減少 20% 所受傷害",
    "attribute": "暗",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "畸孿共生 ‧ 派拉瓦與南迪(動態造型)",
    "activeName": ["妖魅之靈"],
    "activeDescription": ["火符石轉化為心妖族強化符石"],
    "monsterId": "6208",
    "leaderName": "妖精萬鈞之怒",
    "leaderDescription": "妖精類攻擊力 4 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "燃熠比翼 ‧ 迦樓羅(動態造型)",
    "activeName": ["燄鳥振翅"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 10 秒及火屬性攻擊力 1.5 倍，場上有其他附加效果時，火屬性獸類攻擊力則提升至 3 倍"
    ],
    "monsterId": "6209",
    "leaderName": "獸類萬鈞之怒",
    "leaderDescription": "獸類攻擊力 4 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "脈輪師尊 ‧ 因陀羅(動態造型)",
    "activeName": ["神界之宰"],
    "activeDescription": [
      "將 7 個固定位置的符石轉化為光神族符石；1 回合內，以神族及魔族其中造成的最大傷害轉換為全隊神族及魔族的傷害"
    ],
    "monsterId": "6210",
    "leaderName": "神族萬鈞之怒",
    "leaderDescription": "神族攻擊力 4 倍",
    "attribute": "光",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "煌耀女帝 ‧ 美索不達米亞(動態造型)",
    "activeName": ["強悍之志"],
    "activeDescription": [
      "達成 4 連擊 (Combo) 或以上時，個人追打光及暗屬性攻擊 1 次；達成 6 連擊 (Combo) 或以上時，自身攻擊力 3 倍；達成 8 連擊 (Combo) 或以上時，自身攻擊無視「固定連擊盾」。效果持續至沒有達成 4 連擊 (Combo) 或以上"
    ],
    "monsterId": "6211",
    "leaderName": "千秋的傳承",
    "leaderDescription": "木屬性攻擊力 4 倍，木屬性人類攻擊力則 5 倍；必然延長移動符石時間 2.5 秒；每消除 1 組光或暗符石，於該回合結束時，將 1 粒符石 (木及心符石優先轉換) 轉化為人族強化符石，最多 30 粒",
    "attribute": "木",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "流杯宴歌 ‧ 普普璐",
    "activeName": ["浪濤噬"],
    "activeDescription": [
      "1 回合內，自身攻擊力 20 倍。(攻擊力不可與其他成員共享)"
    ],
    "monsterId": "6212",
    "leaderName": "瑰秘之妖力",
    "leaderDescription": "妖精類攻擊力 5 倍，回合結束時，隨機將 3 粒水符石轉化為妖族符石。消除 4 種或以上符石時，自身攻擊力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "懲戒霰彈 ‧ 鈴子",
    "activeName": ["炙熱爪擊 ‧ 強"],
    "activeDescription": [
      "將 10 個固定位置的符石轉化為火強化符石。1 回合內，火屬性攻擊力 2 倍，火屬性獸類及獸類攻擊力 3 倍"
    ],
    "monsterId": "6213",
    "leaderName": "血燄注魂術 ‧ 強獸",
    "leaderDescription": "隊伍中只有獸類成員時：全隊攻擊力 5 倍；進入關卡後所有成員的主動技能 CD 減少 5 (效果不能疊加)；消除 1 組 5 粒或以上的符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "不羈韁繩 ‧ 銅丸",
    "activeName": ["麒麟之傲 ‧ 強"],
    "activeDescription": [
      "1 回合內，迴避所有敵人的攻擊。下回合開始前，所有符石轉化為龍族強化符石，全隊攻擊力 1.5 倍"
    ],
    "monsterId": "6214",
    "leaderName": "矢志萬鈞龍怒 ‧ 壽延",
    "leaderDescription": "隊伍中只有龍類成員時，龍類攻擊力 5 倍及生命力 1.25 倍",
    "attribute": "光",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "躍動風采 ‧ 向日葵",
    "activeName": ["魅影術 ‧ 煉"],
    "activeDescription": [
      "將 4 至 7 粒符石轉化為暗強化符石 (水、火及木符石優先轉換)；若隊伍中有 4 個以上龍類成員時，轉化 7 粒暗強化符石的機率大幅提升"
    ],
    "monsterId": "6215",
    "leaderName": "幽冥萬鈞之怒 ‧ 強",
    "leaderDescription": "暗屬性攻擊力 4.5 倍",
    "attribute": "暗",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "智障女神 ‧ 阿克婭(動態造型)",
    "activeName": ["神光拳"],
    "activeDescription": [
      "1 回合內，首批 2 粒相連的符石可發動消除；若首批消除 25 粒或以上符石時，下回合所有符石隨機轉化為水、火、木、光及暗符石"
    ],
    "monsterId": "6216",
    "leaderName": "神聖之水",
    "leaderDescription": "水屬性及「美好世界」系列角色攻擊力 5 倍，首批消除 5 連擊 (Combo) 或以上，攻擊力額外提升 1.3 倍；只能消除首批符石",
    "attribute": "水",
    "race": "神族",
    "star": "6★"
  },
  {
    "monsterName": "華麗爆裂 ‧ 惠惠(動態造型)",
    "activeName": ["爆裂魔法"],
    "activeDescription": [
      "爆裂魔法 ‧ 真紅的金光\n每次只能選取 1 個效果。\n效果1：最頂及最底 1 橫行的符石轉化為火強化符石；對敵方全體造成 800 萬火屬性傷害，此傷害無視防禦力及強化突破敵技。回合結束時，自身進入 1 回合疲憊狀態\n效果2：單數橫行的符石轉化為火強化符石；對敵方全體造成 1000 萬火屬性傷害，此傷害無視防禦力及強化突破敵技。回合結束時，2 回合內自身進入疲憊狀態及「華麗爆裂 ‧ 惠惠」以外人類及神族成員進入亢奮狀態。發動此技能時需儲滿龍脈儀及該回合不能發動龍刻脈動"
    ],
    "monsterId": "6217",
    "leaderName": "釋放最強魔法",
    "leaderDescription": "隊伍中有 3 種或以上屬性成員時，人類及神族攻擊力 5 倍；所有成員對光及暗屬性目標攻擊力提升 2 倍，對其他屬性目標攻擊力提升 1.5 倍 (包括主動技)",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "受辱狂歡 ‧ 達克妮絲(動態造型)",
    "activeName": ["堅忍的盾牌"],
    "activeDescription": [
      "心符石的掉落率降至 0，並將原有機率增加至光符石的掉落機率；減少 15% 所受傷害，每次受到敵人攻擊，減傷效果將提升 10%，最多可減傷 35% (效果會在關閉此技能或死亡後消失)。此技能可隨時關閉，關閉時，隨機將 8 粒符石轉化為心符石"
    ],
    "monsterId": "6218",
    "leaderName": "聖騎士之意志",
    "leaderDescription": "隊伍中只有人類成員時，人類生命力及攻擊力 1.5 倍，光屬性人類則 2 倍；每次受到敵人攻擊時，人類攻擊力額外持續提升，最大 6 倍。連續 2 回合沒有受到敵人攻擊，攻擊力減少",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "地獄公爵 ‧ 巴尼爾(動態造型)",
    "activeName": ["巴尼爾式殺人光線"],
    "activeDescription": [
      "將 6 粒符石轉化為暗魔族符石 (暗及心以外符石優先轉換)；對單一敵人造成 80000 點火屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "6219",
    "leaderName": "負面情感吞食",
    "leaderDescription": "暗屬性攻擊力 3 倍，所有成員對人類目標攻擊力提升 2 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "無頭騎士 ‧ 貝爾迪亞(動態造型)",
    "activeName": ["死亡宣告"],
    "activeDescription": [
      "對 1 個人類敵人施以詛咒：每回合消耗敵人 15% 總生命力，效果持續至受到敵人攻擊"
    ],
    "monsterId": "6220",
    "leaderName": "魔族萬鈞之怒",
    "leaderDescription": "魔族攻擊力 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "創曆者 ‧ 瑪雅(動態造型)",
    "activeName": ["突破之結界"],
    "activeDescription": [
      "所有符石轉化為強化符石。1 回合內，神族及魔族攻擊力 2 倍；光符石兼具 50% 心符石效果及暗符石兼具 50% 光符石效果"
    ],
    "monsterId": "6221",
    "leaderName": "光華獨尊",
    "leaderDescription": "光符石兼具 25% 心符石效果、暗符石兼具 25% 光符石效果、心符石兼具 50% 光符石效果 (效果可以疊加)。消除光、暗及心符石其中 2 種符石時，光屬性攻擊力 3 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "賢智泉源 ‧ 亞特蘭堤斯(動態造型)",
    "activeName": ["自由激濤"],
    "activeDescription": [
      "15 秒內，可任意移動符石而不會發動消除；首批消除所有水符石時，水屬性攻擊力 1.8 倍"
    ],
    "monsterId": "6223",
    "leaderName": "海淵凝念",
    "leaderDescription": "隊伍中只有水屬性成員時，全隊攻擊力 5 倍，每消除 1 粒水符石，回復 1.2% 總生命力 (受連擊 (Combo) 加乘影響)；若首批消除的連擊 (Combo) 數為單數時，所受傷害減少 30%；反之，全隊攻擊力額外提升 1.8 倍。若首批消除的連擊 (Combo) 數達至 6 或以上，可以同時獲得以上兩個效果",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "如煙無跡 ‧ 阿飄(動態造型)",
    "activeName": ["驚世爆破"],
    "activeDescription": [
      "所有符石轉化為獸族強化符石。隊伍中只有獸類成員時，1 回合內，首批 1 粒符石即可發動消除"
    ],
    "monsterId": "6225",
    "leaderName": "幽魂的力量",
    "leaderDescription": "隊伍中只有獸類成員時，全隊生命力 2 倍及攻擊力 5.5 倍；每回合扣除自身總生命力 10%；每消除 1 粒獸族符石，回復 5% 總生命力",
    "attribute": "木",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "隨緣順心 ‧ 零(動態造型)",
    "activeName": ["順勢而攻"],
    "activeDescription": [
      "10 秒內，可任意移動符石而不會發動消除。1 回合內，若隊長及戰友均為獸類成員時，全隊攻擊力 2.5 倍；消除 5 種屬性符石時，該回合所受傷害不會使你死亡"
    ],
    "monsterId": "6226",
    "leaderName": "異瞳的力量",
    "leaderDescription": "獸類生命力及回復力 1.5 倍，並延長移動符石時間 2 秒；連擊 (Combo) 時攻擊力提升 125%；所有屬性符石兼具其他屬性符石效果：隊伍中每多 1 個獸類成員可提升 20% 兼具效果，最大 100% (可疊加)",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "領風典範 ‧ 蜜兒(動態造型)",
    "activeName": ["伺機而攻"],
    "activeDescription": [
      "發動技能時敵方全體生命力需為全滿：所有成員進入潛行模式及攻擊力提升 3 倍，效果持續至對敵人造成傷害 (效果持續期間技能不會冷卻)"
    ],
    "monsterId": "6227",
    "leaderName": "女王的力量",
    "leaderDescription": "隊伍中只有獸類成員時，全隊攻擊力 4 倍及增加 400 點回復力。隊伍中沒有重複成員時，每回合消除符石的組數愈多，全隊攻擊力額外提升愈多，消除 10 組可提升至最大 3 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "醫密祕方 ‧ 紅藥水(動態造型)",
    "activeName": ["貓療術"],
    "activeDescription": [
      "3 回合內，根據隊伍中獸類成員的數量，回復相應的生命力，6 個獸類成員可回復最多 15000 點生命力；於單數層數 (Wave) 發動此技能，此技能回復量 2 倍及最多可回復 30000 點生命力"
    ],
    "monsterId": "6228",
    "leaderName": "熾燄萬鈞之怒",
    "leaderDescription": "火屬性攻擊力 4 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "毛拳重擊 ‧ 鐵拳(動態造型)",
    "activeName": ["爆烈之肌"],
    "activeDescription": [
      "引爆場上所有符石，以掉落該直行獸類成員屬性的符石，獸類以外成員直行的符石則隨機掉落"
    ],
    "monsterId": "6229",
    "leaderName": "玄光萬鈞之怒",
    "leaderDescription": "光屬性攻擊力 4 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "詭譎專研 ‧ 布洛傑特(動態造型)",
    "activeName": ["奪目的光與影"],
    "activeDescription": [
      "所有符石轉化為固定數量的光及暗符石；於雙數層數 (Wave) 發動此技能，則轉化為固定數量的光強化及暗強化符石"
    ],
    "monsterId": "6230",
    "leaderName": "幽冥萬鈞之怒",
    "leaderDescription": "暗屬性攻擊力 4 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "血泊軍權 ‧ 伊莉莎白",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "6231",
    "leaderName": "戾吞天下 ‧ 水",
    "leaderDescription": "水屬性攻擊力 3 倍；每次消除 1 組水符石，水屬性攻擊力持續提升，消除 3 組可提升至最高 6 倍。連續 2 回合沒有消除水符石，攻擊力減少",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "彈炸軍士 ‧ 潔琪",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "6232",
    "leaderName": "戾吞天下 ‧ 火",
    "leaderDescription": "火屬性攻擊力 3 倍；每次消除 1 組火符石，火屬性攻擊力持續提升，消除 3 組可提升至最高 6 倍。連續 2 回合沒有消除火符石，攻擊力減少",
    "attribute": "火",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "統御軍官 ‧ 貝莉",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "6233",
    "leaderName": "戾吞天下 ‧ 木",
    "leaderDescription": "木屬性攻擊力 3 倍；每次消除 1 組木符石，木屬性攻擊力持續提升，消除 3 組可提升至最高 6 倍。連續 2 回合沒有消除木符石，攻擊力減少",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "殘虐軍帥 ‧ 傑克",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "6234",
    "leaderName": "魔性流曳 ‧ 光",
    "leaderDescription": "光屬性魔族攻擊力 4 倍，生命力及回復力 1.5 倍",
    "attribute": "光",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "箝魄軍閥 ‧ 陶德",
    "activeName": ["狂魔之戾 ‧ 血誓"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，技能發動回合擊斃敵人的數量總和，將轉化為效果持續回合 (主動技能除外)；若有擊斃敵人時，該回合不會扣減技能持續回合"
    ],
    "monsterId": "6235",
    "leaderName": "魔性流曳 ‧ 暗",
    "leaderDescription": "暗屬性魔族攻擊力 4 倍，生命力及回復力 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "銅牛蒸獄 ‧ 皮爾婁(動態造型)",
    "activeName": ["曼妙的尖叫 ‧ 火烤"],
    "activeDescription": [
      "2 回合內，隨機將 3 粒符石轉化為火強化符石，移動符石時觸碰的火符石轉化為獸族符石"
    ],
    "monsterId": "6236",
    "leaderName": "獸類萬鈞之怒",
    "leaderDescription": "獸類攻擊力 4 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "萬魔圖騰 ‧ 薩魯曼(造型)",
    "activeName": ["群魔共舞"],
    "activeDescription": ["2 回合內，暗屬性及妖精類的攻擊力及回復力 2 倍"],
    "monsterId": "6237",
    "leaderName": "萬妖齊舞",
    "leaderDescription": "妖精類攻擊力及回復力 3.5 倍。生命力全滿時，妖精類攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "8★"
  },
  {
    "monsterName": "吉祥飛舞 ‧ 凱莉",
    "activeName": ["蓄力攻擊"],
    "activeDescription": [
      "1 回合內不能對敵方造成傷害，下一回合全隊攻擊力提升 2 倍"
    ],
    "monsterId": "6238",
    "leaderName": "大海之霸權",
    "leaderDescription": "水屬性攻擊力 2.5 倍及回復力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "送福迎春 ‧ 波比",
    "activeName": ["灼熱盾擊"],
    "activeDescription": [
      "暈擊敵方全體，使受影響目標無法行動 5 回合，但效果會因受到攻擊而消失"
    ],
    "monsterId": "6239",
    "leaderName": "煉獄之霸權",
    "leaderDescription": "火屬性攻擊力 2.5 倍及回復力 2 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "馬到功成 ‧ 紅孩兒",
    "activeName": ["一擊即中"],
    "activeDescription": ["1 回合內，單體攻擊時全隊追打火屬性攻擊1 次"],
    "monsterId": "6240",
    "leaderName": "百步穿楊 ‧ 神弩",
    "leaderDescription": "當進行單體攻擊時，攻擊力 2.5 倍，若同時消除火、木及暗符石，攻擊力提升至 4 倍。適用於所有成員",
    "attribute": "木",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "聖劍呈祥 ‧ 加里昂",
    "activeName": ["狂戰士"],
    "activeDescription": [
      "在全部或最少 4 個成員可發動主動技時 ，發動此技會將所有成員技能 CD 重置，提升全隊攻擊力 2 倍並持續 8 回合"
    ],
    "monsterId": "6241",
    "leaderName": "光水堅甲之賦 ‧ 突破",
    "leaderDescription": "全隊攻擊力 2 倍；同時光屬性和水屬性傷害減少 50%，火屬性傷害減少 30%",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "祥瑞之氣 ‧ 艾瑪",
    "activeName": ["暗光攻擊轉化"],
    "activeDescription": ["心符石轉化為暗符石，同時將光符石轉化為心符石"],
    "monsterId": "6242",
    "leaderName": "眾神之狂怒",
    "leaderDescription": "神族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "星靈魔導士 ‧ 露西(動態造型)",
    "activeName": ["星靈召喚・水瓶座"],
    "activeDescription": [
      "水符石轉化為強化符石，全隊攻擊力 2.5 倍及減少 50% 所受傷害，效果持續至受到敵人攻擊"
    ],
    "monsterId": "6244",
    "leaderName": "星靈魔法",
    "leaderDescription": "人類及妖精類攻擊力 4 倍，心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "水",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "火之滅龍魔導士 ‧ 納茲(動態造型)",
    "activeName": ["火龍的鐵拳"],
    "activeDescription": [
      "敵方全體點燃，使受影響目標轉為火屬性及每回合以 30 倍自身攻擊力對敵方全體造成火屬性傷害，並持續至死亡；效果持續期間，自身攻擊力 5 倍"
    ],
    "monsterId": "6245",
    "leaderName": "滅龍魔法・炎",
    "leaderDescription": "隊伍中只有人類、妖精類或龍類成員時：全隊攻擊力 5 倍，生命力及回復力 1.3 倍；消除 2 組或以上的火符石時，全隊攻擊力額外提升 1.5 倍；隊伍成員屬性對龍類目標的攻擊力提升 2.5 倍",
    "attribute": "火",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "妖精女王 ‧ 艾爾莎(動態造型)",
    "activeName": ["天輪・五芒星之劍"],
    "activeDescription": [
      "1 回合內，以累積戰鬥回合數 (需消除符石) +1 的數量，轉化光人族符石 (水、光及心以外符石優先轉換)、額外增加連擊 (Combo) 數目及追打次數，最多可轉化 5 粒光人族符石、額外增加 5 連擊 (Combo) 及以 50% 自身攻擊力追打光屬性攻擊 5 次。發動技能後將累積戰鬥回合數重置"
    ],
    "monsterId": "6246",
    "leaderName": "換裝魔法",
    "leaderDescription": "隊伍中只有人類及妖精類成員時：全隊攻擊力 3.5 倍；達成的連擊 (Combo) 數目愈多，全隊攻擊力額外提升愈多，8 連擊 (Combo) 可提升至最大 2.6 倍；消除水及光符石時，有 50% 機會減少 40% 所受傷害 (機率可以疊加)",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "炎龍王 ‧ 伊格尼爾(動態造型)",
    "activeName": ["炎龍王的咆哮"],
    "activeDescription": [
      "1 回合內，延長移動符石時間至 12 秒；引爆隊長及戰友直行的符石，以掉落火強化符石，並對敵方全體造成 200 萬火屬性傷害，此傷害無視防禦力"
    ],
    "monsterId": "6248",
    "leaderName": "炎龍王",
    "leaderDescription": "火屬性及龍類攻擊力 3 倍，火屬性龍類攻擊力則 9 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "千古一帝 ‧ 秦始皇(動態造型)",
    "activeName": ["焚書坑儒"],
    "activeDescription": [
      "將場上的符石變回原始模樣；點擊元素法陣上的符石 3 次，並將固定位置的符石轉化為所點擊的強化符石"
    ],
    "monsterId": "6250",
    "leaderName": "亂世重典",
    "leaderDescription": "暗屬性及魔族攻擊力 6 倍；自身攻擊無視敵人的防禦力；必然延長移動符石時間 2 秒。消除 1 組 5 粒或以上符石時，全隊攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "幻影如水 ‧ 希(動態造型)",
    "activeName": ["疾速之浪"],
    "activeDescription": [
      "水符石掉落率提升至 20%，消除水符石愈多，水屬性攻擊力愈高，消除 12 粒水符石可達至最大 2.2 倍，效果持續至沒有消除神族符石"
    ],
    "monsterId": "6251",
    "leaderName": "水元素之力 ‧ 護壁",
    "leaderDescription": "水屬性攻擊力 4.5 倍；減少所受傷害 35%",
    "attribute": "水",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "芍花愛戀 ‧ 妍(動態造型)",
    "activeName": ["綻放之焰"],
    "activeDescription": [
      "木符石掉落率降至 0，並將原有機率增加至火符石的掉落機率，消除神族符石時，火符石掉落率提升至 40% (效果會在再次發動此技能或死亡後消失)"
    ],
    "monsterId": "6252",
    "leaderName": "心中的火苖",
    "leaderDescription": "火屬性攻擊力 4.5 倍；消除心符石時，火屬性攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "高雅冷絕 ‧ 雪女",
    "activeName": ["鐵壁陣勢 ‧ 水"],
    "activeDescription": ["火符石轉化為心強化符石"],
    "monsterId": "6254",
    "leaderName": "魔魅復甦 ‧ 凝水",
    "leaderDescription": "水屬性攻擊力 2.5 倍及魔族回復力 2 倍；同時木、光和暗屬性傷害減少 50%。所有成員對木屬性目標時無視屬性相剋",
    "attribute": "水",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "時空相對論 ‧ 愛因斯坦(動態造型)",
    "activeName": ["流水定律"],
    "activeDescription": [
      "3 回合內，首批掉落的 8 粒符石必定為水強化符石；技能持續時若所有機械族成員的行動值達至 100%，自身攻擊力 3 倍"
    ],
    "monsterId": "6259",
    "leaderName": "機械理論",
    "leaderDescription": "隊伍中只有機械族或人類成員時：全隊攻擊力 4.5 倍及減少 40% 所受傷害；消除水強化符石時，機械族成員的行動值提升 5%；所有機械族成員的行動值達至 100% 時，攻擊力額外提升 1.5 倍",
    "attribute": "水",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "生物多樣性 ‧ 達爾文(動態造型)",
    "activeName": ["元素探研"],
    "activeDescription": [
      "引爆所有符石以掉落強化符石，每引爆 1 種屬性符石，1 回合內自身攻擊力額外提升 1 倍，最多可提升至 6 倍；消除 5 種屬性符石時，自身主動技能 CD 減少 3"
    ],
    "monsterId": "6260",
    "leaderName": "金液流動",
    "leaderDescription": "隊伍中只有機械族成員時：全隊生命力、攻擊力及回復力 2 倍；消除 3 種或以上符石時，全隊攻擊力額外提升 3 倍；心符石兼具 50% 所有屬性符石效果 (可疊加)",
    "attribute": "木",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "超新星序曲 ‧ 伽利略(動態造型)",
    "activeName": ["機械解密"],
    "activeDescription": [
      "解除機械族成員被封鎖的技能 (此技能無視封鎖技能)。3 回合內，機械族成員的攻擊力及回復力 1.8 倍；發動技能時若所有機械族成員的行動值達至 100%，延長移動符石時間至 15 秒"
    ],
    "monsterId": "6261",
    "leaderName": "幾何結界",
    "leaderDescription": "隊伍中只有機械族成員時：全隊攻擊力 5 倍及必然延長移動符石時間 1 秒；自身的攻擊力減至 0，並將原有的攻擊力基值的 2 倍分別加入所有成員的攻擊力基值，若使用相同的隊長及戰友，則分別加入所有隊員的攻擊力基值；於自身直行首批消除 1 組 4 粒或以上符石時，身旁成員的主動技能 CD 減少 1",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "理想世界 ‧ 柏拉圖(動態造型)",
    "activeName": ["機械化的紀錄"],
    "activeDescription": [
      "2 回合內，將火、木及暗符石轉化為機械族強化符石；發動技能時若「道德反詰法 ‧ 蘇格拉底」及「乙太紛裂 ‧ 亞里士多德」的行動值達至 100% 時，所有符石轉化為機械族強化符石"
    ],
    "monsterId": "6262",
    "leaderName": "機械始動",
    "leaderDescription": "全隊攻擊力 3.5 倍，機械族成員攻擊力額外提升 1.5 倍",
    "attribute": "火",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "引力牽繫 ‧ 哥白尼(動態造型)",
    "activeName": ["日心說"],
    "activeDescription": [
      "引爆所有符石，並將所有符石轉化為固定數量及位置的光強化符石及暗符石"
    ],
    "monsterId": "6263",
    "leaderName": "人類萬鈞之怒",
    "leaderDescription": "人類攻擊力 4 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "乙太紛裂 ‧ 亞里士多德(動態造型)",
    "activeName": ["極樂之魅"],
    "activeDescription": [
      "1 回合內，自身攻擊力 5 倍 (攻擊力不可與其他成員共享)；發動技能時若「道德反詰法 ‧ 蘇格拉底」及「理想世界 ‧ 柏拉圖」的行動值達至 100% 時，自身攻擊力則提升至 10 倍"
    ],
    "monsterId": "6264",
    "leaderName": "機械始動",
    "leaderDescription": "全隊攻擊力 3.5 倍，機械族成員攻擊力額外提升 1.5 倍",
    "attribute": "暗",
    "race": "機械族",
    "star": "6★"
  },
  {
    "monsterName": "艷后爭鳴 · 克麗奧(動態造型)",
    "activeName": ["翩躚起舞"],
    "activeDescription": [
      "點選 2 直行的符石，將之轉化為暗魔族強化符石；1 回合內，魔族及妖精類攻擊力 2 倍"
    ],
    "monsterId": "6267",
    "leaderName": "傾世魅顏",
    "leaderDescription": "隊伍中只有魔族或妖精類成員時：全隊生命力、攻擊力及回復力 1.5 倍；每首批消除 1 個角落的符石時，全隊攻擊力提升 1.25 倍，4 個角落可達至最大 5 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "火慾母神 ‧ 莎布尼古拉絲",
    "activeName": ["暗火移魂"],
    "activeDescription": ["暗符石轉化為火符石"],
    "monsterId": "7001",
    "leaderName": "火之震怒",
    "leaderDescription": "火屬性攻擊力 3 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "大陰陽師 ‧ 安倍晴明",
    "activeName": ["歸一之志"],
    "activeDescription": [
      "1 回合內，消除符石的種類愈多 (只計算首批消除的符石)，自身攻擊力愈高，最大 12 倍"
    ],
    "monsterId": "7002",
    "leaderName": "邃矚之力",
    "leaderDescription": "全隊攻擊力 3 倍，所有成員無視屬性相剋",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "巫山鬼姬 ‧ 瑤姬",
    "activeName": ["凝時摧魂 ‧ 木"],
    "activeDescription": [
      "1 回合內，木屬性攻擊力 1.5 倍；場上有附加效果時，於 7 秒內可任意移動符石而不會發動消除"
    ],
    "monsterId": "7003",
    "leaderName": "大地之集權",
    "leaderDescription": "木屬性攻擊力 2.5 倍及回復力 1.5 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "7★"
  },
  {
    "monsterName": "信念承傳 ‧ 輝煌騎士",
    "activeName": ["五星同源"],
    "activeDescription": ["1 回合內，所有符石兼具其他屬性符石 50% 效果"],
    "monsterId": "7004",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "光",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "阿修羅王 ‧ 羅侯",
    "activeName": ["進擊之癲"],
    "activeDescription": [
      "1 回合內，首 4 組消除符石額外計算多 1 連擊 (Combo)，其後每組消除符石額外計算多 2 連擊 (Combo)。連擊 (Combo) 只計算首批消除的符石。其他計算首批消除符石的技能不受此額外的連擊 (Combo) 影響"
    ],
    "monsterId": "7005",
    "leaderName": "眾神之狂怒",
    "leaderDescription": "神族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "善惡顛倒 ‧ 窮奇",
    "activeName": ["逆天加冕"],
    "activeDescription": [
      "與隊伍成員屬性相同的符石轉為強化符石；1 回合內，強化符石的效果提升 15%。若隊伍成員的屬性達三種或以上，發動技能後，當前技能 CD 減少 2"
    ],
    "monsterId": "7006",
    "leaderName": "野獸之嗔怒",
    "leaderDescription": "獸類攻擊力 3 倍",
    "attribute": "火",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "虛無之頌歌 ‧ 菲爾卡",
    "activeName": ["死靈之源"],
    "activeDescription": [
      "每回合全隊攻擊力持續提升，最大 2.5 倍，效果會在進入下一層數 (Wave) 時消失"
    ],
    "monsterId": "7007",
    "leaderName": "妖精之舞",
    "leaderDescription": "妖精類攻擊力及回復力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "九首凶龍 ‧ 九嬰",
    "activeName": ["群龍之首 ‧ 呼嘯"],
    "activeDescription": [
      "2 回合內，隊伍的龍類成員愈多，龍類攻擊力愈高，最大 1.8 倍"
    ],
    "monsterId": "7008",
    "leaderName": "龍之嗔怒",
    "leaderDescription": "龍類攻擊力 3 倍",
    "attribute": "火",
    "race": "龍類",
    "star": "7★"
  },
  {
    "monsterName": "隱形殺戮者 ‧ 七ＯＯ九",
    "activeName": ["無形 ‧ 瞬擊"],
    "activeDescription": [
      "1 回合內，我方不會發動攻擊，並迴避所有敵人的攻擊；下一回合全隊攻擊力 1.5 倍"
    ],
    "monsterId": "7009",
    "leaderName": "人類之嗔怒",
    "leaderDescription": "人類攻擊力 3 倍",
    "attribute": "水",
    "race": "人類",
    "star": "7★"
  },
  {
    "monsterName": "煙霧鏡 ‧ 特斯卡特利波卡",
    "activeName": ["靈之回饋"],
    "activeDescription": [
      "全隊攻擊力 1.5 倍，直至沒有消除心符石 (只計算首批消除的符石)。效果持續期間技能不會冷卻"
    ],
    "monsterId": "7010",
    "leaderName": "妖精之舞",
    "leaderDescription": "妖精類攻擊力及回復力 2 倍",
    "attribute": "暗",
    "race": "妖精類",
    "star": "7★"
  },
  {
    "monsterName": "罪律審神 ‧ 閻羅",
    "activeName": ["神魅噬魂"],
    "activeDescription": [
      "1 回合內，若首批消除的連擊 (Combo) 數為單數時，暗屬性攻擊力 1.5 倍；反之，神族及魔族攻擊力 1.5 倍。若首批消除的連擊 (Combo) 數達至 6 或以上，可以同時獲得以上兩個效果"
    ],
    "monsterId": "7011",
    "leaderName": "眾神之狂怒",
    "leaderDescription": "神族攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "疾風繾綣 ‧ 風狸",
    "activeName": ["森野結界"],
    "activeDescription": [
      "木屬性及獸類攻擊力 1.5 倍，木符石兼具其他屬性符石效果，效果持續至沒有消除木符石"
    ],
    "monsterId": "7012",
    "leaderName": "野獸之嗔怒",
    "leaderDescription": "獸類攻擊力 3 倍",
    "attribute": "木",
    "race": "獸類",
    "star": "7★"
  },
  {
    "monsterName": "噬人旅者 ‧ 佩利冬",
    "activeName": ["穿刺奪魄 ‧ 光炫"],
    "activeDescription": [
      "1 回合內，達成 4 連擊 (Combo) 或以下時：所受傷害減少 50%，下回合開始時隨機將 5 粒光屬性以外的符石轉化為光符石；達成 5 連擊 (Combo) 或以上時，神族及魔族攻擊力 2 倍。連擊 (Combo) 只計算首批消除的符石"
    ],
    "monsterId": "7013",
    "leaderName": "神魔獵盟",
    "leaderDescription": "隊伍中只有神族及 2 個或以上的魔族成員時，神族攻擊力 4.5 倍及魔族攻擊力 3.5 倍",
    "attribute": "光",
    "race": "神族",
    "star": "7★"
  },
  {
    "monsterName": "烏蘇拉",
    "activeName": ["元素護壁"],
    "activeDescription": [
      "3 回合內，所受傷害減少 30%，並有 70 % 迴避敵人的攻擊"
    ],
    "monsterId": "8001",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "海巫婆烏蘇拉",
    "activeName": ["元素護壁"],
    "activeDescription": [
      "3 回合內，所受傷害減少 30%，並有 70 % 迴避敵人的攻擊"
    ],
    "monsterId": "8002",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "紅心皇后",
    "activeName": ["淨世一擊"],
    "activeDescription": [
      "消除所有附加效果，每個消除的效果對敵方全體造成 50,000 點無屬性傷害"
    ],
    "monsterId": "8003",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "盛怒的紅心皇后",
    "activeName": ["淨世一擊"],
    "activeDescription": [
      "消除所有附加效果，每個消除的效果對敵方全體造成 50,000 點無屬性傷害"
    ],
    "monsterId": "8004",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "梅菲瑟",
    "activeName": ["鐵壁陣勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心強化符石"],
    "monsterId": "8005",
    "leaderName": "魅影幻陣",
    "leaderDescription": "隊伍中須有火、木及暗屬性的成員，消除任何三種或以上屬性符石，火、木及暗屬性攻擊力 3 倍。消除心符石時火、木及暗屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "黑魔女梅菲瑟",
    "activeName": ["鐵壁陣勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心強化符石"],
    "monsterId": "8006",
    "leaderName": "魅影幻陣",
    "leaderDescription": "隊伍中須有火、木及暗屬性的成員，消除任何三種或以上屬性符石，火、木及暗屬性攻擊力 3 倍。消除心符石時火、木及暗屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "庫伊拉 · 德維爾",
    "activeName": ["元素轉移 ‧ 光"],
    "activeDescription": [
      "3 回合內，消除一組 5 粒或以上光屬性以外的屬性符石，必定產生 5 粒光符石"
    ],
    "monsterId": "8007",
    "leaderName": "愈戰愈強 ‧ 超",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "名流庫伊拉 · 德維爾",
    "activeName": ["元素轉移 ‧ 光"],
    "activeDescription": [
      "3 回合內，消除一組 5 粒或以上光屬性以外的屬性符石，必定產生 5 粒光符石"
    ],
    "monsterId": "8008",
    "leaderName": "愈戰愈強 ‧ 超",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "伊絲瑪",
    "activeName": ["幽冥追擊"],
    "activeDescription": [
      "自身發動攻擊時，個人追打暗屬性攻擊 1 次，效果持續至自身沒有發動攻擊為止。效果持續期間技能不會冷卻"
    ],
    "monsterId": "8009",
    "leaderName": "魅影幻陣",
    "leaderDescription": "隊伍中須有火、木及暗屬性的成員，消除任何三種或以上屬性符石，火、木及暗屬性攻擊力 3 倍。消除心符石時火、木及暗屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "大祭司伊絲瑪",
    "activeName": ["幽冥追擊"],
    "activeDescription": [
      "自身發動攻擊時，個人追打暗屬性攻擊 1 次，效果持續至自身沒有發動攻擊為止。效果持續期間技能不會冷卻"
    ],
    "monsterId": "8010",
    "leaderName": "魅影幻陣",
    "leaderDescription": "隊伍中須有火、木及暗屬性的成員，消除任何三種或以上屬性符石，火、木及暗屬性攻擊力 3 倍。消除心符石時火、木及暗屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "虎克",
    "activeName": ["念之躍動"],
    "activeDescription": [
      "於移動符石時間內，可任意移動符石而不會發動消除，效果持續 3 回合"
    ],
    "monsterId": "8011",
    "leaderName": "邃矚之力",
    "leaderDescription": "全隊攻擊力 3 倍，所有成員無視屬性相剋",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "虎克船長",
    "activeName": ["念之躍動"],
    "activeDescription": [
      "於移動符石時間內，可任意移動符石而不會發動消除，效果持續 3 回合"
    ],
    "monsterId": "8012",
    "leaderName": "邃矚之力",
    "leaderDescription": "全隊攻擊力 3 倍，所有成員無視屬性相剋",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "邪惡皇后",
    "activeName": ["時空裂縫"],
    "activeDescription": [
      "10 秒內，可任意移動符石，該次移動符石不會造成任何消除，並不會作 1 回合計算"
    ],
    "monsterId": "8013",
    "leaderName": "速戰速決",
    "leaderDescription": "每回合剩餘的移動符石時間愈多，攻擊力愈高，最少 1.5 倍，最大 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "魔鏡皇后",
    "activeName": ["時空裂縫"],
    "activeDescription": [
      "10 秒內，可任意移動符石，該次移動符石不會造成任何消除，並不會作 1 回合計算"
    ],
    "monsterId": "8014",
    "leaderName": "速戰速決",
    "leaderDescription": "每回合剩餘的移動符石時間愈多，攻擊力愈高，最少 1.5 倍，最大 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "妙妙貓",
    "activeName": ["水暗移魂"],
    "activeDescription": ["水符石轉化為暗符石"],
    "monsterId": "8015",
    "leaderName": "野獸之狂怒",
    "leaderDescription": "獸類攻擊力 2.5 倍",
    "attribute": "暗",
    "race": "獸類",
    "star": "6★"
  },
  {
    "monsterName": "冥王哈帝斯",
    "activeName": ["暗水移魂"],
    "activeDescription": ["暗符石轉化為水符石"],
    "monsterId": "8016",
    "leaderName": "海之怒",
    "leaderDescription": "水屬性攻擊力 2 倍",
    "attribute": "水",
    "race": "神族",
    "star": "5★"
  },
  {
    "monsterName": "巫師賈方",
    "activeName": ["暗火移魂"],
    "activeDescription": ["暗符石轉化為火符石"],
    "monsterId": "8017",
    "leaderName": "炎之怒",
    "leaderDescription": "火屬性攻擊力 2 倍",
    "attribute": "火",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "匈奴將軍單於",
    "activeName": ["光木移魂"],
    "activeDescription": ["光符石轉化為木符石"],
    "monsterId": "8018",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "篡奪者刀疤",
    "activeName": ["火光移魂"],
    "activeDescription": ["火符石轉化為光符石"],
    "monsterId": "8019",
    "leaderName": "聖之怒",
    "leaderDescription": "光屬性攻擊力 2 倍",
    "attribute": "光",
    "race": "獸類",
    "star": "5★"
  },
  {
    "monsterName": "霍博士",
    "activeName": ["木暗移魂"],
    "activeDescription": ["木符石轉化為暗符石"],
    "monsterId": "8020",
    "leaderName": "邪之怒",
    "leaderDescription": "暗屬性攻擊力 2 倍",
    "attribute": "暗",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "查立保",
    "activeName": ["元素共鳴 ‧ 龍"],
    "activeDescription": [
      "2 回合內，消除任何三種或以上屬性符石，龍類攻擊力 2 倍"
    ],
    "monsterId": "8021",
    "leaderName": "龍之狂怒",
    "leaderDescription": "龍類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "犄角魔王",
    "activeName": ["元素凝聚"],
    "activeDescription": [
      "1 回合內，隊伍成員的屬性愈多，攻擊力愈高，最大 3 倍"
    ],
    "monsterId": "8022",
    "leaderName": "魔之軍勢",
    "leaderDescription": "魔族攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "梅菲瑟龍",
    "activeName": ["暗木移魂"],
    "activeDescription": ["暗符石轉化為木符石"],
    "monsterId": "8023",
    "leaderName": "森之怒",
    "leaderDescription": "木屬性攻擊力 2 倍",
    "attribute": "木",
    "race": "龍類",
    "star": "6★"
  },
  {
    "monsterName": "約翰親王",
    "activeName": ["光刃猛擊"],
    "activeDescription": ["進行 10 次光屬性攻擊"],
    "monsterId": "8024",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "巫毒好友",
    "activeName": ["暗戈猛擊"],
    "activeDescription": ["進行 10 次暗屬性攻擊"],
    "monsterId": "8025",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "胡善與賈善",
    "activeName": ["流水猛擊"],
    "activeDescription": ["進行 10 次水屬性攻擊"],
    "monsterId": "8026",
    "leaderName": "海之力",
    "leaderDescription": "水屬性攻擊力 1.5 倍",
    "attribute": "水",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "鱷魚滴噠",
    "activeName": ["烈焰猛擊"],
    "activeDescription": ["進行 10 次火屬性攻擊"],
    "monsterId": "8027",
    "leaderName": "炎之力",
    "leaderDescription": "火屬性攻擊力 1.5 倍",
    "attribute": "火",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "卡奧",
    "activeName": ["片葉猛擊"],
    "activeDescription": ["進行 10 次木屬性攻擊"],
    "monsterId": "8028",
    "leaderName": "森之力",
    "leaderDescription": "木屬性攻擊力 1.5 倍",
    "attribute": "木",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "艾格",
    "activeName": ["光刃猛擊"],
    "activeDescription": ["進行 10 次光屬性攻擊"],
    "monsterId": "8029",
    "leaderName": "聖之力",
    "leaderDescription": "光屬性攻擊力 1.5 倍",
    "attribute": "光",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "壞蛋烏鴉",
    "activeName": ["暗戈猛擊"],
    "activeDescription": ["進行 10 次暗屬性攻擊"],
    "monsterId": "8030",
    "leaderName": "邪之力",
    "leaderDescription": "暗屬性攻擊力 1.5 倍",
    "attribute": "暗",
    "race": "進化素材",
    "star": "3★"
  },
  {
    "monsterName": "海頑童",
    "activeName": ["橫掃攻擊 ‧ 水"],
    "activeDescription": ["對敵方全體進行 3 次水屬性攻擊"],
    "monsterId": "8031",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "淘氣海巫",
    "activeName": ["橫掃攻擊 ‧ 水"],
    "activeDescription": ["對敵方全體進行 3 次水屬性攻擊"],
    "monsterId": "8032",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "沙漠刺客",
    "activeName": ["橫掃攻擊 ‧ 火"],
    "activeDescription": ["對敵方全體進行 3 次火屬性攻擊"],
    "monsterId": "8033",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "3★"
  },
  {
    "monsterName": "沙漠巫師",
    "activeName": ["橫掃攻擊 ‧ 火"],
    "activeDescription": ["對敵方全體進行 3 次火屬性攻擊"],
    "monsterId": "8034",
    "leaderName": "妖精之力",
    "leaderDescription": "妖精類攻擊力 1.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "4★"
  },
  {
    "monsterName": "A 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8046",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "水",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "B 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8047",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "C 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8048",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "木",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "D 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8049",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "光",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "E 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8050",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "暗",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "ａ 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8051",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "水",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "ｂ 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8052",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "ｃ 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8053",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "木",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "ｄ 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8054",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "光",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "ｅ 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8055",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "暗",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "F 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8056",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "水",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "G 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8057",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "1 度存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8058",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "木",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "2 度存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8059",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "光",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "3 度存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8060",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "暗",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "ｆ 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8061",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "水",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "ｇ 調存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8062",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "火",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "4 度存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8063",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "木",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "5 度存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8064",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "光",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "6 度存音石",
    "activeName": ["沒有技能"],
    "activeDescription": ["沒有技能"],
    "monsterId": "8065",
    "leaderName": "沒有技能",
    "leaderDescription": "沒有技能",
    "attribute": "暗",
    "race": "進化素材",
    "star": "1★"
  },
  {
    "monsterName": "威沛",
    "activeName": ["元素護壁"],
    "activeDescription": [
      "3 回合內，所受傷害減少 30%，並有 70 % 迴避敵人的攻擊"
    ],
    "monsterId": "9001",
    "leaderName": "妖精之狂怒",
    "leaderDescription": "妖精類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "浪淘女公爵 · 威沛",
    "activeName": ["元素護壁"],
    "activeDescription": [
      "3 回合內，所受傷害減少 30%，並有 70 % 迴避敵人的攻擊"
    ],
    "monsterId": "9002",
    "leaderName": "妖精之狂怒",
    "leaderDescription": "妖精類攻擊力 2.5 倍",
    "attribute": "水",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "馬加錫亞",
    "activeName": ["淨世一擊"],
    "activeDescription": [
      "消除所有附加效果，每個消除的效果對敵方全體造成 50,000 點無屬性傷害"
    ],
    "monsterId": "9003",
    "leaderName": "妖精之意志",
    "leaderDescription": "妖精類生命力 2.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "熾翼候爵 · 馬加錫亞",
    "activeName": ["淨世一擊"],
    "activeDescription": [
      "消除所有附加效果，每個消除的效果對敵方全體造成 50,000 點無屬性傷害"
    ],
    "monsterId": "9004",
    "leaderName": "妖精之意志",
    "leaderDescription": "妖精類生命力 2.5 倍",
    "attribute": "火",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "斯托剌",
    "activeName": ["鐵壁陣勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心強化符石"],
    "monsterId": "9005",
    "leaderName": "魅影幻陣",
    "leaderDescription": "隊伍中須有火、木及暗屬性的成員，消除任何三種或以上屬性符石，火、木及暗屬性攻擊力 3 倍。消除心符石時火、木及暗屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "木",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "梟智親王 · 斯托剌",
    "activeName": ["鐵壁陣勢 ‧ 木"],
    "activeDescription": ["水符石轉化為心強化符石"],
    "monsterId": "9006",
    "leaderName": "魅影幻陣",
    "leaderDescription": "隊伍中須有火、木及暗屬性的成員，消除任何三種或以上屬性符石，火、木及暗屬性攻擊力 3 倍。消除心符石時火、木及暗屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "瑪巴斯",
    "activeName": ["元素轉移 ‧ 光"],
    "activeDescription": [
      "3 回合內，消除一組 5 粒或以上光屬性以外的屬性符石，必定產生 5 粒光符石"
    ],
    "monsterId": "9007",
    "leaderName": "愈戰愈強 ‧ 超",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "真知統領 · 瑪巴斯",
    "activeName": ["元素轉移 ‧ 光"],
    "activeDescription": [
      "3 回合內，消除一組 5 粒或以上光屬性以外的屬性符石，必定產生 5 粒光符石"
    ],
    "monsterId": "9008",
    "leaderName": "愈戰愈強 ‧ 超",
    "leaderDescription": "生命力愈低時，全隊攻擊力會愈高，最大 3.5 倍",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "瑪帕",
    "activeName": ["幽冥追擊"],
    "activeDescription": [
      "自身發動攻擊時，個人追打暗屬性攻擊 1 次，效果持續至自身沒有發動攻擊為止。效果持續期間技能不會冷卻"
    ],
    "monsterId": "9009",
    "leaderName": "魅影幻陣",
    "leaderDescription": "隊伍中須有火、木及暗屬性的成員，消除任何三種或以上屬性符石，火、木及暗屬性攻擊力 3 倍。消除心符石時火、木及暗屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "妖精類",
    "star": "5★"
  },
  {
    "monsterName": "戰鴉伯爵 · 瑪帕",
    "activeName": ["幽冥追擊"],
    "activeDescription": [
      "自身發動攻擊時，個人追打暗屬性攻擊 1 次，效果持續至自身沒有發動攻擊為止。效果持續期間技能不會冷卻"
    ],
    "monsterId": "9010",
    "leaderName": "魅影幻陣",
    "leaderDescription": "隊伍中須有火、木及暗屬性的成員，消除任何三種或以上屬性符石，火、木及暗屬性攻擊力 3 倍。消除心符石時火、木及暗屬性的攻擊力有 50% 機會額外提升 1.5 倍 (機率可以疊加)",
    "attribute": "暗",
    "race": "妖精類",
    "star": "6★"
  },
  {
    "monsterName": "華劣克",
    "activeName": ["念之躍動"],
    "activeDescription": [
      "於移動符石時間內，可任意移動符石而不會發動消除，效果持續 3 回合"
    ],
    "monsterId": "9011",
    "leaderName": "邃矚之力",
    "leaderDescription": "全隊攻擊力 3 倍，所有成員無視屬性相剋",
    "attribute": "光",
    "race": "人類",
    "star": "5★"
  },
  {
    "monsterName": "私語領袖 · 華劣克",
    "activeName": ["念之躍動"],
    "activeDescription": [
      "於移動符石時間內，可任意移動符石而不會發動消除，效果持續 3 回合"
    ],
    "monsterId": "9012",
    "leaderName": "邃矚之力",
    "leaderDescription": "全隊攻擊力 3 倍，所有成員無視屬性相剋",
    "attribute": "光",
    "race": "人類",
    "star": "6★"
  },
  {
    "monsterName": "亞斯塔祿",
    "activeName": ["時空裂縫"],
    "activeDescription": [
      "10 秒內，可任意移動符石，該次移動符石不會造成任何消除，並不會作 1 回合計算"
    ],
    "monsterId": "9013",
    "leaderName": "速戰速決",
    "leaderDescription": "每回合剩餘的移動符石時間愈多，攻擊力愈高，最少 1.5 倍，最大 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "5★"
  },
  {
    "monsterName": "地獄大公 · 亞斯塔祿",
    "activeName": ["時空裂縫"],
    "activeDescription": [
      "10 秒內，可任意移動符石，該次移動符石不會造成任何消除，並不會作 1 回合計算"
    ],
    "monsterId": "9014",
    "leaderName": "速戰速決",
    "leaderDescription": "每回合剩餘的移動符石時間愈多，攻擊力愈高，最少 1.5 倍，最大 4 倍",
    "attribute": "暗",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "世界的智慧 · 所羅門王",
    "activeName": ["魔控乾坤 ‧ 木"],
    "activeDescription": ["1 回合內，光符石及暗符石兼具木符石效果"],
    "monsterId": "9015",
    "leaderName": "魔魅結聚 ‧ 木",
    "leaderDescription": "隊伍中只有木屬性的妖精類、獸類及魔族成員時，木屬性攻擊力 3 倍",
    "attribute": "木",
    "race": "魔族",
    "star": "6★"
  },
  {
    "monsterName": "獨角公爵 · 安度西亞斯",
    "activeName": ["元素凝聚"],
    "activeDescription": [
      "1 回合內，隊伍成員的屬性愈多，攻擊力愈高，最大 3 倍"
    ],
    "monsterId": "9016",
    "leaderName": "魔之軍勢",
    "leaderDescription": "魔族攻擊力 2 倍及回復力 1.5 倍",
    "attribute": "火",
    "race": "魔族",
    "star": "6★"
  }
]

export default monsters;