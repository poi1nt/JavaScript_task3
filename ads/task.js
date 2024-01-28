rotatorElements = document.querySelectorAll(`.rotator__case`);
let speed = 1000;

let interval = setInterval(rotate, speed);

function rotate() {
    let index = Array.from(rotatorElements).findIndex(e => e.classList.contains('rotator__case_active'));
    if (index !== -1){
        rotatorElements[index].classList.remove(`rotator__case_active`);
        let indexNext = (index + 1) % rotatorElements.length;
        rotatorElements[indexNext].classList.add('rotator__case_active');

        speed = parseInt(rotatorElements[indexNext].getAttribute('data-speed'));

        colorElement = rotatorElements[indexNext].getAttribute('data-color');
        rotatorElements[indexNext].style.color = colorElement

        clearInterval(interval);
        interval = setInterval(rotate, speed);
    } else {
        rotatorElements[0].classList.add('rotator__case_active');
    }
};