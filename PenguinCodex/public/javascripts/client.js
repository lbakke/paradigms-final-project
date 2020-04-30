console.log('Running client-side code...');

const navButton = document.getElementsByClassName('nav-button');
for (let i=0; i<navButton.length; i++) {
    navButton[i].addEventListener('click', function(e) {
        if (navButton[i].textContent == "Home") {
            location.href = "/";
        } else {
            location.href = "/".concat(navButton[i].textContent.toLowerCase());
        }
    });
}