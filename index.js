const button = document.getElementById("openMenu");
const select = document.getElementById("colorSelect");

button.addEventListener("click", function() {
    select.style.display = (select.style.display === "none") ? "inline-block" : "none";
});

select.addEventListener("change", function() {
    if (this.value) {
        document.body.style.backgroundColor = this.value;
    }
});
