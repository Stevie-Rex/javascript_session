var dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function(dropdown) {
    var trigger = dropdown.querySelector("a");
    var menu = dropdown.querySelector(".dropdown-content");

    trigger.addEventListener("click", function(event) {
        event.preventDefault();
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});
