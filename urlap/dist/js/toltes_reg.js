const regisztraciobtn = document.querySelector('.btn_inside_regisztracio');
const kulsodoboz = document.querySelector('.kulso');


let bordertype = false;


regisztraciobtn.addEventListener('click', bordertypes);


function bordertypes(){

    if(!bordertype){
        kulsodoboz.classList.remove("box");
        kulsodoboz.classList.add("toltes");
    }
}
