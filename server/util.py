import pickle
import json
import numpy as np

__data_columns = None
__model = None


def is_ckd(age,bp,sg,al,su, bgr, bu, sc, sod,pot,hemo, pcv, wc, rc, rbc, pc, pcc, ba, htn, dm, cad, appet, pe, ane):

    x = np.zeros(len(__data_columns))
    x[0] = age
    x[1] = bp
    x[2] = sg
    x[3] = al
    x[4] = su
    x[5] = bgr
    x[6] = bu
    x[7] = sc
    x[8] = sod
    x[9] = pot
    x[10] = hemo
    x[11] = pcv
    x[12] = wc
    x[13] = rc
    x[14] = rbc
    x[15] = pc
    x[16] = pcc
    x[17] = ba
    x[18] = htn
    x[19] = dm
    x[20] = cad
    x[21] = appet
    x[22] = pe
    x[23] = ane

    return __model.predict([x])[0]


def load_saved_artifacts():
    global __data_columns
    global __model

    print("loading saved artifacts...start")
    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']

    if __model is None:
        with open('./artifacts/ckd.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("loading saved artifacts...done")


def get_data_columns():
    return __data_columns


if __name__ == '__main__':
    load_saved_artifacts()
    # print(is_ckd(32, 4, 5, 0, 0, 64, 1, 8, 19, 24, 87, 13, 25, 34, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0))
    # print(is_ckd(32, 4, 5, 0, 0, 45, 1, 8, 19, 34, 67, 10, 31, 24, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0))
    # print(is_ckd(32, 4, 5, 0, 0, 45, 1, 8, 19, 34, 57, 9, 31, 24, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0))
    print(is_ckd(32, 4, 5, 0, 0, 64, 1, 8, 19, 24, 87, 17, 2, 34, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0))
    print(is_ckd(32, 4, 5, 0, 0, 64, 1, 8, 19, 24, 87, 13, 25, 34, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0))
               #age,bp,sg,al,su,bgr,bu,sc,sod,pot,hemo,pcv,wc,rc,rbc,pc,pcc,ba,htn,dm,cad,appet,pe,ane

    # 55
    # 4
    # 1
    # 3
    # 4
    # 141
    # 40
    # 14
    # 22
    # 20
    # 32
    # 18
    # 33
    # 26
    # 1
    # 1
    # 0
    # 0
    # 0
    # 1
    # 0
    # 1
    # 0
    # 1

