
const p = new Promise((resolve, reject)=>{
    setTimeout (() => {
        resolve("Promise Resolved Value");
    },10000);
    
});

  async function handlePromise(){
     //JS Engine was waiting for promise to resolve 
      const val = await p;
      console.log ("Namaste JavaScript");
      console.log(val);
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