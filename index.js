import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var State = {
    'Home': {
        'links': [ 'Blog', 'Contact', 'Projects' ],
        'title': 'Welcome to Collin\'s Savvy Coder Website'
    },
    'Blog': {
        'links': [ 'Home', 'Contact', 'Projects' ],
        'title': 'Read my words and stuff'
    },
    'Contact': {
        'links': [ 'Home', 'Blog', 'Projects' ],
        'title': 'Contact Collin'
    },
    'Projects': {
        'links': [ 'Home', 'Blog', 'Contact', ],
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
