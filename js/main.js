let elDropDownHead = document.querySelector(".dropdown__heading")
let elDropDownHideContent = document.querySelector(".dropdown__hide-content")
let elLine2 = document.querySelector("line2")

elDropDownHead.addEventListener("click" , function(e){
    elDropDownHideContent.classList.toggle("show")
    elLine2.classList.toggle("rotate")
})

