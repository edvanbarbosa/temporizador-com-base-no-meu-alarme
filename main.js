var hr = document.querySelector('.hr')
var min = document.querySelector('.min')
var seg = document.querySelector('.seg') 
var diaa = document.querySelector('.day')

let music = new Audio("./Alarme_da_samsung(M4A_128K).m4a")



const cronometro = ()=>{
   
    var now = new Date


    const list_ala = [352,0,0,0]


    var hr_rd = now.getHours()
    var min_rd = now.getMinutes()
    var seg_rd = now.getSeconds() 
    var dias_rd = now.getDate()
    
    s_segatual  = (hr_rd*3600)+(min_rd*60)+seg_rd
    s_segala = (list_ala[1]*3600)+(list_ala[2]*60)+list_ala[3]

    var subtr_seg = s_segala - s_segatual

    var result_seg = subtr_seg<0?subtr_seg+86400:subtr_seg

    var segundos = result_seg%60
    var minutos =parseInt((result_seg/60))%60
    var horas = parseInt((result_seg/60)/60)%24

    var mes = now.getMonth()
    var dias = list_ala[0]-( 30*mes  + dias_rd)

    console.log(mes)

    hr.innerHTML = horas>9?horas:'0'+horas
    min.innerHTML = minutos>9?minutos:'0'+minutos
    seg.innerHTML = segundos>9?segundos:'0' + segundos
    diaa.innerHTML = dias>9?dias:'0'+dias


   




}
setInterval(function time(){
    cronometro()
    
},1000)




    