export default function loadHome() {
    const content = document.querySelector('#content');
    const homePage = document.createElement('div');
    const hero = document.createElement('section');
    const heroContent = document.createElement('div');
    const heading = document.createElement('h1');
    const text = document.createElement('p');

    homePage.classList.add('home-page');
    hero.classList.add('hero');
    heroContent.classList.add('hero-content');
    heading.textContent = 'The Cuisine'
    text.textContent = 'Welcome to The Cuisine...'

    const homePageContent = document.createElement('section');
    homePageContent.classList.add('home-page-content');

    const cards = [
        "🍝 Signature dishes crafted daily",
        "🕯️ Cozy dining atmosphere",
        "🍷 Carefully selected drinks"
        ];

        cards.forEach(text =>{
            const card = document.createElement('div');
            card.classList.add('home-card');

            const h3 = document.createElement('h3');
            h3.textContent = text;
            card.appendChild(h3);
            homePageContent.appendChild(card)
        })

        homePage.append(hero, homePageContent);
        hero.append(heroContent);
        heroContent.append(heading, text);
        content.append(homePage);
}
