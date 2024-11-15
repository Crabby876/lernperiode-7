let movingObject = document.getElementById("MovingObject");
let goalKeaper = document.getElementById("GK");

let rotating = true;
let rotationAngle = 90;
let rotateLeft = false;
let rotateRight = true;

let maxRotation = 80



rotate();
GKMove();

addEventListener('click',stopRotating)
function stopRotating(){
    rotating = false;
}

function rotate(){
    if (!rotating){
        return;
    }

    if (rotationAngle === 90+80){
        rotateRight = false;
        rotateLeft = true;
    }else if(rotationAngle===90-80){
        rotateRight = true;
        rotateLeft = false;
    }
    
    if (rotateRight){
        rotationAngle += 1;
    }else if(rotateLeft){
        rotationAngle-=1;
    }

    movingObject.style.transform = `rotate(${rotationAngle}deg)`;

    requestAnimationFrame(rotate)
    
}

function GKMove(){
    goalKeaper.style.left += `0.5px`;
    requestAnimationFrame(GKMove)
}