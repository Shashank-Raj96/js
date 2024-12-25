const cart = [ "shoes" , "pants" , "kurtas"];

const promise = createOrder(cart);//orderId

promise.then(function(orderId){
    console.log(orderId);
   // proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
})

/// producer part of the code

function createOrder(cart){

    const pr = new promise(function(resolve , reject){
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "12345";
        if(orderId){
            resolve(orderId);
        }
    });
    return pr;
}

function validateCart(cart){
    return true;
}