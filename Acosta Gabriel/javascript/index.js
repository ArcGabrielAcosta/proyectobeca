alert ("Funciona");
function ListaTurnos(){
    var submenu_turnos = document.getElementById("submenu_turnos");
    if (submenu_turnos.classList.contains("submenu_turnos")) {
     submenu_turnos.classList.remove("submenu_turnos");
    } else {
     submenu_turnos.classList.add("submenu_turnos");
    }
 }