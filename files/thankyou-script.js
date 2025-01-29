document.addEventListener("DOMContentLoaded", function() {
    let gift = localStorage.getItem("selectedGift") || "something special";
    document.getElementById("chosen-gift").textContent = gift;
});
