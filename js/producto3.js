let vehiculo3 = "Hyundai TUCSON 2015"
let vehiculo3precioconiva = 5500000 * 1.25
Swal.fire("ATENCION!! Estas a punto de comprar el siguiente vehiculo: " + vehiculo3 + " ( $" + vehiculo3precioconiva + " )")

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

const ttl = document.querySelector('.datosdecompra')

aceptardatos.addEventListener("click", () => {
    const info = document.createElement('div')
    info.classList.add("datosdecompra")
    info.innerHTML =

        `<h3> Felicidades ` + inombre.value + ` usted adquirio ` + incantidad.value + ` vehiculo/s ` + vehiculo3 + ` . </h3>
<p> El precio final seria de  $`+ (incantidad.value * vehiculo3precioconiva) + `.  Proximamente le estaremos enviando el comprobante de compra a este mail: ` + inmail.value
ttl.appendChild(info)
})