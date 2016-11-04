export default {
	created() {
		let userName = localStorage.getItem('user_name')
		if( userName === null) {
			userName = prompt('connpassのユーザー名を入力してください')
			if( userName === null) {
				//キャンセルを押された場合
			} else {
				localStorage.setItem('user_name', userName)
			}
		} 
		this.userName = userName
	},
	data() {
		return {
			userName: ''
		}
	}
}