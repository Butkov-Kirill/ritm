const openPostPage = postId => {
    const post = postsData[postId]

    localStorage.setItem("post", JSON.stringify(post))

    window.location = `../pages/post.html`
}