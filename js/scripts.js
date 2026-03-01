document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-flores');

    formulario.addEventListener('submit', function(evento) {
        // Prevenir que la página se recargue al enviar el formulario
        evento.preventDefault();

        // Capturar los valores ingresados
        const nombre = document.getElementById('nombre').value;
        const plan = document.getElementById('plan').options[document.getElementById('plan').selectedIndex].text;

        // Validar que se haya seleccionado un arreglo
        if (document.getElementById('plan').value === "") {
            alert("Por favor, selecciona un arreglo floral.");
            return;
        }

        // Mostrar un mensaje de éxito simulando el envío a un servidor
        alert(`¡Gracias ${nombre}! Hemos recibido tu pedido de ${plan}. Prepararemos tu arreglo floral y lo entregaremos pronto.`);
        
        // Limpiar el formulario
        formulario.reset();
    });
});