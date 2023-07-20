

debugger
function Nombre() {
    nombreingresado = prompt("Ingrese su Nombre Completo")

    if (nombreingresado == "") {
        alert("Ingrese un Nombre valido")
        Nombre()
    }
    else {
        alert("Bienvenido " + nombreingresado + ". A continuacion entraras en una negociacion con nuestros consecionarios por el Hyundai VLV 2.0")
    }
}
Nombre()

debugger
function ComprarAuto() {
    const PrecioHyundai = 5000000
    const Hyundaiconiva = PrecioHyundai * 1.25
    alert("!!AVISO¡¡ El precio final del Hyundai se grava por la aplicacion del IVA, por lo tanto su precio final seria :$ " + Hyundaiconiva + ". Dicho precio sera la base de la negociacion, para facilitar la negociacion le recomendamos ofertar mas de lo establecido ya que nuestros dueños son ratones")
    dineroofrecido = parseFloat(prompt("Cual es el dinero que tiene pensado ofertar por el Hyundai VLV 2.0?"))

    if (dineroofrecido < Hyundaiconiva) {
        alert("Usted oferto: " + dineroofrecido + "$ . No es el precio que estamos buscando para la venta del vehiculo, pruebe con otra oferta")
        ComprarAuto()
    }
    else if (dineroofrecido == Hyundaiconiva) {
        alert("Usted oferto: " + dineroofrecido + "$ . Acepto la oferta, por ese dinero tambien le ofrezco alguno de estos tres vehiculos modelos 2021")
        alert("Detelles de la compra:  Precio: $" + Hyundaiconiva + ". Kilometraje : 30.200km.  Modelo del vehiculo: VOLVEN 2019                                                Los dejamos en el inicio de nuestra pagina para que puedan seguir viendo las ofertas que tenemos sobre otros vehiculos "
        )
    }
    else if (dineroofrecido > Hyundaiconiva) {
        cambio = parseFloat(dineroofrecido - Hyundaiconiva)
        alert("Compra exitosa, aqui tiene su vuelto: $ " + cambio)
        alert("Detelles de la compra:  Precio: $" + Hyundaiconiva + ". Kilometraje : 30.200km.  Modelo del vehiculo: VOLVEN 2019                                                Los dejamos en el inicio de nuestra pagina para que puedan seguir viendo las ofertas que tenemos sobre otros vehiculos "
        )
    }

    else {
        alert("Ingrese una oferta valida")
        ComprarAuto()
    }

}
ComprarAuto()



class Vehiculos {
    constructor(id, marca, modelo, precio, stock, añosDeUso, kilometraje) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = parseFloat(precio);
        this.stock = stock;
        this.añosDeUso = añosDeUso;
        this.kilometraje = kilometraje;
        this.precioconiva = this.precio * 1.25
    }

}
const vehiculo1 = new Vehiculos(102421, "Hyundai", "GRAND I10 SD 2015", 3500000, 20, 6, 125000);
const vehiculo2 = new Vehiculos(465465, "Hyundai", "PALISADE 2011", 2500000, 13, 1, 69000);
const vehiculo3 = new Vehiculos(1014210, "Hyundai", "TUCSON 2015", 5500000, 20, 2, 12000);

/*PROXIMAMENTE EN LA PAGINA NUEVOS VEHICULOS*/
const vehiculo4 = new Vehiculos(1024210, "Hyundai", "CRETA GRAND 2023", 8500000, 10, 9, 80000);
const vehiculo5 = new Vehiculos(1024210, "Hyundai", "SANTA FE 2019", 700000, 8, 3, 5000);



console.log("Modelo del vehiculo 1: " + vehiculo1.modelo)
console.log("Precio + iva del vehiculo 2: " + vehiculo2.precioconiva)
console.log("Kilometraje del vehiculo 3: " + vehiculo3.kilometraje)
console.log("Años de uso del vehiculo 1: " + vehiculo1.añosDeUso)
console.log("Marca del vehiculo 3: " + vehiculo3.marca)

console.log("kilometraje" in vehiculo1)


const Seguros = ["Rivadavia", "Sancor S.A", "La Caja", "La Mercantil Andina S.A", "Allianz", "Escudo Seguros"]
Seguros.push("Federacion Patronal")

console.log("El vehiculo 2 esta asegurado con la siguiente compañia: " + Seguros[0] + " .Desea cambiar de compañia?")
console.log("El vehiculo 1 esta asegurado con la siguiente compañia: " + Seguros[6] + " .Desea cambiar de compañia?")



class LlantasNuevasHyundai {
    constructor(id, medidas, rin, velocidad, presion, precio) {

        this.id = id;
        this.medidas = medidas;
        this.rin = rin;
        this.velocidad = velocidad;
        this.presion = presion;
        this.precio = parseInt(precio);

    }
    ivallantas() {
        return this.precio * 1.25
    }
}
const llantas = []
llantas.push(new LlantasNuevasHyundai(325418, "XL", "61cm", "190 km/h", "28", 100500))
llantas.push(new LlantasNuevasHyundai(9712354, "LT", "40cm", "220 km/h", "32", 250000))
llantas.push(new LlantasNuevasHyundai(3854185, "LP", "39cm", "100 km/h", "25", 70000))
llantas.push(new LlantasNuevasHyundai(54785, "ST", "73cm", "170 km/h", "22", 110000))
llantas.push(new LlantasNuevasHyundai(925285, "P", "66cm", "130 km/h", "28", 85000))

llantas.forEach((llanta) => {
	llanta.ivallantas();
	console.log("Precio con iva incluido de las llantas es: " + llanta.ivallantas() + " y su velocidad maxima de punta es de : " + llanta.velocidad)
});
   
 


