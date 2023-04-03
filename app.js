//variables globales
let cliente ;
let direc ;

//Arrays necesarios
const discos = [];
const carrito = [];

//Objeto

class Disco{
    constructor(nombre, artista, precio){
        this.nombre = nombre;
        this.artista = artista;
        this.precio = Number(precio);
    }
    precioMasIva(){
        return this.precio *= 1.19;
    }
    infoDisco(){
        alert(`Usted seleccionó el disco ${this.nombre} del artista ${this.artista}, con un valor de $${this.precio}.`)
    }
}

//Carga de los discos al array. 

discos.push(new Disco("Resonancias", "Vásquez-Ocampo", 51000)) 
discos.push(new Disco("Silencios", "Sergio Cote", 50000)) 
discos.push(new Disco("Gamelán intergaláctico", "CCC", 62000)) 
discos.push(new Disco("Guitarras y sinte", "Notch", 60000)) 
discos.push(new Disco("Intersticios", "Baho", 63000))

//funciones

function datosPersonales(){
    cliente = prompt("Bienvenido a nuestra tienda Peche Records ¿Cómo es su nombre?");

    if (cliente === null){
        return;
    }else{
        while(cliente == ""){
            cliente = prompt("Por favor, escriba de nuevo su nombre")
            if (cliente === null){
                return;
            }
        }
    }
    alert("Bienvenido a la tienda, "+cliente);

    direc = prompt("Por favor, confirme su dirección de envío");

    if (direc === null){
        return;
    }else{
        while(direc == ""){
            direc = prompt("Por favor, escriba de nuevo su dirección")
            if (direc === null){
                return;
            }
        }
    }
    alert("Su dirección es "+direc);    
}


function discoAlCarrito(disco){
    disco.infoDisco()
    if(confirm("¿Desea agregarlo al carrito?")){
        carrito.push(disco)
    }else{
        alert("no se agregó el disco al carrito.")
    }
}

function escogerDiscos(){
    do {
        let selectDisco = Number(prompt(`Por favor, seleccione un disco del siguiente catálogo escribiendo el número de la lista: \n 1 ${discos[0].nombre} de ${discos[0].artista} \n 2 ${discos[1].nombre} de ${discos[1].artista} \n 3 ${discos[2].nombre} de ${discos[2].artista} \n 4 ${discos[3].nombre} de ${discos[3].artista} \n 5 ${discos[4].nombre} de ${discos[4].artista}`))
        switch (selectDisco) {
            case 1:
                discoAlCarrito(discos[0])
                break; 
            case 2:
                discoAlCarrito(discos[1])
                break; 
            case 3:
                discoAlCarrito(discos[2])
                break;
            case 4:
                discoAlCarrito(discos[3])
                break;
            case 5:
                discoAlCarrito(discos[4])
                break; 
            default:
                alert("Por favor, ingrese un número del 1 al 5")
                break;
        }
    } while (confirm("¿Desea agregar otro disco al carrito?"));
}

function compraDiscos(){
    if (confirm(`Su carrito de compras tiene ${carrito.length} disco(s). ¿Desea proceder al pago?`)){
        const precios = carrito.map(n => n.precio)
        const total = precios.reduce((acumulador, elemento) => acumulador + elemento, 0)
        const preciosIva = carrito.map(n => n.precioMasIva())
        const totalIva = preciosIva.reduce((acumulador2, elemento2) => acumulador2+ elemento2, 0)
        alert(`El costo total de el (los) ${carrito.length} disco(s) es de $${total} antes de impuestos. El valor total de la compra más IVA es de $${totalIva}.`)
        if (confirm(`Desea descontar los $${totalIva} de su tarjeta de cliente frecuente?`)){
            alert(`Fueron descontados $${totalIva} de su tarjeta, los discos serán enviados a la dirección ${direc}. ¡Gracias por su compra, ${cliente}!`)
        }else{
            alert("Usted canceló la transacción. ¡Lo esperamos pronto de vuelta!")
            return    
        }
    }else{
        alert("Usted canceló la transacción. ¡Lo esperamos pronto de vuelta!")
        return
    }
}

//Ejecución del algoritmo

datosPersonales()
if (cliente != null && direc != null){
    escogerDiscos()
    if (carrito.length != 0){
        compraDiscos()
    }else{
        alert("Usted no agregó ningún disco al carrito. ¡Lo esperamos pronto de vuelta!")
    }
}else{
    alert("Usted canceló la compra, ¡Lo esperamos pronto de vuelta!")
} 






