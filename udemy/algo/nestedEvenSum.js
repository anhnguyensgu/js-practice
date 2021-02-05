function nestedEvenSum (obj) {
    if (typeof obj === 'number') {
        return obj % 2 === 0 ? obj : 0;
    }

    if(typeof obj === 'object' ) {
        let sum = 0;
        for (var key in obj) {
            sum += nestedEvenSum(obj[key]);
        }
        return sum;
    }

    return 0;
}
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

  var obj3 = {
    a: [1,2,4]
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10
  console.log(nestedEvenSum(obj3)); // 10