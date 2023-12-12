var fruitpicture=["images/apple.png",
                "images/banana.png",
                "images/grapes.png",
                "images/orange.png",
                "images/strawberry.png"]
var fruitname=["images/applename.png",
                "images/banananame.png",
                "images/grapesname.png",
                "images/orangename.png",
                "images/strawberryname.png"]
var guessNum = 0
var guessatemp 
var guessbtemp
var times = 0
var sroce = 0
var randomarray = new Array(10)

function mermorygameinit(){
    var temp = document.getElementsByClassName("imgcontainer")
    for(var i=0;i<10;i++){
        temp[i].childNodes[1].setAttribute("onclick","guess("+(i)+")")
    }
    random()
    var title = document.getElementById("title")
    title.innerHTML = "Welcome!!"+localStorage.getItem("name") + " " +localStorage.getItem("surname")
}
async function guess(n){
    guessNum++
    times++
    var temp = document.getElementsByClassName("imgcontainer")
    temp[n].childNodes[1].src = randomarray[n]<=4?fruitpicture[randomarray[n]]:fruitname[randomarray[n]-5]
    if(guessNum%2 == 1){
        guessatemp = n
        console.log(guessNum + "  "+ guessatemp + "  "+guessbtemp);
        temp[guessatemp].childNodes[1].setAttribute("onclick","")  
    }else{
        guessbtemp = n
        console.log(guessNum + "  "+ guessatemp + "  "+guessbtemp);
        if(randomarray[guessatemp]-5 == randomarray[guessbtemp] || randomarray[guessatemp] == randomarray[guessbtemp]-5){
            temp[guessatemp].childNodes[1].setAttribute("onclick","")
            temp[guessbtemp].childNodes[1].setAttribute("onclick","")   
            sroce++
        }else{
            await sleep(800)
            temp[guessatemp].childNodes[1].setAttribute("onclick","guess("+(guessatemp)+")")  
            temp[guessatemp].childNodes[1].src = "./images/qmark.png"
            temp[guessbtemp].childNodes[1].src = "./images/qmark.png"
        }
    }
    if(sroce == 5){
        localStorage.setItem("times",times)
        var wintemp = document.getElementById("win")
        wintemp.setAttribute("style","display: block;margin-left: 2rem;margin-bottom: 2rem;")
    }
}
function random(){
    for(var i=0;i<10;i++){
        var temp = Math.floor(Math.random()*10)
        var flag = 0;
        for(var j=0;j<i;j++){
            if(temp == randomarray[j]){
                flag = 1;
                break;
            }
        }
        if(flag == 1){
            i--;
        }else{
            randomarray[i] = temp
            flag = 0
        }
    }
}
async function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}