const cal=(num1,num2,callback)=>{
return(callback(num1,num2))
}

function callback(num1,num2){
    return num1+num2
}

const result = cal(3,4,callback)
console.log(result);