const arr = [5 , 1 , 3 , 2 , 6];

//Double = [10 , 2 , 6 , 4 , 12];

//triple = [15 , 3 , 9 , 6 , 18];

// Binary = ["101" , "1" , "11", "10" , "110"];

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

const output = arr.map(triple);
console.log(output);