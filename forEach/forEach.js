const colors = ['teal', 'red', 'blue', 'purple', 'black']

 colors.forEach(yell);

 function yell(val, i) {
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps}`);
 };

 colors.forEach(yell);


 const prices = [30.99, 19.99, 2.50, 99];
 let total = 0;
 prices.forEach(function(price){
    total += price;
 });
 console.log(total);

 function forEach(arr,callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
 }

 forEach(colors, function(color, i) {
    console.log(color.toUpperCase(), 'at index of [i]')
 })


