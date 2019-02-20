export default function nameChecker(){
    var name = prompt('Enter your Name');
    
    if(name === ''){
        nameChecker();
    }
    else{
        document.querySelector('h1').textContent = `Hello, ${name}`;
    }
}