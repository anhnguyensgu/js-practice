function someRecursive(array, checkFunction){
    return helper(array, checkFunction, 0)
}

function helper(array, checkFunction, index) {
    if(index < array.length) {
        return checkFunction(array[index]) || helper(array, checkFunction, index + 1);
    }
    return false;
}

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false