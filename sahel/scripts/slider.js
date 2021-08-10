const imageContainer = document.getElementById("inner-container");
const images = document.querySelectorAll("#inner-container img");

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let counter = 0;
let imgWidth = images[0].clientWidth;

function styling(count) {
  return "translateX(" + -1 * imgWidth * count + "px)";
}

nextButton.addEventListener("click", () => {
  if (counter == 3) {
    return;
  } else {
    counter++;
    imageContainer.style.transform = styling(counter);
    images[counter].classList.remove("hide");
    images[counter - 1].classList.add("hide");
  }
});

prevButton.addEventListener("click", () => {
  if (counter == 0) {
    return;
  } else {
    counter--;
    imageContainer.style.transform = styling(counter);
    images[counter].classList.remove("hide");
    images[counter + 1].classList.add("hide");
  }
});

window.addEventListener("resize", () => {
  imgWidth = images[0].clientWidth;
  imageContainer.style.transform = styling(counter);
});
