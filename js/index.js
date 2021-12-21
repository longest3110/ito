const index = {
	//データ部
	data() {
		return {
			keyWord: "",
			playerNo: null
		}
	},

	//関数部
	methods: {
		goNext() {
			const keyWord = this.keyWord;
			const playerNo = this.playerNo;

			if (!keyWord || !playerNo) {
				alert("未入力の項目があります！");
				return;
			}
		}
	}
}

// Vue.jsを初期化
Vue.createApp(index).mount('#index-main');