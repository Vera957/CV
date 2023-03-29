/** @format */

const btn = document.querySelector(".more");
const hidenList = document.querySelectorAll(".moreItems");
btn.addEventListener("click", toggleMore);

function toggleMore() {
    btn.textContent === "more..."
      ? [...hidenList].forEach((e) => {
          e.classList.remove("hide");
          btn.textContent = "hide";
        })
      : [...hidenList].forEach((e) => {
          e.classList.add("hide");
          btn.textContent = "more...";
        }); 
}
