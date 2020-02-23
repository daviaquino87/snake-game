window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", function(e){
        console.log(e.keyCode);
        switch(e.keyCode){
            case 37:
                velX = -1;
                velY = 0;
                break;
            case 38:
                velY = -1;
                velX = 0;
                break;
            case 39:
                velX = 1;
                velY =0;
                break;
            case 40:
                velY = 1;
                velX = 0
                break;
        }
    });

    setInterval(jogo, 100);
}

positionX = 10;
positionY = 10;
foodX = 15;
foodY = 15;
velX = 0;
velY = 0;
grid = 20;
snake = [];
tam = 5;

function jogo(){
    positionX += velX;
    positionY +=velY;

    console.log(positionX);
    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0; 
    }
    if(positionY < 0){
        positionY = grid;
    }
    if(positionY > grid){
        positionY = 0; 
    }
    

    ctx.fillStyle = "#079";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    
    
    ctx.fillStyle = "black";
    for(var i=0; i < snake.length; i ++){
        ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid - 1 , grid - 1);
        if(snake[i].x == positionX && snake[i].y == positionY){
            tam = 5;
        }
    }  

    snake.push({x: positionX, y: positionY});
    while(snake.length > tam){
        snake.shift();
    }

    ctx.fillStyle = "red";
    ctx.fillRect(foodX* grid, foodY * grid, grid - 1, grid - 1);

    if(positionX == foodX && positionY == foodY){
        tam++;
        foodX = Math.floor(Math.random() * grid);
        foodY = Math.floor(Math.random() * grid);
    }
}