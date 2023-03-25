
var numberOfDrumButton = document.querySelectorAll('.drum').length; 

for(var i = 0; i < numberOfDrumButton; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function (){
        // alert('I got Clicked');
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    });
    
}

// function add(num1, num2){
//     return num1 + num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function substract(num1, num2){
//     return num1 - num2;
// }

// function divided(num1, num2){
//     return num1 / num2;
// }

// function operator(num1, num2, operator){
//     return operator(num1, num2);
// }

// console.log(operator(2,3, divided));