function arrSum(arr) {
    if(arr.length === 0) return 0;
    return arr[0] + arrSum(arr.slice(1));    
}
let answer = arrSum([1, 2, 3, 4, 5]);
console.log(answer);