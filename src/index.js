import "./style.css"

import loadMenu from "./menu.js"

import loadHome from "./home.js"


loadHome()

const buttons = document.querySelectorAll('nav button');
buttons.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const page = btn.dataset.page;

        const content = document.querySelector('#content');
        content.innerHTML = '';

        if(page === 'home') loadHome();
        if(page === 'menu') loadMenu();
    })
})