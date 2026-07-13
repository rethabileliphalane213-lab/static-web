const mode=document.getElementById('mode')
const body = document.body
let on=false
function lightOrDark(){
    on=!on
    if(on){
       body.style.backgroundColor="black" 
       body.style.color="white"
}else{
     body.style.backgroundColor="white" 
       body.style.color="black"
}
}

mode.addEventListener("click",()=>{
    lightOrDark()
})