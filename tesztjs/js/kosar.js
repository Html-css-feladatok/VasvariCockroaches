let kosar = document.querySelector(".kosar")

let ar = document.querySelector(".ar")
let plus = document.querySelector(".plus")
let minuss = document.querySelector(".minus")

let ar2 = document.querySelector(".ar2")
let plus2 = document.querySelector(".plus2")
let minuss2 = document.querySelector(".minus2")

let number = 0

let vegosszeg = 0

plus.addEventListener("click", add)
minuss.addEventListener("click" ,minus)
plus2.addEventListener("click", add)
minuss2.addEventListener("click" ,minus)



function add(){
    number = number + 1
    

    kosar.innerHTML ="Kosar:" + number
}
function minus(){
    if(number > 0){
        number = number - 1

        kosar.innerHTML ="Kosar:" + number
    
    }
}



