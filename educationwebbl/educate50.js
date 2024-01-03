var list50_en_1 = 
[["a","i","u","e","o"],
["ka","ki","ku","ke","ko"],
["sa","si","su","se","so"],
["ta","ti","tu","te","to"],
["na","ni","nu","ne","no"],
["ha","hi","hu","he","ho"],
["ma","mi","mu","me","mo"],
["ya","yu","yo"],
["ra","ri","ru","re","ro"],
["wa","wo"],
["n"]]

var list50_jp_1_1 = 
[["あ","い","う","え","お"],
["か","き","く","け","こ"],
["さ","し","す","せ","そ"],
["た","ち","つ","て","と"],
["な","に","ぬ","ね","の"],
["は","ひ","ふ","へ","ほ"],
["ま","み","む","め","も"],
["や","ゆ","よ"],
["ら","り","る","れ","ろ"],
["わ","を"],
["ん"]]
var list50_jp_1_2 = 
[["ア","イ","ウ","エ","オ"],
["カ","キ","ク","ケ","コ"],
["サ","シ","ス","セ","ソ"],
["タ","チ","ツ","テ","ト"],
["ナ","ニ","ヌ","ネ","ノ"],
["ハ","ヒ","フ","ヘ","ホ"],
["マ","ミ","ム","メ","モ"],
["ヤ","ユ","ヨ"],
["ラ","リ","ル","レ","ロ"],
["ワ","ヲ"],
["ン"]]

var list50_en_2 = 
[[],
["ga","gi","gu","ge","go"],
["za","zi","zu","ze","zo"],
["da","di","du","de","do"],
[],
["ba","bi","bu","be","bo"],
[],
[],
[],
[],
[]]

var list50_jp_2_1 = 
[[],
["が","ぎ","ぐ","げ","ご"],
["ざ","じ","ず","ぜ","ぞ"],
["だ","ぢ","づ","で","ど"],
[],
["ば","び","ぶ","べ","ぼ"],
[],
[],
[],
[],
[]]
var list50_jp_2_2 = 
[[],
["ガ","ギ","グ","ゲ","ゴ"],
["ザ","ジ","ズ","ゼ","ゾ"],
["ダ","ヂ","ヅ","デ","ド"],
[],
["バ","ビ","ブ","ベ","ボ"],
[],
[],
[],
[],
[]]
var list50_en_3 = 
[[],
[],
[],
[],
[],
["pa","pi","pu","pe","po"],
[],
[],
[],
[],
[]]

var list50_jp_3_1 = 
[[],
[],
[],
[],
[],
["ぱ","ぴ","ぷ","ぺ","ぽ"],
[],
[],
[],
[],
[]]
var list50_jp_3_2 = 
[[],
[],
[],
[],
[],
["パ","ピ","プ","ペ","ポ"],
[],
[],
[],
[],
[]]
var raw = 0
var column = 0
const synth = window.speechSynthesis
const utter = new SpeechSynthesisUtterance()
utter.lang = "ja-JP"
utter.volume = 7

utter.pitch = 2
function nextword(){
    column = column>=list50_en_1[raw].length-1 ? 0 : column+1
    displayword()
}
function init(){
    if(localStorage.getItem("name") == null){
        document.getElementById("name").innerHTML = "訪客"
    }else{
        document.getElementById("name").innerHTML = localStorage.getItem("name")
    }
    
}
function backword(){
    column = column<=0 ? list50_en_1[raw].length-1 : column-1 
    displayword()
}


function displayword(){
    var userInput = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    var userInput1 = document.querySelector('input[name="flexRadioDefault1"]:checked').value;
    if(userInput1 == 1){
        if(userInput == 1){
            document.getElementById("fontCard").textContent = list50_jp_1_1[raw][column]
            document.getElementById("backCard").textContent = list50_en_1[raw][column]
        }else{
            document.getElementById("fontCard").textContent = list50_jp_1_2[raw][column]
            document.getElementById("backCard").textContent = list50_en_1[raw][column]
        }
    }else if(userInput1 == 2){
        if(userInput == 1){
            document.getElementById("fontCard").textContent = list50_jp_2_1[raw][column]
            document.getElementById("backCard").textContent = list50_en_2[raw][column]
        }else{
            document.getElementById("fontCard").textContent = list50_jp_2_2[raw][column]
            document.getElementById("backCard").textContent = list50_en_2[raw][column]
        }
    }else if(userInput1 == 3){
        if(userInput == 1){
            document.getElementById("fontCard").textContent = list50_jp_3_1[raw][column]
            document.getElementById("backCard").textContent = list50_en_3[raw][column]
        }else{
            document.getElementById("fontCard").textContent = list50_jp_3_2[raw][column]
            document.getElementById("backCard").textContent = list50_en_3[raw][column]
        }
    }
    
    
}

//ka sa ta ha
//ha
function rawrefresh(i){
    column = 0 
    document.getElementById("flexRadioDefault11").checked = true
    document.getElementById("flexRadioDefault1").checked = true
    raw = i
    if(list50_en_2[raw].length == 0){
        document.getElementById("flexRadioDefault12").disabled = true
    }else{
        document.getElementById("flexRadioDefault12").disabled = false
    }
    if(list50_en_3[raw].length == 0){
        document.getElementById("flexRadioDefault13").disabled = true
    }else{
        document.getElementById("flexRadioDefault13").disabled = false
    }
    displayword()
}

function speak(){
    var userInput1 = document.querySelector('input[name="flexRadioDefault1"]:checked').value;
    if(userInput1 == 1){
        utter.text = list50_jp_1_1[raw][column]
    }else if(userInput1 == 2){
        utter.text = list50_jp_2_1[raw][column]
    }else if(userInput1 == 3){
        utter.text = list50_jp_2_1[raw][column]
    }
    synth.speak(utter)
}
