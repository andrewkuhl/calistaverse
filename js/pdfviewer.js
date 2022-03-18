const pdfs = document.querySelectorAll(".pdfs object");
const images = document.querySelectorAll(".gridwrapper object");
const modal = document.querySelector(".modal");
const modalpdf = document.querySelector(".modalpdf");
const close = document.querySelector(".close");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.classList.add("appear");
        
        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
    });
});
