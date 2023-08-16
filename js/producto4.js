let vehiculo4 = "Hyundai CRETA GRAND 2023"
let vehiculo4precioconiva = 8500000 * 1.25
Swal.fire("ATENCION!! Estas a punto de comprar el siguiente vehiculo: " + vehiculo4 + " ( $" + vehiculo4precioconiva + " )")

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
    Swal.fire({
        icon: 'success',
        title: `Felicidades `  + inombre.value + ` usted adquirio `  + incantidad.value + ` vehiculo/s `
        + vehiculo4 + `. El precio final seria de  $`+ (incantidad.value * vehiculo4precioconiva) +
         `.  Proximamente le estaremos enviando el comprobante de compra a este mail: ` + inmail.value,
       
        footer: '<a href="../index.html">Toque aqui para volver al inicio</a>'
      })
})