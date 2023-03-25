
var numberOfDrumButton = document.querySelectorAll('.drum').length; 

for(var i = 0; i < numberOfDrumButton; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function (){
        alert('I got Clicked');
    });
    
}

