const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e) {
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.imagen').src;
    const itemCant = item.querySelector('.qty').value;

    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: itemCant
    }

    addItemCarrito(newItem)

}

function addItemCarrito(newItem) {
    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito() {
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
        
            <th scope="row">1</td>
            <td class="table__productos">
                <img src= ${item.img}>
                <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__precio">${item.precio}</td>
            <td class="table__cantidad">
                <input type="number" min="1" value=${item.cantidad}>
                <button class="delete btn btn-danget">X</button>
            </td>        
            `

        tr.innerHTML = Content;
        tbody.append(tr)
    })
}