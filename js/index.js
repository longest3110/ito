
//データ定義
var data = {
	keyWord: "",
	playerNo: null
}
// Vue.jsを初期化
var app = new Vue({
	//バインドするid
	el: "#index-main",

	//データ部
	data: data,

	//関数部
	methods: {
		goNext() {
			const keyWord = data.keyWord;
			const playerNo = data.playerNo;

			if (!keyWord || !playerNo) {
				alert("未入力の項目があります！");
				return;
			}

			//url作成
			const url = `./result.html?k=${keyWord}&p=${playerNo}`;

			//遷移
			location.href = url;
		}
	}
});