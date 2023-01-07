let counter1 = document.getElementById("SalesCounter")
let counter2 = document.getElementById("SatisfiedCounter")
let counter3 = document.getElementById("FinishedCounter")


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function add(){
    
        for (let i = 0; i < 625; i++) {


                number1 = i
                number2 = i
                number3 = i

                counter1.innerHTML = number1
                
                
                
                if (number2 < 457){
                    counter2.innerHTML = number2
                    
                }
                
                
                
                if (number3 < 327){
                    counter3.innerHTML = number3
                    
                }
                
                await sleep(1)
            
        }
}


number1 = 0
number2 = 0
number3 = 0
counter1.innerHTML = number1
counter2.innerHTML = number1
counter3.innerHTML = number1
let once = true
let container = document.querySelector(".CounterContainer")
let text = document.querySelectorAll(".CounterItemTittle")

window.addEventListener('scroll', function() {
	var element = document.querySelector('.CounterContainer');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {

        
        for (const texts of text) {
            texts.classList.add("visible")
        }
            counter1.classList.add("visible")
            counter2.classList.add("visible")
            counter3.classList.add("visible")
    
        setTimeout(() => {
            for (const texts of text) {
                texts.classList.add("fade")
            }
                counter1.classList.add("fade")
                counter2.classList.add("fade")
                counter3.classList.add("fade")
    
        }, 1000);   

        if (once){
            setTimeout(() => {
                once = false
                add()
                
            }, 2000);

        }
        

        
	}



	// checking for partial visibility
	if(position.top < window.innerHeight && position.bottom >= 0) {
        container.classList.add("visible")
	}
});


