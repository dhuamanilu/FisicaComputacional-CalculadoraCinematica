from flask import Blueprint, request, jsonify
import math

mp_bp = Blueprint('mp', __name__)

class NegativeValueError(Exception):
    pass

class MP:
    def __init__(self):
        pass

    def check_negative(self, value):
        if value < 0:
            raise NegativeValueError("El valor ingresado debe ser mayor a 0")

    def check_zero(self, value):
        if value == 0:
            raise ZeroDivisionError("El valor ingresado debe ser distinto de 0")

    def altura_maxima(self, vi, angulo):
        self.check_negative(vi)
        angulo_rad = math.radians(angulo)
        return (vi**2 * math.sin(angulo_rad)**2) / (2 * 9.81), "metros"

    def alcance_horizontal(self, vi, angulo):
        self.check_negative(vi)
        angulo_rad = math.radians(angulo)
        return (vi**2 * math.sin(2*angulo_rad)) / 9.81, "metros"

    def tiempo_vuelo(self, vi, angulo):
        self.check_negative(vi)
        angulo_rad = math.radians(angulo)
        return (2 * vi * math.sin(angulo_rad)) / 9.81, "segundos"

mp = MP()

@mp_bp.route('/calculate', methods=['POST'])
def calculate_mp():
    data = request.json
    tipo_calculo = data['tipo_calculo']
    try:
        if tipo_calculo == "altura_maxima":
            vi = float(data['vi'])
            angulo = float(data['angulo'])
            resultado, unidad = mp.altura_maxima(vi, angulo)
        elif tipo_calculo == "alcance_horizontal":
            vi = float(data['vi'])
            angulo = float(data['angulo'])
            resultado, unidad = mp.alcance_horizontal(vi, angulo)
        elif tipo_calculo == "tiempo_vuelo":
            vi = float(data['vi'])
            angulo = float(data['angulo'])
            resultado, unidad = mp.tiempo_vuelo(vi, angulo)
        return jsonify({"resultado": resultado, "unidad": unidad})
    except ValueError:
        return jsonify({"error": "Ingrese valores numéricos válidos"}), 400
    except NegativeValueError as e:
        return jsonify({"error": str(e)}), 400
    except ZeroDivisionError as e:
        return jsonify({"error": str(e)}), 400