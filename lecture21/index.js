//Debouncing in JS
let counter =0;
const getData = () => {
    console.log("fetching Data ..",counter++);
}

const doSomeMagic = function (fn,d) {
    let timer;
    return function (){
        let context = this,
        args = arguments ;
        clearTimeout(timer);
        timer= setTimeout(() =>{
            getData.apply(context,arguments);
        },d);
    }
}
const betterFunction = dosomething(getData, 300);