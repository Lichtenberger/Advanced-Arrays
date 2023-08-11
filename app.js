let arr = [1,2,3];

arr.forEach(function(value, index, array) {
    console.log(value);
});  //1, 2, 3, undefined

function forEach(array, callback) {
    for(let 1 = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

function countZeros(arr) {
    let total = 0;
    arr.forEach(function(val){
        if(val === 0) {
            total++;
        }
    })
    return total;
}

countZeros([2,4,6]); // 0
countZeros([0,1,2,0,1]); // 2