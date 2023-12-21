var searchBtn = document.getElementById("search-btn");

var searchModal = document.getElementById("search-modal");

var closeBtn = document.getElementsByClassName("close")[0];

searchBtn.onclick = function () {
    searchModal.style.display = "block";
}

closeBtn.onclick = function () {
    searchModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == searchModal) {
        searchModal.style.display = "none";
    }
}