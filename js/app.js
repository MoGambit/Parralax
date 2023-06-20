const parralax_el = document.querySelectorAll(".parralax");

let xValue = 0,
    yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parralax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        const forTest = document.querySelector(".mountain-2");

        let zValue = e.clientX - parseFloat(getComputedStyle(forTest).left);
        console.log(zValue);

        el.style.transform = `translateX(calc(-50% + ${
            -xValue * speedx
        }px)) translateY(calc(-50% + ${
            yValue * speedy
        }px)) perspective(2300px) translateZ(${zValue}px)`;
    });
});