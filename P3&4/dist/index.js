const menu = (e) => {
    let selectMenu = document.querySelector("#mobile-menu");
    e.name === "menu"
        ? ((e.name = "close"), (selectMenu.style.opacity = 100))
        : ((e.name = "menu"), (selectMenu.style.opacity = 0));

    selectMenu.classList.remove("hidden");
    selectMenu.classList.add("block");
};

const toHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
};
const toTestimonials = () => {
    document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" });
};
const toPrice = () => {
    document.getElementById("price").scrollIntoView({ behavior: "smooth" });
};
const toProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
};
