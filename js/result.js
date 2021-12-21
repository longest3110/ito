const result = {
	//データ部
	data() {
		return {
		}
	},

	//初期処理
	mounted : function(){
		//パラメーター取得
		const keyWord = getParam('k');
		const playerNo = parseInt(getParam('p'), 10);

		//キーワードから、任意の数値を取得
		const seed = getStrToNum(keyWord);
		
		//1〜100までのランダムな数値が入った配列を作成

	},

	//関数部
	methods: {
		
	}
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

// Vue.jsを初期化
Vue.createApp(result).mount('#result-main');