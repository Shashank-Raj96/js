//this is global space
console.log(this);//globalobject window in browser

function x(){
    console.log(this);
}
x();
// this inside a object's method
const obj = {
    a:10,
    x:function(){
console.log(this.a);
    }
}
obj.x();