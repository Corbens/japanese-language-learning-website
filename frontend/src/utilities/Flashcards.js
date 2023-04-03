
const hiragana = {
    num: "0",
    title: "Hiragana to English",
    maxSides: 2,
    sideNames: ["Hiragana", "English"],
    contents: [
        { one: "あ", two: "a"},
        { one: "い", two: "i"},
        { one: "う", two: "u"},
        { one: "え", two: "e"},
        { one: "お", two: "o"},
        { one: "か", two: "ka"},
        { one: "き", two: "ki"},
        { one: "く", two: "ku"},
        { one: "け", two: "ke"},
        { one: "こ", two: "ko"},
        { one: "さ", two: "sa"},
        { one: "し", two: "shi"},
        { one: "す", two: "su"},
        { one: "せ", two: "se"},
        { one: "そ", two: "so"},
        { one: "た", two: "ta"},
        { one: "ち", two: "chi"},
        { one: "つ", two: "tsu"},
        { one: "て", two: "te"},
        { one: "と", two: "to"},
        { one: "な", two: "na"},
        { one: "に", two: "ni"},
        { one: "ぬ", two: "nu"},
        { one: "ね", two: "ne"},
        { one: "の", two: "no"},
        { one: "は", two: "ha"},
        { one: "ひ", two: "hi"},
        { one: "ふ", two: "fu"},
        { one: "へ", two: "he"},
        { one: "ほ", two: "ho"},
        { one: "ま", two: "ma"},
        { one: "み", two: "mi"},
        { one: "む", two: "mu"},
        { one: "め", two: "me"},
        { one: "も", two: "mo"},
        { one: "や", two: "ya"},
        { one: "ゆ", two: "yu"},
        { one: "よ", two: "yo"},
        { one: "ら", two: "ra"},
        { one: "り", two: "ri"},
        { one: "る", two: "ru"},
        { one: "れ", two: "re"},
        { one: "ろ", two: "ro"},
        { one: "わ", two: "wa"},
        { one: "を", two: "wo"},
        { one: "ん", two: "n"}
    ]
}

const katakana = {
    num: "1",
    title: "Katakana to English",
    maxSides: 2,
    sideNames: ["Katakana", "English"],
    contents: [
        { one: "ア", two: "a"},
        { one: "イ", two: "i"},
        { one: "ウ", two: "u"},
        { one: "エ", two: "e"},
        { one: "オ", two: "o"},
        { one: "カ", two: "ka"},
        { one: "キ", two: "ki"},
        { one: "ク", two: "ku"},
        { one: "ケ", two: "ke"},
        { one: "コ", two: "ko"},
        { one: "サ", two: "sa"},
        { one: "シ", two: "shi"},
        { one: "ス", two: "su"},
        { one: "セ", two: "se"},
        { one: "ソ", two: "so"},
        { one: "タ", two: "ta"},
        { one: "チ", two: "chi"},
        { one: "ツ", two: "tsu"},
        { one: "テ", two: "te"},
        { one: "ト", two: "to"},
        { one: "ナ", two: "na"},
        { one: "ニ", two: "ni"},
        { one: "ヌ", two: "nu"},
        { one: "ネ", two: "ne"},
        { one: "ノ", two: "no"},
        { one: "ハ", two: "ha"},
        { one: "ヒ", two: "hi"},
        { one: "フ", two: "fu"},
        { one: "ヘ", two: "he"},
        { one: "ホ", two: "ho"},
        { one: "マ", two: "ma"},
        { one: "ミ", two: "mi"},
        { one: "ム", two: "mu"},
        { one: "メ", two: "me"},
        { one: "モ", two: "mo"},
        { one: "ヤ", two: "ya"},
        { one: "ユ", two: "yu"},
        { one: "ヨ", two: "yo"},
        { one: "ラ", two: "ra"},
        { one: "リ", two: "ri"},
        { one: "ル", two: "ru"},
        { one: "レ", two: "re"},
        { one: "ロ", two: "ro"},
        { one: "ワ", two: "wa"},
        { one: "ヲ", two: "wo"},
        { one: "ン", two: "n"}
    ]
}

