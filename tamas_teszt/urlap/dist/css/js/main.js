const menuBtn1 = document.querySelector('.btn-regisztracio')
const regisztracioresz = document.querySelector('.header1')
const regisztracioreszszoveg = document.querySelector('.header1_item')
const bezarasBtn = document.querySelector('.bezaras');




let showMenu = false;

menuBtn1.addEventListener('click', toggleMenu);
bezarasBtn.addEventListener('click', toggleMenu);


function toggleMenu(){
    if(!showMenu){
        regisztracioresz.classList.add('open');
        regisztracioreszszoveg.classList.add('open');
        
        showMenu = true;    
    }else{
        regisztracioresz.classList.remove('open');
        regisztracioreszszoveg.classList.remove('open');
        kulsodoboz.classList.remove("toltes")
        kulsodoboz.classList.add("box");

        showMenu = false;
    }

}



