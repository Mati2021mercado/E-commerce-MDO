const wpIcon = document.querySelector(".icon_wp");

wpIcon.addEventListener('click' , whatsApp)

function whatsApp(){
    
    let url = "https://api.whatsapp.com/send?phone=+541151390531&text=";
    window.open(url);
    
}