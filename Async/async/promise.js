'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log("doing something...");
    setTimeout(() => {
        // resolve('ellie'); // callback function
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
}); // 성공하든 실패하든 상관없이 호출되는 아이이다.

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));
// then은 값을 바로 전달해도 되고 Promise를 전달해도 된다.

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });
const friedEgg = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => friedEgg`), 1000);
    });

getHen() 
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    .then(friedEgg)
    .then(console.log)
    .catch(console.log);