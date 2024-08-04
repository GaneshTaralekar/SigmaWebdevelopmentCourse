let btn3 = document.getElementById('btn')
// let btn1 = document.getElementsByClassName('box')
// let btn2 = document.getElementByClassName('container')
let btn2 = document.getElementById('container')
let a = document.querySelector('.box')

// btn.addEventListener("click",(e)=>{
//     document.body.style.backgroundColor="red"
// })

// document.body.addEventListener("keydown",(e)=>{
//     console.log(e.key)
// })

a.addEventListener('click',(e)=>{
    // alert("box is clicked")
    document.body.style.backgroundColor='blue'
})


btn2.addEventListener("click",(e)=>{

    
    alert("container is clicked")

    document.body.style.backgroundColor='green'
})


btn3.addEventListener("click",(e)=>{

    alert("button is clicked")
    document.body.style.backgroundColor='pink'
})


btn2.removeEventListener('click',()=>{
    console.log("removed")
})

// console.log(btn1)
// btn1.style.backgroundColor='red'
// document.body.style.backgroundColor='red'
