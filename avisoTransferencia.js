const avisoDeTransferencia = document.getElementById("avisoDeTransferencia")

avisoDeTransferencia.addEventListener("click", ()=>{
    avisoDeTransferencia()
})

function avisoTransferencia(){
    const mensaje = "Aviso que voy a hacer una transferencia, solicito CBU.";
    const url = "https://api.whatsapp.com/send?phone=+541151390531&text=" +  mensaje + "%0A";
    window.open(url);
}