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
        optionsHtml = `
            <h2>Seleccione el valor a calcular (MRUV)</h2>
            <button onclick="showInputFields('MRUV', 'distancia')">Distancia (Δx)</button>
            <button onclick="showInputFields('MRUV', 'velocidad_final')">Velocidad Final (vf)</button>
            <button onclick="showInputFields('MRUV', 'aceleracion')">Aceleración (a)</button>
        `;
    } else if (type === 'UniformCircular') {
        optionsHtml = `
            <h2>Seleccione el valor a calcular (MCU)</h2>
            <button onclick="showInputFields('MCU', 'radio')">Radio (r)</button>
            <button onclick="showInputFields('MCU', 'frecuencia')">Frecuencia (f)</button>
            <button onclick="showInputFields('MCU', 'velocidad')">Velocidad (v)</button>
        `;
    } else if (type === 'AcceleratedCircular') {
        optionsHtml = `
            <h2>Seleccione el valor a calcular (MCUA)</h2>
            <button onclick="showInputFields('MCUA', 'velocidad_angular_final')">Velocidad Angular Final (ωf)</button>
            <button onclick="showInputFields('MCUA', 'posicion_angular')">Posición Angular (θ)</button>
            <button onclick="showInputFields('MCUA', 'aceleracion_angular')">Aceleración Angular (α)</button>
        `;
    } else if (type === 'SimpleHarmonic') {
        optionsHtml = `
            <h2>Seleccione el valor a calcular (MAS)</h2>
            <button onclick="showInputFields('MAS', 'frecuencia')">Frecuencia (f)</button>
            <button onclick="showInputFields('MAS', 'periodo')">Período (T)</button>
            <button onclick="showInputFields('MAS', 'angulo_velocidad')">Velocidad Angular (ω)</button>
        `;
    } else if (type === 'Parabolic') {
        optionsHtml = `
            <h2>Seleccione el valor a calcular (MP)</h2>
            <button onclick="showInputFields('MP', 'altura_maxima')">Altura Máxima (h)</button>
            <button onclick="showInputFields('MP', 'alcance_horizontal')">Alcance Horizontal (R)</button>
            <button onclick="showInputFields('MP', 'tiempo_vuelo')">Tiempo de Vuelo (t)</button>
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
        if (calculation === 'distancia') {
            fieldsHtml = `
                    <h2>Calcular Distancia (Δx)</h2>
                    <input type="number" id="vi" placeholder="Velocidad Inicial (vi) en m/s">
                    <input type="number" id="t" placeholder="Tiempo (t) en s">
                    <input type="number" id="a" placeholder="Aceleración (a) en m/s²">
                    <button onclick="calculate('MRUV', 'distancia')">Calcular</button>
                `;
        } else if (calculation === 'velocidad_final') {
            fieldsHtml = `
                    <h2>Calcular Velocidad Final (vf)</h2>
                    <input type="number" id="vi" placeholder="Velocidad Inicial (vi) en m/s">
                    <input type="number" id="t" placeholder="Tiempo (t) en s">
                    <input type="number" id="a" placeholder="Aceleración (a) en m/s²">
                    <button onclick="calculate('MRUV', 'velocidad_final')">Calcular</button>
                `;
        } else if (calculation === 'aceleracion') {
            fieldsHtml = `
                    <h2>Calcular Aceleración (a)</h2>
                    <input type="number" id="vi" placeholder="Velocidad Inicial (vi) en m/s">
                    <input type="number" id="vf" placeholder="Velocidad Final (vf) en m/s">
                    <input type="number" id="t" placeholder="Tiempo (t) en s">
                    <button onclick="calculate('MRUV', 'aceleracion')">Calcular</button>
                `;
        }
    } else if (type === 'MCU') {
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

    } else if (type === 'MCUA') {
        if (calculation === 'velocidad_angular_final') {
            fieldsHtml = `
                    <h2>Calcular Velocidad Angular Final (ωf)</h2>
                    <input type="number" id="vi" placeholder="Velocidad Angular Inicial (ωi) en rad/s">
                    <input type="number" id="t" placeholder="Tiempo (t) en s">
                    <input type="number" id="a" placeholder="Aceleración Angular (α) en rad/s²">
                    <button onclick="calculate('MCUA', 'velocidad_angular_final')">Calcular</button>
                `;
        } else if (calculation === 'posicion_angular') {
            fieldsHtml = `
                    <h2>Calcular Posición Angular (θ)</h2>
                    <input type="number" id="theta_i" placeholder="Posición Angular Inicial (θi) en rad">
                    <input type="number" id="t" placeholder="Tiempo (t) en s">
                    <input type="number" id="vi" placeholder="Velocidad Angular Inicial (ωi) en rad/s">
                    <input type="number" id="a" placeholder="Aceleración Angular (α) en rad/s²">
                    <button onclick="calculate('MCUA', 'posicion_angular')">Calcular</button>
                `;
        } else if (calculation === 'aceleracion_angular') {
            fieldsHtml = `
                    <h2>Calcular Aceleración Angular (α)</h2>
                    <input type="number" id="vi" placeholder="Velocidad Angular Inicial (ωi) en rad/s">
                    <input type="number" id="vf" placeholder="Velocidad Angular Final (ωf) en rad/s">
                    <input type="number" id="t" placeholder="Tiempo (t) en s">
                    <button onclick="calculate('MCUA', 'aceleracion_angular')">Calcular</button>
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
    } else if (type === 'MP') {
        if (calculation === 'altura_maxima') {
            fieldsHtml = `
            <h2>Calcular Altura Máxima (h)</h2>
            <input type="number" id="vi" placeholder="Velocidad Inicial (vi) en m/s">
            <input type="number" id="angulo" placeholder="Ángulo (θ) en grados">
            <button onclick="calculate('MP', 'altura_maxima')">Calcular</button>
        `;
        } else if (calculation === 'alcance_horizontal') {
            fieldsHtml = `
            <h2>Calcular Alcance Horizontal (R)</h2>
            <input type="number" id="vi" placeholder="Velocidad Inicial (vi) en m/s">
            <input type="number" id="angulo" placeholder="Ángulo (θ) en grados">
            <button onclick="calculate('MP', 'alcance_horizontal')">Calcular</button>
        `;
        } else if (calculation === 'tiempo_vuelo') {
            fieldsHtml = `
            <h2>Calcular Tiempo de Vuelo (t)</h2>
            <input type="number" id="vi" placeholder="Velocidad Inicial (vi) en m/s">
            <input type="number" id="angulo" placeholder="Ángulo (θ) en grados">
            <button onclick="calculate('MP', 'tiempo_vuelo')">Calcular</button>
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
        if (calculation === 'distancia') {
            data = {
                tipo_calculo: 'distancia',
                vi: document.getElementById('vi').value,
                t: document.getElementById('t').value,
                a: document.getElementById('a').value
            };
        } else if (calculation === 'velocidad_final') {
            data = {
                tipo_calculo: 'velocidad_final',
                vi: document.getElementById('vi').value,
                t: document.getElementById('t').value,
                a: document.getElementById('a').value
            };
        } else if (calculation === 'aceleracion') {
            data = {
                tipo_calculo: 'aceleracion',
                vi: document.getElementById('vi').value,
                vf: document.getElementById('vf').value,
                t: document.getElementById('t').value
            };
        }
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
    } else if (type === 'MCUA') {
        if (calculation === 'velocidad_angular_final') {
            data = {
                tipo_calculo: 'velocidad_angular_final',
                vi: document.getElementById('vi').value,
                t: document.getElementById('t').value,
                a: document.getElementById('a').value
            };
        } else if (calculation === 'posicion_angular') {
            data = {
                tipo_calculo: 'posicion_angular',
                theta_i: document.getElementById('theta_i').value,
                t: document.getElementById('t').value,
                vi: document.getElementById('vi').value,
                a: document.getElementById('a').value
            };
        } else if (calculation === 'aceleracion_angular') {
            data = {
                tipo_calculo: 'aceleracion_angular',
                vi: document.getElementById('vi').value,
                vf: document.getElementById('vf').value,
                t: document.getElementById('t').value
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
    } else if (type === 'MP') {
        if (calculation === 'altura_maxima' || calculation === 'alcance_horizontal' || calculation === 'tiempo_vuelo') {
            data = {
                tipo_calculo: calculation,
                vi: document.getElementById('vi').value,
                angulo: document.getElementById('angulo').value
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