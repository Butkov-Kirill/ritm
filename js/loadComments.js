const commentsBlock = document.getElementById('comments')

const createHTML = comment => {
    const html = `
        <h3 class="username">${comment.name}</h3>
        <p class="text">${comment.text}</p>
    `

    return html
}

const createComment = comment => {
    const commentEllement = document.createElement('div')
    commentEllement.className = 'comment'
    commentEllement.innerHTML = createHTML(comment)
    commentsBlock.appendChild(commentEllement)
}

for (let i = 0; i < POST.comments.length; i++){
    createComment(POST.comments[i])
}