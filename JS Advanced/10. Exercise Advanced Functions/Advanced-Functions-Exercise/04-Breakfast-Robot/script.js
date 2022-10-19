function solution(params) {
	let store = {
		protein: 0,
		carbohydrate: 0,
		fat: 0,
		flavour: 0,
	};

	let recipesEnum = {
		apple: { carbohydrate: 1, flavour: 2 },
		lemonade: { carbohydrate: 10, flavour: 20 },
		burger: { carbohydrate: 5, fat: 7, flavour: 3 },
		eggs: { protein: 5, fat: 1, flavour: 1 },
		turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
	};

	return function inputHandler(input) {
		let actionHandler = command();
		let [cmd, macroElement, quantity] = input.split(' ');
		return actionHandler[cmd](macroElement, quantity);
	};

	function command() {
		return {
			restock: (macroElement, quantity) => {
				store[macroElement] = store[macroElement] + Number(quantity);
				return 'Success';
			},
			prepare: (recipe, quantity) => {
				let isDone = true;
				let str = '';
				let copyStore = JSON.parse(JSON.stringify(store));
				for (let [key, defaultQnt] of Object.entries(recipesEnum[recipe])) {
					let valueNeeded = Number(quantity) * defaultQnt;
					if (store[key] < valueNeeded) {
						isDone = false;
						str = `Error: not enough ${key} in stock`;
						break;
					}
					copyStore[key] -= valueNeeded;
				}
				if (!isDone) {
					return str;
				}
				store = copyStore;
				return 'Success';
			},
			report: () => {
				return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
			},
		};
	}
}

let manager = solution();
console.log(manager('restock flavour 50')); // Success
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Error: not enough carbohydrate in stock
console.log(manager('restock flavour 10')); // Error: not enough carbohydrate in stock
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10')); // Error: not enough carbohydrate in stock
console.log(manager('prepare burger 1')); // Error: not enough carbohydrate in stock
console.log(manager('report'));
