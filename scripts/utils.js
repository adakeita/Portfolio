export const handleMenu = () => {
    const navigation = document.querySelector(".nav-wrapper");
    const menuIcon = document.querySelector(".menu-icon");

    menuIcon.addEventListener("click", () => {
        navigation.classList.toggle("open");
        navigation.classList.toggle("closed");
    });
};
