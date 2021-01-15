let btn__right = document.querySelector('.btn__right')
let btn__left = document.querySelector('.btn__left')

let slides = document.querySelectorAll('.slide')
let body = document.querySelector('body')

let idx = 0;
let interval = setInterval(run, 5000)

function run() {
    idx++
    changeSlide()
}

function changeSlide() {
    if (idx > slides.length - 1) {
        idx = 0
    }
    else if (idx < 0) {
        idx = slides.length - 1
    };
    slides.forEach(slide => {
        slide.style.transform = `translateX(${-idx * 101}rem)`;
    });
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 5000)
}

btn__left.addEventListener("click", () => {
    idx--
    changeSlide()
    resetInterval()
})

btn__right.addEventListener("click", () => {
    idx++
    changeSlide()
    resetInterval()
})

// For the right and left arrow controls
body.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
        idx++
        changeSlide()
        resetInterval()
    } else if (e.key === "ArrowLeft") {
        idx--
        changeSlide()
        resetInterval()
    }
    else {
        console.log(e.key)
    }
})