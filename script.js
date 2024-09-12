// Targeting Elements
const acButton = document.querySelector(".acButton")
const delButton = document.querySelector(".delButton")
const calculatorMain = document.querySelector(".calculator")
const numberButtons = document.querySelectorAll(".numberBtn")
const operatorBtns = document.querySelectorAll(".opBtn")
const upper_text = document.querySelector(".upper_text")
const bottom_text = document.querySelector(".low_text")
//
// Initializing Calculator
let num_1 = ""
let operator = ""
let num_2 = ""
//
const resetApp = () => {
  num_1 = ""
  operator = ""
  num_2 = ""
  //
  upper_text.textContent = ""
  bottom_text.textContent = ""
}
resetApp()
//
numberButtons.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (e) => {
    const value = Number(e.target.textContent) || "."
    if (value === ".") {
      !operator && !num_1.includes(".")
        ? (num_1 += ".")
        : operator && !num_2.includes(".")
        ? (num_2 += ".")
        : ""
    } else {
      operator ? (num_2 += value) : (num_1 += value)
    }
  })
})
//
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    const value = e.target.textContent
    if (value !== "=") {
      num_1 && !num_2 ? (operator = value) : ""
    }
  })
})
//
