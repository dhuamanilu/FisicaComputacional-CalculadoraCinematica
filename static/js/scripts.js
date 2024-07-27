function showCalculationOptions(type) {
    const optionsContainer = document.getElementById('calculation-options');
    let optionsHtml = '';

    if (type === 'MRU') {
        optionsHtml = `
            <h2>Seleccione el valor a calcular (MRU)</h2>
            <button onclick="showInputFields('MRU', 'distancia')">Distancia (Δx)</button>
            <button onclick="showInputFields('MRU', 'velocidad')">Velocidad (v)</button>
            <button onclick="showInputFields('MRU', 'tiempo')">Tiempo (Δt)</button>
        `;
    } else if (type === 'MRUV') {
        //do
    } //falta los demas

    optionsContainer.innerHTML = optionsHtml;
    document.getElementById('input-fields').innerHTML = ''; //Limpiar los datos
}

function showInputFields(type, calculation) {
    const fieldsContainer = document.getElementById('input-fields');
    let fieldsHtml = '';

    if (type === 'MRU') {
        if (calculation === 'distancia') {
            fieldsHtml = `
                <h2>Calcular Distancia (Δx)</h2>
                <input type="number" id="v" placeholder="Velocidad (v)">
                <input type="number" id="t" placeholder="Tiempo (t)">
                <button onclick="calculate('MRU', 'distancia')">Calcular</button>
            `;
        } else if (calculation === 'velocidad') {
            fieldsHtml = `
                <h2>Calcular Velocidad (v)</h2>
                <input type="number" id="d" placeholder="Distancia (d)">
                <input type="number" id="t" placeholder="Tiempo (t)">
                <button onclick="calculate('MRU', 'velocidad')">Calcular</button>
            `;
        } else if (calculation === 'tiempo') {
            fieldsHtml = `
                <h2>Calcular Tiempo (Δt)</h2>
                <input type="number" id="d" placeholder="Distancia (d)">
                <input type="number" id="v" placeholder="Velocidad (v)">
                <button onclick="calculate('MRU', 'tiempo')">Calcular</button>
            `;
        }
    } 
    else if (type === 'MRUV') {
        //completar
    } 
    //completar los demas
    fieldsContainer.innerHTML = fieldsHtml;


}
function calculate(type, calculation) {
    let data = {};
    if (type === 'MRU') {
        if (calculation === 'distancia') {
            data = {
                tipo_calculo: 'distancia',
                v: document.getElementById('v').value,
                t: document.getElementById('t').value
            };
        } else if (calculation === 'velocidad') {
            data = {
                tipo_calculo: 'velocidad',
                d: document.getElementById('d').value,
                t: document.getElementById('t').value
            };
        } else if (calculation === 'tiempo') {
            data = {
                tipo_calculo: 'tiempo',
                d: document.getElementById('d').value,
                v: document.getElementById('v').value
            };
        }
    } else if (type === 'MRUV') {
        // Completar con los datos y cálculos correspondientes a MRUV
    } else if (type === 'MCU') {
        // Completar con los datos y cálculos correspondientes a MCU
    }
    // Completar con los demás tipos de movimientos

    let url = `/${type.toLowerCase()}/calculate`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const resultContainer = document.getElementById('result');
        if (data.error) {
            resultContainer.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
            resultContainer.innerHTML = `<p>Resultado: ${data.resultado}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}