var contentArray = [[[6  ,'X',5  ,'=',30 ],
                    ['X','' ,'÷','' ,'÷'],
                    [3  ,'X',1  ,'=',3  ],
                    ['=','' ,'=','' ,'='],
                    [2  ,'X',5  ,'=',10 ]],
                    [[3 ,'+',2  ,'=',1 ],
                    ['+','' ,'+','' ,'+'],
                    [16  ,'-',1  ,'=',15  ],
                    ['=','' ,'=','' ,'='],
                    [19  ,'-',3  ,'=',16 ]],
                    [[16 ,'+',2  ,'=',18 ],
                    ['-','' ,'X','' ,'÷'],
                    [4  ,'+',2  ,'=',6 ],
                    ['=','' ,'=','' ,'='],
                    [12 ,'÷',4  ,'=',3 ]],
                    [[3 ,'+',3  ,'=',6 ],
                    ['X','' ,'+','' ,'X'],
                    [5  ,'X',3  ,'=',15 ],
                    ['=','' ,'=','' ,'='],
                    [15 ,'X',6  ,'=',90 ]],]
var symboltable = ["+","-","X","÷"]
var button =[[1,0,0,0,0],
            [0,2,0,2,0],
            [0,0,1,0,1],
            [0,2,0,2,0],
            [0,0,1,0,0]]

var map_id = Math.floor(Math.random()*contentArray.length)
var app = document.getElementById('app')
var text = "<table id='table' ><tbody>"
for(var i=0;i<5;i++){
    text += "<tr>"
    for(var j=0;j<5;j++){
        if(button[i][j] == 1){
            text += ("<td class='cell'><input type='text'  id='cell"+String(i)+String(j)+"'/>"+"</td>")
        }
        else if(button[i][j] == 0){
            text += ("<td class='cell'><div id='cell"+String(i)+String(j)+"'>"+contentArray[map_id][i][j]+"</div></td>")
        }else{
            text +=  ("<td class='cell'><div></div>"+"</td>")
        }
        
    }
    text += "</tr>"
}

text += "</tbody></table>"
app.innerHTML = text
for(var i=0;i<5;i++){
    for(var j=0;j<5;j++){
        if(button[i][j] == 1){
            document.getElementById('cell'+String(i)+String(j)).setAttribute('style','font-size:25px;width:40px;height:30px;align:center')
        }
    }
}
var table = document.getElementById('table')
table.setAttribute('style','border:1px solid;text-align:center; font-size:35px;')
var cell = document.getElementsByClassName('cell')
Array.from(cell).forEach(element => {
    element.setAttribute("style",'width:100px;height:100px;border:1px solid;font-size:1.5rem')
});
var point = 0

