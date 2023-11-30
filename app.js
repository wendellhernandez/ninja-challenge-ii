let ninja = document.querySelector('.ninja');
let left = 0;
let tops = 0;

document.addEventListener('keydown' , e => {
    e.preventDefault();

    switch (e.key) {
        case "ArrowLeft":
            if(left>0 && left <=500){
                left -= 100
                ninja.style.left = left + "px";
            }

            moveNinja("left");
            break;

        case "ArrowRight":
            if(left>=0 && left <500){
                left += 100
                ninja.style.left = left + "px";
            }

            moveNinja("right");
            break;

        case "ArrowUp":
            if(tops>0 && tops <=400){
                tops -= 100
                ninja.style.top = tops + "px";
            }

            moveNinja("top");
            break;

        case "ArrowDown":
            if(tops>=0 && tops <400){
                tops += 100
                ninja.style.top = tops + "px";
            }

            moveNinja("down");
            break;
    
        default:
            break;
    }
})

function moveNinja(direction){
    if(ninja.style.backgroundImage == `url("img/${direction}1.png")`){
        ninja.style.backgroundImage = `url("img/${direction}2.png")`;
    }else{
        ninja.style.backgroundImage = `url("img/${direction}1.png")`
    }
}