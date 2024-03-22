const toggleMenu = (e) => {
    let menu = document.querySelector("#mobile-menu");
    if (e.classList.contains("fa-bars")) {
        e.classList.remove("fa-bars");
        e.classList.add("fa-xmark");
        menu.classList.add("block");
        menu.classList.remove("hidden");
    } else {
        e.classList.add("fa-bars");
        e.classList.remove("fa-xmark");
        menu.classList.remove("block");
        menu.classList.add("hidden");
    }
};
