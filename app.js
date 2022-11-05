const display = document.querySelector(".display");
const btns = document.getElementsByClassName("btn");
const clearScreen = document.querySelector(".clear");
function calculate(value){
    return eval(value)
}
function clear () {
    display.innerText = ""
}
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", (e) => {
        display.innerText += e.target.innerText
        switch (e.target.innerText) {
            case "C":
                clear()
                break;
            case "=":
                let toCalculate = display.innerText.replace("=", "");
                display.innerText =  calculate(toCalculate)
                break;
            default:
                break;
        }
    })
}
