let vehiculo4 = "Hyundai CRETA GRAND 2023"
let vehiculo4precioconiva = 8500000 * 1.25
alert("ATENCION!! Estas a punto de comprar el siguiente vehiculo: " + vehiculo4 + " ( $" + vehiculo4precioconiva + " )")

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

const ttl = document.querySelector('.h3')
aceptardatos.addEventListener("click", () => {
    const info = document.createElement('section')
    info.classList.add("h3")
    info.innerHTML =

        `<h3> Felicidades ` + inombre.value + ` usted adquirio ` + incantidad.value + ` vehiculo/s  Hyundai SANTA FE 2019 RED. </h3>  `
            `<p> El precio final seria de  $` + (incantidad.value * vehiculo4precioconiva) + `.  Proximamente le estaremos enviando el comprobante de compra a este mail: ` + inmail.value;
    aceptardatos.appendChild(info)
})