
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
class LlantasNuevasHyundai {
    constructor(id, modelo, medidas, rin, velocidad, presion, precio) {

        this.id = id;
        this.modelo = modelo
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

async function Email() {
    const { value: email } = await Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
    })

    if (email) {
        Swal.fire(`Entered email: ${email}`)
    }
}
Email()

const vehiculo1 = new Vehiculos(102421, "Hyundai", "grand I10 SD 2015", 3500000, 20, 6, 125000);
const vehiculo2 = new Vehiculos(465465, "Hyundai", "palisae 2011", 2500000, 13, 1, 69000);
const vehiculo3 = new Vehiculos(4569878, "Hyundai", "TUCSON 2015", 5500000, 20, 2, 12000);
const vehiculo4 = new Vehiculos(1024210, "Hyundai", "CRETA GRAND 2023", 8500000, 10, 9, 80000);
const vehiculo5 = new Vehiculos(1562170, "Hyundai", "SANTA FE 2019 RED", 700000, 8, 3, 5000);
const vehiculo6 = new Vehiculos(9855645, "Hyundai", "BRICK 2022", 5500000, 15, 5, 41000);

const lista = [vehiculo1, vehiculo2, vehiculo3, vehiculo4, vehiculo5, vehiculo6]
json = JSON.stringify(lista)
console.table(json)

/** 
function Filtrado() {
    let Filterword = Swal.fire("Ingrese el modelo del vehiculo que quiere buscar")
    const modeloingresado = lista.filter((x) => x.modelo.toLowerCase().includes(Filterword))
    modeloingresado.length > 0 ? console.table("Se encontraron estos resultados:", modeloingresado) : alert("No se encontro ningun vehiculo con dicho modelo, ingrese uno valido") + Filtrado()
}
Filtrado()
*/

console.log("Modelo del vehiculo 1: " + vehiculo1.modelo)
console.log("Precio + iva del vehiculo 2: " + vehiculo2.precioconiva)
console.log("Kilometraje del vehiculo 3: " + vehiculo3.kilometraje)
console.log("Años de uso del vehiculo 1: " + vehiculo1.añosDeUso)
console.log("Marca del vehiculo 3: " + vehiculo3.marca)
console.log("Marca vehiculo 5: " + vehiculo5.marca + ", modelo : " + vehiculo5.modelo + ", precio (Con iva incluido) : $" + vehiculo5.precioconiva)
console.log("kilometraje" in vehiculo1)
console.log("añosDeUso" in vehiculo2)
console.log("stock" in vehiculo5)

const Seguros = ["Rivadavia", "Sancor S.A", "La Caja", "La Mercantil Andina S.A", "Allianz", "Escudo Seguros"]
Seguros.push("Federacion Patronal")
Seguros.push("Parana Seguros")

console.log("El vehiculo 2 esta asegurado con la siguiente compañia: " + Seguros[0] + ". Desea cambiar de compañia?")
console.log("El vehiculo 1 esta asegurado con la siguiente compañia: " + Seguros[6] + ". Desea cambiar de compañia?")

const llantas = []
llantas.push(new LlantasNuevasHyundai(325418, "SPEEDYG", "XL", "61cm", "190 km/h", "28", 100500))
llantas.push(new LlantasNuevasHyundai(9712354, "REALTKS", "LT", "40cm", "220 km/h", "32", 250000))
llantas.push(new LlantasNuevasHyundai(3854185, "BALKS", "LP", "39cm", "100 km/h", "25", 70000))
llantas.push(new LlantasNuevasHyundai(54785, "SPRING", "ST", "73cm", "170 km/h", "22", 110000))
llantas.push(new LlantasNuevasHyundai(925285, "BALI", "P", "66cm", "130 km/h", "28", 85000))

llantas.forEach((llanta) => {
    llanta.ivallantas();
    console.log("El neumatico " + llanta.modelo + " alcanza una velocidad maxima de punta de : " + llanta.velocidad +
        ". Con iva incluido, su precio es de: $" + llanta.ivallantas() + ". Este precio esta actualizado a la fecha de " + new (Date))
});

let fechaaumento = new Date(2023, 9, 25, 16, 0, 0)
let fechaactual = new Date
let diadeaumento = fechaaumento - fechaactual
let resultadoendias = Math.round(diadeaumento / 86400000)

