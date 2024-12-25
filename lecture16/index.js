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

const GITHUB_API = "https://github.com/Shashank-Raj96"

 const user = fetch(GITHUB_API);

 console.log(user);