import './less/index.less'

// Your code goes here!


// 1- load
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready to go!'
    console.log(heading)

    // 2- copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })

    // 3- click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    // 4- dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })

    // 5- keydown
    window.addEventListener('keydown', evt => {
        if (evt.key == 6) {
            document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
        }
    })
}




// * [ ] Here are some event types you could try to use:
//   * [ ] `mouseover`
//   * [ ] `keydown`
//   * [ ] `wheel`
//   * [ ] `load`
//   * [ ] `focus`
//   * [ ] `resize`
//   * [ ] `scroll`
//   * [ ] `select`
//   * [ ] `dblclick`
//   * [ ] `drag / drop`