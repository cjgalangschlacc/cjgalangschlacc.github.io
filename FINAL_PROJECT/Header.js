// Search Bar Function
function searchPage() {
    const text = document.body.innerText.toLowerCase();
    const input = document.querySelector(".search-input").value.toLowerCase();


    if (text.includes(input)) {
        alert("Text found on this page!");
    } else {
        alert("No match found.");
    }
}