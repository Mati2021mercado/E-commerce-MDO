


function destacados(){
    list.innerHTML = " ";
    for (const item of productos) {
        if(item.destacado){
            itemView(item)
        }   
    }
}

