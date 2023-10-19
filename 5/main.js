function correct(){
    alert("correct")
    point++
    var point_node = document.getElementById("point")
    point_node.textContent = "分數：" + point
}
function incorrect(){
    alert("wrong!!")
}
const answer = ["い","ひ","び","く"]
function answer_check(n){
    var answer_input = document.getElementById("input"+String(n)).value;
    if(answer[Number(n)-1]===answer_input){
        correct()
    }else{
        incorrect()
    }
}
let point = 0
let input = prompt("輸入名字")

var newDiv = document.createElement("marquee");
var newContent = document.createTextNode(input);
newDiv.appendChild(newContent); //add the text node to the newly created div.

// add the newly created element and its content into the DOM
var currentDiv = document.getElementById("point");
document.body.insertBefore(newDiv, currentDiv);

