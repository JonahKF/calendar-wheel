export const sekkiData = [
  { name: "立春", romaji: "Risshun", startDate: new Date(2024, 1, 4) },
  { name: "雨水", romaji: "Usui", startDate: new Date(2024, 1, 19) },
  { name: "啓蟄", romaji: "Keichitsu", startDate: new Date(2024, 2, 5) },
  { name: "春分", romaji: "Shunbun", startDate: new Date(2024, 2, 20) },
  { name: "清明", romaji: "Seimei", startDate: new Date(2024, 3, 5) },
  { name: "穀雨", romaji: "Kokuu", startDate: new Date(2024, 3, 20) },
  { name: "立夏", romaji: "Rikka", startDate: new Date(2024, 4, 5) },
  { name: "小満", romaji: "Shōman", startDate: new Date(2024, 4, 21) },
  { name: "芒種", romaji: "Bōshu", startDate: new Date(2024, 5, 6) },
  { name: "夏至", romaji: "Geshi", startDate: new Date(2024, 5, 21) },
  { name: "小暑", romaji: "Shōsho", startDate: new Date(2024, 6, 7) },
  { name: "大暑", romaji: "Taisho", startDate: new Date(2024, 6, 23) },
  { name: "立秋", romaji: "Risshū", startDate: new Date(2024, 7, 7) },
  { name: "処暑", romaji: "Shosho", startDate: new Date(2024, 7, 23) },
  { name: "白露", romaji: "Hakuro", startDate: new Date(2024, 8, 7) },
  { name: "秋分", romaji: "Shūbun", startDate: new Date(2024, 8, 23) },
  { name: "寒露", romaji: "Kanro", startDate: new Date(2024, 9, 8) },
  { name: "霜降", romaji: "Sōkō", startDate: new Date(2024, 9, 23) },
  { name: "立冬", romaji: "Rittō", startDate: new Date(2024, 10, 7) },
  { name: "小雪", romaji: "Shōsetsu", startDate: new Date(2024, 10, 22) },
  { name: "大雪", romaji: "Taisetsu", startDate: new Date(2024, 11, 7) },
  { name: "冬至", romaji: "Tōji", startDate: new Date(2024, 11, 22) },
  { name: "小寒", romaji: "Shōkan", startDate: new Date(2024, 0, 5) },
  { name: "大寒", romaji: "Daikan", startDate: new Date(2024, 0, 20) },
];

export function getAllDatesInYear(year) {
  const dates = [];
  const start = new Date(year, 0, 1);
  const end = new Date(year + 1, 0, 0);

  for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
    dates.push(new Date(d));
  }
  return dates;
}
