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
var answer_h = []
var answer_k = []

function random_question(){
    var random_checked = []
    var random_flag = 0
    var questionstr = ""
    for(var i=0;i<5;i++){
        random_flag = 0
        var temp_random_num_1 = getRandom(0,list50_en_1.length)
        for(var j=0;j<random_checked.length;j++){
            if(temp_random_num_1 == random_checked[j]){
                random_flag = 1
                break;
            }
        }
        if(random_flag == 1){
            i--;
            continue;
        }
        random_checked[i] = temp_random_num_1
        questionstr += "<li>"
        var temp_random_num_2 = getRandom(0,list50_en_1[temp_random_num_1].length)
        questionstr += "<div class='hiragana"+i+"'>請問"+list50_en_1[temp_random_num_1][temp_random_num_2]+"的平假名是什麼</div><div class='mt-2 d-flex '>"
        var temp_random_num_3 = getRandom(0,3)
        var answer_checked = []
        answer_checked[0] = list50_jp_1_1[temp_random_num_1][temp_random_num_2]
        for(var j=0;j<4;j++){
            if(j==temp_random_num_3){
                questionstr += "<div class='form-check m-1'>"
                questionstr += "<input class='form-check-input' type='radio' name='hiragana"+i+"' id='hiragana"+i+j+"' value='"+j+"'>"
                answer_h[i] = j
                questionstr += "<label class='form-check-label' id='hiragana_label"+i+j+"' for='hiragana"+i+j+"'>"+list50_jp_1_1[temp_random_num_1][temp_random_num_2]+"</label></div>"
            }else{
                var temp_random_num_4 
                var temp_random_num_5
                var answer_checked_flag = 0
                for(;;){
                    answer_checked_flag = 0
                    temp_random_num_4 = getRandom(0,list50_en_1.length)
                    temp_random_num_5 = getRandom(0,list50_en_1[temp_random_num_4].length)
                    for(var k=0;k<answer_checked.length;k++){
                        if(answer_checked[k] == list50_jp_1_1[temp_random_num_4][temp_random_num_5]){
                            answer_checked_flag = 1
                            break;
                        }
                    }
                    if(answer_checked_flag == 1){
                        continue;
                    }
                    answer_checked[j+1] = list50_jp_1_1[temp_random_num_4][temp_random_num_5]
                    questionstr += "<div class='form-check  m-1'>"
                    questionstr += "<input class='form-check-input' type='radio' name='hiragana"+i+"' id='hiragana"+i+j+"' value='"+j+"'>"
                    questionstr += "<label class='form-check-label' id='hiragana_label"+i+j+"' for='hiragana"+i+j+"'>"+list50_jp_1_1[temp_random_num_4][temp_random_num_5]+"</label></div>"
                    break;
                }
            }
        }
        questionstr += "<img style='display:none;' src='x.png' id='hiragana_ox"+i+"'></li>"
    }
    for(var i=0;i<5;i++){
        
        random_flag = 0
        var temp_random_num_1 = getRandom(0,list50_en_1.length)
        for(var j=0;j<random_checked.length;j++){
            if(temp_random_num_1 == random_checked[j]){
                random_flag = 1
                break;
            }
        }
        if(random_flag == 1){
            i--;
            continue;
        }
        questionstr += "<li>"
        random_checked[i] = temp_random_num_1
        var temp_random_num_2 = getRandom(0,list50_en_1[temp_random_num_1].length)
        questionstr += "<div class='katakana"+i+"'>請問"+list50_en_1[temp_random_num_1][temp_random_num_2]+"的片假名是什麼</div><div class='mt-2 d-flex '>"
        var temp_random_num_3 = getRandom(0,3)
        var answer_checked = []
        answer_checked[0] = list50_jp_1_2[temp_random_num_1][temp_random_num_2]
        for(var j=0;j<4;j++){
            if(j==temp_random_num_3){
                questionstr += "<div class='form-check m-1'>"
                questionstr += "<input class='form-check-input' type='radio' name='katakana"+i+"' id='katakana"+i+j+"' value='"+j+"'>"
                answer_k[i] = j
                questionstr += "<label class='form-check-label' id='katakana_label"+i+j+"' for='katakana"+i+j+"'>"+list50_jp_1_2[temp_random_num_1][temp_random_num_2]+"</label></div>"
            }else{
                var temp_random_num_4 
                var temp_random_num_5
                var answer_checked_flag = 0
                for(;;){
                    answer_checked_flag = 0
                    temp_random_num_4 = getRandom(0,list50_en_1.length)
                    temp_random_num_5 = getRandom(0,list50_en_1[temp_random_num_4].length)
                    for(var k=0;k<answer_checked.length;k++){
                        if(answer_checked[k] == list50_jp_1_2[temp_random_num_4][temp_random_num_5]){
                            answer_checked_flag = 1
                            break;
                        }
                    }
                    if(answer_checked_flag == 1){
                        continue;
                    }
                    answer_checked[j+1] = list50_jp_1_2[temp_random_num_4][temp_random_num_5]
                    questionstr += "<div class='form-check m-1'>"
                    questionstr += "<input class='form-check-input' type='radio' name='katakana"+i+"' id='katakana"+i+j+"' value='"+j+"'>"
                    questionstr += "<label class='form-check-label'  id='katakana_label"+i+j+"' for='katakana"+i+j+"'>"+list50_jp_1_2[temp_random_num_4][temp_random_num_5]+"</label></div>"
                    break;
                }
            }
        }
        questionstr += "<img style='display:none;' src='x.png' id='katakana_ox"+i+"'></li>"
    }
    document.getElementById("questionlist").innerHTML = questionstr
    timerId = setInterval(timer,1000)
    document.getElementById("startbtn").disabled = true
    document.getElementById("summitbtn").setAttribute("style","display:block")
}   
var count = 60;
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
    for(var i=0;i<5;i++){
        var temp_answer = document.querySelector('input[name="hiragana'+i+'"]:checked');
        var ox_temp = document.getElementById("hiragana_ox"+i)
        if(temp_answer == null){
            ox_temp.src = "x.png"
            ox_temp.setAttribute('style','width:30px;display:inline')
        }else{
            if(answer_h[i] == temp_answer.value){
                ox_temp.src = "o.png"
                ox_temp.setAttribute('style','width:30px;display:inline')
                point += 10
            }else{
                ox_temp.src = "x.png"
                ox_temp.setAttribute('style','width:30px;display:inline')
            }
        }
        
    }
    for(var i=0;i<5;i++){
        var temp_answer = document.querySelector('input[name="katakana'+i+'"]:checked');
        var ox_temp = document.getElementById("katakana_ox"+i)
        if(temp_answer == null){
            ox_temp.src = "x.png"
            ox_temp.setAttribute('style','width:30px;display:inline')
        }else{
            if(answer_k[i] == temp_answer.value){
                ox_temp.src = "o.png"
                ox_temp.setAttribute('style','width:30px;display:inline')
                point += 10
            }else{
                ox_temp.src = "x.png"
                ox_temp.setAttribute('style','width:30px;display:inline')
            }
        }
    }
    document.getElementById("point").innerHTML = "分數 : " + point
    localStorage.setItem("point50",point)
    localStorage.setItem("time50",60-count)
 }
function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
}

function init(){
    if(localStorage.getItem("name") == null){
        document.getElementById("name").innerHTML = "訪客"
    }else{
        document.getElementById("name").innerHTML = localStorage.getItem("name")
    }
    
}
