import { algos } from './sorting_algos.mjs'
import { logBigO, logTime } from './helpers/htmlWork.mjs'
const formElement = document.querySelector('form')
const algoSelector = document.getElementById('algorithms')
const amountInput = document.getElementById('amount')
const sortingDiv = document.getElementById('whole-screen-sort')

formElement.addEventListener('submit', e => {
	e.preventDefault()
	const selectedAlgo = algoSelector.value
	const amountOfNums = amountInput.value
	const unsortedArray = visualizeNumbers(amountOfNums)
	setTimeout(() => {
		selectAndSort(selectedAlgo, unsortedArray)
	}, 500);
})

function visualizeNumbers(amountOfNums) {
	const unsortedArray = generateArray(amountOfNums)

	for (let i = 0; i < unsortedArray.length; i++) {
		const visualNum = document.createElement('div')
		visualNum.setAttribute(
			'style',
			`width: 4px; height:${unsortedArray[i]}px; background-color: red; bottom: 0;`
		)
		visualNum.id = i
		sortingDiv.appendChild(visualNum)
	}
	return unsortedArray;
}

function generateArray(amountOfNums) {
	const max = 600
	const min = 1
	const arr = []
	for (let i = 0; i < amountOfNums; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
	}
	return arr;
}

async function selectAndSort(selectedAlgo, arr){
	const time = await algos[selectedAlgo](arr)
	logBigO(selectedAlgo)
	logTime(time)
}