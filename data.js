// APARTMENT RADAR — מאגר דירות
// מתעדכן אוטומטית פעמיים ביום (09:30 / 19:30) ע"י daily-apartment-search-center
// כל דירה עם קישור ישיר למודעה שנלקח משורת הכתובת של הדפדפן

window.APARTMENT_DATA = {
  updatedAt: "2026-08-09T17:00:00+03:00",
  budget: 1450000,
  equity: 350000,
  leverage: 0.75,
  deadline: "2026-07-31",

  apartments: [

    // ══════════════ בת ים — כינוס נכסים ══════════════
    {
      id: "by-atzmaut-33-kinus",
      address: "שד' העצמאות 33, דירה 3",
      city: "בת ים",
      neighborhood: "מרכז / בלפור",
      price: 1300000,
      rooms: 2, sqm: 67, floor: 1,
      source: "כינוס",
      url: null,
      renewal: "verified",
      renewalNote: "יזם נבחר + עו״ד ממונה. תכנית 502-1060870 בהכנה לפי סעיף 64ב'. הבניין ברשימת מבנים מסוכנים מ-2011 — לחץ להתקדמות.",
      tags: ["כינוס נכסים", "פינוי-בינוי", "חניה צמודה 50 מ״ר", "חזיתית"],
      note: "כונס: עו״ד ירון שוואב · תיק הוצל״פ 508526-07-23 · מינימום 1.3M · צ׳ק בנקאי 130K · 43 מ״ר רשום בטאבו מול 67 ברוטו",
      hot: true, firstSeen: "2026-08-09"
    },

    // ══════════════ רחובות ══════════════
    {
      id: "rehovot-benzion-40",
      address: "ש. בן ציון 40", city: "רחובות", neighborhood: "צפון מערב העיר",
      price: 999999, rooms: 2, sqm: 50, floor: null,
      source: "מדלן", url: "https://www.madlan.co.il/listings/GmopNLCqTaS",
      renewal: "none", tags: ["מתחת למיליון"],
      note: "המחיר הנמוך במאגר — לברר מה הקאץ׳",
      hot: true, firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-yadvashem",
      address: "יד ושם", city: "רחובות", neighborhood: "אפריים / סלע",
      price: 1111111, rooms: 3, sqm: 71, floor: 0,
      source: "מדלן", url: "https://www.madlan.co.il/listings/O0c6Qq6HBR0",
      renewal: "none", tags: ["בלעדיות", "דו משפחתי"],
      note: "מחיר למ״ר מהטובים במאגר ל-3 חדרים",
      hot: true, firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-elazar-11",
      address: "דוד אלעזר 11", city: "רחובות", neighborhood: "אבן גבירול",
      price: 1435000, rooms: 3, sqm: 60, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/j3y8hj4j",
      renewal: "none", tags: [], firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-dolinsky-9",
      address: "אהוד דולינסקי 9", city: "רחובות", neighborhood: "—",
      price: 1490000, rooms: 3, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/dx0nm488",
      renewal: "none", tags: ["בלעדי", "מעל תקציב"],
      note: "מעל התקציב ב-40K", firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-aharoni-2",
      address: "ישראל אהרוני 2", city: "רחובות", neighborhood: "צפון מזרח העיר",
      price: null, rooms: 3.5, sqm: 97, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/f61nibkl",
      renewal: "none", tags: ["גדולה במיוחד"],
      note: "97 מ״ר — מהגדולות במאגר. חובה לברר מחיר", firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-miltzan-1",
      address: "חיים אליעזר מילצ'ן 1", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1550000, rooms: 3, sqm: 67, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/e0g2bk72",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן — כל הרחוב בתהליך",
      tags: ["פינוי-בינוי", "מעל תקציב"],
      note: "הזולה במילצ'ן — רק 100K מעל התקציב. הכי נגישה מבין 8 המודעות ברחוב",
      hot: true, firstSeen: "2026-08-09"
    },
    {
      id: "rehovot-miltzan-4rooms",
      address: "חיים אליעזר מילצ'ן", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1700000, rooms: 4, sqm: 78, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/y9yo4o19",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן",
      tags: ["פינוי-בינוי", "מעל תקציב", "גדולה"],
      note: "4 חדרים 78 מ״ר — הכי הרבה מ״ר לשקל במילצ'ן", firstSeen: "2026-08-09"
    },
    {
      id: "rehovot-miltzan-20",
      address: "חיים אליעזר מילצ'ן 20", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1740000, rooms: 3.5, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/tnet2akv",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן",
      tags: ["בלעדי", "פינוי-בינוי", "מעל תקציב"], firstSeen: "2026-08-09"
    },
    {
      id: "rehovot-miltzan",
      address: "חיים אליעזר מילצ'ן", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1880000, rooms: 3, sqm: 67, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/jzue4sg8",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן",
      tags: ["פינוי-בינוי", "מעל תקציב"],
      note: "מעל התקציב ב-430K — יש זולות יותר באותו רחוב", firstSeen: "2026-08-05"
    },
    {
      id: "rehovot-miltzan-13",
      address: "חיים אליעזר מילצ'ן 13", city: "רחובות", neighborhood: "מילצ'ן",
      price: 1900000, rooms: 3.5, sqm: 80, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/center-and-sharon/hi239nvi",
      renewal: "verified", renewalNote: "פינוי-בינוי מאושר בשכונת מילצ'ן",
      tags: ["פינוי-בינוי", "מעל תקציב", "גדולה"], firstSeen: "2026-08-09"
    },

    // ══════════════ רמת גן ══════════════
    {
      id: "rg-haroshet-3",
      address: "חרושת 3", city: "רמת גן", neighborhood: "נחלת גנים",
      price: 975000, rooms: 3, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ibkt22z5",
      renewal: "none", tags: ["חניה", "ממ״ד"],
      note: "3 חדרים מתחת למיליון ברמת גן — נדיר", hot: true, firstSeen: "2026-07-24"
    },
    {
      id: "rg-hagana-28",
      address: "ההגנה 28", city: "רמת גן", neighborhood: "רמת עמידר",
      price: null, rooms: 3, sqm: 90, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/vpvkxhb6",
      renewal: "potential", renewalNote: "רמת עמידר — אזור התחדשות עירונית פעיל ברמת גן",
      tags: ["פוטנציאל התחדשות", "גדולה"],
      note: "90 מ״ר ברמת עמידר. לברר מחיר — אזור עם תנועה", hot: true, firstSeen: "2026-08-09"
    },
    {
      id: "rg-haraa-121",
      address: "הרא\"ה 121", city: "רמת גן", neighborhood: "עליות",
      price: 1100000, rooms: 3, sqm: 60, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/8hsy5v3z",
      renewal: "none", tags: [], firstSeen: "2026-07-24"
    },
    {
      id: "rg-tzanchanim",
      address: "שיכון צנחנים", city: "רמת גן", neighborhood: "שיכון צנחנים",
      price: 1200000, rooms: 2, sqm: 57, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/pfx9z25d",
      renewal: "none", tags: [], firstSeen: "2026-07-24"
    },
    {
      id: "rg-diratgan",
      address: "דירת גן", city: "רמת גן", neighborhood: "—",
      price: 1400000, rooms: 2, sqm: 50, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/5lv3rjo2",
      renewal: "none", tags: ["בלעדי", "דירת גן"], firstSeen: "2026-07-27"
    },
    {
      id: "rg-abahilel",
      address: "דרך אבא הלל", city: "רמת גן", neighborhood: "חרוזים",
      price: null, rooms: 3.5, sqm: 100, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/zmtvivhg",
      renewal: "none", tags: ["בלעדי", "חניה", "בניין משופץ", "גדולה"],
      note: "100 מ״ר משופץ — לברר מחיר", firstSeen: "2026-08-09"
    },
    {
      id: "rg-bezerano",
      address: "האחים בז'רנו", city: "רמת גן", neighborhood: "חרוזים",
      price: null, rooms: 3.5, sqm: 105, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/szcu0tsf",
      renewal: "none", tags: ["בלעדי", "גדולה"], firstSeen: "2026-08-09"
    },
    {
      id: "rg-hashmonaim",
      address: "שכונת חשמונאים", city: "רמת גן", neighborhood: "מרכז העיר א'",
      price: null, rooms: 3, sqm: 85, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/4slm8iod",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "rg-harishonim-153",
      address: "שכונת הראשונים", city: "רמת גן", neighborhood: "שכונת הראשונים",
      price: null, rooms: 4, sqm: 153, floor: 8,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/eolhda92",
      renewal: "none", tags: ["ענקית"],
      note: "153 מ״ר — הכי גדולה במאגר. כנראה הרבה מעל תקציב, אבל שווה בדיקה", firstSeen: "2026-08-09"
    },
    {
      id: "rg-hamatmid",
      address: "המתמיד", city: "רמת גן", neighborhood: "שכונת הראשונים",
      price: null, rooms: 4, sqm: 107, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/n2lq73kt",
      renewal: "none", tags: ["גדולה"], firstSeen: "2026-08-09"
    },
    {
      id: "rg-azriel-16",
      address: "עזריאל 16", city: "רמת גן", neighborhood: "רמת השקמה",
      price: null, rooms: 4, sqm: 133, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/tbj8ht55",
      renewal: "none", tags: ["ענקית"], firstSeen: "2026-08-09"
    },
    {
      id: "rg-asaf",
      address: "אסף", city: "רמת גן", neighborhood: "חרוזים",
      price: null, rooms: 3.5, sqm: 92, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/vhtl3vvl",
      renewal: "none", tags: ["גדולה"],
      note: "המחיר במודעה 10,000 ₪ — שגיאת הזנה. צריך לברר", firstSeen: "2026-08-09"
    },

    // ══════════════ חולון ══════════════
    {
      id: "holon-benzion-israeli-4",
      address: "בן ציון ישראלי 4", city: "חולון", neighborhood: "נאות רחל",
      price: 1000650, rooms: 2.5, sqm: 60, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/awfduik1",
      renewal: "none", tags: [],
      note: "מחיר למ״ר מצוין לחולון", hot: true, firstSeen: "2026-07-24"
    },
    {
      id: "holon-kapach-21",
      address: "הרב קפאח 21", city: "חולון", neighborhood: "גרין ועם",
      price: 1130000, rooms: 2, sqm: null, floor: null,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ij96ug1e",
      renewal: "none", tags: [], hot: true, firstSeen: "2026-07-29"
    },
    {
      id: "holon-diratgan-336",
      address: "דירת גן", city: "חולון", neighborhood: "—",
      price: 1350000, rooms: 2.5, sqm: 336, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/f9t6g4da",
      renewal: "none", tags: ["דירת גן", "שטח ענק"],
      note: "336 מ״ר כולל גינה — לבדוק כמה בנוי. פוטנציאל הרחבה", hot: true, firstSeen: "2026-08-09"
    },
    {
      id: "holon-porzim",
      address: "הפורצים", city: "חולון", neighborhood: "תל גיבורים",
      price: 1400000, rooms: 3, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/t6p6vn64",
      renewal: "none", tags: ["ירד ב-190,000 ₪"],
      note: "ירידת מחיר גדולה — המוכר לחוץ, יש מקום למשא ומתן", hot: true, firstSeen: "2026-07-28"
    },
    {
      id: "holon-echad-bemai",
      address: "אחד במאי", city: "חולון", neighborhood: "נאות רחל",
      price: 1270000, rooms: 2, sqm: 40, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ltnupy13",
      renewal: "none", tags: ["ירד ב-60,000 ₪"], firstSeen: "2026-08-09"
    },
    {
      id: "holon-echad-bemai-7",
      address: "אחד במאי 7", city: "חולון", neighborhood: "מרכז / קרית עבודה",
      price: null, rooms: 2.5, sqm: 50, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/xkl3qsjx",
      renewal: "potential", renewalNote: "קרית עבודה — אזור עם תנועת התחדשות בחולון",
      tags: ["פוטנציאל התחדשות"], firstSeen: "2026-08-09"
    },
    {
      id: "holon-bilu",
      address: "ביל\"ו", city: "חולון", neighborhood: "מרכז / קרית עבודה",
      price: 1390000, rooms: 2, sqm: 45, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/dvi4ksgi",
      renewal: "potential", renewalNote: "קרית עבודה — אזור עם תנועת התחדשות",
      tags: ["בלעדי", "פוטנציאל התחדשות"], firstSeen: "2026-07-27"
    },
    {
      id: "holon-aharonovich-66",
      address: "יוסף אהרונוביץ' 66", city: "חולון", neighborhood: "שיכון ותיקים",
      price: 1450000, rooms: 3, sqm: 55, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/p974b1dv",
      renewal: "none", tags: ["בלעדי"],
      note: "בדיוק על תקרת התקציב", firstSeen: "2026-07-27"
    },
    {
      id: "holon-kapach-17",
      address: "הרב קפאח 17", city: "חולון", neighborhood: "גרין ועם",
      price: null, rooms: 3, sqm: 67, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/s3bnxay3",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "holon-hashiloach-20",
      address: "השילוח 20", city: "חולון", neighborhood: "קרית שרת מזרח",
      price: null, rooms: 3, sqm: 60, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/bw1ytun5",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "holon-hatchiya",
      address: "התחייה", city: "חולון", neighborhood: "נאות שושנים",
      price: null, rooms: 3, sqm: 60, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/l5zhqks6",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "holon-shenkar",
      address: "אריה שנקר", city: "חולון", neighborhood: "אגרובנק",
      price: null, rooms: 2, sqm: 60, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/x54kb5h3",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "holon-rasko-bet",
      address: "רסקו ב'", city: "חולון", neighborhood: "רסקו ב'",
      price: null, rooms: 3, sqm: 90, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/bga2tbci",
      renewal: "none", tags: ["גדולה"], firstSeen: "2026-08-09"
    },
    {
      id: "holon-heinz-cohen",
      address: "היינץ כהן", city: "חולון", neighborhood: "קרית אילון",
      price: null, rooms: 3, sqm: 75, floor: 13,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/587g1cu5",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "holon-shmuel-hanagid",
      address: "שמואל הנגיד", city: "חולון", neighborhood: "גרין ועם",
      price: null, rooms: 4, sqm: 85, floor: 6,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/hd47aouf",
      renewal: "none", tags: ["גדולה"], firstSeen: "2026-07-27"
    },
    {
      id: "holon-eilat-20",
      address: "אילת 20", city: "חולון", neighborhood: "נאות רחל",
      price: null, rooms: 3.5, sqm: 110, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ti1fetq0",
      renewal: "none", tags: ["ענקית"], firstSeen: "2026-08-09"
    },
    {
      id: "holon-metula-2",
      address: "מטולה 2", city: "חולון", neighborhood: "קרית שרת מערב",
      price: null, rooms: 4, sqm: 99, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/dx7srw3h",
      renewal: "none", tags: ["חניה", "נוף לפארק", "3 כיווני אוויר", "גדולה"],
      firstSeen: "2026-08-09"
    },
    {
      id: "holon-hankin",
      address: "יהושע חנקין", city: "חולון", neighborhood: "אגרובנק",
      price: null, rooms: 4, sqm: 110, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/zem0vhhi",
      renewal: "none", tags: ["ענקית"], firstSeen: "2026-08-09"
    },

    // ══════════════ בת ים ══════════════
    {
      id: "by-rothschild-nitzana",
      address: "רוטשילד", city: "בת ים", neighborhood: "ניצנה",
      price: 1190000, rooms: 2, sqm: 51, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/7zkgiyq8",
      renewal: "potential", renewalNote: "ציר רוטשילד / ניצנה — אזור פינוי-בינוי פעיל בבת ים",
      tags: ["פוטנציאל התחדשות"], hot: true, firstSeen: "2026-08-09"
    },
    {
      id: "by-rothschild-1",
      address: "רוטשילד 1", city: "בת ים", neighborhood: "הגבול רוטשילד",
      price: null, rooms: 3.5, sqm: 85, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/eelensct",
      renewal: "potential", renewalNote: "הגבול-רוטשילד — מהאזורים החמים לפינוי-בינוי בבת ים",
      tags: ["פוטנציאל התחדשות", "גדולה"],
      note: "85 מ״ר באזור התחדשות. המחיר במודעה 10,000 ₪ — שגיאה, לברר",
      hot: true, firstSeen: "2026-07-29"
    },
    {
      id: "by-halper",
      address: "הלפר", city: "בת ים", neighborhood: "הגבול רוטשילד",
      price: null, rooms: 3.5, sqm: 90, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/qkoqsvfo",
      renewal: "potential", renewalNote: "הגבול-רוטשילד — אזור פינוי-בינוי פעיל",
      tags: ["פוטנציאל התחדשות", "חניה", "2 מרפסות", "גדולה"],
      note: "90 מ״ר עם חניה באזור התחדשות — לברר מחיר", hot: true, firstSeen: "2026-07-29"
    },
    {
      id: "by-balfour-5",
      address: "בלפור 5", city: "בת ים", neighborhood: "הגבול רוטשילד",
      price: null, rooms: 4, sqm: 120, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/9g1eycxo",
      renewal: "potential", renewalNote: "הגבול-רוטשילד — אזור פינוי-בינוי פעיל",
      tags: ["פוטנציאל התחדשות", "ענקית"], firstSeen: "2026-08-09"
    },
    {
      id: "by-hayam-3",
      address: "הים 3", city: "בת ים", neighborhood: "הגבול רוטשילד",
      price: null, rooms: 4, sqm: 214, floor: 0,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/7y337qh3",
      renewal: "potential", renewalNote: "הגבול-רוטשילד — אזור פינוי-בינוי פעיל",
      tags: ["פוטנציאל התחדשות", "דירת גן", "ענקית"], firstSeen: "2026-08-09"
    },
    {
      id: "by-rothschild-2h",
      address: "רוטשילד", city: "בת ים", neighborhood: "—",
      price: 1390000, rooms: 2.5, sqm: 60, floor: 1,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/joheu1ew",
      renewal: "potential", renewalNote: "ציר רוטשילד — אזור התחדשות",
      tags: ["פוטנציאל התחדשות"], firstSeen: "2026-08-09"
    },
    {
      id: "by-dira-65-3h",
      address: "דירה (ללא כתובת)", city: "בת ים", neighborhood: "—",
      price: 1420000, rooms: 3, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/lyahdo7n",
      renewal: "none", tags: ["קרוב לים"], firstSeen: "2026-08-09"
    },
    {
      id: "by-neviim",
      address: "הנביאים", city: "בת ים", neighborhood: "הנביאים",
      price: 1430000, rooms: 3, sqm: 65, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/i3y6yrwi",
      renewal: "none", tags: ["בלעדי"], firstSeen: "2026-07-24"
    },
    {
      id: "by-dira-65-25h",
      address: "דירה (ללא כתובת)", city: "בת ים", neighborhood: "—",
      price: 1450000, rooms: 2.5, sqm: 65, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/71bho55f",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "by-yerushalaim-66",
      address: "ירושלים 66", city: "בת ים", neighborhood: "לב העיר",
      price: 1450000, rooms: 2, sqm: 60, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/fvftw3xe",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "by-kibbutz-galuyot",
      address: "קיבוץ גלויות", city: "בת ים", neighborhood: "—",
      price: 1350000, rooms: 2.5, sqm: 50, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/x7rhjp87",
      renewal: "none", tags: ["בלעדי"], firstSeen: "2026-08-09"
    },
    {
      id: "by-kkl-nitzana",
      address: "קרן קיימת לישראל", city: "בת ים", neighborhood: "ניצנה",
      price: 1440000, rooms: 2, sqm: 55, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/kxhetsr6",
      renewal: "potential", renewalNote: "ניצנה — אזור עם תנועת התחדשות",
      tags: ["פוטנציאל התחדשות"], firstSeen: "2026-07-27"
    },
    {
      id: "by-hashmonaim-43",
      address: "החשמונאים 43", city: "בת ים", neighborhood: "לב העיר",
      price: null, rooms: 3.5, sqm: 78, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/j82ju8cy",
      renewal: "none", tags: ["גדולה"], firstSeen: "2026-08-09"
    },
    {
      id: "by-pinkas",
      address: "פנקס", city: "בת ים", neighborhood: "לב העיר",
      price: null, rooms: 3.5, sqm: 82, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/tqdfvrkn",
      renewal: "none", tags: ["גדולה"], firstSeen: "2026-08-09"
    },
    {
      id: "by-haviva-reik",
      address: "חביבה רייק", city: "בת ים", neighborhood: "לב העיר",
      price: null, rooms: 4, sqm: 100, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/pbm8e8ez",
      renewal: "none", tags: ["בלעדי", "ענקית"], firstSeen: "2026-08-09"
    },
    {
      id: "by-yoseftal-107",
      address: "יוספטל 107", city: "בת ים", neighborhood: "רמת יוסף",
      price: null, rooms: 3, sqm: 75, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/3xsa3kno",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "by-livorno",
      address: "ליבורנו", city: "בת ים", neighborhood: "רמת הנשיא",
      price: null, rooms: 4, sqm: 85, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/ffbxv75f",
      renewal: "none", tags: ["גדולה"], firstSeen: "2026-08-09"
    },
    {
      id: "by-daniel-44",
      address: "דניאל 44", city: "בת ים", neighborhood: "לב העיר",
      price: null, rooms: 2, sqm: 62, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/5ovxyba9",
      renewal: "none", tags: [],
      note: "המחיר במודעה 10,000 ₪ — שגיאה, לברר", firstSeen: "2026-08-09"
    },
    {
      id: "by-balfour-80sqm",
      address: "בלפור", city: "בת ים", neighborhood: "—",
      price: null, rooms: 3, sqm: 80, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/m7fme6pn",
      renewal: "none", tags: ["גדולה"],
      note: "המחיר במודעה 99,999 ₪ — שגיאה, לברר", firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-138-8",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1350000, rooms: 2, sqm: 40, floor: 8,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/u2yipkpc",
      renewal: "none", tags: ["חניה", "נוף לים"], firstSeen: "2026-07-27"
    },
    {
      id: "by-bengurion-138-7",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1350000, rooms: 2, sqm: 42, floor: 7,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/68tv09mm",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-138-5",
      address: "דרך בן גוריון 138", city: "בת ים", neighborhood: "פארק הים",
      price: 1305000, rooms: 2, sqm: 40, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/dy8yw151",
      renewal: "none", tags: ["תיירות ונופש"], firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-5",
      address: "דרך בן גוריון", city: "בת ים", neighborhood: "פארק הים",
      price: 1260000, rooms: 2, sqm: 37, floor: 5,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/s5xsxuad",
      renewal: "none", tags: ["בלעדי"], firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-7",
      address: "דרך בן גוריון", city: "בת ים", neighborhood: "—",
      price: 1250000, rooms: 2, sqm: 37, floor: 7,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/z453mixt",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "by-bengurion-11",
      address: "דרך בן גוריון", city: "בת ים", neighborhood: "—",
      price: 1220000, rooms: 2, sqm: 38, floor: 11,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/rd3hrtk7",
      renewal: "none", tags: [], firstSeen: "2026-08-09"
    },
    {
      id: "by-eilat",
      address: "אילת", city: "בת ים", neighborhood: "—",
      price: 1390000, rooms: 2, sqm: 40, floor: 3,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/flabjcbf",
      renewal: "none", tags: ["ירד ב-100,000 ₪"], firstSeen: "2026-07-27"
    },
    {
      id: "by-david-raziel",
      address: "דוד רזיאל", city: "בת ים", neighborhood: "רמת הנשיא",
      price: 1399000, rooms: 2, sqm: 35, floor: 2,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/knwummef",
      renewal: "none", tags: [],
      note: "היקרה למ״ר במאגר — לדלג", firstSeen: "2026-08-09"
    },
    {
      id: "by-balfour-92",
      address: "בלפור 92", city: "בת ים", neighborhood: "עצמאות יוספטל",
      price: null, rooms: 4, sqm: 120, floor: 4,
      source: "יד2", url: "https://www.yad2.co.il/realestate/item/tel-aviv-area/f6sqk5dt",
      renewal: "none", tags: ["ענקית"], firstSeen: "2026-08-09"
    }
  ]
};
