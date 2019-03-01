import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var State = {
    'Home': {
        'title': 'Welcome to Collin\'s Savvy Coder Website'
    },
    'Blog': {
        'title': 'Read my words and stuff'
    },
    'Contact': {
        'title': 'Contact Collin'
    },
    'Projects': {
        'title': 'Behold my works, ye mighty, and despair'
    },
};
var root = document.querySelector('#root');
var render;

function navHandler(event){
    event.preventDefault();
    render(State[event.target.textContent]);
}

render = function Render(state){
    var links;
    var i = 0;

    root.innerHTML = ` 
    ${Navigation(state)}
    ${Header(state.title)}
    ${Footer(state)}
    ${Content(state)}
`;

    links = document.querySelectorAll('#navigation > ul > li> a');

    while(i < links.length){
        links[i].addEventListener('click', navHandler);

        i++;
    }
};

render(State.Home);
