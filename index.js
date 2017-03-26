function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector('div.target')
}
function increaseRankBy(n) {
	 let lis = document.querySelectorAll('ul.ranked-list li');
	  for (let i = 0; i < lis.length; i++) {
		lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + 3).toString()
		}
 }
 function deepestChild() {
 	let divs = document.getElementById('grand-node').querySelectorAll('div')
 	return (divs[divs.length -1])
 }
