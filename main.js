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

    darkmode.classList.toggle('hide');
    darkmode.classList.toggle('upward');

    
})




//// DARKMODE
const darkmode = document.querySelector('#darkmode')
const sol = document.querySelector('#sol')
const luna = document.querySelector('#luna')


darkmode.addEventListener('click', function () {

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

// const precioeth = document.querySelector('#precioeth')
// const preciobtc = document.querySelector('#preciobtc')
// const preciousd = document.querySelector('#preciousd')
// const preciopesos = document.querySelector('#preciopesos')



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

            let menunav = document.getElementById("menunav")

            window.onscroll = function() {myFunction()};


            function myFunction() {
                if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
                  document.getElementById("menunav").className = "menu-item-mini";
                }
              }


              menunav.addEventListener('mouseover', function () {

                menunav.classList.remove('menu-item-mini');
            })

/// WHATSAPP 


// const wainputnombre = document.querySelector('#wainputnombre')
const nombrewa = document.querySelector('#nombrewa')
const fechaentrada = document.querySelector('#fechaentrada')
const fechasalida = document.querySelector('#fechasalida')
const huespedes = document.querySelector('#huespedes')

const wanombre = document.querySelector('#wanombre')
const wafechaing = document.querySelector('#wafechaing')
const wafechasal = document.querySelector('#wafechasal')
const wacantidad = document.querySelector('#wacantidad')



let form = document.getElementById('form');

form.addEventListener("input", function(e) {
    e.preventDefault();

      nombre.addEventListener('input', () => {
        wanombre.setAttribute('data-text', nombre.value)

        wanombre.innerHTML = wanombre.getAttribute('data-text')

    if ((nombre.value).length === 0) {
        wanombre.innerHTML = 'Empty'
    }

    })

    // FECHA ENTRADA
    fechaentrada.addEventListener('input', () => {
        wafechaing.setAttribute('data-text', fechaentrada.value)

        wafechaing.innerHTML = wafechaing.getAttribute('data-text')

    if ((fechaentrada.value).length === 0) {
        wafechaing.innerHTML = 'Empty'
    }

    })



})



// ARCHIVAR SOLICITUDES

let nuevasSolicitudes =  []

 

const enviarmensaje = document.querySelector('#enviarmensaje')

enviarmensaje.addEventListener('click', () => {



    let nuevaSolicitud = {
        nombre: nombre.value,
        fechaentrada: fechaentrada.value,
        fechasalida: fechasalida.value,
        huespedes: huespedes.value,
    };

    form.reset();

    localStorage.setItem("nuevasSolicitudes", JSON.stringify(nuevaSolicitud));

    nuevasSolicitudes.push(nuevaSolicitud); 

    localStorage.setItem("nuevaSolicitud", JSON.stringify(nuevasSolicitudes));

console.log(nuevasSolicitudes)




let whatsappmessage =  "https://wa.me/+5492945589660?text=¡Hola!+Mi+nombre+es+" + `${nuevaSolicitud.nombre}` + ".+Quería+saber+si+tenían+habitación+disponible+para+la+fecha+" + `${nuevaSolicitud.fechaentrada}` + "+hasta+la+fecha+" + `${nuevaSolicitud.fechasalida}` + ".+ Somos+" + `${nuevaSolicitud.huespedes}` + "+personas.+¡Muchas+gracias!+";

console.log(whatsappmessage)

window.location.replace(whatsappmessage)

})







///////////////////////////////////////////
///// CLICK BOTON DE WHATSAPP/////////
//ENVIAR EL MENSAJE SE CAMBIA DE TEXTO A LOGO DE ENVIAR///



const enviartext = document.querySelector("#enviartext")
const wasendlogo = document.querySelector("#wasendlogo")


enviarmensaje.addEventListener('click', () => {


    setTimeout(function() { 

        $("#enviartext").fadeOut(50)
        $("#wasendlogo").fadeIn(500)    
        
        enviartext.classList.add('hide');
        wasendlogo.classList.remove('hide');
    },100)

})
            