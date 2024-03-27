const iconUrls = [
    'css-icon',
    'js-icon',
    'react-icon',
    'php-icon',
    'laravel-icon',
    'mysql-icon',
    'docker-icon',
    'aws-icon'
];

const iconContainer = document.getElementById('icon-container');

iconUrls.forEach(iconUrl => {

    const iconElement = document.createElement('img');
    iconElement.src = "./src/assets/skills/" + iconUrl + ".png";
    iconElement.alt = 'Icon';
    iconElement.style.width = '54%'

    iconContainer.appendChild(iconElement);
});