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