console.warn("Faltan " + resultadoendias + " dias para que aumenten los precios de los vehiculos y de las llantas. No esperes mas!")

const agregar = document.getElementById("Agregar")
const card = document.querySelector('.nuevascards')
const op = document.getElementById("opinion")

op.addEventListener(`click`, async () => {
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
            'aria-label': 'Type your message here'
        }
    })
    if (text == 0 || text === undefined) {
        Swal.fire({
            icon: `error`,
            title: "NO PUEDE ENVIAR UNA OPINION VACIA"
        })
    } else { Swal.fire(`Opinion enviada : ${text}`) }
})

agregar.addEventListener('click', () => {
    const nuevoauto = document.createElement('div')
    nuevoauto.classList.add("nuevascards")
    nuevoauto.innerHTML =

        '<p>El Hyundai Tucson, también llamado Hyundai ix35, es un vehículo utilitario deportivo perteneciente al segmento C producido por el fabricante surcoreano Hyundai desde el año 2004 En la alineación de la marca, el Tucson se ajusta por debajo del Hyundai Santa Fe y por encima del Hyundai Creta. El nombre es el topónimo inglés para la ciudad de Tucson en Arizona. El Tucson es un cinco plazas con carrocería de cinco puertas; tiene motor delantero transversal y tracción delantera o tracción en las cuatro ruedas, en todos los casos sin sistema reductor. Comparte  plataforma con el Kia Sportage. En cuanto a seguridad, ha obtenido una calificación de cinco estrellas en pruebas realizadas por Global NCAP y Euro NCAP, lo que lo convierte en uno de los vehículos más seguros dentro de su segmento. Tiene como principales rivales al Audi Q3, BMW X1, Citroën C5 Aircross, Ford Escape/Kuga, Honda CR-V, Jeep Cherokee, Kia Sportage, Mazda CX-5, Mercedes-Benz Clase GLA, Mitsubishi Outlander, Nissan Qashqai, Opel Grandland X, Peugeot 3008, Range Rover Evoque, Renault Kadjar, SEAT Ateca, Suzuki Vitara, Toyota RAV4, Volkswagen Tiguan, Volvo XC40. Primera generación (2004-2009) Hyundai Tucson Hyundai Tucson de 2009. Datos generales Período 2004-2009 Dimensiones Dimensiones	5000 / 1830 / 1730 / 2700 mm [editar datos en Wikidata] El Tucson de primera generación se puso a la venta en el año 2004. Su chasis monocasco es el mismo del Kia Sportage lanzado en el año 2004 y similar al del Hyundai Elantra de la misma generación. La primera generación del Tucson se presentó al público en el Salón del Automóvil de Fráncfort del año 2004. Su denominación es Tucson ix en Corea del Sur e ix35 en Europa  y América. El modelo se fabrica en Corea del Sur y República Checa. Los dos motores son en un principio un gasolina atmosférico de cuatro cilindros en línea 2.0 de 141 PS (104 kW; 139 CV) @ 6000 , y un Diésel de cuatro cilindros en  línea y 2.0 litros en variantes de 113 CV (83 kW; 111 CV), 150 CV (110 kW; 150 CV) @ 3800 rpm y 140 CV (100 kW; 140 CV) a 4000 rpm. Los modelos con los motores 2.0 CRDi posteriores incluyen turbocompresor de geometría variable. En los EE. UU., el modelo Tucson se ofrece en base GLS, SE línea media, y de primer nivel Limited (anteriormente LX) los niveles de equipamiento para los modelos 2004. A principios de los años 2005 y el año 2006 los modelos fueron ofrecidos como GL / GLS / Limited.</p>'

    agregar.appendChild(nuevoauto)
})

fetch("productos.json")
    .then(resp => resp.json())
    .then(data => {

        const autos = data.AUTOS
        const productosjson = document.getElementById("showproductos")

        autos.forEach((c) => {
            const autosjson = document.createElement(`p`)
            autosjson.textContent = `Modelo del vehiculo: ` + c.Modelo + `/ Id del vehiculo: ` + c.Id + `/ Precio del Vehiculo : $ ` + c.Precio + ` / Stock disponible: ` + c.Stock
            productosjson.appendChild(autosjson)
        })
            .catch(Swal.fire("ERROR"))
    }

    )
