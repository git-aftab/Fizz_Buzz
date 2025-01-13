// write a js function to replace multiples of 3 with "Fizz" , 5 with "Buzz" and  multiples of 3&5 with "FizzBuzz".

function fizzBuzz(n){
    for(let i = 1; i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }else if(i%5==0){
            console.log("Buzz")
        }else if(i%3==0 ){
            console.log("Fizz")
        }else{
            console.log(i)
        }
    }
    console.log("__________________")
}

fizzBuzz(10)
fizzBuzz(50)