// const cart = ("shoes" , "pants" , "kurtas");

// createOrder(cart , function(){
//     proceedToPayment(orderId);
// });//orderId

// const promise = createOrder(cart);

// // promise = (data : undefined {empty})

// promise.then(function(){
//     proceedToPayment(orderId);
// });//orderId);

// to make an API call to github server and we will get the user info

// const cart = ["shoes", "pants ", "kurtas"];

// //api for creating order
// api.createOrder(cart , function(){

// //api for payment   
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWallet()
//         })

//     })

// })

// write this above code through promises

createOrder(cart)
.then(function(orderId){
 return proccedToPayment(orderId)
 
})
.then(function(paymentInfo){
 return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo);
  })