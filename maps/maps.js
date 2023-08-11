 let numbers = [1, 2, 3];

 numbers.map(function (value, indexm array) {
    return value * 10;
 }); //returns [10, 20, 30]

 const numbers = [21, 37, 64, 99, 142];
 const negatives = numbers.map(function (num) {
    return num * -1;
 });

 const double = numbers.map(function(num) {
     console.log(num * 2);
 });

 const toDos = [{
     id: 1, 
     text: 'walk the dog',
     priority: 'high' }, 
 {
     id: 2,
     text: 'walk the chickens',
     priority: 'medium'},
 {
     id: 3,
     text: 'feed the cats',
     priority: 'low'},
 {
     id: 4,
     text: 'put out the fire in my garage',
     priority: 'Very High'}];

 const toDoText = toDos.map(function(toDos) {
     return toDos.text;
 })

 const links = Array.from(document.querySelectorAll('a'));
 const urls = links.map(function(a) {
     return a.href;
 });

function myMap(arr, callback) {
    const mappedArray = [];
    for(let i = 0; i < arr.length; i++) {
        const val = callback(arr[i], i, arr);
        mappedArray.push(val);
    }
    return mappedArray;
};

const priorityMap = myMap(toDos, function(todo) {
    return todo.priority;
});

const repeatedStrings = myMap(['a','b','c','d','e'], function(str, idx) {
    return str.repeat(idx);
})