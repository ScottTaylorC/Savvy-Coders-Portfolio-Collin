export default function Navigation(){
    return `
<div id="navigation">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="blog/index.html">Blog</a></li>
                <li><a href="contact/index.html">Contact</a></li>
                <li><a href="projects/index.html">Projects</a>
                    <ul>
                        <li><a href="">First</a></li>
                        <li><a href="">Second</a></li>
                        <li><a href="">Third</a></li>
                    </ul>
                </li>
            </ul>
        </div>
`;
}