function linkBuilder(linksArr){
    var i = 0;
    var linksHtml = '';

    while(i < linksArr.length){
        linksHtml += `<li><a href="./${linksArr[i]}">${linksArr[i]}</a></li>`;
        i++;
    }

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