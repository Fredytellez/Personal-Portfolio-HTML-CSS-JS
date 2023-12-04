let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
}

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
    //Al dar click pondra el icono de sol
    themeToggler.classList.toggle("fa-sun");
    // Si el icono es el sol, agregara la clase .active
    if(themeToggler.classList.contains("fa-sun")){
        document.body.classList.add("active");
        // De lo contrario removera la clase .active   
    }else {
        document.body.classList.remove("active")
    }
}

