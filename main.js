var hr = document.querySelector('.hr')
var min = document.querySelector('.min')
var seg = document.querySelector('.seg') 
var diaa = document.querySelector('.day')

let music = new Audio("./Alarme_da_samsung(M4A_128K).m4a")



const cronometro = ()=>{
   
    var now = new Date()

    var alvo  = new Date(now.getFullYear(), 11, 18)

    var dif = alvo.getTime()-now.getTime()

    let dias = Math.floor(dif / (1000*60*60*24))
    let horas = Math.floor( dif /(1000*60*60*24)%24)
    let minutos = Math.floor((dif /(1000*60*60))%60)
    let segundos = (dif /(1000*60*60*24)/60)

    console.log(dias,horas,minutos,segundos)



}
setInterval(function time(){
    cronometro()
    
},1000)

const ipMes = document.querySelector('.mes')
const ipDia = document.querySelector('.dia')
const pDia = document.querySelector('.dia-number')
const pMes = document.querySelector('.mes-number')
const btn = document.querySelector('.btn')


ipDia.addEventListener('keyup',()=>{
    if (ipDia.value.length <=2 && ipDia.value.length >=1){
        pDia.innerHTML = ipDia.value 
        
    }
    verific()
})
ipMes.addEventListener('keyup',()=>{
    if (ipMes.value.length <=2 && ipMes.value.length >=1){
        pMes.innerHTML = ipMes.value 
        
    }
    verific()
})



let verification = false
const verific = ()=>{

    if(ipDia.value.length > 0){
        if(ipDia.value>31 || ipDia.value<1){
            ipDia.style.background = '#ff000044'
            document.querySelector('.ntd').style.display = 'block'
            verification = false
        }
        else{
            document.querySelector('.ntd').style.display = 'none'
            ipDia.style.background = '#4f4f58c6'
            verification = true
        }
   }

    if(ipMes.value.length > 0){
        if(ipMes.value > 12 || ipMes.value<1){
            ipMes.style.background = '#ff000044'
            document.querySelector('.ntm').style.display = 'block'
            verification = false
        }
        else{
            document.querySelector('.ntm').style.display = 'none'
            ipMes.style.background = '#4f4f58c6'
            verification = true
        }
    }
    
   
    

}
btn.addEventListener('click',()=>{
    if(verification){
        window.location.href = './calc.html'
    }
    
})






    