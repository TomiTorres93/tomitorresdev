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






//// DARKMODE
const lightmode = document.querySelector('#lightmode')
const sol = document.querySelector('#sol')
const luna = document.querySelector('#luna')


lightmode.addEventListener('click', function () {

    bio2.classList.toggle('whitemode');
    luna.classList.toggle('hide');
    luna.classList.toggle('upward');
    sol.classList.toggle('hide');
    sol.classList.toggle('upward');
    darkmode.classList.toggle('darkmodeback');

})




    ///////////////////////
    ////BOTONES PRECIOS////
    ///////////////////////

    const botonpesos = document.querySelector('#botonpesos')
    const botonstable = document.querySelector('#botonstable')
    const botoneth = document.querySelector('#botoneth')
    const botonbtc = document.querySelector('#botonbtc')


    const preciofinalpesos = document.querySelector('#preciofinalpesos')
    const preciofinalusd = document.querySelector('#preciofinalusd')
    const preciofinalethcont = document.querySelector('#preciofinalethcont')
    const preciofinalbtccont = document.querySelector('#preciofinalbtccont')




    function elegirprecio(a, b, c, d, e, f, g, h) {

    a.addEventListener('click', function () {

        a.classList.add('monedaactiva');
        b.classList.remove('hide');
        b.classList.toggle('side');

        c.classList.add('hide');
        

        d.classList.add('hide');

        e.classList.add('hide');

        f.classList.remove('monedaactiva');
        g.classList.remove('monedaactiva');
        h.classList.remove('monedaactiva');


    
    })}

    let elegirpesos = elegirprecio(botonpesos, preciofinalpesos, preciofinalusd, preciofinalethcont, preciofinalbtccont, botonstable, botoneth, botonbtc)

    let elegirusd = elegirprecio(botonstable, preciofinalusd, preciofinalpesos,  preciofinalethcont, preciofinalbtccont, botonpesos, botoneth, botonbtc)

    let elegireth = elegirprecio(botoneth, preciofinalethcont, preciofinalpesos, preciofinalusd,  preciofinalbtccont, botonpesos, botonstable, botonbtc)

    let elegirbtc = elegirprecio(botonbtc, preciofinalbtccont, preciofinalpesos, preciofinalusd, preciofinalethcont, botonpesos, botonstable, botoneth)




    ////////////////////////////////
////////SECCION PRECIOS/////////
////////////////////////////////

const landing = document.querySelector('#landing')
const multipage = document.querySelector('#multipage')
const paginas = document.querySelector('#paginas')
const cincopag = document.querySelector('#cincopag')
const diezpag = document.querySelector('#diezpag')
const hastadiez = document.querySelector('#hastadiez')

  const precioeth2 = document.querySelector('#precioeth')
 const preciobtc2 = document.querySelector('#preciobtc')
  const preciousd2 = document.querySelector('#preciousd')
  const preciopesos2 = document.querySelector('#preciopesos')



const preciopesoscinco = document.querySelector('#preciopesoscinco')
const preciopesosdiez = document.querySelector('#preciopesosdiez')

const preciousdcinco = document.querySelector('#preciousdcinco')
const preciousddiez = document.querySelector('#preciousddiez')

const precioethcinco = document.querySelector('#precioethcinco')
const precioethdiez = document.querySelector('#precioethdiez')

const preciobtccinco = document.querySelector('#preciobtccinco')
const preciobtcdiez = document.querySelector('#preciobtcdiez')


multipage.addEventListener('click', function () {
    paginas.classList.toggle('side');
    paginas.classList.toggle('hide');
    hastadiez.classList.toggle('hide');

})

landing.addEventListener('click', function () {
    paginas.classList.add('hide');
    hastadiez.classList.remove('hide');

})

function cambiarPrecio (a,b,c,d,e,f,g,h,i,j,k,l,m) {

    a.addEventListener('click', function () {
        
        b.classList.add('hide');
        c.classList.add('hide');
        d.classList.add('hide');
        e.classList.add('hide');
        f.classList.add('hide');
        g.classList.add('hide');
        h.classList.add('hide');
        i.classList.add('hide');

        j.classList.remove('hide');
        k.classList.remove('hide');
        l.classList.remove('hide');
        m.classList.remove('hide');



    })
    
}

