const menuBtn1 = document.querySelector('.btn-regisztracio')
const regisztracioresz = document.querySelector('.header1')
const regisztracioreszszoveg = document.querySelector('.header1_item')


const menuBtn2 = document.querySelector('.btn-regisztracio2')
const regisztracioresz2 = document.querySelector('.header2')
const regisztracioreszszoveg2 = document.querySelector('.header2_item')


const menuBtn3 = document.querySelector('.btn-regisztracio3')
const regisztracioresz3 = document.querySelector('.header3')
const regisztracioreszszoveg3 = document.querySelector('.header3_item')
// const navbar = document.querySelector(".navigacio")


let showMenu = false;

menuBtn1.addEventListener('click', toggleMenu);


function toggleMenu(){
    if(!showMenu){
        regisztracioresz.classList.add('open');
        regisztracioreszszoveg.classList.add('open');
        regisztracioresz2.classList.remove('open');
        regisztracioreszszoveg2.classList.remove('open');
        regisztracioresz3.classList.remove('open');
        regisztracioreszszoveg3.classList.remove('open');
        
        
        setTimeout(()=>{
            window.scrollTo(0,0)

        },800)

        showMenu = true;    
    }else{
        regisztracioresz.classList.remove('open');
        regisztracioreszszoveg.classList.remove('open');
        regisztracioresz2.classList.remove('open');
        regisztracioreszszoveg2.classList.remove('open');
        regisztracioresz3.classList.remove('open');
        regisztracioreszszoveg3.classList.remove('open');
        // navbar.classList.remove('nonvisible')

        showMenu = false;
    }

}
let showMenu2 = false;

menuBtn2.addEventListener('click', toggleMenu2);


function toggleMenu2(){
    if(!showMenu2){
        regisztracioresz2.classList.add('open');
        regisztracioreszszoveg2.classList.add('open');
        regisztracioresz.classList.remove('open');
        regisztracioreszszoveg.classList.remove('open');
        regisztracioresz3.classList.remove('open');
        regisztracioreszszoveg3.classList.remove('open');


        // navbar.classList.add('nonvisible')
        setTimeout(()=>{
            window.scrollTo(0,0)

        },800)

        showMenu2 = true;    
    }else{
        regisztracioresz2.classList.remove('open');
        regisztracioreszszoveg2.classList.remove('open');
        // navbar.classList.remove('nonvisible')

        showMenu2 = false;
    }

}


let showMenu3 = false;

menuBtn3.addEventListener('click', toggleMenu3);


function toggleMenu3(){
    if(!showMenu3){
        regisztracioresz3.classList.add('open');
        regisztracioreszszoveg3.classList.add('open');

        regisztracioresz2.classList.remove('open');
        regisztracioreszszoveg2.classList.remove('open');
        regisztracioresz.classList.remove('open');
        regisztracioreszszoveg.classList.remove('open');


        // navbar.classList.add('nonvisible')

        setTimeout(()=>{
            window.scrollTo(0,0)

        },800)

        showMenu3 = true;    
    }else{
        regisztracioresz3.classList.remove('open');
        regisztracioreszszoveg3.classList.remove('open');
        // navbar.classList.remove('nonvisible')

        showMenu3 = false;
    }

}





// kosar

let number = 0

let db = document.querySelector(".kosardarab")
// let navdb = document.querySelector(".navbarkosardb")
let db2 = document.querySelector(".kosardarab2")
let db3 = document.querySelector(".kosardarab3")
let plus = document.querySelector(".kosarba")
let minuss = document.querySelector(".minuss")
let plus2 = document.querySelector(".kosarba2")
let minuss2 = document.querySelector(".minuss2")
let plus3 = document.querySelector(".kosarba3")
let minuss3 = document.querySelector(".minuss3")


plus.addEventListener("click", add1)
minuss.addEventListener("click", sub)
plus2.addEventListener("click", add1)
minuss2.addEventListener("click", sub)
plus3.addEventListener("click", add1)
minuss3.addEventListener("click", sub)

function add1(){
    number = number + 1

    db.innerHTML = "&nbsp:&nbsp"+number
    db2.innerHTML = "&nbsp:&nbsp"+number
    db3.innerHTML = "&nbsp:&nbsp"+number

    // navdb.innerHTML = "&nbsp:&nbsp"+number
    plus.classList.remove("nonactive")
    plus.classList.add("active")
    plus2.classList.remove("nonactive")
    plus2.classList.add("active")
    plus3.classList.remove("nonactive")
    plus3.classList.add("active")

    setTimeout(()=>{
        plus2.classList.remove("active")
        plus2.classList.add("nonactive")
        plus.classList.remove("active")
        plus.classList.add("nonactive")
        plus3.classList.remove("active")
        plus3.classList.add("nonactive")
    },1000)

}

function sub(){
    if (number > 0){
        number = number - 1
        db.innerHTML = "&nbsp:&nbsp"+number
        db2.innerHTML = "&nbsp:&nbsp"+number
        db3.innerHTML = "&nbsp:&nbsp"+number
        // navdb.innerHTML = "&nbsp:&nbsp"+number
        plus.classList.remove("nonactive")
        plus.classList.add("active")
        plus2.classList.remove("nonactive")
        plus2.classList.add("active")
        plus3.classList.remove("nonactive")
        plus3.classList.add("active")
    
        setTimeout(()=>{
            plus2.classList.remove("active")
            plus2.classList.add("nonactive")
            plus.classList.remove("active")
            plus.classList.add("nonactive")
            plus3.classList.remove("active")
            plus3.classList.add("nonactive")
        },1000)
    
    }


}
