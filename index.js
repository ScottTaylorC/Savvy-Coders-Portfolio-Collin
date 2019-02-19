import Navigation from './src/Navagation';

import Header from './src/Header';

import Footer from './src/Footer';

var originalContent = document.body.innerHTML;

var name;
var blankChecker = function blankChecker(){
    if(name === ''){
        name = prompt('ENTER YOUR NAME NOW!');
        blankChecker();
    }
};
var nameChecker = function nameChecker(){
    name = prompt('Enter your Name');
    blankChecker();
    document.querySelector('h1').textContent = `Hello, ${name}`;
};

nameChecker();

document.body.innerHTML = ` 
    ${Navigation}
    ${originalContent}
`;

document.body.innerHTML = ` 
    ${Header}
    ${originalContent}
`;

document.body.innerHTML = ` 
    ${Footer}
    ${originalContent}
`;