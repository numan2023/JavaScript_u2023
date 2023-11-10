// --- 変数 --- //
// console.log(count); -> 宣言前の呼び出しはエラー
let count = 0; // 変数宣言 or 初期化(代入した値のことを"初期値")
let newCount; // 初期値省略も可
// let count = 30; -> 宣言済みの変数は再度宣言することはできない
console.log(count); // undefined
count = 30;
console.log(count);
// --- 変数 --- //

// --定数-- //
const dayInWeek = 7;
// day InWeek = 8; -> 再代入はエラー
// const dayInWeek; -> 初期値を与えない場合もエラー
// 定数を使用する意味：値の修正時などが簡易 && 値が表す意味が定数の方がわかりやすい(=可読性)
// --定数-- //

// --命名規則-- //
let tomatoCount; // 分割されうる言葉の最初の文字を大文字=キャメルケース(ラクダ) -> JSのbest practice
let TomatoCount; // それぞれ最初の文字大文字=パスカルケース -> JSのBad practice
let tomato_count; // _で言葉を繋ぐ=スネークケース -> JSではBad Practice
let tomato7Count; // 数字は二文字目以降であれば可(-> 先頭数字は不可)
let トマトカウント; // 日本語など多言語は可(-> 英語が一般的)
//let tomato-Count -> 特殊記号は不可
//let const -> 予約語は不可
// 例外
let $tomato$Count; // $は可
let _tomato_Count; // _は可
// --命名規則-- //

// --- 算術演算子 --- //
let additionResult = 2 + 5;
let result = 5;
result = result + 1;
result += 1;
result++; // 1の計算のみ可 下との違いは、「console.log(result++)=7」 ;resultを先に返す &&下と同様に改行した場合ややこしいため、普通使用しない
++result; // 1の計算のみ可 下との違いは、「console.log(++result)=8」 ;resultを計算後に返す
// --- 算術演算子 --- //

// --- データの型 --- //
let number = 10; // number型
number = -4;
number = 32.42;
let string = 'Hello';
number = 'something'; // number変数には数値以外も代入可能 -> 「動的型付け」：状況によって変化する型
// --- データの型 --- //

// --- 3つの文字列の書き方 --- //
const userName = 'Yosh';
string = 'Hello ' + userName // 文字列と変数の組み合わせは"",'',``,どちらでも可能
string = `Hello ${userName}`; // ``,は${}で文字列の中に埋め込むことができる
string = ' \' '; // ''の中に'を入れたい場合、\を使用。 \を表示させたい場合、\の後に\を記述する
string = 'Hello\nYosh!'; // \nで改行できる
string = `Hello
Yosh!`; // ``を使用すれば改行できる
// -> まとめ：
  // -- ``は①文字列内に変数を埋め込む場合 or ②改行したい場合
  // -- '' , ""はそれ以外(どちらでも良い)
// --- 3つの文字列の書き方 --- //

// --- 型変換 --- //
  // 明示的な変換
    // 数値
    const userInput = '10.9'; // 文字列として変数に代入
    let calcResult;
    calcResult = Number(userInput) + 10; // Number()関数を使用し、文字列を数値に型変換 (小数点も含め表示される -> 20.9)
    calcResult = parseInt(userInput) + 10; // 整数として数値化 -> 20
    calcResult = parseFloat(userInput) + 10; // 小数点含め、数値化される -> 20.9
    calcResult = +userInput + 10; // 変数の前に「＋」でも数値化

    // 文字列
    const tenNumber = 10;
    calcResult = '10' + tenNumber;
    calcResult = '10' + String(tenNumber);
    calcResult = '10' + tenNumber.toString();

    // 真偽値
    let boolean = true;
    boolean = false;
// --- 型変換 --- //

// --- 配列 --- //
let array = [1, 2, 3];
array = [1, 'apple', true, array]; // 配列には数値、文字列、真偽値、配列などなんでも格納可能
console.log(array[0])
array = [];
array.push('array'); // .push()で配列に追加
// --- 配列 --- //

