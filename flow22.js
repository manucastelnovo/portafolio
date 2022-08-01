/*Deteccion de la pagina en la que estamos y asignacion de respectiva animacion*/

const snapScroll = document.getElementById('snap');
const works = document.getElementById('works2');

snapScroll.addEventListener('scroll', function () {
    let animation = document.getElementById('scrollOne');
    let positionObj1 = animation.getBoundingClientRect().bottom;
    console.log(positionObj1);

    if (positionObj1 >= 600) {
        console.log('pagina 1');
        works.classList.remove('animacionPag2');
        
    } else if (positionObj1 <= 600 && positionObj1 >= 559 ) {
        works.classList.add('animacionPag2');
        console.log('Pagina 2');
    } else if (positionObj1 <= -29 && positionObj1 >= -30) {
        console.log('pagina 3')
    }else if (positionObj1 <= -620 && positionObj1 >= -621){
        console.log('pagina 4')
    }
});
/*
if (positionObj1 >= 600) {
    console.log('pagina 1');
    works.classList.remove('animacionPag2');
    
} else if (positionObj1 <= 600 && positionObj1 >= -1 ) {
    works.classList.add('animacionPag2');
    console.log('Pagina 2');
} else if (positionObj1 <= -29 && positionObj1 >= -618) {
    console.log('pagina 3')
}else if (positionObj1 <= -620 && positionObj1 >= -1229){
    console.log('pagina 4')
}*/