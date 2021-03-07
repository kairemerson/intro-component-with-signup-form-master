
//alterar a imagem de acordo com o tamanho da tela
var img = document.querySelector("#bg-desktop")
window.onresize = function(){
    loadImg()
}
window.onload = function(){
    loadImg()
}
function loadImg(){
    if(screen.availWidth < 760){
        img.src = "./images/bg-intro-mobile.png"
    }else{
        img.src = "./images/bg-intro-desktop.png"
    }
}

//evento para tratar o formulario
let submit = document.querySelector("button")
submit.addEventListener("click", function(event){
    event.preventDefault()
    let input = document.querySelectorAll("input")
    input.forEach(function(element){
        var p = element.nextElementSibling
        if(element.value.length == 0){
            element.classList.add("error")
            p.classList.remove("msg-erro")
            if(element.getAttribute("placeholder") == "Email Address" || element.getAttribute("placeholder") == "email@exemplo.com"){
                element.setAttribute("placeholder", "email@exemplo.com")               
            }else{
                element.setAttribute("placeholder","")
            }
            
        }else{
            element.classList.remove("error")
            p.classList.add("msg-erro") 
        }
    })
})
