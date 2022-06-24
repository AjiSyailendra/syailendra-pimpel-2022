window.addEventListener("scroll", function () {
    var header = document.getElementById("nav");
    header.classList.toggle("border-b", window.scrollY > 0);
});