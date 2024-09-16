const query = (name) => {return document.querySelector(`${name}`)};
const menu = query("#menu-icon");
const navlist = query(".navlist");
const overlay = query(".overlay")

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    overlay.classList.toggle('open')
};

overlay.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    overlay.classList.toggle('open')
}