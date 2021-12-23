
//データ定義
var data = {
	num: 0
}

//数字表示
function showNumber() {
		//パラメーター取得
		const playerNo = parseInt(getParam('p'), 10);

		//1〜100までのランダムな数値が入った配列を作成
		const arr = getRandomArray();

		//数値を設定
		data.num = arr[playerNo];
}

//パラメーター取得
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//文字列から任意の数値を取得
function getStrToNum(keyWord) {
	var result = 0;

	for(var i = 0; i < keyWord.length; i++) {
		result += parseInt(keyWord.charCodeAt(i));
	}

	//0対策のため、+1しておく
	return result + 1;
}

//1〜100までのランダムな配列を作成
function getRandomArray() {
	const list = [];

	//1〜100まで順番に並んだ配列を作成
	for (let i = 1; i <= 100; i++ ) {
		list.push(i);
	}

	//並び替え
	for (let i = 0; i < 10000; i++) {
		let x = Math.round(Math.random() * 100);
		if (x === 100) {
			x = 0;
		}

		let y = Math.round(Math.random() * 100);
		if (y === 100) {
			y = 0;
		}

		let temp = list[x];
		list[x] = list[y];
		list[y] = temp;
	}

	return list;
}

//乱数生成時にシード指定可能にする
Math.random.seed = (function me (s) {
	// Xorshift128 (init seed with Xorshift32)
	s ^= s << 13; s ^= 2 >>> 17; s ^= s << 5;
	let x = 123456789^s;
	s ^= s << 13; s ^= 2 >>> 17; s ^= s << 5;
	let y = 362436069^s;
	s ^= s << 13; s ^= 2 >>> 17; s ^= s << 5;
	let z = 521288629^s;
	s ^= s << 13; s ^= 2 >>> 17; s ^= s << 5;
	let w = 88675123^s;
	let t;
	Math.random = function () {
		t = x ^ (x << 11);
		x = y; y = z; z = w;
		// >>>0 means 'cast to uint32'
		w = ((w ^ (w >>> 19)) ^ (t ^ (t >>> 8)))>>>0;
		return w / 0x100000000;
	};
	Math.random.seed = me;
	return me;
})(0);

// Vue.jsを初期化
var app = new Vue({
	//バインドするid
	el: "#result-main",

	//データ部
	data: data,

	//初期処理
	mounted: function(){
		//パラメーター取得
		const keyWord = getParam('k');

		//キーワードから、任意の数値を取得
		const seed = getStrToNum(keyWord);

		//シード設定
		Math.random.seed(seed);

		//数値表示
		showNumber();
	}
});