const items = [
	{name: 'Bike', price:100},
	{name: 'TV', price:200},
	{name: 'Album', price:10},
	{name: 'Book', price:5},
	{name:'Phone', price:500},
	{name: 'Computer', price:1000},
	{name:'Keyboard', price:25}
]


const filteredItem = items.filter((item) => {
	return item.price <= 100;
})

console.log(filteredItem);

const itemsName = items.map((item) => {
	return item.name;
})

console.log(itemsName);


const foundItem = items.find((item) => {
	 return item.name === 'Book'
})

console.log(foundItem);

items.forEach((item) => {
	console.log(item.price);
})

const hasInexpensiveItems = items.some((item) => {
	return item.price < 100;
})

console.log(hasInexpensiveItems)


const hasInexpensivItems = items.every((item) => {
	return item.price <= 100;
})

console.log(hasInexpensivItems)


const total = items.reduce((currentTotal, item ) => {
	return item.price + currentTotal;
},0)

console.log(total)


const itemsArray = [1,2,3,4,5];

const includesTwo = items.includes(7);

console.log(includesTwo);