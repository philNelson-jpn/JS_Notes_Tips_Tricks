function arrayToObject<T>(array: [string, T]) {
	const obj: {
		[index: string]: T
	} = {}
	array.forEach(([key, value]) => {
		obj[key] = value
	})

	return obj
}
const arr: [string, number | boolean][] = [
	['keyOne', 1],
	['keyTwo', 2],
	['keyThree', true],
]
