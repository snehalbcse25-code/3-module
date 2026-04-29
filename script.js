const details = document.querySelectorAll(".details");
details.forEach(d => d.style.display = "none");

const facultyLinks = document.querySelectorAll(".faculty-list a");

facultyLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

               details.forEach(d => d.style.display = "none");

                const id = this.getAttribute("href");
        document.querySelector(id).style.display = "block";
    });
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let scrollPos = window.scrollY;

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop - 100 &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(link => link.style.color = "black");

            let activeLink = document.querySelector(
                `nav a[href="#${section.id}"]`
            );

            if (activeLink) {
                activeLink.style.color = "red";
            }
        }
    });
});

window.onload = function() {
    alert("Welcome to Computer Science Department Website!");
};