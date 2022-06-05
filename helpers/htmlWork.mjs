const formElement = document.getElementById('header-method-selector')

export function logBigO(algo) {
	const bigOInfo = document.createElement('p')
	switch (algo) {
		case 'bubble':
			bigOInfo.textContent = "Best: O(N), Worst: O(N^2)"
			formElement.appendChild(bigOInfo)
			break;
	
		default:
			break;
	}
}