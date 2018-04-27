function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector('div.target')
}

function deepestChild() {
	let x = document.getElementById('grand-node').querySelectorAll('div')
	return x[x.length-1]
}
function increaseRankBy(n) {
	let x = document.querySelectorAll('.ranked-list li')
	for (let i = 0; i < x.length; i++) {
		x[i].innerHTML = parseInt(x[i].innerHTML) + n
	}
}