from flask import Blueprint, request, jsonify

mcua_bp = Blueprint('mcua', __name__)

class NegativeValueError(Exception):
    pass

class MCUA:
    def __init__(self):
        pass

    def check_negative(self, value):
        if value < 0:
            raise NegativeValueError("El valor ingresado debe ser mayor a 0")

    def check_zero(self, value):
        if value == 0:
            raise ZeroDivisionError("El valor ingresado debe ser distinto de 0")

    def velocidad_angular_final(self, vi, t, a):
        self.check_negative(t)
        return vi + a * t, "rad/s"

    def posicion_angular(self, theta_i, t, vi, a):
        self.check_negative(t)
        return theta_i + vi * t + 0.5 * a * t ** 2, "radianes"

    def aceleracion_angular(self, vi, vf, t):
        self.check_negative(t)
        self.check_zero(t)
        return (vf - vi) / t, "rad/s²"

mcua = MCUA()

@mcua_bp.route('/calculate', methods=['POST'])
def calculate_mcua():
    data = request.json
    tipo_calculo = data['tipo_calculo']
    try:
        if tipo_calculo == "velocidad_angular_final":
            vi = float(data['vi'])
            t = float(data['t'])
            a = float(data['a'])
            resultado, unidad = mcua.velocidad_angular_final(vi, t, a)
        elif tipo_calculo == "posicion_angular":
            theta_i = float(data['theta_i'])
            t = float(data['t'])
            vi = float(data['vi'])
            a = float(data['a'])
            resultado, unidad = mcua.posicion_angular(theta_i, t, vi, a)
        elif tipo_calculo == "aceleracion_angular":
            vi = float(data['vi'])
            vf = float(data['vf'])
            t = float(data['t'])
            resultado, unidad = mcua.aceleracion_angular(vi, vf, t)
        return jsonify({"resultado": resultado, "unidad": unidad})
    except ValueError:
        return jsonify({"error": "Ingrese valores numéricos válidos"}), 400
    except NegativeValueError as e:
        return jsonify({"error": str(e)}), 400
    except ZeroDivisionError as e:
        return jsonify({"error": str(e)}), 400