function summit(){
    var flag = 0
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
            if(button[i][j] == 1){
                document.getElementById('cell'+String(i)+String(j)).setAttribute('readonly','true')
                if(document.getElementById('cell'+String(i)+String(j)).value != contentArray[map_id][i][j]){
                    flag = 1
                }else{
                    point++
                }
            }
        }
    }
    if(!flag){
        document.getElementById('status').textContent = '答對了!!!!'
        document.getElementById('point').textContent = "point : " + point + "/4"
    }else{
        document.getElementById('status').textContent = '答錯了'
        document.getElementById('point').textContent = "point : "+point + "/4"
    }
    document.getElementById('summit').setAttribute('disabled','true')
}
function reset(){
    var app = document.getElementById('app')
    var text = "<table id='table' ><tbody>"
    map_id = Math.floor(Math.random()*contentArray.length)
    for(var i=0;i<5;i++){
        text += "<tr>"
        for(var j=0;j<5;j++){
            if(button[i][j] == 1){
                text += ("<td class='cell'><input type='text'  id='cell"+String(i)+String(j)+"'/>"+"</td>")
            }
            else if(button[i][j] == 0){
                text += ("<td class='cell'><div id='cell"+String(i)+String(j)+"'>"+contentArray[map_id][i][j]+"</div></td>")
            }else{
                text +=  ("<td class='cell'><div></div>"+"</td>")
            }
            
        }
        text += "</tr>"
    }
    
    text += "</tbody></table>"
    app.innerHTML = text
    for(var i=0;i<5;i++){
        for(var j=0;j<5;j++){
            if(button[i][j] == 1){
                document.getElementById('cell'+String(i)+String(j)).setAttribute('style','font-size:25px;width:40px;height:30px;align:center')
            }
        }
    }
    var table = document.getElementById('table')
    table.setAttribute('style','border:1px solid;text-align:center; font-size:35px;')
    var cell = document.getElementsByClassName('cell')
    Array.from(cell).forEach(element => {
        element.setAttribute("style",'width:100px;height:100px;border:1px solid;font-size:1.5rem')
    });
    document.getElementById('status').textContent = ''
    var summit = document.getElementById('summit')
    summit.disabled = false
    document.getElementById('status').textContent = ''
    document.getElementById('point').textContent = ""
    point = 0   
}




    /* for(;;){
        contentArray[0][0] = Math.floor(Math.random()*10)+1
        contentArray[0][1] = symboltable[Math.floor(Math.random()*4)]
        contentArray[1][0] = symboltable[Math.floor(Math.random()*4)]
        if(contentArray[0][1] == '+'){
            contentArray[0][2] =  Math.floor(Math.random()*10)+1
            contentArray[0][3] = "="
            contentArray[0][4] = Number(contentArray[0][0]) + Number(contentArray[2][0])
        }else if(contentArray[0][1] == '-'){
            contentArray[0][4] =  Math.floor(Math.random()*10)+1
            contentArray[0][3] = "="
            contentArray[0][2] = Number(contentArray[0][4]) - Number(contentArray[0][0])
        }else if(contentArray[0][1] == '*'){
            contentArray[0][2] =  Math.floor(Math.random()*4)+1
            contentArray[0][3] = "="
            contentArray[0][4] = Number(contentArray[0][0]) * Number(contentArray[2][0])
        }else if(contentArray[0][1] == '/'){
            var temp = []
            for(var i=0;i<=contentArray[0][0];i++){
                if(contentArray[0][0]%i==0){
                    temp.push(i)
                }
            }
            contentArray[0][2] = temp[Math.floor(Math.random()*temp.length)]
            contentArray[0][3] = "="
            contentArray[0][4] = contentArray[0][0] / contentArray[0][2]
        }
        //---------------------
        if(contentArray[1][0] == '+'){
            contentArray[2][0] =  Math.floor(Math.random()*10)+1
            contentArray[3][0] = "="
            contentArray[4][0] = Number(contentArray[0][0]) + Number(contentArray[2][0])
        }else if(contentArray[1][0] == '-'){
            contentArray[4][0] =  Math.floor(Math.random()*10)+1
            contentArray[3][0] = "="
            contentArray[2][0] = Number(contentArray[0][4]) - Number(contentArray[0][0])
        }else if(contentArray[1][0] == '*'){
            contentArray[2][0] =  Math.floor(Math.random()*4)+1
            contentArray[3][0] = "="
            contentArray[4][0] = Number(contentArray[0][0]) * Number(contentArray[2][0])
        }else if(contentArray[1][0] == '/'){
            var temp = []
            for(var i=0;i<=contentArray[0][0];i++){
                if(contentArray[0][0]%i==0){
                    temp.push(i)
                }
            }
            contentArray[2][0] = temp[Math.floor(Math.random()*temp.length)]
            contentArray[3][0] = "="
            contentArray[4][0] = contentArray[0][0] / contentArray[2][0]
        }
        contentArray[1][2] = symboltable[Math.random()>0.5?0:2]
        contentArray[2][2] = Math.floor(Math.random()*10)+1
        contentArray[2][1] = symboltable[Math.random()>0.5?0:2]
        if(contentArray[1][2] == '+'){
            contentArray[3][2] = "="
            contentArray[4][2] = Number(contentArray[0][2]) + Number(contentArray[2][2])
        }else if(contentArray[1][2] == '*'){
            contentArray[3][2] = "="
            contentArray[4][2] = Number(contentArray[0][2]) * Number(contentArray[2][2])
        }
        if(contentArray[2][1] == '+'){
            contentArray[2][3] = "="
            contentArray[2][4] = Number(contentArray[2][0]) + Number(contentArray[2][2])
        }else if(contentArray[2][1] == '*'){
            contentArray[2][3]= "="
            contentArray[2][4] = Number(contentArray[2][0]) * Number(contentArray[2][2])
        }
        contentArray[1][4] = symboltable[Math.random()>0.5?0:2]
        contentArray[4][1] = symboltable[Math.random()>0.5?0:2]
        if(contentArray[4][1] == '+'){
            contentArray[4][3] = "="
            contentArray[4][4] = Number(contentArray[4][0]) + Number(contentArray[4][2])
        }else if(contentArray[4][1] == '*'){
            contentArray[4][3]= "="
            contentArray[4][4] = Number(contentArray[4][0]) * Number(contentArray[4][2])
        }
        if(contentArray[1][4] == '+'){
            contentArray[3][4] = "="
            if(contentArray[4][4] == Number(contentArray[0][4]) + Number(contentArray[2][4])){
                break;
            }
        }else if(contentArray[1][2] == '*'){
            contentArray[3][4] = "="
            if(contentArray[4][4] == Number(contentArray[0][4]) * Number(contentArray[2][4])){
                break;
            }
        }
    } */


