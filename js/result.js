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

// Vue.jsを初期化
Vue.createApp(result).mount('#result-main');