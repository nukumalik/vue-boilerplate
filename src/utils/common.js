import axios from 'axios'

export function fetch(options) {
	return new Promise((resolve, reject) => {
		axios(options)
			.then(res => resolve(res.data))
			.catch(err => reject(new Error(err)))
	})
}

export function getStorage(key) {
	return localStorage.getItem(key)
}

export function setStorage(key, value) {
	return localStorage.setItem(key, value)
}

export function clearStorage() {
	return localStorage.clear()
}
