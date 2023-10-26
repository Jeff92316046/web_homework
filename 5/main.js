function correct(n){
    var question = document.getElementsByClassName('q'+n)
    question[0].setAttribute('disabled','true')
    question[1].setAttribute('disabled','true')
    question[2].setAttribute('src','o.png')
    question[2].setAttribute('style','width:30;display:block')
    point++
    answered++
    var point_node = document.getElementById("point")
    point_node.textContent = "分數：" + point + "/" +answered 
}
function incorrect(n){
    var question = document.getElementsByClassName('q'+n)
    question[0].setAttribute('disabled','true')
    question[1].setAttribute('disabled','true')
    question[2].setAttribute('src','x.png')
    question[2].setAttribute('style','width:30;display:block')
    answered++
    var point_node = document.getElementById("point")
    point_node.textContent = "分數：" + point + "/" +answered 
}
const answer = ["い","ひ","び","く"]
function answer_check(n){
    var answer_input = document.getElementById("input"+String(n)).value;
    if(answer[Number(n)-1]===answer_input){
        correct(n+10)
    }else{
        incorrect(n+10)
    }
    
}
let point = 0
let answered = 0
let input = prompt("輸入名字")

var newDiv = document.createElement("marquee");
var newContent = document.createTextNode(input);
newDiv.appendChild(newContent); //add the text node to the newly created div.

// add the newly created element and its content into the DOM
var currentDiv = document.getElementById("point");
document.body.insertBefore(newDiv, currentDiv);

