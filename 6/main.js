let font_size = 0
let x_t 
let y_t
let z_t 
let tritype = document.getElementById("tritype")
let triperimeter = document.getElementById("perimeter")
let triarea = document.getElementById("area")
function cosanddraw(){
    let canvas = document.getElementById('canvas1')
    x_t = document.getElementById('input1').value
    y_t = document.getElementById('input2').value
    z_t = document.getElementById('input3').value
    let x 
    let y 
    let z 
    let start = [0,0]
    let path1 = [0,0]
    let path2 = [0,0]
    let lenx = [0,0,0]
    let leny = [0,0,0]
    let lenz = [0,0,0]
    x = Number(x_t)<100?Number(x_t)*100:Number(x_t)
    y = Number(y_t)<100?Number(y_t)*100:Number(y_t)
    z = Number(z_t)<100?Number(z_t)*100:Number(z_t)  
    
    if(x>=y && x>=z){
        let cos = y*y + x*x - z*z
        cos/=(2*x*y)
        let sin = Math.sqrt(1-(cos*cos))
        console.log(cos);
        console.log(sin);
        canvas.setAttribute("width",String(1.1*x)+'px')
        canvas.setAttribute("height",String(1.1*x)+'px')
        start[0] = 0
        start[1] = 0.9*x
        path1[0] = x
        path1[1] = 0.9*x
        path2[0] = y*cos
        path2[1] = 0.9*x-(y*sin)
        lenx[0] = x_t
        lenx[1] = x/2
        lenx[2] = x
        leny[0] = y_t
        leny[1] = (start[0]+path2[0])/4 
        leny[2] = (start[1]+path2[1])/2
        lenz[0] = z_t
        lenz[1] = ((5*path2[0]+6*path1[0]))/11
        lenz[2] = (path2[1]+path1[1])/2
        font_size = 0.1*x
    }else if(y>=z && y>=x){
        let cos = y*y + x*x - z*z
        cos/=(2*x*y)
        let sin = Math.sqrt(1-(cos*cos))
        console.log(cos);
        console.log(sin);
        canvas.setAttribute("width",String(1.1*y)+'px')
        canvas.setAttribute("height",String(1.1*y)+'px')
        start[0] = 0
        start[1] = 0.9*y
        path1[0] = y
        path1[1] = 0.9*y
        path2[0] = x*cos
        path2[1] = 0.9*y-(x*sin)
        lenx[0] = y_t
        lenx[1] = y/2
        lenx[2] = y
        leny[0] = x_t
        leny[1] = (start[0]+path2[0])/4 
        leny[2] = (start[1]+path2[1])/2
        lenz[0] = z_t
        lenz[1] = ((5*path2[0]+6*path1[0]))/11
        lenz[2] = (path2[1]+path1[1])/2
        font_size = 0.1*y
    }else{
        let cos = z*z + x*x - y*y
        cos/=(2*z*x)
        let sin = Math.sqrt(1-(cos*cos))
        console.log(cos);
        console.log(sin);
        canvas.setAttribute("width",String(1.1*z)+'px')
        canvas.setAttribute("height",String(1.1*z)+'px')
        start[0] = 0
        start[1] = 0.9*z
        path1[0] = z
        path1[1] = 0.9*z
        path2[0] = x*cos
        path2[1] = 0.9*z-(x*sin)
        lenx[0] = z_t
        lenx[1] = z/2
        lenx[2] = z
        leny[0] = x_t
        leny[1] = (start[0]+path2[0])/4 
        leny[2] = (start[1]+path2[1])/2
        lenz[0] = y_t
        lenz[1] = ((5*path2[0]+6*path1[0]))/11
        lenz[2] = (path2[1]+path1[1])/2
        font_size = 0.1*z
    }
    
    if(tri_type()==-1){
        canvas.setAttribute("style","display:none;width:300px")
        tritype.setAttribute("style","display:none;font-size: large;")
        triperimeter.setAttribute("style","display:none;font-size: large;")
        triarea.setAttribute("style","display:none;font-size: large;")
        document.getElementById("nontri").setAttribute("style","display:block;font-size: large;")
    }else{
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            
            ctx.beginPath();
            ctx.moveTo(start[0],start[1]);
            ctx.lineTo(path1[0],path1[1]);
            ctx.lineTo(path2[0],path2[1]);
            ctx.fill();
            ctx.closePath();
            ctx.font = font_size+"px Arial"
            ctx.fillText(lenx[0],lenx[1],lenx[2])
            ctx.fillText(leny[0],leny[1],leny[2])
            ctx.fillText(lenz[0],lenz[1],lenz[2])
            canvas.setAttribute("style","display:block;width:300px")
            document.getElementById("nontri").setAttribute("style","display:none;font-size: large;")
        }
        if(tri_type()==1){
            tritype.setAttribute("style","display:block;font-size: large;")
            tritype.textContent = "類型:銳角三角形"
            triperimeter.setAttribute("style","display:block;font-size: large;")
            triperimeter.textContent = "邊長:"+tri_perimeter()
            triarea.setAttribute("style","display:block;font-size: large;")
            triarea.textContent = "面積:"+tri_area()
        }else if(tri_type()==0){
            tritype.setAttribute("style","display:block;font-size: large;")
            tritype.textContent = "類型:直角三角形"
            triperimeter.setAttribute("style","display:block;font-size: large;")
            triperimeter.textContent = "邊長:"+tri_perimeter()
            triarea.setAttribute("style","display:block;font-size: large;")
            triarea.textContent = "面積:"+tri_area()
        }else if(tri_type()==3){
            tritype.setAttribute("style","display:block;font-size: large;")
            tritype.textContent = "類型:正三角形"
            triperimeter.setAttribute("style","display:block;font-size: large;")
            triperimeter.textContent = "邊長:"+tri_perimeter()
            triarea.setAttribute("style","display:block;font-size: large;")
            triarea.textContent = "面積:"+tri_area()
        }else{
            tritype.setAttribute("style","display:block;font-size: large;")
            tritype.textContent = "類型:鈍角三角形"
            triperimeter.setAttribute("style","display:block;font-size: large;")
            triperimeter.textContent = "邊長:"+tri_perimeter()
            triarea.setAttribute("style","display:block;font-size: large;")
            triarea.textContent = "面積:"+tri_area()
        }
    }
}
function tri_type(){
    let a = Number(x_t)
    let b = Number(y_t)
    let c = Number(z_t)
    if (a <= 0 || b <= 0 || c <= 0) {
        return -1
    }
    
    if (a + b <= c || a + c <= b || b + c <= a) {
        return -1
    }
    if (a === b && b === c) {
        return 3;
      }
    if(a*a+b*b==c*c || a*a+c*c==b*b || b*b+c*c==a*a ){
        return 0 //直
    }else if( a*a+b*b<c*c || a*a+c*c<b*b || b*b+c*c<a*a){
        return 2//頓
    }else{
        return 1//銳
    }
    
}
function tri_perimeter(){
    let a = Number(x_t)
    let b = Number(y_t)
    let c = Number(z_t)
    return a+b+c

}
function tri_area(){
    let a = Number(x_t)
    let b = Number(y_t)
    let c = Number(z_t)
    var s = (a+b+c)/2;
    return Math.sqrt(s*((s-a)*(s-b)*(s-c)));
}