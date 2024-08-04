// let ele = document.body.firstElementChild.outerHTML
// let ele = document.body.firstElementChild.firstElementChild.outerHTML
//  document.body.firstElementChild.firstElementChild.innerHTML="<h1>hello Ganesh</h1>"
// let ele = document.body.firstElementChild.firstElementChild.tagName
// let ele = document.body.firstElementChild.firstElementChild.firstElementChild.tagName
let div = document.createElement("div")
div.innerHTML="<h1>Good morning ganesh</h1>"
document.body.firstElementChild.firstElementChild.append(div)
document.body.firstElementChild.classList.add('sana')
// console.log(ele)

// document.body.firstElementChild.firstElementChild.replaceWith(div)

// document.body.firstElementChild.firstElementChild.insertAdjacentHTML("beforeend","<br>HIIIII</b>")

// document.body.firstElementChild.firstElementChild.insertAdjacentElement("afterbegin",div)

