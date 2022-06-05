import { compareEnum, compareFunc, swap, sleep } from './helpers/misc.mjs'


export async function bubbleSort(arr, compare = compareFunc) {
	const { length } = arr
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - 1 - i; j++) {
			if (compare(arr[j], arr[j + 1]) === compareEnum.greaterThan) {
				await sleep(10)
				swap(arr, j, j + 1)
			}
		}
	}
	return arr
}
