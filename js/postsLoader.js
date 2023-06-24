const postsBlock = document.getElementById('posts')

const returnHTML = post => {
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
                ${post.text}
            </p>
        </div>
        <div class="footbar_post">
            <div class="comments">
                Комментариев: ${post.comments.length}
            </div>
            <button onclick="openPostPage(${post.id})">Развернуть пост</button>
        </div>
    `

    return html
}

const addPost = post => {
    const postElement = document.createElement('div')
    postElement.className = 'post'
    postElement.innerHTML = returnHTML(post)
    postsBlock.appendChild(postElement)
}

for (let i = 0; i < postsData.length; i++){
    addPost(postsData[i])
}