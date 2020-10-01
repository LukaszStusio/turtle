const turtle = document.querySelector('.turtleclass');
let x = 0;
let y = 0;
const speed = 25;
let flipped = false;
let rotate = 0;

function handleKeyDown(event) {
    if(!event.key.includes('Arrow')){
        return;
    }
    console.log(event.key);

    switch (event.key) {
        case 'ArrowUp':
            y = y - 1;
            rotate = -45;
            break;
        case 'ArrowRight':
            x += 1;
            rotate = 0;
            flipped = false;
            break;
        case 'ArrowDown':
            y += 1;
            rotate = 45;
            break;
        case 'ArrowLeft':
            x -= 1;
            rotate = 0;
            flipped = true;
            break;
        default:
            console.log('That is not a valid move!');
            break;
    }
    console.log(x, y);
    turtle.setAttribute('style', `
    --x:${x * speed}px;
    --y:${y * speed}px;
    --rotateY: ${flipped ? '180deg' : '0'};
    --rotate: ${rotate}deg;
    `);
};

window.addEventListener('keydown', handleKeyDown);