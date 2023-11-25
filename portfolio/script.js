let numberone = document.getElementById("numberone"),
numbertwo = document.getElementById("numbertwo"),
numberthree = document.getElementById("numberthree"),
counterOne = 0,
counterTwo = 0,
counterThree = 0;
setInterval(() => {
    if(counterOne == 65){
        clearInterval();
    }
    else{
        counterOne += 1;
        numberone.innerHTML = counterOne + "%"
    }
}, 30);

setInterval(() => {
    if(counterTwo == 80){
        clearInterval();
    }
    else{
        counterTwo += 1;
        numbertwo.innerHTML = counterTwo + "%"
    }
}, 25);

setInterval(() => {
    if(counterThree == 50){
        clearInterval();
    }
    else{
        counterThree += 1;
        numberthree.innerHTML = counterThree + "%"
    }
}, 40);