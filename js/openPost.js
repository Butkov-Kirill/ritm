const POST = JSON.parse(localStorage.getItem("post"))
const postParrent = document.getElementById('post')

const renderHTML = post => {
    const html = `
        <div class="header_post">
        <div class="date">
            <div class="date_text">
                <p class="month">${months[post.date.month]}</p>
                <p class="number">${post.date.day}</p>
            </div>
        </div>
        <div class="name_post">
            ${post.name}
        </div>
        </div>
        <div class="content_post">
            <p class="text">
                ${post.allText}
            </p>
        </div>
    `

    return html
}

const createPost = post => {
    const html = renderHTML(post)
    //const postElement// = document.createElement('div');
    postParrent.innerHTML = html;
}

createPost(POST)