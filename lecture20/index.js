//this is global space
console.log(this);//globalobject window in browser

function x(){
    console.log(this);
}
x();
// this inside a object's method

//call apply bind methods ( sharing methods)
const student = {
   name : "Shanu" ,
    printName : function(){
console.log(this.name);
    }
}
student.printName();

const student2 ={
    name : "Tanu",
}

student.printName.call(student2);

//this inside arrow function 
const obj ={
    a:10,
    x : () => {
        console.log(this);
    },
};
obj.x();