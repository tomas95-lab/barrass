const container = document.querySelector(".container")
const cantidad = document.getElementById("cantidad")
const cost = document.getElementById("cost")
const calculate = document.getElementById("calculate")
const create = document.getElementById("create")
const inputContainer = document.querySelector(".inputs")
let conatinerBarr = document.createElement("div")
container.appendChild(conatinerBarr)
conatinerBarr.classList.add("containerBar")

function all() {
    for (let i = 0; i < cantidad.value; i++) {
        const input = document.createElement("input")
        inputContainer.appendChild(input)
        input.classList.add("bar")
        input.setAttribute("type", "number")
        input.setAttribute("min", "0")
        input.setAttribute("max", "100")
        input.value = 0
        if (cantidad.value > 10) {
            cantidad.value = ""
            inputContainer.removeChild(input)
        }
    }
    const bar = document.querySelectorAll(".bar")
    calculate.addEventListener("click", (e) => {
        conatinerBarr.innerHTML = ""
        for (let i = 0; i < bar.length; i++) {
            let barra = bar[i]
            let barraG = document.createElement("div")
            barraG.classList.add("barraG")
            conatinerBarr.appendChild(barraG)
            let valueBar = barra.value
            barraG.style.background = "green"
            barraG.style.height = `${valueBar}%`
            if (valueBar > 10) {
                barraG.style.background = "red"
            }
            if (valueBar > 90) {
                barraG.style.background = "#a00"
            }

            let value = document.createElement("span")
            barraG.appendChild(value)
            value.innerHTML = valueBar
            value.classList.add("valueSpan")
        }
    })
    cantidad.value = ""
}
create.addEventListener("click", (e) => {
    all()
})