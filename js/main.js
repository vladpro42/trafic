import "./slider.js"

const questionForm = document.querySelector(".question__form")

function handleQuestionForm(event) {
    event.preventDefault()
    const activeLabel = document.querySelector(".question__wrap-label--active")
    const input = event.target
    const label = input.closest(".question__wrap-label")

    if (label.classList.contains("question__wrap-label--active")) {
        label.classList.remove("question__wrap-label--active")
    } else {
        activeLabel.classList.remove("question__wrap-label--active")
        label.classList.add("question__wrap-label--active")
    }
}

questionForm.addEventListener("change", handleQuestionForm)



