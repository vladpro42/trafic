const sliderDot = document.querySelector(".portfolio__slider-dot")
const dotsContainer = document.querySelector(".portfolio__slider-dots")
const portfolio__list = document.querySelector(".portfolio__list")
const portfolioDot = document.querySelectorAll(".portfolio__slider-dot")

portfolioDot.forEach((item) => {
    item.addEventListener('click', slider)
})

function slider(event) {
    const portfolioDotActive = document.querySelector(".portfolio__slider-dot--active")
    const portfolioDotSpanActive = document.querySelector(".portfolio__slider-span--active")
    portfolioDotActive.classList.remove("portfolio__slider-dot--active")
    portfolioDotSpanActive.classList.remove("portfolio__slider-span--active")

    const widthSlide = 423
    const index = event.currentTarget.dataset.index
    portfolio__list.style.transform = `translateX(-${widthSlide * index}px)`

    event.currentTarget.classList.add("portfolio__slider-dot--active")
    event.currentTarget.children[0].classList.add("portfolio__slider-span--active")
}
