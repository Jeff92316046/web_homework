function login(){
    var no = document.getElementById("no")
    localStorage.setItem("no",no.value)
    var name = document.getElementById("name")
    localStorage.setItem("name",name.value)
    var surname = document.getElementById("surname")
    localStorage.setItem("surname",surname.value)
    window.location.href = "./memory_game.html";
}    