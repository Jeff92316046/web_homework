function correct(n,m){
    var question = document.getElementsByClassName('q'+n)
    question[m==1?0:1].setAttribute('style','background-color:greenyellow')
    question[m==1?1:0].setAttribute('style','background-color:default')
    question[2].setAttribute('src','o.png')
    /* question[2].textContent = "A:"+question[m==1?0:1].textContent
    question[2].setAttribute('style','width:30;display:block')  */
    q[n-1] = 1   
}
function incorrect(n,m){
    var question = document.getElementsByClassName('q'+n)
    question[m==1?0:1].setAttribute('style','background-color:default')
    question[m==1?1:0].setAttribute('style','background-color:greenyellow')
    question[2].setAttribute('src','x.png')
    /* question[0].setAttribute('disabled','true')
    question[1].setAttribute('disabled','true') */
    /* question[2].textContent = "A:"+question[m==1?1:0].textContent
    question[2].setAttribute('style','width:30;display:block') */
    q[n-1] = 0
    
}
const answer = ["い","ひ","び","く"]
let q = new Array(14)
for(var i=0;i<q.length;i++){
    q[i] = 0;
}
var randomarray = new Array(14)
function random(){
    for(var i=0;i<14;i++){
        randomarray[i] = 0
    }
    for(var i=0;i<4;i++){
        var temp = Math.floor(Math.random()*14)
        if(randomarray[temp]==1){
            i--;
            continue
        }
        randomarray[temp] = 1

    }
}
function display(){
    random()
    var temp = document.getElementsByClassName("question")
    for(var i=0;i<14;i++){
        
        temp[i].setAttribute("style","")
        
    }
    for(var i=0;i<14;i++){
        if(randomarray[i]==1){
            temp[i].setAttribute("style","display:none")
        }
    }
    var title = document.getElementById("title")
    title.innerHTML = "Welcome!!"+localStorage.getItem("name") + " " +localStorage.getItem("surname")
}
function answer_check(){
    for(var i=0;i<4;i++){
        var question = document.getElementsByClassName('q'+(11+i))
        if(question[0].value == answer[i]){
            q[10+i] = 1
            question[1].setAttribute('src','o.png')
        }
    }
    var img = document.getElementsByTagName("img")
    for(var i=1;i<img.length;i++){
        if(i==9)continue
        img[i].setAttribute('style','width:30px;display:inline')
    }
    for(var i=0;i<q.length;i++){
        if(q[i]){
            point++;
        }
    }
    var temp = document.getElementById('point')
    temp.textContent = "point : "+point
    temp.setAttribute('style','display: block;font-size: 1.5rem; color: red;margin-left: 2rem;margin-bottom: 2rem;')
    var button = document.getElementsByTagName('button')
    for(var i=0;i<button.length-1;i++){
        button[i].disabled = true
    }
    var input = document.getElementsByTagName('input')
    for(var i=0;i<input.length;i++){
        input[i].disabled = true
    }
    localStorage.setItem("testpoint",point)
}
function reset(){
    display()
    var img = document.getElementsByTagName("img")
    for(var i=1;i<img.length;i++){
        if(i==9)continue
        img[i].src = 'x.png'
        img[i].setAttribute('style','width:30;display:none')
    }
    for(var i=0;i<q.length;i++){
        q[i] =0
    }
    var button = document.getElementsByTagName('button')
    for(var i=0;i<button.length-1;i++){
        button[i].disabled = false
        if(i==button.length-2)continue;
        button[i].setAttribute('style','background-color:default')
    }
    var input = document.getElementsByTagName('input')
    for(var i=0;i<input.length;i++){
        input[i].disabled = false
        input[i].value = ''
    }
    var temp = document.getElementById('point')
    temp.setAttribute('style','display: none;font-size: 1.5rem; color: red;')
    point = 0

}
let point = 0
let answered = 0


