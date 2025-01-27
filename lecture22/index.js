function fetchData(){
    console.log("hello india")
}

function throtle(fn,t){
    let timer=true;
    return function(){
        if(timer){
            timer=false
            setTimeout(function(){
                fn()
                timer=true
            },t)
        }
    }
}

const betterfunction = throtle(fetchData,300)