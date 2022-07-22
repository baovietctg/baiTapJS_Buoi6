/**
 * Bài tập 1 - tím số nguyên dương n nhỏ nhất sao cho:
 * 1 + 2 + ... + n > 10.000
 */
function timSo(){
    var sum = 0;
    for (var i = 0; i < 10000; i++) {
        if (sum < 10000){
            sum += i;
            document.getElementById("txtResultbai1").innerHTML = "Số nguyên dương nhỏ nhất là: " + i;
        }
    }
}
timSo();

/**
 * Bài tập 2: nhập só x và số n, tính tổng: S(n) = x + x^2 + x^3 + ... + x^n
 */

function tinhSn(){
    var x = Number(document.getElementById("soX").value);
    var n = Number(document.getElementById("soN").value);
    var sum = 0;
    for (var i = 1; i < n+1; i++) {
        sum = sum + Math.pow(x,i)
        console.log(sum)
    }
    document.getElementById("txtResultbai2").innerHTML = "Tổng: " + sum;
}
document.getElementById("tinhBai2").onclick = tinhSn;

/**
 * Bài tập 3: nhập só n, tính n!
 */

function tinhGiaiThua(){
    var n = Number(document.getElementById("soN2").value);
    var tich = 1;
    for (let i = 2; i < n+1; i++) {
        tich = tich * i;
        console.log(tich);
        document.getElementById("txtResultbai3").innerHTML = n + "! = " + tich;

    }
}
document.getElementById("tinhBai3").onclick = tinhGiaiThua;

/**
 * Bài tập 4: tạo Div
 */

function taoDiv(){
    var content = "";
    // var chan = document.getElementById("div").style.Background.Red;
    // var le = document.getElementById("div").style.Background.Blue;

    for (let i = 1; i < 11; i++){
        if(i % 2 == 0){
            content = '<div style="background:red; margin: 5px; padding:5px; color:#FFF">' + content + '</div>';
        }else{
            content = '<div style="background:blue; margin: 5px; padding:5px; color:#FFF">' + content + '</div>';
        }
    }
    document.getElementById("txtResultbai4").innerHTML = content;
}
document.getElementById("tinhBai4").onclick = taoDiv;
