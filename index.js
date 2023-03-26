// Dectecting Button Press


var numberOfDrumButton = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function () {
        // alert('I got Clicked');
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);

        
    });

}

// Detecting Keyboard Press

document.addEventListener('keydown', function(event){
    makeSound(event.key);
})

function makeSound(key){

    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            console.log(buttonInnerHtml);
    }
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