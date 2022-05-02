
function itemView(item){
    console.log(item)

    //? PRODUCTOS ESPECIFICOS SIN PRECIO PARA CADA AUTO, QUE SEAN FILTROS, PASTILLAS, AMORTIGUADORES, BIELETAS ETC, SE ESPECIFICA LA CATEGORIA

    if (item.categoria === "filtros de aceite" || item.categoria === "pastillas de freno" || item.categoria === "amortiguadores" || item.categoria === "bieletas") {
       
        item.modelo = item.modelo.toUpperCase().bold();
        item.marcaDeAuto = item.marcaDeAuto.toLowerCase();
        const descripcion = item.marcaDeAuto + " " + item.modelo + " " + item.tipo;
        $("#lista-productos").append(`
        <div class="producto">
            <img class="imagen_producto" src="${item.imagen}" alt=${item.codigo} />
            <div class="producto_parrafo">
                <p> ${item.categoria + " " + descripcion}  </p>
                <p>codigo: ${item.codigo}</p>
                <div action="" class="formulariowtsp contenedor_consulta">

                    <button type="submit" class="btnwtsp sendbttn">consultar precio</button>

                   
                    <box-icon name='whatsapp' type='logo' color='#25d414' ></box-icon>
                
                </div>
                
            </div>
        </div>
        
        
    `)

    } else {
        //? PRODUCTOS GENERALES CON PRECIO. NO SE ESPECIFICA CATEGORIA

        if (item.precio) {
            $("#lista-productos").append(`
            <div class="producto">
                
                <img class="imagen_producto" src="${item.imagen}" alt=${item.nombre} ${item.marca} />
                <div class="producto_parrafo">
                    <p> ${item.nombre}  ${item.marca}</p> 
                    <p class="producto_precio">$ ${item.precio}</p>
                    <p>codigo: ${item.codigo}</p>
                    <div action="" class="formulariowtsp contenedor_consulta">

                        <button type="submit" class="btnwtsp sendbttn">consultar stok</button>

                        <box-icon name='whatsapp' type='logo' color='#25d414' ></box-icon>
                    </div>
                </div>
            </div>
            
            `)
        } else {

            //? PRODUCTOS GENERALES SIN PRECIO

            $("#lista-productos").append(`
            <div class="producto">
                
                <img class="imagen_producto" src="${item.imagen}" alt=${item.nombre} ${item.marca} />
                <div class="producto_parrafo">
                    <p> ${item.nombre}  ${item.marca}</p> 
                    <p>codigo: ${item.codigo}</p>
                    <div action="" class="formulariowtsp contenedor_consulta">

                        <button type="submit" class="btnwtsp sendbttn">consultar precio</button>

                    
                        <box-icon name='whatsapp' type='logo' color='#25d414' ></box-icon>
                    
                    </div>
                    
                </div>
            </div>
            
            `)
        }
        

    
    }
    let sendbttn = document.querySelectorAll('.sendbttn');
    for (const itemWpts of sendbttn) {
        itemWpts.addEventListener('click' , EnviarMensaje)
    }
    
    function EnviarMensaje(){

        let mensaje = `Hola, deseo consultar el precio y si hay stock del articulo: ${item.nombre}`;
        if (item.codigo) {
            let codigo = item.codigo;
            let url = "https://api.whatsapp.com/send?phone=+541151390531&text=" + mensaje + ` codigo: ${codigo}` + "%0A";
            window.open(url);
        }else{
            let url = "https://api.whatsapp.com/send?phone=+541151390531&text=" + mensaje + "%0A";
            window.open(url);
        }
    
        

    }
    
    
}


