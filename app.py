from flask import Flask, render_template
from movements import mru

#(el resto)from movements import mruv, circular, accelerated_circular, simple_harmonic, parabolic

app = Flask(__name__)

app.register_blueprint(mru.mru_bp, url_prefix='/mru')
#app.register_blueprint(mruv.mruv_bp, url_prefix='/mruv')
#app.register_blueprint(circular.circular_bp, url_prefix='/circular')
#app.register_blueprint(accelerated_circular.accelerated_circular_bp, url_prefix='/accelerated_circular')
#app.register_blueprint(simple_harmonic.simple_harmonic_bp, url_prefix='/simple_harmonic')
#app.register_blueprint(parabolic.parabolic_bp, url_prefix='/parabolic')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
