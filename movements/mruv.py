# mruv.py
from flask import Blueprint, request, jsonify

mruv_bp = Blueprint('mruv', __name__)

class NegativeValueError(Exception):
    pass

class MRUV:
    def __init__(self):
        pass

    def check_negative(self, value):
        if value < 0:
            raise NegativeValueError("El valor ingresado debe ser mayor a 0")

    def check_zero(self, value):
        if value == 0:
            raise ZeroDivisionError("El valor ingresado debe ser distinto de 0")

    def distancia(self, vi, t, a):
        self.check_negative(t)
        return vi * t + 0.5 * a * t ** 2, "metros"

    def velocidad_final(self, vi, t, a):
        self.check_negative(t)
        return vi + a * t, "m/s"

    def aceleracion(self, vi, vf, t):
        self.check_negative(t)
        self.check_zero(t)
        return (vf - vi) / t, "m/s²"

mruv = MRUV()

@mruv_bp.route('/calculate', methods=['POST'])
def calculate_mruv():
    data = request.json
    tipo_calculo = data['tipo_calculo']
    try:
        if tipo_calculo == "distancia":
            vi = float(data['vi'])
            t = float(data['t'])
            a = float(data['a'])
            resultado, unidad = mruv.distancia(vi, t, a)
        elif tipo_calculo == "velocidad_final":
            vi = float(data['vi'])
            t = float(data['t'])
            a = float(data['a'])
            resultado, unidad = mruv.velocidad_final(vi, t, a)
        elif tipo_calculo == "aceleracion":
            vi = float(data['vi'])
            vf = float(data['vf'])
            t = float(data['t'])
            resultado, unidad = mruv.aceleracion(vi, vf, t)
        return jsonify({'resultado': f"{resultado} {unidad}"})
    except ValueError:
        return jsonify({"error": "Ingrese valores numéricos válidos"}), 400
    except NegativeValueError as e:
        return jsonify({"error": str(e)}), 400
    except ZeroDivisionError as e:
        return jsonify({"error": str(e)}), 400