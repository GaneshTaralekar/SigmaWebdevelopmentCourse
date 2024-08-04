let arr = [10,20,30,66,10,45,88,100,5,89,98]
// function add(x){
//    return x+1

// }
// let newarr = arr.map(add)

// console.log(newarr)

// console.log("HIIi")
// let max =0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }

// }
// console.log(max)

// function lessthen(x){
//    if(x%2!=0){
//     return x
//    }

// }

// let newval = arr.map(lessthen)
// console.log(newval)
// let newarr = arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr
//     }
//     return acc

// },0)

// console.log(newarr)

// const student=[
//     {
//         firstname:'ganesh',
//         rollnumber:11
//     } ,
//      {
//         firstname:'ganesh',
//         rollnumber:22
//     },
//     {
//         firstname:'ganesh',
//         rollnumber:11
//     },
//     {
//         firstname:'ganesh',
//         rollnumber:11
//     },
//     {
//         firstname:'ganesh',
//         rollnumber:22
//     }

// ]
// function printn(x){
//     return x
// }
// function printn(x){
//     if(x.rollnumber>1){
//         return x 
//     }
// }

// let stt = student.reduce(function(acc,curr){
//     if(acc[curr.rollnumber]){
//         acc[curr.rollnumber] = acc[curr.rollnumber]+1;
//     }
//     else{
//         acc[curr.rollnumber]=1;
//     }

//     return acc

// },{})

// console.log(stt)

// let news = student.filter(function(x){
// if(x.rollnumber==22){
//     return x

// }

// }).map((x)=>x.firstname)

// console.log(news)
