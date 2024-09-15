const query = (name) => {return document.querySelector(`${name}`)};
const menu = query("#menu-icon");
const navlist = query(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};