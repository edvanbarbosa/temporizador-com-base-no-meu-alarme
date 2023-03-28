var hr = document.querySelector('.hr')
var min = document.querySelector('.min')
var seg = document.querySelector('.seg') 

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

    hr.innerHTML = horas
    min.innerHTML = minutos
    seg.innerHTML = segundos
    if(horas < 10){
        hr.innerHTML = '0' + horas;
        if(minutos < 10){
            min.innerHTML = '0' + minutos;
            if(segundos < 10){
                seg.innerHTML = '0' + segundos; 
            } 
        } 
    }




}
setInterval(function time(){
    cronometro()
},1000)




    