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
    // 6- mousemove
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY} = evt
        // console.log(`mouse is at ${clientX}, ${clientY}`)
    })
    // 7- mouseenter
    // 8- mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        })
    // 9- nav links mouse enter
    // 10- nav links mouse leave
    const navigation = document.querySelectorAll('.nav-link')
    for (let navLinks of navigation) {
        navLinks.addEventListener('mouseenter', () => {
            navLinks.style.fontWeight = 'bold'
        })
        navLinks.addEventListener('mouseleave', () => {
            navLinks.style.fontWeight = 'initial'
        })

    }
    // 10-   
    }

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