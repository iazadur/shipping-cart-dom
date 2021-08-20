const div1 = document.getElementById('first')
const div2 = document.getElementById('second')
const div3 = document.getElementById('third')

const img = document.getElementById('art')

const description = document.getElementById('desc')
const price = document.getElementById('price')

const free = document.getElementById('free')
const express = document.getElementById('express')

const total = document.getElementById('total')
const shipping =  document.getElementById('shipping')

div1.addEventListener('click', function () {
    img.src = 'images/1.jpg'
    description.innerText = 'first - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?'
    price.innerText = '750'
    total.innerText = updateTotal()
})
div2.addEventListener('click', function () {
    img.src = 'images/2.jpg'
    description.innerText = 'second - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?'
    price.innerText = '650'
    total.innerText = updateTotal()

})
div3.addEventListener('click', function () {
    img.src = 'images/3.jpg'
    description.innerText = 'thired - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?'
    price.innerText = '550'
    total.innerText = updateTotal()

})

free.addEventListener('click', function () {
    document.getElementById('shipping').innerText = 5
})
express.addEventListener('click', function () {
    document.getElementById('shipping').innerText = 30
})

function updateTotal() {
    return parseFloat(price.innerText) + parseFloat(shipping.innerText)
}