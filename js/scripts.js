document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-flores');

    // Cargar datos guardados en localStorage al iniciar
    cargarDatosGuardados();

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const direccion = document.getElementById('direccion').value;
        const planValor = document.getElementById('plan').value;
        const planTexto = document.getElementById('plan').options[document.getElementById('plan').selectedIndex].text;
        const comentarios = document.getElementById('comentarios').value;

        if (planValor === "") {
            alert("Por favor, selecciona un arreglo floral.");
            return;
        }

        // Crear objeto con los datos del pedido
        const pedido = {
            nombre: nombre,
            direccion: direccion,
            tipoArreglo: planTexto,
            comentarios: comentarios,
            fecha: new Date().toLocaleString('es-CO')
        };

        // Guardar en localStorage
        guardarPedido(pedido);

        alert(`¡Gracias ${nombre}! Hemos recibido tu pedido de ${planTexto}. Prepararemos tu arreglo floral y lo entregaremos pronto.`);

        // Limpiar el formulario
        formulario.reset();
    });
});

// Función para guardar pedido en localStorage
function guardarPedido(pedido) {
    // Obtener pedidos anteriores o crear array vacío
    let pedidos = JSON.parse(localStorage.getItem('pedidosFlores')) || [];

    // Agregar el nuevo pedido
    pedidos.push(pedido);

    // Guardar en localStorage
    localStorage.setItem('pedidosFlores', JSON.stringify(pedidos));

    // También guardar el último pedido individualmente
    localStorage.setItem('ultimoPedido', JSON.stringify(pedido));

    console.log('Pedido guardado en localStorage:', pedido);
    console.log('Total de pedidos:', pedidos.length);
}

// Función para cargar datos guardados
function cargarDatosGuardados() {
    const pedidos = JSON.parse(localStorage.getItem('pedidosFlores'));
    if (pedidos && pedidos.length > 0) {
        console.log('Pedidos guardados encontrados:', pedidos.length);
        console.log('Último pedido:', pedidos[pedidos.length - 1]);
    }
}