// --- オブジェクト：まとまったデータを表す型 --- //
const coffee = { // {}で記述
  // キーとバリューの組み合わせの集まり = 「オブジェクト」
  name: 'Chocolate Mocha', // キーとバリューの組み合わせ = 「プロパティ」 -> nameプロパティ
  size: 350, // -> sizeプロパティ
  isHot: true,
  toppings: ['Cinnamon', 'Caramel'], // 配列もバリューとして格納可
  nutritions: { // オブジェクト内にオブジェクトも格納可
    calories: 430,
    sugars: 53,
  },
};
console.log(coffee); // オブジェクトの情報をすべて表示
console.log(coffee.size); // .〇〇でオブジェクト内のキーを選択肢、バリューを表示させる
coffee.isHot = false; // オブジェクトcoffeeの特定のキーのバリューを変更したい場合
coffee.barista = 'Yosh'; // 新しいプロパティを追加したい場合、.キー = バリューで追加が可能
// --- オブジェクト：まとまったデータを表す型 --- //

// --- null, undefined --- //
let userInfo = null; // null = 何もないことを表す -> 「予定通り何もない場合に表示」
let userInfo_2 // undefined = 何もない -> 「予期せぬ何もない場合に表示」
// --- null, undefined --- //

// --- typeof演算子でデータ型を表示 --- //
typeof 3 // -> number
typeof true // -> boolean
typeof 'Hello' // -> string
typeof { name: 'Yosh'} // -> object
typeof [1, 2, 3] // -> object (※配列もデータの型であるが、厳密には”オブジェクト型”)
typeof undefined // -> undefined
typeof null // -> object
// --- typeof演算子でデータ型を表示 --- //

// --- 関数：何度も呼び出せるコードの塊 --- //
  // 関数定義, 関数宣言文
function add() { // オブジェクト以外で使用する{}=「ブロック文」

} 
add(); // 呼び出し
add(); // 呼び出し
// --- 関数：何度も呼び出せるコードの塊 --- //

// --- パラメーターと引数：関数に追加で情報を受け取る --- //
function add(num1, num2) { // (num1, num2)のことを「仮引数 or パラメータ」

}
add(2, 3); // (2, 3)を「実引数 or argument」
// --- パラメーターと引数 --- //

// --- 戻り値(return文を使用し、値を返す関数を作成) --- //
function add(num1, num2) {
  return num1 + num2;
  console.log('hello'); // return後のコードは全て無視される。
}
const returnedValue= add(2, 3); // 関数内の処理結果を変数に返す
// --- 戻り値(return文を使用し、値を返す関数を作成) --- //

// --- 関数の呼び出しを関数のコードより先に記述した場合 --- //
const returnedValue_2= add(2, 3);
function add(num1, num2) { // javascriptのv8エンジンなどコード読み込みの際に、関数宣言文は全て巻き上げられる（一番上に）
  return num1 + num2;
}
// --- 関数の呼び出しを関数のコードより先に記述した場合 --- //

// --- Scope：変数を参照できる範囲 --- //
const newValue = 'hello'; // 全ての場所で変数を使用できる = グローバルスコープ (変数のことをグローバル変数)
const value = 'hello'
function add(num1, num2) {
  console.log(newValue); // 関数の外で定義した変数を関数内でも使用可能
  const value = num1+ num2; // 関数内で変数定義は可能 // 特定の場所でしか使用できない = ローカルスコープ (ローカル変数) / 関数スコープ ブロックスコープ
  console.log(value); // グローバルでもローカルでも同じ変数名で定義されている場合 -> ローカル変数が優先される = シャドーイング(覆い隠す)
  return value;
}
console.log(value) // ※関数内で定義した変数を関数の外では使用不可
const returnedValue_3= add(2, 3);
// --- Scope：変数を参照できる範囲 --- //

// --- コメント --- //
  // コメントで説明するよりも変数名でわかりやすい表記にする方が良い
  // 他の人がわかりづらいところにコメントする
    // comment
    /*
    comment
    */
    const /*comment*/ comment = 2;

// --- コメント --- //