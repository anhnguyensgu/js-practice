const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(e) {
    const result = [];
    helper(e, result);
    return result;
}

function helper(e, result) {
    if(typeof e === 'string') {
        result.push(e);
    }
    
    if(typeof e === 'object') {
        for(let k in e) {
            helper(e[k], result);
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])