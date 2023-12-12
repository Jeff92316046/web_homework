function init(){
    var title = document.getElementById("title")
    title.innerHTML = "Thank you!!"+localStorage.getItem("name") + " " +localStorage.getItem("surname")
    var times = document.getElementById("times")
    times.textContent = "memory game : "+localStorage.getItem("times")+"times"
    var point = document.getElementById("point")
    point.textContent = "test point  : "+localStorage.getItem("testpoint")+"point"
}
