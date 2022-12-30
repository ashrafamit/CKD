import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import re

app = Flask(__name__)
model = pickle.load(open('./artifacts/ckd.pickle', 'rb'))

@app.route('/')
def home():
    return render_template('app.html')

@app.route('/predict',methods=['POST'])
def predict():
    int_features = [int(x) if x.find(".")<0 else float(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = prediction[0]

    if output==0:
        return render_template('app.html', ckd_prediction='Healthy'.format(output))
    else:
        return render_template('app.html', ckd_prediction='CKD'.format(output))


    

@app.route('/predict_api',methods=['POST'])
def predict_api():
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])

    output = prediction[0]
    return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True)