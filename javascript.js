const mainDiv = document.createElement("div");
mainDiv.classList.add("main-div");
const container = document.querySelector(".container");
container.appendChild(mainDiv);

const gridDiv = document.createElement("div");
gridDiv.classList.add("grid-div");

gridDiv.style.height = "37.5px";
gridDiv.style.width = "37.5px";

for (i = 1; i <= 256; i++) {
  mainDiv.appendChild(gridDiv.cloneNode(true));
}

function mouseOver() {
  const gridDivEvent = document.querySelectorAll(".grid-div");
  gridDivEvent.forEach((grid) => {
    grid.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "#481E14";
      //commit: added progressing darkening bg color //
      event.target.style.opacity =
        (parseFloat(event.target.style.opacity) || 0) + 0.2;
    });
  });
}

mouseOver();

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // commit: add if else for buttons //
    const selectedButton = button.id;

    if (selectedButton === "new-grid") {
      let newGrid = prompt("Enter your preferred grid size (1-100 only)");

      if (newGrid <= 100 && newGrid != 0 && newGrid != null) {
        mainDiv.innerHTML = " ";
        gridDiv.style.height = 600 / newGrid + "px";
        gridDiv.style.width = 600 / newGrid + "px";

        for (i = 1; i <= newGrid ** 2; i++) {
          mainDiv.appendChild(gridDiv.cloneNode(true));
        }

        mouseOver();
      } else if ((newGrid > 100 || newGrid == 0) && newGrid != null) {
        alert("Invalid grid size. Enter 1-100 only.");

        let newPrompt = prompt("Enter your preferred grid size (1-100 only)");

        if ((newPrompt > 100 || newPrompt == 0) && newPrompt != null) {
          alert("Invalid grid size. Try again!");
        } else if (newPrompt <= 100 && newPrompt != 0 && newPrompt != null) {
          mainDiv.innerHTML = " ";
          gridDiv.style.height = 600 / newPrompt + "px";
          gridDiv.style.width = 600 / newPrompt + "px";

          for (i = 1; i <= newPrompt ** 2; i++) {
            mainDiv.appendChild(gridDiv.cloneNode(true));
          }

          mouseOver();
        }
      }
    } else {
      const gridSize = 600 / parseFloat(gridDiv.style.height);
      mainDiv.innerHTML = " ";

      for (i = 1; i <= gridSize ** 2; i++) {
        mainDiv.appendChild(gridDiv.cloneNode(true));
      }

      mouseOver();
    }
  });
});
