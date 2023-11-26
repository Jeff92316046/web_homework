let onlyradio_element = document.getElementsByClassName("onlyradio")
let onlyradio_correct_answer = 0
let onlyradio_answer = 1;
let multcheckbox1_element = document.getElementsByClassName("multcheckbox1")
let multcheckbox1_correct_answer = [1,0,1,0]
let multcheckbox1_answer = [0,0,0,0];
let multcheckbox2_element = document.getElementsByClassName("multcheckbox2")
let multcheckbox2_correct_answer = [0,1,1,0]
let multcheckbox2_answer = [0,0,0,0];
let onlyselect1_element = document.getElementsByClassName("onlyselect1")
let onlyselect1_correct_answer = 1
let onlyselect1_answer = 0;
let onlyselect2_element = document.getElementsByClassName("onlyselect2")
let onlyselect2_correct_answer = 2
let onlyselect2_answer = 0;
let multselect1_element = document.getElementsByClassName("multselect1")
let multselect1_correct_answer = [1,0,1,0]
let multselect1_answer = [0,0,0,0];
let multselect2_element = document.getElementsByClassName("multselect2")
let multselect2_correct_answer = [1,0,0,1]
let multselect2_answer = [0,0,0,0];
let thoughts_element = document.getElementsByClassName("thoughts")
let thoughts_content = ""
function onlyradio(n){
    onlyradio_answer = n;
}
function multcheckbox1(){
    for(let i=0;i<multcheckbox1_answer.length;i++){
        if(multcheckbox1_element[i+1].checked){
            multcheckbox1_answer[i] = 1
        }else{
            multcheckbox1_answer[i] = 0
        }
    }
}
function multcheckbox2(){
    for(let i=0;i<multcheckbox2_answer.length;i++){
        if(multcheckbox2_element[i+1].checked){
            multcheckbox2_answer[i] = 1
        }else{
            multcheckbox2_answer[i] = 0
        }
    }
}
function onlyselect1(){
    onlyselect1_answer = onlyselect1_element[1].value
}
function onlyselect2(){
    onlyselect2_answer = onlyselect2_element[1].value
}
function multselect1(){
    for(let i=0;i<multselect1_answer.length;i++){
        if(multselect1_element[1].options[i].selected){
            multselect1_answer[i] = 1
        }else{
            multselect1_answer[i] = 0
        }
    }
}
function multselect2(){
    for(let i=0;i<multselect2_answer.length;i++){
        if(multselect2_element[1].options[i].selected){
            multselect2_answer[i] = 1
        }else{
            multselect2_answer[i] = 0
        }
    }
}
function thoughts(){
    thoughts_content = thoughts_element[1].value
}
function answer_check(){
    if(onlyradio_answer == onlyradio_correct_answer){
        onlyradio_element[4].src = "o.png"
        onlyradio_element[4].setAttribute('style','width:30px;display:inline')
        point++
    }else{
        onlyradio_element[4].src = "x.png"
        onlyradio_element[4].setAttribute('style','width:30px;display:inline')
    }
    multcheckbox1()
    let flag = 0
    for(let i=0;i<multcheckbox1_answer.length;i++){
        if(multcheckbox1_answer[i] != multcheckbox1_correct_answer[i]){
            flag = 1;
            break;
        }
    }
    if(flag==0){
        multcheckbox1_element[5].src = "o.png"
        multcheckbox1_element[5].setAttribute('style','width:30px;display:inline')
        point++
    }else{
        multcheckbox1_element[5].src = "x.png"
        multcheckbox1_element[5].setAttribute('style','width:30px;display:inline')

    }
    multcheckbox2()
    flag = 0
    for(let i=0;i<multcheckbox2_answer.length;i++){
        if(multcheckbox2_answer[i] != multcheckbox2_correct_answer[i]){
            flag = 1;
            break;
        }
    }
    if(flag==0){
        multcheckbox2_element[5].src = "o.png"
        multcheckbox2_element[5].setAttribute('style','width:30px;display:inline')
        point++
    }else{
        multcheckbox2_element[5].src = "x.png"
        multcheckbox2_element[5].setAttribute('style','width:30px;display:inline')

    }
    onlyselect1()
    if(onlyselect1_answer == onlyselect1_correct_answer){
        onlyselect1_element[2].src = "o.png"
        onlyselect1_element[2].setAttribute('style','width:30px;display:inline')
        point++
    }else{
        onlyselect1_element[2].src = "x.png"
        onlyselect1_element[2].setAttribute('style','width:30px;display:inline')
    }
    onlyselect2()
    if(onlyselect2_answer == onlyselect2_correct_answer){
        onlyselect2_element[2].src = "o.png"
        onlyselect2_element[2].setAttribute('style','width:30px;display:inline')
        point++
    }else{
        onlyselect2_element[2].src = "x.png"
        onlyselect2_element[2].setAttribute('style','width:30px;display:inline')
    }
    multselect1()
    flag = 0
    for(let i=0;i<multselect1_answer.length;i++){
        if(multselect1_answer[i] != multselect1_correct_answer[i]){
            flag = 1;
            break;
        }
    }
    if(flag==0){
        multselect1_element[2].src = "o.png"
        multselect1_element[2].setAttribute('style','width:30px;display:inline')
        point++
    }else{
        multselect1_element[2].src = "x.png"
        multselect1_element[2].setAttribute('style','width:30px;display:inline')
    }
    multselect2()
    flag = 0
    for(let i=0;i<multselect2_answer.length;i++){
        if(multselect2_answer[i] != multselect2_correct_answer[i]){
            flag = 1;
            break;
        }
    }
    if(flag==0){
        multselect2_element[2].src = "o.png"
        multselect2_element[2].setAttribute('style','width:30px;display:inline')
        point++
    }else{
        multselect2_element[2].src = "x.png"
        multselect2_element[2].setAttribute('style','width:30px;display:inline')
    }
    thoughts()
    if(thoughts_content == ""){
        thoughts_element[1].disabled = true 
        thoughts_element[1].setAttribute("style","background:red")
    }else{
        thoughts_element[1].disabled = true 
        thoughts_element[1].setAttribute("style","background:greenyellow")
    }
    var temp = document.getElementById('point')
    temp.textContent = "point : "+point
    temp.setAttribute('style','display: block;font-size: 1.5rem; color: red;')
}
function reset(){
    
    onlyradio_answer = 1
    
    multcheckbox1_answer = [0,0,0,0]
    multcheckbox2_answer = [0,0,0,0]
    onlyselect1_answer = 0;
    onlyselect2_answer = 0;
    multselect1_answer = [0,0,0,0];
    multselect2_answer = [0,0,0,0];
    thoughts_content = ""
    for(let i=0;i<3;i++){
        onlyradio_element[i+1].checked = false
    }
    for(let i=0;i<multcheckbox1_answer.length;i++){
        multcheckbox1_element[i+1].checked = false
    }
    for(let i=0;i<multcheckbox2_answer.length;i++){
        multcheckbox2_element[i+1].checked = false
    }
    onlyselect1_element[1].options[0].selected = true
    onlyselect2_element[1].options[0].selected = true
    for(let i=0;i<multselect1_answer.length;i++){
        multselect1_element[1].options[i].selected = false
    }
    for(let i=0;i<multselect2_answer.length;i++){
        multselect2_element[1].options[i].selected = false
    }
    onlyradio_element[4].src = "x.png"
    onlyradio_element[4].setAttribute('style','display:none')
    multcheckbox1_element[5].src = "x.png"
    multcheckbox1_element[5].setAttribute('style','display:none')
    multcheckbox2_element[5].src = "x.png"
    multcheckbox2_element[5].setAttribute('style','display:none')
    onlyselect1_element[2].src = "x.png"
    onlyselect1_element[2].setAttribute('style','display:none')
    onlyselect2_element[2].src = "x.png"
    onlyselect2_element[2].setAttribute('style','display:none')
    multselect1_element[2].src = "x.png"
    multselect1_element[2].setAttribute('style','display:none')
    multselect2_element[2].src = "x.png"
    multselect2_element[2].setAttribute('style','display:none')
    thoughts_element[1].disabled = false
    thoughts_element[1].setAttribute("style","")
    point = 0
    var temp = document.getElementById('point')
    temp.textContent = "point : "+point
    temp.setAttribute('style','display: block;font-size: 1.5rem; color: red;')
}
let point = 0
let title_element = document.getElementById("title")
let time1 = 0
let time2 = 0
function rgb(){
    time1 += 3
    time2 += 7
    title_element.setAttribute("style","color:rgb("+time1%256+","+(256-(time2%256))+","+((time1+time2)/2)%256+")")
}
setInterval(rgb,50)