const bothKana = {
    num: "2",
    title: "Hiragana to Katakana",
    maxSides: 2,
    sideNames: ["Hiragana", "Katakana"],
    contents: [
        { one: "あ", two: "ア"},
        { one: "い", two: "イ"},
        { one: "う", two: "ウ"},
        { one: "え", two: "エ"},
        { one: "お", two: "オ"},
        { one: "か", two: "カ"},
        { one: "き", two: "キ"},
        { one: "く", two: "ク"},
        { one: "け", two: "ケ"},
        { one: "こ", two: "コ"},
        { one: "さ", two: "サ"},
        { one: "し", two: "シ"},
        { one: "す", two: "ス"},
        { one: "せ", two: "セ"},
        { one: "そ", two: "ソ"},
        { one: "た", two: "タ"},
        { one: "ち", two: "チ"},
        { one: "つ", two: "ツ"},
        { one: "て", two: "テ"},
        { one: "と", two: "ト"},
        { one: "な", two: "ナ"},
        { one: "に", two: "ニ"},
        { one: "ぬ", two: "ヌ"},
        { one: "ね", two: "ネ"},
        { one: "の", two: "ノ"},
        { one: "は", two: "ハ"},
        { one: "ひ", two: "ヒ"},
        { one: "ふ", two: "フ"},
        { one: "へ", two: "ヘ"},
        { one: "ほ", two: "ホ"},
        { one: "ま", two: "マ"},
        { one: "み", two: "ミ"},
        { one: "む", two: "ム"},
        { one: "め", two: "メ"},
        { one: "も", two: "モ"},
        { one: "や", two: "ヤ"},
        { one: "ゆ", two: "ユ"},
        { one: "よ", two: "ヨ"},
        { one: "ら", two: "ラ"},
        { one: "り", two: "リ"},
        { one: "る", two: "ル"},
        { one: "れ", two: "レ"},
        { one: "ろ", two: "ロ"},
        { one: "わ", two: "ワ"},
        { one: "を", two: "ヲ"},
        { one: "ん", two: "ン"}
    ]
}

const allKana = {
    num: "3",
    title: "Both Kana and English",
    maxSides: 3,
    sideNames: ["Hiragana", "Katakana", "English"],
    contents: [
        { one: "あ", two: "ア", three: "a"},
        { one: "い", two: "イ", three: "i"},
        { one: "う", two: "ウ", three: "u"},
        { one: "え", two: "エ", three: "e"},
        { one: "お", two: "オ", three: "o"},
        { one: "か", two: "カ", three: "ka"},
        { one: "き", two: "キ", three: "ki"},
        { one: "く", two: "ク", three: "ku"},
        { one: "け", two: "ケ", three: "ke"},
        { one: "こ", two: "コ", three: "ko"},
        { one: "さ", two: "サ", three: "sa"},
        { one: "し", two: "シ", three: "shi"},
        { one: "す", two: "ス", three: "su"},
        { one: "せ", two: "セ", three: "se"},
        { one: "そ", two: "ソ", three: "so"},
        { one: "た", two: "タ", three: "ta"},
        { one: "ち", two: "チ", three: "chi"},
        { one: "つ", two: "ツ", three: "tsu"},
        { one: "て", two: "テ", three: "te"},
        { one: "と", two: "ト", three: "to"},
        { one: "な", two: "ナ", three: "na"},
        { one: "に", two: "ニ", three: "ni"},
        { one: "ぬ", two: "ヌ", three: "nu"},
        { one: "ね", two: "ネ", three: "ne"},
        { one: "の", two: "ノ", three: "no"},
        { one: "は", two: "ハ", three: "ha"},
        { one: "ひ", two: "ヒ", three: "hi"},
        { one: "ふ", two: "フ", three: "fu"},
        { one: "へ", two: "ヘ", three: "he"},
        { one: "ほ", two: "ホ", three: "ho"},
        { one: "ま", two: "マ", three: "ma"},
        { one: "み", two: "ミ", three: "mi"},
        { one: "む", two: "ム", three: "mu"},
        { one: "め", two: "メ", three: "me"},
        { one: "も", two: "モ", three: "mo"},
        { one: "や", two: "ヤ", three: "ya"},
        { one: "ゆ", two: "ユ", three: "yu"},
        { one: "よ", two: "ヨ", three: "yo"},
        { one: "ら", two: "ラ", three: "ra"},
        { one: "り", two: "リ", three: "ri"},
        { one: "る", two: "ル", three: "ru"},
        { one: "れ", two: "レ", three: "re"},
        { one: "ろ", two: "ロ", three: "ro"},
        { one: "わ", two: "ワ", three: "wa"},
        { one: "を", two: "ヲ", three: "wo"},
        { one: "ん", two: "ン", three: "n"}
    ]
}

