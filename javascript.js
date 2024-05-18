// first commit //

// Grid divs here //

const mainDiv = document.createElement("div");
mainDiv.classList.add("main-div");
const container = document.querySelector(".container");
container.appendChild(mainDiv);
let numberOfGrid = 16;
const gridDiv = document.createElement("div");
gridDiv.classList.add("grid-div");
gridDiv.style.height = 600/numberOfGrid + "px";
gridDiv.style.width = 600/numberOfGrid + "px";




for ( i = 1; i<=(numberOfGrid ** 2); i++ ) {
mainDiv.appendChild(gridDiv.cloneNode(true));
  }


// Hover even here //

const gridDivEvent = document.querySelectorAll(".grid-div");

gridDivEvent.forEach((grid) => {

grid.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor= "#27374D";

  
setTimeout(() => {
      event.target.style.backgroundColor = "#526D82";
    }, 300);
  },
  false,
);

    });

// Popup button and new grid here //

document.querySelector("button").addEventListener("click", () => {
  let newGrid = prompt("Enter your preferred grid size (1-100 only)", 16);
  
  if (newGrid > 100) {
    alert("Invalid grid size. Enter 1-100 only. Please try again");
    prompt("Enter your preferred grid size (1-100 only)", 16);
    } 
  
  alert("Setting up your preferred grid size... Press OK");


  });