const listaAutos = [
    {
        id: "auto1",
        titulo: "Chevrolet Corsa",
        imagen: "../img/Corsa.webp",
        precio: "$2.600.000",
    },

{
    id: "auto2",
    titulo: "Volkswagen Polo",
    imagen: "../img/vw-polo-2021.png",
    precio: "$5.000.000",
},
{
    id: "auto3",
    titulo: "Peugeot 308",
    imagen: "../img/blanco.avif",
    precio: "$10.500.000",
},
{
    id: "auto4",
    titulo: "Volkswagen Amarok",
    imagen: "../img/vw-amarok-2021.png",
    precio: "$23.000.000",
},
{
    id: "auto5",
    titulo: "Audi A3",
    imagen: "../img/Audi-A3-Sedan-Argentina-1.png.webp",
    precio: "$19.900.000",
},
{
    id: "auto6",
    titulo: "Ford Focus",
    imagen: "../img/2017-ford-focus-se-sedan-angular-front.avif",
    precio: "$5.800.000",
}
]

const listaMotos = [
{
    id: "moto1",
    titulo: "Yamaha XTZ 150cc",
    imagen: "../img/XTZ150_color_azul.png",
    precio: "$1.794.500",
},
    
{
    id: "moto2",
    titulo: "Honda Xr Tornado 250cc",
    imagen: "../img/xr250.png",
    precio:"$1.940.000",
},
{
    id: "moto3",
    titulo: "Kawasaki Ninja ZX-6R 600cc",
    imagen: "../img/ninjazx.png",
    precio: "$11.640.000",
},
{
    id: "moto4",
    titulo: "Yamaha XTZ 250cc",
    imagen: "../img/xtz250.png",
    precio: "$2.500.000",
}
]

const seccionProductos = document.querySelector("#seccion-productos");
let botonesAgregar = document.querySelectorAll('.tarjeta__btn');
const numerito = document.querySelector("#numerito")

function cargarAutos (){
    listaAutos.forEach(listaAutos => {
        const div = document.createElement("div");
        div.classList.add("tarjeta")
        div.innerHTML = `
            <img src="${listaAutos.imagen}" alt="${listaAutos.titulo}">
            <h3>${listaAutos.titulo}</h3>
            <p>${listaAutos.precio}</p>
            <button class="tarjeta__btn" id="${listaAutos.id}">Añadir al carro</button>
        `;
        seccionProductos.append(div);
    })
    actualizarBotonesAgregar();
}
function cargarMotos(){
    listaMotos.forEach(listaMotos => {
        const div = document.createElement("div");
        div.classList.add("tarjeta")
        div.innerHTML = `
            <img src="${listaMotos.imagen}" alt="${listaAutos.titulo}">
            <h3>${listaMotos.titulo}</h3>
            <p>${listaMotos.precio}</p>
            <button class="tarjeta__btn" id="${listaMotos.id}">Añadir al carro</button>
        `;
    seccionProductos.append(div);
})
actualizarBotonesAgregar();
}

cargarAutos()
cargarMotos()

function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll('.tarjeta__btn');
    botonesAgregar.forEach (boton =>{
        boton.addEventListener("click", agregarAlCarrito)
    })
}

const productosEnCarrito = [];

function agregarAlCarrito (e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = listaAutos.find (listaAutos => listaAutos.id === idBoton);
    if(productosEnCarrito.some(listaAutos => listaAutos.id === idBoton)) {
        const index = productosEnCarrito.findIndex (listaAutos => listaAutos.id === idBoton)
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, listaAutos) => acc + listaAutos.cantidad, 0)
    numerito.innerText = nuevoNumerito;
}