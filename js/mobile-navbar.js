document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-mobile');
    const canto = document.querySelector('.canto');
    const mainContainer = document.querySelector('.main-container');

    menuButton.addEventListener('click', () => {
        canto.classList.toggle('active');
        if (canto.classList.contains('active')) {
            mainContainer.style.marginLeft = '250px';
        } else {
            mainContainer.style.marginLeft = '0';
        }
    });
});
