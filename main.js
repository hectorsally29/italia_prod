function sayYes() {
    window.location.href = "gift.html"; // Navigates to the gift selection page
}

function moveButton() {
    let noButton = document.querySelector('.no');
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