let cambiarLanding = cambiarPrecio (landing,preciopesoscinco,preciopesosdiez,preciousdcinco,preciousddiez,precioethcinco,precioethdiez,preciobtccinco,preciobtcdiez, precioeth,preciobtc,preciousd,preciopesos)


let cambiarMultiC = cambiarPrecio (cincopag,preciopesos,preciopesosdiez,preciousd,preciousddiez,precioeth,precioethdiez,preciobtc,preciobtcdiez, precioethcinco,preciobtccinco,preciousdcinco,preciopesoscinco)

let cambiarMultiD = cambiarPrecio (diezpag,preciopesoscinco,preciopesos,preciousdcinco,preciousd,precioethcinco,precioeth,preciobtccinco,preciobtc, precioethdiez,preciobtcdiez,preciousddiez,preciopesosdiez)






/////// COTIZACIONES

//ETH 
setTimeout(function() {
    precioeth = document.getElementById("precioeth")
    
    document.getElementById("precioeth")
    fetch('https://criptoya.com/api/eth/usd/0.1')
    .then(response => response.json())
    .then(data => {
        let ethPrice = data.bitex.ask;
        $("#precioeth").append(`
        <span> <strong> ${(99/ethPrice).toFixed(3)}</strong> </span>
     `)
        
    });


    }, 10);

   //ETH 
setTimeout(function() {
    precioeth = document.getElementById("precioeth")
    
    document.getElementById("precioeth")
    fetch('https://criptoya.com/api/eth/usd/0.1')
    .then(response => response.json())
    .then(data => {
        let ethPrice = data.bitex.ask;
        $("#precioethcinco").append(`
        <span> <strong> ${(119/ethPrice).toFixed(3)}</strong> </span>
     `)
        
    });


    }, 10);
    
    //ETH 
setTimeout(function() {
    precioeth = document.getElementById("precioeth")
    
    document.getElementById("precioeth")
    fetch('https://criptoya.com/api/eth/usd/0.1')
    .then(response => response.json())
    .then(data => {
        let ethPrice = data.bitex.ask;
        $("#precioethdiez").append(`
        <span> <strong> ${(139/ethPrice).toFixed(3)}</strong> </span>
     `)
        
    });


    }, 10);

    
    //BTC 
setTimeout(function() {
    preciobtc = document.getElementById("preciobtc")
    
    document.getElementById("preciobtc")
    fetch('https://criptoya.com/api/btc/usd/0.1')
    .then(response => response.json())
    .then(data => {
        let btcPrice = data.bitex.ask;
        $("#preciobtc").append(`
        <span> <strong> ${(99/btcPrice).toFixed(4)}</strong> </span>
     `)
        
    });


 
    }, 10);

        //BTC  5
setTimeout(function() {
    preciobtc = document.getElementById("preciobtc")
    
    document.getElementById("preciobtc")
    fetch('https://criptoya.com/api/btc/usd/0.1')
    .then(response => response.json())
    .then(data => {
        let btcPrice = data.bitex.ask;
        $("#preciobtccinco").append(`
        <span> <strong> ${(119/btcPrice).toFixed(4)}</strong> </span>
     `)
        
    });


 
    }, 10);

        //BTC 10
