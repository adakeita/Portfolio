import { handleMenu, handleModal } from "./utils.js";

document.addEventListener('DOMContentLoaded', (event) => {
    handleMenu();
    if (document.getElementById('modal')) {
        handleModal();
    }
});
