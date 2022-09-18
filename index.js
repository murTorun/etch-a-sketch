const inputContainer = document.querySelector(".input");
for (let i = 0; i < 5; i++) {
    const column = document.createElement("div");
    column.style.height = `${95 / 5}vh`;
    inputContainer.appendChild(column);
    for (let j = 0; j < 20; j++) {
        const gridInput = document.createElement("button");
        gridInput.classList.add("grid-input");
        gridInput.innerText = `${j + 20 * i + 1}x${j + 20 * i + 1}`;
        gridInput.id = (j + 20 * i + 1).toString();

        gridInput.addEventListener("click", (e) => {
            drawGrid(e.target.id);
            console.log(e.target.id);
        });
        column.appendChild(gridInput);
    }
}

function drawGrid(gridSize) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    console.log(gridSize);
    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement("div");
        column.classList.add("col");
        column.style.height = `${95 / gridSize}vh`;
        container.appendChild(column);
        for (let j = 0; j < gridSize; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            column.appendChild(squareDiv);
        }
    }
}
