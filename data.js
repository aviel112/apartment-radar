// APARTMENT RADAR — מאגר דירות
// מתעדכן אוטומטית פעמיים ביום (09:30 / 19:30) ע"י daily-apartment-search-center
// כלל: רק דירות עם מחיר מפורסם. דירה בלי מחיר לא נכנסת למאגר.

window.APARTMENT_DATA = {
  updatedAt: "2026-08-31T12:00:00+03:00",
  budget: 1600000,
  equity: 350000,
  leverage: 0.75,
  deadline: "2026-07-31",

  // דירות שאביאל מחק לצמיתות — לא יחזרו למאגר גם אם המודעה עדיין חיה.
  removed: [],

  apartments: [
    {
      id: "by-atzmaut-33-kinus",
      address: "שד' העצמאות 33, דירה 3", city: "בת ים", neighborhood: "מרכז / בלפור",
      price: 1300000, rooms: 2, sqm: 43, floor: 1,
      source: "כינוס", url: null,
      renewal: "verified", renewalNote: "יזם נבחר + עו״ד ממונה. תכנית 502-1060870 בהכנה לפי סעיף 64ב'. הבניין ברשימת מבנים מסוכנים מ-2011 — לחץ להתקדמות.",
      tags: ["כינוס נכסים","פינוי-בינוי","חזיתית"],
      note: "כונס: עו״ד ירון שוואב · תיק הוצל״פ 508526-07-23 · מינימום 1.3M · צ׳ק בנקאי 130K · 43 מ״ר רשום בטאבו, בלי חניה",
      hot: true,
      firstSeen: "2026-08-09"
    },
    {
      id: "rehovot-benzion-40",
      address: "ש. בן ציון 40", city: "רחובות", neighborhood: "צפון מערב העיר",
      price: 999999, rooms: 2, sqm: 50, floor: null,
      source: "מדלן", url: "https://www.madlan.co.il/listings/GmopNLCqTaS",
      renewal: "none",
      tags: ["מתחת למיליון"],
      note: "המחיר הנמוך במאגר — לברר מה הקאץ׳",
      hot: true,
      firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-yadvashem",
      address: "יד ושם", city: "רחובות", neighborhood: "אפריים / סלע",
      price: 1111111, rooms: 3, sqm: 71, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/O0c6Qq6HBR0",
      renewal: "none",
      tags: ["בלעדיות","דו משפחתי"],
      note: "מחיר למ״ר מהטובים במאגר ל-3 חדרים",
      hot: true,
      firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-elazar-11",
      address: "דוד אלעזר 11", city: "רחובות", neighborhood: "אבן גבירול",
      price: 1435000, rooms: 3, sqm: 60, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/j3y8hj4j",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-dolinsky-9",
      address: "אהוד דולינסקי 9", city: "רחובות", neighborhood: "—",
      price: 1490000, rooms: 3, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/dx0nm488",
      renewal: "none",
      tags: ["בלעדי","מעל תקציב"],
      note: "מעל התקציב ב-40K",
      firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-miltzan-1",
      address: "חיים אליעזר מילצ'ן 1", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1550000, rooms: 3, sqm: 67, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/e0g2bk72",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן — כל הרחוב בתהליך",
      tags: ["פינוי-בינוי","מעל תקציב"],
      note: "הזולה במילצ'ן — רק 100K מעל התקציב. הכי נגישה מבין 8 המודעות ברחוב",
      hot: true,
      firstSeen: "2026-08-09"
    },
    {
      id: "rehovot-miltzan-4rooms",
      address: "חיים אליעזר מילצ'ן", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1700000, rooms: 4, sqm: 78, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/y9yo4o19",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן",
      tags: ["פינוי-בינוי","מעל תקציב","גדולה"],
      note: "4 חדרים 78 מ״ר — הכי הרבה מ״ר לשקל במילצ'ן",
      firstSeen: "2026-08-09"
    },
    {
      id: "rehovot-miltzan-20",
      address: "חיים אליעזר מילצ'ן 20", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1740000, rooms: 3.5, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/tnet2akv",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן",
      tags: ["בלעדי","פינוי-בינוי","מעל תקציב"],
      firstSeen: "2026-08-09"
    },
    {
      id: "rehovot-miltzan",
      address: "חיים אליעזר מילצ'ן", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1880000, rooms: 3, sqm: 67, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/jzue4sg8",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן",
      tags: ["פינוי-בינוי","מעל תקציב"],
      note: "מעל התקציב ב-430K — יש זולות יותר באותו רחוב",
      firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-miltzan-13",
      address: "חיים אליעזר מילצ'ן 13", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1900000, rooms: 3.5, sqm: 80, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/hi239nvi",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן",
      tags: ["פינוי-בינוי","מעל תקציב","גדולה"],
      firstSeen: "2026-08-09"
    },
    {
      id: "rg-haroshet-3",
      address: "חרושת 3", city: "רמת גן", neighborhood: "נחלת גנים",
      price: 975000, rooms: 3, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ibkt22z5",
      renewal: "none",
      tags: ["חניה","ממ״ד"],
      note: "3 חדרים מתחת למיליון ברמת גן — נדיר",
      hot: true,
      firstSeen: "2026-07-24"
    },
    {
      id: "rg-haraa-121",
      address: "הרא\"ה 121", city: "רמת גן", neighborhood: "עליות",
      price: 1100000, rooms: 3, sqm: 60, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/8hsy5v3z",
      renewal: "none",
      tags: [],
      firstSeen: "2026-07-24"
    },
    {
      id: "rg-tzanchanim",
      address: "שיכון צנחנים", city: "רמת גן", neighborhood: "שיכון צנחנים",
      price: 1200000, rooms: 2, sqm: 57, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/pfx9z25d",
      renewal: "none",
      tags: [],
      firstSeen: "2026-07-24"
    },
    {
      id: "rg-diratgan",
      address: "דירת גן", city: "רמת גן", neighborhood: "—",
      price: 1400000, rooms: 2, sqm: 50, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/5lv3rjo2",
      renewal: "none",
      tags: ["בלעדי","דירת גן"],
      firstSeen: "2026-07-27"
    },
    {
      id: "holon-benzion-israeli-4",
      address: "בן ציון ישראלי 4", city: "חולון", neighborhood: "נאות רחל",
      price: 1000650, rooms: 2.5, sqm: 60, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/awfduik1",
      renewal: "none",
      tags: [],
      note: "מחיר למ״ר מצוין לחולון",
      hot: true,
      firstSeen: "2026-07-24"
    },
    {
      id: "holon-kapach-21",
      address: "הרב קפאח 21", city: "חולון", neighborhood: "גרין ועם",
      price: 1130000, rooms: 2, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ij96ug1e",
      renewal: "none",
      tags: [],
      hot: true,
      firstSeen: "2026-07-29"
    },
    {
      id: "holon-diratgan-336",
      address: "דירת גן", city: "חולון", neighborhood: "—",
      price: 1350000, rooms: 2.5, sqm: 336, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/f9t6g4da",
      renewal: "none",
      tags: ["דירת גן","שטח ענק"],
      note: "336 מ״ר כולל גינה — לבדוק כמה בנוי. פוטנציאל הרחבה",
      hot: true,
      firstSeen: "2026-08-09"
    },
    {
      id: "holon-porzim",
      address: "הפורצים", city: "חולון", neighborhood: "תל גיבורים",
      price: 1400000, rooms: 3, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/t6p6vn64",
      renewal: "none",
      tags: ["ירד ב-190,000 ₪"],
      note: "ירידת מחיר גדולה — המוכר לחוץ, יש מקום למשא ומתן",
      hot: true,
      firstSeen: "2026-07-28"
    },
    {
      id: "holon-echad-bemai",
      address: "אחד במאי", city: "חולון", neighborhood: "נאות רחל",
      price: 1270000, rooms: 2, sqm: 40, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ltnupy13",
      renewal: "none",
      tags: ["ירד ב-60,000 ₪"],
      firstSeen: "2026-08-09"
    },
    {
      id: "holon-bilu",
      address: "ביל\"ו", city: "חולון", neighborhood: "מרכז / קרית עבודה",
      price: 1390000, rooms: 2, sqm: 45, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/dvi4ksgi",
      renewal: "potential", renewalNote: "קרית עבודה — אזור עם תנועת התחדשות",
      tags: ["בלעדי","פוטנציאל התחדשות"],
      firstSeen: "2026-07-27"
    },
    {
      id: "holon-aharonovich-66",
      address: "יוסף אהרונוביץ' 66", city: "חולון", neighborhood: "שיכון ותיקים",
      price: 1450000, rooms: 3, sqm: 55, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/p974b1dv",
      renewal: "none",
      tags: ["בלעדי"],
      note: "בדיוק על תקרת התקציב",
      firstSeen: "2026-07-27"
    },
    {
      id: "by-rothschild-nitzana",
      address: "רוטשילד", city: "בת ים", neighborhood: "ניצנה",
      price: 1190000, rooms: 2, sqm: 51, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/7zkgiyq8",
      renewal: "potential", renewalNote: "ציר רוטשילד / ניצנה — אזור פינוי-בינוי פעיל בבת ים",
      tags: ["פוטנציאל התחדשות"],
      hot: true,
      firstSeen: "2026-08-09"
    },
    {
      id: "by-rothschild-2h",
      address: "רוטשילד", city: "בת ים", neighborhood: "—",
      price: 1390000, rooms: 2.5, sqm: 60, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/joheu1ew",
      renewal: "potential", renewalNote: "ציר רוטשילד — אזור התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-dira-65-3h",
      address: "דירה (ללא כתובת)", city: "בת ים", neighborhood: "—",
      price: 1420000, rooms: 3, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/lyahdo7n",
      renewal: "none",
      tags: ["קרוב לים"],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-neviim",
      address: "הנביאים", city: "בת ים", neighborhood: "הנביאים",
      price: 1430000, rooms: 3, sqm: 65, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/i3y6yrwi",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-07-24"
    },
    {
      id: "by-dira-65-25h",
      address: "דירה (ללא כתובת)", city: "בת ים", neighborhood: "—",
      price: 1450000, rooms: 2.5, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/71bho55f",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-yerushalaim-66",
      address: "ירושלים 66", city: "בת ים", neighborhood: "לב העיר",
      price: 1450000, rooms: 2, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/fvftw3xe",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-kibbutz-galuyot",
      address: "קיבוץ גלויות", city: "בת ים", neighborhood: "—",
      price: 1350000, rooms: 2.5, sqm: 50, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/x7rhjp87",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-kkl-nitzana",
      address: "קרן קיימת לישראל", city: "בת ים", neighborhood: "ניצנה",
      price: 1440000, rooms: 2, sqm: 55, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/kxhetsr6",
      renewal: "potential", renewalNote: "ניצנה — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-07-27"
    },
    {
      id: "by-bengurion-138-8",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1350000, rooms: 2, sqm: 40, floor: 8,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/u2yipkpc",
      renewal: "none",
      tags: ["חניה","נוף לים"],
      firstSeen: "2026-07-27"
    },
    {
      id: "by-bengurion-138-7",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1350000, rooms: 2, sqm: 42, floor: 7,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/68tv09mm",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-138-5",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1305000, rooms: 2, sqm: 40, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/dy8yw151",
      renewal: "none",
      tags: ["תיירות ונופש"],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-5",
      address: "דרך בן גוריון", city: "בת ים", neighborhood: "פארק הים",
      price: 1260000, rooms: 2, sqm: 37, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/s5xsxuad",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-7",
      address: "דרך בן גוריון", city: "בת ים", neighborhood: "—",
      price: 1250000, rooms: 2, sqm: 37, floor: 7,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/z453mixt",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-11",
      address: "דרך בן גוריון", city: "בת ים", neighborhood: "—",
      price: 1220000, rooms: 2, sqm: 38, floor: 11,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/rd3hrtk7",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-eilat",
      address: "אילת", city: "בת ים", neighborhood: "—",
      price: 1390000, rooms: 2, sqm: 40, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/flabjcbf",
      renewal: "none",
      tags: ["ירד ב-100,000 ₪"],
      firstSeen: "2026-07-27"
    },
    {
      id: "by-david-raziel",
      address: "דוד רזיאל", city: "בת ים", neighborhood: "רמת הנשיא",
      price: 1399000, rooms: 2, sqm: 35, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/knwummef",
      renewal: "none",
      tags: [],
      note: "היקרה למ״ר במאגר — לדלג",
      firstSeen: "2026-08-09"
    },
    // ——— יד2 בת ים (2026-08-10) ———
    {
      id: "by-dira-2h-k2",
      address: "דירה", city: "בת ים", neighborhood: "—",
      price: 1440000, rooms: 2, sqm: 48, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/e5bgnjla",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-daniel-lev-hair",
      address: "דניאל", city: "בת ים", neighborhood: "לב העיר",
      price: 1400000, rooms: 2, sqm: 62, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/rlgwmba3",
      renewal: "none",
      tags: ["ירד ב-100,000 ₪"],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-rothschild-nitzana-25h",
      address: "רוטשילד", city: "בת ים", neighborhood: "ניצנה",
      price: 1380000, rooms: 2.5, sqm: 65, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/j6yj5zwa",
      renewal: "potential", renewalNote: "ניצנה — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-daniel-57-lev-hair",
      address: "דניאל 57", city: "בת ים", neighborhood: "לב העיר",
      price: 1440000, rooms: 2.5, sqm: 73, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/hmq83sfd",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-bengurion-138-k4",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1190000, rooms: 2, sqm: 35, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/0rwy7rfx",
      renewal: "none",
      tags: ["ירד ב-100,000 ₪"],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-balfour-hagvul",
      address: "בלפור", city: "בת ים", neighborhood: "הגבול רוטשילד",
      price: 1430000, rooms: 2, sqm: 48, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/54swtrao",
      renewal: "potential", renewalNote: "הגבול-רוטשילד — אזור התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-dira-25h-k1",
      address: "דירה", city: "בת ים", neighborhood: "—",
      price: 1390000, rooms: 2.5, sqm: 65, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/tn9buw3l",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    // ——— יד2 רחובות (2026-08-10) ———
    {
      id: "rehovot-hahagana-25",
      address: "ההגנה 25", city: "רחובות", neighborhood: "ג'/מרכז מזרח",
      price: 1445000, rooms: 2.5, sqm: 45, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/lhjpjm7w",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "rehovot-hathiya-dania",
      address: "התחייה", city: "רחובות", neighborhood: "דניה",
      price: 1440000, rooms: 2, sqm: 45, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/davgh519",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-10"
    },
    // ——— יד2 פתח תקווה (2026-08-10) ———
    {
      id: "pt-ofir-ahdut",
      address: "אופיר", city: "פתח תקווה", neighborhood: "אחדות",
      price: 1390000, rooms: 2, sqm: 46, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/h6whmiv8",
      renewal: "none",
      tags: ["ירד ב-59,000 ₪"],
      firstSeen: "2026-08-10"
    },
    {
      id: "pt-rambam-lev-hamoshava",
      address: "רמב\"ם", city: "פתח תקווה", neighborhood: "לב המושבה/מרכז",
      price: 1399000, rooms: 2, sqm: 50, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/64rtjxyw",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-10"
    },
    {
      id: "pt-hahagana-yehidat-diur",
      address: "ההגנה", city: "פתח תקווה", neighborhood: "לב המושבה/מרכז",
      price: 690000, rooms: 2, sqm: 28, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/f2530t31",
      renewal: "none",
      tags: ["יחידת דיור"],
      firstSeen: "2026-08-10"
    },
    // ——— יד2 ראשון לציון (2026-08-10) ———
    {
      id: "rlz-hakarmel-14",
      address: "הכרמל 14", city: "ראשון לציון", neighborhood: "רמב\"ם",
      price: 1200000, rooms: 2, sqm: 53, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/dj7dowxr",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "rlz-alkalai-rambam",
      address: "אלקלעי", city: "ראשון לציון", neighborhood: "רמב\"ם",
      price: 1430000, rooms: 2.5, sqm: 55, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/tn2ln8nb",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-10"
    },
    {
      id: "rlz-yehidat-diur",
      address: "יחידת דיור", city: "ראשון לציון", neighborhood: "—",
      price: 650000, rooms: 2, sqm: 30, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/dmdvrzgj",
      renewal: "none",
      tags: ["יחידת דיור"],
      firstSeen: "2026-08-10"
    },
    // ——— יד2 בני ברק (2026-08-10) ———
    {
      id: "bb-abravanel-yesodot",
      address: "אברבנאל", city: "בני ברק", neighborhood: "יסודות",
      price: 1350000, rooms: 3, sqm: 65, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/7hn8mgze",
      renewal: "none",
      tags: ["גג/פנטהאוז"],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-rav-matzliach-6",
      address: "הרב מצליח 6", city: "בני ברק", neighborhood: "קרית הרצוג",
      price: 1390000, rooms: 3, sqm: 62, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/3okmzuz8",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-rav-herzog-43",
      address: "הרב הרצוג 43", city: "בני ברק", neighborhood: "הר שלום",
      price: 1300000, rooms: 3, sqm: 55, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/aohuvaeu",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-yerushalaim-55",
      address: "ירושלים 55", city: "בני ברק", neighborhood: "הפועל המזרחי ב'/שיכון ב'",
      price: 1390000, rooms: 2.5, sqm: 45, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/oosidz6c",
      renewal: "none",
      tags: ["ירד ב-30,000 ₪"],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-yitzhak-sade-22",
      address: "יצחק שדה 22", city: "בני ברק", neighborhood: "שיכון ההסתדרות",
      price: 1350000, rooms: 3, sqm: 52, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/4eae5tz2",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-rav-kook-har-shalom",
      address: "הרב א.י. הכהן קוק", city: "בני ברק", neighborhood: "הר שלום",
      price: 1320000, rooms: 2, sqm: 40, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/t0ghbuli",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-jabotinsky-2h",
      address: "דרך זאב ז'בוטינסקי", city: "בני ברק", neighborhood: "—",
      price: 1450000, rooms: 2, sqm: 39, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/18imf6b6",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-jabotinsky-24",
      address: "דרך זאב ז'בוטינסקי 24", city: "בני ברק", neighborhood: "גבעת רוקח",
      price: 1350000, rooms: 2, sqm: 28, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/19qk1852",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-rav-kook-25h",
      address: "הרב א.י. הכהן קוק", city: "בני ברק", neighborhood: "—",
      price: 1250000, rooms: 2.5, sqm: 45, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/0djc7dwj",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-dira-2h-k0",
      address: "דירה", city: "בני ברק", neighborhood: "—",
      price: 1400000, rooms: 2, sqm: 50, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/713nkiah",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-rabi-tarfon",
      address: "רבי טרפון", city: "בני ברק", neighborhood: "—",
      price: 1200000, rooms: 2, sqm: 35, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/idxigv19",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-rabi-akiva",
      address: "רבי עקיבא", city: "בני ברק", neighborhood: "—",
      price: 1320000, rooms: 2, sqm: 40, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/np9oi6e8",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-yerushalaim-shikun-d",
      address: "ירושלים", city: "בני ברק", neighborhood: "הפועל המזרחי ד'/שיכון ד'",
      price: 850000, rooms: 2, sqm: 35, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/3hvk5fas",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-pardes-katz",
      address: "פרדס כץ", city: "בני ברק", neighborhood: "פרדס כץ",
      price: 950000, rooms: 2, sqm: 40, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/7fdz1xw6",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    // ——— מדלן בת ים (2026-08-10) ———
    {
      id: "by-mdln-kibbutz-galuyot-amidar",
      address: "קיבוץ גלויות", city: "בת ים", neighborhood: "עמידר/ניצנה",
      price: 1350000, rooms: 2.5, sqm: 50, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/tG8MOcuDj6C",
      renewal: "potential", renewalNote: "עמידר — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-bengurion-138-k5",
      address: "בן-גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1260000, rooms: 2, sqm: 37, floor: 5,
      source: "מדלן", url: "https://www.madlan.co.il/listings/VUXotLqxFEE",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-bengurion-138-k13",
      address: "בן-גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1450000, rooms: 2, sqm: 43, floor: 13,
      source: "מדלן", url: "https://www.madlan.co.il/listings/sPHtGl5MPu6",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-neviim-drom-maarav",
      address: "הנביאים", city: "בת ים", neighborhood: "דרום מערב",
      price: 1390000, rooms: 2.5, sqm: 65, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/ZeF2URHDbH7",
      renewal: "none",
      tags: ["ירד ב-40,000 ₪"],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-bengurion-138-k8",
      address: "בן-גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1190000, rooms: 1.5, sqm: 30, floor: 8,
      source: "מדלן", url: "https://www.madlan.co.il/listings/XB74Y288Jex",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-bengurion-park-k5b",
      address: "בן-גוריון", city: "בת ים", neighborhood: "פארק הים",
      price: 1260000, rooms: 2, sqm: 37, floor: 5,
      source: "מדלן", url: "https://www.madlan.co.il/listings/83r0jAdhli0",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-balfour-35",
      address: "בלפור 35", city: "בת ים", neighborhood: "צפון מערב",
      price: 1395000, rooms: 2, sqm: 48, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/oH8M9EXfpEF",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-balfour-merkaz",
      address: "בלפור", city: "בת ים", neighborhood: "מרכז העיר",
      price: 1440000, rooms: 2, sqm: 48, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/ooDh3XzVDj7",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-daniel-24",
      address: "דניאל 24", city: "בת ים", neighborhood: "מרכז העיר",
      price: 1360000, rooms: 2, sqm: 50, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/I9VyeZwpYYC",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-hagvaot-ramat-yosef",
      address: "הגבעות", city: "בת ים", neighborhood: "רמת יוסף",
      price: 1450000, rooms: 2, sqm: 50, floor: 3,
      source: "מדלן", url: "https://www.madlan.co.il/listings/fupBpwegS3I",
      renewal: "none",
      tags: ["ירד מ-1,490,000"],
      firstSeen: "2026-08-10"
    },
    // ——— מדלן חולון (2026-08-10) ———
    {
      id: "holon-mdln-yotvata-jessi",
      address: "יוטבתה", city: "חולון", neighborhood: "ג'סי כהן",
      price: 1360000, rooms: 2, sqm: 45, floor: 3,
      source: "מדלן", url: "https://www.madlan.co.il/listings/Ka7JjNn83WB",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "holon-mdln-echad-bemai-kw",
      address: "אחד במאי", city: "חולון", neighborhood: "קרית עבודה",
      price: 1080000, rooms: 1, sqm: 20, floor: 1,
      source: "מדלן", url: "https://www.madlan.co.il/listings/obS0EwM67UP",
      renewal: "potential", renewalNote: "קרית עבודה — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-10"
    },
    {
      id: "holon-mdln-shankar-68",
      address: "שנקר 68", city: "חולון", neighborhood: "קרית עבודה",
      price: 1250000, rooms: 2, sqm: 48, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/htbXuYKGxEe",
      renewal: "potential", renewalNote: "קרית עבודה — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-10"
    },
    {
      id: "holon-mdln-bilu-kw",
      address: "ביל\"ו", city: "חולון", neighborhood: "קרית עבודה",
      price: 1390000, rooms: 2, sqm: 45, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/N6yuVNvNP4i",
      renewal: "potential", renewalNote: "קרית עבודה — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-10"
    },
    // ——— מדלן בני ברק (2026-08-10) ———
    {
      id: "bb-mdln-rabi-akiva-20",
      address: "רבי עקיבא 20", city: "בני ברק", neighborhood: "הר שלום",
      price: 1320000, rooms: 2, sqm: 40, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/SpO98umj7A3",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-mdln-bengurion-giora",
      address: "בן גוריון", city: "בני ברק", neighborhood: "גיורא",
      price: 1365000, rooms: 2, sqm: 38, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/vpQC5rsncht",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-mdln-bengurion-11",
      address: "בן גוריון 11", city: "בני ברק", neighborhood: "השכונה הותיקה",
      price: 1430000, rooms: 2, sqm: 38, floor: 1,
      source: "מדלן", url: "https://www.madlan.co.il/listings/14EJLkJyCL6",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-mdln-bengurion-vatika",
      address: "בן גוריון", city: "בני ברק", neighborhood: "השכונה הותיקה",
      price: 1350000, rooms: 2, sqm: 38, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/fIV3GBOebbd",
      renewal: "none",
      tags: ["ירד מ-1,395,000"],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-mdln-rabi-tarfon",
      address: "רבי טרפון", city: "בני ברק", neighborhood: "הר שלום",
      price: 1200000, rooms: 2, sqm: 35, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/P1FsNm5jmKn",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-mdln-rav-kook-24",
      address: "הרב קוק 24", city: "בני ברק", neighborhood: "הר שלום",
      price: 1250000, rooms: 2.5, sqm: 45, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/Ai7mVc5JASv",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-mdln-yitzhak-sade-22",
      address: "יצחק שדה 22", city: "בני ברק", neighborhood: "שכון ההסתדרות",
      price: 1350000, rooms: 3, sqm: 52, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/ERAlqTjvRht",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-mdln-shimon-hatzadik",
      address: "שמעון הצדיק", city: "בני ברק", neighborhood: "רמת אהרון",
      price: 1400000, rooms: 2, sqm: 50, floor: null,
      source: "מדלן", url: "https://www.madlan.co.il/listings/FthtedA6xQa",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-mdln-jabotinsky-24",
      address: "ז'בוטינסקי 24", city: "בני ברק", neighborhood: "גבעת רוקח",
      price: 1350000, rooms: 2, sqm: 28, floor: 1,
      source: "מדלן", url: "https://www.madlan.co.il/listings/0HwCnLjFZjx",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    // ——— מדלן רמת גן (2026-08-10) ———
    {
      id: "rg-mdln-tzanchanim",
      address: "שיכון צנחנים", city: "רמת גן", neighborhood: "—",
      price: 1200000, rooms: 2, sqm: 57, floor: 5,
      source: "מדלן", url: "https://www.madlan.co.il/listings/OgkIda748E3",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-w0kj07nt",
      address: "בת ים", city: "בת ים", neighborhood: "",
      price: 1350000, rooms: 2, sqm: 38, floor: 9,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/w0kj07nt",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "by-ddl7okai",
      address: "דרך בן גוריון, בת ים", city: "בת ים", neighborhood: "דרום חדש / פארק הים",
      price: 1350000, rooms: 2, sqm: 31, floor: 8,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ddl7okai",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "by-rqs0ztb2",
      address: "דרך בן גוריון 138, בת ים", city: "בת ים", neighborhood: "דרום חדש / פארק הים",
      price: 1450000, rooms: 2, sqm: 43, floor: 13,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/rqs0ztb2",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "by-33q75z08",
      address: "קרן קיימת לישראל, בת ים", city: "בת ים", neighborhood: "ניצנה",
      price: 1450000, rooms: 2, sqm: 60, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/33q75z08",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "by-1ufobo66",
      address: "אצ\"ל 11, בת ים", city: "בת ים", neighborhood: "דרום מערב ותיק",
      price: 1350000, rooms: 3, sqm: 57, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/1ufobo66",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "by-46nyj8xt",
      address: "בר יהודה, בת ים", city: "בת ים", neighborhood: "דרום מערב ותיק",
      price: 1399999, rooms: 3, sqm: 57, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/46nyj8xt",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "by-554q62p6",
      address: "דוד רזיאל, בת ים", city: "בת ים", neighborhood: "רמת הנשיא",
      price: 1450000, rooms: 2, sqm: 35, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/554q62p6",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "holon-8f6w2f06",
      address: "עין גדי, חולון", city: "חולון", neighborhood: "ג'סי כהן",
      price: 1440000, rooms: 2, sqm: 42, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/8f6w2f06",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "holon-bd38v72v",
      address: "מרכז / קרית עבודה, חולון", city: "חולון", neighborhood: "קרית עבודה",
      price: 1270000, rooms: 2, sqm: 40, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/bd38v72v",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "holon-m1nuhaw9",
      address: "שמואל הנגיד, חולון", city: "חולון", neighborhood: "גרין ועם",
      price: 1340000, rooms: 2, sqm: 45, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/m1nuhaw9",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "holon-kwhabiwz",
      address: "בר כוכבא, חולון", city: "חולון", neighborhood: "רסקו ב'",
      price: 1399000, rooms: 2, sqm: 42, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/kwhabiwz",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "rehovot-9nb02u39",
      address: "עזרא 23, רחובות", city: "רחובות", neighborhood: "מרכז מזרח העיר",
      price: 1400000, rooms: 2.5, sqm: 50, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/9nb02u39",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "pt-ovje5j8f",
      address: "פתח תקווה", city: "פתח תקווה", neighborhood: "",
      price: 799000, rooms: 2, sqm: 25, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/ovje5j8f",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "holon-mdl-KoHblmGmZkD",
      address: "קרית עבודה, חולון", city: "חולון", neighborhood: "קרית עבודה",
      price: 1270000, rooms: 2, sqm: 40, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/KoHblmGmZkD",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "holon-mdl-ZzJXqAUUxUg",
      address: "אחד במאי, חולון", city: "חולון", neighborhood: "קרית עבודה",
      price: 1270000, rooms: 2, sqm: 40, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/ZzJXqAUUxUg",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "holon-mdl-s5ZcaiiihnI",
      address: "עין גדי, חולון", city: "חולון", neighborhood: "ג'סי כהן",
      price: 1440000, rooms: 2, sqm: 42, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/s5ZcaiiihnI",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "holon-mdl-uaKYTeiKFsO",
      address: "אהרונוביץ 70, חולון", city: "חולון", neighborhood: "שיכון ותיקים",
      price: 1450000, rooms: 3, sqm: 55, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/uaKYTeiKFsO",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "rehovot-mdl-OLC1L7wMPFS",
      address: "התחיה 2, רחובות", city: "רחובות", neighborhood: "דניה",
      price: 1440000, rooms: 2, sqm: 45, floor: 3,
      source: "מדלן", url: "https://www.madlan.co.il/listings/OLC1L7wMPFS",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-11"
    },
    {
      id: "by-li9wrtr6",
      address: "בלפור, בת ים", city: "בת ים", neighborhood: "דרום מערב ותיק",
      price: 1350000, rooms: 2.5, sqm: 58, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/li9wrtr6",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-0jmhjdus",
      address: "כובשי החרמון, בת ים", city: "בת ים", neighborhood: "רמת הנשיא",
      price: 1415000, rooms: 2.5, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/0jmhjdus",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-8as4m23t",
      address: "גוש עציון, בת ים", city: "בת ים", neighborhood: "עמידר",
      price: 1440000, rooms: 2, sqm: 50, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/8as4m23t",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-6ji7wli2",
      address: "רוטשילד, בת ים", city: "בת ים", neighborhood: "בת ים",
      price: 1390000, rooms: 2.5, sqm: 65, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/6ji7wli2",
      renewal: "none",
      tags: ["ירד 60K"],
      note: "ירד מ-1,450,000 ל-1,390,000",
      firstSeen: "2026-08-12"
    },
    {
      id: "rlz-aj7mf1p6",
      address: "שלמה נתן, ראשון לציון", city: "ראשון לציון", neighborhood: "רמת אליהו",
      price: 1420000, rooms: 3, sqm: 58, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/aj7mf1p6",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-7ybtj9nu",
      address: "ירושלים, בת ים", city: "בת ים", neighborhood: "לב העיר",
      price: 1390000, rooms: 3, sqm: 70, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/7ybtj9nu",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-84tmz7t7",
      address: "בלפור 100, בת ים", city: "בת ים", neighborhood: "דרום מערב ותיק",
      price: 1420000, rooms: 2, sqm: 58, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/84tmz7t7",
      renewal: "potential",
      tags: ["ירד 100K"],
      note: "בלפור — אזור הגבול/רוטשילד, פוטנציאל התחדשות",
      firstSeen: "2026-08-12"
    },
    {
      id: "by-cjzsjc6w",
      address: "דניאל 46, בת ים", city: "בת ים", neighborhood: "לב העיר",
      price: 1370000, rooms: 2, sqm: 35, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/cjzsjc6w",
      renewal: "none",
      tags: [],
      note: "קטנה — 35 מ״ר",
      firstSeen: "2026-08-12"
    },
    {
      id: "by-u2yipkpc",
      address: "דרך בן גוריון 138, בת ים", city: "בת ים", neighborhood: "דרום חדש / פארק הים",
      price: 1350000, rooms: 2, sqm: 40, floor: 8,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/u2yipkpc",
      renewal: "none",
      tags: ["חניה","נוף לים"],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-rd3hrtk7",
      address: "דרך בן גוריון, בת ים", city: "בת ים", neighborhood: "בת ים",
      price: 1220000, rooms: 2, sqm: 38, floor: 11,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/rd3hrtk7",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-px3b0bwz",
      address: "בלפור, בת ים", city: "בת ים", neighborhood: "בת ים",
      price: 1280000, rooms: 2, sqm: 33, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/px3b0bwz",
      renewal: "potential",
      tags: ["בלעדי"],
      note: "בלפור — פוטנציאל התחדשות מתחם בלפור-העצמאות",
      firstSeen: "2026-08-12"
    },
    {
      id: "by-hmq83sfd",
      address: "דניאל 57, בת ים", city: "בת ים", neighborhood: "לב העיר",
      price: 1440000, rooms: 2.5, sqm: 73, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/hmq83sfd",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-vwos67vk",
      address: "קרן קיימת לישראל, בת ים", city: "בת ים", neighborhood: "בת ים",
      price: 1399000, rooms: 2, sqm: 43, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/vwos67vk",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-joheu1ew",
      address: "רוטשילד, בת ים", city: "בת ים", neighborhood: "רוטשילד",
      price: 1390000, rooms: 2.5, sqm: 60, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/joheu1ew",
      renewal: "potential",
      tags: [],
      note: "רוטשילד — לבדוק אם במתחם ICR (תב״ע מאושרת)",
      firstSeen: "2026-08-12"
    },
    {
      id: "by-j6yj5zwa",
      address: "רוטשילד, בת ים", city: "בת ים", neighborhood: "ניצנה",
      price: 1370000, rooms: 2.5, sqm: 60, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/j6yj5zwa",
      renewal: "potential",
      tags: [],
      note: "רוטשילד/ניצנה — לבדוק אם במתחם ICR",
      firstSeen: "2026-08-12"
    },
    {
      id: "by-71bho55f",
      address: "דירה, בת ים", city: "בת ים", neighborhood: "בת ים",
      price: 1450000, rooms: 2.5, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/71bho55f",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-rlgwmba3",
      address: "דניאל, בת ים", city: "בת ים", neighborhood: "לב העיר",
      price: 1400000, rooms: 2, sqm: 62, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/rlgwmba3",
      renewal: "none",
      tags: ["ירד 100K"],
      firstSeen: "2026-08-12"
    },
    {
      id: "holon-awfduik1",
      address: "בן ציון ישראלי 4, חולון", city: "חולון", neighborhood: "נאות רחל",
      price: 1000650, rooms: 2.5, sqm: 60, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/awfduik1",
      renewal: "none",
      tags: ["מתחת למיליון"],
      note: "מחיר מצוין — 60 מ״ר ב-1M",
      hot: true,
      firstSeen: "2026-08-12"
    },
    {
      id: "holon-ltnupy13",
      address: "אחד במאי, חולון", city: "חולון", neighborhood: "נאות רחל",
      price: 1270000, rooms: 2, sqm: 40, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ltnupy13",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-12"
    },
    {
      id: "holon-dvi4ksgi",
      address: "ביל״ו, חולון", city: "חולון", neighborhood: "מרכז / קרית עבודה",
      price: 1390000, rooms: 2, sqm: 45, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/dvi4ksgi",
      renewal: "potential",
      tags: ["בלעדי"],
      note: "קרית עבודה — אזור התחדשות",
      firstSeen: "2026-08-12"
    },
    {
      id: "holon-t6p6vn64",
      address: "הפורצים, חולון", city: "חולון", neighborhood: "תל גיבורים",
      price: 1400000, rooms: 3, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/t6p6vn64",
      renewal: "none",
      tags: ["ירד 190K"],
      firstSeen: "2026-08-12"
    },
    {
      id: "rg-ibkt22z5",
      address: "חרושת 3, רמת גן", city: "רמת גן", neighborhood: "נחלת גנים",
      price: 975000, rooms: 3, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ibkt22z5",
      renewal: "none",
      tags: ["חניה","ממ״ד","מתחת למיליון"],
      note: "975K על 3 חד׳ 60 מ״ר עם חניה וממ״ד — לבדוק",
      hot: true,
      firstSeen: "2026-08-12"
    },
    {
      id: "bb-3hvk5fas",
      address: "ירושלים, בני ברק", city: "בני ברק", neighborhood: "שיכון ד'",
      price: 850000, rooms: 2, sqm: 35, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/3hvk5fas",
      renewal: "none",
      tags: ["מתחת למיליון"],
      note: "850K — המחיר הנמוך במאגר, לבדוק מצב",
      hot: true,
      firstSeen: "2026-08-12"
    },
    {
      id: "bb-7fdz1xw6",
      address: "פרדס כץ, בני ברק", city: "בני ברק", neighborhood: "פרדס כץ",
      price: 950000, rooms: 2, sqm: 40, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/7fdz1xw6",
      renewal: "none",
      tags: ["מתחת למיליון"],
      firstSeen: "2026-08-12"
    },
    {
      id: "bb-7hn8mgze",
      address: "אברבנאל, בני ברק", city: "בני ברק", neighborhood: "יסודות",
      price: 1350000, rooms: 3, sqm: 65, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/7hn8mgze",
      renewal: "none",
      tags: ["פנטהאוז"],
      firstSeen: "2026-08-12"
    },
    {
      id: "pt-h6whmiv8",
      address: "אופיר, פתח תקווה", city: "פתח תקווה", neighborhood: "אחדות",
      price: 1390000, rooms: 2, sqm: 46, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/h6whmiv8",
      renewal: "none",
      tags: ["ירד 59K"],
      firstSeen: "2026-08-12"
    },
    {
      id: "rehovot-davgh519",
      address: "התחייה, רחובות", city: "רחובות", neighborhood: "דניה",
      price: 1440000, rooms: 2, sqm: 45, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/davgh519",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-12"
    },
    {
      id: "herzliya-xxoqwobo",
      address: "סוקולוב, הרצליה", city: "הרצליה", neighborhood: "מרכז",
      price: 1400000, rooms: 3, sqm: 75, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/xxoqwobo",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-mdln-tG8MOcuDj6C",
      address: "קיבוץ גלויות, בת ים", city: "בת ים", neighborhood: "עמידר / ניצנה",
      price: 1350000, rooms: 2.5, sqm: 50, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/tG8MOcuDj6C",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-mdln-VUXotLqxFEE",
      address: "בן גוריון 138, בת ים", city: "בת ים", neighborhood: "פארק הים",
      price: 1260000, rooms: 2, sqm: 37, floor: 5,
      source: "מדלן", url: "https://www.madlan.co.il/listings/VUXotLqxFEE",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-mdln-oH8M9EXfpEF",
      address: "בלפור 35, בת ים", city: "בת ים", neighborhood: "צפון מערב",
      price: 1395000, rooms: 2, sqm: 48, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/oH8M9EXfpEF",
      renewal: "potential",
      tags: [],
      note: "בלפור — מתחם בלפור-העצמאות פינוי-בינוי",
      firstSeen: "2026-08-12"
    },
    {
      id: "by-mdln-I9VyeZwpYYC",
      address: "דניאל 24, בת ים", city: "בת ים", neighborhood: "מרכז העיר",
      price: 1360000, rooms: 2, sqm: 50, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/I9VyeZwpYYC",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-mdln-fupBpwegS3I",
      address: "הגבעות, בת ים", city: "בת ים", neighborhood: "רמת יוסף",
      price: 1450000, rooms: 2, sqm: 50, floor: 3,
      source: "מדלן", url: "https://www.madlan.co.il/listings/fupBpwegS3I",
      renewal: "none",
      tags: ["ירד 40K"],
      firstSeen: "2026-08-12"
    },
    {
      id: "by-mdln-Ka7JjNn83WB",
      address: "יוטבתה, בת ים", city: "בת ים", neighborhood: "ג'סי כהן",
      price: 1360000, rooms: 2, sqm: 45, floor: 3,
      source: "מדלן", url: "https://www.madlan.co.il/listings/Ka7JjNn83WB",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "holon-mdln-N6yuVNvNP4i",
      address: "ביל״ו, חולון", city: "חולון", neighborhood: "קרית עבודה",
      price: 1390000, rooms: 2, sqm: 45, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/N6yuVNvNP4i",
      renewal: "potential",
      tags: ["בלעדי"],
      note: "קרית עבודה — אזור התחדשות",
      firstSeen: "2026-08-12"
    },
    {
      id: "holon-fb-1624460959258048",
      address: "חנקין, חולון", city: "חולון", neighborhood: "חולון",
      price: 1250000, rooms: 2, sqm: null, floor: 1,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1624460959258048/",
      renewal: "verified",
      renewalNote: "בתוכנית פינוי בינוי — מושכרת, משופצת",
      tags: ["פינוי-בינוי"],
      note: "פייסבוק: חנקין חולון, 2 חד׳, ק1, משופצת, מושכרת, בפינוי בינוי",
      hot: true,
      firstSeen: "2026-08-12"
    },
    {
      id: "by-s5xsxuad",
      address: "דרך בן גוריון, בת ים", city: "בת ים", neighborhood: "פארק הים",
      price: 1260000, rooms: 2, sqm: 37, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/s5xsxuad",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-14"
    },
    {
      id: "by-i3y6yrwi",
      address: "הנביאים, בת ים", city: "בת ים", neighborhood: "הנביאים",
      price: 1390000, rooms: 3, sqm: 65, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/i3y6yrwi",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-14"
    },
    {
      id: "by-kxhetsr6",
      address: "קקל, בת ים", city: "בת ים", neighborhood: "ניצנה",
      price: 1440000, rooms: 2, sqm: 55, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/kxhetsr6",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-14"
    },
    {
      id: "by-z453mixt",
      address: "דרך בן גוריון, בת ים", city: "בת ים", neighborhood: "בת ים",
      price: 1250000, rooms: 2, sqm: 37, floor: 7,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/z453mixt",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-14"
    },
    {
      id: "holon-f9t6g4da",
      address: "דירת גן, חולון", city: "חולון", neighborhood: "חולון",
      price: 1350000, rooms: 2.5, sqm: 336, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/f9t6g4da",
      renewal: "none",
      tags: ["דירת גן"],
      note: "336 מ״ר — לבדוק אם שטח מגרש",
      firstSeen: "2026-08-14"
    },
    {
      id: "holon-ltnupy13",
      address: "אחד במאי, חולון", city: "חולון", neighborhood: "נאות רחל",
      price: 1270000, rooms: 2, sqm: 40, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ltnupy13",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-14"
    },
    {
      id: "holon-dvi4ksgi",
      address: "ביל״ו, חולון", city: "חולון", neighborhood: "קרית עבודה",
      price: 1390000, rooms: 2, sqm: 45, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/dvi4ksgi",
      renewal: "potential",
      tags: ["בלעדי"],
      note: "קרית עבודה — אזור התחדשות",
      firstSeen: "2026-08-14"
    },
    {
      id: "holon-t6p6vn64",
      address: "הפורצים, חולון", city: "חולון", neighborhood: "תל גיבורים",
      price: 1400000, rooms: 3, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/t6p6vn64",
      renewal: "none",
      tags: ["ירד 190K"],
      firstSeen: "2026-08-14"
    },
    {
      id: "bb-3okmzuz8",
      address: "הרב מצליח 6, בני ברק", city: "בני ברק", neighborhood: "קרית הרצוג",
      price: 1390000, rooms: 3, sqm: 62, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/3okmzuz8",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-14"
    },
    {
      id: "bb-0djc7dwj",
      address: "הרב קוק, בני ברק", city: "בני ברק", neighborhood: "הר שלום",
      price: 1250000, rooms: 2.5, sqm: 45, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/0djc7dwj",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-14"
    },
    {
      id: "bb-7fdz1xw6",
      address: "פרדס כץ, בני ברק", city: "בני ברק", neighborhood: "פרדס כץ",
      price: 950000, rooms: 2, sqm: 40, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/7fdz1xw6",
      renewal: "none",
      tags: ["מתחת למיליון"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-5lv3rjo2",
      address: "דירת גן, רמת גן", city: "רמת גן", neighborhood: "רמת גן",
      price: 1400000, rooms: 2, sqm: 50, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/5lv3rjo2",
      renewal: "none",
      tags: ["בלעדי","דירת גן"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-pfx9z25d",
      address: "שיכון צנחנים, רמת גן", city: "רמת גן", neighborhood: "שיכון צנחנים",
      price: 1200000, rooms: 2, sqm: 57, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/pfx9z25d",
      renewal: "potential",
      tags: [],
      note: "תיירות ונופש — רמת עמידר, אזור התחדשות",
      firstSeen: "2026-08-14"
    },
    {
      id: "rlz-tn2ln8nb",
      address: "אלקלעי, ראשון לציון", city: "ראשון לציון", neighborhood: "רמב״ם",
      price: 1430000, rooms: 2.5, sqm: 55, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/tn2ln8nb",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rlz-5k26feou",
      address: "טרומפלדור, ראשון לציון", city: "ראשון לציון", neighborhood: "אברמוביץ׳",
      price: 1300000, rooms: 2.5, sqm: 50, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/5k26feou",
      renewal: "none",
      tags: ["ירד 30K"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rehovot-lhjpjm7w",
      address: "ההגנה 25, רחובות", city: "רחובות", neighborhood: "מרכז מזרח",
      price: 1445000, rooms: 2.5, sqm: 45, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/lhjpjm7w",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-14"
    },
    {
      id: "pt-64rtjxyw",
      address: "רמב״ם, פתח תקווה", city: "פתח תקווה", neighborhood: "לב המושבה",
      price: 1399000, rooms: 2, sqm: null, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/64rtjxyw",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-14"
    },
    {
      id: "pt-h6whmiv8",
      address: "אופיר, פתח תקווה", city: "פתח תקווה", neighborhood: "אחדות",
      price: 1390000, rooms: 2, sqm: 46, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/h6whmiv8",
      renewal: "none",
      tags: ["ירד 59K"],
      firstSeen: "2026-08-14"
    },
    {
      id: "ramle-fb-pinui-binui",
      address: "רמלה — פינוי בינוי", city: "רמלה", neighborhood: "",
      price: 1290000, rooms: null, sqm: null, floor: null,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1616838196903853/",
      renewal: "verified", renewalNote: "פינוי בינוי — לפי מודעת המוכר",
      tags: ["פינוי-בינוי"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rehovot-fb-haela-bnei-aish",
      address: "האלה, בני עי״ש", city: "רחובות", neighborhood: "בני עי״ש",
      price: 1250000, rooms: 3, sqm: null, floor: null,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/841245108923475/",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-14"
    },
    // ——— מדלן חולון (2026-08-14) ———
    {
      id: "holon-mdln-hamorer-3",
      address: "המעורר 3, חולון", city: "חולון", neighborhood: "נאות רחל",
      price: 1230000, rooms: 1.5, sqm: 35, floor: 0,
      source: "מדלן", url: null,
      renewal: "none",
      tags: ["קומת קרקע"],
      firstSeen: "2026-08-14"
    },
    {
      id: "holon-mdln-kapach-21",
      address: "הרב קפאח 21, חולון", city: "חולון", neighborhood: "גרין ועם",
      price: 1130000, rooms: 2, sqm: 32, floor: -1,
      source: "מדלן", url: null,
      renewal: "none",
      tags: ["מרתף"],
      firstSeen: "2026-08-14"
    },
    // ——— מדלן רמת גן (2026-08-14) ———
    {
      id: "rg-mdln-akiva-20",
      address: "רבי עקיבא 20, רמת גן", city: "רמת גן", neighborhood: "הר שלום",
      price: 1320000, rooms: 2, sqm: 40, floor: 0,
      source: "מדלן", url: null,
      renewal: "potential", renewalNote: "הר שלום — שכונה עם פוטנציאל התחדשות",
      tags: ["קומת קרקע","פוטנציאל התחדשות"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-mdln-bg-11",
      address: "בן גוריון 11, רמת גן", city: "רמת גן", neighborhood: "השכונה הותיקה",
      price: 1430000, rooms: 2, sqm: 38, floor: 1,
      source: "מדלן", url: null,
      renewal: "potential", renewalNote: "השכונה הותיקה — התחדשות עירונית פעילה",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-mdln-bg-vatika-q4",
      address: "בן גוריון, רמת גן", city: "רמת גן", neighborhood: "השכונה הותיקה",
      price: 1350000, rooms: 2, sqm: 38, floor: 4,
      source: "מדלן", url: null,
      renewal: "potential", renewalNote: "השכונה הותיקה — התחדשות עירונית פעילה",
      tags: ["ירד 45K","פוטנציאל התחדשות"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-mdln-bg-giora",
      address: "בן גוריון, גיורא, רמת גן", city: "רמת גן", neighborhood: "גיורא",
      price: 1365000, rooms: 2, sqm: 38, floor: 4,
      source: "מדלן", url: null,
      renewal: "potential", renewalNote: "גיורא — שכונה ותיקה עם פוטנציאל התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-mdln-tarfon",
      address: "רבי טרפון, רמת גן", city: "רמת גן", neighborhood: "הר שלום",
      price: 1200000, rooms: 2, sqm: 35, floor: 0,
      source: "מדלן", url: null,
      renewal: "potential", renewalNote: "הר שלום — שכונה עם פוטנציאל התחדשות",
      tags: ["קומת קרקע","פוטנציאל התחדשות"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-mdln-kook-24",
      address: "הרב קוק 24, רמת גן", city: "רמת גן", neighborhood: "הר שלום",
      price: 1250000, rooms: 2.5, sqm: 45, floor: 2,
      source: "מדלן", url: null,
      renewal: "potential", renewalNote: "הר שלום — שכונה עם פוטנציאל התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-mdln-sade-22",
      address: "יצחק שדה 22, רמת גן", city: "רמת גן", neighborhood: "שכון ההסתדרות",
      price: 1350000, rooms: 3, sqm: 52, floor: 0,
      source: "מדלן", url: null,
      renewal: "potential", renewalNote: "שכון ההסתדרות — אזור התחדשות עירונית",
      tags: ["קומת קרקע","פוטנציאל התחדשות"],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-mdln-shimon-hatzadik",
      address: "שמעון הצדיק, רמת גן", city: "רמת גן", neighborhood: "רמת אהרון",
      price: 1400000, rooms: 2, sqm: 50, floor: null,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-14"
    },
    {
      id: "rg-mdln-zhabotinsky-24",
      address: "ז'בוטינסקי 24, רמת גן", city: "רמת גן", neighborhood: "גבעת רוקח",
      price: 1350000, rooms: 2, sqm: 28, floor: 1,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-14"
    },
    {
      id: "by-y2-matityahu-ganem",
      address: "מתתיהו גנם, בת ים", city: "בת ים", neighborhood: "ניצנה",
      price: 1399000, rooms: 2, sqm: 43, floor: 3,
      source: "יד2", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-y2-kovshei-hermon",
      address: "כובשי החרמון, בת ים", city: "בת ים", neighborhood: "רמת הנשיא",
      price: 1415000, rooms: 2.5, sqm: 65, floor: 4,
      source: "יד2", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-y2-gush-etzion",
      address: "גוש עציון, בת ים", city: "בת ים", neighborhood: "עמידר",
      price: 1440000, rooms: 2, sqm: 50, floor: 1,
      source: "יד2", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-y2-daniel-57",
      address: "דניאל 57, בת ים", city: "בת ים", neighborhood: "לב העיר",
      price: 1440000, rooms: 2.5, sqm: 73, floor: 4,
      source: "יד2", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-y2-bar-ilan",
      address: "שדרות בר אילן, בת ים", city: "בת ים", neighborhood: "דרום מערב ותיק",
      price: 1450000, rooms: 2.5, sqm: 57, floor: 4,
      source: "יד2", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-hashmonaim-46",
      address: "החשמונאים 46, בת ים", city: "בת ים", neighborhood: "שיכון ותיקים",
      price: 1450000, rooms: 2.5, sqm: 70, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/aUF3Y31kLBj",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-givati-dm-1",
      address: "גבעתי, בת ים", city: "בת ים", neighborhood: "דרום מערב",
      price: 1480000, rooms: 2.5, sqm: 60, floor: 4,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-bar-ilan-sv",
      address: "בר אילן, בת ים", city: "בת ים", neighborhood: "שיכון ותיקים",
      price: 1490000, rooms: 2.5, sqm: 67, floor: 1,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-givati-dm-2",
      address: "גבעתי, בת ים", city: "בת ים", neighborhood: "דרום מערב",
      price: 1490000, rooms: 3, sqm: 70, floor: 3,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-gefen-9",
      address: "הגפן 9, בת ים", city: "בת ים", neighborhood: "עמידר / ניצנה",
      price: 1499000, rooms: 3, sqm: 56, floor: 3,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-katznelson-68",
      address: "כצנלסון 68, בת ים", city: "בת ים", neighborhood: "שיכון ותיקים",
      price: 1490000, rooms: 2.5, sqm: 65, floor: 4,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-beit-vegan",
      address: "בית וגן, בת ים", city: "בת ים", neighborhood: "בית וגן",
      price: 1450000, rooms: 2.5, sqm: 55, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/5MkLrY9bMY7",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-yerushalayim-an",
      address: "ירושלים, בת ים", city: "בת ים", neighborhood: "עמידר / ניצנה",
      price: 1490000, rooms: 2.5, sqm: 60, floor: 3,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-nitzana-9",
      address: "ניצנה 9, בת ים", city: "בת ים", neighborhood: "עמידר / ניצנה",
      price: 1500000, rooms: 2, sqm: 50, floor: 2,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-yoseftal-68",
      address: "יוספטל 68, בת ים", city: "בת ים", neighborhood: "דרום מערב",
      price: 1490000, rooms: 2, sqm: 60, floor: 7,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-balfour-63",
      address: "בלפור 63, בת ים", city: "בת ים", neighborhood: "צפון מערב",
      price: 1500000, rooms: 2.5, sqm: 50, floor: 0,
      source: "מדלן", url: null,
      renewal: "none",
      tags: ["קומת קרקע"],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-bar-ilan-31",
      address: "בר אילן 31, בת ים", city: "בת ים", neighborhood: "דרום מערב",
      price: 1490000, rooms: 2, sqm: 64, floor: 4,
      source: "מדלן", url: null,
      renewal: "none",
      tags: ["ירד 180K"],
      firstSeen: "2026-08-15"
    },
    {
      id: "by-mdln-dm-dropped",
      address: "דרום מערב, בת ים", city: "בת ים", neighborhood: "דרום מערב",
      price: 1470000, rooms: 2.5, sqm: 57, floor: 4,
      source: "מדלן", url: null,
      renewal: "none",
      tags: ["ירד 80K"],
      firstSeen: "2026-08-15"
    },
    {
      id: "holon-mdln-sold-14",
      address: "הנרייטה סולד 14, חולון", city: "חולון", neighborhood: "גרין ועם",
      price: 1499000, rooms: 2.5, sqm: 45, floor: 3,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-15"
    },
    // ——— מדלן — סבב 2026-08-24 (יד2 נחסם ע"י captcha, לא נסרק) ———
    {
      id: "bb-mdln-boruchov-9",
      address: "בורוכוב 9, בני ברק", city: "בני ברק", neighborhood: "פרדס כץ ויסודות",
      price: 1450000, rooms: 3, sqm: 45, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/jasFzyoYxd1",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-24"
    },
    {
      id: "by-mdln-geonim-jessy",
      address: "הגאונים, בת ים", city: "בת ים", neighborhood: "ג'סי כהן",
      price: 1430000, rooms: 2, sqm: 43, floor: 7,
      source: "מדלן", url: "https://www.madlan.co.il/listings/E9aO2Ted6Tk",
      renewal: "none",
      tags: [],
      note: "ג'סי כהן מתויגת בבת ים במדלן — לבדוק שהעיר נכונה",
      firstSeen: "2026-08-24"
    },
    {
      id: "holon-mdln-hankin-55",
      address: "חנקין 55, חולון", city: "חולון", neighborhood: "רסקו א",
      price: 1220000, rooms: 2, sqm: 50, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/k8HmL1tpRNi",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-24"
    },
    {
      id: "pt-mdln-hovevei-tzion-32",
      address: "חובבי ציון 32, פתח תקווה", city: "פתח תקווה", neighborhood: "מרכז העיר",
      price: 799000, rooms: 2, sqm: 25, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/2T9KhvoA1QD",
      renewal: "none",
      tags: ["מתחת למיליון"],
      hot: true,
      firstSeen: "2026-08-24"
    },
    {
      id: "by-mdln-eli-cohen-6",
      address: "אלי כהן 6, בת ים", city: "בת ים", neighborhood: "רמת הנשיא",
      price: 1449999, rooms: 2.5, sqm: null, floor: null,
      source: "מדלן", url: "https://www.madlan.co.il/listings/3wdU4d7WjWi",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-24"
    },
    {
      id: "by-mdln-bengurion-138-fl13b",
      address: "בן-גוריון 138, בת ים", city: "בת ים", neighborhood: "פארק הים",
      price: 1450000, rooms: 2, sqm: 43, floor: 13,
      source: "מדלן", url: "https://www.madlan.co.il/listings/sPHtGl5MPu6",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-24"
    },
    // ——— סבב 2026-08-26 09:30 (יד2 נחסם ע"י captcha אחרי עיר ראשונה, מדלן+פייסבוק תקינים) ———
    {
      id: "rehovot-mdl-sharayim-5",
      address: "שעריים, רחובות", city: "רחובות", neighborhood: "שעריים",
      price: 1000000, rooms: 5, sqm: 139, floor: 5,
      source: "מדלן", url: "https://www.madlan.co.il/listings/hNPhrd9lMxE",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-26"
    },
    {
      id: "rehovot-mdl-bengurion-penthouse",
      address: "בן גוריון, אבן גבירול, רחובות", city: "רחובות", neighborhood: "אבן גבירול",
      price: 1000000, rooms: 5, sqm: 170, floor: 19,
      source: "מדלן", url: "https://www.madlan.co.il/listings/DfJc8ZO542A",
      renewal: "none",
      tags: ["מחיר חשוד — לבדוק (פנטהאוז 170 מ״ר ב-1M)"],
      note: "מחיר נמוך מאוד לפנטהאוז 170 מ״ר — יתכן מכירת חלק/שיתוף. לבדוק לפני פנייה",
      firstSeen: "2026-08-26"
    },
    {
      id: "giv-mdln-krinitzi-60",
      address: "קריניצי 60, גבעתיים", city: "גבעתיים", neighborhood: "מרכז העיר ב'",
      price: 850000, rooms: 1, sqm: 25, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/IPzsO9sBneR",
      renewal: "none",
      tags: ["חדר אחד","קומת קרקע"],
      note: "יחידת חדר אחד — קטנה מהטווח הרגיל, לבדוק אם רלוונטי",
      firstSeen: "2026-08-26"
    },
    {
      id: "lod-fb-habashor-7",
      address: "הבשור 7, לוד", city: "לוד", neighborhood: "",
      price: 1350000, rooms: 3, sqm: 60, floor: 1,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/2218846225576247",
      renewal: "none",
      tags: ["ממ\"ד","חניה בטאבו"],
      note: "המודעה פורסמה בטעות תחת קטגוריית השכרה (\"לחודש\") אבל התיאור הוא של מכירה — לוודא מול המוכר לפני פנייה",
      firstSeen: "2026-08-26"
    },
    {
      id: "ramle-fb-emile-zola",
      address: "אמיל זולא, רמלה", city: "רמלה", neighborhood: "",
      price: 990000, rooms: 3, sqm: 60, floor: 2,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1218467913651222",
      renewal: "potential", renewalNote: "המוכר מציין פינוי-בינוי — לא מאומת מול moch.maps.arcgis.com בסבב הזה",
      tags: ["פוטנציאל התחדשות","ירד מ-1,150,000","משופצת"],
      hot: true,
      note: "מתחת למיליון, משופצת, המוכרת טוענת פינוי-בינוי — לבדוק ולתפוס מהר אם רציני",
      firstSeen: "2026-08-26"
    },

    // ===== ראשון לציון — סריקה 31.08.2026 =====
    {
      id: "rlz-y2-rozental-9",
      address: "חיה רוזנטל-חביליו 9, ראשון לציון", city: "ראשון לציון", neighborhood: "נוריות",
      price: 1500000, rooms: 3, sqm: 93, floor: 13,
      source: "יד2", url: null,
      renewal: "none",
      tags: ["קומה גבוהה"],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-y2-siterman-12",
      address: "מיכאל סיטרמן 12, ראשון לציון", city: "ראשון לציון", neighborhood: "נחלת יהודה",
      price: 1200000, rooms: 3, sqm: 78, floor: 6,
      source: "יד2", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-y2-ramat-eliahu-45",
      address: "רמת אליהו, ראשון לציון", city: "ראשון לציון", neighborhood: "רמת אליהו",
      price: 1390000, rooms: 2.5, sqm: 45, floor: 2,
      source: "יד2", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-y2-rambam-80",
      address: "רמב\"ם, ראשון לציון", city: "ראשון לציון", neighborhood: "רמב\"ם",
      price: 1570000, rooms: 3, sqm: 80, floor: 2,
      source: "יד2", url: null,
      renewal: "none",
      tags: ["ירד 30K"],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-y2-betzalel-9",
      address: "סמטת בצלאל 9, ראשון לציון", city: "ראשון לציון", neighborhood: "רמב\"ם",
      price: 1590000, rooms: 3, sqm: 81, floor: 4,
      source: "יד2", url: null,
      renewal: "none",
      tags: ["ירד 200K"],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-mdln-olei-hagardom",
      address: "עולי הגרדום, ראשון לציון", city: "ראשון לציון", neighborhood: "רמז",
      price: 1490000, rooms: 2, sqm: 50, floor: 1,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-mdln-shalom-ash-26",
      address: "שלום אש 26, ראשון לציון", city: "ראשון לציון", neighborhood: "רמת אליהו",
      price: 1500000, rooms: 3, sqm: 58, floor: 1,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-mdln-asher-levin-3",
      address: "אשר לוין 3, ראשון לציון", city: "ראשון לציון", neighborhood: "רמב\"ם",
      price: 1560000, rooms: 3, sqm: 90, floor: 3,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-mdln-agnon-re",
      address: "עגנון, ראשון לציון", city: "ראשון לציון", neighborhood: "רמת אליהו",
      price: 1590000, rooms: 3, sqm: 39, floor: 0,
      source: "מדלן", url: null,
      renewal: "none",
      tags: ["קומת קרקע"],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-mdln-marganit-kr",
      address: "המרגנית, ראשון לציון", city: "ראשון לציון", neighborhood: "קרית ראשון",
      price: 1600000, rooms: 3, sqm: 68, floor: 1,
      source: "מדלן", url: null,
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-31"
    }
  ]
};
