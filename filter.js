$("#filtrador").append(`
    
<header>
    
    <box-icon  href="#" id="barra_categorias" name='menu' color='#080000' ></box-icon>
    <a href="#" id="home"> <h1> <b>MDO</b> repuestos</h1> </a>
    <a href="./pages/envios.html" class="envios_link"><b>envíos</b></a>
    <a href="https://www.google.com/maps/place/MDO+Repuestos/@-34.6478242,-58.6664424,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcbf001ba264d7:0x549151470f975181!8m2!3d-34.6478242!4d-58.6642537" class="ubicacion_link"> ubicación Defilippi 865, Ituzaingó </a>
    <div class="contenedor_form"></div>
    
    <nav class="contenedor_categorias">
         
        <h2 class="title_categorias">  Categorías </h2> 
        <a id="categoria-baterias" class="category-item"> Baterias </a>
        

        <div class="dropdown category-item">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Suspensión
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <a id="categoria-amortiguadores" class="dropdown-item category-item" href="#">Amortiguadores
                    </a>
                </li>
                <li>
                    <a id="categoria-bieletas" class="dropdown-item category-item" href="#">Bieletas
                    </a>
                </li>
                
            </ul>
        </div>
        <div class="dropdown category-item">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Frenos
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <a id="categoria-liquidoParaFrenos" class="dropdown-item category-item" href="#">Liquido para Frenos
                    </a>
                </li>
                <li>
                    <a id="categoria-pastillas" class="dropdown-item category-item" href="#">Pastillas
                    </a>
                </li>
                
            </ul>
        </div>

        <a id="categoria-refrigerantes" class="category-item">Refrigerantes </a>
        <a id="categoria-iluminacion" class="category-item"> Iluminacion </a>
        <a id="categoria-bombasDeAgua" class="category-item">Bombas de agua</a>
        <a id="categoria-fusibles" class="category-item">Fusibles</a>
        <a id="categoria-distribucion" class="category-item"> Distribucion </a>

        <div class="dropdown category-item">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Filtros
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a id="categoria-filtroAceite" class="dropdown-item category-item" href="#">filtro de aceite</a></li>
                <li><a id="categoria-filtroAire" class="dropdown-item category-item" href="#">filtro de aire</a></li>
                <li><a id="categoria-filtroHabitaculo" class="dropdown-item category-item" href="#">filtro de habitaculo</a></li>
            </ul>
        </div>

        <a id="categoria-aditivos" class="category-item"> Aditivos </a>

        <div class="dropdown category-item">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Lubricantes
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a id="categoria-paraMotor" class="dropdown-item category-item" href="#">Aceite para Motor</a></li>
                <li><a id="categoria-paraCaja" class="dropdown-item category-item" href="#">Aceite para Caja</a></li>
                <li><a id="categoria-aceiteHidraulico" class="dropdown-item category-item" href="#">Aceite Hidraulico</a></li>
            </ul>
        </div>

    </nav>
</header>    
`)

$("#categoria-baterias").on("click", ()=>{ filtrarCategoria("baterias") })
$("#categoria-encendido").on("click", ()=>{ filtrarCategoria("encendido") })
$("#categoria-inyeccion").on("click", ()=>{ filtrarCategoria("inyeccion") })

$("#categoria-bombasDeAgua").on("click", ()=>{ filtrarCategoria("bombas de agua") })
$("#categoria-aditivos").on("click", ()=>{ filtrarCategoria("aditivos") })
$("#categoria-distribucion").on("click", ()=>{ filtrarCategoria("distribucion") })
$("#categoria-filtroAceite").on("click", ()=>{ filtrarCategoria("filtros de aceite") })
$("#categoria-filtroAire").on("click", ()=>{ filtrarCategoria("filtros de aire") })
$("#categoria-filtroHabitaculo").on("click", ()=>{ filtrarCategoria("filtros de habitaculo") })
$("#categoria-refrigerantes").on("click", ()=>{ filtrarCategoria("refrigerantes") })
$("#categoria-liquidoParaFrenos").on("click", ()=>{ filtrarCategoria("liquido para frenos") })
$("#categoria-iluminacion").on("click", ()=>{ filtrarCategoria("iluminacion") })
$("#categoria-fusibles").on("click", ()=>{ filtrarCategoria("fusibles") })
$("#categoria-paraMotor").on("click", ()=>{ filtrarCategoria("aceite para motor") })
$("#categoria-paraCaja").on("click", ()=>{ filtrarCategoria("aceite para caja") })
$("#categoria-aceiteHidraulico").on("click", ()=>{ filtrarCategoria("aceite hidraulico") })
$("#categoria-pastillas").on("click", ()=>{ filtrarCategoria("pastillas de freno") })
$("#categoria-amortiguadores").on("click", ()=>{ filtrarCategoria("amortiguadores") })
$("#categoria-bieletas").on("click", ()=>{ filtrarCategoria("bieletas") })



function filtrarCategoria(categoria){
    const filter = productos.filter(item => item.categoria === categoria)
    list.innerHTML = " ";
    for (const item of filter){
        
        itemView(item)
    }
    
}

const categorias = document.getElementById("barra_categorias")

categorias.addEventListener("click", ()=>{ categorias.classList.toggle("activo")})

const home = document.getElementById("home");

home.addEventListener("click", ()=>{ destacados() })

