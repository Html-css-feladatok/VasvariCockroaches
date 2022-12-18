const menuBtn2 = document.querySelector('.btn-login')
const regisztracioresz2 = document.querySelector('.header2')
const regisztracioreszszoveg2 = document.querySelector('.header2_item')
const bezarasBtn2 = document.querySelector('.bezaras2');
const kulsodoboz2 = document.querySelector('.kulso2');





let showMenu2 = false;

bezarasBtn2.addEventListener('click', toggleMenu2);
menuBtn2.addEventListener('click', toggleMenu2);


function toggleMenu2(){
    if(!showMenu2){
        regisztracioresz2.classList.add('open2');
        regisztracioreszszoveg2.classList.add('open2');
        
        showMenu2 = true;    
    }else{
        regisztracioresz2.classList.remove('open2');
        regisztracioreszszoveg2.classList.remove('open2');
        kulsodoboz2.classList.remove("toltes")
        kulsodoboz2.classList.add("box");

        showMenu2 = false;
    }

}