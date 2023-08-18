let vehiculo4 = "Hyundai CRETA GRAND 2023"
let vehiculo4precioconiva = 8500000 * 1.25
Swal.fire("ATENCION!! Estas a punto de comprar el siguiente vehiculo: " + vehiculo4 + " ( $" + vehiculo4precioconiva + " )")

const guardardatos = document.getElementById("guardar")
const aceptardatos = document.getElementById("aceptar")

const inombre = document.getElementById("inombre")
const indni = document.getElementById("indni")
const inmail = document.getElementById("inmail")
const intarjeta = document.getElementById("intarjeta")
const incod = document.getElementById("incod")
const inpais = document.getElementById("inpais")
const indomicilio = document.getElementById("indireccion")
const incantidad = document.getElementById("incantidad")

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

aceptardatos.addEventListener("click", (e) => {
  e.preventDefault()  
  if (inmail.value.length == 0 || inombre.value.length == 0 || indni.value.length == 0 || inpais.value.length == 0 || indomicilio.value.length == 0 || incod.value.length == 0 || 
    intarjeta.value.length == 0 || incantidad.value.length == 0){
    alert("Porfavor COMPLETE LOS DATOS")
}else {
    Swal.fire({
        icon: 'success',
        title: `Felicidades `  + inombre.value + ` usted adquirio `  + incantidad.value + ` vehiculo/s `
        + vehiculo4 + `. El precio final seria de  $`+ (incantidad.value * vehiculo4precioconiva) +
         `.  Proximamente le estaremos enviando el comprobante de compra a este mail: ` + inmail.value,
       
        footer: '<a href="../index.html">Toque aqui para volver al inicio</a>'
      })}
})