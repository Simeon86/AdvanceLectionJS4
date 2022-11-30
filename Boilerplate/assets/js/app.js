alert ('Hello from app.js');

console.log('write in console');

var number = 1;
var string = 'string';
var undefined = undefined;
var booleanVariable = true;
var emtyObj = null;
var fn = function() {}

var arr = [];
var obj = {};

// ARRAY

// [1,2,3,4,5] - masiv
//  0 1 2 3 4 - index 

// var testArr = [1,2,3,4,5]
// console.log(testArr)

// var testArr = [1,2,3,4,5]
// console.log(testArr[3])

// var testArr = [1,2,3,4,5]
// console.log(testArr[30])

// var testArr = [1,2,3,4,5]
// testArr[10] = 11 // add value
// console.log(testArr)

// testArr[10] = 12 //overwrite
// console.log(testArr)

// testArr.push(13);
// console.log(testArr)

// testArr.push(14);
// console.log(testArr)

// testArr.push(15);
// console.log(testArr)
// console.log(testArr.pop())
// console.log(testArr)

// testArr.push(15);
// console.log(testArr)
// var x = (testArr.pop())
// var s = (testArr.shift())
// console.log(testArr)

// testArr.pop();
// console.log(testArr)

// testArr.shift();
// console.log(testArr)

// testArr.push(15);
// console.log(testArr)
// console.log(testArr.shift())
// console.log(testArr)

// console.log(testArr.length)
// console.log(testArr[testArr.length - 1])

// testArr.push('Hello World');
// console.log(testArr)

// console.log(testArr[testArr.length - 1])

// testArr.push([]);
// console.log(testArr)

// testArr.push([1,2,3,4,5]);
// console.log(testArr)

// console.log(testArr[12][2])

// OBJECT

var testObj = {
    name: 'John',
    lastName: 'Doe',
    'last-name': 'Doe',
    obj: {
        test: 1,

    },
    arr: [1,2,3,4,5, {
        new: true
    }, function() {
        alert('ARRAY')
    }],
    func: function() {
        alert('HELLOO')
    }
}

console.log(testObj)
console.log(testObj['name'])
console.log(testObj.name)
console.log(testObj.last-name)
console.log(testObj['last-name'])
console.log(testObj.arr[5].new)
console.log(testObj.func())

testObj.testProp = 123;
console.log(testObj)

console.log(testObj.arr[6]())

// delete testObj.testProp;
// console.log(testObj)

////////////////////////////

var person = {
    name: 'John',
    lastName: 'Doe',
    age: 36,
    gender: 'male',
    h: 189,
    w: 100,
    city: 'New York',
    phone: '35988888888',
    address: 'Ave Str. 156',
    job: {
        title: 'IT Spec.'
    },
    funct: function() {
        alert('BAY')
    },
    functi: function() {
        return 5;
    },
    functio: function() {
        return this;
    },
    function: function() {
        return this.age;
    },
    functionA: function() {
        return this.name + ' is ' + this.age + 'y old.';
    },
    functionB: function() {
        return this.name + ' lives at this address ' + this.address;
    }
    
}

console.log(person.job.title)
person.funct(); 
console.log(person.functi());

console.log(person.functio())

console.log(person.function())

console.log(person.functionA())

console.log(person.functionB())

var str1 = 'Hello';
var str2 = ' John';
var str3 = str1 + str2;
console.log(str3)