const particlesArray = [];

class Particle{
    constructor(){
        this.x = player.x;
        this.y = player.y;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1)-0.5;
        this.color = "red";
    }
    
    update(){
        this.x -= this.start;
        this.y += this.speedY
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles(){
    particlesArray.unshift(new Particle);
    
    for(let i= 0; i < particlesArray.length;  i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    
    }
    
    if(particlesArray.length > 200){
        for(let i = 0 ; i < 20 ; i++){
            particlesArray.pop(particlesArray[i]);
        }
    }
}
    