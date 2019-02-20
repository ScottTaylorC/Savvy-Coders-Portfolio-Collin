import Navigation from './src/Navagation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import nameChecker from './src/Greeter';

var originalContent = document.body.innerHTML;

document.body.innerHTML = ` 
    ${Navigation}
    ${Header}
    ${Footer}
    ${Content}
    ${originalContent}
`;

nameChecker();