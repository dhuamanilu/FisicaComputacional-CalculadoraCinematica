from flask import Blueprint, request, jsonify

mas_bp = Blueprint('mas', __name__)

class MAS:
    def __init__(self):
        pass

    def check_negative(self, value):
        if value < 0:
            raise ValueError("El valor ingresado debe ser mayor a 0")

    def check_zero(self, value):
        if value == 0:
            raise ZeroDivisionError("El valor ingresado debe ser distinto de 0")

    def frecuencia(self, w):
        self.check_negative(w)
        return w / (2 * 3.141592653589793), "Hz"

    def periodo(self, f):
        self.check_negative(f)
        self.check_zero(f)
        return 1 / f, "segundos"

    def angulo_velocidad(self, f):
        self.check_negative(f)
        self.check_zero(f)
        return 2 * 3.141592653589793 * f, "rad/segundo"

mas = MAS()

@mas_bp.route('/calculate', methods=['POST'])
def calculate_mas():
    data = request.json
    tipo_calculo = data['tipo_calculo']
    try:
        if tipo_calculo == "frecuencia":
            w = float(data['w'])
            resultado, unidad = mas.frecuencia(w)
        elif tipo_calculo == "periodo":
            f = float(data['f'])
            resultado, unidad = mas.periodo(f)
        elif tipo_calculo == "angulo_velocidad":
            f = float(data['f'])
            resultado, unidad = mas.angulo_velocidad(f)
        return jsonify({'resultado': f"{resultado} {unidad}"})
    except ValueError:
        return jsonify({'error': 'Ingrese valores numéricos válidos'})
    except ZeroDivisionError as e:
        return jsonify({'error': str(e)})
