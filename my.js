const getcolor = () => {
    const randdomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randdomNumber.toString(16);
    document.body.style.background = randomCode;
    document.getElementById("color_code").style.color=randomCode
    document.getElementById("color_code").innerText = randomCode
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor()