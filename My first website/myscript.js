'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const className = document.body.className;
    if (className == "dark-theme") {
        this.textContent = "Light";
    } else {
        this.textContent = "Dark";
    }

    console.log('current class name:' + className);
});

const circle = document.querySelector('#circle')

circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});


// add a submit button that opens an alert that says "Thank you"