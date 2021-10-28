export default {
	data() {
		return {
			lastClickTime: 0,
			minTimeClick: 3200,
			isLogin: false,
		}
	},
	methods: {
		//通用方法.. 防抖
		clickDebounce(func){
			let nowDate = new Date().getTime() ;
			console.log('nowDate' , nowDate)
			console.log('lastClickTime' , this.lastClickTime)
			if(nowDate - this.lastClickTime > this.minTimeClick){
				this.lastClickTime = nowDate;
				func.apply(this, arguments)
				return true;
			}
			return false
		},
		//通用方法.. 登录权限
		clickNeedLogin(func){
			if(this.isLogin){
				func.apply(this, arguments)
			}else{
				this.toLoginView();
			}
		},
		toLoginView(){
			uni.navigateTo({
				url: '/pages/views/login/index',
				fail: (err) => {
					console.log('err , ',err)
				}
			})
		},
		toView(path){
			uni.navigateTo({
				url: path,
				fail: (err) => {
					console.log('err , ',err)
				}
			})
		}
	},
	onReady() {
		// this.lastClickTime = new Date().getTime()
	},
	components: {

	}
}
