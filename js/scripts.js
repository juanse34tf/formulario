document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-flores');

    formulario.addEventListener('submit', function(evento) {
       
        evento.preventDefault();

        
        const nombre = document.getElementById('nombre').value;
        const plan = document.getElementById('plan').options[document.getElementById('plan').selectedIndex].text;

     
        if (document.getElementById('plan').value === "") {
            alert("Por favor, selecciona un arreglo floral.");
            return;
        }

       
        alert(`¡Gracias ${nombre}! Hemos recibido tu pedido de ${plan}. Prepararemos tu arreglo floral y lo entregaremos pronto.`);
        
        // Limpiar el formulario
        formulario.reset();
    });
});