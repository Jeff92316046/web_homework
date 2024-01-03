function init(){
    var temp1 = document.getElementById("a")
    var temp2 = document.getElementById("b")
    var temp3 = document.getElementById("c")
    var ltemp1 = localStorage.getItem("name")
    var ltemp2 = localStorage.getItem("point50")
    var ltemp3 = localStorage.getItem("time50") 
    var ltemp4 = localStorage.getItem("pointword")
    var ltemp5 = localStorage.getItem("timeword") 
    if(ltemp1 == null){
        temp1.innerHTML = "訪客!感謝使用本網站"
    }else{
        temp1.innerHTML = ltemp1+"!感謝使用本網站"
    }
    if(ltemp2 == null){
        temp2.innerHTML = "尚未作答50音測驗"
    }else{
        temp2.innerHTML = "50音測驗耗時:"+ltemp3+"秒,分數:"+ltemp2
    }
    if(ltemp4 == null){
        temp3.innerHTML = "尚未作答單字測驗"
    }else{
        temp3.innerHTML = "單字測驗耗時:"+ltemp5+"秒,分數:"+ltemp4
    }
}