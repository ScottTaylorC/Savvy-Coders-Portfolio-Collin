import Navigation from './src/Navagation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var root = document.querySelector('#root');

root.innerHTML = ` 
    ${Navigation}
    ${Header}
    ${Footer}
    ${Content}
`;