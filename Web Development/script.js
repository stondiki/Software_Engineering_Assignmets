function fb(y){
    this.y = y;
    var x = document.getElementById("dis");
    x.value = x.value + y;
}
function fequal(){
    var x = document.getElementById("dis");
    x.value = eval(x.value);
}
function fac(){
    var x = document.getElementById("dis");
    x.value = "";
}
function fdel(){
    var x = document.getElementById("dis");
    var str = x.value;
    var res = str.slice(0, str.length-1);
    x.value = res;
}
function fmod(){
    var x = document.getElementById("dis");
    x.value = x.value + "%";
}
function fsq(){
    var x = document.getElementById("dis");
    x.value = x.value * x.value;
}
function fsqrt(){
    var x = document.getElementById("dis");
    x.value = Math.sqrt(x.value);
}

function fshift(){
    var x = document.getElementById('sin');
    console.log(x.onClick);
    if(x.value == "sin"){
        x.value = "asin";
        x.onClick = "fasin()";
    }
    else if(x.value == "asin"){
        x.value = "sin";
        x.onClick = "fsin()";
    }
    
    var y = document.getElementById('cos');
    console.log(y.onClick);
    if(y.value == "cos"){
        y.value = "acos";
        y.onClick = "facos()";
    }
    else if(y.value == "acos"){
        y.value = "cos";
        y.onClick = "fcos()";
    }

    var z = document.getElementById('tan');
    console.log(z.onClick);
    if(z.value == "tan"){
        z.value = "atan";
        z.onClick = "fatan()";
    }
    else if(z.value == "atan"){
        z.value = "tan";
        z.onClick = "ftan()";
    }
}
function flog(){
    var x = document.getElementById("dis");
    x.value = Math.log10(x.value);
}
function ftan(){
    var x = document.getElementById("dis");
    var y = x.value * Math.PI / 180;
    var z = parseFloat(Math.tan(y)).toFixed(3);
    x.value = (z);
}
function fcos(){
    var x = document.getElementById("dis");
    var y = x.value * Math.PI / 180;
    var z = parseFloat(Math.cos(y)).toFixed(3);
    x.value = (z);
}
function fsin(){
    var x = document.getElementById("dis");
    var y = x.value * Math.PI / 180;
    var z = parseFloat(Math.sin(y)).toFixed(3);
    x.value = (z);
}

function fatan(){
    var x = document.getElementById("dis");
    var y = x.value * Math.PI / 180;
    var z = parseFloat(Math.atan(y)).toFixed(3);
    x.value = (z);
}
function facos(){
    var x = document.getElementById("dis");
    var y = x.value * Math.PI / 180;
    var z = parseFloat(Math.acos(y)).toFixed(3);
    x.value = (z);
}
function fasin(){
    var x = document.getElementById("dis");
    var y = x.value * Math.PI / 180;
    var z = parseFloat(Math.asin(y)).toFixed(3);
    x.value = (z);
}