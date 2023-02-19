let main = document.getElementById('main');
let logo = document.getElementById('logo');




logo.setAttribute("src", 'img/img_index/alfred-logo-white.svg');

let nav = document.getElementById("nav")
let menu = document.getElementById("menu")
function mostrasScroll() {
    let scrolltop = document.documentElement.scrollTop
    let alturaAnimado = nav.offsetTop
    if (alturaAnimado + 150 < scrolltop) {
        nav.classList.add('bg-white')
        nav.classList.add('transition')
        nav.classList.add('duration-400')
        menu.classList.add('text-black')
        logo.setAttribute("src", 'img/img_index/alfred-logo.svg');
    }
}

function ocultarScroll() {
    let scrolltop = document.documentElement.scrollTop
    let alturaAnimado = nav.offsetTop
    if (alturaAnimado < scrolltop) {
        nav.classList.remove('bg-white')
        menu.classList.remove('text-black')
        menu.classList.add('text-white')
        logo.setAttribute("src", 'img/img_index/alfred-logo-white.svg');
    }
}

window.addEventListener('scroll', ocultarScroll)
window.addEventListener('scroll', mostrasScroll)





main.style.backgroundImage = 'url(img/img_index/header_img_3.jpg)'
main.style.backgroundRepeat= "no-repeat";
main.style.backgroundPosition= "center";
main.style.backgroundSize= "cover";
    

