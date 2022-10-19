function solve(arr, type) {
	return type === "asc"
		? arr.sort((a, b) => a - b)
		: arr.sort((a, b) => b - a);
}

console.log(solve([10, 9, 8, 7, 6, 5], 'desc'));
