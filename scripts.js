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
