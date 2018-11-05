function op(n){
    let a = document.getElementById('value1').value;
    let b = document.getElementById('value2').value;
    let o;
    let ans = document.getElementById('answer');
    let oper = document.getElementById('operation');
    if(n == "add"){
        c = parseInt(a) + parseInt(b);
        o = "+";
    }
    else if(n == "sub"){
        c = parseInt(a) - parseInt(b);
        o = "-";
    }
    else if(n == "mul"){
        c = a * b;
        o = "*";
    }
    else if(n == "div"){
        c = a / b;
        o = "/";
    }
    oper.innerHTML = o;
    ans.innerHTML = c;    
}