const countries = {
    num: "4",
    title: "Countries",
    maxSides: 3,
    sideNames: ["English", "Japanese", "Reading"],
    contents: [
        { one: "Japan", two: "日本", three: "にほん"},
        { one: "China", two: "中国", three: "ちゅうごく"},
        { one: "Korea", two: "韓国", three: "かんこく"},
        { one: "Britain", two: "英国", three: "えいこく"},
        { one: "France", two: "フランス", three: "ふらんす"},
        { one: "Spain", two: "スペイン", three: "すぺいん"},
        { one: "America", two: "アメリカ", three: "あめりか"},
        { one: "Canada", two: "カナダ", three: "かなだ"},
        { one: "Italy", two: "イタリア", three: "いたりあ"}
    ]
}

const food = {
    num: "5",
    title: "Food",
    maxSides: 3,
    sideNames: ["English", "Japanese", "Reading"],
    contents: [
        { one: "Plum", two: "梅", three: "うめ"},
        { one: "Strawberry", two: "苺", three: "いちご"},
        { one: "Salt", two: "塩", three: "しお"},
        { one: "Tonkatsu", two: "とんかつ", three: "とんかつ"},
        { one: "Yakiniku", two: "焼肉", three: "やきにく"},
        { one: "Egg", two: "玉子", three: "たまご"},
        { one: "Beef", two: "牛肉", three: " ぎゅうにく "},
        { one: "Fish", two: "魚", three: "さかな"}
    ]
}
const numbers = {
    num: "6",
    title: "Numbers",
    maxSides: 4,
    sideNames: ["English", "Japanese", "Reading", "Numeral"],
    contents: [
        { one: "One", two: "一", three: "いち", four: "1"},
        { one: "Two", two: "二", three: "に", four: "2"},
        { one: "Three", two: "三", three: "さん", four: "3"},
        { one: "Four", two: "四", three: "し", four: "4"},
        { one: "Five", two: "五", three: "ご", four: "5"},
        { one: "Six", two: "六", three: "ろく", four: "6"},
        { one: "Seven", two: "七", three: "しち", four: "7"},
        { one: "Eight", two: "八", three: "はち", four: "8"},
        { one: "Nine", two: "九", three: "きゅう", four: "9"},
        { one: "Ten", two: "十", three: "じゅう", four: "10"}
    ]
}

const flashcardDecks = [hiragana, katakana, bothKana, allKana, countries, food, numbers]

const sidesKey = ["㊁", "㊂", "㊃"]

export const getFlashcardDeck = (selectedDeck) => {
    return flashcardDecks[selectedDeck]
}

export const getFlashcardList = () => {
    const flashcardInfo = []
    for(let deck in flashcardDecks){ 
        //let deckSides = sidesKey[flashcardDecks[deck].maxSides - 2]
        flashcardInfo.push({label: flashcardDecks[deck].title + " " + sidesKey[flashcardDecks[deck].maxSides - 2], pos: flashcardDecks[deck].num})
    }
    return flashcardInfo
}