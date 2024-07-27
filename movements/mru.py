from flask import Blueprint, request, jsonify

mru_bp = Blueprint('mru', __name__)

class MRU:
    def __init__(self):
        pass

    def check_negative(self, value):
        if value < 0:
            raise ValueError("El valor ingresado debe ser mayor a 0")

    def check_zero(self, value):
        if value == 0:
            raise ZeroDivisionError("El valor ingresado debe ser distinto de 0")

    def distancia(self, v, t):
        self.check_negative(t)
        return v * t, "metros"

    def velocidad(self, d, t):
        self.check_negative(t)
        self.check_zero(t)
        return d / t, "metros/segundo"

    def tiempo(self, d, v):
        self.check_zero(v)
        return abs(d / v), "segundos"

mru = MRU()

@mru_bp.route('/calculate', methods=['POST'])
def calculate_mru():
    data = request.json
    tipo_calculo = data['tipo_calculo']
    try:
        if tipo_calculo == "distancia":
            v = float(data['v'])
            t = float(data['t'])
            resultado, unidad = mru.distancia(v, t)
        elif tipo_calculo == "velocidad":
            d = float(data['d'])
            t = float(data['t'])
            resultado, unidad = mru.velocidad(d, t)
        elif tipo_calculo == "tiempo":
            d = float(data['d'])
            v = float(data['v'])
            resultado, unidad = mru.tiempo(d, v)
        return jsonify({'resultado': f"{resultado} {unidad}"})
    except ValueError:
        return jsonify({'error': 'Ingrese valores numéricos válidos'})
    except ZeroDivisionError as e:
        return jsonify({'error': str(e)})
