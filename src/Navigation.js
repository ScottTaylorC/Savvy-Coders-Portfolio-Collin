import { lowerCase } from 'lodash';

function linkBuilder(links){
    var linksHtml = '';
    var destination = '';

    links.forEach((link) => {
        if(link !== 'Home'){
            destination = lowerCase(link);
        }

        linksHtml += `
            <li>
                <a data-navigo href="./${destination}">
                    ${link}
                </a>
            </li>
        `;
    });

    return linksHtml;
}

export default function Navigation(state){
    return `
<div id="navigation">
        <ul class="container">
            ${linkBuilder(state.links)}
        </ul>
    </div>
`;
}