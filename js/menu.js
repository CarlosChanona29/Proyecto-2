const iniciohtml = document.querySelector('.iniciohtml')
const menu = document.querySelector('.menu-navegacion')

console.log(menu);
console.log(iniciohtml)

iniciohtml.addEventListener('click',()=>{
    menu.classList.toggle("spead")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spead')
        && e.target != menu && e.target != iniciohtml){
            menu.classList.toggle("spead")
    }
})