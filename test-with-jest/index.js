const add = (a, b) => {
    return a + b;
}

const err = () => {
    throw new Error('I am an error', err);
}

const arr = () => {
    return ['Bat'];
}

const promiseTest = (a, b) => {

    return new Promise((resolve, reject) => {
    if(a - b > 0) {
        resolve ('Positive');
    }
    else {
        reject('Negative');
    }
    });
}



// Given an array arr of n integers, task is to print the array in the order – smallest number, largest number, 2nd smallest number, 2nd largest number, 3rd smallest number, 3rd largest number and so on.
function ofArr(n){
    let newarr = n.sort((a, b) => a-b)
    let result = []; 

    for(i = 0; i < newarr.length; i++){

        if(newarr[0] < newarr.length-1){
            result.push(n[i]);
        }
        // else if(n[i] > n[i + 1]){
        //     result.push(n[i + 1]);
        // }
    }
    
}
console.log(ofArr([1,2,3,4,5,6,7,8,9,10]));




  

module.exports = {
    add,
    err,
    arr,
    promiseTest,
    app
}