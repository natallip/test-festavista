'use strict';

/*
    This file can be used as entry point for webpack!
 */

const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});
