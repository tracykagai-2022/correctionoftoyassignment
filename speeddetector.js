function speeddetector(){
    let speed = document.getElementById("speed").ariaValueMax;
    if(speed < 0){
        document.getElementById('points'). innerHTML= "Input valid Speed"
    }
    else if(speed >= 0 && speed <= 70){
        document.getElementById('points'). innerHTML= "speed is legal"
    }
    else if (speed >= 60 && speed <= 90){
        document.getElementById('points').innerHTML="illegal speed, 2 points"
    }
    else if (speed >= 90 && speed <= 100){
        document.getElementById('points'). innerHTML="illegal speed, 4 points"
    }
    else if (speed >= 100 && speed <= 110){
        document.getElementById('points').innerHTML="illegal speed, 6 points"
    }
    else if (speed >= 110 && speed <= 120){
        document.getElementById('points').innerHTML="illegal speed, 8 points"
    }
    else if (speed >= 120 && speed <= 130){
        document.getElementById('points').innerHTML="illegal speed, 10 points"
    }
    else if (speed >= 130){
        document.getElementById('points').innerHTML="licence suspended"
    } 
    else {
        document.getElementById('points').innerHTML="Input Speed."
    }
}