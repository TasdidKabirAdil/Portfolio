document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;

            // Load and execute Nav.js after inserting nav.html
            let script = document.createElement("script");
            script.src = "../scripts/nav.js";
            script.defer = true;
            document.body.appendChild(script);
        })
        .catch(error => console.error("Error loading navigation:", error));
});

fetch('../pages/footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer-placeholder').innerHTML = data);