import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var home = {
    'title': "Welcome to my Savvy Coder's Website!"
};

var blog = {
    'title': 'Welcome to my blog'
};

var contact = {
    'title': 'Welcome to my contact'
};

var projects = {
    'title': 'Welcome to my projects!'
};

var root = document.querySelector('#root');

function render(state){
    root.innerHTML = ` 
    ${Navigation(state)}
    ${Header(state.title)}
    ${Footer(state)}
    ${Content(state)}
`;
}

render(home);

document.querySelector('#navigation a').addEventListener(
    'click', (e) => {
        e.preventDefault();
        console.log(e.target.href);
        render(home);
    });

document.querySelector('#navigation li:nth-child(1) > a').addEventListener(
    'click', (e) => {
        e.preventDefault();
        console.log(e.target.href);
        render(blog);
    });

document.querySelector('#navigation li:nth-child(2) > a').addEventListener(
    'click', (e) => {
        e.preventDefault();
        console.log(e.target.href);
        render(contact);
    });

document.querySelector('#navigation li:nth-child(3) > a').addEventListener(
    'click', (e) => {
        e.preventDefault();
        console.log(e.target.href);
        render(projects);
    });
