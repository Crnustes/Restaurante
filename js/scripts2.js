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
    const itemImg = item.querySelector('.card-img-top').src;
    const itemCant = item.querySelector('.qty').value;

    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: itemCant
    }

    addItemCarrito(newItem)
    alert("Agregaste un nuevo producto")
}


function addItemCarrito(newItem) {

    carrito.push(newItem)

    renderCarrito()
}


function renderCarrito() {
    tbody.innerHTML = ('')
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
        tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
}

function CarritoTotal() {
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        Total = Total + precio * item.cantidad
    })

    itemCartTotal.innerHTML = `Total $${Total}`
    addLocalStorage()
}

function removeItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].title.trim() === title.trim()) {
            carrito.splice(i, 1)
        }
    }

    const alert = document.querySelector('.remove')

    setTimeout(function() {
        alert.classList.add('remove')
    }, 2000)
    alert.classList.remove('remove')

    tr.remove()
    CarritoTotal()
}

function sumaCantidad(e) {
    const sumaInput = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        if (item.title.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
        }
    })
}

function addLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function() {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
        carrito = storage;
        renderCarrito()
    }
}

function sendDomicilio(params) {
    HEAD
    var tempParams2 = {
        from_name: document.getElementById("toNameD").value,
        correo: document.getElementById("toEmailD").value,
        telefono: document.getElementById("toNumberD").value,
        comentario: document.getElementById("toComentD").value,
        ciudad: document.getElementById("toCiudadD").value,
        barrio: document.getElementById("toBarrioD").value,
        direccion: document.getElementById("toDirD").value,
        metodoPago: document.getElementById("metodoPagoD").value,
        pedido: document.getElementById("toPedidoD").innerHTML,
    }

    emailjs.send('service_u3c243x', 'template_8gt3gxb', tempParams2)
        .then(function(res) {
            console.log("sucess", res.status);
        })
    alert('Hemos recibido su pedido');

    var tempParams2 = {
        from_name: document.getElementById("toNameD").value,
        correo: document.getElementById("toEmailD").value,
        telefono: document.getElementById("toNumberD").value,
        comentario: document.getElementById("toComentD").value,
        ciudad: document.getElementById("toCiudadD").value,
        barrio: document.getElementById("toBarrioD").value,
        direccion: document.getElementById("toDirD").value,
        metodoPago: document.getElementById("metodoPagoD").value,
        pedido: document.getElementById("toPedidoD").innerHTML,
    }

    emailjs.send('service_u3c243x', 'template_8gt3gxb', tempParams2)
        .then(function(res) {
            console.log("sucess", res.status);
        })
    alert('Hemos recibido su pedido');

}