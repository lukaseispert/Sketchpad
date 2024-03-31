


function setupSketchpad() {
    for (let i = 0; i < 272; i++) {
        let box = document.createElement("div");
        if (i % 16 == 0) {
            box.classList.add("break")
        } else {
            box.classList.add("box")
        }
        
        box.style.height = 40 + 3 * i
        const container = document.getElementById("container")
        container.appendChild(box)
    }
}

setupSketchpad();