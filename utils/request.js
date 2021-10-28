
const defaultTimeout = 30 * 1000;

const HostUrl = '';

function baseRequest(config) {
	uni.request({
		
		url: HostUrl + config.url,
		method: config.method,
		data: config.data,
		timeout: defaultTimeout,
		success: (data) => {
			if (config.success) {
				config.success(data);
			}
		},
		fail: (err) => {
			if (config.fail) {
				config.fail(err);
			}
		},
		complete: () => {
			if (config.complete) {
				config.complete();
			}
		}
	})
}

export function getData(config) {
	return new Promise((resolve, reject) => {
		baseRequest({
			url: config.url,
			data: config.data,
			method: 'GET',
			success: (data) => {
				resolve(data);
			},
			fail: (err) => {
				reject(err | '请求异常!');
			},
			complete: () => {

			}
		})
	})
}


export function postData(url, data) {
	return new Promise((resolve, reject) => {
		url: config.url,
		data: config.data,
		method: 'POST',
		success: (data) => {
			resolve(data);
		},
		fail: (err) => {
			reject(err | '请求异常!');
		},
		complete: () => {
		
		}
	})
}
