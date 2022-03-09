const list = document.getElementById("lista-productos")


class Producto {
    constructor(nombre, marca, categoria, imagen, destacado, marcaDeAuto, modelo, codigo, tipo, precio){
        this.nombre = nombre
        this.marca = marca
        this.categoria = categoria
        this.destacado = destacado
        this.imagen = imagen
        this.marcaDeAuto = marcaDeAuto
        this.modelo = modelo
        this.codigo = codigo
        this.tipo = tipo
        this.precio = precio
    }
}

const productos = []


fetch('lista.json')
    .then((res)=> res.json())
    .then((res)=> res.map(function(dato) {
         productos.push(new Producto(dato.nombre, dato.marca, dato.categoria, dato.imagen, dato.destacado, dato.marcaDeAuto, dato.modelo, dato.codigo, dato.tipo, dato.precio))
         
    }))
    .then(()=>{
        destacados()
    })
    
