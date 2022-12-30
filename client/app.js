function getsgValue() {
  var nominal = document.getElementsByName("sg");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getalValue() {
  var nominal = document.getElementsByName("al");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getsuValue() {
  var nominal = document.getElementsByName("su");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getrbcValue() {
  var nominal = document.getElementsByName("rbc");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getpcValue() {
  var nominal = document.getElementsByName("pc");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getpccValue() {
  var nominal = document.getElementsByName("pcc");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getbaValue() {
  var nominal = document.getElementsByName("ba");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function gethtnValue() {
  var nominal = document.getElementsByName("htn");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getdmValue() {
  var nominal = document.getElementsByName("dm");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getcadValue() {
  var nominal = document.getElementsByName("cad");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getappetValue() {
  var nominal = document.getElementsByName("appet");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getpeValue() {
  var nominal = document.getElementsByName("pe");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function getaneValue() {
  var nominal = document.getElementsByName("ane");
  for(var i in nominal) {
    if(nominal[i].checked) {
        return nominal[i].value;
    }
  }
  return -1; // Invalid Value
}

function onClickedCkdPrediction() {
  console.log("Estimate ckd button clicked");
  
  // var age = document.getElementById("age");
  // var bp = document.getElementById("bp");
  // var sg = getsgValue();
  // var al = getalValue();
  // var su = getsuValue();
  // var bgr = document.getElementById("bgr");
  // var bu = document.getElementById("bu");
  // var sc = document.getElementById("sc");
  // var sod = document.getElementById("sod");
  // var pot = document.getElementById("pot");
  // var hemo = document.getElementById("hemo");
  // var pcv = document.getElementById("pcv");
  // var wc = document.getElementById("wc");
  // var rc = document.getElementById("rc");
  // var rbc = getrbcValue();
  // var pc = getpcValue();
  // var pcc = getpccValue();
  // var ba = getbaValue();
  // var htn = gethtnValue();
  // var dm = getdmValue();
  // var cad = getcadValue();
  // var appet = getappetValue();
  // var pe = getpeValue();
  // var ane = getaneValue();
  var estCkd = document.getElementById("uiCkd");


  var url = "http://127.0.0.1:5000/predict_cdk"; //Use this if you are NOT using nginx which is first 7 tutorials
  // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  $.post(url, {
      // age: parseInt(age.value),
      // bp: parseInt(bp.value),
      // sg: sg,
      // al: al,
      // su: su,
      // bgr: parseInt(bgr.value),
      // bu: parseInt(bu.value),
      // sc: parseInt(sc.value),
      // sod: parseInt(sod.value),
      // pot: parseInt(pot.value),
      // hemo: parseInt(hemo.value),
      // pcv: parseInt(pcv.value),
      // wc: parseInt(wc.value),
      // rc: parseInt(rc.value),
      // rbc: rbc,
      // pc: pc,
      // pcc: pcc,
      // ba: ba,
      // htn: htn,
      // dm: dm,
      // cad: cad,
      // appet: appet,
      // pe: pe,
      // ane: ane

      age: 32,
      bp: 4,
      sg: 5,
      al: 0,
      su: 0,
      bgr: 64,
      bu: 1,
      sc: 8,
      sod: 19,
      pot: 24,
      hemo: 87,
      pcv: 13,
      wc: 25,
      rc: 34,
      rbc: 1,
      pc: 1,
      pcc: 0,
      ba: 0,
      htn: 0,
      dm: 0,
      cad: 0,
      appet: 0,
      pe: 0,
      ane: 0

  },function(data, status) {
      console.log(data.estimated_disease);
      estCkd.innerHTML = "<h2> hello" + data.estimated_disease.toString() + "</h2>";
      // console.log(parseInt(age.value));
      // console.log(parseInt(bp.value));
      // console.log(sg);
      // console.log(al);
      // console.log(su);
      // console.log(parseInt(bgr.value));
      // console.log(parseInt(bu.value));
      // console.log(parseInt(sc.value));
      // console.log(parseInt(sod.value));
      // console.log(parseInt(pot.value));
      // console.log(parseInt(hemo.value));
      // console.log(parseInt(pcv.value));
      // console.log(parseInt(wc.value));
      // console.log(parseInt(rc.value));
      // console.log(rbc);
      // console.log(pc);
      // console.log(pcc);
      // console.log(ba);
      // console.log(htn);
      // console.log(dm);
      // console.log(cad);
      // console.log(appet);
      // console.log(pe);
      // console.log(ane);
      console.log(status);
  });
}

function onPageLoad() {
  console.log( "document loaded" );
}

// window.onload = onPageLoad;
