const search = query => {
    const searchUrl = `https://www.yandex.ru/search/?text=${query}`
    window.open(searchUrl, '_blank')
}