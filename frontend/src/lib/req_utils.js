import { browser } from '$app/env';

function browserGet(key) {
	if (browser) {
		const item = localStorage.getItem(key);
		if (item) {
			return JSON.parse(item);
		}
	}
	return null;
}

export function browserSet(key, value) {
	if (browser) {
		localStorage.setItem(key, value);
	}
}

export async function post(fetch, url, body) {
	let customError = false;
	try {
		let headers = {};
		if (!(body instanceof FormData)) {
			headers['Content-Type'] = 'application/json';
			body = JSON.stringify(body);
		}
		const token = browserGet('jwt');
		if (token) {
			headers['Authorization'] = 'Bearer ' + token;
		}

		const res = await fetch(url, {
			method: 'POST',
			body,
			headers
		});
		if (!res.ok) {
			try {
				const data = await res.json();
				const error = data.message[0].messages[0];
				customError = true;
				throw { id: error.id, message: error.message };
			} catch (err) {
				console.log(err);
				throw err;
			}
		}
    try {
      const json = await res.json();
      return json;
    } catch (error) {
      console.log(error)
      throw {id: '1', message: 'Unknow error'}
    }
	} catch (e) {
		console.log(e)
    throw customError ? e : {id: '2', message: 'Unknown error'}
	}
}
