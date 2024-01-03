var animal_word_jp = ["ねこ","とり","うし","いぬ","ひつじ"]
var animal_word_ch = ["貓","鳥","牛","狗","羊"]
function generate_question(){
    var questionstr = ""
    questionstr += "<li>"
    questionstr += "<div class='animal1'>請問"+"貓"+"的日文是什麼</div><div class='mt-2 d-flex '>"
    questionstr += "<div class='form-check m-1'>"
    questionstr += "<input class='form-check-input' type='radio' name='animal1' id='animal11' value='1'>"
    answer[0] = 1
    questionstr += "<label class='form-check-label' id='animal_label11' for='animal11'>"+"ねこ"+"</label></div>"
    questionstr += "<div class='form-check m-1'>"
    questionstr += "<input class='form-check-input' type='radio' name='animal1' id='animal12' value='2'>"
    questionstr += "<label class='form-check-label' id='animal_label12' for='animal12'>"+"あめ"+"</label></div>"
    questionstr += "<div class='form-check m-1'>"
    questionstr += "<input class='form-check-input' type='radio' name='animal1' id='animal13' value='3'>"
    questionstr += "<label class='form-check-label' id='animal_label13' for='animal13'>"+"いぬ"+"</label></div>"
    questionstr += "<img style='display:none;' src='x.png' id='animal_ox1'></li>"

    questionstr += "<li>"
    questionstr += "<div class='animal2'>請問"+"狗"+"的日文是什麼</div><div class='mt-2 d-flex '>"
    questionstr += "<div class='form-check m-1'>"
    questionstr += "<input class='form-check-input' type='radio' name='animal2' id='animal21' value='1'>"
    answer[1] = 1
    questionstr += "<label class='form-check-label' id='animal_label21' for='animal11'>"+"いぬ"+"</label></div>"
    questionstr += "<div class='form-check m-1'>"
    questionstr += "<input class='form-check-input' type='radio' name='animal2' id='animal22' value='2'>"
    questionstr += "<label class='form-check-label' id='animal_label22' for='animal12'>"+"うま"+"</label></div>"
    questionstr += "<div class='form-check m-1'>"
    questionstr += "<input class='form-check-input' type='radio' name='animal2' id='animal23' value='3'>"
    questionstr += "<label class='form-check-label' id='animal_label23' for='animal13'>"+"うし"+"</label></div>"
    questionstr += "<img style='display:none;' src='x.png' id='animal_ox2'></li>"


    questionstr += "<li>"
    questionstr += "<div class='animal3'>請問"+"羊"+"的日文是什麼</div><div class='mt-2 d-flex '>"
    questionstr += "<div class='form-check m-1'>"
    questionstr += "<input class='form-check-input' type='radio' name='animal3' id='animal31' value='1'>"

    questionstr += "<label class='form-check-label' id='animal_label31' for='animal31'>"+"ひかり"+"</label></div>"
    questionstr += "<div class='form-check m-1'>"
    questionstr += "<input class='form-check-input' type='radio' name='animal3' id='animal32' value='2'>"
    questionstr += "<label class='form-check-label' id='animal_label32' for='animal32'>"+"とり"+"</label></div>"
    questionstr += "<div class='form-check m-1'>"
    questionstr += "<input class='form-check-input' type='radio' name='animal3' id='animal33' value='3'>"
    questionstr += "<label class='form-check-label' id='animal_label33' for='animal33'>"+"ひつじ"+"</label></div>"
    answer[2] = 3
    questionstr += "<img style='display:none;' src='x.png' id='animal_ox3'></li>"
    document.getElementById("questionlist").innerHTML = questionstr
    timerId = setInterval(timer,1000)
    document.getElementById("startbtn").disabled = true
    document.getElementById("summitbtn").setAttribute("style","display:block")
}   
var answer = []
var count = 20;
var timerId 
 function timer() {
    count--; 
    document.getElementById("timer").innerHTML = "計時 : "+count
    if (count == 0){
        clearInterval(timerId)
        answer_check()
    } 
 }
 var point = 0
 function answer_check(){
    clearInterval(timerId)
    document.getElementById("summitbtn").disabled = true
    for(var i=0;i<3;i++){
        var temp_answer = document.querySelector('input[name="animal'+(i+1)+'"]:checked');
        var ox_temp = document.getElementById("animal_ox"+(i+1))
        if(temp_answer == null){
            ox_temp.src = "x.png"
            ox_temp.setAttribute('style','width:30px;display:inline')
        }else{
            if(answer[i] == temp_answer.value){
                ox_temp.src = "o.png"
                ox_temp.setAttribute('style','width:30px;display:inline')
                point += 33
            }else{
                ox_temp.src = "x.png"
                ox_temp.setAttribute('style','width:30px;display:inline')
            }
        }

    }
    if(point == 99 ){
        point += 1
    }
    document.getElementById("point").innerHTML = "分數 : " + point

    localStorage.setItem("pointword",point)
    localStorage.setItem("timeword",20-count)
 }

 function init(){
    if(localStorage.getItem("name") == null){
        document.getElementById("name").innerHTML = "訪客"
    }else{
        document.getElementById("name").innerHTML = localStorage.getItem("name")
    }
    
}