setTimeout(function() {
    preciobtc = document.getElementById("preciobtc")
    
    document.getElementById("preciobtc")
    fetch('https://criptoya.com/api/btc/usd/0.1')
    .then(response => response.json())
    .then(data => {
        let btcPrice = data.bitex.ask;
        $("#preciobtcdiez").append(`
        <span> <strong> ${(139/btcPrice).toFixed(4)}</strong> </span>
     `)
        
    });


 
    }, 10);



        //PESOS - LANDING
        setTimeout(function preciopesosf() {
                preciopesos = document.getElementById("preciopesos")
                
            document.getElementById("preciobtc")
                fetch('https://criptoya.com/api/dolar')
                .then(response => response.json())
                .then(data => {
                    let usdPrice = data.solidario;
                   
            
                    $("#preciopesos").append(`
                    <span id="ppp"> <strong> ${(99*usdPrice).toFixed(0)}</strong> </span>
                 `)
                    
                });
            
            
            
                }, 10);
            
        //PESOS - MULTI 5
        setTimeout(function preciopesosf() {
            preciopesos = document.getElementById("preciopesos")
            
        document.getElementById("preciobtc")
            fetch('https://criptoya.com/api/dolar')
            .then(response => response.json())
            .then(data => {
                let usdPrice = data.solidario;
               
        
                $("#preciopesoscinco").append(`
                <span> <strong> ${(119*usdPrice).toFixed(0)}</strong> </span>
             `)
                
            });
        
        
        
            }, 10);

                    
        //PESOS - MULTI 10
        setTimeout(function preciopesosf() {
            preciopesos = document.getElementById("preciopesos")
            
        document.getElementById("preciobtc")
            fetch('https://criptoya.com/api/dolar')
            .then(response => response.json())
            .then(data => {
                let usdPrice = data.solidario;
               
        
                $("#preciopesosdiez").append(`
                <span> <strong> ${(139*usdPrice).toFixed(0)}</strong> </span>
             `)
                
            });
        
        
        
            }, 10);
            
        


            ///////////////////////
            /// MENU SCROLL //
            /////////////////

            const menunav = document.getElementById("menunav")

            window.onscroll = function() {myFunction()};


    function myFunction() {

        var widthbody = $("#body").width()

        if (widthbody >= 601) {
            
        

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("menunav").className = "menu-item-mini";
        }
    }


    menunav.addEventListener('mouseover', function () {

        menunav.classList.remove('menu-item-mini');
    })} 

 

//// WHATSAPP 




const username = document.querySelector('#username')
const usermessage = document.querySelector('#usermessage')
const email = document.querySelector('#email')
const subject = document.querySelector('#subject')

const mensajewa = document.querySelector('#mensajewa')
const wanombre = document.querySelector('#wanombre')



let form = document.getElementById('form');

form.addEventListener("input", function(e) {
    e.preventDefault();

    // NOMBRE
    username.addEventListener('input', () => {

        console.log(username.value)
    })
 

     // NOMBRE
     usermessage.addEventListener('input', () => {

        console.log(usermessage.value)
    })
 

})
let nuevaSolicitud = []

// ARCHIVAR SOLICITUDES
 

const enviarmensaje = document.querySelector('#enviarmensaje')

enviarmensaje.addEventListener('click', () => {

let nombreform = username.value
let mensajeform = usermessage.value

let nuevoMensaje = {
    nombre: username.value,
    mensaje: usermessage.value,
};
console.log(nuevoMensaje)

let whatsappmessage =  "https://wa.me/+5491164845967?text=Mi+nombre+es+ " + 
`${nombreform}` + ". " + `${mensajeform}`;

console.log(whatsappmessage)

window.open(whatsappmessage)
})


//// ENVIAR MAIL

const enviarmail = document.querySelector('#enviarmail')

enviarmail.addEventListener('click', () => {

enviarmail.setAttribute("href", "mailto:tt@tomitorresdev.com.ar?subject=Consulta Web - "  + username.value + "&body=" + usermessage.value)
})






//////////LIGHTMODE////////////


const darkmode = document.querySelector('#lightmode')
const mailheader = document.querySelector('#mailheader')
const body = document.querySelector('#body')
const menu1 = document.querySelector('#menu1')
const menu2 = document.querySelector('#menu2')
const menu3 = document.querySelector('#menu3')
const menu4 = document.querySelector('#menu4')
const titulotrabajos = document.querySelector('#titulotrabajos')
const tituloskills = document.querySelector('#tituloskills')
const tituloprecio = document.querySelector('#tituloprecio')
const titulocontacto = document.querySelector('#titulocontacto')
const ars = document.querySelector('#ars')
const usd = document.querySelector('#usd')
const eth = document.querySelector('#eth')
const btc = document.querySelector('#btc')
const pp = document.querySelector('#preciopesos')
const pusd = document.querySelector('#preciousd')
const peth = document.querySelector('#precioeth')
const pbtc = document.querySelector('#preciobtc')
const textopeqcont = document.querySelector('#textopeqcont')




