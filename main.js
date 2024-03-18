let icon = document.querySelector('header .container .links .icon');
let ul = document.querySelector('header .container .links ul');

ul.style.display = "none";
icon.addEventListener('click' , () => {
    if (ul.style.display === "none") {
        ul.style.display = "block";
    } else {
        ul.style.display = "none"
    };
});