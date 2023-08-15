let vehiculo1 = "Hyundai grand I10 SD 2015 WHITE"
let vehiculo1precioconiva = 3500000 * 1.25
alert("ATENCION!! Estas a punto de comprar el siguiente vehiculo: " + vehiculo1 + " ( $" + vehiculo1precioconiva + " )")

const guardardatos = document.getElementById("guardar")
const aceptardatos = document.getElementById("aceptar")

inombre = document.getElementById("inombre")
indni = document.getElementById("indni")
inmail = document.getElementById("inmail")
intarjeta = document.getElementById("intarjeta")
incod = document.getElementById("incod")
inpais = document.getElementById("inpais")
indomicilio = document.getElementById("indireccion")
incantidad = document.getElementById("incantidad")


guardardatos.addEventListener("click", function () {

    sessionStorage.setItem("Nombre Completo", inombre.value)
    sessionStorage.setItem("DNI", indni.value)
    sessionStorage.setItem("E-mail", inmail.value)
    sessionStorage.setItem("Datos de la Tarjeta", intarjeta.value)
    sessionStorage.setItem("Codigo de Seguridad de la Tarjeta", incod.value)
    sessionStorage.setItem("Nacionalidad", inpais.value)
    sessionStorage.setItem("Domicilio", indomicilio.value)
    sessionStorage.setItem("Cantidad de autos", incantidad.value)
})


const ttl = document.querySelector('datosdecompra')

aceptardatos.addEventListener("click", () => {
    const info = document.createElement('div')
    info.classList.add("datosdecompra")
    info.innerHTML =

        `<h3> Felicidades ` + inombre.value + ` usted adquirio ` + incantidad.value + ` vehiculo/s  Hyundai grand I10 SD 2015. </h3>
<p> El precio final seria de  $`+ (incantidad.value * vehiculo1precioconiva) + `.  Proximamente le estaremos enviando el comprobante de compra a este mail: ` + inmail.value
    aceptardatos.appendChild(info)

})