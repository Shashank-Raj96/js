console.log("start");

setTimeout(function(){
    console.log("callback");
},5000);

console.log("end");

//millions of lines

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 1000){
    endDate = new Date().getTime();
}
console.log("while expire");