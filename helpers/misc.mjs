
export const compareEnum = {
	lessThan: -1,
	greaterThan: 1
}

export function swap(arr, a, b) {
	swapDiv(document.getElementById(a.toString()), document.getElementById(b.toString()))
	const temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

export function compareFunc(a, b) {
	if (a === b) return
	return a > b ? compareEnum.greaterThan : compareEnum.lessThan
}

function swapDiv(div1, div2) {
	const tmpHeight = div1.style.height
	div1.style.height = div2.style.height
	div2.style.height = tmpHeight
}

export function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time))
}