
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

