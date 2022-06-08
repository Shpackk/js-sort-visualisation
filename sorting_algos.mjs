import { compareEnum, compareFunc, swap, sleep } from './helpers/misc.mjs'

export const algos = {

	async selection(arr, compare = compareFunc) {
		const start = performance.now()
		const { length } = arr;
		let minIndex;
		for (let i = 0; i < length - 1; i++) {
			minIndex = i;
			for (let j = i; j < length; j++) {
				if (compare(arr[minIndex], arr[j]) === compareEnum.greaterThan) {
					minIndex = j;
				}
			}
			if (i !== minIndex) {
				await sleep(0.5)
				swap(arr, i, minIndex);
			}
		}
		return performance.now() - start
	},

	async bubble(arr, compare = compareFunc) {
		const start = performance.now()
		const { length } = arr
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - 1 - i; j++) {
				if (compare(arr[j], arr[j + 1]) === compareEnum.greaterThan) {
					await sleep(0.5)
					swap(arr, j, j + 1)
				}
			}
		}
		return performance.now() - start
	}
}