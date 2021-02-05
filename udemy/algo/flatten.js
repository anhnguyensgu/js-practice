function flatten(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        helper(array[i], result);
    }
    return result;
}

function helper(array, result) {
    if (Array.isArray(array)) {
        for(let i = 0 ; i < array.length; i++) {
            helper(array[i], result)
        }
    } else {
        result.push(array)
    }
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));