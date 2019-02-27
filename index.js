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
        'title': 'Behold my works, ye mighty, adn despair'
    },
};
var root = document.querySelector('#root');

function render(state){
    var links;

    root.innerHTML = ` 
    ${Navigation(state)}
    ${Header(state.title)}
    ${Footer(state)}
    ${Content(state)}
`;

    links = document.querySelectorAll('#navigation > ul > li> a');

    links[0].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });

    links[1].addEventListener('click', (event) => {
        event.preventDefault();

        render(State[event.target.textContent]);
    });

    links[2].addEventListener('click', (event) => {
        event.preventDefault();

        render(State[event.target.textContent]);
    });

    links[3].addEventListener('click', (event) => {
        event.preventDefault();

        render(Stateevent.target.textContent);
    });
}

render(State.Home);
