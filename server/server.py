from flask import Flask, request, jsonify
import util

from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route('/predict_cdk', methods=['GET', 'POST'])
def predict_cdk():
    age = int(request.form['age'])
    bp = int(request.form['bp'])
    sg = int(request.form['sg'])
    al = int(request.form['al'])
    su = int(request.form['su'])
    bgr = int(request.form['bgr'])
    bu = int(request.form['bu'])
    sc = int(request.form['sc'])
    sod = int(request.form['sod'])
    pot = int(request.form['pot'])
    hemo = int(request.form['hemo'])
    pcv = int(request.form['pcv'])
    wc = int(request.form['wc'])
    rc = int(request.form['rc'])
    rbc = int(request.form['rbc'])
    pc = int(request.form['pc'])
    pcc = int(request.form['pcc'])
    ba = int(request.form['ba'])
    htn = int(request.form['htn'])
    dm = int(request.form['dm'])
    cad = int(request.form['cad'])
    appet = int(request.form['appet'])
    pe = int(request.form['pe'])
    ane = int(request.form['ane'])

    response = jsonify({
        'estimated_disease': util.is_ckd(age, bp, sg, al, su, bgr, bu, sc, sod, pot, hemo, pcv, wc, rc, rbc, pc, pcc, ba, htn, dm, cad, appet, pe, ane)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == "__main__":
    print("Starting Python Flask Server For CKD Prediction...")
    util.load_saved_artifacts()
    app.run(debug=True)
    # app.run()
