export default function loadAbout (){
    const content = document.querySelector('#content');
    const about = document.createElement('div');
    about.classList.add('about');
    content.append(about)

    const aboutHeader = document.createElement('section');
    aboutHeader.classList.add('about-header');

    const contactUs = document.createElement('h1');
    contactUs.textContent = 'Contact Us'

    const hr = document.createElement('hr');

    const text = document.createElement('p');
    text.textContent = "Have questions or inquiries? Feel free to contact us anytime. We’re here to help and look forward to hearing from you."

    aboutHeader.append(contactUs, hr, text);


    const aboutContent = document.createElement('section');
    aboutContent.classList.add('about-content');

    const findUs = document.createElement('h2');
    findUs.textContent = 'Find Us';

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactDetails = [
        {
            contact: 'ADDRESS',
            address: '442 Darasa, Tanauan City'
        },
        {
            contact: 'OPENING HOURS',
            address: 'Mon-Fri: 10:00-22:00 Sat-Sun: 08:00-20:00',
        },
        
        {
            contact: 'PHONE',
            address: '+63 908 569 3625',
        },

        {
            contact: 'EMAIL',
            address: 'mail@thecuisine.com',
        },
    ]

    contactDetails.forEach(detail =>{
        const h4 = document.createElement('h4');
        h4.textContent = detail.contact

        const p = document.createElement('p');
        p.textContent = detail.address

        contactContainer.append(h4, p);
    })

    aboutContent.append(findUs, contactContainer);
    about.append(aboutHeader, aboutContent);
}

//append about-header and about-content to about