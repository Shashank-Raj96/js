//Debouncing in JS
let counter =0;
// const getData = () => {
//     console.log("fetching Data ..",counter++);
// }

async function getData(){
 let data = await fetch("https://jsonplaceholder.typicode.com/posts")
 data = await data.json()
 console.log(data)
 return data
}
const debounce = function (fn,d) {
    let timer;
    return function (){
      
        clearTimeout(timer);
        //return hash value
        timer= setTimeout(() =>{
          console.log( fn())
        },d);
    }
}
const betterFunction = debounce(getData, 300);