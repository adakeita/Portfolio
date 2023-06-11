export const handleMenu = () => {
    const navigation = document.querySelector(".nav-wrapper");
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelectorAll(".nav-item a");

    menuIcon.addEventListener("click", () => {
        navigation.classList.toggle("open");
        navigation.classList.toggle("closed");

        // Change the menu icon depending on whether the menu is open or closed
        if (navigation.classList.contains("open")) {
            menuIcon.src = "icons/logout.png";
        } else {
            menuIcon.src = "icons/bar.png";
        }
    });

    // Add active class to current page link
    const currentPage = window.location.href;
    navLinks.forEach(link => {
        if (link.href === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
};

export const handleModal = () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");

    const imgs = document.querySelectorAll(".project-screenshot-noroff, .project-screenshot-personal");
    const captionText = document.getElementById("caption");

    imgs.forEach(img => {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            document.body.style.overflow = "hidden";
        }
    });

    const span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    window.onkeydown = function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
}

