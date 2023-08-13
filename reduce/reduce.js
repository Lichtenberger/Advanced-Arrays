const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
arr.reduce(function(arr, val) {
    return arr.name[val];
});

function vowelCount(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = [];
    str.reduce(function(acc,cur) {
        if(acc === vowel) {
            count += `vowel + j++`;
        }
    })
}

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

addKeyAndValue(arr, 'title', 'Instructor') //
    arr.reduce(function(accum, next)) {
        return accum('.title' + '.name');
    }
[
  {title: 'Instructor', name: 'Elie'},
  {title: 'Instructor', name: 'Tim'},
  {title: 'Instructor', name: 'Matt'},
  {title: 'Instructor', name: 'Colt'}
]


function isEven(val){
    return val % 2 === 0;
  }
  
  const arr = [1,2,3,4,5,6,7,8];
  
  partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
  
  function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }
  
  const names = ['Elie', 'Colt', 'Tim', 'Matt'];
  
  partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]