lightmode.addEventListener('click', function () {

    $("#menunav").fadeOut(500)
    $("#menunav").fadeIn(500)

    body.classList.toggle('lightback')
        
    tomi.classList.toggle('lightmodebutton');
    torres.classList.toggle('lightmodebutton');
    developer.classList.toggle('lightmodebutton');
    punto.classList.toggle('lightmodebutton');
    tech.classList.toggle('lightmodebutton');

    hoteleria.classList.toggle('lightmodebutton');
    educacion.classList.toggle('lightmodebutton');
    

    htmlbutton.classList.toggle('lightmodebutton');
    cssbutton.classList.toggle('lightmodebutton');
    jsbutton.classList.toggle('lightmodebutton');

    landing.classList.toggle('lightmodebutton');
    multipage.classList.toggle('lightmodebutton');

    preciopesoscinco.classList.toggle('lightmodebutton');
    preciopesosdiez.classList.toggle('lightmodebutton');

    preciousdcinco.classList.toggle('lightmodebutton');
    preciousddiez.classList.toggle('lightmodebutton');

    precioethcinco.classList.toggle('lightmodebutton');
    precioethdiez.classList.toggle('lightmodebutton');

    preciobtccinco.classList.toggle('lightmodebutton');
    preciobtcdiez.classList.toggle('lightmodebutton');


    ars.classList.toggle('lightmodebutton');
    eth.classList.toggle('lightmodebutton');
    usd.classList.toggle('lightmodebutton');
    btc.classList.toggle('lightmodebutton');

    pp.classList.toggle('lightmodebutton');
    pusd.classList.toggle('lightmodebutton');
    peth.classList.toggle('lightmodebutton');
    pbtc.classList.toggle('lightmodebutton');

    username.classList.toggle('lightmodebutton');
    usermessage.classList.toggle('lightmodebutton');

    enviarmensaje.classList.toggle('lightmodebutton');
    enviarmail.classList.toggle('lightmodebutton');


    omi.classList.toggle('lightmodebuttonwhite');
    orres.classList.toggle('lightmodebuttonwhite');
    eveloper.classList.toggle('lightmodebuttonwhite');


    titulotrabajos.classList.toggle('lightext')
    tituloskills.classList.toggle('lightext')
    tituloprecio.classList.toggle('lightext')
    titulocontacto.classList.toggle('lightext')
    textopeqcont.classList.toggle('lightext')

    menu1.classList.toggle('lightmenu')
    menu2.classList.toggle('lightmenu')
    menu3.classList.toggle('lightmenu')
    menu4.classList.toggle('lightmenu')



        ;})

    

////////////////////////////////////////////
///////////////// MENU MOBILE //////////////
////////////////////////////////////////////



/////////////// ESCONDER SI ES MOBILE //////////////
const menumobilebutton = document.querySelector('#menumobilebutton');


var widthbody = $("#body").width()

console.log(widthbody)

function addhideifmobile (a) {
    var widthbody = $("#body").width()

    if (widthbody <= 600) {
        a.classList.add('hide')
    } 
}


let hidemenu = addhideifmobile(menunav)


/////////////// ESCONDER MENU SI ES DESKTOP //////////////

function addhideifdesktop (a) {
    var widthbody = $("#body").width()

    if (widthbody >= 601) {
        a.classList.add('hide')
    } 
}

let hidemenumobbutton = addhideifdesktop(menumobilebutton)

/////////////// BOTÓN MENÚ MOBILE //////////////


function fade (a) {

    let check = a.classList.contains('hide')

    console.log(check)

    if (check == true) {
        a.classList.add('infade');
    } if (check == false) {
        a.classList.add('outfade');
    }
}



menumobilebutton.addEventListener('click', function () {

   


    menunav.classList.toggle('hide');

    menumobilebutton.classList.toggle('rotar');

})


// CERRAR EL MENU AL CLICKEAR EN UNA OPCIÓN

function cerrarmenumobile (a) {
    a.addEventListener('click', function () {  

        var widthbody = $("#body").width()

        if (widthbody <= 600) {
            menunav.classList.toggle('hide');
            menumobilebutton.classList.toggle('rotar');
    
        } 
        

}
     ) }

let cerrarmenu1 = cerrarmenumobile (menu1)
let cerrarmenu2 = cerrarmenumobile (menu2)
let cerrarmenu3 = cerrarmenumobile (menu3)
let cerrarmenu4 = cerrarmenumobile (menu4)


