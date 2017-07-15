// lib
const request = require('superagent');

// element
let checkBtn = document.getElementById('check-btn');
let symbolInput = document.getElementById('symbol-input');

// event
checkBtn.addEventListener('click', () => {
	let symbol = symbolInput.value;
	request
	.get(`https://www.google.com/finance/info?q=${symbol}`)
	.end((err, res) => {
		if (err) {
			console.log('bad request');
		} else {
			res = JSON.parse(res.text.replace('// ', ''));
			console.log(res);
			// cp - day ratio
			// l - price
			// c - delta price
			// lt_dts - timestamp
			// pcls_fix - start price
		}
		clear('symbol-input');
	});
});

// helper
function clear(identity) {
	let domById = document.getElementById(identity);
	let domByClass = document.getElementsByClassName(identity)[0];
	let dom = domById ? domById : domByClass;
	if (dom.value) {
		dom.value = '';
	}
}