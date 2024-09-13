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
    const value = e.target.textContent.trim() || "."
    if (
      (!num_1 && value === "0") ||
      (num_1 && operator && !num_2 && value === "0")
    )
      return
      //
    if (value === ".") {
      !operator && !num_1.includes(".")
        ? (num_1 += ".")
        : operator && !num_2.includes(".")
        ? (num_2 += ".")
        : ""
    } else {
      operator ? (num_2 += value) : (num_1 += value)
    }
    bottom_text.textContent = bottom_text.textContent += value
  })
})
//
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    const value = e.target.textContent.trim()
    if (value !== "=") {
      num_1 && !num_2 ? (operator = value) : calculate(value)
      upper_text.textContent = `${num_1} ${value}`
      bottom_text.textContent = ""
    } else if (num_1 && operator && num_2) {
      calculate()
    }
  })
})
//
const continueCalc = (x, num) => {
  num_1 = String(num)
  if (x) {
    operator = x
    num_2 = ""
    upper_text.textContent = `${num} ${x}`
    bottom_text.textContent = ""
  } else {
    operator = ""
    num_2 = ""
    upper_text.textContent = ""
    bottom_text.textContent = num
  }
}
//
function calculate(x) {
  switch (operator) {
    case "÷":
      {
        const divide = Number(num_1 / num_2)
        continueCalc(x, divide)
      }
      break
    case "+":
      {
        const plus = Number(num_1) + Number(num_2)
        continueCalc(x, plus)
      }
      break
    case "-":
      {
        const minus = num_1 - num_2
        continueCalc(x, minus)
      }
      break
    case "*":
      {
        const multiply = num_1 * num_2
        continueCalc(x, multiply)
      }
      break
  }
}
//
acButton.addEventListener("click", resetApp)
//
delButton.addEventListener("click", () => {
  if (operator && num_2.length >= 1) {
    num_2 = num_2.slice(0, -1)
    bottom_text.textContent = num_2
  } else if (num_1.length >= 1 && !operator) {
    num_1 = num_1.slice(0, -1)
    bottom_text.textContent = num_1
  }
})
