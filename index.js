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
