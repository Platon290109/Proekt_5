const blogList = document.querySelector(".blogList");
export function makehtml(data){
    const markup = data.map(item =>{
        return `
            <li>
                <h1>${item.title}</h1>
                <p>${item.author}</p>
                <p>${item.date}</p>
                <p>${item.article.text}</p>
                <button class="delete" id="${item.id}">Delete</button>
            </li>`;
        }).join(" ");
    blogList.innerHTML = markup;
    return markup;
}