//hof -> high order functions
// Functions that took other functions as parameter

//map, filter, reduce

//Given an array, if there is any odd number or not
//l = [10, 12, 14, 8] => false
//l = [10,12,14,8,9] =>True

let l = [10,12,9,7]

l2 = l.map(
    (elem) => elem*elem
)

console.log(l2)

l3 = l.filter(
    (elem) => elem %2 ==0
)

console.log(l3)

x = l.reduce(
    (acc, elem)=> {
        if(elem %2 ==0 ) return acc = acc+1;
        else return acc;
    }, 5
)
console.log(x)

//EVENTS, EVENT LISTENERS
document.get