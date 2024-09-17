const query = (name) => {return document.querySelector(`${name}`)};
const menu = query("#menu-icon");
const navbar = query("nav ul");
const overlay = query(".overlay")

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    overlay.classList.toggle('open')
};

overlay.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    overlay.classList.toggle('open')
}