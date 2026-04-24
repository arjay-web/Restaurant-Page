import goldenHerb from "./assets/img/golden-herb.jpg";
import crispyMozza from "./assets/img/crispy-mozza.jpg";

export default function loadMenu (){
    const content = document.querySelector('#content');
    const menu = document.createElement('section');
    menu.classList.add('menu');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'Our Menu';

    const menuText = document.createElement('p');
    menuText.textContent = 'Crafted with fresh ingredients and inspired by Italian tradition, every dish is made to deliver rich flavor and a memorable dining experience.'

    menuHeader.append(menuHeading, menuText);

    // Menu Category

    const menuCategory = document.createElement('div');
    menuCategory.classList.add('menu-category');

    const starters = document.createElement('h2');
    starters.textContent = 'Starters';

    const startersMenuItems = document.createElement('div');
    startersMenuItems.classList.add('menu-items');

    const starterItems = [
        {
            name: 'Golden Herb Bread ~ 8$',
            description: 'Warm toasted bread brushed with garlic butter and mixed herbs.',
            image: goldenHerb,
        },

        {
            name: 'Crispy Mozza Bites ~ 11$',
            description: 'Fried mozzarella balls served with house tomato dip.',
            image: crispyMozza,
        }
    ]

    starterItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const name = document.createElement('h3');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        card.append(img, name, description)
        startersMenuItems.append(card);
    })

    const mains = document.createElement('h2');
    mains.textContent = 'Mains';

    const mainsMenuItem = document.createElement('div');
    mainsMenuItem.classList.add('menu-items');

    const mainItem = [
        {
            name: 'Creamy Chicken Pasta ~ $15',
            description: 'Tender chicken tossed in a rich, creamy sauce with herbs.',
            image: goldenHerb,
        },

        {
            name: 'Beef Tomato Penne ~ $14',
            description: 'Slow-cooked beef in a savory tomato sauce with penne pasta.',
            image: crispyMozza,
        },

        {
            name: 'Grilled Lemon Fish ~ $17',
            description: 'Fresh fish grilled with lemon butter and spices.',
            image: crispyMozza,
        }
    ]

    mainItem.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const name = document.createElement('h3');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        card.append(img, name, description);
        mainsMenuItem.append(card);
    })

    menuCategory.append(starters, startersMenuItems, mains, mainsMenuItem);
    menu.append(menuHeader, menuCategory);
    content.append(menu);
}

