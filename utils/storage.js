


function baseStorage(key ,value){
	uni.setStorage({
		key:key,
		data:value,
		success: () => {
			console.log('--->save data success')
		},
		fail: () => {
			console.log('--->save data fail')
		}
	})
}

function objectStorage(key ,object){
	baseStorage(key,JSON.stringify(object))
}

function getStorageValue(key,default = ''){
	
}