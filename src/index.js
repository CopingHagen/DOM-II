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