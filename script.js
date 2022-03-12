const items = [
    {name:'Bike'     , price: 100},
    {name:'TV'       , price: 200},
    {name:'Album'    , price: 10},
    {name:'Book'     , price: 5},
    {name:'Phone'    , price: 500},
    {name:'Computer' , price: 1000},
    {name:'Keyboard' , price: 25},
]

const numbers = [1,2,3,4,5]



console.log('------------FIND (Select property match)------------------');
const findItem = items.filter((item) => {
    return item.name === "Book"
})
console.log(findItem);

console.log('------------FOREACH (Display Name)------------------');
items.forEach((item) => {
    console.log(item.name);
})

console.log('------------REDUCE ( ADD TOTAL )------------------');
const total = items.reduce((currentTotal,item) => {
    return currentTotal + item.price
},0)
console.log(total);

console.log('----Includes ( Check if array has this value or string )------');
const includesTwo = numbers.includes(7)
console.log(includesTwo);
console.log('------------------------------');


console.log('------------BASIC FOR LOOP------------------');
for(var i = 0; i < items.length; i++){
    console.log(items[i]);
}
for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
