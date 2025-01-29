function selectGift(gift) {
    alert("You chose: " + gift);
}

function selectGift(gift) {
    localStorage.setItem("selectedGift", gift); // Store the selected gift
    window.location.href = "thankyou.html"; // Navigate to the thank-you page
}
