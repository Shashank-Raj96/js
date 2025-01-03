
const p1 = new Promise((resolve, reject)=>{
    setTimeout (() => {
        resolve("Promise Resolved Value");
    },5000);
    
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout (() => {
        resolve("Promise Resolved Value");
    },10000);
    
});

  async function handlePromise(){
     //JS Engine was waiting for promise to resolve 
      const val1 = await p1;
      console.log ("Namaste JavaScript");
      console.log(val1);


  const val2 = await p2;
  console.log ("Namaste JavaScript 2");
  console.log(val2);
}
handlePromise();

// function getData(){
//     //JS engine will not wait for promiose to resolve and it will print JS
//     p.then((res)=>console.log(res));
//     console.log("Namaste JavaScript");
// }
// getData();
// async function getData(){
//     return p;

// }
// const dataPromise = getData();

// dataPromise.then((res)=> console.log(res));