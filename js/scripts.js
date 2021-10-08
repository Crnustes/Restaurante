function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("toName").value,
        correo: document.getElementById("toEmail").value,
        message: document.getElementById("toAsunto").value,
        evento: document.getElementById("toService").value,
        telefono: document.getElementById("toNumber").value,
        comentario: document.getElementById("toComent").value,
    }

    emailjs.send('service_u3c243x', 'template_ss9ekej', tempParams)
        .then(function (res) {
            console.log("sucess", res.status);




        })
    alert('Muchas gracias!! nos contactaremos pronto');

}

$(document).ready(function () {

    $("#formulario").on("submit", function (event) {
        event.preventDefault();
        window.location.replace("compra.html");
    });
})
function sendReservas(params) {
    var tempParams1 = {
        from_name: document.getElementById("toNameR").value,
        correo: document.getElementById("toEmailR").value,
        evento: document.getElementById("toServiceR").value,
        telefono: document.getElementById("toNumberR").value,
        comentario: document.getElementById("toComentR").value,
        cantidad: document.getElementById("cantidadR").value,
        fecha: document.getElementById("fechaR").value,
    }

    emailjs.send('service_u3c243x', 'template_ss9ekej', tempParams1)
        .then(function (res) {
            console.log("sucess", res.status);
        })
    alert("Su reserva a sido enviada");

}

function sendDomicilio(params) {
    var tempParams2 = {
        from_name: document.getElementById("toNameD").value,
        correo: document.getElementById("toEmailD").value,
        telefono: document.getElementById("toNumberD").value,
        comentario: document.getElementById("toComentD").value,
        ciudad: document.getElementById("toCiudadD").value,
        barrio: document.getElementById("toBarrioD").value,
        direccion: document.getElementById("toDirD").value,
        metodoPago: document.getElementById("metodoPagoD").value,
        pedido: document.getElementById("toPedidoD").value,
    }

    emailjs.send('service_u3c243x', 'template_8gt3gxb', tempParams2)
        .then(function (res) {
            console.log("sucess", res.status);
        })
    alert('Hemos recibido su pedido');

}



