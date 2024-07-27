from flask import Blueprint, request, jsonify

mcu_bp = Blueprint('mcu', __name__)

class MCU:
    def __init__(self):
        pass

    def check_negative(self, value):
        if value < 0:
            raise ValueError("El valor ingresado debe ser mayor a 0")

    def check_zero(self, value):
        if value == 0:
            raise ZeroDivisionError("El valor ingresado debe ser distinto de 0")

    def radio(self, v, f):
        self.check_negative(f)
        self.check_zero(f)
        return v / (2 * 3.141592653589793 * f), "metros"

    def frecuencia(self, v, r):
        self.check_negative(r)
        self.check_zero(r)
        return v / (2 * 3.141592653589793 * r), "Hz"

    def velocidad(self, r, f):
        self.check_negative(r)
        self.check_negative(f)
        return 2 * 3.141592653589793 * r * f, "metros/segundo"

mcu = MCU()

@mcu_bp.route('/calculate', methods=['POST'])
def calculate_mcu():
    data = request.json
    tipo_calculo = data['tipo_calculo']
    try:
        if tipo_calculo == "radio":
            v = float(data['v'])
            f = float(data['f'])
            resultado, unidad = mcu.radio(v, f)
        elif tipo_calculo == "frecuencia":
            v = float(data['v'])
            r = float(data['r'])
            resultado, unidad = mcu.frecuencia(v, r)
        elif tipo_calculo == "velocidad":
            r = float(data['r'])
            f = float(data['f'])
            resultado, unidad = mcu.velocidad(r, f)
        return jsonify({'resultado': f"{resultado} {unidad}"})
    except ValueError:
        return jsonify({'error': 'Ingrese valores numéricos válidos'})
    except ZeroDivisionError as e:
        return jsonify({'error': str(e)})

