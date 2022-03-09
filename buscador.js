
$(".contenedor_form").prepend(`
    
    <div>
        <input type="text" autocomplete="on" id="formulario" placeholder="Buscar Productos, Marcas, Modelos..." class="form-control"> 
        <button id="boton" class="btn ">
        <box-icon name='search' color='#5a5050' ></box-icon>
        </button>
    </div>
`)

const formulario = document.querySelector("#formulario")
const  boton = document.querySelector("#boton")

const filtrar =()=>{
    list.innerHTML = '';
    const texto = formulario.value.toLowerCase()

    for (const item of productos) {
        
        let nombre = item.nombre.toLowerCase() + "  " + item.marca.toLowerCase() 
        
        if(nombre.indexOf(texto) !== -1 ){
            itemView(item)
        } 
        
    }
}

boton.addEventListener("click", filtrar)
formulario.addEventListener("keyup", filtrar)

filtrar()
