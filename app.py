from flask import Flask, render_template
from movements import mru
from movements import mcu
from movements import mas
from movements import mruv
from movements import mcua
from movements import mp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


app.register_blueprint(mru.mru_bp, url_prefix='/mru')
#app.register_blueprint(mruv.mruv_bp, url_prefix='/mruv')
app.register_blueprint(mcu.mcu_bp, url_prefix='/mcu')
#app.register_blueprint(mcua.mcua_bp, url_prefix='/mcua')
app.register_blueprint(mas.mas_bp, url_prefix='/mas')
#app.register_blueprint(mp.mp_bp, url_prefix='/mp')
app.register_blueprint(mruv.mruv_bp, url_prefix='/mruv')
app.register_blueprint(mcua.mcua_bp, url_prefix='/mcua')
app.register_blueprint(mp.mp_bp, url_prefix='/mp')
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
