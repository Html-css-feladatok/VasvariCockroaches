


let elem = document.querySelector(".elem");
let elem2 = document.querySelector(".elem2");
let elem3 = document.querySelector(".elem3");


elem.addEventListener("mouseover", Mouseenter);
elem.addEventListener("mouseout", Mouseleave);
elem2.addEventListener("mouseover", Mouseenter);
elem2.addEventListener("mouseout", Mouseleave);
elem3.addEventListener("mouseover", Mouseenter);
elem3.addEventListener("mouseout", Mouseleave);


function Mouseenter(){
    this.classList.add("hover")
    this.classList.remove("hover-out")
}

function Mouseleave(){
    this.classList.add("hover-out")
}



