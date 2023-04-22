//Khối 1 : Input
//số ngày và số lương
//Khối 2 :
//+B1: Tạo hàm, gắn giá trị vào hàm, gắn hàm vào button
//+B2: Trong hàm tạo công thức tính <br>+totalLUONG = numDay * numLuong
//Khối 3 : Output
//Tiền lương 
function calcLUONG() {
    var numDay = document.getElementById("inputDay").value;
    var numLuong = document.getElementById("inputLuong").value;
    console.log(numDay, numLuong);

    var totalLUONG = numDay * numLuong;

    console.log(totalLUONG);

    document.getElementById("txtLuong").innerHTML = "Lương:" + totalLUONG.toLocaleString();
}

document.getElementById("btnCalc").onclick = calcLUONG;

//Khối 1 : Input
//Nhập vào 5 số num1,num2,num3,num4,num5
//Khối 2 :
//+B1: Tạo hàm, gắn hàm vào button
//+B2: Trong hàm tạo công thức tính gttb = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5
//Khối 3 : Output
//Giá trị trung bình 
function calcTrungBinh() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;

    console.log(num1 + num2 + num3 + num4 + num5);

    var gttb = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;
    console.log(gttb);

    document.getElementById("txtTB").innerHTML = "Giá trị trung bình:" + gttb;
}
document.getElementById("btnTB").onclick = calcTrungBinh;

//Khối 1 : Input
// nhập vào số tiền numMoney
//Khối 2 :
//+B1: Tạo hàm, gắn hàm vào button
//+B2: Trong hàm tạo công thức tính swap = (Number (numMoney) * 23500)
//Khối 3 : Output
//Tiền quy đổi 
function swapMoney(){
    var numMoney = document.getElementById("usd").value;
    console.log(num1);
    var swap = (Number (numMoney) * 23500);
    console.log(swap);
    document.getElementById("txtCurrency").innerHTML = "Tiên quy đổi: " + swap.toLocaleString() +"VNĐ";
}
document.getElementById("btnCurrency").onclick = swapMoney;

//Khối 1 : Input
//nhập vào chiều dài , chiều rộng
//Khối 2 :
//+B1: Tạo hàm, gắn hàm vào button
//+B2: Trong hàm tạo công thức tính 
//DT = dai * rong
//CV = (Number(dai) + Number(rong))*2
//Khối 3 : Output
//Diện tích, chu vi
function claclDTCV(){
    var rong = document.getElementById("width").value;
    var dai = document.getElementById("height").value;
    console.log(rong, dai);
    
    var CV = (Number(dai) + Number(rong))*2;
    var DT = dai * rong;

    console.log(CV,DT);
    document.getElementById("txtCal").innerHTML = "Chu vi:" + CV +"-Diện Tích :" +DT;
}
document.getElementById("btnCal").onclick = claclDTCV;

//Khối 1 : Input
//số nguyên dương number có 2 chữ số
//Khối 2 :
//+B1: Tạo hàm, gắn hàm vào button
//+B2:tách số hàng chục theo công thức ten=Math.floor(number/10)
//+B3:tách số hàng đơn vị theo công thức unit= number%10
//+B2: Trong hàm tạo công thức tính sum = ten + unit
//Khối 3 : Output
//Tổng 2 đối số 
function calcSum(){
    var number = document.getElementById("number").value;
    console.log(number);
    var ten = Math.floor(number/10);
    var unit = number %10;
    // console.log(ten,unit);
    var sum = ten + unit;
    console.log(sum);
    document.getElementById("txtSum").innerHTML = "Tổng hai số là :" +sum;
}
document.getElementById("btnSum").onclick = calcSum;

function reset(){
    document.getElementById("txtLuong").value;
    console.log(txtLuong);
    document.getElementById("txtLuong").innerHTML = "";
}
document.getElementById("btnReset1").onclick = reset;

function reset2(){
    document.getElementById("txtTB").value;
    console.log(txtTB);
    document.getElementById("txtTB").innerHTML = "";
}
document.getElementById("btnReset2").onclick = reset2;

function reset3(){
    document.getElementById("txtCurrency").value;
    console.log(txtCurrency);
    document.getElementById("txtCurrency").innerHTML = "";
}
document.getElementById("btnReset3").onclick = reset3;

function reset4(){
    document.getElementById("txtCal").value;
    console.log(txtCal);
    document.getElementById("txtCal").innerHTML = "";

}
document.getElementById("btnReset4").onclick = reset4;

function reset5(){
    document.getElementById("txtSum").value;
    console.log(txtSum);
    document.getElementById("txtSum").innerHTML = "";
}
document.getElementById("btnReset5").onclick = reset5;

