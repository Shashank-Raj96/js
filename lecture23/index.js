// const arr = [5 , 1 , 3 , 2 , 6];

// //Double = [10 , 2 , 6 , 4 , 12];

// //triple = [15 , 3 , 9 , 6 , 18];

// // Binary = ["101" , "1" , "11", "10" , "110"];

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// // const output = arr.map(triple);
// // console.log(output);

// function binary(x){
//     return x.tostring(2);
// }

//  const output = arr.map(binary);
//  console.log(output);

// filter

 //const arr = [ 5,1,3, 2, 6];
// //filter even values

// function isEven(x){
//     return x % 2 == 0;
// }
//  const output = arr.filter(isEven);

//  console.log(output);

//Reduce

const arr = [ 5,1,3, 2, 6];

//sum or max
 function findsum(arr){
    let sum =0;
    for (let i =0; i<arr.length ; i++){
        sum = sum +arr[i];
    }
    return sum;
 }
 console.log(findSum(arr));

 const output = arr.reduce(function(acc , curr){
acc = acc + curr;
return acc;
 } );