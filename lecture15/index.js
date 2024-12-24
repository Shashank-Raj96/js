const cart = ["shoes", "pants ", "kurtas"];

//api for creating order
api.createOrder(cart , function(){

//api for payment   
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })

    })

})







