function stringifyNumbers(object) {
    let result = {};
    function helper(e, k) {
        if(typeof e === 'number') {
            result[k] = e + '';
        } else if(typeof e === 'object') {
            for(let key in e) {
                helper(e[key], key);
            }
        } else {
            result[k] = e;
        }
    }

    helper(object);
    return result;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
