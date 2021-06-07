// Your code goes here
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`

const mouseOver = document.getElementsByClassName('nav-link')
mouseOver.addEventListener('mouseover', (event) => {
    alert(`Mouse over link!`)
})

window.addEventListener('load', (event) => {
    alert(`Page loaded.`)
})

window.addEventListener('keydown', (event) => {
    alert(`You pressed the ` + event.key + ` key`)
})

window.addEventListener('wheel', (event) => {
    console.log(`Scrolling!`)
})

const textContent = document.getElementsByClassName('text-content')
textContent.addEventListener('hover', (event) => {
    textContent.style.color = 'green'
})

const destination = document.querySelectorAll('.destination')
destination.addEventListener('doubleclick', (event) => {
    destination.style.backgroundColor = 'orange'
})

const image = document.querySelectorAll('img')
image.addEventListener('mouseenter', (event) => {
    image.style.width = '75%'
})

