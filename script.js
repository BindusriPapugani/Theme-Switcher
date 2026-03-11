let th = true
let b = document.querySelector("div")
let p = document.getElementById("line")
function theme() {
    if (th) {
        document.body.style.backgroundColor = "black"
        th = false
        b.innerHTML = `Light Theme <i class="fa-solid fa-toggle-on"></i>`
        b.style.fontSize = "20px"
        document.body.style.color = "white"
        p.innerHTML = `<p>Click the toggle button in the top-right corner to turn off dark theme</p>`
    }
    else {
        document.body.style.backgroundColor = "white"
        th = true
        b.innerText = `Dark`
        b.innerHTML = `Dark Theme <i class="fa-solid fa-toggle-off"></i>`
        b.style.fontSize = "20px"
        document.body.style.color = "black"
        p.innerHTML = `<p>Click the toggle button in the top-right corner to turn on dark theme</p>`

    }
}