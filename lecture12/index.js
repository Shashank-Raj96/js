// What is a Callback Function in JavaScript


setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});