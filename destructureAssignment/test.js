let saleries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let topSalery = (salaries) => {
    let top = 0, answer = null;
    for(let [key, value] of Object.entries(salaries)) {
        // alert(`${key}: ${value}`);
        if(value > top) {
            top = value;
            answer = key;
        }
    }
    return answer;
}

console.log(topSalery(saleries));