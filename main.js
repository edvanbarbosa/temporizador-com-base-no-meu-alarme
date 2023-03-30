var hr = document.querySelector('.hr')
var min = document.querySelector('.min')
var seg = document.querySelector('.seg') 

let music = new Audio("./Alarme_da_samsung(M4A_128K).m4a")



const cronometro = ()=>{
   
    var now = new Date


    const list_ala = [5,35,0]


    var hr_rd = now.getHours()
    var min_rd = now.getMinutes()
    var seg_rd = now.getSeconds()  
    s_segatual  = (hr_rd*3600)+(min_rd*60)+seg_rd
    s_segala = (list_ala[0]*3600)+(list_ala[1]*60)+list_ala[2]

    var subtr_seg = s_segala - s_segatual

    var result_seg = subtr_seg<0?subtr_seg+86400:subtr_seg

    var segundos = result_seg%60
    var minutos =parseInt((result_seg/60))%60
    var horas = parseInt((result_seg/60)/60)

    console.log(horas,minutos,segundos)

    hr.innerHTML = horas>9?horas:'0'+horas
    min.innerHTML = minutos>9?minutos:'0'+minutos
    seg.innerHTML = segundos>9?segundos:'0' + segundos
    var button = document.querySelector("button")

    button.addEventListener('click',()=>{
        music.play()
        
    })


   




}
setInterval(function time(){
    cronometro()
    
},1000)




    