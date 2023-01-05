const menuBtn1 = document.querySelector('.btn-regisztracio')
const regisztracioresz = document.querySelector('.header1')
const regisztracioreszszoveg = document.querySelector('.header1_item')
const bezarasBtn = document.querySelector('.bezaras');

const menuBtn2 = document.querySelector('.btn-login')
const regisztracioresz2 = document.querySelector('.header2')
const regisztracioreszszoveg2 = document.querySelector('.header2_item')
const bezarasBtn2 = document.querySelector('.bezaras2');
const kulsodoboz2 = document.querySelector('.kulso2');

const regisztraciobtn2 = document.querySelector('.btn_inside_login');

const regisztraciobtn = document.querySelector('.btn_inside_regisztracio');
const kulsodoboz = document.querySelector('.kulso');


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


let bordertype2 = false;


regisztraciobtn2.addEventListener('click', storeinput2);


function bordertypes2(){

    if(!bordertype2){
        kulsodoboz2.classList.remove("box");
        kulsodoboz2.classList.add("toltes");
    }
}


let bordertype = false;


regisztraciobtn.addEventListener('click', storeinput);


function bordertypes(){

    if(!bordertype){
        kulsodoboz.classList.remove("box");
        kulsodoboz.classList.add("toltes");
    }
}


const Mezo = document.querySelector(".ures")
const Mezo2 = document.querySelector(".ures2")

let username = document.getElementById("username").value
let password = document.getElementById("password").value

function storeinput(){
    username = document.getElementById("username").value
    password = document.getElementById("password").value
    
    if(username == "" || password == "" ){
        alert ("Szükséges mezők kitöltése kötelező!")
    }else{
        kulsodoboz.classList.remove("box");
        kulsodoboz.classList.add("toltes");
        setTimeout(() => {
            regisztracioresz.classList.remove('open');
            regisztracioreszszoveg.classList.remove('open');
            kulsodoboz.classList.remove("toltes")
            kulsodoboz.classList.add("box");
            
            setTimeout(() =>{
                regisztracioresz2.classList.add('open2');
                regisztracioreszszoveg2.classList.add('open2');
                

            },1000)
        }, 3500)
    
        
        
    }
    
}
function storeinput2(){
    let loginUsername = document.getElementById("loginusername").value
    let loginPassword = document.getElementById("loginpass").value
    
        if (loginUsername == "" || loginPassword == ""){
            alert("Töltse ki a mezőket!")
            
            
        }else if(loginUsername != username || loginPassword != password){
            alert("Hibás felhasználónév / jelszó!")
        }else if(loginUsername == username || loginPassword == password){
            kulsodoboz2.classList.add("toltes");
            kulsodoboz2.classList.remove("box");
            setTimeout(()=>{
                window.location.replace("http://www.w3schools.com")
        
            },3000)
        }
        
    }
    










