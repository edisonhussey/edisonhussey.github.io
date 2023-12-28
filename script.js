document.addEventListener("DOMContentLoaded", function () {
    // Get the moving image element
    var movingImage = document.getElementById("movingImage");

    // Set initial position
    var positionX = 25; // Initial X position
    var positionY = 25; // Initial Y position

    // Set movement speed
    var speedX = 1; // Horizontal speed
    var speedY = 1; // Vertical speed

    // Set update interval (in milliseconds)
    var updateInterval = 25;

    // Update image position at regular intervals
    document.onkeydown = function (e) {
        e = e || window.event;
        switch (e.keyCode) {
            case 37: // left arrow
                speedX = -5;
                speedY = 0;
                break;
            case 38: // up arrow
                speedX = 0;
                speedY = -5;
                break;
            case 39: // right arrow
                speedX = 5;
                speedY = 0;
                break;
            case 40: // down arrow
                speedX = 0;
                speedY = 5;
                break;
        }
    };
    setInterval(function () {
        // document.onkeydown = checkKey;
        
        // // Update X and Y positions
        // function checkKey(e) {
        //     e = e || window.event;
        //     if (e.keyCode == '37') {
        //         // up arrow
        //         speedX=-1;
        //     }
        //     elif (e.keyCode=='38')
        //     {speedY=-1}
        //     elif(e.keyCode=='39')
        //     {speedX=1}
        //     elif(e.keyCode='40')
        //     {speedY=1}
        // }
        
        positionX += speedX;
        positionY += speedY;

        // Apply the new position to the image
        movingImage.style.left = positionX + "px";
        movingImage.style.top = positionY + "px";

        // Check boundaries (optional)
        // Add conditions to change direction if the image reaches certain boundaries

    }, updateInterval);
});

// document.addEventListener("mousedown", myFunction);
//     function myFunction(){
//     document.getElementById("random").innerHTML = "New text!";
// }

// document.addEventListener("keydown", function (e);
// {

// }
//     if(e.code==='Space')
//     {
//     document.getElementById('random').innerHTML='Yo';
//     }
// }
// )

var pressedKeys=""
let counter=0
const target="This is the target";
let begin=0

document.addEventListener("keydown",function(e){
    if(e.code==='Backspace')
    {   pressedKeys=""
        counter=0
    document.getElementById("random").innerHTML = pressedKeys;
        return}
    if(e.code==='Escape')
    {

        begin=new Date().getTime();
        document.getElementById("random").innerHTML = begin;
        return 
    }
    else{
    
    
    // pressedKeys+=e.key;

    counter+=1;
    // pressedKeys+=counter.toString()
    if(e.key===target[counter-1])

    {   pressedKeys+="0"
        document.getElementById('random').innerHTML =pressedKeys;
    }
    else{
    
    pressedKeys+=e.key

    document.getElementById("random").innerHTML = pressedKeys;

    }


}



});

setInterval(() => {
    // document.getElementById("time").innerHTML=Math.floor((new Date().getTime()-begin)/1000).toString()+" Seconds";
    let gg=((new Date().getTime()-begin)/1000).toString();
    document.getElementById("time").innerHTML=gg

    // document.getElementById("time").innerHTML=Math.floor((new Date().getTime()-begin)/10).toString()+" Seconds";
    
}, 26);
// function finder(){
// document.getElementById("time").innerHTML="ok"+Date();
// }

// while(true)
// {finder()}

// document.addEventListener("keydown", function (e) {
//     if (e.code === 'KeyT') {
//         document.getElementById('random').innerHTML = 't';
//     }
// });

// document.addEventListener("keydown", function (e) {
//     if (e.code === 'KeyY') {
//         document.getElementById('random').innerHTML = 'y';
//     }
// });

// document.addEventListener("keydown", function (e) {
//     if (e.code === 'KeyR') {
//         document.getElementById('random').innerHTML = 'r';
//     }
// });
