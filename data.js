// APARTMENT RADAR — מאגר דירות
// מתעדכן אוטומטית פעמיים ביום (09:30 / 19:30) ע"י daily-apartment-search-center
// כלל: רק דירות עם מחיר מפורסם. דירה בלי מחיר לא נכנסת למאגר.
// מפתח הזהות של דירה = מזהה המודעה בסוף ה-URL. לפניו בודקים כפילות, לא לפי כתובת.
// לא נכנסות: יחידות דיור עד 35 מ"ר, קבוצות רכישה/זכות לנכס, ומחיר מעל התקרה.

window.APARTMENT_DATA = {
  updatedAt: "2026-09-14T09:30:00+03:00",
  budget: 1600000,
  equity: 350000,
  leverage: 0.75,
  deadline: "2026-07-31",

  // דירות שאביאל מחק לצמיתות — לא יחזרו למאגר גם אם המודעה עדיין חיה.
  removed: ["f2530t31", "dmdvrzgj", "19qk1852", "XB74Y288Jex", "obS0EwM67UP", "0HwCnLjFZjx", "ddl7okai", "ovje5j8f", "px3b0bwz", "2T9KhvoA1QD", "IPzsO9sBneR", "o8v2coo7", "j2QFCcpN7lK", "ipSCibAop2j", "vsmvtvii", "goxgu9n3", "ee15laj0"],

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
      id: "rg-haroshet-3",
      address: "חרושת 3", city: "רמת גן", neighborhood: "נחלת גנים",
      price: 975000, rooms: 3, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ibkt22z5",
      renewal: "none",
      tags: ["חניה","ממ״ד","מתחת למיליון"],
      note: "975K על 3 חד׳ 60 מ״ר עם חניה וממ״ד — לבדוק",
      hot: true,
      firstSeen: "2026-07-24"
    },
    {
      id: "rg-tzanchanim",
      address: "שיכון צנחנים", city: "רמת גן", neighborhood: "שיכון צנחנים",
      price: 1200000, rooms: 2, sqm: 57, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/pfx9z25d",
      renewal: "potential",
      tags: [],
      note: "תיירות ונופש — רמת עמידר, אזור התחדשות",
      firstSeen: "2026-07-24"
    },
    {
      id: "rg-diratgan",
      address: "דירת גן", city: "רמת גן", neighborhood: "רמת גן",
      price: 1400000, rooms: 2, sqm: 50, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/5lv3rjo2",
      renewal: "none",
      tags: ["בלעדי","דירת גן"],
      firstSeen: "2026-07-27"
    },
    {
      id: "holon-diratgan-336",
      address: "דירת גן", city: "חולון", neighborhood: "חולון",
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
      price: 1455000, rooms: 3, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/t6p6vn64",
      renewal: "none",
      tags: ["עלה ב-55,000 ₪","ירד 190K"],
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
      tags: ["ירד ב-60,000 ₪","בלעדי"],
      firstSeen: "2026-08-09"
    },
    {
      id: "holon-bilu",
      address: "ביל\"ו", city: "חולון", neighborhood: "מרכז / קרית עבודה",
      price: 1390000, rooms: 2, sqm: 45, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/dvi4ksgi",
      renewal: "potential", renewalNote: "קרית עבודה — אזור עם תנועת התחדשות",
      tags: ["בלעדי","פוטנציאל התחדשות"],
      note: "קרית עבודה — אזור התחדשות",
      firstSeen: "2026-07-27"
    },
    {
      id: "by-dira-65-3h",
      address: "דירה (ללא כתובת)", city: "בת ים", neighborhood: "—",
      price: 1420000, rooms: 3, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/lyahdo7n",
      renewal: "none",
      tags: ["קרוב לים","Home Way"],
      note: "3 חד' 65 מ\"ר ק4. הכתובת המדויקת לא פורסמה במודעה.",
      firstSeen: "2026-08-09"
    },
    {
      id: "by-dira-65-25h",
      address: "דירה, בת ים", city: "בת ים", neighborhood: "בת ים",
      price: 1450000, rooms: 2.5, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/71bho55f",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-kkl-nitzana",
      address: "קקל, בת ים", city: "בת ים", neighborhood: "ניצנה",
      price: 1440000, rooms: 2, sqm: 55, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/kxhetsr6",
      renewal: "potential", renewalNote: "ניצנה — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות"],
      firstSeen: "2026-07-27"
    },
    {
      id: "by-bengurion-138-8",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "דרום חדש / פארק הים",
      price: 1350000, rooms: 2, sqm: 40, floor: 8,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/u2yipkpc",
      renewal: "none",
      tags: ["חניה","נוף לים"],
      firstSeen: "2026-07-27"
    },
    {
      id: "by-bengurion-138-5",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "דרום חדש / פארק הים",
      price: 1250000, rooms: 2, sqm: 40, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/dy8yw151",
      renewal: "none",
      tags: ["תיירות ונופש","נוף לים"],
      note: "בניין BG138 — כבר מתועדות עשרות יח' שם. ק5 40 מ\"ר. ייתכן חופף ל-by-mdln-bengurion-138-k5.",
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
      address: "דרך בן גוריון", city: "בת ים", neighborhood: "בת ים",
      price: 1250000, rooms: 2, sqm: 37, floor: 7,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/z453mixt",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-11",
      address: "דרך בן גוריון", city: "בת ים", neighborhood: "בת ים",
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
      price: 1420000, rooms: 2, sqm: 35, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/knwummef",
      renewal: "none",
      tags: ["עלה ב-21,000 ₪"],
      note: "היקרה למ״ר במאגר — לדלג",
      firstSeen: "2026-08-09"
    },
    {
      id: "by-dira-2h-k2",
      address: "דירה", city: "בת ים", neighborhood: "—",
      price: 1440000, rooms: 2, sqm: 48, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/e5bgnjla",
      renewal: "none",
      tags: ["אינפיניטי נדל\"ן"],
      note: "2 חד' 48 מ\"ר ק2. הכתובת המדויקת לא פורסמה.",
      firstSeen: "2026-08-10"
    },
    {
      id: "by-daniel-57-lev-hair",
      address: "דניאל 57", city: "בת ים", neighborhood: "לב העיר",
      price: 1490000, rooms: 2.5, sqm: 73, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/hmq83sfd",
      renewal: "none",
      tags: ["עלה ב-50,000 ₪"],
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
    {
      id: "pt-ofir-ahdut",
      address: "אופיר", city: "פתח תקווה", neighborhood: "אחדות",
      price: 1390000, rooms: 2, sqm: 46, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/h6whmiv8",
      renewal: "none",
      tags: ["ירד ב-59,000 ₪","ירד 59K"],
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
      id: "rlz-alkalai-rambam",
      address: "אלקלעי", city: "ראשון לציון", neighborhood: "רמב\"ם",
      price: 1430000, rooms: 2.5, sqm: 55, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/tn2ln8nb",
      renewal: "none",
      tags: ["בלעדי"],
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
      price: 1350000, rooms: 2.5, sqm: 45, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/oosidz6c",
      renewal: "none",
      tags: ["ירד ב-40,000 ₪"],
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
      id: "bb-rav-kook-25h",
      address: "הרב קוק, בני ברק", city: "בני ברק", neighborhood: "הר שלום",
      price: 1190000, rooms: 2.5, sqm: 45, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/0djc7dwj",
      renewal: "none",
      tags: ["ירד ב-60,000 ₪"],
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
      price: 1190000, rooms: 2, sqm: 40, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/np9oi6e8",
      renewal: "none",
      tags: ["ירד ב-130,000 ₪"],
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-pardes-katz",
      address: "פרדס כץ", city: "בני ברק", neighborhood: "פרדס כץ",
      price: 820000, rooms: 2, sqm: 40, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/7fdz1xw6",
      renewal: "none",
      tags: ["ירד ב-60,000 ₪","ירד ב-70,000 ₪","מתחת למיליון"],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-kibbutz-galuyot-amidar",
      address: "קיבוץ גלויות", city: "בת ים", neighborhood: "עמידר / ניצנה",
      price: 1350000, rooms: 2.5, sqm: 50, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/tG8MOcuDj6C",
      renewal: "potential", renewalNote: "עמידר — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות","בלעדי"],
      firstSeen: "2026-08-10"
    },
    {
      id: "by-mdln-bengurion-138-k5",
      address: "בן-גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1260000, rooms: 2, sqm: 37, floor: 5,
      source: "מדלן", url: "https://www.madlan.co.il/listings/VUXotLqxFEE",
      renewal: "none",
      tags: ["בלעדי"],
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
      renewal: "potential",
      tags: [],
      note: "בלפור — מתחם בלפור-העצמאות פינוי-בינוי",
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
      tags: ["ירד מ-1,490,000","ירד 40K"],
      firstSeen: "2026-08-10"
    },
    {
      id: "holon-mdln-bilu-kw",
      address: "ביל\"ו", city: "חולון", neighborhood: "קרית עבודה",
      price: 1390000, rooms: 2, sqm: 45, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/N6yuVNvNP4i",
      renewal: "potential", renewalNote: "קרית עבודה — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות","בלעדי"],
      note: "קרית עבודה — אזור התחדשות",
      firstSeen: "2026-08-10"
    },
    {
      id: "bb-mdln-rabi-akiva-20",
      address: "רבי עקיבא 20", city: "בני ברק", neighborhood: "הר שלום",
      price: 1190000, rooms: 2, sqm: 40, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/SpO98umj7A3",
      renewal: "none",
      tags: ["ירד ב-130,000 ₪"],
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
      price: 1190000, rooms: 2.5, sqm: 45, floor: 2,
      source: "מדלן", url: "https://www.madlan.co.il/listings/Ai7mVc5JASv",
      renewal: "none",
      tags: ["ירד ב-60,000 ₪"],
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
      id: "by-rqs0ztb2",
      address: "דרך בן גוריון 138, בת ים", city: "בת ים", neighborhood: "דרום חדש / פארק הים",
      price: 1450000, rooms: 2, sqm: 43, floor: 13,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/rqs0ztb2",
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
      price: 1490000, rooms: 2, sqm: 42, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/8f6w2f06",
      renewal: "none",
      tags: ["עלה ב-50,000 ₪"],
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
      price: 1490000, rooms: 2, sqm: 42, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/s5ZcaiiihnI",
      renewal: "none",
      tags: ["עלה ב-50,000 ₪"],
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
      price: 1330000, rooms: 2, sqm: 35, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/cjzsjc6w",
      renewal: "none",
      tags: ["ירד ב-40,000 ₪"],
      note: "קטנה — 35 מ״ר",
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
      id: "herzliya-xxoqwobo",
      address: "סוקולוב, הרצליה", city: "הרצליה", neighborhood: "מרכז",
      price: 1400000, rooms: 3, sqm: 75, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/xxoqwobo",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-12"
    },
    {
      id: "holon-fb-1624460959258048",
      address: "חנקין, חולון", city: "חולון", neighborhood: "חולון",
      price: 1250000, rooms: 2, sqm: null, floor: 1,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1624460959258048/",
      renewal: "verified", renewalNote: "בתוכנית פינוי בינוי — מושכרת, משופצת",
      tags: ["פינוי-בינוי"],
      note: "פייסבוק: חנקין חולון, 2 חד׳, ק1, משופצת, מושכרת, בפינוי בינוי",
      hot: true,
      firstSeen: "2026-08-12"
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
      price: 1425000, rooms: 2.5, sqm: 70, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/aUF3Y31kLBj",
      renewal: "none",
      tags: ["ירד ב-25,000 ₪"],
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
      address: "הגאונים", city: "חולון", neighborhood: "ג'סי כהן",
      price: 1430000, rooms: 2, sqm: 43, floor: 7,
      source: "מדלן", url: "https://www.madlan.co.il/listings/E9aO2Ted6Tk",
      renewal: "none",
      tags: ["בלעדי"],
      note: "2 חד' 43 מ\"ר ק7 ברחוב הגאונים, ג'סי כהן — אותו רחוב כמו holon-y2-3wej9tiy / holon-gk2y2a8q.",
      firstSeen: "2026-08-24"
    },
    {
      id: "by-mdln-eli-cohen-6",
      address: "אלי כהן 6, בת ים", city: "בת ים", neighborhood: "רמת הנשיא",
      price: 1499999, rooms: 2.5, sqm: null, floor: null,
      source: "מדלן", url: "https://www.madlan.co.il/listings/3wdU4d7WjWi",
      renewal: "none",
      tags: ["עלה ב-50,000 ₪"],
      firstSeen: "2026-08-24"
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
      note: "מתחת למיליון, משופצת, המוכרת טוענת פינוי-בינוי — לבדוק ולתפוס מהר אם רציני",
      hot: true,
      firstSeen: "2026-08-26"
    },
    {
      id: "rlz-y2-rozental-9",
      address: "חיה רוזנטל-חביליו 9, ראשון לציון", city: "ראשון לציון", neighborhood: "נוריות",
      price: 1500000, rooms: 3, sqm: 93, floor: 13,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/pw8dni7u",
      renewal: "none",
      tags: ["קומה גבוהה"],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-y2-ramat-eliahu-45",
      address: "רמת אליהו, ראשון לציון", city: "ראשון לציון", neighborhood: "רמת אליהו",
      price: 1390000, rooms: 2.5, sqm: 45, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/4v5zzk2l",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-y2-zalman-shneor",
      address: "שדרות זלמן שניאור, ראשון לציון", city: "ראשון לציון", neighborhood: "רמת אליהו",
      price: 1450000, rooms: 2, sqm: 50, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/uovlzrou",
      renewal: "potential",
      renewalNote: "המודעה מציינת \"בניין חתום פינוי בינוי\" — לא מאומת מול moch.maps.arcgis.com",
      tags: ["ירד ב-49,000 ₪"],
      firstSeen: "2026-09-14"
    },
    {
      id: "rlz-y2-betzalel-9",
      address: "סמטת בצלאל 9, ראשון לציון", city: "ראשון לציון", neighborhood: "רמב\"ם",
      price: 1590000, rooms: 3, sqm: 81, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/cp9kdiu3",
      renewal: "none",
      tags: ["ירד 200K"],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-mdln-olei-hagardom",
      address: "עולי הגרדום, ראשון לציון", city: "ראשון לציון", neighborhood: "רמז",
      price: 1490000, rooms: 2, sqm: 50, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/iar6p1ig",
      renewal: "none",
      tags: [],
      firstSeen: "2026-08-31"
    },
    {
      id: "rlz-mdln-shalom-ash-26",
      address: "שלום אש 26, ראשון לציון", city: "ראשון לציון", neighborhood: "רמת אליהו",
      price: 1500000, rooms: 3, sqm: 58, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/myhr7kfq",
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
    },
    {
      id: "rg-xpwl1yi4",
      address: "שדרות הרב לוין 16", city: "רמת גן", neighborhood: "רמת עמידר",
      price: 1200000, rooms: 3, sqm: 76, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/xpwl1yi4",
      renewal: "potential", renewalNote: "רמת עמידר — שכונת התחדשות עירונית מובילה בר״ג, פרויקטים בשלבי תכנון.",
      tags: ["חניה","בהזדמנות"],
      hot: true,
      firstSeen: "2026-09-01"
    },
    {
      id: "holon-ybtatjd9",
      address: "יהושע חנקין 93", city: "חולון", neighborhood: "רסקו א'",
      price: 1435000, rooms: 3, sqm: 60, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ybtatjd9",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-01"
    },
    {
      id: "holon-gk2y2a8q",
      address: "הגאונים", city: "חולון", neighborhood: "ג'סי כהן",
      price: 1350000, rooms: 2, sqm: 45, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/gk2y2a8q",
      renewal: "none",
      tags: ["ירד ב-75,000 ₪"],
      firstSeen: "2026-09-01"
    },
    {
      id: "holon-svj9wujh",
      address: "יוטבתה", city: "חולון", neighborhood: "ג'סי כהן",
      price: 1400000, rooms: 2, sqm: 45, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/svj9wujh",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-01"
    },
    {
      id: "by-bv8b23w1",
      address: "רוטשילד", city: "בת ים", neighborhood: "עמידר",
      price: 1390000, rooms: 2, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/bv8b23w1",
      renewal: "potential", renewalNote: "עמידר/רוטשילד בת ים — מתחם התחדשות עירונית פעיל.",
      tags: ["בהזדמנות"],
      hot: true,
      firstSeen: "2026-09-01"
    },
    {
      id: "by-igczouh5",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "דרום חדש / פארק הים",
      price: 1250000, rooms: 2, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/igczouh5",
      renewal: "none",
      tags: ["נוף לים"],
      firstSeen: "2026-09-01"
    },
    {
      id: "by-3qfbazxv",
      address: "החשמונאים 46", city: "בת ים", neighborhood: "לב העיר",
      price: 1425000, rooms: 2.5, sqm: null, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/3qfbazxv",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-09-01"
    },
    {
      id: "by-3n31l5ki",
      address: "אלי כהן 6", city: "בת ים", neighborhood: "רמת הנשיא",
      price: 1499999, rooms: 2.5, sqm: 65, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/3n31l5ki",
      renewal: "none",
      tags: ["עלה ב-50,000 ₪"],
      firstSeen: "2026-09-01"
    },
    {
      id: "by-qsonmq6b",
      address: "שדרות בר אילן", city: "בת ים", neighborhood: "דרום מערב ותיק",
      price: 1450000, rooms: 2.5, sqm: 57, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/qsonmq6b",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-01"
    },
    {
      id: "pt-5cn6m1vy",
      address: "אחדות", city: "פתח תקווה", neighborhood: "אחדות",
      price: 1390000, rooms: 2, sqm: 46, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/5cn6m1vy",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-01"
    },
    {
      id: "rehovot-3wupakqt",
      address: "חיים אליעזר מילצ'ן 7", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1700000, rooms: 3.5, sqm: 61, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/3wupakqt",
      renewal: "verified", renewalNote: "רחוב מילצ'ן כולו במתחם פינוי-בינוי מאושר ברחובות.",
      tags: ["פינוי-בינוי","חריג תקציב"],
      hot: true,
      firstSeen: "2026-09-01"
    },
    {
      id: "bb-dxy9zwt4",
      address: "הרב דנגור 7", city: "בני ברק", neighborhood: "פרדס כץ",
      price: 1450000, rooms: 2, sqm: 61, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/dxy9zwt4",
      renewal: "none",
      tags: ["דירת גן","קומת קרקע"],
      firstSeen: "2026-09-01"
    },
    {
      id: "bb-k1la9jde",
      address: "אברהם בן דוד", city: "בני ברק", neighborhood: "קרית ויז'ניץ",
      price: 1080000, rooms: 2.5, sqm: null, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/k1la9jde",
      renewal: "none",
      tags: ["מתחת למיליון"],
      firstSeen: "2026-09-01"
    },
    {
      id: "bb-p72dbqyp",
      address: "בורוכוב", city: "בני ברק", neighborhood: "—",
      price: 1450000, rooms: 2.5, sqm: 45, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/p72dbqyp",
      renewal: "none",
      tags: ["קומת קרקע"],
      firstSeen: "2026-09-01"
    },
    {
      id: "bb-dvusw5rm",
      address: "רב אמי", city: "בני ברק", neighborhood: "קרית נדבורנא",
      price: 1420000, rooms: 2.5, sqm: null, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/dvusw5rm",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-01"
    },
    {
      id: "gs-r9ymuyl8",
      address: "דוד בן גוריון 11", city: "גבעת שמואל", neighborhood: "השכונה הוותיקה",
      price: 1150000, rooms: 2, sqm: null, floor: 7,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/r9ymuyl8",
      renewal: "none",
      tags: ["ירד ב-50,000 ₪"],
      firstSeen: "2026-09-01"
    },
    {
      id: "gs-mg6r443q",
      address: "דוד בן גוריון", city: "גבעת שמואל", neighborhood: "—",
      price: 1430000, rooms: 2, sqm: null, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/mg6r443q",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-09-01"
    },
    {
      id: "gs-ut5ee4no",
      address: "ז'בוטינסקי 50", city: "גבעת שמואל", neighborhood: "רמת אילן",
      price: 1399000, rooms: 2, sqm: 42, floor: 8,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/ut5ee4no",
      renewal: "none",
      tags: ["ירד ב-41,000 ₪"],
      firstSeen: "2026-09-01"
    },
    {
      id: "gs-o58uzjys",
      address: "דוד בן גוריון", city: "גבעת שמואל", neighborhood: "—",
      price: 1350000, rooms: 2, sqm: 38, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/o58uzjys",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-01"
    },
    {
      id: "gs-6czy8ll5",
      address: "ז'בוטינסקי 50", city: "גבעת שמואל", neighborhood: "רמת אילן",
      price: 1325000, rooms: 2, sqm: null, floor: 11,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/6czy8ll5",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-01"
    },
    {
      id: "gs-iatsrwn6",
      address: "דוד בן גוריון", city: "גבעת שמואל", neighborhood: "—",
      price: 1365000, rooms: 2, sqm: null, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/iatsrwn6",
      renewal: "none",
      tags: ["בלעדי"],
      firstSeen: "2026-09-01"
    },
    {
      id: "holon-mdln-4z0DDfWEwzM",
      address: "זלמן ארן 27", city: "חולון", neighborhood: "נאות רחל",
      price: 1270000, rooms: 2, sqm: 46, floor: 1,
      source: "מדלן", url: "https://www.madlan.co.il/listings/4z0DDfWEwzM",
      renewal: "none",
      tags: ["חדש","ירד ב-20,000 ₪"],
      firstSeen: "2026-09-01"
    },
    {
      id: "rg-fb-1750500839594443",
      address: "שיכון ותיקים, רמת גן", city: "רמת גן", neighborhood: "שיכון ותיקים",
      price: 1020000, rooms: 2, sqm: null, floor: null,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1750500839594443/",
      renewal: "none",
      tags: ["מתחת למיליון וחצי"],
      firstSeen: "2026-09-01"
    },
    {
      id: "lod-fb-1782688439424272",
      address: "לוד", city: "לוד", neighborhood: "—",
      price: 1250000, rooms: 3, sqm: null, floor: null,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1782688439424272/",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-01"
    },
    {
      id: "holon-fb-1039174208987437",
      address: "רחוב חנקין", city: "חולון", neighborhood: "קרית עבודה",
      price: 1260000, rooms: 2, sqm: null, floor: 2,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1039174208987437/",
      renewal: "potential", renewalNote: "המוכר מציין פינוי-בינוי ברחוב חנקין, חולון (סמוך לקרית עבודה).",
      tags: ["פינוי-בינוי"],
      hot: true,
      firstSeen: "2026-09-01"
    },
    {
      id: "holon-y2-3wej9tiy",
      address: "הגאונים", city: "חולון", neighborhood: "ג'סי כהן",
      price: 1430000, rooms: 2, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/3wej9tiy",
      renewal: "none",
      tags: ["בלעדי","ירד ב-60,000 ₪"],
      note: "בלעדי עולם הנדל\"ן. רחוב הגאונים — כמה מודעות באותו אזור בטווח המחיר.",
      firstSeen: "2026-09-01"
    },
    {
      id: "by-y2-nurit-hirsch-5",
      address: "נורית הירש 5", city: "בת ים", neighborhood: "דרום חדש / פארק הים",
      price: 780000, rooms: 3, sqm: 90, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/h6hxa64e",
      renewal: "none",
      tags: ["מחיר חריג"],
      note: "780K ל-3 חד' 90 מ\"ר באזור פארק הים — נמוך משמעותית מהשוק. לבדוק אם זו מכירת חלק בנכס / זכויות / דיירות מוגנת.",
      firstSeen: "2026-09-01"
    },
    {
      id: "by-y2-eli-cohen-6-y2",
      address: "אלי כהן 6", city: "בת ים", neighborhood: "רמת הנשיא",
      price: 1496999, rooms: 2.5, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/if1ud2hn",
      renewal: "none",
      tags: ["עלה ב-46,999 ₪","שיא מרכז"],
      note: "אותה כתובת כמו by-mdln-eli-cohen-6 (מדלן) — ככל הנראה אותו נכס, מודעה שנייה.",
      firstSeen: "2026-09-01"
    },
    {
      id: "by-y2-hashmonaim-28",
      address: "החשמונאים 28", city: "בת ים", neighborhood: "לב העיר",
      price: 1450000, rooms: 2.5, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/qiys61uo",
      renewal: "none",
      tags: ["ירד ב-70,000 ₪","Home Way"],
      note: "קרוב ל-by-mdln-hashmonaim-46 (מדלן) — ייתכן אותו בניין/נכס.",
      firstSeen: "2026-09-01"
    },
    {
      id: "bb-mdln-trumpeldor-20",
      address: "טרומפלדור 20", city: "בני ברק", neighborhood: "פרדס כץ ויסודות",
      price: 1250000, rooms: 8, sqm: 100, floor: 1,
      source: "מדלן", url: "https://www.madlan.co.il/listings/ucRHgDGRRr4",
      renewal: "none",
      tags: ["פוטנציאל חלוקה"],
      note: "8 חד' / 100 מ\"ר בק1 ב-1.25M — דירה גדולה ישנה, פוטנציאל לחלוקה ל-2 יח'. פרדס כץ.",
      firstSeen: "2026-09-01"
    },
    {
      id: "by-vae4eius",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "דרום חדש / פארק הים",
      price: 1250000, rooms: 2, sqm: 38, floor: 8,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/vae4eius",
      renewal: "none",
      tags: ["דירות דוד"],
      note: "בניין BG138. ק8 38 מ\"ר.",
      firstSeen: "2026-09-02"
    },
    {
      id: "rishon-mdln-hameorer-3",
      address: "המעורר 3", city: "ראשון לציון", neighborhood: "נאות רחל",
      price: 1190000, rooms: 1.5, sqm: 35, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/WHpkRtRQoVg",
      renewal: "none",
      tags: ["קומת קרקע"],
      note: "1.5 חד' קטנה בקומת קרקע — כניסה נמוכה למחיר בראשון.",
      firstSeen: "2026-09-03"
    },
    {
      id: "holon-mdln-hahistadrut-rasco-b",
      address: "ההסתדרות", city: "חולון", neighborhood: "רסקו ב'",
      price: 1390000, rooms: 2, sqm: 42, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/E4IxrOlVGVk",
      renewal: "none",
      tags: ["קומת קרקע"],
      firstSeen: "2026-09-03"
    },
    {
      id: "bb-4my3wacu",
      address: "רבי עקיבא 36", city: "בני ברק", neighborhood: "הר שלום",
      price: 1180000, rooms: 2, sqm: 52, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/4my3wacu",
      renewal: "none",
      tags: ["דירת גן"],
      firstSeen: "2026-09-11"
    },
    {
      id: "bb-l6bgh4z8",
      address: "דרך זאב ז'בוטינסקי 59", city: "בני ברק", neighborhood: "פרדס כץ",
      price: 1300000, rooms: 2.5, sqm: 50, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/l6bgh4z8",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-11"
    },
    {
      id: "by-9daee4ns",
      address: "ירושלים 55", city: "בת ים", neighborhood: "—",
      price: 1450000, rooms: 3, sqm: 68, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/9daee4ns",
      renewal: "none",
      tags: ["ירד ב-80,000 ₪","בהזדמנות"],
      note: "3 חד' 68 מ\"ר בקומת קרקע — מחיר למ\"ר מהטובים בבת ים בטווח הזה.",
      hot: true,
      firstSeen: "2026-09-11"
    },
    {
      id: "by-flcoq1e3",
      address: "הלפר", city: "בת ים", neighborhood: "—",
      price: 1385000, rooms: 2, sqm: 49, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/flcoq1e3",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-11"
    },
    {
      id: "by-fb-1366470128202664",
      address: "דניאל", city: "בת ים", neighborhood: "לב העיר",
      price: 1440000, rooms: 2.5, sqm: 65, floor: null,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1366470128202664/",
      renewal: "none",
      tags: ["פייסבוק"],
      note: "2.5 חדרים 65 מ\"ר לפי כרטיס המודעה. ייתכן קרוב ל-by-daniel-lev-hair / by-daniel-57-lev-hair (יד2) — אותו רחוב",
      firstSeen: "2026-09-11"
    },
    {
      id: "rehovot-jyj9cnx2",
      address: "ההגנה", city: "רחובות", neighborhood: "אבני חן",
      price: 1410000, rooms: 2.5, sqm: 47, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/jyj9cnx2",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-11"
    },
    {
      id: "rehovot-fn8el3o7",
      address: "ההגנה", city: "רחובות", neighborhood: "ג' / מרכז מזרח העיר",
      price: 1370000, rooms: 2.5, sqm: 55, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/fn8el3o7",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-11"
    },
    {
      id: "ramle-fb-1647867846838812",
      address: "רמלה (לא צוינה כתובת)", city: "רמלה", neighborhood: "—",
      price: 1150000, rooms: null, sqm: null, floor: null,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1647867846838812/",
      renewal: "none",
      tags: ["פייסבוק"],
      note: "פורסם כ\"דירת מציאה\" בלי פרטים — לברר חדרים, מ\"ר וכתובת מדויקת.",
      firstSeen: "2026-09-11"
    },
    {
      id: "ramat-gan-iml047rb",
      address: "ביאליק", city: "רמת גן", neighborhood: "שכונת חשמונאים",
      price: 1350000, rooms: 3, sqm: 45, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/iml047rb",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-11"
    },
    {
      id: "ramat-gan-6djjcw4y",
      address: "ביאליק", city: "רמת גן", neighborhood: "שכונת בן גוריון",
      price: 1320000, rooms: 3, sqm: null, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/6djjcw4y",
      renewal: "none",
      tags: ["ירד ב-30,000 ₪"],
      firstSeen: "2026-09-11"
    },
    {
      id: "bat-yam-l4t79pyi",
      address: "מתתיהו גנם", city: "בת ים", neighborhood: "ניצנה",
      price: 1399000, rooms: 2, sqm: 43, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/l4t79pyi",
      renewal: "potential", renewalNote: "ניצנה - שכונה חמה לפינוי-בינוי",
      tags: [],
      firstSeen: "2026-09-11"
    },
    {
      id: "bat-yam-fhvn5ll9",
      address: "בלפור", city: "בת ים", neighborhood: "דרום מערב ותיק",
      price: 1450000, rooms: 2.5, sqm: 67, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/fhvn5ll9",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-11"
    },
    {
      id: "rehovot-mlbg9f2h",
      address: "מילצ'ן", city: "רחובות", neighborhood: "מיליצ'ן",
      price: 1750000, rooms: 3, sqm: 75, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/mlbg9f2h",
      renewal: "verified", renewalNote: "רחוב מילצ'ן - כל הרחוב בפינוי-בינוי מאושר",
      tags: ["בלעדי"],
      firstSeen: "2026-09-11"
    },
    {
      id: "rehovot-8fgfwqax",
      address: "חיים אליעזר מילצ'ן 10", city: "רחובות", neighborhood: "מיליצ'ן",
      price: 1800000, rooms: 3, sqm: 67, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/8fgfwqax",
      renewal: "verified", renewalNote: "רחוב מילצ'ן - כל הרחוב בפינוי-בינוי מאושר",
      tags: [],
      firstSeen: "2026-09-11"
    },
    {
      id: "rehovot-o81c2jyl",
      address: "חיים אליעזר מילצ'ן 4", city: "רחובות", neighborhood: "מיליצ'ן",
      price: 1915000, rooms: 3.5, sqm: 76, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/o81c2jyl",
      renewal: "verified", renewalNote: "רחוב מילצ'ן - כל הרחוב בפינוי-בינוי מאושר; חורג מעט מתקציב היעד (1.9M)",
      tags: ["נוף פתוח לעיר","3 כיווני אוויר"],
      firstSeen: "2026-09-11"
    },
    {
      id: "rehovot-684atc1y",
      address: "חיים אליעזר מילצ'ן", city: "רחובות", neighborhood: "מיליצ'ן",
      price: 1930000, rooms: 3, sqm: 72, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/684atc1y",
      renewal: "verified", renewalNote: "רחוב מילצ'ן - כל הרחוב בפינוי-בינוי מאושר; חורג מעט מתקציב היעד (1.9M)",
      tags: ["בלעדי"],
      firstSeen: "2026-09-11"
    },
    {
      id: "kfar-saba-gkpgx7s3",
      address: "ויצמן", city: "כפר סבא", neighborhood: "מרכז",
      price: 1050000, rooms: 2, sqm: 60, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/gkpgx7s3",
      renewal: "none",
      tags: ["יחידת דיור"],
      firstSeen: "2026-09-11"
    },
    {
      id: "holon-zccw9l",
      address: "פרוג", city: "חולון", neighborhood: "אגרובנק",
      price: 555555, rooms: 6, sqm: 124, floor: 7,
      source: "מדלן", url: "https://www.madlan.co.il/listings/ZCCW9Lvqjcv",
      renewal: "none",
      tags: ["דירת גג"],
      firstSeen: "2026-09-11"
    },
    {
      id: "bat-yam-fb1041246608827612",
      address: "דירה", city: "בת ים", neighborhood: "—",
      price: 560000, rooms: 2, sqm: null, floor: null,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1041246608827612/",
      renewal: "none",
      tags: [],
      note: "חדר שינה אחד",
      firstSeen: "2026-09-11"
    },
    {
      id: "holon-4wuqbw6e",
      address: "יהושע חנקין", city: "חולון", neighborhood: "מרכז / קרית עבודה",
      price: 1390000, rooms: 2, sqm: 50, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/4wuqbw6e",
      renewal: "potential", renewalNote: "קרית עבודה — אזור התחדשות פעיל בחולון. לא אומת מול המפה הרשמית.",
      tags: ["קומת קרקע"],
      firstSeen: "2026-09-12"
    },
    {
      id: "rehovot-r2qh8n19",
      address: "הרב דוד נדב", city: "רחובות", neighborhood: "קרית משה",
      price: 1425000, rooms: 3, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/r2qh8n19",
      renewal: "verified", renewalNote: "המודעה מציינת שקרית משה הוגדרה בוותמ\"ל כשכונה לפינוי-בינוי.",
      tags: ["פינוי-בינוי","קומה אחרונה"],
      note: "שכונת פינוי-בינוי מוכרזת לפי הוותמ\"ל — הכי מעניינת מבין החדשות. לאמת מול moch.maps.arcgis.com.",
      hot: true,
      firstSeen: "2026-09-12"
    },
    {
      id: "by-vk19ptz1",
      address: "הרצל", city: "בת ים", neighborhood: "הגבול רוטשילד",
      price: 1330000, rooms: 2, sqm: 57, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/vk19ptz1",
      renewal: "potential", renewalNote: "הגבול-רוטשילד — משכונות ההתחדשות החמות בבת ים.",
      tags: [],
      firstSeen: "2026-09-12"
    },
    {
      id: "by-brx20a5v",
      address: "רימון", city: "בת ים", neighborhood: "לב העיר",
      price: 1410000, rooms: 3, sqm: 66, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/brx20a5v",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-12"
    },
    {
      id: "by-f7xhl1xc",
      address: "ארלוזורוב 79", city: "בת ים", neighborhood: "עצמאות יוספטל",
      price: 1450000, rooms: 2, sqm: 52, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/f7xhl1xc",
      renewal: "none",
      tags: [],
      firstSeen: "2026-09-12"
    },
    {
      id: "by-xqgxuu5e",
      address: "כצנלסון", city: "בת ים", neighborhood: "לב העיר",
      price: 1450000, rooms: 3, sqm: 67, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/xqgxuu5e",
      renewal: "none",
      tags: ["קומה אחרונה"],
      firstSeen: "2026-09-12"
    },
    {
      id: "holon-mdln-hugoarnest-16",
      address: "הוגו ארנסט 16", city: "חולון", neighborhood: "שיכון ותיקים",
      price: 385000, rooms: 4.5, sqm: 54, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/otirh61Mkfh",
      renewal: "none",
      tags: ["בית פרטי"],
      note: "בית פרטי במחיר נמוך מאוד — ייתכן חלק מנכס/מכירה חלקית, לבדוק לפני התרגשות",
      firstSeen: "2026-09-12"
    },
    {
      id: "rishon-orna-porat",
      address: "אורנה פורת", city: "ראשון לציון", neighborhood: "—",
      price: 111111, rooms: 4, sqm: 120, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/7w7iej8q",
      renewal: "none",
      tags: ["מחיר חשוד - לבדוק"],
      note: "מחיר נמוך משמעותית ביחס לגודל (120 מ״ר) — כנראה לא המחיר האמיתי, ליצור קשר לבירור",
      hot: true,
      firstSeen: "2026-09-12"
    },
    {
      id: "rishon-heil-hraglim",
      address: "חיל הרגלים", city: "ראשון לציון", neighborhood: "—",
      price: 419000, rooms: 4, sqm: 190, floor: 7,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/f2w3cz3z",
      renewal: "none",
      tags: ["פנטהאוז", "מחיר חשוד - לבדוק"],
      note: "פנטהאוז 190 מ״ר במחיר נמוך באופן חריג — לבדוק אם תקין",
      hot: true,
      firstSeen: "2026-09-12"
    },
    {
      id: "rishon-ramat-eliyahu-45",
      address: "רמת אליהו", city: "ראשון לציון", neighborhood: "רמת אליהו",
      price: 1390000, rooms: 2.5, sqm: 45, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/1nmysmla",
      renewal: "none",
      tags: [],
      hot: true,
      firstSeen: "2026-09-12"
    },
    {
      id: "rg-mdln-bezharno-10",
      address: "האחים בז'רנו 10", city: "רמת גן", neighborhood: "הבורסה",
      price: 111111, rooms: 3.5, sqm: 100, floor: 4,
      source: "מדלן", url: "https://www.madlan.co.il/listings/44c3UrEMARX",
      renewal: "none",
      tags: ["מחיר חשוד - לבדוק"],
      note: "מחיר נמוך משמעותית — כנראה לא המחיר האמיתי, לבדוק",
      hot: true,
      firstSeen: "2026-09-12"
    },
    {
      id: "rg-mdln-krinitzi-house",
      address: "קרית קריניצי", city: "רמת גן", neighborhood: "—",
      price: 111111, rooms: 10, sqm: 380, floor: null,
      source: "מדלן", url: "https://www.madlan.co.il/listings/dyoyukVTp6P",
      renewal: "none",
      tags: ["בית פרטי", "מחיר חשוד - לבדוק"],
      note: "בית פרטי 380 מ״ר ב-111,111 ₪ — מחיר לא הגיוני, כנראה טעות/פיתיון, לבדוק",
      hot: true,
      firstSeen: "2026-09-12"
    },
    {
      id: "lod-fb-alshavili-5",
      address: "אבישי אלשוילי 5", city: "לוד", neighborhood: "—",
      price: 1170000, rooms: 3, sqm: null, floor: 2,
      source: "פייסבוק", url: "https://www.facebook.com/marketplace/item/1049764524524808/",
      renewal: "potential", renewalNote: "המוכר מציין שנחתם הסכם פינוי-בינוי לבניין — לא אומת מול moch.maps.arcgis.com",
      tags: ["ללא תיווך", "משופצת"],
      note: "3 חדרים משופצים מהיסוד, קומה 2 מתוך 4, אינסטלציה וביוב נפרדים מהבניין",
      hot: true,
      firstSeen: "2026-09-12"
    }
  ]
};
