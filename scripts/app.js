"use strict"

let btn = document.getElementById('btn');

btn.addEventListener('click', function (){
    document.getElementById('navLinkContainer').classList.toggle('showNavLinks');
})