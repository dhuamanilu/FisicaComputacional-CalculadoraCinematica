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
    } else if (type === 'UniformCircular') {
        optionsHtml = `
            <h2>Seleccione el valor a calcular (MCU)</h2>
            <button onclick="showInputFields('MCU', 'radio')">Radio (r)</button>
            <button onclick="showInputFields('MCU', 'frecuencia')">Frecuencia (f)</button>
            <button onclick="showInputFields('MCU', 'velocidad')">Velocidad (v)</button>
        `;
    } else if (type === 'SimpleHarmonic') {
        optionsHtml = `
            <h2>Seleccione el valor a calcular (MAS)</h2>
            <button onclick="showInputFields('MAS', 'frecuencia')">Frecuencia (f)</button>
            <button onclick="showInputFields('MAS', 'periodo')">Período (T)</button>
            <button onclick="showInputFields('MAS', 'angulo_velocidad')">Velocidad Angular (ω)</button>
        `;
    } 

    optionsContainer.innerHTML = optionsHtml;
    document.getElementById('input-fields').innerHTML = ''; //Limpiar los datos
    document.getElementById('result').innerHTML = ''; // Limpiar el resultado

}

function showInputFields(type, calculation) {
    const fieldsContainer = document.getElementById('input-fields');
    let fieldsHtml = '';

    if (type === 'MRU') {
        if (calculation === 'distancia') {
            fieldsHtml = `
                <h2>Calcular Distancia (Δx) en metros</h2>
                <input type="number" id="v" placeholder="Velocidad (v) en mtr/seg">
                <input type="number" id="t" placeholder="Tiempo (t) en seg">
                <button onclick="calculate('MRU', 'distancia')">Calcular</button>
            `;
        } else if (calculation === 'velocidad') {
            fieldsHtml = `
                <h2>Calcular Velocidad (v)</h2>
                <input type="number" id="d" placeholder="Distancia (d) en mtr">
                <input type="number" id="t" placeholder="Tiempo (t) en seg">
                <button onclick="calculate('MRU', 'velocidad')">Calcular</button>
            `;
        } else if (calculation === 'tiempo') {
            fieldsHtml = `
                <h2>Calcular Tiempo (Δt)</h2>
                <input type="number" id="d" placeholder="Distancia (d) en mtr">
                <input type="number" id="v" placeholder="Velocidad (v) en mtr/seg">
                <button onclick="calculate('MRU', 'tiempo')">Calcular</button>
            `;
        }
    } else if (type === 'MRUV') {
        //completar
    } else if (type === 'MCU'){
        if (calculation === 'radio') {
            fieldsHtml = `
                <h2>Calcular Radio (r)</h2>
                <input type="number" id="v" placeholder="Velocidad (v) en mtr/seg">
                <input type="number" id="f" placeholder="Frecuencia (f) en Hz">
                <button onclick="calculate('MCU', 'radio')">Calcular</button>
            `;
        } else if (calculation === 'frecuencia') {
            fieldsHtml = `
                <h2>Calcular Frecuencia (f)</h2>
                <input type="number" id="v" placeholder="Velocidad (v) en mtr/seg">
                <input type="number" id="r" placeholder="Radio (r) en mtr">
                <button onclick="calculate('MCU', 'frecuencia')">Calcular</button>
            `;
        } else if (calculation === 'velocidad') {
            fieldsHtml = `
                <h2>Calcular Velocidad (v)</h2>
                <input type="number" id="r" placeholder="Radio (r)en mtr">
                <input type="number" id="f" placeholder="Frecuencia (f) en Hz">
                <button onclick="calculate('MCU', 'velocidad')">Calcular</button>
            `;
        }
    } else if (type === 'MAS') {
        if (calculation === 'frecuencia') {
            fieldsHtml = `
                <h2>Calcular Frecuencia (f)</h2>
                <input type="number" id="w" placeholder="Velocidad Angular (ω) en rad/seg">
                <button onclick="calculate('MAS', 'frecuencia')">Calcular</button>
            `;
        } else if (calculation === 'periodo') {
            fieldsHtml = `
                <h2>Calcular Período (T)</h2>
                <input type="number" id="f" placeholder="Frecuencia (f) en Hz">
                <button onclick="calculate('MAS', 'periodo')">Calcular</button>
            `;
        } else if (calculation === 'angulo_velocidad') {
            fieldsHtml = `
                <h2>Calcular Velocidad Angular (ω)</h2>
                <input type="number" id="f" placeholder="Frecuencia (f) en Hz">
                <button onclick="calculate('MAS', 'angulo_velocidad')">Calcular</button>
            `;
        }
    }
    fieldsContainer.innerHTML = fieldsHtml;
    document.getElementById('result').innerHTML = ''; // Limpiar el resultado


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
        if (calculation === 'radio') {
            data = {
                tipo_calculo: 'radio',
                v: document.getElementById('v').value,
                f: document.getElementById('f').value
            };
        } else if (calculation === 'frecuencia') {
            data = {
                tipo_calculo: 'frecuencia',
                v: document.getElementById('v').value,
                r: document.getElementById('r').value
            };
        } else if (calculation === 'velocidad') {
            data = {
                tipo_calculo: 'velocidad',
                r: document.getElementById('r').value,
                f: document.getElementById('f').value
            };
        }
    } else if (type === 'MAS') {
        if (calculation === 'frecuencia') {
            data = {
                tipo_calculo: 'frecuencia',
                w: document.getElementById('w').value
            };
        } else if (calculation === 'periodo') {
            data = {
                tipo_calculo: 'periodo',
                f: document.getElementById('f').value
            };
        } else if (calculation === 'angulo_velocidad') {
            data = {
                tipo_calculo: 'angulo_velocidad',
                f: document.getElementById('f').value
            };
        }
    } 

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