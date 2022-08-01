
//----- Elements for observer (activate animations)-------



const home = document.getElementById('imagenPag1id')
const works = document.getElementById('imagenPag2id');
const aboutMe = document.getElementById('imagenPag3id');
const contactMe = document.getElementById('imagenPag4id');
const snapScroll = document.getElementById('snap');
const presentacion2 = document.getElementsByClassName('worksPag2');


//------ Items for class change----------------------

const barra1 = document.getElementById('barra-pag1');
const barra2 = document.getElementById('barra-pag2');
const barra3 = document.getElementById('barra-pag3');
const barra4 = document.getElementById('barra-pag4');



//------ Observer---------------------------------------




const cargarAnimacion = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting && entrada.target.id == 'imagenPag1id') {
            console.log('Animacion 1 ON');
            barra2.classList.remove('barra-blanca-scroll-stay');
            barra1.classList.add('barra-blanca-scroll-stay');

        }

        if (entrada.isIntersecting && entrada.target.id == 'imagenPag2id') {
            console.log('Animacion 2 ON');
            barra3.classList.remove('barra-blanca-scroll-stay');
            barra1.classList.remove('barra-blanca-scroll-stay');
            barra2.classList.add('barra-blanca-scroll-stay');
            barra1.classList.add('barra-blanca-scroll');
            presentacion2.classList.remove('worksPag2');
            

        } if (entrada.isIntersecting && entrada.target.id == 'imagenPag3id') {
            console.log('Animacion 3 ON');
            barra2.classList.remove('barra-blanca-scroll-stay');
            barra4.classList.remove('barra-blanca-scroll-stay');
            barra3.classList.add('barra-blanca-scroll-stay');
            
        } if (entrada.isIntersecting && entrada.target.id == 'imagenPag4id') {
            console.log('Animacion 4 ON');
            barra3.classList.remove('barra-blanca-scroll-stay');
            barra4.classList.add('barra-blanca-scroll-stay');
            
        } 
    });
}

const observador = new IntersectionObserver(cargarAnimacion, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});
observador.observe(home);
observador.observe(works);
observador.observe(aboutMe);
observador.observe(contactMe);




