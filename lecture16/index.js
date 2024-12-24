const cart = ("shoes" , "pants" , "kurtas");

createOrder(cart , function(){
    proceedToPayment(orderId);
});//orderId

const promise = createOrder(cart);

// promise = (data : undefined {empty})

promise.then(function(){
    proceedToPayment(orderId);
});//orderId);