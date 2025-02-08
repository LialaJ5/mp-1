function plus() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let num3 = num1 + num2;

    document.getElementById("output").innerHTML = String(num3);
    if (num3 < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function minus() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let num3 = num1 - num2;

    document.getElementById("output").innerHTML = String(num3);
    if (num3 < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function multiply() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let num3 = num1 * num2;

    document.getElementById("output").innerHTML = String(num3);
    if (num3 < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function divide() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let num3 = num1 / num2;

    document.getElementById("output").innerHTML = String(num3);
    if (num3 < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function power() {
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);
    let num = num1;
    if (num2 === 0) {
        num = 1;
    } else {
        for (let i = 1; i < Math.abs(num2); i++) {
            num = num * num1;
        }
    }
    if (num2 < 0) {
        num = 1/num;
    }
    document.getElementById("output").innerHTML = String(num);
    if (num < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function erase() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
}