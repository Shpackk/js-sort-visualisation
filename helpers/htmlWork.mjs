const formElement = document.getElementById('header-method-selector')

export function logBigO(algo) {
	const bigOInfo = document.createElement('h1')
	switch (algo) {
		case 'bubble':
			bigOInfo.textContent = "Best: O(N), Worst: O(N^2)"
			break;
		case 'selection':
			bigOInfo.textContent = "Best/Worst: O(N^2)"
			break;
		default:
			break;
	}
	formElement.appendChild(bigOInfo)
}

export function logTime( time ) {
	const timeInfo = document.createElement('h2')
	timeInfo.textContent = Math.round(time) + 'ms'
	formElement.appendChild(timeInfo)
}