var animal_src = ["./img/cat.png","./img/bird.png","./img/cow.png","./img/dog.png","./img/sheep.png"]
var animal_word_jp = ["ねこ","とり","うし","いぬ","ひつじ"]
var animal_word_ch = ["貓","鳥","牛","狗","羊"]
var raw = 0
var column = 0

const synth = window.speechSynthesis
const utter = new SpeechSynthesisUtterance()
utter.lang = "ja-JP"
utter.volume = 7

utter.pitch = 2
function nextword(){
    column = column>=animal_src.length-1 ? 0 : column+1
    displayword()
}

function backword(){
    column = column<=0 ? animal_src.length-1 : column-1 
    displayword()
}

function displayword(){
    var userInput = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    if(userInput == 1){
        document.getElementById("fontCard").textContent = animal_word_ch[column]
        document.getElementById("backCard").textContent = animal_word_jp[column]
        document.getElementById("fontCard").setAttribute("style","text-align: center; padding-top: 55px")
    }else{
        document.getElementById("fontCard").innerHTML = "<img src='"+animal_src[column]+"' style='height: 15rem;width:15rem;'>"
        document.getElementById("fontCard").setAttribute("style","")
        document.getElementById("backCard").textContent = animal_word_jp[column]
    }
}

//ka sa ta ha
//ha
function rawrefresh(i){
    column = 0 
    displayword()
}

function speak(){
    utter.text = animal_word_jp[column]
    synth.speak(utter)
}
function init(){
    if(localStorage.getItem("name") == null){
        document.getElementById("name").innerHTML = "訪客"
    }else{
        document.getElementById("name").innerHTML = localStorage.getItem("name")
    }
    
}