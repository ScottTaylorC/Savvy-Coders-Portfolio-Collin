export default function Contact(){
    return `
        <form class="container" action="https://formspree.io/cst21998@gmail.com" method="POST">
            <label for="Fname">First Name</label> 
            <input type="text" name="first-name" id="Fname" required>
    
            <label for="Lname">Last Name</label> 
            <input type="text" name="Last-name" id="Lname" required>
            
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
    
            <label for="fone">Phone</label>
            <input type="Tel" name="fone" id="fone">
    
            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="PLease enter message here"></textarea>
    
            <input type="submit" value="submit">
            <input type="reset" value="Clear">
        </form>
    `;
}