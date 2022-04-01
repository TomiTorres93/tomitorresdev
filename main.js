const tomi = document.querySelector('#tomi')
const torres = document.querySelector('#torres')
const developer = document.querySelector('#developer')
const punto = document.querySelector('#punto')


const omi = document.querySelector('#omi')
const orres = document.querySelector('#orres')
const eveloper = document.querySelector('#eveloper')
const proximamente = document.querySelector('#proximamente')


function mouseenterportada (a, b) {
    a.addEventListener('mouseenter', function () {


        b.classList.add('side');
        b.classList.remove('hide');
    
    })
}


let tomimouseenter = mouseenterportada (tomi, omi)
let torresmouseenter = mouseenterportada (torres, orres)
let developermouseenter = mouseenterportada (developer, eveloper)
let puntomouseenter = mouseenterportada (punto, proximamente)





////////////////////////////////
///DESPLEGAR DESKTOP Y MOBILE///
////////////////////////////////

const tech = document.querySelector('#tech')
const techdesk = document.querySelector('#techdesk')
const techmobile = document.querySelector('#techmobile')

const hoteleria = document.querySelector('#hoteleria')
const hoteleriadesk = document.querySelector('#hoteleriadesk')
const hoteleriamobile = document.querySelector('#hoteleriamobile')

const educacion = document.querySelector('#educacion')
const educaciondesk = document.querySelector('#educaciondesk')
const educacionmobile = document.querySelector('#educacionmobile')


const techdeskmobcont = document.querySelector('#techdeskmobcont')
const hoteleriadeskmobcont = document.querySelector('#hoteleriadeskmobcont')
const educaciondeskmobcont = document.querySelector('#educaciondeskmobcont')


function deskmobclick (a, b) {
    a.addEventListener('click', function () {

        b.classList.toggle('hide');
        b.classList.toggle('side');     
   
    })
}


let techdeskmobclick = deskmobclick (tech, techdeskmobcont)
let hoteleriadeskmobclick = deskmobclick (hoteleria, hoteleriadeskmobcont)
let educacionhdeskmobclick = deskmobclick (educacion, educaciondeskmobcont)



////////////////////////////////
///SELECCIÓN DESKTOP Y MOBILE///
////////////////////////////////

const hodlersdeskvideo = document.querySelector('#hodlersdeskvideo')
const hodlersmobvideo = document.querySelector('#hodlersmobvideo')
const miradasdeskvideo = document.querySelector('#miradasdeskvideo')
const miradasmobvideo = document.querySelector('#miradasmobvideo')
const eymdeskvideo = document.querySelector('#eymdeskvideo')
const eymmobvideo = document.querySelector('#eymmobvideo')
const static = document.querySelector('#static')
const paginascheck = document.querySelector('#paginascheck')




function deskmobseleccion (a, b, c, d, e, f, g) {
    a.addEventListener('click', function () {


        static.classList.add('hide');

        b.classList.toggle('hide');
        b.classList.toggle('upward');
        
        // Chequea que el desktop o mobile de la misma categoría contenga hide

        let check = c.classList.contains('hide')

        // Chequea que el desktop o mobile de las otras categorías contenga hide

        let checkd = d.classList.contains('hide')
        let checke = e.classList.contains('hide')

        let checkf = f.classList.contains('hide')
        let checkg = g.classList.contains('hide')


        if (check == false) {
            c.classList.toggle('hide');
        }

        if (checkd == false) {
            d.classList.toggle('hide');
        }

        if (checke == false) {
            e.classList.toggle('hide');
        }

        if (checkf == false) {
            f.classList.toggle('hide');
        }

        if (checkg == false) {
            g.classList.toggle('hide');
        }

        //CHEQUEA QUE ESTÉ AL MENOS UN VIDEO VISIBLE. SI NO ESTÁ AL MENOS UNO VISIBLE, SE REACTIVA LA PLACA ESTÁTICA

        let check1 = $(hodlersdeskvideo).is(":visible")
        let check2 = $(hodlersmobvideo).is(":visible")
        let check3 = $(miradasdeskvideo).is(":visible")
        let check4 = $(miradasmobvideo).is(":visible")
        let check5 = $(eymdeskvideo).is(":visible")
        let check6 = $(eymmobvideo).is(":visible")



        if (check1 == false && check2 == false && check3 == false && check4 == false && check5 == false && check6 == false) {
            static.classList.remove('hide');
        }
   
    })
}

let hodlersclickdesk = deskmobseleccion (techdesk, hodlersdeskvideo, hodlersmobvideo, miradasdeskvideo, miradasmobvideo, eymdeskvideo, eymmobvideo)
let hodlersclickmob = deskmobseleccion (techmobile, hodlersmobvideo, hodlersdeskvideo, miradasdeskvideo, miradasmobvideo, eymdeskvideo, eymmobvideo)

let miradasclickdesk = deskmobseleccion (hoteleriadesk, miradasdeskvideo, miradasmobvideo, hodlersdeskvideo, hodlersmobvideo, eymdeskvideo, eymmobvideo)
let miradasclickmob = deskmobseleccion (hoteleriamobile, miradasmobvideo, miradasdeskvideo, hodlersdeskvideo, hodlersmobvideo, eymdeskvideo, eymmobvideo)

let educacionclickdesk = deskmobseleccion (educaciondesk, eymdeskvideo, eymmobvideo, miradasmobvideo, miradasdeskvideo, hodlersdeskvideo, hodlersmobvideo)
let educacionclickmob = deskmobseleccion (educacionmobile, eymmobvideo, eymdeskvideo, miradasmobvideo, miradasdeskvideo, hodlersdeskvideo, hodlersmobvideo)




////////////////////////////////
////////SECCION SKILLS//////////
////////////////////////////////

const htmlbutton = document.querySelector('#htmlbutton')
const cssbutton = document.querySelector('#cssbutton')
const jsbutton = document.querySelector('#jsbutton')
const bio = document.querySelector('#bio')
const bio2 = document.querySelector('#bio2')
const hacemeclick = document.querySelector('#hacemeclick')
const botonsubmit = document.querySelector('#botonsubmit')
const nombre = document.querySelector('#nombre')



htmlbutton.addEventListener('click', function () {

    bio.classList.toggle('hide');
    bio.classList.toggle('upward');
    
    
})


cssbutton.addEventListener('click', function () {

    bio2.classList.toggle('bio');
})


jsbutton.addEventListener('click', function () {

    nombre.classList.toggle('hide');
    nombre.classList.toggle('upward');

    
})





// $('#nombre').bind('keyup change',function(){
//     if(this.value.length > 0){
//       $('#botonsubmit').show();

// }
// else {
//     $('#botonsubmit').hide();
// }
// });


// const inputnombre = document.querySelector('#inputnombre')

// let form = document.getElementById('form');

// form.addEventListener("input", function(e) {
//     e.preventDefault();
    
//     console.log(nombre.value)
// })


  

// // `${nuevaSolicitud.nombre}`

// const confia = document.querySelector('#confia')
 

// botonsubmit.addEventListener('click', function () {

//     confia2.innerHTML = nombre.value;
//     confia.classList.toggle('hide');
// })
