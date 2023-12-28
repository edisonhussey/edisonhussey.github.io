// document.addEventListener("DOMContentLoaded", function () {
//     var movingImage = document.getElementById("movingImage");


//     var positionX = 25; 
//     var positionY = 25; 

//     var speedX = 1; 
//     var speedY = 1; 

//     var updateInterval = 25;

//     document.onkeydown = function (e) {
//         e = e || window.event;
//         switch (e.keyCode) {
//             case 37: 
//                 speedX = -5;
//                 speedY = 0;
//                 break;
//             case 38: 
//                 speedX = 0;
//                 speedY = -5;
//                 break;
//             case 39: 
//                 speedX = 5;
//                 speedY = 0;
//                 break;
//             case 40:
//                 speedX = 0;
//                 speedY = 5;
//                 break;
//         }
//     };
//     setInterval(function () {

        
//         positionX += speedX;
//         positionY += speedY;

//         movingImage.style.left = positionX + "px";
//         movingImage.style.top = positionY + "px";

//     }, updateInterval);
// });

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
///////////

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
let x = 1;
let y = 1;
let z = 1;
setInterval(() => {

    let gg=((new Date().getTime()-begin)/1000).toString();
    document.getElementById("time").innerHTML=gg


    let myElement=document.getElementById('cave');

    let sigma = 10;
    let rho = 28;
    let beta = 8 / 3;

    let dx = sigma * (y - x);
    let dy = x * (rho - z) - y;
    let dz = x * y - beta * z;

    x += dx * 0.01;
    y += dy * 0.01;
    z += dz * 0.01;

    // Update the element position
    myElement.style.left = `${500 + 10*x}px`;
    myElement.style.top = `${300 + 10*y}px`;
    console.log('x:', x, 'y:', y, 'z:', z);



    myElement.style.transform=`rotate(${600*Math.sin(4*gg)}deg)`;
    // myElement.style.left=`${gg*50}px`
    // myElement.style.transform=`translate(${10 * gg}px, ${80 * Math.sin(gg)}px)`

    
}, 10);

//////////////


// setInterval(() => {
//     let myElement=document.getElementById('cave');
//     let content=myElement.innerHTML
//     myElement.style.transform='rotate(deg)'

// }, (1000));




const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width=1024;
canvas.height=576;

class Player {
    constructor(position)
    {

        this.position = position
        this.velocity ={x:0,y:1,}
        this.height=100
        this.width=100
    }
    draw()
    {
        c.fillStyle='red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)

    }
    update()
    {
        this.draw()
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y

        // this.velocity.x=this.velocity.x*0.9

        if(this.position.y+this.height+this.velocity.y<canvas.height){

        this.velocity.y+=0.4
        }
        else{this.velocity.y=0}

    }
}
const player= new Player({x:0,y:0,})
const player2=new Player({x:200,y:200})

const keys={
    d:{
        pressed:false,
    },
    a:{
        pressed:false,
    },


}
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle='white'
    c.fillRect(0,0,canvas.width,canvas.height)


    player.update()
    player2.update()

    player.velocity.x=0

    if(keys.d.pressed) player.velocity.x=10
        else if(keys.a.pressed) player.velocity.x=-10

    // c.fillStyle='red'
    // c.fillRect(100,y,100,100)
    // y++

}


animate()

window.addEventListener('keydown',(event) =>{
    switch(event.key)
    {case 'd':
        // player.velocity.x=25
        keys.d.pressed=true
        // document.getElementById("random").innerHTML='yo'
        console.log('hi')
    break
    case 'a':
        // player.velocity.x=-25
        keys.a.pressed=true
        // document.getElementById("random").innerHTML='yo'
        console.log('hi')
    break
    case 'w':
        player.velocity.y=-15
        // document.getElementById("random").innerHTML='yo'
        console.log('hi')
    break
}
    
})

window.addEventListener('keyup',(event) =>{
    switch(event.key)
    {case 'd':
        // player.velocity.x=25
        keys.d.pressed=false
        // document.getElementById("random").innerHTML='yo'
        console.log('hi')
    break
    case 'a':
        // player.velocity.x=-25
        keys.a.pressed=false
        // document.getElementById("random").innerHTML='yo'
        console.log('hi')
    break
}
    
})


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
